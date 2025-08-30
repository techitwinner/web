<template>
    <main>
        <article class="article">
            <section class="web-hero" aria-labelledby="hero" aria-describedby="hero-desc">
                <h1 id="hero" class="font-hero">Portal</h1>
                <p id="hero-desc" class="font-hero-desc">Take a portal to travel to various dimensions.</p>
            </section>
            <section class="web-section" aria-labelledby="projects" aria-describedby="projects-paragraph-1">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <a :href="baseUrl + '/portal/f/'" class="project-card">
                        <div class="flex flex-row gap-2 items-center">
                            <Icon name="oundr:folder"/>
                            <h3>Files</h3>
                        </div>
                        <p title="A portal that collects this website data, whether it's mine or not.">A portal that collects this website data, whether it's mine or not.</p>
                    </a>
                </div>
            </section>
        </article>
    </main>
</template>

<script setup>
const config = useRuntimeConfig();
const TITLE = "Portal"
const DESC = "Choose your way wisely."
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
