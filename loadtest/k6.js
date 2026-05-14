import http from 'k6/http'
import { check, sleep, group } from 'k6'
import { Rate, Trend } from 'k6/metrics'

const BASE_URL = __ENV.BASE_URL || 'https://starsciencelab.com'

const errorRate = new Rate('errors')
const responseTime = new Trend('response_time')

export const options = {
  stages: [
    { duration: '2m', target: 100 },
    { duration: '5m', target: 500 },
    { duration: '2m', target: 1000 },
    { duration: '3m', target: 1000 },
    { duration: '2m', target: 0 },
  ],
  thresholds: {
    errors: ['rate<0.01'],
    response_time: ['p(95)<2000'],
    http_req_duration: ['p(99)<5000'],
  },
}

export default function () {
  group('Home Page', () => {
    const res = http.get(BASE_URL)
    check(res, {
      'status is 200': (r) => r.status === 200,
      'body contains title': (r) => r.body.includes('StarScience Lab'),
    })
    errorRate.add(res.status !== 200)
    responseTime.add(res.timings.duration)
    sleep(1)
  })

  group('Contact Form', () => {
    const payload = JSON.stringify({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      message: 'Test message from load test',
    })
    const res = http.post(`${BASE_URL}/api/contact`, payload, {
      headers: { 'Content-Type': 'application/json' },
    })
    check(res, {
      'status is 200 or 429': (r) => r.status === 200 || r.status === 429,
    })
    errorRate.add(res.status !== 200 && res.status !== 429)
    sleep(2)
  })

  group('FAQ Page', () => {
    const res = http.get(`${BASE_URL}/faq`)
    check(res, { 'status is 200': (r) => r.status === 200 })
    errorRate.add(res.status !== 200)
    sleep(1)
  })

  group('API Health', () => {
    const res = http.get(`${BASE_URL}/api/health`)
    check(res, { 'status is 200': (r) => r.status === 200 })
    errorRate.add(res.status !== 200)
    sleep(0.5)
  })
}
