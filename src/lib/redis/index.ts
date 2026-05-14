import { Redis } from '@upstash/redis'

const REDIS_URL = process.env.REDIS_URL || process.env.UPSTASH_REDIS_REST_URL
const REDIS_TOKEN = process.env.REDIS_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN

export const redis = REDIS_URL && REDIS_TOKEN
  ? new Redis({ url: REDIS_URL, token: REDIS_TOKEN })
  : null

export async function rateLimit(ip: string, max = 10, window = 60): Promise<boolean> {
  if (!redis) return false
  const key = `ratelimit:${ip}`
  const count = await redis.incr(key)
  if (count === 1) await redis.expire(key, window)
  return count > max
}

export async function cacheGet<T>(key: string): Promise<T | null> {
  if (!redis) return null
  const data = await redis.get<T>(key)
  return data ?? null
}

export async function cacheSet(key: string, data: unknown, ttl = 300): Promise<void> {
  if (!redis) return
  await redis.setex(key, ttl, JSON.stringify(data))
}

export async function cacheDel(pattern: string): Promise<void> {
  if (!redis) return
  const keys = await redis.keys(pattern)
  if (keys.length > 0) await redis.del(...keys)
}
