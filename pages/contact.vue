<template>
    <main>
        <article class="article">
            <h1>Contact Techit</h1>
            <p>
                You can reach me in countless ways — I’m on basically every social media app out there.
            </p>
                <ul>
                <li>E-mail: <a href="mailto:techit@dailitation.xyz">techit@dailitation.xyz</a> (PGP/GPG available in footer section)</li>
                <li>Matrix: @techitwinner:matrix.org</li>
                <li>Facebook: Techit Thawiang (@techitwinner)</li>
                <li>Instagram: Techit Thawiang (@techitwinner)</li>
                <li>Twitter: Techit Thawiang (@techitwinner)</li>
                <li>TikTok: Techit Thawiang (@techitwinner)</li>
                <li>Bluesky: Techit Thawiang (@thawia.ng)</li>
            </ul>
        </article>
    </main>
</template>

<script setup>
const TITLE = "Contact"
const DESC = "How to contact Techit"

useHead({
  title: TITLE,
  meta: [
    { name: 'description', content: DESC },
    { property: 'og:title', content: TITLE },
    { property: 'og:description', content: DESC },
    { property: 'og:type', content: 'website' }
  ]
})
</script>