<template>
    <main>
        <article class="article">
            <h1>Welcome to thawia.ng</h1>
            <p>
                Hi, My name is Techit Thawiang, I'm a 10th grade student at Ko Pho Tuay Ngam Wittaya. I'm passionated in coding and developing software.
            </p>
            <p>
                In my free time, I usually spend my time playing games or learning more about software engineering. 
            </p>
            <p>
                In the future, I dream of having my own tech company, or being a civil engineer.
            </p>
            <hr>
            <p>Recommended article on Wikipedia: <a href="https://th.wikipedia.org/wiki/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B9%84%E0%B8%AB%E0%B8%A5%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%9A%E0%B8%97%E0%B8%AA%E0%B8%99%E0%B8%97%E0%B8%99%E0%B8%B2%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%82%E0%B8%97%E0%B8%A3%E0%B8%A8%E0%B8%B1%E0%B8%9E%E0%B8%97%E0%B9%8C%E0%B8%A3%E0%B8%B0%E0%B8%AB%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B9%84%E0%B8%97%E0%B8%A2%E2%80%93%E0%B8%81%E0%B8%B1%E0%B8%A1%E0%B8%9E%E0%B8%B9%E0%B8%8A%E0%B8%B2">การรั่วไหลของบทสนทนาทางโทรศัพท์ระหว่างไทย–กัมพูชา</a></p>
        </article>
    </main>
</template>

<script setup>
const TITLE = "Home"
const DESC = "Welcome to thawia.ng, a Techit's website."

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