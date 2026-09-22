import { useEffect } from "react";

// How long each item waits behind the one before it, in seconds.
const STAGGER_STEP = 0.08;
const MAX_STAGGER = 0.32;

/**
 * Reveals content as it scrolls into view.
 *
 * Each `.fade-section` is observed. Elements inside it marked `.fade-item`
 * arrive one after another; a section with no marked children fades in as a
 * single block, which is the old behaviour.
 *
 * The observer uses a zero threshold rather than a percentage: a percentage
 * threshold can never be reached by a section taller than the viewport divided
 * by that percentage, which would leave the section permanently invisible.
 * A negative bottom margin delays the reveal until the section is properly
 * on screen instead of firing on the first pixel.
 */
function useFadeIn() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(".fade-section"));

    // With no observer support, leave the sections visible rather than
    // hiding content that would never be revealed.
    if (sections.length === 0 || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    // Each section carries its own stagger, so a section far down the page
    // does not inherit a delay from everything above it.
    sections.forEach((section) => {
      const items = Array.from(section.querySelectorAll(".fade-item"));
      const targets = items.length > 0 ? items : [section];

      targets.forEach((target, index) => {
        target.classList.add("fade-up");
        // Capped so a section with many items does not end up revealing its
        // last one seconds after the first.
        target.style.transitionDelay = `${Math.min(
          index * STAGGER_STEP,
          MAX_STAGGER,
        )}s`;
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const section = entry.target;
          const items = section.querySelectorAll(".fade-item");

          if (items.length > 0) {
            items.forEach((item) => item.classList.add("show"));
          } else {
            section.classList.add("show");
          }

          observer.unobserve(section);
        });
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );

    // Observing an already-visible section fires the callback immediately,
    // so sections above the fold need no separate initial check.
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
}

export default useFadeIn;
