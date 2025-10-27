<template>
    <main>
        <article v-if="project" :key="route.path" class="article">
            <section class="web-section" aria-labelledby="hero" aria-describedby="hero-desc">
                <section class="max-w-6xl mx-auto z-[1]">
                  <small class="prose-blog-pretext" aria-hidden="true">You are viewing project:</small>
                  <h1 id="hero" class="font-hero">{{ project?.title }}</h1>
                  <div class="post-cover">
                    <section class="w-full">
                      <p id="hero-desc" class="font-hero-desc">{{ project?.description }}</p>
                    </section>
                    <img :width="512" class="img-cover" :src="project?.logo" />
                  </div>
                </section>
            </section>
            <section class="web-section web-section">
              <div class="post-container">
                <ContentRenderer class="prose" v-if="project" :value="project"/>
                <section class="prose-toc">
                  <PostToc :toc="project?.body?.toc?.links"/>
                </section>
              </div>
            </section>
        </article>
        <article v-else class="article">
            <section class="web-section" aria-labelledby="hero" aria-describedby="hero-desc">
                <section class="max-w-6xl mx-auto z-[1]">
                  <small class="prose-blog-pretext" aria-hidden="true">An error occurred:</small>
                  <h1 id="hero" class="font-hero">Project not found!</h1>
                  <div class="post-cover">
                    <section class="w-full">
                      <p id="hero-desc" class="font-hero-desc">Check the URL; there might be a misspelling, or the project may not actually exist.</p>
                      <NuxtLink class="btn" to="/posts">All posts</NuxtLink>
                    </section>
                    <img :width="512" class="img-cover" src="https://files.techit.win/files/assets/zUJfK8p1i.webp" />
                  </div>
                </section>
            </section>
        </article>
    </main>
</template>
  
<script lang="ts" setup>
const config = useRuntimeConfig();
const route = useRoute()

// const { data: post } = await useAsyncData(route.path, () => {
//   return queryCollection('posts').path(route.path).first()
// })

const { data: project } = await useAsyncData(() => queryCollection('projects').path(route.path).first())
const ogUrl = config.public.baseUrl + route.path
useSeoMeta({
  title: project.value?.title,
  description: project.value?.description || 'A project without description',
  keywords: project.value?.tags?.join(', ') || 'project',
  ogTitle: project.value?.title + ' / ' + config.public.siteName,
  ogDescription: project.value?.description,
  ogType: 'article',
  ogUrl: ogUrl,
  ogImage: project.value?.logo || undefined,
  ogSiteName: config.public.siteName,
  twitterCard: 'summary_large_image',
  twitterTitle: project.value?.title + ' / ' + config.public.siteName,
  twitterDescription: project.value?.description,
  twitterImage: project.value?.logo || undefined,
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