export default function Skeleton({ className = '', variant = 'text' }) {
  const base = 'animate-pulse bg-gray-200 rounded'
  const variants = {
    text: 'h-4 w-full',
    heading: 'h-8 w-3/4',
    avatar: 'h-12 w-12 rounded-full',
    card: 'h-48 w-full rounded-2xl',
    badge: 'h-6 w-20 rounded-full',
  }

  return <div className={`${base} ${variants[variant] || variants.text} ${className}`} />
}

export function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-gray-border overflow-hidden">
      <Skeleton variant="card" />
      <div className="p-6 space-y-3">
        <Skeleton variant="badge" />
        <Skeleton variant="heading" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-5/6" />
      </div>
    </div>
  )
}
