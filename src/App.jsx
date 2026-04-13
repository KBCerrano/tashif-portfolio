import Header from "./components/Header.jsx";
import useFadeIn from "./hooks/useFadeIn.js";
import ProjectsSection from "./components/ProjectsSection.jsx";
import { projects } from "./data/projects.js";
import Footer from "./components/Footer.jsx";
import EducationSection from "./components/EducationSection.jsx";


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
        <EducationSection />
      </main>
      
      <Footer />

    </div>
  );
}

export default App;