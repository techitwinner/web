<template>
  <div
    v-if="visible && banner && banner.active"
    class="web-dismissable-banner"
  >
    <div class="web-dismissable-banner-content">
      <a :href="banner.link" target="_blank" rel="noopener">
        {{ banner.message }}
      </a>
      <button class="btn btn-secondary btn-sm" @click="dismiss"><span class="material-symbols-outlined">close</span></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// 🍪 Cookies
const bannerDismissedCookie = useCookie('web_banner_dismissed', { maxAge: 60 * 60 * 24 * 30 }) // 30 days
const bannerLastIdCookie = useCookie('web_banner_last_id', { maxAge: 60 * 60 * 24 * 30 }) // 30 days

// 🔹 State
const banner = ref<any>(null)
const visible = ref(false)

onMounted(async () => {
  try {
    const data = await $fetch('https://files.thawia.ng/files/config/web/banner/tmp/index.json')

    // If no data or inactive, bail
    if (!data || !data.active) return

    banner.value = data

    // Check if the banner is new or dismissed
    const currentId = data.id?.toString() || ''
    const lastSeenId = bannerLastIdCookie.value?.toString() || ''
    const dismissed = bannerDismissedCookie.value === currentId

    // Show banner only if new or not dismissed yet
    if (currentId && (currentId !== lastSeenId || !dismissed)) {
      visible.value = true
    }

    // Update last seen id
    bannerLastIdCookie.value = currentId
  } catch (err) {
    console.error('Banner fetch failed:', err)
  }
})

function dismiss() {
  if (banner.value?.id) {
    bannerDismissedCookie.value = banner.value.id.toString()
  }
  visible.value = false
}
</script>