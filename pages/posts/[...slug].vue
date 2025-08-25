<template>
    <!-- <div class="page">
        <div>
            <img class="aspect-video w-full h-full object-cover rounded-[calc(var(--ui-radius)*1.5)] mb-12" :alt="post?.title" :src="post?.coverImage">
            <ContentHeading :data="post"/>
        </div>
        <div>
            <div class="flex not-md:flex-col-reverse gap-2">
                <article class="prose prose-zinc dark:prose-invert w-full max-w-[48rem]">
                    <ContentRenderer v-if="post" :value="post"/>
                    {{ post ? post : 'wtf' }}
                </article>
                <div class="flex h-fit md:sticky top-16">
                    <BlogToC :toc="post?.body?.toc?.links"/>
                </div>
            </div>
        </div>
    </div> -->
    <main>
        <article class="article">
            <section class="web-hero relative web-hero-bg bg-cover " :style="`background-image: url('${baseUrl + '/portal/f/assets/' + post?.coverImage}');`" aria-labelledby="hero" aria-describedby="hero-desc">
                <div class="absolute inset-0 bg-(--color-deep-semidark)/80"></div>
                <h1 id="hero" class="font-hero z-[1]">{{ post?.title }}</h1>
                <p id="hero-desc" class="font-hero-desc z-[1]">{{ post?.description }}</p>
            </section>
            <section class="web-section" aria-labelledby="post-content" aria-describedby="post-content-desc">
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