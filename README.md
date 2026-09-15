# GTech Enterprises — Website

Marketing site for GTech Enterprises, a precision CNC machining and structural fabrication job-shop in Chikhali, Pune.

## Tech stack

- **React 19** + **Vite** (build tool / dev server)
- **react-router-dom** for routing
- **motion/react** (Framer Motion's successor) for scroll/entrance animation
- Plain CSS with custom properties for design tokens — no CSS framework, no CSS-in-JS

## Getting started

Prerequisites: Node.js 20+.

```bash
npm install       # install dependencies
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # production build, output to dist/
npm run preview   # serve the production build locally
npm run lint      # run ESLint
```

## Project structure

```
src/
  main.jsx           # app entry point — mounts <App> into #root
  App.jsx             # route table
  App.css, index.css  # index.css holds all design tokens + global reset/base styles
  data/
    site.js           # single source of truth for ALL site content
  components/
    ui/               # design-system primitives: Button, PhotoCard, Reveal
    *.jsx             # reusable section/feature components (Hero, Footer, Navbar, ...)
  pages/
    *.jsx             # one component per route, wired up in App.jsx
```

- **`src/pages/`** — route-level components. Each one corresponds to an entry in `src/App.jsx`'s `<Routes>`.
- **`src/components/`** — reusable pieces used by one or more pages (sections, cards, the nav/footer). A few home-page components share a topic with a page (e.g. `CapabilitiesTeaser.jsx` vs. `pages/Capabilities.jsx`) — the teaser is the short home-page card grid, the page is the full standalone route.
- **`src/components/ui/`** — small, generic primitives with no site-specific content: `Button`, `PhotoCard`, `Reveal`/`RevealGroup`/`RevealItem` (the scroll-entrance animation wrapper).
- **`src/data/site.js`** — every piece of copy, spec, and media reference on the site. See "Content editing" below.

There's no `hooks/` or `utils/` folder — the few bits of local state (scroll position, form fields, a filter) live directly in the components that use them, and nothing is currently shared across components. Add one only when a second component actually needs the same logic.

### `public/assets/client-assets/`

Client-supplied media, referenced by path from `src/data/site.js`:

```
client-assets/
  logos/           # client/partner company logos (PNG/WEBP)
  team/            # leadership headshots
  certifications/  # ISO certificate scans (PDF)
  awards/          # award photos
  video/           # plant tour clip + poster image
  docs/            # source PDFs/decks the copy was transcribed from (not linked from the site)
```

## Content editing guide

- **To change any text** (copy, specs, machine list, stats, nav labels, contact details): edit `src/data/site.js`. It's organized into `=== SECTION ===` blocks — find the relevant export and edit the values. Components read from this file; don't hardcode content changes into a `.jsx` file.
- **To swap a photo**: replace the file in `public/assets/client-assets/`, keeping the same filename (or update the path in `site.js` if the filename changes). Several images are currently PLACEHOLDER Unsplash photos (search `PLACEHOLDER` in `site.js`) awaiting first-party shop photography — see `.claude/skills/gtech-brand` §7 for imagery rules before replacing them.
- **To change colors, type sizes, or spacing**: edit the CSS custom properties at the top of `src/index.css`. Every component references these tokens — avoid introducing new hardcoded hex/px values in component CSS.

## The `.claude/skills/` folder

`.claude/skills/gtech-brand/SKILL.md` and `.claude/skills/ui-ux-pro-max/SKILL.md` are instructions for Claude Code, not app code. They define GTech's brand voice/colors/imagery rules and this project's design system (type scale, spacing, motion, component patterns) respectively. Claude Code loads them automatically before writing copy or UI code in this repo — if you're editing by hand, skim them for the same rules (they're short and specific, e.g. "never use 'world-class'" or "durations 200–400ms for entrances").

## Deployment

Hosted on **Vercel**, auto-deploying from the `main` branch on GitHub. Pushing to `main` ships to production — there's no separate staging environment.

## Common tasks

**Add a new page:**
1. Create `src/pages/YourPage.jsx` (+ `YourPage.css` if it needs page-specific styles).
2. Add a `<Route path="your-page" element={<YourPage />} />` in `src/App.jsx`.
3. Add `{ label: "Your Page", to: "/your-page" }` to `NAV_LINKS` in `src/data/site.js` if it should appear in the nav/footer.

**Add a client logo:**
1. Add the logo file to `public/assets/client-assets/logos/` (prefer a transparent PNG).
2. Add an entry to the `CLIENTS` array in `src/data/site.js` with matching `id`, `name`, and `logo` path. It will appear automatically in the logo marquee on the home page and `/clients`.

**Add a new capability:**
1. Add an entry to the `CAPABILITIES` array in `src/data/site.js` (shows up in the home-page teaser and the `/capabilities` grid).
2. Add a matching key to `CAPABILITY_PAGES`, keyed by the same `id`, with the full detail-page content (`intro`, spec table rows, `parts`, `materials`). This becomes the `/capabilities/:slug` page automatically via `pages/CapabilityDetail.jsx`.

## Path alias

`@` resolves to `src/` (configured in `vite.config.js` and `jsconfig.json`) and is available for new code. Existing imports are relative (`../components/...`) and were left as-is since they're already shallow and consistent.
