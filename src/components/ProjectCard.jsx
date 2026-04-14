import Button from "./Button.jsx";
import "../styles/ProjectCard.css";

/**
 * ProjectCard Component
 *
 * Displays a single project in card format.
 */
function ProjectCard({
  title,
  image,
  role,
  company,
  date,
  description,
  link
}) {
  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        <img
          src={image}
          alt={title}
          className="project-image"
        />
      </div>

      <div className="project-content">
        <div className="project-header">
          <div className="project-header-main">
            <h2 className="project-title">{title}</h2>

            {(role || company) && (
              <p className="project-role">
                {role}
                {role && company ? " | " : ""}
                {company}
              </p>
            )}
          </div>

          {date && (
            <p className="project-date">
              {date}
            </p>
          )}
        </div>

        <p className="project-description">
          {description}
        </p>

        <div className="project-button-wrap">
          <Button to={link} variant = "primary">
            View Project →
          </Button >
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;