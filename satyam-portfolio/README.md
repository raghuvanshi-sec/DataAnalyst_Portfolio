# Satyam Raghuvanshi — Portfolio

React + Vite portfolio site. The single HTML file has been split into components,
per-component stylesheets, and a central content file.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Structure

```
portfolio/
├── index.html                 # Vite entry HTML (fonts + #root)
├── package.json
├── vite.config.js
├── public/                    # copied as-is into the build
│   ├── satyam.jpg             # portrait used in the About section
│   └── Satyam_Raghuvanshi_Resume.pdf
└── src/
    ├── main.jsx               # React entry, imports global CSS
    ├── App.jsx                # section composition order
    ├── data/
    │   └── content.js         # ALL site copy — edit here, not in JSX
    ├── hooks/
    │   └── useScrollRail.js   # drives the Experience timeline's scroll-fill line
    ├── utils/
    │   ├── visualReveal.js    # draws in project chart SVGs on scroll/modal-open
    │   └── countUp.js         # animates About's stat numbers up on first view
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── HeroCanvas.jsx     # Three.js wireframe, isolated + guarded
    │   ├── Marquee.jsx
    │   ├── Capabilities.jsx
    │   ├── Projects.jsx
    │   ├── ProjectVisual.jsx  # SVG stand-ins for project cards
    │   ├── ProjectModal.jsx   # click-through details dialog per project
    │   ├── About.jsx
    │   ├── Experience.jsx
    │   ├── Contact.jsx
    │   └── Footer.jsx
    └── styles/
        ├── variables.css      # design tokens (colors, fonts, layout)
        ├── global.css         # resets + shared primitives + .viz-* animation rules
        ├── Navbar.css
        ├── Hero.css
        ├── Marquee.css
        ├── Capabilities.css
        ├── Projects.css
        ├── ProjectModal.css
        ├── About.css
        ├── Experience.css
        ├── Contact.css
        └── Footer.css
```

## Where to change things

| Want to change…            | Edit                                    |
| -------------------------- | --------------------------------------- |
| Any text, links, job dates | `src/data/content.js`                   |
| Colors, fonts, spacing     | `src/styles/variables.css`              |
| A section's layout         | that section's `.css` in `src/styles/`  |
| Section order              | `src/App.jsx`                           |
| Portrait photo             | replace `public/satyam.jpg`             |
| Resume PDF                 | replace `public/Satyam_..._Resume.pdf`  |

## Notes

- **GitHub links are real.** Each project's `github` field in
  `src/data/content.js` points at its actual repo (Riskora, Sentient
  Retention Engine, PhishGuard, and the Job Simulation's UrbanKart repo).
  Set a project's `github` to `null` to hide the button if you ever add one
  without a public repo.
- **Click a project card to see the full write-up.** `ProjectModal.jsx` shows
  the fuller description, "what I did" bullets, and GitHub / email links.
  Closes on Escape, backdrop click, or the × button, and restores focus to
  whichever card opened it.
- **Data-themed reveal animations** run through the page, each contained
  within its own element so nothing overlaps the layout:
  - Project chart visuals (gauge, line, rows, bars) draw themselves in the
    first time a card scrolls into view, and again whenever its modal opens.
    Driven by `src/utils/visualReveal.js` + the `.viz-*` classes in
    `global.css`; safe to delete if you swap a visual for a real screenshot.
  - The Capabilities grid gets a single lime scan-line sweep on first view
    (`Capabilities.jsx` + `.cap__scan`).
  - The About stats fade in and count up to their final value on first view
    (`src/utils/countUp.js`). Values with a non-digit prefix (like the
    graduation year) just fade in — counting up "'27" made no sense.
  - Everything respects `prefers-reduced-motion` — animations are skipped
    and elements just appear in their final state.
- **Project images** — `ProjectVisual.jsx` renders abstract SVG stand-ins. Swap any
  for a real screenshot: `<img className="proj__visual" src="/shot.png" alt="" />`.
- **Hero animation** — `HeroCanvas.jsx` checks for WebGL support and wraps setup in
  try/catch, so the page still works if WebGL is unavailable. It also cancels its
  animation frame and disposes geometries on unmount.
- **Bundle size** — Three.js makes the JS chunk ~627 kB. If that matters, lazy-load
  `HeroCanvas` with `React.lazy()` so it loads after first paint.
