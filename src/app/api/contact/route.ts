import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { EMAIL, SITE_NAME } from '@/lib/constants'
import { rateLimit, redis } from '@/lib/redis'
import db from '@/db'
import { contacts } from '@/db/schema'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || EMAIL

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return request.headers.get('x-real-ip') || '127.0.0.1'
}

function sanitize(value: unknown): string {
  if (typeof value !== 'string') return ''
  return value.replace(/[<>&"']/g, '').trim().slice(0, 5000)
}

function isValidEmail(email: string): boolean {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email)
}

function isValidPhone(phone: string): boolean {
  if (!phone) return true
  return /^[\d\s\-+.()]{7,20}$/.test(phone)
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIP(request)
    const limited = redis ? await rateLimit(`contact:${ip}`, 5, 60) : false
    if (limited) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const text = await request.text()
    if (text.length > 10000) {
      return NextResponse.json({ error: 'Payload too large.' }, { status: 413 })
    }

    const body = JSON.parse(text) as Record<string, string | undefined>
    const { firstName, lastName, email, phone, message } = body

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'First name, last name, email, and message are required.' },
        { status: 400 }
      )
    }

    const cleanFirstName = sanitize(firstName)
    const cleanLastName = sanitize(lastName)
    const cleanEmail = email.trim().toLowerCase()
    const cleanPhone = sanitize(phone || '')
    const cleanMessage = sanitize(message)

    if (!cleanFirstName || !cleanLastName || !cleanMessage) {
      return NextResponse.json({ error: 'Invalid input provided.' }, { status: 400 })
    }
    if (!isValidEmail(cleanEmail)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }
    if (!isValidPhone(cleanPhone)) {
      return NextResponse.json({ error: 'Invalid phone number.' }, { status: 400 })
    }

    try {
      await db.insert(contacts).values({
        firstName: cleanFirstName,
        lastName: cleanLastName,
        email: cleanEmail,
        phone: cleanPhone,
        message: cleanMessage,
        ip,
      })
    } catch {
      // DB unavailable — log and continue
      console.log('[Contact] DB unavailable, continuing without persistence')
    }

    if (resend && CONTACT_EMAIL) {
      await resend.emails.send({
        from: `${SITE_NAME} <info@starsciencelab.com>`,
        to: CONTACT_EMAIL,
        replyTo: cleanEmail,
        subject: `New Contact from ${cleanFirstName} ${cleanLastName}`,
        html: `
          <h2>New Contact</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px">
            <tr><td style="padding:8px;font-weight:bold">Name:</td><td style="padding:8px">${cleanFirstName} ${cleanLastName}</td></tr>
            <tr><td style="padding:8px;font-weight:bold">Email:</td><td style="padding:8px">${cleanEmail}</td></tr>
            <tr><td style="padding:8px;font-weight:bold">Phone:</td><td style="padding:8px">${cleanPhone || '—'}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Message:</td><td style="padding:8px">${cleanMessage.replace(/\n/g, '<br>')}</td></tr>
          </table>`,
      })
    } else {
      console.log('[Contact]', { firstName: cleanFirstName, lastName: cleanLastName, email: cleanEmail })
    }

    return NextResponse.json(
      { success: true, message: 'Thank you! We will get back to you shortly.' },
      { status: 200 }
    )
  } catch (err) {
    console.error('[Contact Error]', err)
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    )
  }
}
