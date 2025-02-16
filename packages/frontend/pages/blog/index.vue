<template>
  <main class="container">
    <div class="child header">
      <section class="primary-container">
        <h1 v-html="t('blog.nav')"></h1>
        <p>{{ t('blog.desc') }}</p>
      </section>
      <section class="primary-container" style="background-image: url('https://files.techit.win/images/BLOG-mjKM1h36yaHp3XJ3O9Lshodn.png');">
      </section>
    </div>
    <div class="child">
      <section v-if="isLoading">
        <h1>Loading posts...</h1>
        <p>Please wait while we fetch the latest content.</p>
      </section>
      <section class="posts" v-else-if="posts.length">
        <PostCard class="post-card" v-for="post in posts" :key="post.id" :post="post" />
      </section>
      <section class="content-section" v-else>
        <h2>{{ t('error.down.noposts') }}</h2>
        <p>{{ t('error.down.desc') }}</p>
        <p v-html="t('error.down.actually', { uptime: '<a class=\'link\' href=\'https://uptime.dailitation.xyz\'>Uptime Kuma</a>' })"></p>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { usePosts } from "@/composables/usePosts";
const { t } = useI18n();

const { posts, fetchAllPosts } = usePosts();
await fetchAllPosts();

const isLoading = ref(false);

useHead({
  title: t('blog.nav'),
  meta: [
    { name: 'description', content: t('blog.description') },
    { property: 'og:title', content: t('blog.nav') },
    { property: 'og:description', content: t('blog.description') },
  ]
})
</script>