# Remaining fixes

Backlog left over from the UX and code-standards pass on 2026-09-22, then
trimmed after the visual redesign and copy rewrite later the same day.
Everything here was verified against the tree at that time — the notes say what
was actually checked, so nothing needs re-deriving before starting.

Done in that pass (for context): the three bugs (import-case mismatch, dead
"View Project" button, failing lint), focus styles, reduced-motion support,
skip link, keyboard-accessible nav, CSS consolidation, content moved into
`src/data/`, and images cut from 10.3 MB to 220 KB. See [decisions.md](decisions.md).

---

## High

- [ ] **Compress the two resume PDFs.** `public/resumes/*.pdf` are 1.6 MB each —
      now the largest assets on the site by roughly 7×. The resume download is
      the hero's primary call to action, so it's the slowest thing a recruiter
      touches. Images were optimized in the last pass; these were not.

- [ ] **Replace `public/og-image.jpg` with a branded card.** It's currently a
      1200×630 crop of the hero backdrop — abstract blue, no name or role. This
      is the image LinkedIn, Slack, and iMessage show when the site is shared.
      The og/twitter title and description now carry the four-role positioning,
      so the image is the last piece still showing the old identity. The hero
      lockup (name over accent surname) is the obvious thing to reuse.

- [ ] **Add a real portrait, or drop the About figure.** `about-figure` in
      `AboutSection.jsx` currently shows `hero-1.webp`, which is an abstract
      texture, not a photograph — it carries an empty `alt` for that reason. The
      slot is sized and styled for a headshot if you want one there.

- [ ] **Add a Project Manager resume.** The PM role in `src/data/profile.jsx`
      has `resume: null`, so its Download Resume button is hidden. Drop a PDF in
      `public/resumes/` and fill the field in to switch it on.

- [ ] **Shrink the skill icons.** `public/icons/` is **4.6 MB** — eighteen times
      the weight of every project screenshot combined (256 KB). `java.svg` is
      1.1 MB, `matlab.svg` 752 KB, `canva.svg` 744 KB, `react.svg` 456 KB. They
      are SVGs carrying embedded raster data, and every one renders at 26px.
      Verified all serving 200 on the live site, so this is weight, not
      breakage. `scripts/optimize-images.mjs` only walks `public/images`, so
      these were never covered. Either re-export as true vector or convert to
      small WebP the way `affinity.webp` (2.3 KB) already is.

## Medium

- [ ] **Add `robots.txt` and `sitemap.xml`.** Neither exists. Standard for an
      indexed portfolio.

- [ ] **Add JSON-LD `Person` structured data** to `index.html`. Associates the
      name, role, and profile links with the site — worth it for a portfolio
      that ranks on your own name.

## Low

- [ ] **Delete `public/icons.svg`** (5 KB). Unreferenced leftover — confirmed
      nothing in `src/` or `index.html` points at it. (Not the `public/icons/`
      folder, which is in active use.)

- [ ] **Review the 9 dev-only npm advisories.** `npm audit --omit=dev` reports
      **0** — production dependencies are clean. These are build tooling only
      and never reach visitors, so this is hygiene, not exposure.

## Optional

- [ ] **Add a smoke test (Vitest).** No tests exist. One render test asserting
      each section mounts would have caught the invisible-sections bug hit
      during the last pass.

- [ ] **Dark mode.** The design-token layer in `global.css` makes this tractable
      now. A new feature rather than a fix, and visual changes were explicitly
      out of scope last round.

---

**If only one thing gets done:** the skill icons. At 4.6 MB they are now the
biggest byte cost on the site, ahead of the two resume PDFs at 3.2 MB combined,
and unlike the resumes they load on first paint rather than on a click.

**Cheapest meaningful batch:** the skill icons, the resume PDFs, and deleting
`public/icons.svg` — all byte-shaving, no visual change, no decisions needed.
