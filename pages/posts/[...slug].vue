<template>
    <main>
        <article class="article">
            <section class="web-hero-post web-hero-bg relative bg-cover bg-center" :style="`background-image: url('${baseUrl + '/portal/f/assets/' + post?.coverImage}');`" aria-labelledby="hero" aria-describedby="hero-desc">
                <div class="absolute inset-0 bg-(--color-deep-semidark)/80"></div>
                <section class="max-w-6xl mx-auto z-[1]">
                  <h1 id="hero" class="font-hero">{{ post?.title }}</h1>
                  <p id="hero-desc" class="font-hero-desc">{{ post?.description }}</p>
                </section>
            </section>
            <section class="web-section web-section-narrow" aria-labelledby="post-content" aria-describedby="post-content-desc">
                <div class="prose">
                    <ContentRenderer v-if="post" :value="post"/>
                </div>
            </section>
        </article>
    </main>
</template>
  
<script lang="ts" setup>
const config = useRuntimeConfig();
const baseUrl = config.public.baseUrl
const route = useRoute()

const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('posts').path(route.path).first()
})

const ogUrl = config.public.baseUrl + route.path
useSeoMeta({
  title: post.value?.title,
  description: post.value?.description || 'Content from our blog',
  keywords: post.value?.tags?.join(', ') || 'blog, article, post',
  ogTitle: post.value?.title + ' / thawia.ng',
  ogDescription: post.value?.description,
  ogType: 'article',
  ogUrl: ogUrl,
  ogImage: post.value?.coverImage ? baseUrl + '/portal/f/assets/' + post.value?.coverImage : undefined,
  ogSiteName: config.public.siteName,
  twitterCard: 'summary_large_image',
  twitterTitle: post.value?.title + ' / thawia.ng',
  twitterDescription: post.value?.description,
  twitterImage: post.value?.coverImage ? `${baseUrl}/portal/f/assets/${post.value?.coverImage}` : undefined,
  twitterSite: '@' + config.public.twitterUsername
})
</script>

<style>
.katex-html {
  display: none;
}
.katex-mathml {
  font-size: 1.2em;
}
</style>