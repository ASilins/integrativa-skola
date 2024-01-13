export const i18n = {
  defaultLocale: 'lv',
  locales: ['lv']
} as const

export type Locale = (typeof i18n)['locales'][number]