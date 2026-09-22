import { useState } from "react";
import AboutSection from "./components/AboutSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import EducationSection from "./components/EducationSection.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import { DEFAULT_ROLE } from "./data/profile.jsx";
import { projects } from "./data/projects.jsx";
import useFadeIn from "./hooks/useFadeIn.js";

/**
 * Single-page layout: fixed nav, hero, then each content section in order.
 *
 * The selected role lives here rather than in the hero because two sections
 * depend on it — the hero shows the claim and About shows the evidence, and
 * one switcher drives both.
 */
function App() {
  const [selectedRole, setSelectedRole] = useState(DEFAULT_ROLE);

  useFadeIn();

  return (
    <div className="site-wrapper">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <NavBar />

      <Header selectedRole={selectedRole} onRoleChange={setSelectedRole} />

      <main id="main-content">
        {/* Work first: the projects are the argument, About supports them. */}
        <ProjectsSection
          eyebrow="Selected work"
          title="Projects & Experience"
          subtitle="A selection of work across React development, UX/UI, project management, AI workflows, and client website delivery."
          projects={projects}
        />

        <AboutSection selectedRole={selectedRole} />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
