import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { getSignedDownloadUrl } from '@/lib/s3'

export async function GET(request: NextRequest, { params }: { params: Promise<{ key: string }> }) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { key } = await params

  if (!key) {
    return NextResponse.json({ error: 'No file key provided' }, { status: 400 })
  }

  try {
    const signedUrl = await getSignedDownloadUrl(key)
    return NextResponse.redirect(signedUrl)
  } catch {
    return NextResponse.json({ error: 'File not found or inaccessible' }, { status: 404 })
  }
}
