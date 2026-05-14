import { Worker } from 'bullmq'
import db from '@/db'
import { uploads } from '@/db/schema'
import { eq } from 'drizzle-orm'

const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379'

const worker = new Worker(
  'upload',
  async (job) => {
    const { userId, fileKey } = job.data

    const [record] = await db
      .select()
      .from(uploads)
      .where(eq(uploads.fileKey, fileKey))
      .limit(1)

    if (record) {
      await db
        .update(uploads)
        .set({ scanned: true, scanPassed: true })
        .where(eq(uploads.id, record.id))

      console.log(`[Upload Worker] File ${fileKey} marked as scanned`)
    }
  },
  { connection: { url: REDIS_URL } }
)

worker.on('completed', (job) => console.log(`[Upload Worker] Job ${job.id} completed`))
worker.on('failed', (job, err) => console.error(`[Upload Worker] Job ${job?.id} failed:`, err))

console.log('[Upload Worker] Started')
