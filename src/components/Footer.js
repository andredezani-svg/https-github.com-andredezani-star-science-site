import Link from 'next/link'
import Image from 'next/image'
import Icon from '@/components/Icon'
import { PHONE, EMAIL, SITE_NAME, ADDRESS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-navy via-navy-light to-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="mb-4 flex items-center justify-start">
              <div className="relative inline-flex items-center justify-center p-1 rounded-2xl bg-gradient-to-br from-turquoise/10 via-transparent to-violet/10">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-turquoise/10 to-violet/10 blur-sm" />
                <Image src="/logo-bco.png" alt="StarScience Lab" width={180} height={60} className="h-16 w-auto drop-shadow-lg" />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Premier private label and custom formulation supplement and cosmetics manufacturing. 
              We help brands navigate the manufacturing process with ease.
            </p>
          </div>

          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-widest mb-5 relative inline-block after:block after:w-8 after:h-0.5 after:bg-violet after:mt-2">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-gray-400 hover:text-violet transition-colors hover:translate-x-1 inline-block">Home</Link>
              <Link href="/about" className="text-sm text-gray-400 hover:text-violet transition-colors hover:translate-x-1 inline-block">About Us</Link>
              <Link href="/services" className="text-sm text-gray-400 hover:text-violet transition-colors hover:translate-x-1 inline-block">Services</Link>
              <Link href="/products" className="text-sm text-gray-400 hover:text-violet transition-colors hover:translate-x-1 inline-block">Products</Link>
              <Link href="/process" className="text-sm text-gray-400 hover:text-violet transition-colors hover:translate-x-1 inline-block">Process</Link>
              <Link href="/faq" className="text-sm text-gray-400 hover:text-violet transition-colors hover:translate-x-1 inline-block">FAQ</Link>
              <Link href="/contact" className="text-sm text-gray-400 hover:text-violet transition-colors hover:translate-x-1 inline-block">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-widest mb-5 relative inline-block after:block after:w-8 after:h-0.5 after:bg-violet after:mt-2">
              Contact Info
            </h4>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Icon name="phone" className="w-4 h-4 text-violet shrink-0" />
                <span>{PHONE}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="email" className="w-4 h-4 text-violet shrink-0" />
                <span>{EMAIL}</span>
              </div>
              <div className="flex items-start gap-2 mt-1">
                <Icon name="map-pin" className="w-4 h-4 text-violet shrink-0 mt-0.5" />
                <span>{ADDRESS.city}, {ADDRESS.state}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME} LLC — All Rights Reserved</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-violet transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-violet transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
