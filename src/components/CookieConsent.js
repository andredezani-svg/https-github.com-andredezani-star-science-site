'use client'

import { useState, useEffect, useCallback } from 'react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consented = localStorage.getItem('cookie-consent')
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!consented) setVisible(true)
  }, [])

  const accept = useCallback(() => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-navy text-white p-4 shadow-2xl animate-slide-up" role="alert">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm text-gray-300 flex-1">
          This website uses cookies to improve your experience. By continuing, you agree to our{' '}
          <a href="/privacy" className="text-turquoise underline">Privacy Policy</a>.
        </p>
        <button
          onClick={accept}
          className="bg-gradient-to-r from-turquoise to-turquoise-dark text-white px-6 py-2.5 rounded-lg font-bold text-sm whitespace-nowrap hover:scale-105 transition-all shrink-0"
        >
          ACCEPT
        </button>
      </div>
    </div>
  )
}
