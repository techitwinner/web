<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
    <footer>
        <div class="article article-footer">
            <section class="web-section">
                <div class="web-footer-links-container-container">
                    <div class="web-footer-links-container" style="margin-right: 4rem;">
                        <h3 class="web-footer-link-title">Site</h3>
                        <ul class="web-footer-links">
                            <li class="web-footer-link"><NuxtLink href="/posts">Posts</NuxtLink></li>
                            <li class="web-footer-link"><NuxtLink href="/projects">Projects</NuxtLink></li>
                            <li class="web-footer-link"><NuxtLink href="/about">About</NuxtLink></li>
                            <li class="web-footer-link"><NuxtLink href="/contact">Contact</NuxtLink></li>
                            <li class="web-footer-link"><NuxtLink href="/fonts">Fonts</NuxtLink></li>
                            <li class="web-footer-link"><NuxtLink href="/collections">Collections</NuxtLink></li>
                        </ul>
                    </div>
                    <div class="web-footer-links-container">
                        <h3 class="web-footer-link-title">More</h3>
                        <ul class="web-footer-links">
                            <li class="web-footer-link"><NuxtLink href="/services">Services</NuxtLink></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section class="web-section">
                <div>
                    <p class="web-footer-notice">
                        Techit Thawiang's Website
                    </p>
                    <p class="web-footer-notice">
                        Copyright &copy; Techit Thawiang {{ currentYear }} ({{ currentYear + 543 }}). All rights reserved.<br>
                        PGP/GPG Key: <code style="font-size: 12px;"><a href="https://files.techit.win/files/Techit Thawiang_0xE649CED321557334_public.asc">4116 33BE 1B4A 19D4 8D77  9ADE E649 CED3 2155 7334</a></code><br>
                        Powered by <a class="link" href="https://dailitation.xyz">dailitation.xyz</a>; Website is available under <a class="link" href="https://gitskette.dailitation.xyz/techit/web">GPL-2.0</a>.
                    </p>
                </div>
            </section>
        </div>
    </footer>
</template>