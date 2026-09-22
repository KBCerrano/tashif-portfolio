# Tashif Khan — Portfolio

Single-page portfolio site built with React and Vite, deployed at
[www.tashifkhan.ca](https://www.tashifkhan.ca).

## Running it

```bash
npm install
npm run dev      # local dev server
npm run lint     # eslint, should pass clean
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## How it's organized

```
public/            static assets served as-is (images, icons, resumes, CNAME)
src/
  components/      one component per file
  data/            page content — projects, skills, education
  hooks/           useFadeIn (scroll-triggered section reveal)
  styles/          one stylesheet per component, plus global.css and App.css
scripts/           one-off maintenance scripts
```

**Content lives in `src/data/`, not in components.** To add a project, skill, or
certification, edit the matching file in `src/data/` — no component changes needed.

- `profile.jsx` holds the role switcher. Each role has a `claim` (the hero
  sentence), `evidence` (the About paragraph), and an optional `resume`. Set
  `resume: null` and that role hides its download button.
- `projects.jsx` — a project with an empty `link` renders a disabled "Private
  project" button instead of a link that goes nowhere. The optional
  `highlights` array adds labelled blocks under the description.
- `skills.js` — a group with `variant: "text"` renders as pills rather than
  icon tiles, for capabilities that have no logo.

**Each component owns its stylesheet.** `global.css` holds design tokens, the
button styles, and accessibility rules; `App.css` holds only layout shared
across sections. Component-specific rules belong in that component's file —
don't redefine a component's classes in `App.css`.

Stylesheet filenames are camelCase and imports must match exactly. Windows
ignores filename case but Linux build servers do not, so a mismatch builds fine
locally and fails when deployed.

## Images

Images are served as WebP. To add one, drop the `.jpg`/`.png` into
`public/images/` and run:

```bash
npm run optimize:images
```

This writes a resized `.webp` next to it — reference the `.webp` and delete the
original. Sizes are configured in [scripts/optimize-images.mjs](scripts/optimize-images.mjs).

`public/og-image.jpg` (1200×630) is the link preview shown when the site is
shared on LinkedIn, Slack, or iMessage. It's currently a crop of the hero
backdrop; replace it with a branded card if you want something more deliberate.

## Deploying

Pushing to `main` deploys. [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
runs lint and build, then publishes `dist/` to the `gh-pages` branch, which is
what GitHub Pages serves at www.tashifkhan.ca.

`main` holds the source; `gh-pages` holds build output only and is replaced by
each deploy, so never commit to it by hand.

`public/CNAME` carries the custom domain and has to survive into `dist/`. The
workflow fails the deploy if it is missing rather than publishing a build that
would take the domain down.

## Design

The visual system — type scale, color, spacing rhythm, surfaces, motion, and
section order — is written down in [design-spec.md](design-spec.md). Tokens are
defined once in `src/styles/global.css`; component stylesheets consume them and
should not introduce their own numbers.

## Decisions and backlog

Notable choices are recorded in [decisions.md](decisions.md). Add an entry when
a decision would be hard to infer from the diff alone.

Known outstanding fixes are tracked in [TODO.md](TODO.md).
