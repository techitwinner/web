<template>
  <main class="container">
    <div class="child header">
      <section class="primary-container">
        <section class="content-section">
          <h1>{{ t('me.name') }}</h1>
          <p>{{ t('me.about') }}</p>
          <div class="action">
            <NuxtLinkLocale class="btn btn-hero" href="/blog">Read blog</NuxtLinkLocale>
          </div>
        </section>
      </section>
      <section class="primary-container" style="background-image: url('https://files.techit.win/images/ROOT-10Mqtioww9RnBcLpd9ZN1KJO.png');">
      </section>
    </div>
    <div class="child">
      <section class="content-section">
        <h2>{{ t('home.about.title') }}</h2>
        <p>{{ t('home.about.paragraph') }}</p>
        <p>{{ t('home.about.studies') }}</p>
      </section>
      <section class="grid-3-cols">
        <a class="box" v-for="photo in aboutMePhotos" :href="photo.src">
          <img :alt="photo.name" :src="photo.src" loading="lazy"/>
        </a>
      </section>
    </div>
    <div class="child">
      <section class="content-section">
        <h2>{{ t('home.contact.title') }}</h2>
        <p>{{ t('home.contact.desc') }}</p>
      </section>
      <section class="content-section">
        <p><b>E-mail Addresses: </b>techit[at]dailitation[dot]xyz</p>
        <p><b>Facebook: </b>@techitwinner</p>
        <p><b>Instagram: </b>@techitwinner</p>
        <p><b>TikTok: </b>@techitwinner</p>
        <p><b>BlueSky: </b>@techit.dailitation.xyz</p>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n();

useHead({
  title: t('home.nav')
})

const aboutMePhotos = [
  {
    name: "Computer towerrrrrrr",
    src: "https://files.techit.win/images/electronics/IMG_20250118_211832.jpg"
  },
  {
    name: "Worst electrician ever (me)",
    src: "https://files.techit.win/images/electronics/20240527_205326.jpg"
  },
  {
    name: "I Hate Windows",
    src: "https://files.techit.win/images/electronics/IMG_20250126_084711.jpg"
  }
]
</script>