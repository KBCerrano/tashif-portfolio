import { useEffect, useState } from "react";
import Button from "./Button.jsx";
import "../styles/navbar.css";

function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight <= 0) {
        setScrollProgress(0);
      } else {
        const progress = (scrollTop / docHeight) * 100;
        setScrollProgress(progress);
      }

      const sections = document.querySelectorAll("section[id]");
      let currentSection = "home";

      sections.forEach((section) => {
        const top = section.offsetTop - 140;
        const height = section.offsetHeight;

        if (scrollTop >= top && scrollTop < top + height) {
          currentSection = section.getAttribute("id");
        }
      });

      // Fix for last section near bottom of page
      if (window.innerHeight + scrollTop >= document.documentElement.scrollHeight - 10) {
        const lastSection = sections[sections.length - 1];
        if (lastSection) {
          currentSection = lastSection.getAttribute("id");
        }
      }

      setActiveSection(currentSection);
    }

    function handleResize() {
      if (window.innerWidth > 700) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function scrollToSection(id) {
    const el = document.getElementById(id);
    const offset = 40;

    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  }

  function handleNavClick(id) {
    setMenuOpen(false);
    setActiveSection(id);
    scrollToSection(id);
  }

  return (
    <div className="navbar-wrapper">
      <div className="navbar-shell">
        <nav className="navbar">
          <div className="navbar-name">
            <a href="#home">Tashif Khan</a>
          </div>

          <button
            type="button"
            className={`navbar-toggle ${menuOpen ? "open" : ""}`}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`navbar-links ${menuOpen ? "show" : ""}`}>
            <div onClick={() => handleNavClick("home")}>
              <Button
                variant={activeSection === "home" ? "primary" : "secondary"}
              >
                Home
              </Button>
            </div>

            <div onClick={() => handleNavClick("projects")}>
              <Button
                variant={activeSection === "projects" ? "primary" : "secondary"}
              >
                Projects
              </Button>
            </div>

            <div onClick={() => handleNavClick("programming-languages")}>
              <Button
                variant={
                  activeSection === "programming-languages"
                    ? "primary"
                    : "secondary"
                }
              >
                Programming Languages
              </Button>
            </div>

            <div onClick={() => handleNavClick("education")}>
              <Button
                variant={activeSection === "education" ? "primary" : "secondary"}
              >
                Education
              </Button>
            </div>

            <div onClick={() => handleNavClick("contact")}>
              <Button
                variant={activeSection === "contact" ? "primary" : "secondary"}
              >
                Contact
              </Button>
            </div>
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