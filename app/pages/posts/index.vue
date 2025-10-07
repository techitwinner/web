<template>
    <main>
        <article class="article">
            <section class="web-section" aria-labelledby="hero" aria-describedby="hero-desc">
                <h1 id="hero" class="font-hero">Posts</h1>
                <p id="hero-desc" class="font-hero-desc">This is where I post my thoughts, articles, and updates.</p>
            </section>
            <section class="web-section" aria-labelledby="latest-posts" aria-describedby="latest-posts-paragraph-1">
                <h2 class="web-title" id="latest-posts">All Posts</h2>
                <PostsArticleList />
            </section>
        </article>
    </main>
</template>

<script setup>
const TITLE = "Posts"
const DESC = "Techit's posts and writings."

useSeoMeta({
  title: TITLE,
  description: DESC,
  ogTitle: TITLE + ' / ' + config.public.siteName,
  ogDescription: DESC,
  ogImage: post.value?.coverImage || undefined,
  ogSiteName: config.public.siteName,
  twitterCard: 'summary_large_image',
  twitterTitle: TITLE + ' / ' + config.public.siteName,
  twitterDescription: DESC,
  twitterImage: post.value?.coverImage || undefined,
  twitterSite: '@' + config.public.twitterUsername
})
</script>