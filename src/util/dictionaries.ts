import 'server-only'
import type { Locale } from '@/i18n.config'

const dictionaries = {
  lv: () => import('@/locales/lv.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()