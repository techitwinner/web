<script setup lang="ts">
import WebThemeToggle from './web-theme-toggle.vue';

</script>

<template>
    <footer>
        <div class="article">
            <section class="web-section">
                <h3 class="text-2xl md:text-3xl mb-4 font-light">Techit's Home /// thawia.ng</h3>
                <p>
                    <small>
                        Copyright &copy; Techit Thawiang 2025 (2568). All rights reserved.<br>
                        PGP/GPG Key: <code style="font-size: 12px;"><a href="/portal/f/Techit Thawiang_0xE649CED321557334_public.asc">4116 33BE 1B4A 19D4 8D77  9ADE E649 CED3 2155 7334</a></code><br>
                        Powered by <a class="link" href="https://dailitation.xyz">dailitation.xyz</a>, <a class="link" href="https://github.com/TechitWinner/web">Source Code</a>.
                    </small>
                </p>
                <p>
                    <small>
                        More from me: <a class="link" href="https://unix.in.th">unix.in.th</a>, <NuxtLink class="link" href="/portal">Portal</NuxtLink> and <a class="link" href="https://uptime.dailitation.xyz">Network Status</a>
                    </small>
                </p>
                <WebThemeToggle/>
            </section>
        </div>
    </footer>
</template>