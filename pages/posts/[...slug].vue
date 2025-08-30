<template>
    <main>
        <article class="article">
            <section class="web-hero-post web-hero-bg relative bg-cover bg-center" :style="`background-image: url('${baseUrl + '/portal/f/assets/' + post?.coverImage}');`" aria-labelledby="hero" aria-describedby="hero-desc">
                <div class="absolute inset-0 bg-(--color-deep-semidark)/80"></div>
                <h1 id="hero" class="font-hero z-[1]">{{ post?.title }}</h1>
                <p id="hero-desc" class="font-hero-desc z-[1]">{{ post?.description }}</p>
            </section>
            <section class="web-section web-section-narrow" aria-labelledby="post-content" aria-describedby="post-content-desc">
                <div class="prose">
                    <ContentRenderer v-if="post" :value="post"/>
                    {{ post ? '' : 'Loading...' }}
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

const ogUrl = `${config.public.baseUrl}${route.path}`
useHead({
  title: post.value?.title || 'Untitled blog post',
  meta: [
    { name: 'description', content: post.value?.description || 'A blog post with no description provided.' },
    { property: 'og:title', content: `${post.value?.title || 'Untitled blog post'} · ${config.public.siteName}`},
    { property: 'og:description', content: post.value?.description || 'A blog post with no description provided.' },
    { property: 'og:url', content: ogUrl },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:title', content: `${post.value?.title || 'Untitled blog post'} · ${config.public.siteName}` },
    { name: 'twitter:description', content: post.value?.description || 'A blog post with no description provided.' }
  ]
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