import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(() => {
    console.log("Ripple plugin loaded");

    const rippleTargets = [".btn", ".card", ".drawer-link"];

    const applyRipple = (el: HTMLElement) => {
        if (!el) return;

        let ripple = el.querySelector(".ripple") as HTMLElement;
        if (!ripple) {
            ripple = document.createElement("span");
            ripple.classList.add("ripple");
            ripple.style.position = "absolute";
            ripple.style.borderRadius = "50%";
            ripple.style.pointerEvents = "none";
            ripple.style.backgroundColor = "currentColor";
            ripple.style.opacity = "0";
            ripple.style.filter = "blur(12px)";
            ripple.style.transition = "transform 0.2s ease-in, opacity 0.3s ease-in";
            el.appendChild(ripple);
        }

        el.addEventListener("pointerdown", (event) => {
            const rect = el.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            ripple.style.width = `${size * 2}px`;
            ripple.style.height =` ${size * 2}px`;
            ripple.style.left = `${x - size}px`;
            ripple.style.top = `${y - size}px`;

            // Reset transform before triggering animation
            ripple.style.transition = "none";
            ripple.style.transform = "scale(0)";
            ripple.style.opacity = "0.1";

            // Force reflow to restart animation
            void ripple.offsetWidth;

            // Reapply animation
            ripple.style.transition = "transform 0.2s ease-in, opacity 0.3s ease-in";
            ripple.style.transform = "scale(1)";
            ripple.style.opacity = "0";
        });
    };

    const observeElements = () => {
        rippleTargets.forEach((selector) => {
            document.querySelectorAll(selector).forEach((el) => applyRipple(el as HTMLElement));
        });
    };

    window.addEventListener("load", observeElements);

    // Observe dynamically loaded elements
    const observer = new MutationObserver(observeElements);
    observer.observe(document.body, { childList: true, subtree: true });
});