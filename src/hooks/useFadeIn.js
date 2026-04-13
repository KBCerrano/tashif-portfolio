import { useEffect } from "react";

function useFadeIn() {
  useEffect(() => {
    const elements = document.querySelectorAll("h1, h2, h3, p, .project-card");

    elements.forEach((el, index) => {
      el.classList.add("fade-up");
      el.style.transitionDelay = `${index * 0.05}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setTimeout(() => {
          el.classList.add("show");
        }, 100);
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);
}

export default useFadeIn;