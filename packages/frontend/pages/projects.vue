<template>
  <main class="container">
    <div class="child header">
      <section class="primary-container">
        <h1 v-html="t('projects.nav')"></h1>
        <p>{{ t('projects.desc') }}</p>
      </section>
      <section class="primary-container" style="background-image: url('https://files.techit.win/images/BLOG-mjKM1h36yaHp3XJ3O9Lshodn.png');">
      </section>
    </div>
    <div class="child">
      <section v-if="isLoading">
        <h1>Loading posts...</h1>
        <p>Please wait while we fetch the latest content.</p>
      </section>
      <section class="posts" v-else-if="projects.length">
        <ProjectCard class="post-card" v-for="proj in projects" :key="proj.id" :project="proj" :source="proj.source ? proj.source : ''" />
      </section>
      <section class="content-section" v-else>
        <h2>{{ t('error.down.noprojects') }}</h2>
        <p>{{ t('error.down.desc') }}</p>
        <p v-html="t('error.down.actually', { uptime: '<a class=\'link\' href=\'https://uptime.dailitation.xyz\'>Uptime Kuma</a>' })"></p>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useProjects } from "@/composables/useProjects";
import ProjectCard from "~/components/project-card.vue";
const { t } = useI18n();

const { projects, fetchAllProjects } = useProjects();
await fetchAllProjects();

const isLoading = ref(false);

useHead({
  title: t('projects.nav'),
  meta: [
    { name: 'description', content: t('projects.description') },
    { property: 'og:title', content: t('projects.nav') },
    { property: 'og:description', content: t('projects.description') },
  ]
})
</script>