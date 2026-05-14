import '@testing-library/jest-dom'

jest.mock('next/server', () => {
  class MockNextRequest {
    constructor(input) { this.url = input }
    headers = new Map([['x-forwarded-for', '127.0.0.1']])
  }
  return {
    NextResponse: {
      json: (body, init = {}) => ({ status: init.status || 200, json: async () => body }),
    },
    NextRequest: MockNextRequest,
  }
})

jest.mock('@/lib/redis', () => ({ redis: null, rateLimit: jest.fn().mockResolvedValue(false) }))
jest.mock('@/db', () => ({ __esModule: true, default: { insert: jest.fn().mockReturnValue({ values: jest.fn().mockResolvedValue(undefined) }) } }))
jest.mock('resend', () => ({ Resend: jest.fn().mockImplementation(() => ({ emails: { send: jest.fn() } })) }))

describe('Contact API', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('validates required fields', async () => {
    const { POST } = await import('@/app/api/contact/route')
    const req = new (await import('next/server')).NextRequest('http://localhost')
    req.text = jest.fn().mockResolvedValue(JSON.stringify({}))
    const res = await POST(req)
    const body = await res.json()
    expect(res.status).toBe(400)
    expect(body.error).toContain('required')
  })

  it('validates email format', async () => {
    const { POST } = await import('@/app/api/contact/route')
    const req = new (await import('next/server')).NextRequest('http://localhost')
    req.text = jest.fn().mockResolvedValue(JSON.stringify({ firstName: 'John', lastName: 'Doe', email: 'bad', message: 'Hi' }))
    const res = await POST(req)
    const body = await res.json()
    expect(res.status).toBe(400)
    expect(body.error).toContain('Invalid email')
  })
})
