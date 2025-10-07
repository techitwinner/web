<template>
    <main>
        <article class="article">
            <section class="web-section" aria-labelledby="hero" aria-describedby="hero-desc">
                <h1 id="hero" class="font-hero">Techit's Collection</h1>
                <p id="hero-desc" class="font-hero-desc">Techit's personal collection of various interesting, trending media/materials.</p>
            </section>
            <section class="web-section" aria-labelledby="docs" aria-describedby="docs-desc">
                <h3 id="docs" class="web-title">All Bookmarks</h3>
                <ul>
                    <li><a class="link" href="https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/latest-virtio/virtio-win.iso">VirtIO Windows Driver</a></li>
                    <li><a class="link" href="https://files.thawia.ng/files/act/Copyright_Act2_TH.pdf">Thailand Copyright Act: พระราชบัญญัติลิขสิทธิ์ พ.ศ. ๒๕๓๗</a></li>
                    <li><a class="link" href="https://github.com/Tyrrrz/YoutubeDownloader">YoutubeDownloader: Downloads videos and playlists from YouTube</a></li>
                </ul>
            </section>
        </article>
    </main>
</template>

<script setup>
const TITLE = "Collections"
const DESC = "Techit's personal-public collections"

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