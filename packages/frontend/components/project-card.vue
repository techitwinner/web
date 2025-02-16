<template>
  <NuxtLinkLocale :to="`${project.slug ? `/projects/${project.slug}` : source}`">
    <div class="card is-link">
      <section class="content-section">
        <h2 style="font-size: 24px; font-weight: bold">{{ project.name }}</h2>
        <p class="line-clamp-2">{{ project.description }}</p>
      </section>
    </div>
  </NuxtLinkLocale>
</template>

<script setup>
defineProps({
  project: Object,
  source: String
});
</script>
