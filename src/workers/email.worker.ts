import { Worker } from 'bullmq'
import { Resend } from 'resend'

const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379'
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

const worker = new Worker(
  'email',
  async (job) => {
    const { to, subject, html } = job.data

    if (resend) {
      await resend.emails.send({
        from: process.env.AUTH_EMAIL_FROM || 'StarScience Lab <noreply@starsciencelab.com>',
        to,
        subject,
        html,
      })
    } else {
      console.log('[Email Worker]', { to, subject })
    }
  },
  { connection: { url: REDIS_URL } }
)

worker.on('completed', (job) => console.log(`[Email Worker] Job ${job.id} completed`))
worker.on('failed', (job, err) => console.error(`[Email Worker] Job ${job?.id} failed:`, err))

console.log('[Email Worker] Started')
