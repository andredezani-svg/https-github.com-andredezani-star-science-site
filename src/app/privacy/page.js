import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { EMAIL, PHONE } from '@/lib/constants'

import { SITE_URL } from '@/lib/constants'

export const metadata = {
  title: 'Privacy Policy',
  description: 'StarScience Lab privacy policy - how we collect, use, and protect your information.',
  alternates: { canonical: `${SITE_URL}/privacy` },
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Privacy Policy - StarScience Lab',
    description: 'How we collect, use, and protect your information.',
  },
}

export default function PrivacyPage() {
  return (
    <>
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-turquoise/20 to-navy/60" />
        <div className="relative max-w-4xl mx-auto px-4 py-32 text-center animate-fade-in">
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-xs font-bold uppercase tracking-widest mb-6 animate-slide-down">
            Legal
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Privacy Policy</h1>
          <p className="text-lg md:text-xl text-white/80">How we collect, use, and protect your information</p>
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
            <h2>Introduction</h2>
            <p>
              StarScience Lab LLC (&ldquo;StarScience Lab,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide when you fill out a form, request a quote, or contact us. This includes:
            </p>
            <ul>
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information, including your IP address, browser type,
              operating system, referring URLs, and browsing behavior through cookies and similar technologies.
            </p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li>To respond to your inquiries and provide quotes</li>
              <li>To process and fulfill orders</li>
              <li>To improve our website and services</li>
              <li>To send periodic emails regarding your order or other products and services</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted
              third-party service providers who assist us in operating our website and conducting our business, provided they agree
              to keep your information confidential.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information. However, no method of transmission
              over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience. You can choose to disable cookies in your browser
              settings, though this may affect some functionality of the site.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of
              those sites. We encourage you to review their privacy policies.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated
              revision date. Your continued use of the website after changes constitutes acceptance of the updated policy.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or call{' '}
              <a href={`tel:${PHONE.replace(/\D/g, '')}`}>{PHONE}</a>.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to get started?"
        description="Contact us today for a free quote and consultation."
      />
    </>
  )
}
