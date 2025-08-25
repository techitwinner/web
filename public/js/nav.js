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