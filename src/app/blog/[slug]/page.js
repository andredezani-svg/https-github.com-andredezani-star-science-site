import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SITE_URL } from '@/lib/constants'

export const dynamic = 'force-dynamic'

async function getPost(slug) {
  try {
    const db = (await import('@/db')).default
    const { blogPosts } = await import('@/db/schema')
    const { eq } = await import('drizzle-orm')
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug)).limit(1)
    return post || null
  } catch {
    return null
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: post.title,
    description: post.description || 'Read our article.',
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} - StarScience Lab`,
      description: post.description,
    },
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) notFound()

  return (
    <article className="min-h-screen bg-white">
      <div className="bg-gradient-mesh py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            {post.category && (
              <span className="inline-block px-3 py-1 bg-turquoise/10 rounded-full text-turquoise text-xs font-bold uppercase tracking-wider">
                {post.category}
              </span>
            )}
            {post.publishedAt && (
              <span className="text-sm text-gray-500">
                {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark leading-tight">{post.title}</h1>
          {post.description && (
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">{post.description}</p>
          )}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-border">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-violet font-bold hover:text-violet-dark transition-colors"
          >
            &larr; Back to Blog
          </Link>
        </div>
      </div>
    </article>
  )
}
