<template>
    <main>
        <article class="article">
            <section class="web-hero" aria-labelledby="hero" aria-describedby="hero-desc">
                <h1 id="hero" class="font-hero">Fonts</h1>
                <p id="hero-desc" class="font-hero-desc">Welcome to /fonts! This page were created to list all fonts I have hosted it here, so you can use it too.</p>
            </section>
            <section class="web-section" aria-labelledby="roboto" aria-describedby="roboto-desc">
                <h3 id="roboto" class="web-title">Roboto Family</h3>
                <p id="roboto-desc">All Roboto Family hosted here, here's the CSS files</p>
                <ul>
                    <li><a class="link" href="/fonts/roboto/roboto.css">Roboto</a></li>
                    <li><a class="link" href="/fonts/roboto/serif/serif.css">Roboto Serif</a></li>
                    <li><a class="link" href="/fonts/roboto/mono/mono.css">Roboto Mono</a></li>
                </ul>
            </section>
            <section class="web-section" aria-labelledby="noto" aria-describedby="noto-desc">
                <h3 id="noto" class="web-title">Noto Sans</h3>
                <p id="noto-desc">Noto Sans, only Thai is hosted here right now and here's the CSS files</p>
                <ul>
                    <li><a class="link" href="/fonts/noto/thai/thai.css">Noto Sans Thai</a></li>
                </ul>
            </section>
            <section class="web-section" aria-labelledby="tiktok" aria-describedby="tiktok-desc">
                <h3 id="tiktok" class="web-title">TikTok Sans</h3>
                <p id="tiktok-desc">TikTok Sans from TikTok. Here's the CSS files</p>
                <ul>
                    <li><a class="link" href="/fonts/tiktoksans/tiktoksans.css">TikTok Sans</a></li>
                </ul>
            </section>
        </article>
    </main>
</template>

<script setup>
const TITLE = "Fonts"
const DESC = "Fonts hosted on thawia.ng"

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