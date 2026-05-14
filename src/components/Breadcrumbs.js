import Link from 'next/link'

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-4 pt-6">
      <ol className="flex items-center gap-2 text-sm text-gray-500">
        <li>
          <Link href="/" className="hover:text-violet transition-colors">Home</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            {item.href ? (
              <Link href={item.href} className="hover:text-violet transition-colors">{item.label}</Link>
            ) : (
              <span className="text-dark font-semibold" aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
