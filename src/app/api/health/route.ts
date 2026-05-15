import { NextResponse } from 'next/server'
import { redis } from '@/lib/redis'

export const dynamic = 'force-dynamic'

export async function GET() {
  const checks: Record<string, boolean | string | number> = {
    status: true,
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    dbUrl: process.env.DATABASE_URL ? 'present' : 'missing',
    resendKey: process.env.RESEND_API_KEY ? 'present' : 'missing',
  }

  try {
    if (redis) {
      await redis.ping()
      checks.redis = 'connected'
    } else {
      checks.redis = 'disabled'
    }
  } catch {
    checks.redis = 'error'
    checks.status = false
  }

  try {
    const db = (await import('@/db')).default
    await db.execute('SELECT 1')
    checks.database = 'connected'
  } catch {
    checks.database = 'error'
    checks.status = false
  }

  const healthy = checks.status === true
  return NextResponse.json(
    { status: healthy ? 'healthy' : 'degraded', checks },
    { status: healthy ? 200 : 503 }
  )
}
