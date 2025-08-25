<template>
    <section class="project-cards">
        <template v-for="post in posts" :key="post.id">
            <PostCard :post="post" />
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
const { data: posts } = await useAsyncData(
  `${currentRoute}-blog`,
  async () => {
    let query = queryCollection('posts').order('dateUpdated', 'DESC')
    if (fetchLimit) {
      query = query.limit(fetchLimit)
    }
    return query.all()
  }
)
</script>
