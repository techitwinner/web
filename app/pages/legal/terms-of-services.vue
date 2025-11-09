<template>
    <main>
        <article class="article">
            <section class="web-section" aria-labelledby="hero" aria-describedby="hero-desc">
                <h1 id="hero" class="font-hero">{{TITLE}}</h1>
                <p id="hero-desc" class="font-hero-desc">{{ DESC }}</p>
            </section>
            <section class="web-section">
                <p>Welcome to {{ config.public.siteName }} (<NuxtLink class="link" href="/">https://techit.win</NuxtLink>). By accessing or using this website (the "Service"), you agree to these Terms of Service. Please read them carefully.</p>
                <h2>1. Use of the Service</h2>
                <p>You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to misuse the Service, interfere with its operation, or attempt to access data or functionality that you are not authorized to access.</p>

                <h2>2. No Account or Registration Requirement</h2>
                <p>Our Service does not require you to create an account. If you do provide any personal information, it is collected solely to operate and improve the Service and will never be sold or shared with third parties.</p>

                <h2>3. Privacy and Data</h2>
                <p>Your privacy is important. I do not use cookies, tracking, or any third-party data collection. Usage data is stored securely on my server and is only accessible by me and my trusted team. No company or external entity will have access to your data.</p>

                <h2>4. Intellectual Property</h2>
                <p>All content on this website, including text, graphics, and other materials, is owned by me unless otherwise stated. You may not copy, reproduce, or distribute content without permission.</p>

                <h2>5. Disclaimer</h2>
                <p>The Service is provided "as is" and "as available." While I strive to ensure the Service is secure and accurate, I do not guarantee that it will always be error-free, uninterrupted, or free of harmful content. Use the Service at your own risk.</p>

                <h2>6. Limitation of Liability</h2>
                <p>To the fullest extent permitted by law, I am not liable for any damages arising from the use of the Service. This includes direct, indirect, incidental, or consequential damages.</p>

                <h2>7. Changes to the Terms</h2>
                <p>I may update these Terms from time to time. Changes will be posted on this page, and the "Last Updated" date will reflect the latest revision. Your continued use of the Service constitutes acceptance of the updated Terms.</p>

                <h2>8. Governing Law</h2>
                <p>These Terms are governed by the laws of Thailand. Any disputes arising from these Terms or your use of the Service will be resolved under Thai law.</p>

                <h2>9. Contact</h2>
                <p>If you have any questions about these Terms, you can contact me here:</p>
                <ul>
                    <li><NuxtLink class="link" href="/contact">/contact</NuxtLink></li>
                </ul>
            </section>
            <section class="web-section">
                <h2 id="vaultwarden">Vaultwarden Service</h2>
                <p>I provides a Vaultwarden instance at <a class="link" href="https://vw.techit.win" target="_blank">https://vw.techit.win</a> for anyone to use for free. By using this service, you acknowledge and agree to the following:</p>

                <ul>
                    <li>The service is provided <strong>as-is</strong> with <strong>no guarantee of data safety or security</strong>. Use at your own risk.</li>
                    <li>I, the Vaultwarden administrator, also use this instance personally. It is a personal choice to maintain and operate this service.</li>
                    <li>Data stored on the Vaultwarden instance is backed up once every week to help prevent permanent loss. However, backups are not a guarantee, and I am not responsible for any loss of data.</li>
                    <li>By using this service, you agree that you are responsible for the confidentiality and security of your own credentials and data.</li>
                </ul>

                <p>Please ensure that you understand these conditions before using the Vaultwarden service.</p>
            </section>
        </article>
    </main>
</template>

<script setup>
const config = useRuntimeConfig();
const baseUrl = config.public.baseUrl
const TITLE = "Terms of Services"
const DESC = "Last updated: November 9, 2025"

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