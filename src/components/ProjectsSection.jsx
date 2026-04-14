// Import the reusable ProjectCard component
import ProjectCard from "./ProjectCard";

/**
 * ProjectsSection Component
 *
 * This section displays a list of projects in a grid layout.
 * It receives:
 * - title: Section title (e.g. "Projects")
 * - subtitle: Short description under the title
 * - projects: Array of project objects (from projects.js)
 */
function ProjectsSection({ title, subtitle, projects }) {
  return (
    <section id="projects" className="projects-section">
      <div className="container">

        {/* Section heading (title + subtitle) */}
        <div className="section-heading">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        {/* Grid layout for all project cards */}
        <div className="projects-grid">

          {/* Loop through projects array (in components/projects.js) and render a ProjectCard for each */}
          {projects.map((project) => (
            <ProjectCard
              key={project.id} // Required unique key for React list rendering

              // Pass project data as props to ProjectCard
              title={project.title}
              image={project.image}
              role={project.role}
              company={project.company}
              date={project.date}
              description={project.description}
            />
          ))}

        </div>
      </div>
    </section>
  );
}

// Export component for use in App.jsx
export default ProjectsSection;