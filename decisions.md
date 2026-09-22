# Decisions

A running log of the choices made on this portfolio, starting today. Anything
already in the codebase before this file existed is deliberately not recorded
here — only new decisions get entries.

## What this is for

Claude reads this file before making changes so it knows the reasoning behind
past choices and can match them instead of guessing. Over time it becomes a
record of preferences, not just changes.

## When to add an entry

Add one when a decision would be hard to infer from the diff alone:

- A choice between two reasonable options (library, layout, pattern, wording)
- A preference stated out loud ("I want the cards tighter", "no dark mode")
- Something deliberately rejected, and why
- A constraint that must hold going forward (performance, hosting, SEO, tone)

Skip: typo fixes, copy tweaks with no rationale, dependency bumps, anything
fully explained by the commit message.

## How to add an entry

Newest at the top of the log. Use the date the decision was made (YYYY-MM-DD),
keep it to a few lines, and always answer *why* — that is the part that cannot
be recovered from the code later.

```
## YYYY-MM-DD — Short title

**Decision:** What was chosen.
**Why:** The reasoning, including what the user asked for or preferred.
**Rejected:** The alternative(s) considered and why they lost. (Omit if none.)
**Affects:** Files or areas this touches. (Omit if broad.)
```

---

# Log

## 2026-09-22 — Deploys run from GitHub Actions, not by hand

**Decision:** `.github/workflows/deploy.yml` lints, builds, and force-pushes
`dist/` to `gh-pages` on every push to `main`. Pages keeps serving from the
`gh-pages` branch, so no repository settings had to change.
**Why:** `main` and the live site had drifted — `gh-pages` was still serving an
April build months later, because publishing was a manual step nobody ran. The
branch holds generated output only, so replacing it wholesale each deploy is
simpler than accumulating history for build artifacts.
**Rejected:** Switching Pages to the "GitHub Actions" source with
`actions/deploy-pages`, which needs a settings change in the repo UI and would
have broken deploys until someone made it. Also rejected a third-party publish
action — plain git and the built-in `GITHUB_TOKEN` do the same job with nothing
extra to trust.
**Guard:** The workflow fails if `dist/CNAME` is missing, since publishing a
build without it silently takes the custom domain down.
**Affects:** .github/workflows/deploy.yml, README.md, TODO.md

## 2026-09-22 — Hero is centred, and the name types itself on

**Decision:** The hero column is centre-aligned, and the two name lines are
revealed a character at a time by `useTypewriter`, with a caret that follows
the text and blinks once the name is complete.
**Why:** Centring puts the name on the page's axis, which is where the eye
already goes. The typing gives the first screen a moment of motion without
adding anything that has to be read.
**Accessibility:** The `h1` carries `aria-label="Tashif Khan"` and the animated
spans are `aria-hidden`, so the name is announced in full from the first paint
rather than one character at a time. Under `prefers-reduced-motion` the hook
starts at the finished state, runs no timers, and the caret is hidden.
**Notes:** Two lint rules shaped the hook — the character counter cannot be a
variable mutated during render, and the reduced-motion branch cannot call
`setState` inside the effect, so it became the lazy initial state instead.
`.hero-title-line` carries `min-height: 0.88em` so an empty line still holds
its height and the page does not shift while typing.
**Affects:** src/hooks/useTypewriter.js, src/components/Header.jsx, heroSection.css

## 2026-09-22 — Project cards collapse their detail behind a toggle

**Decision:** A card shows ordinal, title, subtitle and meta at rest. The
description and highlight blocks sit behind a See more toggle, animated with a
`0fr`/`1fr` grid row and marked `inert` while closed.
**Why:** Six projects with full descriptions was a wall of text — nothing could
be scanned. The title and a one-line outcome are what a hiring reader needs
first; the detail is there for whoever wants it.
**Rejected:** A `max-height` transition, which needs a hardcoded height and
clips the longest descriptions. Two layout traps worth remembering: the inner
element needs `min-height: 0` or the collapsed row keeps its full height, and
the image needs to be absolutely positioned or its intrinsic ratio drives the
card height instead of the content.
**Affects:** src/components/ProjectCard.jsx, src/styles/projectCard.css

