import { useEffect } from "react";

function useFadeIn() {
  useEffect(() => {
    // Automatically target headings + paragraphs (you can expand this)
    const elements = document.querySelectorAll(
      "h1, h2, h3, p, .project-card"
    );

    elements.forEach((el) => {
      el.classList.add("fade-up");
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
      {
        threshold: 0.2,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default useFadeIn;