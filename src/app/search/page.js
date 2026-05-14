import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants'

export const metadata = {
  title: 'Search',
  description: `Search ${SITE_NAME} — ${SITE_DESCRIPTION}`,
  robots: { index: false, follow: true },
}

export default function SearchPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gradient-mesh px-4">
      <div className="text-center max-w-2xl w-full">
        <h1 className="text-4xl font-extrabold text-dark mb-4">Search {SITE_NAME}</h1>
        <p className="text-gray-600 mb-8">
          Search our products, services, and resources.
        </p>
        <form action="/search" method="GET" className="flex gap-3 max-w-lg mx-auto">
          <input
            type="text"
            name="q"
            placeholder="Search..."
            required
            className="flex-1 px-5 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent text-lg"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-violet to-violet-dark text-white px-8 py-3.5 rounded-xl font-bold shadow-lg hover:scale-105 transition-all duration-300"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  )
}
