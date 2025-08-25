<template>
    <main>
        <article class="article">
            <section class="web-hero web-hero-bg" aria-labelledby="hero" aria-describedby="what-does-he-do?">
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

useHead({
  title: TITLE,
  meta: [
    { name: 'description', content: DESC },
    { property: 'og:title', content: TITLE },
    { property: 'og:description', content: DESC },
    { property: 'og:type', content: 'website' }
  ]
})
</script>