import "../styles/educationSection.css";
import EducationCard from "./EducationCard.jsx";

function EducationSection() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-heading">
          <h2>Education & Certifications</h2>
          <p>A summary of my academic background and professional training.</p>
        </div>

        <div className="education-group">
          <h3 className="education-group-title">Academic</h3>

          <EducationCard
            image="/icons/ottawa.svg"
            imageAlt="University of Ottawa"
            title="Honors BSc in Statistics & Minor in Philosophy"
            location="University of Ottawa"
            date="June 2025"
          />

          <EducationCard
            image="/icons/SSC.svg"
            title="Statistical Society of Canada (SSC) Member"
            experience=""
            location=""
            date="June 2025"
          />
        </div>

        <div className="education-group">
          <h3 className="education-group-title">Certifications</h3>

          <EducationCard
            image="/icons/google.svg"
            imageAlt="Google"
            title="Agile Essentials Specialization"
            experience=""
            location="Google"
            date="Feb 2026"
          />

          <EducationCard
            image="/icons/udemy.svg"
            imageAlt="Udemy"
            title="Mastering Data Modelling Fundamentals"
            experience=""
            location="Udemy"
            date="June 2025"
          />

          <EducationCard
            image="/icons/deeplearning.svg"
            imageAlt="Stanford"
            title="Machine Learning Specialization"
            experience=""
            location="Stanford University & DeepLearning.AI"
            date="Sept 2024"
          />

          <EducationCard
            image="/icons/ibmskills.svg"
            imageAlt="IBM"
            title="Data Science Specialization"
            experience=""
            location="IBM Skills Network"
            date="June 2022"
          />
        </div>
      </div>
    </section>
  );
}

export default EducationSection;