## 2026-09-22 — Project titles lead with what the thing is

**Decision:** Titles name the type of work ("Comic Book Series Website"), not
the client brand ("Space Asylum"). The brand stays in the Company column.
**Why:** A brand name only means something to someone who already knows it. A
hiring reader scanning the section needs to know what was built. Subtitles were
rewritten at the same time to state the outcome rather than a single feature —
the old Space Asylum line described the reading mode and made it sound like
that was the whole contribution.
**Affects:** src/data/projects.jsx

## 2026-09-22 — Education is a timeline, not a table

**Decision:** Entries render as an ordered list against a vertical rail, with a
marker per entry; the most recent in each group is an open accent ring.
**Why:** Bordered rows read as a spreadsheet. The content is a path through
time, and the reference treats it that way.
**Affects:** src/components/EducationCard.jsx, EducationSection.jsx, educationSection.css

## 2026-09-22 — Project images fill their half of the card

**Decision:** The image panel lost its padding and the image now covers the
full left column (`height: 100%`, `min-height: 320px`), stacking to a 16/9
banner below 900px.
**Why:** Inset in a tinted mat, the image floated in the middle of a tall
column with dead space above and below it, which read as an unfinished
placeholder rather than a deliberate frame.
**Affects:** src/styles/projectCard.css

## 2026-09-22 — Project descriptions may be JSX

**Decision:** `src/data/projects.js` became `projects.jsx`, and `description`
accepts JSX as well as a plain string.
**Why:** "website-grading tool" needed to link out mid-sentence. The
alternative was a match-and-replace mechanism that scanned the description for
substrings to linkify — more machinery, and fragile the moment the copy is
edited. `profile.jsx` already set the precedent for JSX in `src/data/`.
**Affects:** src/data/projects.jsx, src/App.jsx, projectCard.css, README.md

## 2026-09-22 — Jira and Affinity icons generated from the bundled icon set

**Decision:** `public/icons/jira.svg` and `affinity.svg` were extracted from the
Simple Icons data already shipping inside `react-icons`, written as standalone
SVGs in their brand colors.
**Why:** The skill tiles render icons as `<img src>`, so a React icon component
would not have fit without special-casing that group. Drawing the marks by hand
would have produced inaccurate logos.
**Affects:** public/icons/, src/data/skills.js

## 2026-09-22 — Copy rewritten from the recommendations doc

**Decision:** Applied the supplied copy recommendations across the hero, all
project cards, the skills and education intros, contact, and site metadata.
Added a third role (Project Manager), a new SkinCredible Wichita project, and
three capability-only skill groups.

