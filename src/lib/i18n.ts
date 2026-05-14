import en from '@/locales/en/common.json'
import es from '@/locales/es/common.json'
import pt from '@/locales/pt/common.json'
import fr from '@/locales/fr/common.json'
import de from '@/locales/de/common.json'

const resources = { en, es, pt, fr, de } as const

export type Locale = keyof typeof resources
export const locales: Locale[] = ['en', 'es', 'pt', 'fr', 'de']
export const defaultLocale: Locale = 'en'

export function t(key: string, locale: Locale = defaultLocale): string {
  const keys = key.split('.')
  let value: Record<string, unknown> | string = resources[locale] as unknown as Record<string, unknown>
  for (const k of keys) {
    if (typeof value === 'object' && value !== null && k in value) {
      value = value[k] as string
    } else {
      return key
    }
  }
  return typeof value === 'string' ? value : key
}
