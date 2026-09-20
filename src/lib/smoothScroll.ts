import Lenis from "lenis";
import "lenis/dist/lenis.css";

let lenis: Lenis | null = null;

/**
 * Starts inertial ("glide") scrolling for the whole page.
 * Returns a cleanup function. Skipped entirely for visitors who prefer reduced
 * motion, so they keep the browser's native scrolling.
 */
export function initSmoothScroll() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};

  lenis = new Lenis({
    autoRaf: true,
    duration: 1.15,
    // ease-out expo: quick start, long soft landing
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  return () => {
    lenis?.destroy();
    lenis = null;
  };
}

/**
 * Glides to an element (or element id). Lenis respects the element's CSS
 * `scroll-margin-top`, so the sticky-navbar offset lives in one place (CSS).
 * Falls back to native smooth scrolling when Lenis isn't running.
 *
 * After the glide ends it checks the element really landed where intended and
 * corrects once or twice if the page shifted underneath (late layout changes,
 * a native scroll that happened mid-click, etc.).
 */
export function scrollToTarget(target: HTMLElement | string, duration = 1.4, attempt = 0) {
  const el = typeof target === "string" ? document.getElementById(target) : target;
  if (!el) return;

  if (!lenis) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  lenis.scrollTo(el, {
    duration,
    onComplete: () => {
      const drift = el.getBoundingClientRect().top - margin;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (Math.abs(drift) > 6 && !atBottom && attempt < 2) {
        scrollToTarget(el, 0.6, attempt + 1);
      }
    },
  });
}

export function scrollToTop(duration = 1.4) {
  if (!lenis) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  lenis.scrollTo(0, { duration });
}