import { useEffect, useRef, useState } from "react";
import Button from "./Button.jsx";
import "../styles/navbar.css";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

// Must match the breakpoint the menu collapses at in navbar.css.
const MOBILE_BREAKPOINT = 860;
const ACTIVE_SECTION_OFFSET = 140;

// Scrolls a section into view, honouring the OS reduced-motion setting.
// The landing offset comes from `scroll-margin-top` in global.css.
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  section.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });
}

/**
 * Fixed navigation bar with a scroll progress indicator, an active-section
 * highlight, and a collapsible menu on small screens.
 */
function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // Scroll progress + active section, batched into one read per frame so the
  // handler doesn't force a layout recalculation on every scroll event.
  useEffect(() => {
    let pendingFrame = null;

    function readScrollPosition() {
      pendingFrame = null;

      const scrollTop = window.scrollY;
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(
        scrollableHeight <= 0 ? 0 : (scrollTop / scrollableHeight) * 100,
      );

      const sections = document.querySelectorAll("header[id], section[id]");
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - ACTIVE_SECTION_OFFSET;

        if (
          scrollTop >= sectionTop &&
          scrollTop < sectionTop + section.offsetHeight
        ) {
          currentSection = section.getAttribute("id");
        }
      });

      // Near the bottom of the page the last section may never reach the
      // offset above, so highlight it explicitly.
      const reachedBottom =
        window.innerHeight + scrollTop >=
        document.documentElement.scrollHeight - 10;

      if (reachedBottom && sections.length > 0) {
        currentSection = sections[sections.length - 1].getAttribute("id");
      }

      setActiveSection(currentSection);
    }

    function requestScrollRead() {
      if (pendingFrame === null) {
        pendingFrame = requestAnimationFrame(readScrollPosition);
      }
    }

    function handleResize() {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setMenuOpen(false);
      }
      requestScrollRead();
    }

    window.addEventListener("scroll", requestScrollRead, { passive: true });
    window.addEventListener("resize", handleResize);
    readScrollPosition();

    return () => {
      window.removeEventListener("scroll", requestScrollRead);
      window.removeEventListener("resize", handleResize);
      if (pendingFrame !== null) cancelAnimationFrame(pendingFrame);
    };
  }, []);

  // While the mobile menu is open, Escape and an outside click both close it.
  useEffect(() => {
    if (!menuOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    }

    function handlePointerDown(event) {
      if (!navbarRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [menuOpen]);

  // Closes the menu and scrolls to the chosen section.
  function handleNavClick(sectionId) {
    setMenuOpen(false);
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  }

  return (
    <div className="navbar-wrapper" ref={navbarRef}>
      <div className="navbar-shell">
        <nav className="navbar" aria-label="Main">
          <div className="navbar-name">
            <a
              href="#home"
              onClick={(event) => {
                event.preventDefault();
                handleNavClick("home");
              }}
            >
              Tashif Khan
            </a>
          </div>

          <button
            type="button"
            ref={toggleButtonRef}
            className={`navbar-toggle ${menuOpen ? "open" : ""}`}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="navbar-links"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div
            id="navbar-links"
            className={`navbar-links ${menuOpen ? "show" : ""}`}
          >
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "primary" : "secondary"}
                onClick={() => handleNavClick(item.id)}
                aria-current={activeSection === item.id ? "true" : undefined}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </nav>

        <div className="navbar-progress">
          <div
            className="navbar-progress-bar"
            style={{ transform: `scaleX(${scrollProgress / 100})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
