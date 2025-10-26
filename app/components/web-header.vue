<template>
    <div class="web-header-container">
        <header class="web-header web-header-bg">
            <section class="web-heading z-10">
                <button class="hamburger-toggle" @click="toggleMobileHamburger">
                    <span class="material-symbols-outlined">menu</span>
                </button>
                <NuxtLink href="/" @click="closeMobileHamburger" class="web-heading-left-section text-(--ui-text) hover:text-primary">
                    <div class="web-header-logo-banner">
                        <img class="web-header-logo" width="36" height="36"src="/favicon.ico">
                    </div>
                    <p class="web-header-title" title="thawia.ng, Go home" aria-hidden="true">TechitWinner</p>
                </NuxtLink>
                <div class="web-heading-right-section">
                    <nav v-if="!mobileHamburger" class="nav-links">
                        <ul class="nav-wrapper">
                            <li class="nav-link">
                                <NuxtLink href="/posts">Posts</NuxtLink>
                            </li>
                            <li class="nav-link">
                                <NuxtLink href="/projects">Projects</NuxtLink>
                            </li> 
                            <li class="nav-link">
                                <NuxtLink href="/about">About</NuxtLink>
                            </li>
                            <li class="nav-link">
                                <NuxtLink title="Contact" href="/contact">Contact</NuxtLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="hamburger-toggle placeholder"></div>
            </section>
        </header>
        <div v-if="mobileHamburger" class="hamburger-backdrop-overlay"></div>
        <nav :class="{'hamburger-menu': true, 'hamburger-menu-hidden': !mobileHamburger }">
            <div class="hamburger-menu-header hamburger-menu-header-bg">
                <section class="web-heading">
                    <button class="hamburger-toggle no-autohide" @click="closeMobileHamburger">
                        <span class="material-symbols-outlined">close</span>
                    </button>
                </section>
            </div>
            <ul class="nav-wrapper">
                <li class="nav-link">
                    <NuxtLink title="Go home" aria-label="Go home" @click="closeMobileHamburger" href="/">Home</NuxtLink>
                </li>
                <li class="nav-link">
                    <NuxtLink title="Go to posts" aria-label="Go to posts" @click="closeMobileHamburger" href="/posts">Posts</NuxtLink>
                </li>
                <li class="nav-link">
                    <NuxtLink title="Go to posts" aria-label="Go to posts" @click="closeMobileHamburger" href="/projects">Projects</NuxtLink>
                </li>
                <li class="nav-link">
                    <NuxtLink title="Go to posts" aria-label="Go to posts" @click="closeMobileHamburger" href="/about">About</NuxtLink>
                </li>
                <li class="nav-link">
                    <NuxtLink title="Go to contact" aria-label="Go to contact" @click="closeMobileHamburger" href="/contact">Contact</NuxtLink>
                </li>
                <li class="nav-link">
                    <NuxtLink title="Go to fonts" aria-label="Go to fonts" @click="closeMobileHamburger" href="/fonts">Fonts</NuxtLink>
                </li>
                <li class="nav-link">
                    <NuxtLink title="Go to collections" aria-label="Go to collections" @click="closeMobileHamburger" href="/collections">Collections</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
const navs = [
    {
        "label": "Home",
        "href": "/"
    },
    {
        "label": "Posts",
        "href": "/posts"
    },
    // {
    //     "label": "Projects",
    //     "href": "/projects"
    // },
    // {
    //     "label": "About",
    //     "href": "/about"
    // },
    {
        "label": "Contact",
        "href": "/contact"
    },
    {
        "label": "Fonts",
        "href": "/fonts"
    },
    {
        "label": "Collections",
        "href": "/collections"
    }
]
const mobileHamburger = ref(false);

function toggleMobileHamburger() {
    mobileHamburger.value = !mobileHamburger.value
}
function closeMobileHamburger() {
    mobileHamburger.value = false
}
</script>