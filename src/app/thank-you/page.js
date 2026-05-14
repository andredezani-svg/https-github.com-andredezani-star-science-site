import Link from 'next/link'

export const metadata = {
  title: 'Thank You',
  description: 'Thank you for contacting StarScience Lab. We will get back to you shortly.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-mesh px-4">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="inline-block px-4 py-1.5 bg-turquoise/10 rounded-full text-turquoise text-xs font-bold uppercase tracking-widest mb-6">
          Message Sent
        </div>
        <h1 className="text-4xl font-extrabold text-dark mb-4">Thank You!</h1>
        <p className="text-gray-600 text-lg mb-8">
          Your message has been received. Our team will review it and get back to you within 24 hours.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="bg-gradient-to-r from-violet to-violet-dark text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:scale-105 transition-all duration-300"
          >
            Back to Home
          </Link>
          <Link
            href="/products"
            className="border-2 border-gray-300 text-dark px-8 py-3 rounded-lg font-bold hover:border-violet transition-all duration-300"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  )
}
