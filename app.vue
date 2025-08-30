<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s cubic-bezier(var(--ease-fluid));
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  translate: transformY(10px);
}
</style>