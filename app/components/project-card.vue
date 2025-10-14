<template>
    <template v-if="project">
        <NuxtLink class="project-card" :to="project?.path">
            <img :src="project?.logo" :alt="project?.title + '’s cover image'"/>
            <div class="project-card-content">
                <h3 :title="project?.title">{{ project?.title }}</h3>
                <p style="margin-block: 0.25em" :title="project?.description">{{ project?.description }}</p>
                <p class="post-more-info" :title="useFormatDate(project?.dateUpdated)">📅 {{ useRelativeDate(project?.dateUpdated) }}</p>
            </div>
        </NuxtLink>
    </template>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const baseUrl = config.public.baseUrl
import { useFormatDate } from '~/composables/formatDate';
import { useRelativeDate } from '~/composables/relativeDate';
import type { ProjectsCollectionItem } from '@nuxt/content'



defineProps<{
    project: ProjectsCollectionItem
}>()
</script>