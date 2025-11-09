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
                        <span v-if="link.ico" class="material-symbols-outlined">{{ link.ico }}</span>{{ link.name }}
                    </a>
                    <hr v-else-if="link.separate">
                </div>
            </section>
            <section class="web-section web-section-narrow-very">
              <a class="btn btn-sm" href="/tree">Get your own Tree</a>
            </section>
        </article>
    </main>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const route = useRoute();
const JSON_URL = config.public.treeJsonUrl
const treeUserData = JSON_URL + route.params.slug + '.json'

interface TreeUserData {
  id: string
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
    enabled: boolean
    separate: boolean
    name: string
    desc: string
    url: string
}

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
    titleTemplate: "%s",
    title: `${tree.value.name}'s Link`,
    description: tree.value.desc,
    ogTitle: tree.value.name,
    ogDescription: tree.value.desc,
    ogSiteName: config.public.siteName,
    twitterCard: 'summary_large_image',
    twitterTitle: tree.value.name,
    twitterDescription: tree.value.desc,
    twitterSite: config.public.twitterUsername
  })
}

onMounted(() => {
  if (tree.value?.background) {
    document.body.style.backgroundImage = `url('${tree.value.background}')`
  }
})

definePageMeta({
    layout: 'tree'
})

useSeoMeta({
    robots: "noindex",
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