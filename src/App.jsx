import Header from "./components/Header.jsx";
import useFadeIn from "./hooks/useFadeIn.js";
import ProjectsSection from "./components/ProjectsSection.jsx";
import { projects } from "./data/projects.js";
import Footer from "./components/Footer.jsx";
import EducationSection from "./components/EducationSection.jsx";
import NavBar from "./components/NavBar.jsx";
import ContactSection from "./components/ContactSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";

function App() {
  useFadeIn();

  return (
    <div className="site-wrapper">
      <NavBar />
      <Header />

      <main>
        <ContactSection />
        <ProjectsSection
          title="Projects"
          subtitle="A selection of successful projects I have worked on."
          projects={projects}
        />
        <EducationSection />
        <SkillsSection />
      </main>
      
      <Footer />

    </div>
  );
}

export default App;