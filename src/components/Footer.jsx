import { FiArrowUp } from "react-icons/fi";
import "../styles/footer.css";

const SOCIAL_LINKS = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tashif-khan",
  },
  { id: "github", label: "GitHub", href: "https://github.com/TashifK" },
];

/**
 * Footer: a colophon, not a second contact section.
 *
 * The phone, email and location it used to repeat are in the Contact section
 * directly above it, so only the credit, the social links, and a way back up
 * remain here.
 */
function Footer() {
  // Scrolls to the top, honouring the OS reduced-motion setting.
  function handleBackToTop(event) {
    event.preventDefault();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <p className="footer-credit">
            Tashif Khan © {new Date().getFullYear()}
          </p>

          <a className="footer-top" href="#home" onClick={handleBackToTop}>
            <FiArrowUp aria-hidden="true" />
            Back to the top
          </a>

          <div className="footer-links">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
