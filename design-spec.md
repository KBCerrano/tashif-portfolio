# Design spec

The visual system this site is built to. Written 2026-09-22 from a study of a
reference portfolio; inspiration only — no copy, images, or branding taken.

Tokens live in `src/styles/global.css`. Nothing below should appear as a literal
number in a component stylesheet.

## The idea

The name is the hero image. No portrait, no paragraph, and no chrome on the
first screen — one oversized wordmark, one sentence of positioning, two
buttons, and a lot of air. Everything after that is evidence.

## Type

One family, Clash Grotesk, across headings and body. `Clash Display` 700 is the
heavier cut and is used for the hero name only.

Scale contrast is the main device: the display size is roughly 8x body. There is
no middle of the ladder — text is either a statement or it is quiet.

| Token | Use |
| --- | --- |
| `--text-display` | hero name only |
| `--text-h2` | section titles |
| `--text-h3` | project titles |
| `--text-h4` | card and group titles |
| `--text-lead` | hero positioning line |
| `--text-body` / `--text-small` | paragraphs, card copy |
| `--text-label` | eyebrows and meta labels, uppercase, `--tracking-wide` |

## Color

White ground, near-black text, one accent. The accent is rationed — surname,
primary call to action, eyebrows, active nav, scroll progress. It is never a
background for large areas.

All text pairs are checked against WCAG AA; the ratios are noted beside each
token in `global.css`.

## Space

Sections are separated by `--section-y`, which scales with the viewport. The
hero gets `--section-y-hero`, which is taller — the air above the name is doing
work. Within a section, the ladder `--space-1` to `--space-10` is the only
source of spacing values.

## Surfaces

A card is a white box with a 1px hairline and a radius. It has no shadow. Depth
is expressed by the sunken surface (`--color-surface-sunken`), used for
alternating section bands and meta strips, not by elevation.

Section bands alternate white / sunken so the page has rhythm without rules
between every block.

## Motion

Elements fade up individually as they enter view, staggered within their
section. Hover never moves layout: a hairline darkens, an image scales inside
its own frame. `prefers-reduced-motion` removes all of it.

## Section order

Hero, Projects & Experience, About, Skills, Education, Contact, Footer.

Projects come before the personal story deliberately: the work is the argument,
the story is the support. The hero carries the claim ("I build responsive
websites with React, JavaScript, HTML, and CSS") and About carries the
evidence — the same paragraph, split at its first sentence.

The role switcher in the hero drives both, which is why the selected role lives
in `App.jsx` rather than in the hero. A role with no resume on file hides the
download button instead of handing over another role's document.
