<template>
    <div class="sticky top-0 w-full h-14 overflow-visible">
        <header :class="{'web-header': true, 'web-header-autohide': !mobileHamburger }">
            <section class="web-heading z-10">
                <NuxtLink href="/" @click="closeMobileHamburger" class="web-heading-left-section text-(--ui-text) hover:text-primary">
                        <img width="36" height="36"src="/favicon.ico">
                    <p title="thawia.ng, Go home" class="web-nav-title mx-2" aria-hidden="true">TechitWinner</p>
                </NuxtLink>
                <div class="web-heading-right-section">
                    <nav v-if="!mobileHamburger" class="nav-links">
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
        <nav :class="{'hamburger-menu': true, 'hamburger-menu-hidden': !mobileHamburger }">
            <ul class="nav-wrapper">
                <li class="nav-link">
                    <NuxtLink title="Go home" aria-label="Go home" @click="closeMobileHamburger" href="/">Home</NuxtLink>
                </li>
                <li class="nav-link">
                    <NuxtLink title="Go to posts" aria-label="Go to posts" @click="closeMobileHamburger" href="/posts">Posts</NuxtLink>
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
                <li class="nav-button nav-button-only-desktop">
                    <button role="button" class="hamburger-btn-square" @click="closeMobileHamburger" title="Close this menu" aria-label="Close this menu"><Icon name="oundr:x"/></button>
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