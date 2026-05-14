'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { PHONE, SITE_NAME, SITE_TAGLINE } from '@/lib/constants'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/process', label: 'Process' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

const linkClass = "text-sm font-bold text-dark hover:text-violet transition-colors uppercase tracking-widest relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-violet after:transition-all after:duration-300 hover:after:w-full"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <header>
      <div className="bg-gradient-to-r from-violet via-violet-dark to-navy text-white text-center py-2.5 text-sm font-bold tracking-widest uppercase">
        Call Us For a Free Quote: <span className="text-white/90">{PHONE}</span>
      </div>

      <div className="bg-white/95 backdrop-blur-md border-b border-gray-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-4 group" aria-label="Home">
            <div className="relative flex items-center justify-center p-1 rounded-2xl bg-gradient-to-br from-turquoise/10 via-transparent to-violet/10 group-hover:from-turquoise/20 group-hover:to-violet/20 transition-all duration-500">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-turquoise/5 to-violet/5 blur-sm group-hover:blur-md transition-all duration-500" />
              <video
                src="/logo-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                poster="/logo.png"
                className="h-14 w-full drop-shadow-md group-hover:drop-shadow-xl transition-all duration-300 brightness-110 contrast-110 object-fill"
                aria-hidden="true"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-extrabold bg-gradient-to-r from-turquoise to-violet bg-clip-text text-transparent leading-tight">
                {SITE_NAME}
              </div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] leading-tight">
                {SITE_TAGLINE}
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-5" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-violet to-violet-dark text-white px-6 py-3 rounded-lg font-bold text-sm tracking-wide shadow-lg shadow-violet/30 hover:shadow-xl hover:shadow-violet/50 hover:scale-105 transition-all duration-300"
            >
              GET A FREE QUOTE
            </Link>
          </div>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-0.5 bg-dark rounded transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-dark rounded transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-dark rounded transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-gray-border bg-white/95 backdrop-blur-md absolute w-full left-0 shadow-2xl animate-slide-down" role="dialog" aria-modal="true" aria-label="Mobile navigation">
            <div className="flex flex-col p-6 gap-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-bold text-dark py-3 uppercase tracking-widest hover:text-violet transition-colors border-b border-gray-border/50" onClick={closeMenu}>
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-violet to-violet-dark text-white px-6 py-4 rounded-lg font-bold text-sm text-center tracking-wide mt-2 shadow-lg"
                onClick={closeMenu}
              >
                GET A FREE QUOTE
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
