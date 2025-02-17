<template>
  <main class="container">
    <div class="child header">
      <section class="primary-container">
        <section class="content-section">
          <h1 v-html="t('copyright_notice.nav')"></h1>
        </section>
      </section>
    </div>
    <div class="child">
      <section class="content-section">
        <h2 v-html="t('copyright_notice.nav')"></h2>
      </section>
      <section class="content-blog">
        <h4 style="margin-bottom: 1rem;">&copy; 2023 - {{ new Date().getFullYear() }} {{ t('me.name') }}. {{ t('footer.copy.rights') }}</h4>
        <h5>Copyright Notice, English</h5>
        <p>
          The content on this website is owned by Techit Thawiang, except where otherwise stated. (see also <NuxtLinkLocale href="/attribution" class="link">/attribution</NuxtLinkLocale>.)<br/>
          You may use the content for educational and non-commercial purposes only.<br/>
          Commercial use is not permitted without prior permission.<br/>
          For commercial inquiries, please contact techit[at]dailitation[dot]xyz.<br/>
          and attribution is required for commercial usage.<br/><br/>
          Some content featured on this website is not owned by Techit Thawiang and remains the property of its respective owner(s).<br/>
          Please refer to the original source for attribution and further details.
        </p>
        <h5>คำประกาศลิขสิทธิ์ ภาษาไทย</h5>
        <p>
          เนื้อหาบนเว็บไซต์นี้เป็นลิขสิทธิ์ของ เตชิต ทาเวียง ยกเว้นกรณีที่ระบุไว้ว่าเป็นของผู้อื่น (โปรดดู <NuxtLinkLocale href="/attribution" class="link">แหล่งที่มา</NuxtLinkLocale>)<br/>
          คุณสามารถใช้เนื้อหานี้เพื่อการศึกษาและไม่ใช่เชิงพาณิชย์เท่านั้น<br/>
          การใช้เชิงพาณิชย์ไม่อนุญาตหากไม่มีการขออนุญาตล่วงหน้า<br/>
          สำหรับการสอบถามเกี่ยวกับการใช้เชิงพาณิชย์กรุณาติดต่อ techit[at]dailitation[dot]xyz<br/>
          และการให้แหล่งที่มานั้นต้องทำหากนำไปใช้เชิงพาณิชย์<br/><br/>
          บางเนื้อหาที่แสดงบนเว็บไซต์นี้ไม่ได้เป็นของ เตชิต ทาเวียง และยังคงเป็นทรัพย์สินของเจ้าของที่เกี่ยวข้อง<br/>
          โปรดอ้างอิงแหล่งที่มาดั้งเดิมเพื่อการให้เครดิตและรายละเอียดเพิ่มเติม
        </p>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n();

useHead({
  title: t('attribution.main.title')
})
</script>