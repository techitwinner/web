<script setup lang="ts">
const config = useRuntimeConfig();
const dataUrl = config.public.webBannerDataUrl as string;
</script>

<template>
    <div>
        <WebDismissibleGlobalBanner :data-url="dataUrl"/>
        <WebHeader/>
        <slot/>
        <WebFooter/>
    </div>
</template>