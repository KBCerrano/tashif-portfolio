/**
 * Skills shown in the Skills section, grouped by category.
 * Add a skill by adding an entry here — no component changes needed.
 *
 * A group with `variant: "text"` renders as flowing pills instead of icon
 * tiles. Use it for capabilities rather than tools — they have no logo, and
 * their names are too long for a fixed-width tile grid.
 */
export const skillGroups = [
  {
    id: "languages",
    title: "Programming Languages & Technologies",
    skills: [
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
      { name: "Python", icon: "/icons/python.svg" },
      { name: "Java", icon: "/icons/java.svg" },
      { name: "SQL", icon: "/icons/sql.svg" },
      { name: "Linux", icon: "/icons/linux.svg" },
      { name: "LaTeX", icon: "/icons/latex.svg" },
    ],
  },
  {
    id: "design",
    title: "Design Tools",
    skills: [
      { name: "Figma", icon: "/icons/figma.svg" },
      { name: "Photoshop", icon: "/icons/photoshop.svg" },
      { name: "Illustrator", icon: "/icons/illustrator.svg" },
      { name: "Affinity", icon: "/icons/affinity.webp" },
      { name: "Canva", icon: "/icons/canva.svg" },
    ],
  },
  {
    id: "other",
    title: "Other Tools",
    skills: [
      { name: "Jira", icon: "/icons/jira.svg" },
      { name: "Jupyter Notebook", icon: "/icons/jupyter.svg" },
      { name: "Power BI", icon: "/icons/powerbi.svg" },
      { name: "Matlab", icon: "/icons/matlab.svg" },
      { name: "Microsoft Office", icon: "/icons/msoffice.svg" },
    ],
  },
  {
    id: "version-control",
    title: "Version Control & Collaboration",
    variant: "text",
    skills: [{ name: "Git" }, { name: "GitHub" }],
  },
  {
    id: "ai",
    title: "AI Workflows & Automation",
    variant: "text",
    skills: [
      { name: "Claude AI" },
      { name: "Reusable Claude Skills" },
      { name: "Prompt and Workflow Design" },
      { name: "AI-Assisted Development" },
      { name: "Website Quality Evaluation" },
    ],
  },
  {
    id: "claude-certificates",
    title: "Claude Certificates by Anthropic",
    variant: "text",
    // Nine of them — collapsed by default so the list does not bury the
    // groups below it.
    collapsible: true,
    skills: [
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
    id: "delivery",
    title: "Project Management & Delivery",
    variant: "text",
    skills: [
      // Jira is not repeated here — it has an icon tile under Other Tools.
      { name: "Requirements Gathering" },
      { name: "Task Breakdown & Assignment" },
      { name: "Project Plans & Timelines" },
      { name: "Milestone Tracking" },
      { name: "International Team Coordination" },
      { name: "Client & Stakeholder Communication" },
      { name: "Design Review" },
      { name: "QA Coordination" },
      { name: "Deployment Planning" },
    ],
  },
];
