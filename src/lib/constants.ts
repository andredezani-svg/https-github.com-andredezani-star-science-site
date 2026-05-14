export const SITE_NAME = 'StarScience Lab'
export const SITE_TAGLINE = 'HealthCare Manufacturing'
export const SITE_DESCRIPTION = 'Premier private label and custom formulation supplement manufacturing. Low minimum orders and fast turnaround times.'

export const SITE_URL: string = process.env.NEXT_PUBLIC_SITE_URL || 'https://starsciencelab.com'

export const PHONE = '(689) 322-1290'
export const PHONE_RAW = '+16893221290'
export const EMAIL = 'info@starsciencelab.com'

export const ADDRESS = {
  city: 'Kissimmee' as const,
  state: 'Florida' as const,
  country: 'US' as const,
}

export const SOCIAL = {
  ogImage: '/logo.png' as const,
  ogWidth: 1200,
  ogHeight: 630,
}
