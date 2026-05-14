import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import CTASection from '@/components/CTASection'
import Icon from '@/components/Icon'
import { PHONE, SITE_URL } from '@/lib/constants'

export const metadata = {
  alternates: { canonical: SITE_URL },
}

export default function HomePage() {
  return (
    <>
      <section className="relative bg-gradient-hero overflow-hidden" style={{ height: '100dvh' }}>
        <Image src="/hero-home.png" alt="" fill className="object-cover" sizes="100vw" priority aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <span className="inline-block text-turquoise font-bold text-sm uppercase tracking-widest mb-3">Who We Are</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-dark mb-6 text-balance leading-tight">
            StarScience Lab specializes in helping you navigate the{" "}
            <span className="text-gradient">nutritional supplement</span> manufacturing process.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Whether you are looking for custom formulations or private label formulas, StarScience Lab will make the process simple and enjoyable. We also insure the fastest turnaround times in the industry.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-mesh relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-turquoise font-bold text-sm uppercase tracking-widest mb-3">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Everything You Need to Succeed</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              'Full-Service: From Concept to Production',
              'Custom Formulation',
              'Fast Turnaround Times',
              'Manufactured in the USA',
              'Specializing in Capsule and Powder Products',
              'Full Design Services Available',
              'GMP Compliant and FDA Registered Facilities',
              'Sports Nutrition',
              'Health and Wellness',
              'Hair, Skin and Nails',
              'Electrolyte and Hydration',
              'And More...',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 py-3 px-4 rounded-xl hover:bg-white/60 transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-turquoise to-violet flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-turquoise/20 group-hover:shadow-lg group-hover:shadow-turquoise/30 group-hover:scale-110 transition-all duration-300">
                    <Icon name="check-thin" className="w-4 h-4 text-white" />
                  </div>
                <span className="text-dark font-semibold text-lg group-hover:text-turquoise transition-colors">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-r from-violet via-violet-dark to-navy overflow-hidden">
        <div className="relative text-white text-center py-16">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-2xl md:text-4xl font-bold mb-3">
              Call Now for More Information or a FREE Quote
            </p>
            <p className="text-3xl md:text-5xl font-extrabold tracking-wide bg-gradient-to-r from-white to-turquoise-bright bg-clip-text text-transparent">
              {PHONE}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-14">
            <span className="inline-block text-turquoise font-bold text-sm uppercase tracking-widest mb-3">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Our Core Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-br from-gray-light to-white rounded-2xl p-8 border border-gray-border hover:border-turquoise/30 hover:shadow-2xl hover:shadow-turquoise/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-turquoise to-turquoise-dark flex items-center justify-center mb-6 shadow-lg shadow-turquoise/20 group-hover:shadow-xl group-hover:shadow-turquoise/30 group-hover:scale-110 transition-all duration-300">
                <Icon name="box" className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-turquoise transition-colors">Low Minimum Order Requirements</h3>
              <p className="text-gray-600 leading-relaxed">
                Start with Your Own Custom Formula or Stock Formula. Choose to start or expand your brand with multiple products.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-gray-light to-white rounded-2xl p-8 border border-gray-border hover:border-turquoise/30 hover:shadow-2xl hover:shadow-turquoise/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet to-violet-dark flex items-center justify-center mb-6 shadow-lg shadow-violet/20 group-hover:shadow-xl group-hover:shadow-violet/30 group-hover:scale-110 transition-all duration-300">
                <Icon name="plus" className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-violet transition-colors">Custom Flavoring</h3>
              <p className="text-gray-600 leading-relaxed">
                Our flavor experts will create the perfect flavor profile for you. Our sample program lets you actually taste and try your product BEFORE your full production run!
              </p>
            </div>
            <div className="group bg-gradient-to-br from-gray-light to-white rounded-2xl p-8 border border-gray-border hover:border-turquoise/30 hover:shadow-2xl hover:shadow-turquoise/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber to-amber-dark flex items-center justify-center mb-6 shadow-lg shadow-amber/20 group-hover:shadow-xl group-hover:shadow-amber/30 group-hover:scale-110 transition-all duration-300">
                <Icon name="eye" className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-amber transition-colors">Label Design Services</h3>
              <p className="text-gray-600 leading-relaxed">
                Our design team will work with you step by step throughout the entire label design process.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-gray-light to-white rounded-2xl p-8 border border-gray-border hover:border-turquoise/30 hover:shadow-2xl hover:shadow-turquoise/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center mb-6 shadow-lg shadow-navy/20 group-hover:shadow-xl group-hover:shadow-navy/30 group-hover:scale-110 transition-all duration-300">
                <Icon name="shield" className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-navy transition-colors">FDA Registered & cGMP Compliant</h3>
              <p className="text-gray-600 leading-relaxed">
                Be confident knowing your brands products are produced in compliant facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-mesh relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-turquoise font-bold text-sm uppercase tracking-widest mb-3">Our Certifications</span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-dark">Your Brand is in Good Hands.</h3>
            <p className="text-gray-600 mt-3 text-lg">StarScience Lab provides service you can count on.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'AWARD WINNING', desc: 'Industry recognized', icon: 'trophy', color: 'from-amber to-amber-dark' },
              { title: 'GMP COMPLIANT', desc: 'Good Manufacturing Practices', icon: 'shield', color: 'from-turquoise to-turquoise-dark' },
              { title: 'FDA REGISTERED', desc: 'Registered facilities', icon: 'check', color: 'from-violet to-violet-dark' },
              { title: 'MANUFACTURED IN USA', desc: 'Proudly American', icon: 'star', color: 'from-navy to-navy-light' },
            ].map((badge, i) => (
              <div key={i} className="group bg-white rounded-2xl p-8 text-center border border-gray-border shadow-sm hover:shadow-2xl hover:shadow-turquoise/10 hover:border-turquoise/20 transition-all duration-500 hover:-translate-y-2">
                <div className={`w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${badge.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                  {badge.icon === 'trophy' ? (
                    <Icon name="trophy" className="w-8 h-8 text-white" />
                  ) : badge.icon === 'shield' ? (
                    <Icon name="shield" className="w-8 h-8 text-white" />
                  ) : badge.icon === 'check' ? (
                    <Icon name="check-circle" className="w-8 h-8 text-white" />
                  ) : (
                    <Icon name="star-filled" className="w-8 h-8 text-white" />
                  )}
                </div>
                <h4 className="font-extrabold text-dark text-sm uppercase tracking-widest group-hover:text-turquoise transition-colors">{badge.title}</h4>
                <p className="text-xs text-gray-500 mt-2">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-turquoise/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet/5 rounded-full blur-3xl" />
        <div className="max-w-3xl mx-auto px-4 relative">
          <div className="text-center mb-12">
            <span className="inline-block text-turquoise font-bold text-sm uppercase tracking-widest mb-3">Get Started</span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-dark text-balance">
              Fill out this form to receive more information
            </h3>
          </div>
          <div className="bg-gradient-to-br from-gray-light to-white rounded-2xl p-8 md:p-10 border border-gray-border shadow-xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
