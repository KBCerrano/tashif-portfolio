import { educationGroups } from "../data/education.js";
import EducationCard from "./EducationCard.jsx";
import "../styles/educationSection.css";

// Education and certifications, rendered from src/data/education.js.
function EducationSection() {
  return (
    <section id="education" className="education-section section fade-section">
      <div className="container">
        <div className="section-heading fade-item">
          <p className="eyebrow">Background</p>
          <h2>Education &amp; Certifications</h2>
          <p>
            My academic background and certifications across web development,
            UX/UI, data analysis, and AI work.
          </p>
        </div>

        {educationGroups.map((group) => (
          <div className="education-group fade-item" key={group.id}>
            <h3 className="group-title">{group.title}</h3>

            {/* Entries are newest first, so the first one in each group is
                the most recent and gets the open marker. */}
            <ol className="education-timeline">
              {group.entries.map((entry, position) => (
                <EducationCard
                  key={entry.id}
                  image={entry.image}
                  title={entry.title}
                  location={entry.location}
                  date={entry.date}
                  isCurrent={position === 0}
                  certificates={entry.certificates}
                />
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;
