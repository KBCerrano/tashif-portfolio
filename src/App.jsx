import Header from "./components/Header.jsx";
import useFadeIn from "./hooks/useFadeIn.js";
import ProjectsSection from "./components/ProjectsSection.jsx";
import { projects } from "./data/projects.js";

function App() {
  useFadeIn();

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