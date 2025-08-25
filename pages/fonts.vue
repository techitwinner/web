<template>
    <main>
        <article class="article">
            <section class="web-hero web-hero-bg" aria-labelledby="hero" aria-describedby="hero-desc">
                <h1 id="hero" class="font-hero">Fonts</h1>
                <p id="hero-desc" class="font-hero-desc">Welcome to /fonts! This page were created to list all fonts I have hosted it here, so you can use it too.</p>
            </section>
            <section v-for="family in fonts" class="web-section" :aria-labelledby="family.id" aria-describedby="family.desc">
                <h3 id="noto" class="web-title">{{ family.family }}</h3>
                <p id="noto-desc">{{ family.desc }}</p>
                <div class="font-cards">
                    <a v-for="font in family.childrens" :disabled="font.disabled" :href="font.css" class="font-card">
                        <div class="font-card-content">
                            <h3>{{ font.name }}</h3>
                            <p>{{ font.css }}</p>
                        </div>
                   </a>
                </div>
            </section>
        </article>
    </main>
</template>

<script setup>
const fonts = [
    {
        id: "roboto",
        family: "Roboto Family",
        desc: "Roboto, a neo-grotesque sans-serif typeface family developed by Google as the system font for its mobile operating system Android.",
        childrens: [
            {
                id: "roboto",
                name: "Roboto",
                css: "/fonts/roboto/roboto.css"
            },
            {
                id: "roboto-mono",
                name: "Roboto Mono",
                css: "/fonts/roboto-mono/roboto-mono.css"
            },
            {
                id: "roboto-serif",
                name: "Roboto Serif",
                css: "/fonts/roboto-serif/roboto-serif.css"
            }
        ]
    },
    {
        id: "inter",
        family: "Inter Family",
        desc: "Inter, a typeface designed for computer screens. It features a tall x-height to aid in readability of mixed-case and lower-case text.",
        childrens: [
            {
                id: "inter",
                name: "Inter",
                css: "/fonts/inter/inter.css"
            }
        ]
    },
    {
        id: "noto",
        family: "Noto Family",
        desc: "Noto Sans, a free font family from Google that aims to support all languages with a harmonious look and feel.",
        childrens: [
            {
                id: "noto-sans",
                name: "Noto Sans",
                css: "/fonts/noto-sans/noto-sans.css"
            },
            {
                id: "noto-sans-mono",
                name: "Noto Sans Mono",
                css: "/fonts/noto-sans-mono/noto-sans-mono.css"
            },
            {
                id: "noto-sans-thai",
                name: "Noto Sans Thai",
                css: "/fonts/noto-sans-thai/noto-sans-thai.css"
            },
            {
                disabled: true,
                id: "noto-sans-thai-looped",
                name: "Noto Sans Thai Looped",
                css: "/fonts/noto-sans-thai-looped/noto-sans-thai-looped.css"
            }
        ]
    },
    {
        id: "tiktok-sans",
        family: "TikTok Sans",
        desc: "TikTok Sans, the official typeface of TikTok, designed to reflect the brand's dynamic and creative spirit.",
        childrens: [
            {
                id: "tiktok-sans",
                name: "TikTok Sans",
                css: "/fonts/tiktok-sans/tiktok-sans.css"
            }
        ]
    }
]

const config = useRuntimeConfig();
const TITLE = "Fonts"
const DESC = "Fonts hosted on thawia.ng"
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