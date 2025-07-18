<template>
    <main>
        <article class="article">
            <section class="web-hero" aria-labelledby="hero" aria-describedby="what-does-he-do?">
                <img width="240" height="240" class="mb-6" src="https://thawia.ng/portal/f/assets/profile/techit/techit2025_student-cropped.jpg">
                <h1 id="hero" class="font-hero">Techit Thawiang</h1>
                <p id="what-does-he-do?" class="font-hero-desc">A 10th grader who's exploring computer science.</p>
            </section>
            <section class="web-section" aria-labelledby="about-me" aria-describedby="about-me-paragraph-1">
                <!-- <h2 class="web-title" id="about-me"><NuxtLink href="/about" title="Navigate to about me page." class="link link-no-underline">About Me <span aria-hidden="true" class="inline-icon">→</span></NuxtLink></h2> -->
                <h2 class="web-title" id="about-me">About Me</h2>
                <p id="about-me-paragraph-1">I'm a 15 years old 10th grader at Ko Pho Tuay Ngam Wittaya School. In my free time, I usually spend my time playing games or learning more about software engineering.</p>
                <p id="about-me-paragraph-2">In the future, I dream of having my own tech company, being a network engineer or being a civil engineer.</p>
            </section>
            <section class="web-section" aria-labelledby="projects" aria-describedby="projects-paragraph-1">
                <!-- <h2 class="web-title" id="projects"><NuxtLink href="/projects" title="Navigate to projects page." class="link link-no-underline">Projects <span aria-hidden="true" class="inline-icon">→</span></NuxtLink></h2> -->
                <h2 class="web-title" id="projects">Projects</h2>
                <p id="projects-paragraph-1">As I said above, I usually spend my free time learning more about software engineering. This includes server administration for <a class="link" href="https://dailitation.xyz">dailitation.xyz</a>. Over time, small and large projects have been born and have died.</p>
                <p id="projects-paragraph-2">Let's go take a look of my projects collection!</p>
                <div class="grid grid-cols-3 gap-2">
                    <a href="https://github.com/TechitWinner/warehouse" class="project-card">
                        <img :src="baseUrl + '/portal/f/assets/warehouse.jpg'">
                        <h3>Warehouse</h3>
                        <p title="I planned it to be my API for personal website and other stuff; written in Rust and Axum.">I planned it to be my API for personal website and other stuff; written in Rust and Axum.</p>
                    </a>
                    <a href="https://github.com/TechitWinner/web" class="project-card">
                        <img :src="baseUrl + '/portal/f/assets/web.png'">
                        <h3>Web</h3>
                        <p title="Nothing much, just this website written in Nuxt (Vue) and some cool CSS.">Nothing much, just this website written in Nuxt (Vue) and some cool CSS.</p>
                    </a>
                    <a href="https://github.com/TechitWinner/coinbag-pro" class="project-card">
                        <img src="https://opengraph.githubassets.com/79ca3021ce93e3d277062d399d623842564bc2f9407600e5b6102036f01e8277/TechitWinner/coinbag-pro">
                        <h3>Coinbag Pro</h3>
                        <p title="A handwriting typeface, created by me but it is a dead project now.">A handwriting typeface, created by me but it is a dead project now.</p>
                    </a>
                </div>
            </section>
        </article>
    </main>
</template>

<script setup>
const config = useRuntimeConfig();
const TITLE = "Home"
const DESC = "Welcome to thawia.ng, a Techit's website."
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