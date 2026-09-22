import { useId, useState } from "react";
import Button from "./Button.jsx";
import "../styles/projectCard.css";

/**
 * Displays a single project in card format.
 *
 * `index` is the position in the list, rendered as a large ordinal so the
 * stack of cards reads as a sequence.
 *
 * At rest the card shows only what someone scanning needs — the ordinal,
 * title, subtitle and meta strip. The full description and any highlight
 * blocks stay behind a "See more" toggle, so six projects can be taken in at
 * a glance rather than read end to end.
 *
 * Projects without a public link render a disabled "Private project" button
 * instead of a link that goes nowhere.
 */
function ProjectCard({
  title,
  subtitle,
  image,
  role,
  company,
  date,
  description,
  highlights,
  link,
  index,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = useId();

  const hasPublicLink = Boolean(link);
  const hasDetails = Boolean(description) || highlights?.length > 0;

  // Role, company and date share one labelled strip, so empty fields are
  // dropped here rather than leaving a blank column in the grid.
  const metaFields = [
    { label: "Role", value: role },
    { label: "Company", value: company },
    { label: "Date", value: date },
  ].filter((field) => Boolean(field.value));

  return (
    <article className="project-card fade-item">
      <div className="project-image-wrapper">
        <img
          src={image}
          alt={`Screenshot of ${title}`}
          className="project-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="project-content">
        <div className="project-heading">
          <span className="project-index" aria-hidden="true">
            {String(index).padStart(2, "0")}
          </span>

          <h3 className="project-title">{title}</h3>

          {subtitle && <p className="project-subtitle">{subtitle}</p>}
        </div>

        {metaFields.length > 0 && (
          <div className="project-meta">
            {metaFields.map((field) => (
              <div className="project-meta-item" key={field.label}>
                <span className="project-meta-label">{field.label}</span>
                <span className="project-meta-value">{field.value}</span>
              </div>
            ))}
          </div>
        )}

        {hasDetails && (
          // `inert` keeps the collapsed copy out of the tab order and away
          // from screen readers; the row animation is handled in CSS.
          <div
            className={`project-details ${isExpanded ? "is-open" : ""}`}
            id={detailsId}
            inert={!isExpanded}
          >
            <div className="project-details-inner">
              {description && (
                <p className="project-description">{description}</p>
              )}

              {/* Optional breakdown blocks — what was led versus what was
                  built, or a specific capability worth pulling out. */}
              {highlights?.length > 0 && (
                <dl className="project-highlights">
                  {highlights.map((highlight) => (
                    <div className="project-highlight" key={highlight.label}>
                      <dt>{highlight.label}</dt>
                      <dd>{highlight.text}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          </div>
        )}

        <div className="project-actions">
          {hasDetails && (
            <button
              type="button"
              className="project-toggle"
              aria-expanded={isExpanded}
              aria-controls={detailsId}
              onClick={() => setIsExpanded((wasExpanded) => !wasExpanded)}
            >
              {isExpanded ? "See less" : "See more"}
              <span className="project-toggle-icon" aria-hidden="true">
                ↓
              </span>
            </button>
          )}

          {hasPublicLink ? (
            <Button to={link} variant="primary">
              View Project
              <span className="project-button-arrow" aria-hidden="true">
                →
              </span>
            </Button>
          ) : (
            <Button variant="secondary" disabled>
              Private project
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
