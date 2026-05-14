import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import CTASection from '@/components/CTASection'
import { SITE_URL } from '@/lib/constants'

export const metadata = {
  title: 'Blog',
  description: 'Insights, guides, and updates from StarScience Lab on supplement manufacturing, private labeling, and industry trends.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: 'Blog - StarScience Lab',
    description: 'Insights and updates from the supplement manufacturing industry.',
  },
}

async function getPosts() {
  try {
    const db = (await import('@/db')).default
    const { blogPosts } = await import('@/db/schema')
    const { desc, eq } = await import('drizzle-orm')
    const posts = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.published, true))
      .orderBy(desc(blogPosts.publishedAt))
      .limit(50)
    return posts
  } catch {
    return []
  }
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <>
      <HeroSection
        title="Our Blog"
        subtitle="Insights, guides, and industry updates"
        badge="Articles"
        bgImage="/hero-home.png"
        minHeight={false}
      />

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-turquoise/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-violet/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 relative">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-block px-4 py-1.5 bg-turquoise/10 rounded-full text-turquoise text-xs font-bold uppercase tracking-widest mb-6">
                Coming Soon
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">No articles yet</h2>
              <p className="text-gray-600 text-lg max-w-lg mx-auto">
                We are working on some exciting content. Check back soon for insights on supplement manufacturing, private labeling, and industry trends.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl border border-gray-border hover:border-turquoise/30 hover:shadow-2xl hover:shadow-turquoise/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      {post.category && (
                        <span className="inline-block px-2.5 py-1 bg-turquoise/10 rounded-full text-turquoise font-bold uppercase tracking-wider">
                          {post.category}
                        </span>
                      )}
                      {post.publishedAt && (
                        <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      )}
                    </div>
                    <h2 className="text-xl font-extrabold text-dark mb-3 group-hover:text-turquoise transition-colors">{post.title}</h2>
                    {post.description && (
                      <p className="text-gray-600 text-sm leading-relaxed">{post.description}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Have a question?"
        description="Our team is here to help with your manufacturing needs."
        buttonText="CONTACT US"
      />
    </>
  )
}
