<script setup lang="ts">
const colorMode = useColorMode()

const ColorModeList = ['light', 'dark', 'system'] as const
    type ColorMode = (typeof ColorModeList)[number]

const switchColorMode = () => {
  const currentIndex = ColorModeList.indexOf(colorMode.preference as ColorMode)
  const nextIndex = (currentIndex + 1) % ColorModeList.length
  colorMode.preference = ColorModeList[nextIndex]
}

const iconName = computed(() => {
  const iconNameMap: Record<ColorMode, string> = {
    system: 'computer',
    light: 'light_mode',
    dark: 'dark_mode',
  }
  const iconName = colorMode.preference as ColorMode
  return `${iconNameMap[iconName]}`
})
</script>

<template>
  <ClientOnly>
    <button
        @click="switchColorMode"
        :class="`btn btn-outlined btn-lg btn-square`"
    >
      <span :class="`material-symbols-outlined`">{{iconName}}</span>
    </button>
  </ClientOnly>
</template>

<style>
.mr-4 {
  margin-right: 1rem;
}
</style>
