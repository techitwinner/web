<template>
  <main class="container">
    <div class="child header">
      <section class="primary-container">
        <h1>{{ t('about.nav') }}</h1>
        <p>{{ t('about.desc') }}</p>
      </section>
      <section class="primary-container" style="background-image: url('https://files.techit.win/images/ABOUT-dKYpfr4szmC7BY1j5DWnwf8WWxiYHsVy.png');">
      </section>
    </div>
    <div class="child">
      <section class="content-section">
        <h2>{{ t('about.me.hello') }}</h2>
        <p>{{ t('about.me.paragraph.1') }}</p>
        <p>{{ t('about.me.paragraph.2') }}</p>
        <p>{{ t('about.me.paragraph.3') }}</p>
        <p v-html="t('about.me.paragraph.4', { at: '<a class=\'link\' href=\'https://internal.dailitation.xyz/wiki/Users:Techit\'>Internal Wiki</a>' })"></p>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n();

useHead({
  title: t('about.nav'),
  meta: [
    { name: 'description', content: t('about.description') },
    { name: 'og:title', content: t('about.title') },
    { name: 'og:description', content: t('about.description') }
  ]
})
</script>