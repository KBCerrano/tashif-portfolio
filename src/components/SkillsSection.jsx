import "../styles/skillsSection.css";

/* Reusable SkillCard component */
function SkillCard({ name, icon }) {
  return (
    <div className="skill-card">
      <img src={icon} alt={name} />
      <span>{name}</span>
    </div>
  );
}

function SkillsSection() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">

        <div className="section-heading">
          <h2>Programming Languages</h2>
          <p>Technologies and tools I use across development and design.</p>
        </div>

        {/* Programming Languages */}
        <div className="skills-group">
          <h3 className="skills-group-title">Programming Languages</h3>

          <div className="skills-grid">
            <SkillCard name="JavaScript" icon="/icons/javascript.svg" />
            <SkillCard name="React" icon="/icons/react.svg" />
            <SkillCard name="HTML" icon="/icons/html.svg" />
            <SkillCard name="CSS" icon="/icons/css.svg" />

            <SkillCard name="Linux" icon="/icons/linux.svg" />

            <SkillCard name="Python" icon="/icons/python.svg" />
            <SkillCard name="Java" icon="/icons/java.svg" />
            <SkillCard name="SQL" icon="/icons/sql.svg" />

            <SkillCard name="LaTeX" icon="/icons/latex.svg" />

          </div>
        </div>

        {/* Design Tools */}
        <div className="skills-group">
          <h3 className="skills-group-title">Design Tools</h3>

          <div className="skills-grid">
            <SkillCard name="Figma" icon="/icons/figma.svg" />
            <SkillCard name="Photoshop" icon="/icons/photoshop.svg" />
            <SkillCard name="Illustrator" icon="/icons/illustrator.svg" />
            <SkillCard name="Canva" icon="/icons/canva.svg" />
          </div>
        </div>

        {/* Other Tools */}
        <div className="skills-group">
          <h3 className="skills-group-title">Other Tools</h3>

          <div className="skills-grid">
            <SkillCard name="Jupyter Notebook" icon="/icons/jupyter.svg" />
            <SkillCard name="Power BI" icon="/icons/powerbi.svg" />

            <SkillCard name="Matlab" icon="/icons/matlab.svg" />
            <SkillCard name="Microsoft Office" icon="/icons/msoffice.svg" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default SkillsSection;