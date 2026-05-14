import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import CTASection from '@/components/CTASection'
import Icon from '@/components/Icon'

import { SITE_URL } from '@/lib/constants'

export const metadata = {
  title: 'Products',
  description: 'Browse our supplement product categories: sports nutrition, health & wellness, hair skin & nails, electrolytes, weight management, capsules, powders, and custom formulations.',
  alternates: { canonical: `${SITE_URL}/products` },
  openGraph: {
    title: 'Products - StarScience Lab',
    description: 'Premium supplement categories for your brand - capsules, powders, sports nutrition, and more.',
  },
}

const categories = [
  {
    title: 'Sports Nutrition',
    desc: 'High-performance formulas for athletes and active lifestyles.',
    items: ['Pre-Workout', 'BCAAs & Amino Acids', 'Creatine', 'Protein Powders', 'Recovery Formulas'],
    image: '/sport.png',
    color: 'from-turquoise to-turquoise-dark',
  },
  {
    title: 'Health & Wellness',
    desc: 'Everyday supplements to support overall health and vitality.',
    items: ['Multivitamins', 'Immune Support', 'Digestive Health', 'Omega-3 & Fish Oil', 'Antioxidants'],
    image: '/hw.png',
    color: 'from-violet to-violet-dark',
  },
  {
    title: 'Hair, Skin & Nails',
    desc: 'Beauty-from-within formulations for radiant results.',
    items: ['Biotin Complex', 'Collagen Peptides', 'Hair Growth Formulas', 'Skin Elixirs', 'Nail Strengtheners'],
    image: '/hsn.png',
    color: 'from-amber to-amber-dark',
  },
  {
    title: 'Electrolytes & Hydration',
    desc: 'Essential hydration solutions for peak performance and recovery.',
    items: ['Electrolyte Powders', 'Hydration Tablets', 'Sports Drinks', 'Recovery Blends'],
    image: '/eletro.png',
    color: 'from-navy to-navy-light',
  },
  {
    title: 'Weight Management',
    desc: 'Targeted formulas to support fitness and weight goals.',
    items: ['Fat Burners', 'Meal Replacement', 'Appetite Control', 'Thermogenics'],
    image: '/weight.png',
    color: 'from-turquoise to-violet',
  },
  {
    title: 'Capsules',
    desc: 'Easy-to-swallow capsules for precise, convenient dosing.',
    items: ['Vegetable Capsules', 'Softgels', 'Time-Release', 'Custom Blends'],
    image: '/caps.png',
    color: 'from-violet to-amber',
  },
  {
    title: 'Powders',
    desc: 'Versatile powder formats for customizable supplementation.',
    items: ['Scoop Powders', 'Stick Packs', 'Bulk Formats', 'Custom Flavors'],
    image: '/pow.png',
    color: 'from-amber to-navy',
  },
  {
    title: 'Custom Formulations',
    desc: 'Proprietary blends designed exclusively for your brand.',
    items: ['Concept Development', 'Ingredient Sourcing', 'Prototype Samples', 'Scale-Up Production'],
    image: '/custom.png',
    color: 'from-turquoise to-violet',
  },
]

export default function ProductsPage() {
  return (
    <>
      <HeroSection
        title="Our Products"
        subtitle="Premium supplement categories for your brand"
        badge="Product Categories"
        bgImage="/hero-produto.png"
        minHeight={false}
      />

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-turquoise/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-violet/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-14">
            <span className="inline-block text-turquoise font-bold text-sm uppercase tracking-widest mb-3">What We Make</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Browse Our Product Categories</h2>
            <p className="text-gray-600 mt-3 text-lg">From capsules to powders — we manufacture it all.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="group bg-white rounded-2xl border border-gray-border hover:border-turquoise/30 hover:shadow-2xl hover:shadow-turquoise/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <div className="relative h-52 overflow-hidden">
                  <Image src={cat.image} alt={cat.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-extrabold text-dark mb-3 group-hover:text-turquoise transition-colors">{cat.title}</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">{cat.desc}</p>
                  <ul className="space-y-2.5">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-dark font-medium">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-turquoise to-violet flex items-center justify-center shrink-0">
                          <Icon name="check-thin" className="w-3 h-3 text-white" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Interested in a specific product?"
        description="Let us know what you need and we will make it happen."
        buttonText="REQUEST A QUOTE"
      />
    </>
  )
}
