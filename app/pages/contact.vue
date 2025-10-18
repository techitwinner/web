<template>
    <main>
        <article class="article">
            <section class="web-section" aria-labelledby="hero" aria-describedby="hero-desc">
                <h1 id="hero" class="font-hero">Contact Techit</h1>
                <p id="hero-desc" class="font-hero-desc">You can reach me in countless ways — I’m on basically every social media app out there.</p>
            </section>
            <section class="web-section" aria-labelledby="decentralized" aria-describedby="decentralized-paragraph-1">
                <h2 class="web-title" id="decentralized">Decentral&shy;ized Ways</h2>
                <p id="decentralized-paragraph-1">I recommended to contact me via these given ways.</p>
                <section class="card-container">
                    <a class="card" href="mailto:techit@thawia.ng">
                        <div class="card-content">
                            ✉️ techit@thawia.ng
                        </div>
                    </a>
                    <a class="card" href="mailto:techit@dailitation.xyz">
                        <div class="card-content">
                            ✉️ techit@dailitation.xyz
                        </div>
                    </a>
                    <a class="card" href="mailto:techit@unix.in.th">
                        <div class="card-content">
                            ✉️ techit@unix.in.th
                        </div>
                    </a>
                    <a class="card" href="mailto:techit.th@icloud.com">
                        <div class="card-content">
                            ✉️ techit.th@icloud.com
                        </div>
                    </a>
                    <a class="card" href="https://furnu.org/@techit">
                        <div class="card-content">
                            techit@furnu.org — Mastodon
                        </div>
                    </a>
                    <div class="card">
                        <div class="card-content">
                            techitwinner@matrix.org — Matrix
                        </div>
                    </div>
                </section>
            </section>
            <section class="web-section" aria-labelledby="centralized" aria-describedby="centralized-paragraph-1">
                <h2 class="web-title" id="centralized">Social Media</h2>
                <p id="centralized-paragraph-1">If I do not reply to messages sent via contact above, plesae kindly contact me via these social media accounts.</p>
                <section class="card-container">
                    <a class="card" href="https://x.com/techitwinner">
                        <div class="card-content">
                            @techitwinner — X (Twitter)
                        </div>
                    </a>
                    <a class="card" href="https://tiktok.com/@techitwinner">
                        <div class="card-content">
                            @techitwinner — TikTok
                        </div>
                    </a>
                    <a class="card" href="https://instagram.com/techitwinner">
                        <div class="card-content">
                            @techitwinner — Instagram
                        </div>
                    </a>
                    <a class="card" href="https://facebook.com/@techitwinner">
                        <div class="card-content">
                            @techitwinner — Facebook
                        </div>
                    </a>
                    <a class="card" href="https://bsky.app/profile/thawia.ng">
                        <div class="card-content">
                            @thawia.ng — BlueSky
                        </div>
                    </a>
                </section>
            </section>
        </article>
    </main>
</template>

<script setup>
const config = useRuntimeConfig();
const TITLE = "Contact"
const DESC = "How to contact Techit"

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