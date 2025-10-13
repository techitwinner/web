<template>
    <template v-if="post">
        <NuxtLink class="post-card" :to="post?.path">
            <img :src="post?.coverImage" :alt="post?.title + '’s cover image'"/>
            <div class="post-card-content">
                <h3 :title="post?.title">{{ post?.title }}</h3>
                <p style="margin-block: 0.25em" :title="post?.description">{{ post?.description }}</p>
                <p class="post-more-info" :title="useFormatDate(post?.dateUpdated)">📅 {{ useRelativeDate(post?.dateUpdated) }}</p>
            </div>
        </NuxtLink>
    </template>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const baseUrl = config.public.baseUrl
import { useFormatDate } from '~/composables/formatDate';
import { useRelativeDate } from '~/composables/relativeDate';
import type { PostsCollectionItem } from '@nuxt/content'



defineProps<{
    post: PostsCollectionItem
}>()
</script>