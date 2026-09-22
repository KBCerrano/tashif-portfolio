/**
 * Academic history and certifications shown in the Education section.
 */
export const educationGroups = [
  {
    id: "academic",
    title: "Academic",
    entries: [
      {
        id: "uottawa",
        image: "/icons/ottawa.svg",
        title: "Honors BSc in Statistics & Minor in Philosophy",
        location: "University of Ottawa",
        date: "June 2025",
      },
      {
        id: "ssc",
        image: "/icons/SSC.svg",
        title: "Statistical Society of Canada (SSC) Member",
        location: "",
        date: "June 2025",
      },
    ],
  },
  {
    id: "certifications",
    title: "Certifications",
    entries: [
      {
        id: "claude-certificates",
        image: "/icons/claude.svg",
        title: "Claude Certificates",
        location: "Anthropic",
        certificates: [
          { name: "Claude 101" },
          { name: "Claude Code 101" },
          { name: "Claude Platform 101" },
          { name: "Introduction to Claude Cowork" },
          { name: "Claude with the Anthropic API" },
          { name: "Introduction to agent skills" },
          { name: "Introduction to subagents" },
          { name: "Introduction to Model Context Protocol" },
          { name: "Model Context Protocol: Advanced Topics" },
        ],
      },
      {
        id: "google-agile",
        image: "/icons/google.svg",
        title: "Agile Essentials Specialization",
        location: "Google",
        date: "Feb 2026",
      },
      {
        id: "udemy-data-modelling",
        image: "/icons/udemy.svg",
        title: "Mastering Data Modelling Fundamentals",
        location: "Udemy",
        date: "June 2025",
      },
      {
        id: "stanford-ml",
        image: "/icons/deeplearning.svg",
        title: "Machine Learning Specialization",
        location: "Stanford University & DeepLearning.AI",
        date: "Sept 2024",
        // The three courses that make up the specialization, in the order
        // they were completed.
        certificates: [
          {
            name: "Supervised Machine Learning: Regression and Classification",
            date: "Sep 2024",
          },
          { name: "Advanced Learning Algorithms", date: "Oct 2024" },
          {
            name: "Unsupervised Learning, Recommenders, Reinforcement Learning",
            date: "Oct 2024",
          },
        ],
      },
      {
        id: "ibm-data-science",
        image: "/icons/ibmskills.svg",
        title: "Data Science Specialization",
        location: "IBM Skills Network",
        date: "June 2022",
        // The individual courses the specialization is made up of, listed in
        // the order they were completed so it reads as a path to the capstone.
        certificates: [
          { name: "Python for Data Science, AI & Development", date: "Jul 2021" },
          {
            name: "Databases and SQL for Data Science with Python",
            date: "Aug 2021",
          },
          { name: "Python Project for Data Science", date: "Jun 2022" },
          { name: "Data Analysis with Python", date: "Jul 2022" },
          { name: "Data Visualization with Python", date: "Jul 2022" },
          { name: "Machine Learning with Python", date: "Aug 2022" },
          { name: "Applied Data Science Capstone", date: "Aug 2022" },
        ],
      },
    ],
  },
];
