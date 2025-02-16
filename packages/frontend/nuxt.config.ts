// https://nuxt.com/docs/api/configuration/nuxt-config

const AUTHOR = "Techit Thawiang";
const SITE_NAME = "Techit’s Home"
const IMAGE_DOMAINS = [
  "files.techit.win",
  "anotherfiles.techit.win",
  "anotherfiles.techit.win"
]

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ["/assets/css/global.css"],
  modules: ["@nuxtjs/i18n", "@nuxt/image", "@nuxtjs/color-mode"],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_URL,
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
      apiBaseFileSuffix: process.env.NUXT_PUBLIC_API_BASE_FILE_SUFFIX,
    }
  },
  image: {
    provider: "ipx",
    domains: IMAGE_DOMAINS
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      titleTemplate: `%s · Techit's Home`,
      meta: [
        { name: 'description', content: `Just another personal website, Created by ${AUTHOR}` },
        { name: 'referrer', content: 'strict-origin-when-cross-origin' },
        { name: 'robots', content: 'index,follow' },
        { name: 'author', content: AUTHOR },
        { name: 'application-name', content: SITE_NAME },
        { name: 'theme-color', content: '#50654E' },
        // Open Graph
        { property: 'og:title', content: `${SITE_NAME} by ${AUTHOR}` },
        { property: 'og:description', content: `Just another personal website, Created by ${AUTHOR}` },
        { property: 'og:url', content: process.env.NUXT_PUBLIC_BASE_URL },
        { property: 'og:site_name', content: process.env.NUXT_PUBLIC_BASE_URL },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' },
        // Twitter
        { name: 'twitter:creator', content: '@techitwinner' },
        { name: 'twitter:site', content: '@techitwinner' },
        { name: 'twitter:card', content: 'summary' },
        // Apple Web App
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        { name: 'apple-mobile-web-app-title', content: AUTHOR }
      ],
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/favicon.ico' },
      ],
    },
  },
  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    lazy: true,
    locales: [
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        file: 'en.json',
        isCatchallLocale: true,
      },
      {
        code: 'th',
        language: 'th-TH',
        name: 'ภาษาไทย',
        file: 'th.json',
      }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_language',
      fallbackLocale: 'en',
    },
    vueI18n: 'i18n.config.ts',
  }
})
