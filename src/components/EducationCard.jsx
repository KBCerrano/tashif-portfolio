function EducationCard({ image, imageAlt, title, experience, location, date }) {
  return (
    <div className="education-card">

      {/* Left: Logo */}
      <div className="education-logo">
        {image && <img src={image} alt={imageAlt || title} />}
      </div>

      {/* Middle: Text */}
      <div className="education-content">
        <h4 className="education-title">{title}</h4>

        {experience && (
          <p className="education-experience">{experience}</p>
        )}

        {location && (
          <p className="education-sub">{location}</p>
        )}
      </div>

      {/* Right: Date */}
      {date && (
        <div className="education-date">
          {date}
        </div>
      )}

    </div>
  );
}

export default EducationCard;