import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { EMAIL, PHONE } from '@/lib/constants'

import { SITE_URL } from '@/lib/constants'

export const metadata = {
  title: 'Terms of Service',
  description: 'StarScience Lab terms of service - terms governing the use of our website and manufacturing services.',
  alternates: { canonical: `${SITE_URL}/terms` },
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Terms of Service - StarScience Lab',
    description: 'Terms governing the use of our website and services.',
  },
}

export default function TermsPage() {
  return (
    <>
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-turquoise/20 to-navy/60" />
        <div className="relative max-w-4xl mx-auto px-4 py-32 text-center animate-fade-in">
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-xs font-bold uppercase tracking-widest mb-6 animate-slide-down">
            Legal
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Terms of Service</h1>
          <p className="text-lg md:text-xl text-white/80">Terms governing the use of our website and services</p>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet/5 rounded-full blur-3xl" />
        <div className="max-w-3xl mx-auto px-4 relative">
          <p className="text-sm text-gray-400 mb-8">Last updated: January 1, 2026</p>

          <div className="prose prose-lg max-w-none
            prose-headings:text-dark prose-headings:font-extrabold
            prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-600 prose-p:leading-relaxed
            prose-a:text-turquoise prose-a:no-underline prose-a:font-bold hover:prose-a:underline
            prose-strong:text-dark
            prose-li:text-gray-600
            prose-ul:space-y-2
            prose-ol:space-y-2"
          >
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using the StarScience Lab website and services, you agree to be bound by these Terms of Service.
              If you do not agree with any part of these terms, you may not use our website or services.
            </p>

            <h2>Services Description</h2>
            <p>
              StarScience Lab provides private label and custom formulation supplement manufacturing services, including but
              not limited to product development, manufacturing, labeling, and packaging. All services are subject to a
              separate agreement between StarScience Lab and the client.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property of
              StarScience Lab or its content suppliers and is protected by applicable intellectual property laws.
              You may not reproduce, distribute, or create derivative works without our express written consent.
            </p>

            <h2>User Responsibilities</h2>
            <p>When using our website and services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Not use the website for any unlawful purpose</li>
              <li>Not interfere with the proper operation of the website</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
            </ul>

            <h2>Orders and Payment</h2>
            <p>
              All orders are subject to acceptance and availability. Pricing is subject to change without notice.
              A 50% deposit is required to begin production, with the remaining balance due upon completion prior to shipping.
              Payment terms are outlined in your service agreement.
            </p>

            <h2>Product Claims</h2>
            <p>
              StarScience Lab manufactures products according to the specifications provided by the client. It is the
              client&apos;s responsibility to ensure that all product claims, labeling, and marketing materials comply with
              applicable FDA regulations and federal guidelines.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              StarScience Lab shall not be liable for any indirect, incidental, special, consequential, or punitive damages
              arising out of or relating to the use of our website or services. Our total liability shall not exceed the
              amount paid by you for the specific service giving rise to the claim.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless StarScience Lab, its officers, employees, and agents from any claims,
              damages, losses, liabilities, and expenses arising out of your use of the website or services, or your
              violation of these terms.
            </p>

            <h2>Termination</h2>
            <p>
              We reserve the right to terminate or suspend access to our website and services at any time, without prior
              notice, for conduct that we believe violates these terms or is harmful to other users, us, or third parties.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of Florida,
              without regard to its conflict of law provisions.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting
              to this page. Your continued use of the website after changes constitutes acceptance of the new terms.
            </p>

            <h2>Contact</h2>
            <p>
              For questions about these Terms of Service, please contact us at{' '}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or call{' '}
              <a href={`tel:${PHONE.replace(/\D/g, '')}`}>{PHONE}</a>.
            </p>
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
