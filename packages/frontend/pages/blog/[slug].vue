<script setup>
import { usePosts } from '@/composables/usePosts';
import { formatDate } from "~/composables/useFormatDate.ts";

const route = useRoute();
const { post, fetchPost } = usePosts();

// Fetch the post using the slug from the route parameter
await fetchPost(route.params.slug);

// Dynamic SEO
useHead({
  title: post.value?.title || 'Untitled blog post',
  meta: [
    { name: 'description', content: post.value?.description || 'Read this blog post' },
    { property: 'og:title', content: post.value?.title || 'Untitled blog post' },
    { property: 'og:description', content: post.value?.description || 'Read this blog post' },
    { property: 'og:image', content: `${useRuntimeConfig().public.apiBaseUrl}/api/files/${useRuntimeConfig().public.apiBaseFileSuffix}/${post.id}/${post.coverImage}` || '' }, // Optional cover image
  ]
});
</script>

<template>
  <main class="container">
    <div class="child header blog-header">
      <section class="primary-container">
        <p><b>Created:</b> {{ formatDate(post.created) }} <b>Updated:</b> {{ formatDate(post.updated) }}</p>
        <h1 v-html="post.title"></h1>
        <p>{{ post.description }}</p>
      </section>
      <section class="primary-container" :style="`background-image: url('${useRuntimeConfig().public.apiBaseUrl}/api/files/${post.collectionId}/${post.id}/${post.coverImage}')`">
      </section>
    </div>
    <div class="child">
        <section class="content-blog" v-if="post">
          <div v-html="post.content"></div>
        </section>
        <p v-else>Post not found.</p>
    </div>
  </main>
</template>
