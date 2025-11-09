<template>
    <main style="background: transparent;">
        <div class="frosted-glass-backdrop-dynamic"></div>
        <article class="article article-no-bg" v-if="tree">
            <section class="web-section web-section-narrow-very">
                <img :width="128" :height="128" :src="tree.profile">
                <h1 v-if="tree.name">{{ tree.name }}</h1>
                <p v-if="tree.desc">{{ tree.desc }}</p>
            </section>
            <section class="web-section web-section-narrow-very">
                <div v-for="link in tree.links">
                    <a class="tree-link-card" :href="link.url" v-if="link.enabled && !link.separate">
                        <span v-if="link.ico" class="material-symbols-outlined">{{ link.ico }}</span>
                        <img v-else-if="link.img" width="40" height="40" class="tree-link-card-img" :src="link.img">
                        <div v-if="link.name && link.desc" class="tree-link-card-content">
                          <span>{{ link.name }}</span>
                          <span class="tree-link-card-content-desc">{{ link.desc }}</span>
                        </div>
                        <span v-else-if="link.name">{{ link.name }}</span>
                    </a>
                    <hr v-else-if="link.separate">
                </div>
            </section>
            <section class="web-section web-section-narrow-very">
              <a class="btn btn-sm" href="/tree">Get your own Tree</a>
              <p class="web-footer-notice"><a class="link" href="/legal/privacy-policy">Privacy Policy</a> | <a class="link" href="/legal/cookies-policy">Cookies Policy</a> | <a class="link" href="/legal/terms-of-services">Terms of Services</a></p>
            </section>
        </article>
    </main>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'tree'
})

interface TreeUserData {
  id: string
  index: boolean
  twitterCreator: string
  enabled: boolean
  name: string
  desc: string
  cover: string
  background: string
  profile: string
  links: Record<string, TreeUserDataLink>
};

interface TreeUserDataLink {
    id: string
    ico: string
    img: string
    enabled: boolean
    separate: boolean
    name: string
    desc: string
    url: string
}

const config = useRuntimeConfig();
const route = useRoute();
const JSON_URL = config.public.treeJsonUrl
const treeUserData = JSON_URL + route.params.slug + '.json'
const { data: tree, error } = await useAsyncData('treeUserData', () =>
  $fetch<TreeUserData>(treeUserData)
)

if (error.value) {
  console.error('User tree fetch failed:', error.value)
}

if (error.value?.statusCode === 404) {
  await navigateTo('/tree')
}

if (tree.value) {
  useSeoMeta({
    titleTemplate: '%s',
    title: `${tree.value.name}'s Link`,
    description: tree.value.desc,
    ogTitle: `${tree.value.name}'s Link`,
    ogDescription: tree.value.desc,
    ogSiteName: `${tree.value.name}'s Link`,
    twitterCard: 'summary_large_image',
    twitterTitle: tree.value.name,
    twitterDescription: tree.value.desc,
    twitterSite: config.public.twitterUsername,
    ogImage: tree.value.cover,
    twitterImage: tree.value.cover,
    ogImageType: 'image/jpeg',
    ogLocale: 'en_US',
    ogType: 'profile',
    twitterCreator: tree.value.twitterCreator || null,
    author: tree.value.name || null,
    keywords: `${tree.value.name}, links, ${tree.value.desc.replace(/\s+/g, ', ')}`,
  })

  useHead({
    link: [
      {
        rel: "canonical",
        href: config.public.baseUrl + '/tree/' + route.params.slug
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: tree.value.profile || '/favicon.ico',
      }
    ]
  })

  if (tree.value.index) {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": tree.value.name,
            "description": tree.value.desc,
            "url": config.public.baseUrl + '/' + route.params.slug,
            "image": tree.value.profile || tree.value.cover,
            "sameAs": Object.values(tree.value.links || {}).map(l => l.url),
          }),
        },
      ],
    })
  }
}

if (tree.value?.index) {
  useSeoMeta({
      robots: "index,follow",
  })
} else {
  useSeoMeta({
      robots: "noindex,nofollow",
  })
}

onMounted(() => {
  if (tree.value?.background) {
    document.body.style.backgroundImage = `url('${tree.value.background}')`
  }
})
</script>

<style>
body {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}
</style>