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
                        {{ link.name }}
                    </a>
                    <hr v-else-if="link.separate">
                </div>
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

const tree = ref<TreeUserData | null>(null)

onMounted(async () => {
  try {
    const data = await $fetch<TreeUserData>(treeUserData)

    if (!data) return

    tree.value = data

  } catch (err) {
    console.error('User tree fetch failed:', err)
  }
  document.body.style.backgroundImage = `url('${tree.value?.background}')`

  useSeoMeta({
    titleTemplate: "%s",
    title: tree.value?.name + "'s Link",
    description: tree.value?.desc,
    ogTitle: tree.value?.name,
    ogDescription: tree.value?.desc,
    ogSiteName: config.public.siteName,
    twitterCard: 'summary_large_image',
    twitterTitle: tree.value?.name,
    twitterDescription: tree.value?.desc,
    twitterSite: config.public.twitterUsername
  })
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