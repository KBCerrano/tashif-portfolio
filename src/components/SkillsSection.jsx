import { useId, useState } from "react";
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

/**
 * A group whose heading is a toggle. Used for lists long enough to push the
 * rest of the section off screen if they were always open.
 *
 * The heading stays an `h3` so the section keeps its outline; the button sits
 * inside it rather than replacing it.
 */
function CollapsibleSkillGroup({ group }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const listId = useId();

  return (
    <div className="skills-group fade-item">
      <h3 className="group-title">
        <button
          type="button"
          className="group-toggle"
          aria-expanded={isExpanded}
          aria-controls={listId}
          onClick={() => setIsExpanded((wasExpanded) => !wasExpanded)}
        >
          <span>{group.title}</span>
          <span className="group-toggle-count">{group.skills.length}</span>
          <span className="group-toggle-icon" aria-hidden="true">
            ↓
          </span>
        </button>
      </h3>

      <div
        className={`collapsible ${isExpanded ? "is-open" : ""}`}
        id={listId}
        inert={!isExpanded}
      >
        <div className="skills-collapsible-inner">
          <SkillGroupItems group={group} />
        </div>
      </div>
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

        {skillGroups.map((group) =>
          group.collapsible ? (
            <CollapsibleSkillGroup key={group.id} group={group} />
          ) : (
            <div className="skills-group fade-item" key={group.id}>
              <h3 className="group-title">{group.title}</h3>
              <SkillGroupItems group={group} />
            </div>
          ),
        )}
      </div>
    </section>
  );
}

export default SkillsSection;
