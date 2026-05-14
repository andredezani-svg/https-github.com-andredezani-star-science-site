import type { Queue, Worker } from 'bullmq'

let emailQueueInstance: Queue | null = null
let uploadQueueInstance: Queue | null = null

function getRedisUrl(): string | null {
  return process.env.REDIS_URL || null
}

async function getEmailQueue(): Promise<Queue | null> {
  if (emailQueueInstance) return emailQueueInstance
  const redisUrl = getRedisUrl()
  if (!redisUrl) return null
  const { Queue: BullQueue } = await import('bullmq')
  emailQueueInstance = new BullQueue('email', { connection: { url: redisUrl } })
  return emailQueueInstance
}

async function getUploadQueue(): Promise<Queue | null> {
  if (uploadQueueInstance) return uploadQueueInstance
  const redisUrl = getRedisUrl()
  if (!redisUrl) return null
  const { Queue: BullQueue } = await import('bullmq')
  uploadQueueInstance = new BullQueue('upload', { connection: { url: redisUrl } })
  return uploadQueueInstance
}

export async function addEmailJob(to: string, subject: string, html: string) {
  const q = await getEmailQueue()
  if (!q) { console.log('[Queue] Redis unavailable, email not queued'); return }
  await q.add('send-email', { to, subject, html }, {
    attempts: 3,
    backoff: { type: 'exponential', delay: 2000 },
  })
}

export async function addUploadJob(userId: string, fileKey: string) {
  const q = await getUploadQueue()
  if (!q) { console.log('[Queue] Redis unavailable, upload not queued'); return }
  await q.add('process-upload', { userId, fileKey }, {
    attempts: 2,
    backoff: { type: 'fixed', delay: 5000 },
  })
}
