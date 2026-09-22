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
        // Mixed issuers here, so each course names its own — the two IBM
        // entries were completed earlier and on a different track.
        certificates: [
          {
            name: "Python for Data Science, AI & Development",
            issuer: "IBM",
            date: "Jul 2021",
            credentialId: "Q7DBYGWCRFW3",
          },
          {
            name: "Machine Learning with Python",
            issuer: "IBM",
            date: "Aug 2022",
            credentialId: "5AACM8G2J77Q",
          },
          {
            name: "Supervised Machine Learning: Regression and Classification",
            issuer: "DeepLearning.AI, Stanford University",
            date: "Sep 2024",
            credentialId: "AN8FP8XELWK7",
          },
          {
            name: "Advanced Learning Algorithms",
            issuer: "DeepLearning.AI, Stanford University",
            date: "Oct 2024",
            credentialId: "84Z8ZPYBXRIT",
          },
          {
            name: "Unsupervised Learning, Recommenders, Reinforcement Learning",
            issuer: "DeepLearning.AI, Stanford University",
            date: "Oct 2024",
            credentialId: "4ED0U5PBOKUZ",
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
          {
            name: "Databases and SQL for Data Science with Python",
            date: "Aug 2021",
            credentialId: "RX72EFM89G73",
          },
          {
            name: "Python Project for Data Science",
            date: "Jun 2022",
            credentialId: "8GCX8N3JPNTV",
          },
          {
            name: "Data Analysis with Python",
            date: "Jul 2022",
            credentialId: "BQVU5TSRB62M",
          },
          {
            name: "Data Visualization with Python",
            date: "Jul 2022",
            credentialId: "JNLD8TB9J5KF",
          },
          {
            name: "Applied Data Science Capstone",
            date: "Aug 2022",
            credentialId: "XFNJK8YS4LRS",
          },
        ],
      },
    ],
  },
];
