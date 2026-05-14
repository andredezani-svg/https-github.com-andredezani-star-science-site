import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import CTASection from '@/components/CTASection'
import Icon from '@/components/Icon'

import { SITE_URL } from '@/lib/constants'

export const metadata = {
  title: 'About',
  description: 'Learn about StarScience Lab - your trusted partner in private label and custom formulation supplement manufacturing.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'About - StarScience Lab',
    description: 'Learn about StarScience Lab - your trusted partner in supplement manufacturing.',
  },
}

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About StarScience Lab"
        subtitle="Your trusted partner in supplement manufacturing"
        badge="About Us"
        bgImage="/missao.png"
      />

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 relative">
          <div className="space-y-16">
            <div className="text-center">
              <span className="inline-block text-turquoise font-bold text-sm uppercase tracking-widest mb-3">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Our mission is to create innovative health, wellness, and beauty products that combine premium ingredients, science, quality, and sophistication — empowering brands to transform ideas into inspiring market-leading solutions worldwide.
              </p>
            </div>

            <div>
              <div className="text-center mb-10">
                <span className="inline-block text-turquoise font-bold text-sm uppercase tracking-widest mb-3">Why Us</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Why Choose StarScience Lab?</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Full-Service Manufacturing', desc: 'From concept to production, we handle every step.', color: 'from-turquoise to-turquoise-dark' },
                  { title: 'Low Minimum Orders', desc: 'Low minimums for custom formulas.', color: 'from-violet to-violet-dark' },
                  { title: 'Fast Turnaround', desc: 'The fastest turnaround times in the industry.', color: 'from-amber to-amber-dark' },
                  { title: 'Quality Assured', desc: 'GMP compliant and FDA registered facilities.', color: 'from-navy to-navy-light' },
                  { title: 'Expert Formulation', desc: 'Our scientists create premium formulations.', color: 'from-turquoise to-violet' },
                  { title: 'Design Services', desc: 'Professional label and packaging design.', color: 'from-violet to-amber' },
                ].map((item, i) => (
                  <div key={i} className="group bg-gradient-to-br from-gray-light to-white rounded-2xl p-6 border border-gray-border hover:border-turquoise/30 hover:shadow-2xl hover:shadow-turquoise/10 transition-all duration-500 hover:-translate-y-1">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                      <Icon name="check" className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-dark text-lg mb-2 group-hover:text-turquoise transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-center mb-10">
                <span className="inline-block text-turquoise font-bold text-sm uppercase tracking-widest mb-3">Our Values</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Our Values</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'Quality', desc: 'We never compromise on quality, ensuring every product meets the highest standards.', icon: 'shield' },
                  { label: 'Integrity', desc: 'Transparent communication and honest partnerships.', icon: 'handshake' },
                  { label: 'Innovation', desc: 'Staying ahead of industry trends to bring you the best formulations.', icon: 'lightbulb' },
                  { label: 'Partnership', desc: 'Your success is our success. We grow together.', icon: 'users' },
                ].map((v, i) => (
                  <div key={i} className="flex gap-5 p-6 rounded-2xl bg-gray-light hover:bg-gradient-to-br hover:from-gray-light hover:to-turquoise/5 transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-turquoise to-violet flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-all duration-300">
                      {v.icon === 'shield' ? (
                        <Icon name="shield" className="w-7 h-7 text-white" />
                      ) : v.icon === 'handshake' ? (
                        <Icon name="info-circle" className="w-7 h-7 text-white" />
                      ) : v.icon === 'lightbulb' ? (
                        <Icon name="lightbulb" className="w-7 h-7 text-white" />
                      ) : (
                        <Icon name="users" className="w-7 h-7 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-extrabold text-dark text-lg mb-1.5 group-hover:text-turquoise transition-colors">{v.label}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to start your project?"
        description="Contact us today for a free quote and consultation."
      />
    </>
  )
}
