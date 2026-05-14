import Link from 'next/link'

export default function CTASection({
  title,
  description,
  buttonText = 'GET A FREE QUOTE',
  buttonHref = '/contact',
  gradient = 'from-violet to-violet-dark',
  shadow = 'shadow-violet/30',
  bgGradient = 'bg-gradient-mesh',
}) {
  return (
    <section className={`py-16 md:py-20 ${bgGradient}`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">{title}</h2>
        {description && <p className="text-gray-600 mb-8 text-lg">{description}</p>}
        <Link
          href={buttonHref}
          className={`inline-block bg-gradient-to-r ${gradient} text-white px-10 py-4 rounded-lg font-bold text-lg tracking-wide shadow-lg ${shadow} hover:shadow-xl hover:shadow-violet/40 hover:scale-105 transition-all duration-300`}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
