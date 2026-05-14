'use client'

import { useState, useCallback } from 'react'
import Icon from '@/components/Icon'
import { faqs } from '@/lib/faq-data'
export { faqs }

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = useCallback((i) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }, [])

  return (
    <div id="faq-accordion" className="space-y-4">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        const panelId = `faq-panel-${i}`
        const buttonId = `faq-button-${i}`
        return (
          <div
            key={i}
            className="bg-gradient-to-br from-gray-light to-white rounded-2xl border border-gray-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-turquoise/5"
          >
            <button
              id={buttonId}
              className="w-full flex items-center justify-between p-6 text-left font-bold text-dark text-lg hover:text-turquoise transition-colors gap-4"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span>{faq.q}</span>
              <Icon
                name="chevron-down"
                className={`w-5 h-5 text-turquoise shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
