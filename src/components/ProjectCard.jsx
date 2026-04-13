function ProjectCard({ title, image, role, company, description }) {
  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        <img src={image} alt={title} className="project-image" />
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-meta">
          <strong>Role:</strong> {role}
        </p>
        <p className="project-meta">
          <strong>Company:</strong> {company}
        </p>
        <p className="project-description">{description}</p>
      </div>
    </article>
  );
}

export default ProjectCard;