import en from '~/i18n/locales/en.json'
import th from '~/i18n/locales/th.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    th,
  },
}))