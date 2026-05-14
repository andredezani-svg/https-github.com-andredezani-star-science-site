import Link from 'next/link'

import { SITE_URL } from '@/lib/constants'

export const metadata = {
  title: '404 - Page Not Found | StarScience Lab',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-mesh">
      <div className="text-center px-4">
        <div className="inline-block px-4 py-1.5 bg-turquoise/10 rounded-full text-turquoise text-xs font-bold uppercase tracking-widest mb-6">
          Error 404
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold text-dark mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-violet to-violet-dark text-white px-10 py-4 rounded-lg font-bold text-lg tracking-wide shadow-lg shadow-violet/30 hover:shadow-xl hover:shadow-violet/40 hover:scale-105 transition-all duration-300"
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  )
}
