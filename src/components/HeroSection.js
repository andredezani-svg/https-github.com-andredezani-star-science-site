import Image from 'next/image'

export default function HeroSection({ title, subtitle, badge, bgImage, overlay = true, minHeight = true }) {
  return (
    <section className={`relative bg-gradient-hero overflow-hidden ${minHeight ? 'min-h-[60vh] md:min-h-screen' : ''} flex items-center`}>
      {bgImage && (
        <Image
          src={bgImage}
          alt=""
          fill
          className="object-cover opacity-90"
          sizes="100vw"
          priority
          aria-hidden="true"
        />
      )}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-turquoise/20 to-navy/60" />
      )}
      <div className="relative max-w-4xl mx-auto px-4 py-24 md:py-32 text-center animate-fade-in">
        {badge && (
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-xs font-bold uppercase tracking-widest mb-6 animate-slide-down">
            {badge}
          </div>
        )}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl text-white/80">{subtitle}</p>}
      </div>
    </section>
  )
}
