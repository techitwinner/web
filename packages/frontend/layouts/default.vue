<template>
  <main class="techitwinner web">
    <Navbar/>
    <div class="wrapper">
      <section ref="pageContainer" class="page">
        <slot/>
        <Footer/>
      </section>
    </div>
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