import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import CTASection from '@/components/CTASection'

import { SITE_URL } from '@/lib/constants'

export const metadata = {
  title: 'Process',
  description: 'From concept to production - learn about our supplement manufacturing process: consultation, formulation, sampling, production, packaging, and delivery.',
  alternates: { canonical: `${SITE_URL}/process` },
  openGraph: {
    title: 'Process - StarScience Lab',
    description: 'From concept to production — a seamless supplement manufacturing journey.',
  },
}

const steps = [
  {
    number: '01',
    title: 'Concept & Consultation',
    desc: 'We start by understanding your vision, goals, and requirements. Tell us about your brand, target market, and product ideas — our team will guide you through every option.',
    color: 'from-turquoise to-turquoise-dark',
    shadow: 'shadow-turquoise/20',
  },
  {
    number: '02',
    title: 'Formulation Development',
    desc: 'Our team of scientists creates a custom formula tailored to your specifications. We source premium ingredients and develop a proprietary blend that sets your brand apart.',
    color: 'from-violet to-violet-dark',
    shadow: 'shadow-violet/20',
  },
  {
    number: '03',
    title: 'Sample Approval',
    desc: 'You receive samples of your product for tasting and testing. Our sample program ensures you love the final result before we move to full-scale production.',
    color: 'from-amber to-amber-dark',
    shadow: 'shadow-amber/20',
  },
  {
    number: '04',
    title: 'Production & Manufacturing',
    desc: 'Once approved, your product enters full-scale production in our FDA registered, cGMP compliant facilities. We handle everything with precision and quality control.',
    color: 'from-turquoise to-violet',
    shadow: 'shadow-turquoise/20',
  },
  {
    number: '05',
    title: 'Labeling & Packaging',
    desc: 'Our design team crafts professional labels and packaging that make your product stand out. We manage the entire design process from concept to print-ready artwork.',
    color: 'from-navy to-navy-light',
    shadow: 'shadow-navy/20',
  },
  {
    number: '06',
    title: 'Delivery & Launch',
    desc: 'Your finished product is shipped to your doorstep. From there, you are ready to launch your brand with confidence, knowing every detail has been handled with care.',
    color: 'from-violet to-amber',
    shadow: 'shadow-violet/20',
  },
]

export default function ProcessPage() {
  return (
    <>
      <HeroSection
        title="How It Works"
        subtitle="From concept to production — a seamless journey"
        badge="How We Work"
        bgImage="/hero-processo.png"
        minHeight={false}
      />

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet/5 rounded-full blur-3xl" />
        <div className="max-w-5xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <span className="inline-block text-turquoise font-bold text-sm uppercase tracking-widest mb-3">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Your Journey from Idea to Product</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              We make supplement manufacturing simple, fast, and enjoyable at every stage.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-turquoise via-violet to-amber hidden md:block" />

            {steps.map((step, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-start gap-8 mb-16 md:mb-20 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="hidden md:flex md:w-1/2 justify-center">
                  <div className={`${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                    <span className={`inline-block text-6xl font-extrabold bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-30 leading-none mb-2`}>
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-extrabold text-dark mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl ${step.shadow} z-10 shrink-0`}>
                    <span className="text-white font-extrabold text-lg">{step.number}</span>
                  </div>
                </div>

                <div className="md:hidden flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl ${step.shadow} shrink-0 mt-1`}>
                    <span className="text-white font-extrabold text-base">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-dark mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                <div className="hidden md:flex md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to bring your idea to life?"
        description="Start your journey today with a free consultation."
      />
    </>
  )
}
