<template>
    <main>
        <article class="article">
            <section class="web-section" aria-labelledby="hero" aria-describedby="hero-desc">
                <h1 id="hero" class="font-hero">Portal</h1>
                <p id="hero-desc" class="font-hero-desc">Take a portal to travel to various dimensions.</p>
            </section>
            <section class="web-section" aria-labelledby="projects" aria-describedby="projects-paragraph-1">
                <ul class="font-card-container">
                    <li>
                        <a :class="'font-card'" :href="baseUrl + '/portal/f/'">
                            <div class="font-card-content">
                                <h3>Files</h3>
                                <p>A portal that collects this website data, whether it's mine or not.</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a :class="'font-card'" :href="baseUrl + '/portal/s/'">
                            <div class="font-card-content">
                                <h3>Share</h3>
                                <p>A portal that were created by me to share media, It works like Google Drive public share.</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>
        </article>
    </main>
</template>

<script setup>
const config = useRuntimeConfig();
const TITLE = "Portal"
const DESC = "Choose your way wisely."
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
