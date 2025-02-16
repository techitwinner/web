<template>
  <main class="container">
    <div class="child header">
      <section class="primary-container">
        <h1 v-html="t('photography.nav')"></h1>
        <p>{{ t('photography.desc') }}</p>
      </section>
      <section class="primary-container" style="background-image: url('https://files.techit.win/images/PHOTOGRAPHY-dKYpfr4szmC7BY1j5DWnwf8WWxiYHsVy.png');">
      </section>
    </div>
    <div class="child">
      <section class="content-section">
        <h2>{{ t('photography.preface.title') }}</h2>
        <p> {{ t('photography.preface.paragraph.1') }} </p>
        <p> {{ t('photography.preface.paragraph.2') }} </p>
      </section>
      <section class="grid-3-cols">
        <a class="box" v-for="photo in photography.old.items" :href="`${photography.scheme.url}${photography.old.prefix}${photo.filename}`">
          <img :alt="photo.alt" :src="`${photography.scheme.url}${photography.old.prefix}${photo.filename}`" loading="lazy"/>
        </a>
      </section>
    </div>
    <div class="child">
      <section class="content-section">
        <h2>{{ t('photography.preface.timeflewby') }}</h2>
        <p> {{ t('photography.preface.paragraph.3') }} </p>
        <p> {{ t('photography.preface.paragraph.4') }} </p>
      </section>
      <section class="grid-3-cols">
        <a class="box" v-for="photo in photography.firstdslr.items" :href="`${photography.scheme.url}${photography.firstdslr.prefix}${photo.filename}`">
          <img :alt="photo.alt" :src="`${photography.scheme.url}${photography.firstdslr.prefix}${photo.filename}`" loading="lazy"/>
        </a>
      </section>
    </div>
    <div class="child">
      <section class="content-section">
        <p> {{ t('photography.license') }} </p>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n();
import photography from "@/assets/photography.json";

useHead({
  title: t('photography.title'),
  meta: [
    { name: 'description', content: t('photography.description') },
    { name: 'og:title', content: t('photography.title') },
    { name: 'og:description', content: t('photography.description') }
  ]
})
</script>