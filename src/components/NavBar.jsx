import { useEffect, useState } from "react";
import Button from "./Button.jsx";
import "../styles/navbar.css";

function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

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

      setActiveSection(currentSection);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar-wrapper">
      <div className="navbar-shell">
        <nav className="navbar">
          <div className="navbar-name">
            <a href="#home">Tashif Khan</a>
          </div>

          <div className="navbar-links">
            <Button to="#home" variant={activeSection === "home" ? "primary" : "secondary"}>
              Home
            </Button>
            <Button to="#about" variant={activeSection === "about" ? "primary" : "secondary"}>
              About
            </Button>
            <Button to="#projects" variant={activeSection === "projects" ? "primary" : "secondary"}>
              Projects
            </Button>
            <Button to="#contact" variant={activeSection === "contact" ? "primary" : "secondary"}>
              Contact
            </Button>
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