import '@testing-library/jest-dom'

jest.mock('next/server', () => ({
  NextResponse: {
    json: (body, init = {}) => {
      const status = init.status || 200
      return {
        status,
        json: async () => body,
      }
    },
  },
  NextRequest: class {},
}))

jest.mock('@/lib/redis', () => ({
  redis: null,
}))

jest.mock('@/db', () => ({
  __esModule: true,
  default: {
    execute: jest.fn().mockResolvedValue([{ '?column?': 1 }]),
  },
}))

describe('Health API', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return healthy when all services are up', async () => {
    const { GET } = await import('@/app/api/health/route')
    const response = await GET()
    const body = await response.json()

    expect(response.status).toBe(200)
    expect(body.status).toBe('healthy')
    expect(body.checks.redis).toBe('disabled')
    expect(body.checks.database).toBe('connected')
  })

  it('should return degraded when database fails', async () => {
    const db = (await import('@/db')).default
    db.execute.mockRejectedValueOnce(new Error('DB down'))

    const { GET } = await import('@/app/api/health/route')
    const response = await GET()
    const body = await response.json()

    expect(response.status).toBe(503)
    expect(body.status).toBe('degraded')
    expect(body.checks.database).toBe('error')
  })
})
