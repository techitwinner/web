<template>
    <main>
        <article class="article">
            <h1>Techit's Collections</h1>
            <p>
                Collections of interesting documents.
            </p>
            <ul>
                <li>
                    <a href="/portal/f/act/Copyright_Act2_TH.pdf"><b>Thailand Copyright Act</b>: พระราชบัญญัติลิขสิทธิ์ พ.ศ. ๒๕๓๗</a>
                </li>
            </ul>
            <p>
                Collections of interesting tools.
            </p>
            <ul>
                <li>
                    <a href="https://github.com/Tyrrrz/YoutubeDownloader"><b>YoutubeDownloader</b>: Downloads videos and playlists from YouTube</a>
                </li>
            </ul>
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