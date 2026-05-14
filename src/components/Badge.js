export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-turquoise/10 text-turquoise',
    violet: 'bg-violet/10 text-violet-dark',
    amber: 'bg-amber/10 text-amber-dark',
    green: 'bg-green-100 text-green-700',
    red: 'bg-red-100 text-red-600',
  }

  return (
    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${variants[variant] || variants.default} ${className}`}>
      {children}
    </span>
  )
}
