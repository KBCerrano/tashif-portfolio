import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">

          <a href="tel:+16133016400" className="footer-item">
            <FaPhone className="footer-icon" />
            <span>+1 (613) 301-6400</span>
          </a>

          <a href="mailto:tashifmkhan@outlook.com" className="footer-item">
            <FaEnvelope className="footer-icon" />
            <span>tashifmkhan@outlook.com</span>
          </a>

          <div className="footer-item">
            <FaMapMarkerAlt className="footer-icon" />
            <span>Ottawa, ON, Canada</span>
          </div>

          <a
            href="https://www.linkedin.com/in/tashif-khan"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-item"
          >
            <FaLinkedin className="footer-icon" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/TashifK"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-item"
          >
            <FaGithub className="footer-icon" />
            <span>GitHub</span>
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;