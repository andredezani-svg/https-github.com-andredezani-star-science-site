import { SITE_URL } from '@/lib/constants'

const routes = [
  { url: '/', priority: 1.0, changeFrequency: 'monthly' },
  { url: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { url: '/products', priority: 0.9, changeFrequency: 'monthly' },
  { url: '/process', priority: 0.7, changeFrequency: 'monthly' },
  { url: '/contact', priority: 0.9, changeFrequency: 'monthly' },
  { url: '/faq', priority: 0.6, changeFrequency: 'monthly' },
  { url: '/blog', priority: 0.7, changeFrequency: 'weekly' },
  { url: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  { url: '/terms', priority: 0.3, changeFrequency: 'yearly' },
]

export default function sitemap() {
  return routes.map((route) => ({
    url: `${SITE_URL}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
