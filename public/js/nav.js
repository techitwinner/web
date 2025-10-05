function applyHeaderShadow() {
  const header = document.querySelector(".web-header-emit-shadow-when-top");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("shadow-active");
    } else {
      header.classList.remove("shadow-active");
    }
  });
}
document.addEventListener("DOMContentLoaded", applyHeaderShadow);

function applyHeaderAutoHide() {
  const header = document.querySelector(".web-header-autohide");
  if (!header) return;

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 0) {
      // Scrolling down -> hide header
      header.classList.add("web-header-hidden");
    } else {
      // Scrolling up -> show header
      header.classList.remove("web-header-hidden");
    }

    lastScrollY = currentScrollY;
  });
}

document.addEventListener("DOMContentLoaded", applyHeaderAutoHide);
