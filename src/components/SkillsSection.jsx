import { skillGroups } from "../data/skills.js";
import "../styles/skillsSection.css";

// A single skill tile. The icon is decorative — the name sits beside it.
function SkillCard({ name, icon }) {
  return (
    <div className="skill-card">
      <img src={icon} alt="" loading="lazy" decoding="async" />
      <span>{name}</span>
    </div>
  );
}

// A capability with no logo, shown as a pill that sizes to its own text.
function SkillPill({ name }) {
  return <li className="skill-pill">{name}</li>;
}

// The contents of one group: icon tiles, or pills where there is no logo.
function SkillGroupItems({ group }) {
  if (group.variant === "text") {
    return (
      <ul className="skills-pills">
        {group.skills.map((skill) => (
          <SkillPill key={skill.name} name={skill.name} />
        ))}
      </ul>
    );
  }

  return (
    <div className="skills-grid">
      {group.skills.map((skill) => (
        <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
      ))}
    </div>
  );
}

// Skills section, rendered from src/data/skills.js.
function SkillsSection() {
  return (
    <section
      className="skills-section section section-sunken fade-section"
      id="skills"
    >
      <div className="container">
        <div className="section-heading fade-item">
          <p className="eyebrow">Toolkit</p>
          <h2>Skills</h2>
          <p>
            The tools I use to build websites, shape user experiences, manage
            delivery, analyze data, and create practical AI workflows.
          </p>
        </div>

        {skillGroups.map((group) => (
          <div className="skills-group fade-item" key={group.id}>
            <h3 className="group-title">{group.title}</h3>
            <SkillGroupItems group={group} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
