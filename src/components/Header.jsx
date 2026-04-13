import { useEffect, useState } from "react";
import Button from "./Button.jsx";
import "../styles/herosection.css"

function Header() {
  const [role, setRole] = useState("frontend");
  const [displayedSummary, setDisplayedSummary] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const summaries = {
    ux: "UX/UI Designer with experience designing websites and digital products in Figma with strong programming background. Skilled in wireframing, prototyping, and responsive interface design, with a strong focus on usability and clean visual hierarchy. Experienced in client-facing meetings and collaborative design discussions with stakeholders and overseas developers to gather requirements and adapt solutions as project needs evolve.",
    frontend:
      "Frontend Developer with strong experience building responsive web applications using React, JavaScript, HTML, and CSS. Experienced in translating design concepts into clean, maintainable code with a focus on performance and usability. Strong background in UX principles, allowing effective collaboration between design and engineering. Passionate about building scalable, modern web interfaces with responsive, component based design.",
  };

  useEffect(() => {
    setDisplayedSummary(summaries[role]);
  }, []);

  function handleRoleChange(nextRole) {
    if (nextRole === role) return;

    setIsVisible(false);

    setTimeout(() => {
      setRole(nextRole);
      setDisplayedSummary(summaries[nextRole]);
      setIsVisible(true);
    }, 180);
  }

  return (
    <header className="hero">
      <div className="container">
        <div className="hero-content">
          <p className="hero-eyebrow">Portfolio</p>

          <h1 className="hero-title">
            Tashif Khan
          </h1>

          <div className="terminal-switcher">
            <div className="terminal-topbar">
              <span className="terminal-dot terminal-dot-red"></span>
              <span className="terminal-dot terminal-dot-yellow"></span>
              <span className="terminal-dot terminal-dot-green"></span>
              <span className="terminal-label">role-switcher.sh</span>
            </div>

            <div className="terminal-body">
              <p className="terminal-command">
                <span className="terminal-path">tashif@portfolio</span>
                <span className="terminal-separator">:</span>
                <span className="terminal-directory">~</span>
                <span className="terminal-symbol">$</span>
                <span className="terminal-text"> select-role</span>
              </p>

              <div className="hero-buttons">
                <Button
                  variant={role === "ux" ? "primary" : "secondary"}
                  onClick={() => handleRoleChange("ux")}
                >
                  UX Designer
                </Button>

                <Button
                  variant={role === "frontend" ? "primary" : "secondary"}
                  onClick={() => handleRoleChange("frontend")}
                >
                  Frontend Developer
                </Button>
              </div>

              <div
                className={`terminal-output ${
                  isVisible ? "terminal-output-show" : "terminal-output-hide"
                }`}
              >
                <p className="terminal-output-label">
                  <span>&gt;</span> professional-summary
                </p>
                <div className="hero-summary">
                  <p>{displayedSummary}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-list">
            <a href="mailto:tashifmkhan@outlook.com" className="contact-link">
              tashifmkhan@outlook.com
            </a>
            <a href="tel:+16133016400" className="contact-link">
              +1 (613) 301-6400
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;