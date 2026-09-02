---
name: gtech-brand
description: GTech Enterprises brand — positioning, voice, color palette, terminology, trust signals, and imagery rules. Load before writing any copy, choosing colors, or selecting images for this site.
---

# GTech Enterprises — Brand

Directives for all copy, color, and imagery on this site. Pair with the `ui-ux-pro-max` skill: that one defines proportions and mechanics, this one defines the specific values and the words.

---

## 1. Company facts

Use these facts; do not embellish them.

- Company: **GTech Enterprises** (write it "GTech", one word, capital G, capital T). Logo mark is a **GE** monogram inside an orange gear.
- Founded: **2016**. Say "since 2016" or "established 2016" — never invent a longer history.
- Location: **Chikhali, Pune** (Pimpri-Chinchwad industrial belt), Maharashtra, India. One plant.
- People: **~42** (about 7 engineering/management staff, ~35 shop floor). Write "a team of around 42" or "~42 people" — do not state a precise headcount as if it were audited.
- Business type: contract manufacturer / **job-shop** doing precision CNC machining and structural fabrication, prototyping through production.
- Leadership contacts: Dr. Ganesh Jadhav, Mr. Parag Patil. Refer to people by name and role only; use they/them if a pronoun is unavoidable and none is given.

---

## 2. Positioning

**Primary line — use verbatim as the positioning statement:**

> Responsive build-to-print partner for construction-equipment and industrial OEMs.

**Rules:**

- Lead every top-level page with a concrete version of this: what we machine and fabricate, for whom, to what capability.
- Anchor identity in the work: machines, envelopes, tolerances, processes, named customers — in that order of priority.
- Frame the advantage as **responsiveness and build-to-print reliability** for OEM supply, not as scale or breadth.
- Always name the two capability halves together: **precision CNC machining** and **structural fabrication / weldments**.
- When describing industries, lead with **construction and earth-moving equipment**, then automotive, energy, heavy machinery, industrial/tooling.

---

## 3. Voice

Credible, industrial, proof-led. Write like an engineer briefing a buyer, not a marketer.

**Always:**

- Open with proof. Put a machine, a spec, a tolerance, or a named customer in the first two sentences of any section.
- Use specific nouns and numbers: "Koike 300 A HD plasma, 3 × 8 m bed" beats "advanced cutting capability".
- Keep sentences short and declarative. Active voice. Present tense.
- State what we do and don't do plainly. It's fine to say "typical lot sizes are prototype to mid-volume".
- Use the customer's language: part names, process routes, EAU, first-article, PPAP, drawing revisions.

**Avoid entirely — do not use these words or their close cousins:**

- "solutions provider", "solutions", "one-stop", "turnkey" (as filler)
- "world-class", "cutting-edge", "state-of-the-art", "best-in-class", "excellence"
- "passionate", "committed to excellence", "customer-centric", "synergy"
- "revolutionary", "innovative" (as a self-description), "next-generation"
- Generic mission-statement language: "we strive to…", "our journey…", "we believe in…"

**Rewrite pattern:**

- Before: "GTech Enterprises is a forward-thinking, quality-focused manufacturing company committed to delivering world-class solutions."
- After: "GTech Enterprises machines and fabricates build-to-print components for construction-equipment OEMs. Since 2016, from one plant in Chikhali, Pune."

---

## 4. Color palette

Derived from the logo (vivid orange gear, azure GE monogram, black keyline). Use these hex values. Apply them in the 60/30/10 split defined in `ui-ux-pro-max`.

### Brand core

| Token | Hex | Role |
|---|---|---|
| `--color-orange` | `#FA6336` | **Accent (the 10%).** Primary CTAs, active states, key stat numbers, small highlights. Sampled from the logo gear. |
| `--color-orange-600` | `#E24E22` | Orange hover / pressed. |
| `--color-orange-100` | `#FDE7DF` | Faint orange wash for badges/eyebrows on white. Use rarely. |
| `--color-navy` | `#0B2A43` | **Secondary (the 30%).** Dark sections, footer, headings on light, dark buttons. A deepened version of the logo's azure. |
| `--color-navy-900` | `#061B2C` | Deepest navy — footer base, hero scrims. |
| `--color-blue` | `#0090D6` | **Functional only.** Links, focus rings, inline spec highlights. The logo's literal letter color. Keep it visually distinct from the orange accent; never use it as a second accent for decoration. |

### Neutrals (the 60%)

| Token | Hex | Role |
|---|---|---|
| `--color-white` | `#FFFFFF` | Primary surface. |
| `--color-paper` | `#F6F7F9` | Alternate section background (the only off-white). |
| `--color-mist` | `#EDEFF2` | Subtle fills, table header rows, disabled surfaces. |
| `--color-border` | `#D9DDE2` | All 1px borders and dividers. |
| `--color-steel` | `#6B7480` | Secondary text, captions, form help. |
| `--color-ink` | `#14181F` | Body text on light backgrounds (never pure black). |

### Dark accent

| Token | Hex | Role |
|---|---|---|
| `--color-graphite` | `#1C1F26` | The one dark accent — machined-steel charcoal. Use for a single high-contrast band (stats or CTA), code/spec blocks, or a dark card. Not interchangeable with navy; pick navy for brand-heavy dark areas, graphite for a neutral industrial dark. |

**Rules:**

