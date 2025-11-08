<template>
    <main>
        <article class="article">
            <section class="web-section" aria-labelledby="hero" aria-describedby="what-does-he-do?">
                <img style="margin-bottom:calc(var(--ui-spacing)*4);" src="https://files.techit.win/files/assets/tree-example.png">
                <h1 id="hero" class="font-hero">Tree</h1>
                <p id="what-does-he-do?" class="font-hero-desc">A SaaS from me to list all your <i>publicly-available</i> link and stuff.</p>
            </section>
            <section class="web-section" aria-labelledby="about-me" aria-describedby="about-me-paragraph-1">
                <h2 class="web-title" id="about-me">How to use?</h2>
                <p id="about-me-paragraph-1">Currently I don't have an easy way to make it, but you can <NuxtLink class="link" href="/contact">contact me</NuxtLink> to get one for yourself.</p>
            </section>
            <section class="web-section" aria-labelledby="manual" aria-describedby="manual-paragraph-1">
                <h2 class="web-title" id="manual">Manual</h2>
                <p id="manual-paragraph-1">This thing is kind of tricky to use at the time, so to work with me without headache, please take a look below.</p>
                <h3>Features</h3>
                <p>Currently there aren't much features, to put it easy I only offer custom background image, custom profile image and custom open graph cover image <small>(this can leave blank but will results in no cover image for social media embeds or cards)</small> for now.</p>
                <h3>Slug</h3>
                <p>This is obvious and simplest thing in the system, it is named after what you'd like, think of a username you would like to use. For example I want <NuxtLink class="link" href="/tree/techit">https://techit.win/tree/techit</NuxtLink>, just tell me you want <code>techit</code> as your slug.</p>
                <img src="https://files.techit.win/files/assets/sdfasdf.png">
                <h3>JSON structure</h3>
                <p>This is very messed up because I'm very lazy to make a proper API and database than to make a simple JSON static file.</p>
                <p>Oh! Note that "ico" in the links children needs to be an icon name that are from <a href="https://fonts.google.com/icons">https://fonts.google.com/icons</a> because it's easy to do so, but it does not have branded icon.</p>
                <p>Also I don't think "id" is necessary so not putting one will not make it broken, it's just there because I designed it to do it.</p>
                <pre class="codebox">
{
  "id": "techit",
  "enabled": "true",
  "name": "Techit Thawiang",
  "desc": "A 10th grader who passionate in computer engineering.",
  "background": "https://files.techit.win/files/jason-leung-OrKLsfQYkRA-unsplash.jpg",
  "profile": "https://files.techit.win/files/assets/profile/techit/1758801557516.jpeg",
  "links": [
    {
        "id": "web",
        "ico": "web",
        "enabled": true,
        "separator": false,
        "name": "เว็บไซต์ส่วนตัว",
        "url": "https://techit.win/"
    },
    {
        "id": "print",
        "ico": "print",
        "enabled": true,
        "separator": false,
        "name": "พิมพ์งานกับเตชิต",
        "url": "https://techit.win/print"
    },
    {
        "id": "sep1",
        "enabled": true,
        "separate": true
    },
    {
        "id": "fb",
        "enabled": true,
        "separate": false,
        "name": "Facebook: Techit Thawiang",
        "url": "https://facebook.com/techitwinner/"
    },
    {
        "id": "web",
        "enabled": true,
        "separate": false,
        "name": "Instagram: techitwinner",
        "url": "https://instagram.com/techitwinner/"
    }
  ]
}</pre>
                <h3>TypeScript Interface</h3>
                <pre class="codebox">
interface TreeUserData {
    id: string
    enabled: boolean
    name: string
    desc: string
    cover: string
    background: string
    profile: string
    links: Record&lt;string, TreeUserDataLink&gt;
};

interface TreeUserDataLink {
    id: string
    ico: string
    enabled: boolean
    separate: boolean
    name: string
    desc: string
    url: string
}</pre>
            </section>
        </article>
    </main>
</template>

<script setup>
const config = useRuntimeConfig();
const baseUrl = config.public.baseUrl
const TITLE = "Tree"
const DESC = "A SaaS from me to list all your publicly-available link and stuff."

useSeoMeta({
  title: TITLE,
  description: DESC,
  ogTitle: TITLE + ' / ' + config.public.siteName,
  ogDescription: DESC,
  ogSiteName: config.public.siteName,
  twitterCard: 'summary_large_image',
  twitterTitle: TITLE + ' / ' + config.public.siteName,
  twitterDescription: DESC,
  twitterSite: config.public.twitterUsername
})
</script>
