<template>
    <div>
        <header id="web-header">
            <section id="web-heading">
                <img width="36" height="42" style="filter:invert(var(--ui-header-logo-inverted))" src="/thawiang-symbol.svg">
            </section>
            <nav id="web-nav">
                <p class="nav-text"><NuxtLink href="/">Home</NuxtLink>, <NuxtLink href="/contact">Contact</NuxtLink>, <NuxtLink href="/fonts">Fonts</NuxtLink>, <NuxtLink href="/collections">Collections</NuxtLink></p>
                <hr>
            </nav>
        </header>
        <slot/>
        <WebFooter/>
    </div>
</template>