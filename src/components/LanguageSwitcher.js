'use client'

import { useState, useRef, useEffect } from 'react'
import { locales } from '@/lib/i18n'

const flags = {
  en: '🇺🇸',
  es: '🇪🇸',
  pt: '🇧🇷',
  fr: '🇫🇷',
  de: '🇩🇪',
}

const labels = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
  fr: 'Français',
  de: 'Deutsch',
}

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState('en')
  const ref = useRef(null)

  useEffect(() => {
    const saved = localStorage.getItem('locale')
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved && locales.includes(saved)) setCurrent(saved)
  }, [])

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const switchLocale = (locale) => {
    localStorage.setItem('locale', locale)
    setCurrent(locale)
    setOpen(false)
    window.location.reload()
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-violet transition-colors px-2 py-1 rounded-lg hover:bg-gray-100"
        aria-label="Switch language"
      >
        <span>{flags[current]}</span>
        <span className="hidden md:inline">{labels[current]}</span>
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-border py-1 min-w-[160px] z-50">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => switchLocale(locale)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left hover:bg-gray-50 transition-colors ${current === locale ? 'text-violet font-bold' : 'text-gray-700'}`}
            >
              <span>{flags[locale]}</span>
              <span>{labels[locale]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
