<template>
  <main class="container">
    <div class="child header">
      <section class="primary-container">
        <section class="content-section">
          <h1 v-html="t('attribution.nav')"></h1>
          <p>{{ t('attribution.desc') }}</p>
        </section>
      </section>
    </div>
    <div class="child">
      <section class="content-section">
        <h2>{{ t('attribution.whatfor.title') }}</h2>
        <p>{{ t('attribution.whatfor.desc') }}</p>
      </section>
    </div>
    <div class="child">
      <section class="content-section">
        <h2>{{ t('attribution.main.title') }}</h2>
        <ul class="list">
          <li><a rel="noreferrer noopener nofollow" class="link" href="https://fonts.google.com/specimen/Sarabun">Sarabun</a> — main Thai font</li>
          <li><a rel="noreferrer noopener nofollow" class="link" href="https://rsms.me/inter">Inter</a> — main Latin font</li>
          <li><a rel="noreferrer noopener nofollow" class="link" href="https://m3.material.io/">Material Design 3</a> — main design theme</li>
          <li><a rel="noreferrer noopener nofollow" class="link" href="https://nuxt.com/">Nuxt 3</a> — main web technology</li>
          <li><a rel="noreferrer noopener nofollow" class="link" href="https://pocketbase.io/">Pocketbase</a> — backend</li>
          <li><a rel="noreferrer noopener nofollow" class="link" href="https://github.com/bKoZii/nuxt-portfolio-blog/">nuxt-portfolio-blog by bKoZii</a> — some source code</li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n();

useHead({
  title: t('attribution.main.title')
})
</script>