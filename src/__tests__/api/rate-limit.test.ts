import '@testing-library/jest-dom'

describe('Rate Limiting', () => {
  it('should allow requests under limit', async () => {
    jest.isolateModules(async () => {
      jest.mock('@upstash/redis', () => ({
        Redis: jest.fn().mockImplementation(() => ({
          incr: jest.fn().mockResolvedValue(5),
          expire: jest.fn().mockResolvedValue(1),
        })),
      }))

      const { rateLimit } = await import('@/lib/redis')
      const limited = await rateLimit('test-ip-allow', 10, 60)
      expect(limited).toBe(false)
    })
  })

  it('should block requests over limit', async () => {
    jest.isolateModules(async () => {
      jest.mock('@upstash/redis', () => ({
        Redis: jest.fn().mockImplementation(() => ({
          incr: jest.fn().mockResolvedValue(11),
          expire: jest.fn().mockResolvedValue(1),
        })),
      }))

      const { rateLimit } = await import('@/lib/redis')
      const limited = await rateLimit('test-ip-block', 10, 60)
      expect(limited).toBe(true)
    })
  })
})
