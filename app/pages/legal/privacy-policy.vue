<template>
    <main>
        <article class="article">
            <section class="web-section" aria-labelledby="hero" aria-describedby="hero-desc">
                <h1 id="hero" class="font-hero">{{TITLE}}</h1>
                <p id="hero-desc" class="font-hero-desc">{{ DESC }}</p>
            </section>
            <section class="web-section">
                <p>This Privacy Policy describes how I, Techit Thawiang, as an individual, handle and protect the personal information of anyone using my Service. It explains what data I may collect, how it is used, and your privacy rights.</p>
                <p>By using the Service, you agree to the practices described in this Privacy Policy.</p>

                <h2>Interpretation and Definitions</h2>

                <h3>Definitions</h3>
                <ul>
                    <li><strong>Account</strong>: A unique account created for you to access the Service or parts of it.</li>
                    <li><strong>Cookies</strong>: I do <strong>not</strong> use cookies or similar tracking technologies.</li>
                    <li><strong>Device</strong>: Any device that can access the Service, such as a computer, phone, or tablet.</li>
                    <li><strong>Personal Data</strong>: Any information that can identify you.</li>
                    <li><strong>Service</strong>: Refers to the Website.</li>
                    <li><strong>Usage Data</strong>: Data collected automatically when using the Service, such as device type, browser info, IP address, pages visited, and duration of visits. Usage Data is <strong>only accessible by me and my team on our server</strong>.</li>
                    <li><strong>Website</strong>: Refers to Techit Thawiang's Site, accessible at <NuxtLink class="link" href="/">{{ config.public.baseUrl }}</NuxtLink>.</li>
                    <li><strong>You</strong>: The individual using the Service.</li>
                </ul>

                <h2>Collection and Use of Your Personal Data</h2>

                <h3>Types of Data Collected</h3>
                <ul>
                    <li><strong>Personal Data:</strong> May include your first and last name or other necessary information to provide the Service.</li>
                    <li><strong>Usage Data:</strong> Collected automatically to operate and improve the Service. This data is <strong>never shared, sold, or tracked externally</strong>.</li>
                </ul>

                <h3>Tracking and Cookies</h3>
                <p>I do <strong>not</strong> use cookies or any external tracking technologies. Your activity is <strong>private and will not be monitored by third parties</strong>.</p>

                <h3>Use of Your Data</h3>
                <p>Your personal data and usage data are used <strong>only to provide and maintain the Service</strong> and improve your experience. I will <strong>never sell your data</strong>. Usage data is accessible only by me and my trusted team on my own servers. No third-party companies have access.</p>

                <h2>Data Sharing and Disclosure</h2>
                <p>I do <strong>not</strong> share your data with third parties, affiliates, or businesses. Data may only be shared within my team to operate the Service.</p>
                <p>Data may be disclosed <strong>only if required by law</strong> or to protect your rights or the safety of others.</p>

                <h2>Retention of Data</h2>
                <p>I retain your personal and usage data only as long as necessary to provide the Service. You can request deletion of your data at any time. I will respect your request unless retention is required by law.</p>

                <h2>Security</h2>
                <p>I take the security of your data seriously and store it securely on my own servers. However, no method of storage or transmission over the internet is 100% secure.</p>

                <h2>Children’s Privacy</h2>
                <p>The Service is <strong>not intended for anyone under the age of 13</strong>. I do not knowingly collect data from children under 13. If you are a parent and believe your child has provided data, please contact me to delete it.</p>

                <h2>External Links</h2>
                <p>The Service may contain links to external websites. I am <strong>not responsible</strong> for the content, privacy policies, or practices of third-party sites.</p>

                <h2>Changes to This Privacy Policy</h2>
                <p>I may update this Privacy Policy occasionally. Updates will be posted on this page, and the "Last Updated" date will reflect changes.</p>

                <h2>Contact</h2>
                <p>For any questions or requests regarding your personal data, you can contact me here:</p>
                <ul>
                    <li><NuxtLink class="link" href="/contact">/contact</NuxtLink></li>
                </ul>

                <h2>Key Commitments</h2>
                <ul>
                    <li>I do <strong>not sell your data</strong>.</li>
                    <li>I use <strong>no cookies or tracking</strong>.</li>
                    <li>Usage data is <strong>private</strong>, accessible only by me and my team on my server.</li>
                    <li>I am an <strong>individual</strong>, not a company.</li>
                    <li>Your privacy is <strong>100% protected</strong>.</li>
                </ul>
            </section>
        </article>
    </main>
</template>

<script setup>
const config = useRuntimeConfig();
const baseUrl = config.public.baseUrl
const TITLE = "Privacy Policy"
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