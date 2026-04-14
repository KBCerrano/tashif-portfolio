import {
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";
import "../styles/contactSection.css";

function ContactSection() {
  return (
    <section className="contact-section fade-section" id="contact">
      <div className="container">

        <div className="contact-header">
          <h2>Contact</h2>
          <p>Feel free to reach out or connect!</p>
        </div>

        <div className="contact-strip">

          <a
            href="mailto:tashifmkhan@outlook.com"
            className="contact-item"
          >
            <FaEnvelope />
            <span>Email</span>
            <p>tashifmkhan@outlook.com</p>
          </a>

          <a
            href="tel:+16133016400"
            className="contact-item"
          >
            <FaPhone />
            <span>Phone</span>
            <p>+1 (613) 301-6400</p>
          </a>

          <a
            href="https://github.com/TashifK"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaGithub />
            <span>GitHub</span>
            <p>TashifK</p>
          </a>

          <a
            href="https://www.linkedin.com/in/tashif-khan/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
            <p>Tashif-Khan</p>
          </a>

          <div className="contact-item contact-static">
            <FaMapMarkerAlt />
            <span>Location</span>
            <p>Ottawa, ON</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;