<template>
    <main>
        <article class="article">
            <section class="web-section" aria-labelledby="hero" aria-describedby="what-does-he-do?">
                <h1 id="hero" class="font-hero">Tree</h1>
                <p id="what-does-he-do?" class="font-hero-desc">A SaaS from me to list all your <i>publicly-available</i> link and stuff.</p>
            </section>
            <section class="web-section" aria-labelledby="about-me" aria-describedby="about-me-paragraph-1">
                <h2 class="web-title" id="about-me">How to use?</h2>
                <p id="about-me-paragraph-1">Currently I don't have an easy way to make it, but you can <NuxtLink href="/contact">contact me</NuxtLink> to get one for yourself.</p>
            </section>
        </article>
    </main>
</template>

<script setup>
const config = useRuntimeConfig();
const baseUrl = config.public.baseUrl
const TITLE = "Tree"
const DESC = "A SaaS from me to list all your publicly-available link and stuff."

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
