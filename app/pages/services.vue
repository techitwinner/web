<template>
    <main>
        <article class="article">
            <section class="web-section" aria-labelledby="hero" aria-describedby="hero-desc">
                <h1 id="hero" class="font-hero">Services</h1>
                <p id="hero-desc" class="font-hero-desc">A collection of those self-hosting services offered by me or my team.</p>
            </section>
            <section class="web-section" aria-labelledby="by-me">
                <h2 class="web-title" id="by-me">techit.win</h2>
                <section class="card-container">
                    <a class="card card-always-long" href="https://pkgs.techit.win/">
                        <div class="iconify material-symbols-outlined">box</div>
                        <div class="card-content">
                            Packages
                            <span style="display:block;font-size:12px;">pkgs.techit.win</span>
                        </div>
                    </a>
                    <a class="card card-always-long" href="https://vw.techit.win/">
                        <div style="background:#175DDC;" class="iconify material-symbols-outlined">security</div>
                        <div class="card-content">
                            Vaultwarden
                            <span style="display:block;font-size:12px;">vw.techit.win</span>
                        </div>
                    </a>
                </section>
            </section>
            <section class="web-section" aria-labelledby="by-team">
                <h2 class="web-title" id="by-team">By team</h2>
                <section class="card-container">
                    <a class="card card-always-long" href="https://gitskette.dailitation.xyz/">
                        <div class="iconify material-symbols-outlined">commit</div>
                        <div class="card-content">
                            Gitskette
                            <span style="display:block;font-size:12px;">gitskette.dailitation.xyz</span>
                        </div>
                    </a>
                    <a class="card card-always-long" href="https://internal.dailitation.xyz/">
                        <div class="iconify material-symbols-outlined">book</div>
                        <div class="card-content">
                            Internal Wiki
                            <span style="display:block;font-size:12px;">internal.dailitation.xyz</span>
                        </div>
                    </a>
                    <a class="card card-always-long" href="https://keycloak.dailitation.xyz/">
                        <div class="iconify material-symbols-outlined">person</div>
                        <div class="card-content">
                            Identity service
                            <span style="display:block;font-size:12px;">keycloak.dailitation.xyz</span>
                        </div>
                    </a>
                </section>
            </section>
        </article>
    </main>
</template>

<script setup>
const config = useRuntimeConfig();
const TITLE = "Services"
const DESC = "List of all services I/my team offered."

useSeoMeta({
  title: TITLE,
  description: DESC,
  ogTitle: TITLE + ' / ' + config.public.siteName,
  ogDescription: DESC,
  ogSiteName: config.public.siteName,
  twitterCard: 'summary_large_image',
  twitterTitle: TITLE + ' / ' + config.public.siteName,
  twitterDescription: DESC,
  twitterSite: config.public.twitterUsername,
  robots: 'noindex'
})
</script>