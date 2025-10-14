<template>
    <main>
        <article class="article">
            <section class="web-section" aria-labelledby="hero" aria-describedby="hero-desc">
                <h1 id="hero" class="font-hero">{{ TITLE }}</h1>
                <p id="hero-desc" class="font-hero-desc">{{ DESC }}</p>
            </section>
            <section class="web-section" aria-labelledby="latest-projects">
                <h2 class="web-title" id="latest-posts">All Projects</h2>
                <ProjectsArticleList/>
            </section>
        </article>
    </main>
</template>

<script setup>
const config = useRuntimeConfig();
const TITLE = "Projects"
const DESC = "My projects I spent my time on instead of playing games, this includes non-programming stuff too."

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