The Lumenta work is **two** cards, not one: the January 2026 original build and
the June 2026 redesign with AI tooling. The first pass wrongly read the doc as
replacing the original entry — it adds a second, later project to the same
client. The original card keeps its pre-existing copy; only its title gained
"Website Build" so the two are tellable apart at a glance.
**Why:** The old copy described capability in general terms ("strong
experience", "passionate about", "successful projects"). The new copy names
concrete deliverables, which is what a recruiter or client actually scans for.
**Rejected:** Pointing the Project Manager toggle at the frontend resume — it
would hand over a document that does not match the role being advertised. The
button is hidden for that role instead, until a PM resume exists.
**Affects:** src/data/, src/components/, index.html

## 2026-09-22 — Long-form role copy lives in src/data/profile.jsx

**Decision:** Each role carries a `claim` (first sentence) and `evidence` (the
rest). The hero renders the claim, the About section renders the evidence, and
`resume` may be null.
**Why:** The summaries were JSX literals inside `Header.jsx`, which contradicted
the rule that content lives in `src/data/`. Splitting them is what lets the hero
be a statement rather than a paragraph — the first screen sells, the About
section supports. Keeping both halves in one object means the pair cannot drift
apart when the copy is edited.
**Rejected:** Two separate switchers, one per section — the hero switcher
driving both is why the selected role is lifted into `App.jsx`.
**Affects:** src/data/profile.jsx, src/components/Header.jsx, AboutSection.jsx, App.jsx

## 2026-09-22 — Capability skill groups render as pills, not icon tiles

**Decision:** A skill group may set `variant: "text"`. Those render as pills
that size to their own text instead of fixed-width icon tiles.
**Why:** The new groups are capabilities, not products — "Client & Stakeholder
Communication" has no logo, and forcing it into a 170px tile grid alongside
two-word entries like "Git" leaves most tiles mostly empty.
**Affects:** src/data/skills.js, src/components/SkillsSection.jsx, skillsSection.css

## 2026-09-22 — Page rebuilt around a type-led hero

**Decision:** The hero is the name at display size plus one sentence; the
portrait and the long summary moved into a new About section placed after
Projects. Contact became the closing call to action and the footer dropped to a
colophon. Tokens gained a fluid type scale, section-rhythm values, and an
`.eyebrow` / `.group-title` pair used by every section.
**Why:** The hero was doing two jobs — identity and a five-line summary — so the
work sat below the fold and the first screen read like a resume header. Contact
and the footer also listed the same five details twice.
**Rejected:** Keeping the portrait in the hero. It halved the width available to
the name, which is the one element that has to land immediately.
**Affects:** src/styles/, src/components/, src/App.jsx, design-spec.md

## 2026-09-22 — Component stylesheets own their own rules

**Decision:** Each component's classes are defined in exactly one stylesheet —
its own. `App.css` keeps only layout shared across sections; `global.css` keeps
tokens, buttons, and accessibility rules.
**Why:** `.project-card`, `.project-title`, `.project-content`, `.hero` and
`.section-heading` were each defined in two files at once. Whichever imported
last silently won, so editing the obvious file often did nothing. Chose the
consolidation over a minimal-diff fix because the duplication was the thing
making changes unpredictable.
**Rejected:** Leaving the duplicates and only fixing bugs — smaller diff, but
the next styling change hits the same trap.
**Affects:** src/styles/App.css, projectCard.css, heroSection.css, educationSection.css

## 2026-09-22 — Stylesheet filenames are camelCase, imports must match exactly

**Decision:** All files in `src/styles/` use camelCase, and every import string
matches the filename character for character.
**Why:** `ProjectCard.jsx` imported `ProjectCard.css` when the file was
`projectCard.css`, and `EducationSection.jsx` imported `educationSection.css`
when the file was `educationsection.css`. Windows resolves these fine; a Linux
build server would fail to resolve either. This class of bug is invisible
locally and only appears at deploy time.
**Affects:** src/styles/, all component imports

## 2026-09-22 — Images are WebP, generated by a committed script

**Decision:** Ship WebP only. `scripts/optimize-images.mjs` (via
`npm run optimize:images`) does the conversion; sources are deleted once
converted and remain in git history.
**Why:** Images totalled 8.8 MB — a 2.1 MB hero, a 1.5 MB CSS backdrop, and a
3.5 MB `hero-2.jpg` that nothing referenced but still deployed. Now 186 KB.
A committed script beats a one-off conversion because new images get the same
treatment without rediscovering the settings.
**Rejected:** Adding width/height and lazy-loading while leaving the files
large — it addresses layout shift but not the several megabytes.

## 2026-09-22 — Projects without a link show a disabled "Private project" button

**Decision:** A project whose `link` is empty renders a disabled button reading
"Private project" rather than "View Project →".
**Why:** An empty link produced a button that looked and hovered like the
others but did nothing when clicked. Keeping a button preserves the card layout
and signals the work exists but isn't publicly viewable.
**Rejected:** Hiding the button — cleaner, but the cards then sit at
inconsistent heights and the work reads as missing rather than private.
**Affects:** src/components/ProjectCard.jsx, src/data/projects.js

## 2026-09-22 — Scroll reveal uses a zero intersection threshold

**Decision:** `useFadeIn` observes with `threshold: 0` plus a negative bottom
`rootMargin`, never a percentage threshold.
**Why:** The old 12% threshold can never be satisfied by a section taller than
roughly eight viewports — the section would stay at `opacity: 0` permanently.
The projects section is already 3000px tall on mobile and reaches only 27%;
adding a few more projects would have silently made it invisible.
**Affects:** src/hooks/useFadeIn.js
