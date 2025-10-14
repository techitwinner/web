<template>
    <section class="post-card-container">
        <template v-for="project in projects" :key="project.id">
            <ProjectCard :project="project" />
        </template>
    </section>
</template>

<script lang="ts" setup>
const route = useRoute();
const currentRoute = route.path
const props = defineProps<{
  limit?: number | null
}>()
const fetchLimit = props.limit ?? undefined
const { data: projects } = await useAsyncData(
  `${currentRoute}-blog`,
  async () => {
    let query = queryCollection('projects').order('dateUpdated', 'DESC')
    if (fetchLimit) {
      query = query.limit(fetchLimit)
    }
    return query.all()
  }
)
</script>
