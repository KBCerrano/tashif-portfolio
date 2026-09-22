import { roles } from "../data/profile.jsx";
import "../styles/aboutSection.css";

/**
 * About: the portrait and the rest of the professional summary.
 *
 * Sits after Projects on purpose — the work makes the argument, this supports
 * it. The paragraph shown follows the role chosen in the hero.
 */
function AboutSection({ selectedRole }) {
  const currentRole = roles[selectedRole];

  return (
    <section className="about-section section fade-section" id="about">
      <div className="container">
        <div className="about-layout">
          {/* Decorative only — this is the abstract backdrop image, not a
              headshot, so it carries an empty alt. If a photo is ever added,
              this is the slot for it. */}
          <div className="about-figure fade-item">
            <img
              src="/images/hero-1.webp"
              alt=""
              width="900"
              height="1350"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="about-content fade-item">
            <p className="eyebrow">About</p>

            <h2 className="about-title">
              Design and engineering, from the same person.
            </h2>

            {/* Keyed on the role so React swaps the text rather than
                reconciling it in place, which lets the fade restart. */}
            <p className="about-body" key={currentRole.id} aria-live="polite">
              {currentRole.evidence}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
