/**
 * Projects shown in the Projects & Experience section.
 *
 * `link` may be empty — those render a disabled "Private project" button
 * instead of a link that goes nowhere.
 *
 * `highlights` is optional. Each entry is a labelled block shown under the
 * description, for breaking a role down into what was led versus what was
 * built, or for calling out a specific capability.
 *
 * `description` is usually a plain string. It may be JSX where a phrase needs
 * to link out — which is why this file is .jsx.
 */

export const projects = [
  {
    id: 5,
    title: "Med Spa Website Rebuild & Platform Migration",
    subtitle:
      "Moved a 35-page med spa off Squarespace to React, delivered in under a month",
    image: "/images/skincredible_project.webp",
    role: "Project Manager & Frontend Developer",
    company: "Lumenta Digital / SkinCredible Wichita",
    date: "2026",
    description:
      "I helped move SkinCredible Wichita from Squarespace to a customizable React website. I coordinated the development team using AI-assisted workflows and contributed directly to the homepage, service and treatment pages, product pages, About and Contact pages, SEO-ready page structure, and booking integration. We delivered the 35+ page med spa website within one month and ahead of schedule.",
    highlights: [
      {
        label: "Project leadership",
        text: "I planned the Squarespace-to-React migration, coordinated developers, managed delivery priorities, and used AI-assisted workflows to keep the project moving toward launch.",
      },
      {
        label: "Development contribution",
        text: "I built core parts of the homepage, service and treatment pages, individual product pages, About and Contact pages, and the booking integration. I also helped put SEO-ready page structure in place across the 35+ page site.",
      },
    ],
    link: "https://skincrediblewichita.com/",
  },
  {
    id: 1,
    title: "Agency Website Redesign & AI Content Tools",
    subtitle:
      "Rebuilt a 16-page agency site and built the AI tooling behind its content",
    image: "/images/lumenta_redesign_project.webp",
    role: "Project Manager & AI Workflow Builder",
    company: "Lumenta Digital",
    date: "June 2026",
    description: (
      <>
        I redesigned Lumenta Digital&apos;s 16+ page website and built Claude
        tools to support the work behind it. I created reusable Claude skills
        for blog production and a{" "}
        <a
          className="project-description-link"
          href="https://www.lumentadigital.com/tools/website-score"
          target="_blank"
          rel="noopener noreferrer"
        >
          website-grading tool
        </a>{" "}
        that reviews sites against defined quality criteria. This made the
        content process more consistent and gave the team a repeatable way to
        assess future website work.
      </>
    ),
    highlights: [
      {
        label: "AI capability",
        text: "I built reusable Claude skills for blog creation and a website-grading tool based on defined evaluation criteria. These tools make content work more consistent and give me a repeatable way to assess website quality.",
      },
    ],
    link: "https://www.lumentadigital.com/",
  },
  {
    id: 3,
    title: "Comic Book Series Website",
    subtitle:
      "Designed and built a seven-page React site, including a custom reading mode",
    image: "/images/Space_Asylum_project.webp",
    role: "UX Designer & Frontend Developer",
    company: "Lumenta Digital",
    date: "March, 2026",
    description:
      "I designed and launched a seven-page React website for a comic book series. I created a custom reading mode, responsive layouts, and CSS animation that fit the story. I handled the UX, frontend build, QA, GitHub Pages deployment, and Google Analytics setup.",
    link: "https://www.space-asylum.com/",
  },
  {
    // The original build of the Lumenta site, kept as its own entry. The
    // "Agency Website Redesign & AI Content Tools" card is the later June 2026
    // work on the same site, not a restatement of this one.
    id: 6,
    title: "16-Page Agency Website Build",
    subtitle:
      "Took a full agency site from kickoff to launch across three time zones",
    image: "/images/lumenta_digital_project.webp",
    role: "Project Manager",
    company: "Lumenta Digital",
    date: "January, 2026",
    description:
      "Ran a 16+ page website from kickoff to launch, keeping UI/UX, QA, and deployment moving across teams working in different time zones.",
    link: "https://www.lumentadigital.com/",
  },
  {
    id: 2,
    title: "Consulting Firm Website",
    subtitle: "Turned a consulting site into a steady source of client leads",
    image: "/images/belsize_project.webp",
    role: "Client Success Manager",
    company: "TGT Solutions",
    date: "August, 2025",
    description:
      "I managed planning and delivery for a small-business website, keeping client requirements, design review, and developer coordination focused on a clearer user experience and lead-generation goals.",
    link: "",
  },
  {
    id: 4,
    title: "Launch Success Prediction Model",
    subtitle:
      "Used Python, SQL and machine learning to predict rocket landing outcomes",
    image: "/images/SpaceX_Project.webp",
    role: "Data Science (Student)",
    company: "IBM Skills Network",
    date: "August, 2022",
    description:
      "I analyzed SpaceX launch data with Python, SQL, APIs, and Folium to find geographic and operational patterns. I also built and tested classification models for launch-success prediction. The top Decision Tree model reached about 76.9% accuracy.",
    link: "https://github.com/TashifK/Data-Science-Capstone/blob/main/Data%20Science%20Capstone%20Presentation%20SpaceX.pdf",
  },
];
