import { useId, useState } from "react";

/**
 * One entry on the education timeline: a dot on the rail, then the date,
 * title, and the institution's logo.
 *
 * `isCurrent` marks the most recent entry in its group, which draws the dot
 * as an open accent ring instead of a filled one.
 *
 * `certificates` is optional. Where an entry is a specialization made up of
 * separate courses, they sit behind a toggle rather than stretching the
 * timeline with a list nobody asked to read.
 *
 * The logo is decorative — the institution is named in the text beside it.
 */
function EducationCard({
  image,
  title,
  location,
  date,
  isCurrent,
  certificates,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const listId = useId();

  const hasCertificates = certificates?.length > 0;

  return (
    <li className={`education-entry ${isCurrent ? "is-current" : ""}`}>
      <div className="education-entry-body">
        {date && <p className="education-date">{date}</p>}

        <h4 className="education-title">{title}</h4>

        {(image || location) && (
          <div className="education-institution">
            {image && (
              <img
                className="education-logo"
                src={image}
                alt=""
                loading="lazy"
                decoding="async"
              />
            )}

            {location && <p className="education-sub">{location}</p>}
          </div>
        )}

        {hasCertificates && (
          <div className="education-courses">
            <button
              type="button"
              className="education-courses-toggle"
              aria-expanded={isExpanded}
              aria-controls={listId}
              onClick={() => setIsExpanded((wasExpanded) => !wasExpanded)}
            >
              {isExpanded ? "Hide" : "Show"} {certificates.length} courses
              <span className="education-courses-icon" aria-hidden="true">
                ↓
              </span>
            </button>

            <div
              className={`collapsible ${isExpanded ? "is-open" : ""}`}
              id={listId}
              inert={!isExpanded}
            >
              <ul className="education-course-list">
                {certificates.map((certificate) => (
                  <li key={certificate.credentialId ?? certificate.name}>
                    <span className="education-course-name">
                      {certificate.name}
                    </span>

                    {/* Issuer only appears where a specialization mixes
                        them — otherwise it repeats the entry above. */}
                    <span className="education-course-meta">
                      {[
                        certificate.issuer,
                        certificate.date,
                        certificate.credentialId,
                      ]
                        .filter(Boolean)
                        .join(" · ")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </li>
  );
}

export default EducationCard;
