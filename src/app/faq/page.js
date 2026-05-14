import HeroSection from '@/components/HeroSection'
import CTASection from '@/components/CTASection'
import FAQAccordion from '@/components/FAQAccordion'
import JsonLd from '@/components/JsonLd'
import { faqs } from '@/lib/faq-data'
import { SITE_URL } from '@/lib/constants'

export const metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about StarScience Lab supplement manufacturing: MOQ, turnaround times, certifications, custom flavoring, and more.',
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: 'FAQ - StarScience Lab',
    description: 'Everything you need to know about working with StarScience Lab.',
  },
}

export default function FAQPage() {
  return (
    <>
      <HeroSection
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about working with StarScience Lab"
        badge="Got Questions?"
        bgImage="/hero-faq.png"
        minHeight={false}
      />

      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }} />
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet/5 rounded-full blur-3xl" />
        <div className="max-w-3xl mx-auto px-4 relative">
          <FAQAccordion />
        </div>
      </section>

      <CTASection
        title="Still have questions?"
        description="We are happy to help. Reach out to our team."
        buttonText="CONTACT US"
      />
    </>
  )
}
