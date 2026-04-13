import Button from "./Button.jsx";

/**
 * ProjectCard Component
 *
 * Displays a single project in card format.
 * Now includes:
 * - Company
 * - Role
 * - Date
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

      {/* Image */}
      <div className="project-image-wrapper">
        <img
          src={image}
          alt={title}
          className="project-image"
        />
      </div>

      <div className="project-content">

        {/* Top row: company + role */}
        <div className="project-meta-top">
          <span className="project-company">{company}</span>
          <span className="project-role">{role}</span>
        </div>

        {/* Date (separate for better hierarchy) */}
        {date && (
          <div className="project-date">
            {date}
          </div>
        )}

        {/* Title */}
        <h3 className="project-title">{title}</h3>

        {/* Description */}
        <p className="project-description">
          {description}
        </p>


        {/* Optional link */}
        <Button to="https://github.com">
          View Project
        </Button>

      </div>
    </article>
  );
}

export default ProjectCard;