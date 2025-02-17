<template>
  <header class="navbar">
    <nav class="child">
      <section class="start">
        <button @click="isDrawerOpen = !isDrawerOpen" class="btn btn-text btn-square btn-lg">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </section>
      <section class="center">
        <NuxtLinkLocale :href="link.href" class="navlink" v-for="link in navItems.slice(0, 5)" :key="link.href">
          <section class="indicator">
            <span class="material-symbols-outlined">{{ link.ico }}</span>
          </section>
          <p class="label" v-html="t(link.label)"></p>
        </NuxtLinkLocale>
      </section>
      <section class="end">
        <ThemeSwitcher/>
      </section>
    </nav>
    <!-- Drawer Overlay -->
    <div
        v-if="isDrawerOpen"
        class="drawer-overlay"
        @click="isDrawerOpen = false"
    ></div>
    <!-- Drawer -->
    <div class="drawer" :class="{ 'drawer-open': isDrawerOpen }">
      <div class="drawer-header">
        <button @click="isDrawerOpen = false" class="btn btn-text btn-square btn-lg">
          <span class="material-symbols-outlined">menu_open</span>
        </button>
      </div>

      <div class="drawer-content">
        <NuxtLinkLocale
            v-for="link in navItems"
            :key="link.href"
            :href="link.href"
            class="drawer-link"
            @click="isDrawerOpen = false"
        >
          <span class="material-symbols-outlined">{{ link.ico }}</span>
          <span class="drawer-label" v-html="t(link.label)"></span>
        </NuxtLinkLocale>
      </div>

      <div class="drawer-footer">
        <ThemeSwitcher/>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import ThemeSwitcher from "~/components/theme-switcher.vue";

const { t, locale } = useI18n();
const route = useRoute();
const currentLocale = ref(locale.value);
const isDrawerOpen = ref(false);

// Close drawer when route changes
watch(route, () => {
  isDrawerOpen.value = false;
});

watch(locale, (newLocale) => {
  currentLocale.value = newLocale;
});

const navItems = [
  {
    "label": "home.nav",
    "ico": "home",
    "href": "/"
  },
  {
    "label": "blog.nav",
    "ico": "forum",
    "href": "/blog"
  },
  {
    "label": "photography.nav",
    "ico": "camera",
    "href": "/photography"
  },
  {
    "label": "projects.nav",
    "ico": "build",
    "href": "/projects"
  },
  {
    "label": "about.nav",
    "ico": "info",
    "href": "/about"
  },
  {
    "label": "attribution.nav",
    "ico": "attribution",
    "href": "/attribution"
  },
  {
    "label": "copyright_notice.nav",
    "ico": "copyright",
    "href": "/copyright-notice"
  },
];
</script>

<style>
.btn-text {
  color: var(--md-sys-color-on-surface-variant);
}
</style>