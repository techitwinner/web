<template>
  <main ref="pageContainer" class="techitwinner web">
    <Navbar/>
    <slot/>
    <Footer/>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const pageContainer = ref<HTMLElement | null>(null)

watch(
    () => route.fullPath,
    () => {
      // Ensure the element exists and scroll it to top
      if (pageContainer.value) {
        pageContainer.value.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    }
)
</script>