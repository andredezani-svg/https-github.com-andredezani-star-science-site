import { NextResponse, type NextRequest } from 'next/server'
import db from '@/db'
import { blogPosts } from '@/db/schema'
import { desc, eq } from 'drizzle-orm'
import { v4 as uuid } from 'uuid'

export async function GET() {
  try {
    const posts = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.published, true))
      .orderBy(desc(blogPosts.publishedAt))
      .limit(50)
    return NextResponse.json({ posts })
  } catch {
    return NextResponse.json({ posts: [] })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { slug, title, description, content, category } = body

    if (!slug || !title || !content) {
      return NextResponse.json({ error: 'slug, title, and content are required.' }, { status: 400 })
    }

    const [post] = await db
      .insert(blogPosts)
      .values({
        id: uuid(),
        slug,
        title,
        description: description || null,
        content,
        category: category || null,
        published: true,
        publishedAt: new Date(),
      })
      .returning()

    return NextResponse.json({ post }, { status: 201 })
  } catch (err) {
    console.error('[Blog API Error]', err)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
