<script setup>
const colorMode = useColorMode()
defineProps({
  isCompact: Boolean,
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
})
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <button @click="isDark = !isDark" class="btn btn-neutral">Toggle Theme</button>

    <template #fallback>
      <button class="btn btn-neutral">Loading...</button>
    </template>
  </ClientOnly>
</template>
