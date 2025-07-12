<template>
    <header class="web-header">
        <section class="web-heading">
            <NuxtLink href="/" class="web-heading-left-section hover:bg-(--ui-text)/5 active:bg-(--ui-text)/10">
                <div class="flex items-center h-full bg-[#0066FF]">
                    <img width="36" height="36"src="/favicon.ico">
                </div>
                <p class="web-nav-title mx-2 text-(--ui-text)">thawia.ng</p>
            </NuxtLink>
            <div class="web-heading-right-section">
                <nav class="nav-links">
                    <ul class="nav-wrapper">
                        <li class="nav-link">
                            <NuxtLink href="/">Home</NuxtLink>
                        </li>
                        <!-- <li class="nav-link">
                            <NuxtLink href="/blog">Blog</NuxtLink>
                        </li>
                        <li class="nav-link">
                            <NuxtLink href="/projects">Projects</NuxtLink>
                        </li> 
                        <li class="nav-link">
                            <NuxtLink href="/about">About</NuxtLink>
                        </li>-->
                        <li class="nav-link">
                            <NuxtLink href="/contact">Contact</NuxtLink>
                        </li>
                        <li class="nav-link">
                            <NuxtLink href="/fonts">Fonts</NuxtLink>
                        </li>
                        <li class="nav-link">
                            <NuxtLink href="/collections">Collections</NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    </header>
</template>