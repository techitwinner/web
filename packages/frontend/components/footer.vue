<template>
  <footer class="container">
    <div class="child footer">
      <section class="content-section">
        <h3 v-html="t('footer.title')" style="font-size: 1.5rem;"></h3>
        <p style="font-size: 12px;">
          {{ t('footer.powered') }} <a class="link" href="https://dailitation.xyz">dailitation.xyz</a><br/>
          &copy; 2023 - {{ new Date().getFullYear() }} {{ t('me.name') }}, {{ t('footer.copy.rights') }}<br/>
          <a class="link" href="https://keys.openpgp.org/vks/v1/by-fingerprint/32321602C7B57839F6F800434931394BAB824F2A">{{ t('footer.gpg') }}</a> | <a class="link" href="https://github.com/techitwinner/web">{{ t('footer.sourcecode') }}</a>
        </p>
      </section>
      <section class="content-section items-end">
        <LanguageSwitcher/>
      </section>
    </div>
  </footer>
</template>
<script setup lang="ts">
const { t } = useI18n();
</script>

<style scoped>
footer {
  order: 9999;
}
</style>