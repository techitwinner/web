<template>
    <div class="sticky top-0 w-full h-14 overflow-visible">
        <header :class="`web-header ${mobileHamburger ? '' : 'web-header-autohide'}`">
            <section class="web-heading">
                <NuxtLink href="/" @click="closeMobileHamburger" class="web-heading-left-section text-(--ui-text) hover:text-primary">
                    <div class="flex items-center h-full bg-[#0066FF]">
                        <img width="36" height="36"src="/favicon.ico">
                    </div>
                    <p title="thawia.ng, Go home" class="web-nav-title mx-2" aria-hidden="true">TechitWinner</p>
                </NuxtLink>
                <div class="web-heading-right-section">
                    <nav class="nav-links">
                        <ul class="nav-wrapper">
                            <li class="nav-link">
                                <NuxtLink href="/posts">Posts</NuxtLink>
                            </li>
                            <!-- <li class="nav-link">
                                <NuxtLink href="/projects">Projects</NuxtLink>
                            </li> 
                            <li class="nav-link">
                                <NuxtLink href="/about">About</NuxtLink>
                            </li> -->
                            <li class="nav-link">
                                <NuxtLink title="Contact" href="/contact">Contact</NuxtLink>
                            </li>
                            <li class="nav-link">
                                <NuxtLink title="Fonts" href="/fonts">Fonts</NuxtLink>
                            </li>
                            <li class="nav-link">
                                <NuxtLink title="Collection" href="/collections">Collections</NuxtLink>
                            </li>
                        </ul>
                    </nav>
                    <button class="hamburger-toggle" @click="toggleMobileHamburger">
                        <Icon name="oundr:menu"/>
                    </button>
                </div>
            </section>
        </header>
        <nav v-if="mobileHamburger" class="hamburger-menu">
            <ul class="nav-wrapper">
                <li class="nav-link">
                    <NuxtLink aria-label="Go home" @click="closeMobileHamburger" href="/">Home</NuxtLink>
                </li>
                <li class="nav-link">
                    <NuxtLink aria-label="Go to posts" @click="closeMobileHamburger" href="/posts">Posts</NuxtLink>
                </li>
                <li class="nav-link">
                    <NuxtLink aria-label="Go to contact" @click="closeMobileHamburger" href="/contact">Contact</NuxtLink>
                </li>
                <li class="nav-link">
                    <NuxtLink aria-label="Go to fonts" @click="closeMobileHamburger" href="/fonts">Fonts</NuxtLink>
                </li>
                <li class="nav-link">
                    <NuxtLink aria-label="Go to collections" @click="closeMobileHamburger" href="/collections">Collections</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
const mobileHamburger = ref(false);

function toggleMobileHamburger() {
    mobileHamburger.value = !mobileHamburger.value
}
</script>