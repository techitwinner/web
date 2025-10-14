<template>
    <main>
        <article v-if="post" class="article">
            <section class="web-section" aria-labelledby="hero" aria-describedby="hero-desc">
                <section class="max-w-6xl mx-auto z-[1]">
                  <small class="prose-blog-pretext" aria-hidden="true">You are reading blog post:</small>
                  <h1 id="hero" class="font-hero">{{ post?.title }}</h1>
                  <div class="post-cover">
                    <section class="w-full">
                      <p id="hero-desc" class="font-hero-desc">{{ post?.description }}</p>
                    </section>
                    <img :width="512" class="img-cover" :src="post?.coverImage" />
                  </div>
                </section>
            </section>
            <section class="web-section web-section" aria-labelledby="post-content" aria-describedby="post-content-desc">
                <div class="prose">
                    <ContentRenderer v-if="post" :value="post"/>
                </div>
            </section>
        </article>
        <article v-else class="article">
            <section class="web-section" aria-labelledby="hero" aria-describedby="hero-desc">
                <section class="max-w-6xl mx-auto z-[1]">
                  <small class="prose-blog-pretext" aria-hidden="true">An error occurred:</small>
                  <h1 id="hero" class="font-hero">Post not found!</h1>
                  <div class="post-cover">
                    <section class="w-full">
                      <p id="hero-desc" class="font-hero-desc">Check the URL; there might be a misspelling, or the post may not actually exist.</p>
                      <NuxtLink class="btn" to="/posts">All posts</NuxtLink>
                    </section>
                    <img :width="512" class="img-cover" src="https://files.thawia.ng/files/assets/zUJfK8p1i.webp" />
                  </div>
                </section>
            </section>
            <section class="web-section web-section" aria-labelledby="post-content" aria-describedby="post-content-desc">
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

// const { data: post } = await useAsyncData(route.path, () => {
//   return queryCollection('posts').path(route.path).first()
// })

const { data: post } = await useAsyncData(() => queryCollection('posts').path(route.path).first())

const ogUrl = config.public.baseUrl + route.path
useSeoMeta({
  title: post.value?.title,
  description: post.value?.description || 'Content from our blog',
  keywords: post.value?.tags?.join(', ') || 'blog, article, post',
  ogTitle: post.value?.title + ' / ' + config.public.siteName,
  ogDescription: post.value?.description,
  ogType: 'article',
  ogUrl: ogUrl,
  ogImage: post.value?.coverImage || undefined,
  ogSiteName: config.public.siteName,
  twitterCard: 'summary_large_image',
  twitterTitle: post.value?.title + ' / ' + config.public.siteName,
  twitterDescription: post.value?.description,
  twitterImage: post.value?.coverImage || undefined,
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