<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="var(--md-sys-color-primary)"/>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style>
@media (min-width: 24rem) and (prefers-reduced-motion: no-preference) {
  .page-enter-active {
    transition: all 0.3s ease-in-out;
  }
  .page-leave-active {
    transition: all 0.1s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  .page-enter-from {
    opacity: 0;
    transform: translateY(1rem);
  }
  .page-leave-to {
    opacity: 0;
  }
  .layout-enter-active {
    transition: all var(--web-transition);
  }
  .layout-leave-active {
    transition: all var(--web-transition);
  }
  .layout-enter-from {
    opacity: 0;
    transform: translateX(2rem);
  }
  .layout-leave-to {
    opacity: 0;
    transform: translateX(-3rem);
  }
}
</style>