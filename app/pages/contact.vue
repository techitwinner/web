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
                <ul class="list-disc">
                    <li>
                        <p>techit@thawia.ng — E-mail Address</p>
                    </li>
                    <li>
                        <p>@techit@furnu.org — Mastodon</p>
                    </li>
                    <li>
                        <p>@techitwinner:matrix.org — Matrix</p>
                    </li>
                </ul>
            </section>
            <section class="web-section" aria-labelledby="centralized" aria-describedby="centralized-paragraph-1">
                <h2 class="web-title" id="centralized">Social Media</h2>
                <p id="centralized-paragraph-1">If I do not reply to messages sent via contact above, plesae kindly contact me via these social media accounts.</p>
                <ul class="list-disc">
                    <li>
                        <p>@techitwinner — X (Twitter)</p>
                    </li>
                    <li>
                        <p>@techitwinner — TikTok</p>
                    </li>
                    <li>
                        <p>@techitwinner — Instagram</p>
                    </li>
                    <li>
                        <p>@techitwinner — Facebook</p>
                    </li>
                    <li>
                        <p>@thawia.ng — BlueSky</p>
                    </li>
                </ul>
            </section>
        </article>
    </main>
</template>

<script setup>
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