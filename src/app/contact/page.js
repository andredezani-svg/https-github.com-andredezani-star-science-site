import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
import Icon from '@/components/Icon'
import { PHONE, EMAIL, ADDRESS } from '@/lib/constants'

import { SITE_URL } from '@/lib/constants'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with StarScience Lab for a free quote. Call (689) 322-1290 or email info@starsciencelab.com.',
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: 'Contact - StarScience Lab',
    description: 'Get in touch with StarScience Lab for a free quote and consultation.',
  },
}

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with our team"
        badge="Get In Touch"
        bgImage="/hero-contato.png"
        minHeight={false}
      />

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-turquoise/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 relative grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="inline-block text-turquoise font-bold text-sm uppercase tracking-widest mb-3">Free Quote</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-8">Get a Free Quote</h2>
            <div className="bg-gradient-to-br from-gray-light to-white rounded-2xl p-8 md:p-10 border border-gray-border shadow-xl">
              <ContactForm />
            </div>
          </div>

          <div className="md:pt-24">
            <span className="inline-block text-turquoise font-bold text-sm uppercase tracking-widest mb-3">Contact Info</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex gap-5 p-6 rounded-2xl bg-gray-light hover:bg-gradient-to-br hover:from-gray-light hover:to-turquoise/5 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-turquoise to-violet flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Icon name="phone" className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-extrabold text-dark text-lg mb-1 group-hover:text-turquoise transition-colors">Phone</h3>
                  <p className="text-gray-600">{PHONE}</p>
                </div>
              </div>

              <div className="flex gap-5 p-6 rounded-2xl bg-gray-light hover:bg-gradient-to-br hover:from-gray-light hover:to-violet/5 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet to-amber flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Icon name="email" className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-extrabold text-dark text-lg mb-1 group-hover:text-violet transition-colors">Email</h3>
                  <p className="text-gray-600">{EMAIL}</p>
                </div>
              </div>

              <div className="flex gap-5 p-6 rounded-2xl bg-gray-light hover:bg-gradient-to-br hover:from-gray-light hover:to-amber/5 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Icon name="map-pin" className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-extrabold text-dark text-lg mb-1 group-hover:text-navy transition-colors">Address</h3>
                  <p className="text-gray-600">{ADDRESS.city}, {ADDRESS.state}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
