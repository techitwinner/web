<template>
    <main>
        <article class="article article-special">
            <section class="web-section web-section-split web-section-big-text">
                <div class="web-section-pane">
                    <img width="342" height="342" style="margin-bottom: calc(var(--ui-spacing)*6);" src="https://files.thawia.ng/files/assets/profile/techit/1758801557516.jpeg" alt="Techit Thawiang's avatar.">
                </div>
                <div class="web-section-pane">
                    <h1 id="hero" class="font-hero">Hi! I'm Techit.</h1>
                    <p>
                        I'm a fifteen-year-old 10th grader based in Chon Buri, Thailand. My dad works in an aluminium mold engineering company, which involves CAD/CAM software in his work. I have got to play some games on his work computer. That made me know the basic computer system since I was a kid.
                    </p>
                </div>
            </section>
            <section class="web-section web-section-split web-section-big-text">
                <div class="web-section-pane">
                    <div class="about-me-photo-grid">
                        <img src="https://files.thawia.ng/files/assets/O1ROgWP51.jpg">
                        <img src="https://files.thawia.ng/files/assets/7ok7K4Vz9.jpg">
                        <img src="https://files.thawia.ng/files/assets/LDgzIx5WJ.JPG">
                    </div>
                </div>
                <div class="web-section-pane">
                    <h2 class="web-title">Grew up with computers</h2>
                    <p>
                        Later, my dad bought me my own computer. It was a poopy old Intel Celeron that barely handles web browsing these days, and probably 1GB of RAM. I learned how to install Windows 7 on my own after infecting it with viruses from the internet. This has sparked my strong interest in this field of engineering.
                    </p>
                </div>
            </section>
            <section class="web-section web-section-split web-section-big-text">
                <div class="web-section-pane">
                    <div class="about-me-photo-grid">
                        <img src="https://files.thawia.ng/files/assets/gtFliwF2F.jpg">
                        <img src="https://files.thawia.ng/files/assets/TbQLDYhFp.jpg">
                    </div>
                </div>
                <div class="web-section-pane">
                    <h2 class="web-title">Linux era</h2>
                    <p>
                        Back in 2021, I somehow grew bored with Microsoft Windows, so I went to Google and searched for a Windows alternative. The first Linux distro I have ever experienced is the Zorin OS. At the time, I had been distro-hopping for like 7 million times. From Zorin to Ubuntu, Linux Mint, RHEL, openSUSE, Fedora, Manjaro, and so on.
                    </p>
                    <p>
                        This has inspired me to create something that <i><u>just works</u></i> for free for the community, just like <a target="_blank" class="link" href="https://wikipedia.com/wiki/Linus_Torvalds">Linus Torvalds</a>, the creator of the Linux kernel, did.
                    </p>
                </div>
            </section>
            <section class="web-section web-section-split web-section-big-text">
                <div class="web-section-pane">
                    <div class="about-me-photo-grid">
                        <img src="https://files.thawia.ng/files/assets/photography/LVlGfUDdm.webp">
                        <img src="https://files.thawia.ng/files/assets/photography/leH4chv7X.webp">
                        <img src="https://files.thawia.ng/files/assets/photography/-sElH1ZUi.webp">
                    </div>
                </div>
                <div class="web-section-pane">
                    <h2 class="web-title">Photography</h2>
                    <p>
                        Additionally, I also have an interest in photography! Since I was in 3rd grade, I got my first smartphone. Even though the camera wasn’t the best at the time, I still took photos like a crazy person. (mostly my pets)
                    </p>
                    <p>
                        After that, I got a chance to play with my friend’s DSLR camera, which is the first time I have ever touched an actual camera and not just a shitty phone camera. 
                    </p>
                </div>
            </section>
        </article>
    </main>
</template>

<script setup>
const config = useRuntimeConfig();
const baseUrl = config.public.baseUrl
const TITLE = "About"
const DESC = "Techit Thawiang is a 10th grader hobbyist developer, a math lover and a self-hoster who's exploring computer science."

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
