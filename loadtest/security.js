import http from 'k6/http'
import { check, group } from 'k6'

const BASE_URL = __ENV.BASE_URL || 'https://starsciencelab.com'

export const options = {
  vus: 1,
  iterations: 1,
}

function checkStatusCode(res, expected) {
  check(res, { [`status is ${expected}`]: (r) => r.status === expected })
}

export default function () {
  group('Security Tests', () => {
    // SQL Injection attempts
    const sqlPayloads = ["' OR '1'='1", "'; DROP TABLE users; --", "' UNION SELECT * FROM users--"]
    for (const payload of sqlPayloads) {
      const res = http.post(`${BASE_URL}/api/contact`, JSON.stringify({
        firstName: payload, lastName: 'Test', email: 'test@test.com', message: payload,
      }), { headers: { 'Content-Type': 'application/json' } })
      checkStatusCode(res, 200)
    }

    // XSS attempts
    const xssPayloads = ['<script>alert(1)</script>', '<img onerror=alert(1) src=x>', '"><script>alert(1)</script>']
    for (const payload of xssPayloads) {
      const res = http.post(`${BASE_URL}/api/contact`, JSON.stringify({
        firstName: payload, lastName: 'Test', email: 'test@test.com', message: payload,
      }), { headers: { 'Content-Type': 'application/json' } })
      checkStatusCode(res, 200)
    }

    // Path traversal
    const paths = ['/../../../etc/passwd', '/..%2f..%2f..%2fetc/passwd', '/.env']
    for (const path of paths) {
      const res = http.get(`${BASE_URL}${path}`)
      check(res, { 'no sensitive data leak': (r) => !r.body.includes('root:x:') && !r.body.includes('DATABASE_URL') })
    }

    // Rate limiting
    group('Rate Limiting', () => {
      let blocked = false
      for (let i = 0; i < 20; i++) {
        const res = http.post(`${BASE_URL}/api/contact`, JSON.stringify({
          firstName: 'Test', lastName: 'User', email: 'test@test.com', message: 'test',
        }), { headers: { 'Content-Type': 'application/json' } })
        if (res.status === 429) { blocked = true; break }
      }
      check(blocked, { 'rate limit blocks after 429': (v) => v === true })
    })

    // Method not allowed
    const methods = ['PUT', 'DELETE', 'PATCH']
    for (const method of methods) {
      const res = http.request(method, `${BASE_URL}/api/contact`, null, { headers: { 'Content-Type': 'application/json' } })
      check(res, { [`${method} returns 405`]: (r) => r.status === 405 })
    }
  })
}
