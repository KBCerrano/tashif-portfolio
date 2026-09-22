import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import "../styles/contactSection.css";

const EMAIL = "tashifmkhan@outlook.com";

// The supporting details, shown as tiles under the main email call to action.
const CONTACT_DETAILS = [
  {
    id: "phone",
    icon: FaPhone,
    label: "Phone",
    value: "+1 (613) 301-6400",
    href: "tel:+16133016400",
  },
  {
    id: "github",
    icon: FaGithub,
    label: "GitHub",
    value: "TashifK",
    href: "https://github.com/TashifK",
    external: true,
  },
  {
    id: "linkedin",
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "Tashif-Khan",
    href: "https://www.linkedin.com/in/tashif-khan/",
    external: true,
  },
  {
    id: "location",
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Ottawa, ON",
  },
];

/**
 * Contact: the page's closing call to action.
 *
 * The email is promoted out of the tile row into a display-sized link, since
 * it is the one action this section exists to produce.
 */
function ContactSection() {
  return (
    <section
      className="contact-section section section-sunken fade-section"
      id="contact"
    >
      <div className="container">
        <div className="contact-lead fade-item">
          <p className="eyebrow">Contact</p>

          <h2>Ready to work.</h2>

          {/* The availability list moved out of the heading when it became a
              two-word statement — it reads as the supporting line now. */}
          <p className="contact-invite">
            Available for frontend, UX/UI, project-management, web-delivery, and
            AI workflow work. If you are building something and need help
            getting it launched, get in touch.
          </p>

          <a className="contact-email" href={`mailto:${EMAIL}`}>
            <FaEnvelope aria-hidden="true" />
            <span>{EMAIL}</span>
          </a>
        </div>

        <div className="contact-strip fade-item">
          {CONTACT_DETAILS.map((detail) => {
            const Icon = detail.icon;

            const body = (
              <>
                <Icon aria-hidden="true" />
                <span>{detail.label}</span>
                <p>{detail.value}</p>
              </>
            );

            // An entry without a link is a plain tile, not a dead anchor.
            if (!detail.href) {
              return (
                <div className="contact-item contact-static" key={detail.id}>
                  {body}
                </div>
              );
            }

            return (
              <a
                className="contact-item"
                key={detail.id}
                href={detail.href}
                target={detail.external ? "_blank" : undefined}
                rel={detail.external ? "noopener noreferrer" : undefined}
              >
                {body}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
