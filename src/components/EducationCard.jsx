function EducationCard({ image, imageAlt, title, experience, location, date }) {
  return (
    <div className="education-card">
      <div className="education-logo">
        {image && <img src={image} alt={imageAlt || title} />}
      </div>

      <div className="education-content">
        <div className="education-row">
          <div>
            <h4>{title}</h4>
            {experience && <p className="education-experience">{experience}</p>}
          </div>

          <span>{date}</span>
        </div>

        {location && <p className="education-sub">{location}</p>}
      </div>
    </div>
  );
}

export default EducationCard;