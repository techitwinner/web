<template>
    <main>
        <article class="article">
            <section class="web-section" aria-labelledby="hero" aria-describedby="hero-desc">
                <h1 id="hero" class="font-hero">{{ TITLE }}</h1>
                <p id="hero-desc" class="font-hero-desc">{{ DESC }}</p>
            </section>
            <section class="web-section" aria-labelledby="latest-posts" aria-describedby="latest-posts-paragraph-1">
                <h2 class="web-title" id="latest-posts">All Posts</h2>
                <PostsArticleList />
            </section>
        </article>
    </main>
</template>

<script setup>
const config = useRuntimeConfig();
const TITLE = "Posts"
const DESC = "Also known as blog because this is where I post my thoughts, articles, and updates."

useSeoMeta({
  title: TITLE,
  description: DESC,
  ogTitle: TITLE + ' / ' + config.public.siteName,
  ogDescription: DESC,
  ogSiteName: config.public.siteName,
  twitterCard: 'summary_large_image',
  twitterTitle: TITLE + ' / ' + config.public.siteName,
  twitterDescription: DESC,
  twitterSite: config.public.twitterUsername
})
</script>