- Orange is action and emphasis only. If a viewport is more than ~10% orange, cut it back.
- Headings on light backgrounds: `--color-navy` or `--color-ink`. Never orange headings, never blue headings.
- Body text: `--color-ink`. Never `--color-orange`, never `--color-blue`, never `#000`.
- White text on `--color-orange` passes AA for large/bold text only — use it for buttons (16px/600+), not paragraphs.
- Dark sections: `--color-navy` or `--color-graphite` background, `--color-white` headings, `#C9D2DA`-range for body, orange for the single CTA.
- Focus rings: `--color-blue` at `2px` solid + `2px` offset (or the soft ring from `ui-ux-pro-max` forms).

---

## 5. Terminology

**Use these terms** (they signal we speak the customer's language):

- **build-to-print** (adj., hyphenated) — for customer-drawing manufacturing
- **OEM**, **Tier-1 / Tier-2** — for supply position
- **job-shop** — for our business model
- **weldments** — for welded fabricated assemblies (not "welded parts", not "metal structures")
- **envelope** — for machine capacity ("VMC work envelope 850 × 600 × 600 mm", "turning envelope 300 Ø × 800 L")
- **first-article**, **PPAP**, **EAU** (estimated annual usage), **drawing revision**, **traceability**, **in-process inspection**

**Also acceptable:** CNC turning, VMC milling, structural fabrication, plasma cutting, press-brake forming, MIG/TIG/arc welding, prototype-to-production.

**Never use:** "solutions provider", "world-class", "cutting-edge", "state-of-the-art", "manufacturing solutions" (the old deck tagline — retire it), "fabrication solutions".

---

## 6. Trust signals to feature

Surface these prominently — on the home page, in a stats band, and where relevant on capability pages:

- **Since 2016** — establish tenure without overstating it.
- **HD Hyundai Construction Equipment India** and **Zoomlion** as anchor OEM customers. Name them first in any client mention. Full known list: HD Hyundai Construction Equipment India, Zoomlion, Global Tooling, Shan Engineering Works, Matchwell Engineering Pvt Ltd, Protech Stampings Pvt Ltd. Only display logos with permission; otherwise list names as text.
- **5-ton crane** — handling capacity for heavy weldments.
- **Koike plasma, 300 A HD, 3 × 8 m bed** — profile cutting capacity.
- **BFW BMV 50 TC24 VMC** — work envelope 850 × 600 × 600 mm; Z-axis (head-stock) travel 510 mm; spindle-nose-to-table 100–610 mm (to 810 mm with the optional column riser).
- **LMW CNC turning** — three machines, turning envelopes up to 300 Ø × 800 L; 8-station hydraulic turret; chuck sizes 165 / 200 / 300 mm.
- **Press-brake forming** — 200-ton class (reconcile the 200 T vs 220 T inconsistency in the source deck before publishing a single figure).
- **~42-person team** with a dedicated quality function (quality engineers on staff).
- **Growth: roughly 3× since 2021** (see do-nots for how to phrase).

---

## 7. Imagery

**Use only:**

- Real photographs of GTech's own shop floor, machines, people, and finished parts.
- Newly commissioned first-party photography where the source images are low-resolution or unlicensed.
- Clean part-on-bench photos of actual delivered components (machined rings, flanges, spacers, weldments, hydraulic clamps, saddles, material-handling trolleys).
- Simple line diagrams / process maps drawn in-house (SVG), following `ui-ux-pro-max` diagram rules.

**Never use:**

- Stock photography of any kind — no handshake photos, no generic "business meeting" or "teamwork" shots, no stock factory interiors.
- Rendered or CGI machines and parts.
- Vendor product photos lifted from the source company profile deck (LMW lathe render, BFW VMC photo, gantry-crane catalogue image) — these are third-party and not licensed for this site. Replace every one with a first-party photo of the actual machine on GTech's floor.
- AI-generated imagery of machinery, parts, or people.
- Competitor or customer imagery beyond permitted logos.

**Treatment:**

- Photos sit in frames with locked `aspect-ratio` and `object-fit: cover`.
- Optional subtle navy scrim (`--color-navy-900` at 20–40% opacity) only when text overlays a photo.
- No heavy filters, no duotone-everything, no orange color-grading. Let the shop floor look like the shop floor.

---

## 8. Do-nots

- **Do not claim ISO 9001 (or any) certification.** The source deck says a QMS is "maintained" but shows no certificate. If asked to add a certification badge, respond that it must be confirmed first. Acceptable phrasing until confirmed: "quality management system with in-process and final inspection" and, if true, "ISO 9001 — in implementation".
- **Do not publish absolute turnover / revenue figures.** The deck's ₹-crore numbers are internal projections. Use "roughly 3× revenue growth since 2021" or "consistent year-on-year growth since 2021" — never a rupee amount, never a specific multiple beyond "about 3×".
- Do not use vendor product photos from the source PDF (licensing) — see Imagery.
- Do not retire-then-reuse the old tagline "…A manufacturing solution" or "manufacturing solutions" anywhere.
- Do not overstate scale: one plant, ~42 people, founded 2016. No "facilities", no "global", no "decades".
- Do not name customers as references or imply endorsement beyond "supplies to" / "manufactures for", and only with the known list above.
- Do not use the functional blue (`--color-blue`) as a decorative or secondary accent — links and focus only.
- Do not invent tolerances, capacities, or certifications not listed in section 6. If a spec is needed and unknown, leave a `TODO:` and flag it.
