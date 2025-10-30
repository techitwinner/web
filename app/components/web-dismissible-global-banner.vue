<template>
  <div
    v-if="visible && banner && banner.active"
    class="web-dismissible-banner"
  >
    <div class="web-dismissible-banner-content">
      <a :href="banner.link" target="_blank" rel="noopener">
        {{ banner.message }}
      </a>
      <button class="btn btn-secondary btn-sm" @click="dismiss"><span class="material-symbols-outlined">close</span></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const banner = ref<any>(null)
const visible = ref(false)

const STORAGE_KEY_DISMISSED = 'web_banner_dismissed'
const STORAGE_KEY_LAST_ID = 'web_banner_last_id'

const props = defineProps<{
  dataUrl: string;
}>();

const webBannerDataUrl = props.dataUrl;

function getStorageItem(key: string): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(key)
}

function setStorageItem(key: string, value: string) {
  if (typeof window === 'undefined') return
  localStorage.setItem(key, value)
}

function removeStorageItem(key: string) {
  if (typeof window === 'undefined') return
  localStorage.removeItem(key)
}

interface WebBannerData {
  id: number
  enabled: boolean
  message: string
  link: string
};

onMounted(async () => {
  try {
    const data = await $fetch<WebBannerData>(webBannerDataUrl)

    if (!data) return

    banner.value = data

    const currentId = data.id?.toString() || ''
    const lastSeenId = getStorageItem(STORAGE_KEY_LAST_ID) || ''
    const dismissedId = getStorageItem(STORAGE_KEY_DISMISSED)

    if (currentId && (currentId !== lastSeenId || dismissedId !== currentId)) {
      visible.value = true
    }

    setStorageItem(STORAGE_KEY_LAST_ID, currentId)
  } catch (err) {
    console.error('Banner fetch failed:', err)
  }
})

function dismiss() {
  if (banner.value?.id) {
    setStorageItem(STORAGE_KEY_DISMISSED, banner.value.id.toString())
  }
  visible.value = false
}
</script>