'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

interface Status {
  type: string
  message: string
}

const initialForm: FormData = { firstName: '', lastName: '', email: '', phone: '', message: '' }

export default function ContactForm() {
  const router = useRouter()
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<Status>({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setForm(initialForm)
        router.push('/thank-you')
      } else {
        const data = await res.json()
        setStatus({ type: 'error', message: data.error || 'Something went wrong.' })
      }
    } catch {
      setStatus({ type: 'error', message: 'Network error. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  const inputClass = "w-full border border-gray-border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-violet/50 focus:border-violet transition-all bg-white"

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      {status.message && (
        <div className={`px-4 py-3 rounded-xl text-sm font-bold ${
          status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
        }`}>
          {status.message}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-bold text-dark mb-1.5">First Name *</label>
          <input id="firstName" name="firstName" type="text" required value={form.firstName} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-bold text-dark mb-1.5">Last Name *</label>
          <input id="lastName" name="lastName" type="text" required value={form.lastName} onChange={handleChange} className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-bold text-dark mb-1.5">Email *</label>
        <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-bold text-dark mb-1.5">Phone</label>
        <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputClass} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-bold text-dark mb-1.5">How May We Help You? *</label>
        <textarea id="message" name="message" rows={4} required value={form.message} onChange={handleChange} className={inputClass} />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-violet to-violet-dark text-white py-4 rounded-xl font-bold text-lg tracking-wide shadow-lg shadow-violet/30 hover:shadow-xl hover:shadow-violet/40 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'SENDING...' : 'SUBMIT'}
      </button>
    </form>
  )
}
