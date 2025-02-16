<script setup>
const { t, locale, setLocale } = useI18n()
const currentLocale = ref(locale.value)

// Props
defineProps({
  isBlock: Boolean
})

const toggleLocale = () => {
  const newLocale = currentLocale.value === 'en' ? 'th' : 'en'
  setLocale(newLocale)
  currentLocale.value = newLocale
}
</script>

<template>
  <ClientOnly>
    <button
        @click="toggleLocale"
        :class="`btn btn-outlined btn-lg ${isBlock ? 'btn-full-w' : 'btn-square'}`"
    >
      <span :class="`material-symbols-outlined ${isBlock ? 'mr-4' : ''}`">language</span>
      <span style="font-family: InterVariable, Sarabun, sans-serif" v-if="isBlock">{{ t('ui.language.switch') }}</span>
    </button>
  </ClientOnly>
</template>

<style>
.mr-4 {
  margin-right: 1rem;
}
</style>
