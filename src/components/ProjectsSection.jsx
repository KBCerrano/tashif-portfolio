import ProjectCard from "./ProjectCard.jsx";
import "../styles/projectsSection.css";

// Projects section. Cards are rendered from src/data/projects.jsx.
function ProjectsSection({ eyebrow, title, subtitle, projects }) {
  return (
    <section id="projects" className="projects-section section fade-section">
      <div className="container">
        <div className="section-heading fade-item">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, position) => (
            <ProjectCard
              key={project.id}
              index={position + 1}
              title={project.title}
              subtitle={project.subtitle}
              image={project.image}
              role={project.role}
              company={project.company}
              date={project.date}
              description={project.description}
              highlights={project.highlights}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
