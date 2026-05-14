import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import CTASection from '@/components/CTASection'
import Icon from '@/components/Icon'

import { SITE_URL } from '@/lib/constants'

export const metadata = {
  title: 'Services',
  description: 'Comprehensive supplement manufacturing services: manufacturing, private label, custom formulation, and design services.',
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: 'Services - StarScience Lab',
    description: 'Comprehensive supplement manufacturing solutions from StarScience Lab.',
  },
}

const services = [
  {
    title: 'Manufacturing',
    desc: 'Full-service contract manufacturing for sports nutrition, health and wellness, pre-workout, and fat burner supplements.',
    items: ['Sports Nutrition', 'Health and Wellness', 'Pre-Workout', 'Fat Burner'],
    icon: 'gear',
    color: 'from-turquoise to-turquoise-dark',
    shadow: 'shadow-turquoise/20',
  },
  {
    title: 'Private Label',
    desc: 'Ready-made formulas that you can brand as your own. Quick turnaround with proven formulations.',
    items: ['Stock Formulas', 'Custom Labeling', 'Flexible Packaging', 'Low MOQ'],
    icon: 'tag',
    color: 'from-violet to-violet-dark',
    shadow: 'shadow-violet/20',
  },
  {
    title: 'Custom Formulation',
    desc: 'Work with our scientists to create a proprietary formula unique to your brand.',
    items: ['Concept Development', 'Ingredient Sourcing', 'Prototype Samples', 'Scale-Up Production'],
    icon: 'flask',
    color: 'from-amber to-amber-dark',
    shadow: 'shadow-amber/20',
  },
  {
    title: 'Design Services',
    desc: 'Professional label and packaging design to make your product stand out on the shelf.',
    items: ['Label Design', 'Packaging Design', 'Brand Identity', 'Mockups'],
    icon: 'palette',
    color: 'from-navy to-navy-light',
    shadow: 'shadow-navy/20',
  },
]

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive supplement manufacturing solutions"
        badge="What We Do"
        bgImage="/servicos.png"
      />

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-turquoise/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-violet/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="group bg-gradient-to-br from-gray-light to-white rounded-2xl p-8 border border-gray-border hover:border-turquoise/30 hover:shadow-2xl hover:shadow-turquoise/10 transition-all duration-500 hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg ${service.shadow} group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                  {service.icon === 'gear' ? (
                    <Icon name="gear" className="w-7 h-7 text-white" />
                  ) : service.icon === 'tag' ? (
                    <Icon name="tag" className="w-7 h-7 text-white" />
                  ) : service.icon === 'flask' ? (
                    <Icon name="flask" className="w-7 h-7 text-white" />
                  ) : (
                    <Icon name="palette" className="w-7 h-7 text-white" />
                  )}
                </div>
                <h2 className="text-2xl font-extrabold text-dark mb-3 group-hover:text-turquoise transition-colors">{service.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-3 mb-6">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-dark font-medium">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-turquoise to-violet flex items-center justify-center shrink-0">
                        <Icon name="check-thin" className="w-3.5 h-3.5 text-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-turquoise font-bold text-sm hover:gap-3 transition-all"
                >
                  Learn More
                  <Icon name="arrow-right" className="w-4 h-4" />
                </Link>
              </div>
            ))}
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
