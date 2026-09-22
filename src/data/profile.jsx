/**
 * The roles the site can present itself as, and the copy for each.
 *
 * Each role splits its professional summary in two: `claim` is the opening
 * sentence, which the hero shows, and `evidence` is the rest, which the About
 * section shows. They are one paragraph broken at the full stop — the hero
 * makes the statement, About backs it up.
 *
 * `resume` is optional. A role without one hides the download button rather
 * than pointing it at another role's file.
 */

export const DEFAULT_ROLE = "frontend";

// The line above the name in the hero.
export const positioning =
  "Project Manager • Developer • Designer • AI Workflow Builder";

export const roles = {
  ux: {
    id: "ux",
    label: "UI/UX Designer",

    claim: (
      <>
        I turn business requirements into clear,{" "}
        <span className="highlight">responsive interfaces</span> that developers
        can build from.
      </>
    ),

    evidence: (
      <>
        I use <span className="highlight">Figma</span> for user flows,
        wireframes, prototypes, and visual systems, then work directly with{" "}
        <span className="highlight">stakeholders and developers</span> to
        resolve feedback and keep the user experience on track.
      </>
    ),

    resume: {
      label: "Resume",
      file: "/resumes/Tashif-Khan-UI-UX-Resume.pdf",
      downloadName: "Tashif-Khan-UI-UX-Resume.pdf",
    },
  },

  frontend: {
    id: "frontend",
    label: "Frontend Developer",

    claim: (
      <>
        <span className="highlight">Web design</span>,{" "}
        <span className="highlight">frontend development</span>,{" "}
        <span className="highlight">project delivery</span>, and practical{" "}
        <span className="highlight">AI workflows</span>.
      </>
    ),

    evidence: (
      <>
        I work in <span className="highlight">React</span>,{" "}
        <span className="highlight">JavaScript</span>,{" "}
        <span className="highlight">HTML</span>, and{" "}
        <span className="highlight">CSS</span>, turning designs into clean,
        maintainable code, and help shape{" "}
        <span className="highlight">SEO-ready pages</span> and{" "}
        <span className="highlight">booking flows</span>. I use AI tools where
        they genuinely speed up research, development, and content work. Because
        I also work in UX, I think about whether a site is easy to use, not just
        whether it looks right.
      </>
    ),

    resume: {
      label: "Resume",
      file: "/resumes/Tashif-Khan-Frontend-Resume.pdf",
      downloadName: "Tashif-Khan-Frontend-Resume.pdf",
    },
  },

  pm: {
    id: "pm",
    label: "Project Manager",

    claim: (
      <>
        I manage website projects from{" "}
        <span className="highlight">early planning through launch</span>.
      </>
    ),

    evidence: (
      <>
        I work with{" "}
        <span className="highlight">overseas development teams</span>, turn
        client requirements into <span className="highlight">Jira</span> tasks,
        assign work, and map out clear milestones and timelines. I stay close to
        clients, designers, and developers through reviews, testing, feedback,
        and launch so the work stays clear and on track.
      </>
    ),

    // No project-management resume exists yet, so this role shows no download.
    resume: null,
  },
};

// Render order of the role switcher.
export const roleOrder = ["frontend", "ux", "pm"];
