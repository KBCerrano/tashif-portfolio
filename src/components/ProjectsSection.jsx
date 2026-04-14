import ProjectCard from "./ProjectCard";

function ProjectsSection({ title, subtitle, projects }) {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-heading">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
              role={project.role}
              company={project.company}
              date={project.date}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;