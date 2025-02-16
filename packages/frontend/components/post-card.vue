<template>
  <NuxtLinkLocale :to="`/blog/${post.slug}`">
    <div class="card is-link">
      <section class="content-section">
        <h2 style="font-size: 24px; font-weight: bold">{{ post.title }}</h2>
        <p class="line-clamp-2">{{ post.description }}</p>
      </section>
    </div>
  </NuxtLinkLocale>
</template>

<script setup>
defineProps({
  post: Object
});
</script>
