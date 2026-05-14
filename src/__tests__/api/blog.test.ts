import '@testing-library/jest-dom'

jest.mock('uuid', () => ({ v4: () => 'mock-uuid' }))
jest.mock('next/server', () => ({
  NextResponse: {
    json: (body, init = {}) => ({ status: init.status || 200, json: async () => body }),
  },
}))

jest.mock('@/db', () => ({
  __esModule: true,
  default: {
    select: jest.fn().mockReturnValue({ from: jest.fn().mockReturnValue({ where: jest.fn().mockReturnValue({ orderBy: jest.fn().mockReturnValue({ limit: jest.fn().mockResolvedValue([]) }) }) }) }),
    insert: jest.fn().mockReturnValue({ values: jest.fn().mockReturnValue({ returning: jest.fn().mockResolvedValue([]) }) }),
  },
}))

jest.mock('drizzle-orm', () => ({ desc: jest.fn(), eq: jest.fn() }))

describe('Blog API', () => {
  beforeEach(() => { jest.clearAllMocks() })

  it('returns empty posts array', async () => {
    const { GET } = await import('@/app/api/blog/route')
    const res = await GET()
    const body = await res.json()
    expect(body.posts).toEqual([])
  })
})
