<template>
    <main>
        <article class="article">
            <section class="web-section" aria-labelledby="hero" aria-describedby="hero-desc">
                <h1 id="hero" class="font-hero">{{TITLE}}</h1>
                <p id="hero-desc" class="font-hero-desc">{{ DESC }}</p>
            </section>
            <section class="web-section">
                <p>{{ config.public.siteName }} (<NuxtLink class="link" href="/">https://techit.win</NuxtLink>) does <strong>not</strong> use cookies or any similar tracking technologies.</p>
                <p>We do not store any cookies on your device, and we do not track your browsing activity. Your privacy is completely respected and your data is never shared or sold.</p>
                <p>If you have any questions about this Cookies Policy, you can contact me here:</p>
                <ul>
                    <li><NuxtLink class="link" href="/contact">/contact</NuxtLink></li>
                </ul>
            </section>
        </article>
    </main>
</template>

<script setup>
const config = useRuntimeConfig();
const baseUrl = config.public.baseUrl
const TITLE = "Cookies Policy"
const DESC = "Last updated: November 9, 2025"

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