import Header from "./components/Header";
import ProjectsSection from "./components/ProjectsSection";
import { projects } from "./data/projects";

function App() {
  return (
    <div className="site-wrapper">
      <Header />

      <main>
        <ProjectsSection
          title="Projects"
          subtitle="A selection of successful projects I have worked on."
          projects={projects}
        />
      </main>
    </div>
  );
}

export default App;