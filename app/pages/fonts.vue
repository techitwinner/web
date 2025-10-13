<template>
    <main>
        <article class="article">
            <section class="web-section" aria-labelledby="hero" aria-describedby="hero-desc">
                <h1 id="hero" class="font-hero">Fonts</h1>
                <p id="hero-desc" class="font-hero-desc">This page were created to list all fonts I have hosted it here, so you can use it too.</p>
            </section>
            <template v-if="pending">
                <section class="web-section">
                    <h2 id="noto" class="web-title">Pending...</h2>
                    <p id="noto-desc">Loading font lists, please wait...</p>
                </section>
            </template>
            <template v-else-if="error">
                <section class="web-section">
                    <h2 id="noto" class="web-title">Error</h2>
                    <p id="noto-desc">{{ error.message }}</p>
                </section>
            </template>
            <section v-else-if="fonts" v-for="family in fonts" key="family.id" class="web-section" :aria-labelledby="family.id + '-title'" :aria-describedby="family.desc + '-desc'">
                <h2 :id="family.id + '-title'" class="web-title">{{ family.family }}</h2>
                <p :id="family.id + '-desc'">{{ family.desc }}</p>
                <!-- <ul class="font-card-container">
                    <li v-for="font in family.children" :key="font.id">
                        <a :class="'font-card', {disabled: font.disabled}" :href="fontUrl + font.css">
                            <div class="font-card-content text-xl">
                                {{ font.name }}
                                <p>{{ fontUrl + font.css }}</p>
                            </div>
                        </a>
                    </li>
                </ul> -->
                <section class="font-card-container">
                    <a class="font-card" v-for="font in family.children" :key="font.id" :href="fontUrl + font.css">
                        <div class="font-card-content">
                            {{ font.name }}
                        </div>
                    </a>
                </section>
            </section>
            <section v-else class="web-section">
                <h2 id="noto" class="web-title">An unknown error occured</h2>
                <p id="noto-desc">Oh no! An unknown error occured, please tell site administrator to fix this ASAP.</p>
            </section>
        </article>
    </main>
</template>

<script setup>
import { useFontLists } from '@/composables/useFontLists';

const config = useRuntimeConfig();
const TITLE = "Fonts"
const DESC = "Fonts hosted on thawia.ng"
const fontUrl = config.public?.fontUrl || 'https://fonts.thawiang.com/';
const fontListFile = 'api/typefaces.json';
const { fonts, error, pending } = useFontLists(fontUrl, fontListFile);

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