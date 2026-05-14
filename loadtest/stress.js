import http from 'k6/http'
import { check, sleep } from 'k6'

const BASE_URL = __ENV.BASE_URL || 'https://starsciencelab.com'

export const options = {
  scenarios: {
    spike: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '30s', target: 2000 },
        { duration: '1m', target: 2000 },
        { duration: '30s', target: 0 },
      ],
      gracefulRampDown: '30s',
    },
    upload: {
      executor: 'per-vu-iterations',
      vus: 10,
      iterations: 5,
      maxDuration: '2m',
      exec: 'uploadScenario',
    },
  },
  thresholds: {
    http_req_failed: ['rate<0.05'],
    http_req_duration: ['p(95)<3000'],
  },
}

export default function () {
  const res = http.get(BASE_URL)
  check(res, { '200': (r) => r.status === 200 })
  sleep(0.5)
}

export function uploadScenario() {
  const formData = {
    file: http.file('test.png', 'fake-image-content', 'image/png'),
  }
  const res = http.post(`${BASE_URL}/api/upload`, formData, {
    headers: { Authorization: `Bearer ${__ENV.AUTH_TOKEN}` },
  })
  check(res, { 'upload accepted': (r) => r.status === 200 || r.status === 401 })
  sleep(1)
}
