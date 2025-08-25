<template>
    <main>
        <article class="article">
            <section class="web-hero web-hero-bg" aria-labelledby="hero" aria-describedby="hero-desc">
                <h1 id="hero" class="font-hero">Techit's Collection</h1>
                <p id="hero-desc" class="font-hero-desc">Techit's personal collection of various interesting, trending media/materials.</p>
            </section>
            <section class="web-section" aria-labelledby="docs" aria-describedby="docs-desc">
                <h3 id="docs" class="web-title">Interesting Documents</h3>
                <ul>
                    <li><a class="link" href="https://thawia.ng/portal/f/act/Copyright_Act2_TH.pdf">Thailand Copyright Act: พระราชบัญญัติลิขสิทธิ์ พ.ศ. ๒๕๓๗</a></li>
                </ul>
            </section>
            <section class="web-section" aria-labelledby="tools" aria-describedby="tools-desc">
                <h3 id="tools" class="web-title">Interesting Tools</h3>
                <ul>
                    <li><a class="link" href="https://github.com/Tyrrrz/YoutubeDownloader">YoutubeDownloader: Downloads videos and playlists from YouTube</a></li>
                </ul>
            </section>
        </article>
    </main>
</template>

<script setup>
const TITLE = "Collections"
const DESC = "Techit's personal-public collections"

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