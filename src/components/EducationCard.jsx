/**
 * One entry on the education timeline: a dot on the rail, then the date,
 * title, and the institution's logo.
 *
 * `isCurrent` marks the most recent entry in its group, which draws the dot
 * as an open accent ring instead of a filled one.
 *
 * The logo is decorative — the institution is named in the text beside it.
 */
function EducationCard({ image, title, location, date, isCurrent }) {
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
      </div>
    </li>
  );
}

export default EducationCard;
