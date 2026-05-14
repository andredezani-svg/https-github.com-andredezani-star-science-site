import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { validateFile, uploadToS3 } from '@/lib/s3'
import { addUploadJob } from '@/lib/queue'
import { rateLimit } from '@/lib/redis'
import { v4 as uuid } from 'uuid'

export async function POST(request: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const ip = request.headers.get('x-forwarded-for') || 'unknown'
  const limited = await rateLimit(`upload:${session.user.id}`, 20, 60)
  if (limited) {
    return NextResponse.json({ error: 'Too many uploads' }, { status: 429 })
  }

  const formData = await request.formData()
  const file = formData.get('file') as File | null

  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 })
  }

  const validationError = validateFile(file)
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 })
  }

  const buffer = Buffer.from(await file.arrayBuffer())
  const ext = file.name.split('.').pop()
  const key = `uploads/${session.user.id}/${uuid()}.${ext}`

  await uploadToS3(key, buffer, file.type)
  await addUploadJob(session.user.id, key)

  return NextResponse.json({
    success: true,
    key,
    url: `/api/uploads/${key}`,
  })
}
