import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  css: ["/assets/css/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL
    }
  },
  modules: ['@nuxt/content', '@nuxtjs/sitemap', '@nuxt/image', '@nuxt/eslint', '@nuxtjs/color-mode', '@nuxt/icon'],
  app: {
    head: {
      titleTemplate: `%s / ${process.env.NUXT_PUBLIC_SITE_NAME || 'thawia.ng'}`,
      meta: [
        { name: 'description', content: `Just another personal website, Created by ${process.env.NUXT_PUBLIC_AUTHOR}` },
        { name: 'referrer', content: 'strict-origin-when-cross-origin' },
        { name: 'canonical', content: process.env.NUXT_PUBLIC_BASE_URL },
        { name: 'robots', content: 'index,follow' },
        { name: 'author', content: process.env.NUXT_PUBLIC_AUTHOR },
        { name: 'application-name', content: process.env.NUXT_PUBLIC_SITE_NAME },
        { name: 'keywords', content: 'techit, techit thawiang, techit, techitwinner, thawiang, dailitation, dtt, dailitation.xyz' },
        { name: 'theme-color', content: '#1355BE' },
        // Open Graph
        { property: 'og:title', content: `${process.env.NUXT_PUBLIC_SITE_NAME} by ${process.env.NUXT_PUBLIC_AUTHOR}` },
        { property: 'og:description', content: `Just another personal website, Created by ${process.env.NUXT_PUBLIC_AUTHOR}` },
        { property: 'og:url', content: process.env.NUXT_PUBLIC_BASE_URL },
        { property: 'og:site_name', content: process.env.NUXT_PUBLIC_BASE_URL },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' },
        // Twitter
        { name: 'twitter:creator', content: '@techitwinner' },
        { name: 'twitter:site', content: '@techitwinner' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:url', content: process.env.NUXT_PUBLIC_BASE_URL },
        { name: 'twitter:image', content: '' },
        // Apple Web App
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        { name: 'apple-mobile-web-app-title', content: process.env.NUXT_PUBLIC_AUTHOR }
      ],
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/favicon.ico' },
        // { rel: 'stylesheet', href: '/style.css' },
        // TYPEFACES
        { rel: 'stylesheet', href: '/fonts/inter/inter.css' },
      ],
      script: [
        // { src: '/js/ripple.js', type: 'text/javascript', defer: true },
        { src: '/js/nav.js', type: 'text/javascript', defer: true }
      ]
    },
  },
  icon: {
    customCollections: [
      { prefix: 'oundr', dir: './assets/icons/oundr' },
      { prefix: 'arpsh', dir: './assets/icons/arpsh' }
    ]
  }
})