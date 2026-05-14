import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const REGION = process.env.S3_REGION || 'us-east-1'
const BUCKET = process.env.S3_BUCKET || 'starsciencelab-uploads'

const s3 = new S3Client({
  region: REGION,
  credentials: process.env.S3_ACCESS_KEY && process.env.S3_SECRET_KEY
    ? {
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_KEY,
      }
    : undefined,
})

const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/webp', 'application/pdf']
const MAX_SIZE = 10 * 1024 * 1024

export function validateFile(file: File): string | null {
  if (!ALLOWED_TYPES.includes(file.type)) return 'Invalid file type'
  if (file.size > MAX_SIZE) return 'File too large (max 10MB)'
  return null
}

export async function uploadToS3(
  key: string,
  buffer: Buffer,
  contentType: string
): Promise<string> {
  await s3.send(
    new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: buffer,
      ContentType: contentType,
    })
  )
  return key
}

export async function getSignedDownloadUrl(key: string, expiresIn = 3600): Promise<string> {
  return getSignedUrl(
    s3,
    new GetObjectCommand({ Bucket: BUCKET, Key: key }),
    { expiresIn }
  )
}
