import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  ssr: true,
  css: ["/assets/css/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  runtimeConfig: {
    public: {
      baseUrl: process?.env?.NUXT_PUBLIC_BASE_URL,
      siteAuthor: process?.env?.NUXT_PUBLIC_SITE_AUTHOR,
      siteName: process?.env?.NUXT_PUBLIC_SITE_NAME,
      twitterUsername: process?.env?.NUXT_PUBLIC_TWITTER_USERNAME,
      fontUrl: process?.env?.NUXT_PUBLIC_FONTS_URL
    }
  },
  modules: ['@nuxt/content', '@nuxtjs/sitemap', '@nuxt/image', '@nuxt/eslint', '@nuxtjs/color-mode', '@nuxt/icon'],
  app: {
    baseURL: process?.env?.NUXT_PUBLIC_BUILD_BASE_URL,
    // pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      titleTemplate: `%s / ${process?.env?.NUXT_PUBLIC_SITE_NAME}`,
      meta: [
        // { name: 'description', content: `Just another personal website, Created by ${process?.env?.NUXT_PUBLIC_AUTHOR}` }, // Included in pages/index.vue
        { name: 'referrer', content: 'strict-origin-when-cross-origin' },
        { name: 'robots', content: 'index,follow' },
        { name: 'author', content: process?.env?.NUXT_PUBLIC_AUTHOR },
        { name: 'application-name', content: process?.env?.NUXT_PUBLIC_SITE_NAME },
        { name: 'keywords', content: 'techit, techit thawiang, techit, techitwinner, thawiang' },
        { name: 'theme-color', content: '#0066FF' },
        // Open Graph
        { property: 'og:title', content: `${process?.env?.NUXT_PUBLIC_SITE_NAME} by ${process?.env?.NUXT_PUBLIC_AUTHOR}` },
        { property: 'og:description', content: `Just another personal website, Created by ${process?.env?.NUXT_PUBLIC_AUTHOR}` },
        { property: 'og:url', content: process?.env?.NUXT_PUBLIC_BASE_URL },
        { property: 'og:site_name', content: process?.env?.NUXT_PUBLIC_SITE_NAME },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' },
        // Twitter
        { name: 'twitter:creator', content: '@techitwinner' },
        { name: 'twitter:site', content: '@techitwinner' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:url', content: process?.env?.NUXT_PUBLIC_BASE_URL },
        { name: 'twitter:image', content: '' },
        // Apple Web App
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        { name: 'apple-mobile-web-app-title', content: process?.env?.NUXT_PUBLIC_AUTHOR }
      ],
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'canonical', href: process?.env?.NUXT_PUBLIC_BASE_URL },
        { rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/favicon.ico' },
        // TYPEFACES
        { rel: 'preconnect', href: 'https://fonts.thawiang.com/' },
        // { rel: 'stylesheet', href: 'https://fonts.thawiang.com/inter/inter.css' },
        { rel: 'stylesheet', href: 'https://fonts.thawiang.com/geist/geist.css' },
        { rel: 'stylesheet', href: 'https://fonts.thawiang.com/geist-mono/geist-mono.css' },
        { rel: 'stylesheet', href: 'https://fonts.thawiang.com/sarabun/sarabun.css' },
        { rel: 'stylesheet', href: 'https://fonts.thawiang.com/noto-serif/noto-serif-less.css' },
        { rel: 'stylesheet', href: 'https://fonts.thawiang.com/noto-serif-thai/noto-serif-thai.css' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": process?.env?.NUXT_PUBLIC_SITE_NAME,
            "url": process?.env?.NUXT_PUBLIC_BASE_URL
          })
        }
      ]
    },
  },
  icon: {
    customCollections: [
      { prefix: 'oundr', dir: './app/assets/icons/oundr' },
      { prefix: 'arpsh', dir: './app/assets/icons/arpsh' }
    ]
  },
  content: {
    build: {
      markdown: {
        remarkPlugins: {
          'remark-math': {},
        },
        rehypePlugins: {
          'rehype-katex': {}
        }
      }
    }
  },
  experimental: {
    // inlineSSRStyles: false,
  },
  routeRules: {
    "*": { experimentalNoScripts: true }, // one level deep, render all pages statically
    "posts/*": { experimentalNoScripts: true }, // one level deep, render all post pages statically
    "fonts": { experimentalNoScripts: false }, // except /fonts
  }
})