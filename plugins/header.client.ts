export default defineNuxtPlugin(() => {
  if (process.server) return

  window.addEventListener('scroll', () => {
    const headerShadow = document.querySelector('.web-header-emit-shadow-when-top')
    const headerAutohide = document.querySelector('.web-header-autohide')
    if (!headerShadow && !headerAutohide) return

    // --- Shadow when not at top ---
    if (headerShadow) {
      if (window.scrollY > 0) headerShadow.classList.add('shadow-active')
      else headerShadow.classList.remove('shadow-active')
    }

    // --- Auto-hide logic ---
    if (headerAutohide) {
      const lastScrollY = Number(headerAutohide.getAttribute('data-last-scroll')) || 0
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 0) {
        headerAutohide.classList.add('web-header-hidden')
      } else {
        headerAutohide.classList.remove('web-header-hidden')
      }

      headerAutohide.setAttribute('data-last-scroll', String(currentScrollY))
    }
  })
})
