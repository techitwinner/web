<template>
    <main>
        <article class="article">
            <section class="web-section" aria-labelledby="hero" aria-describedby="what-does-he-do?">
                <h1 id="hero" class="font-hero">Terminal</h1>
                <p id="what-does-he-do?" class="font-hero-desc">This will be a emulator for website visitor (simulator)</p>
            </section>
            <section class="web-section" aria-labelledby="about-me" aria-describedby="about-me-paragraph-1">
                <h2 class="web-title" id="about-me">hi</h2>
                <p id="about-me-paragraph-1">imagine a linux terminal where you can list files or cat files i will do it here not now but later thx okay bye bye</p>
            </section>
            <section class="web-section">
                <p>additional info: robots are not allowed here temporary for whatever reason</p>
            </section>
        </article>
    </main>
</template>

<script setup>
const config = useRuntimeConfig();
const TITLE = "Terminal"
const DESC = "Terminal Emulator Simulator on thawia.ng by Techit Thawiang"
const baseUrl = config.public.baseUrl

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