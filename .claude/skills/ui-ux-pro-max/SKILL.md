---
name: ui-ux-pro-max
description: Generic design system for this project — typography, spacing, color usage, layout, motion, and component patterns. Load before building or restyling any page, section, or component.
---

# UI/UX Pro Max — Project Design System

Apply every rule below to all UI work in this repo. These are directives, not suggestions. When a request conflicts with a rule, flag the conflict before overriding.

Stack: React 19 + Vite. Use `motion/react` for animation (already a dependency). Author styles as plain CSS (`index.css`, `App.css`, or co-located CSS) with CSS custom properties for tokens.

---

## 1. Typography

**Use exactly two typefaces. Never add a third.**

- Display / headings: one geometric or grotesque sans (e.g. "Inter", "Söhne", "General Sans"). Pick one and set it as `--font-display`.
- Body / UI: one highly legible sans (Inter works for both if you only want one family — that is allowed and preferred for this project). Set `--font-body`.
- Always define a real fallback stack: `var(--font-body), -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`.

**Type scale — use these px values, nothing between them:**

| Token | Size | Line-height | Letter-spacing | Weight | Use |
|---|---|---|---|---|---|
| `--text-xs` | 12px | 16px (1.33) | +0.02em | 500 | labels, captions, eyebrows |
| `--text-sm` | 14px | 22px (1.57) | 0 | 400 | secondary text, table cells, form help |
| `--text-base` | 16px | 26px (1.625) | 0 | 400 | body copy |
| `--text-lg` | 18px | 28px (1.55) | 0 | 400 | lead paragraphs, intro text |
| `--text-xl` | 22px | 30px (1.36) | -0.01em | 600 | card titles, small headings |
| `--text-2xl` | 28px | 36px (1.28) | -0.015em | 600 | H3 / section subheads |
| `--text-3xl` | 36px | 44px (1.22) | -0.02em | 700 | H2 |
| `--text-4xl` | 48px | 56px (1.16) | -0.025em | 700 | H1 (interior pages) |
| `--text-5xl` | 64px | 68px (1.06) | -0.03em | 700 | hero display only |

**Rules:**

- Use a maximum of 3 distinct sizes per screen section.
- Body copy line length: cap at `65ch` (`max-width: 65ch` on text blocks).
- Body line-height never below 1.5. Heading line-height never above 1.3.
- Negative letter-spacing only on 22px and above. Positive letter-spacing only on all-caps labels at 14px and below.
- Weights allowed: 400, 500, 600, 700. Never use 300 or lighter — it fails on industrial/outdoor viewing conditions.
- Set all-caps via `text-transform: uppercase`, never by typing capitals.
- Headings use `--font-display`; everything else uses `--font-body`.

---

## 2. Spacing

**Use an 8px base scale. Every margin, padding, and gap is a multiple of 4px, and a multiple of 8px above 8px.**

```
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 24px
--space-6: 32px
--space-7: 48px
--space-8: 64px
--space-9: 96px
--space-10: 128px
```

**Rules:**

- Never use arbitrary values (`13px`, `30px`, `70px`). Snap to the scale.
- Section vertical padding (`padding-block`): `--space-9` (96px) desktop, `--space-7` (48px) mobile. Hero: `--space-10` (128px) desktop, `--space-8` (64px) mobile.
- Gap between related items in a group: `--space-4` (16px). Gap between groups: `--space-6` (32px) or `--space-7` (48px).
- Card internal padding: `--space-5` (24px) mobile, `--space-6` (32px) desktop.
- Space between a heading and its body text: `--space-3` (12px) to `--space-4` (16px). Between a subhead and the block above it: `--space-7` (48px) minimum.

**Container:**

```
--container-max: 1200px;   /* standard content */
--container-narrow: 760px;  /* prose, forms, single-column reading */
--container-wide: 1360px;   /* full-bleed-ish galleries, tables */
--gutter: 24px;             /* mobile */
--gutter-lg: 48px;          /* >= 1024px */
```

Center containers with `margin-inline: auto` and apply `padding-inline: var(--gutter)` (switch to `--gutter-lg` at `min-width: 1024px`).

---

## 3. Color usage — 60 / 30 / 10

Every screen must break down roughly as:

- **60% neutral** — page background, surfaces, borders, body text. Whites and greys carry the layout.
- **30% secondary** — the dark brand color (navy/charcoal): headers, footer, dark sections, primary text, dark buttons.
- **10% accent** — the single vivid brand color: primary CTAs, active states, key stat numbers, small highlights. Never fill a large area with the accent.

**Rules:**

- Accent is for action and emphasis only. If more than ~10% of a viewport is accent, remove some.
- Body text is the darkest neutral/secondary ink on light backgrounds — never pure `#000`, never the accent.
- Maximum one accent color. Do not introduce a second "accent" for variety.
- Links and focus rings may use a functional blue that is distinct from the accent (see brand skill).
- Borders: one light neutral (`1px` solid). Dividers are borders, not shadows.
- All text/background pairs must meet WCAG AA (4.5:1 body, 3:1 for large text and UI borders). Verify accent-on-white and white-on-accent before shipping a button.
- Concrete hex values live in the `gtech-brand` skill. This skill defines *how much* and *where*; that skill defines *which*.

---

## 4. Layout

- **Mobile-first.** Write base CSS for ~375px width, then add `min-width` media queries at `640px`, `768px`, `1024px`, `1280px`. Never write `max-width` breakpoints.
- Default to a single column on mobile. Introduce multi-column grids only at `768px`+.
- Use CSS Grid for page/section structure, Flexbox for component-level rows.
- **Generous whitespace is mandatory.** When in doubt, add space, don't fill it. Empty space is a feature, not waste.
- No element touches the viewport edge on mobile except intentional full-bleed images — always keep `--gutter` padding on content.
- Max content width `--container-max` (1200px); prose and forms use `--container-narrow` (760px).
- Grid gaps: `--space-5` (24px) mobile, `--space-6`/`--space-7` (32–48px) desktop.
- Cards in a grid: `repeat(auto-fit, minmax(280px, 1fr))` so they reflow without media queries.
- Sticky header max height 72px desktop, 60px mobile. Give it a solid background and a `1px` bottom border once scrolled.
- Every interactive target is at least `44×44px`.
- Images: always set `width`/`height` or `aspect-ratio` to prevent layout shift. `object-fit: cover` for photos in fixed frames.

---

## 5. Motion

Use `motion/react`. Keep motion purposeful, quick, and subtle.

**Standard pattern — fade-and-rise on scroll:**

```jsx
import { motion } from "motion/react";

const fadeRise = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] }, // ease-out
  },
};

<motion.div
  variants={fadeRise}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
>
  …
</motion.div>
```

**Rules:**

- Durations: **200–400ms** for entrances and hovers. 150ms for tiny state changes (button press). Never exceed 400ms for UI motion.
- Easing: **ease-out** for entrances (`[0.16, 1, 0.3, 1]` or `"easeOut"`). Ease-in-out for looping/continuous only. Never ease-in for entrances.
- Translate distance for fade-and-rise: **12–24px**, never more.
- Stagger children by **60–90ms**, cap total stagger at ~400ms regardless of count.
- Animate only `opacity` and `transform`. Never animate `width`, `height`, `top`, `left`, `margin`, or `box-shadow`.
- Entrances fire once (`viewport={{ once: true }}`). Content must never re-animate on scroll-up.
- No parallax, no scroll-hijacking, no auto-playing carousels, no counters that count up on every view.

**Reduced motion — required:**

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

And in JS, gate motion with the hook:

```jsx
import { useReducedMotion } from "motion/react";
const reduce = useReducedMotion();
const variants = reduce ? { hidden: { opacity: 1 }, show: { opacity: 1 } } : fadeRise;
```

When reduced motion is set: content appears immediately at full opacity, no transform, no stagger.

---

## 6. Component patterns

**Shared tokens:**

```
--radius-sm: 6px;    /* inputs, badges, small buttons */
--radius-md: 10px;   /* buttons, cards */
--radius-lg: 14px;   /* large cards, media frames */
--radius-full: 999px;/* pills, avatars */

--shadow-sm: 0 1px 2px rgba(16, 24, 40, 0.06), 0 1px 3px rgba(16, 24, 40, 0.10);
--shadow-md: 0 2px 6px rgba(16, 24, 40, 0.06), 0 8px 24px rgba(16, 24, 40, 0.08);
--shadow-lg: 0 12px 40px rgba(16, 24, 40, 0.12);

--border: 1px solid var(--color-border); /* light neutral */
--transition: 160ms cubic-bezier(0.16, 1, 0.3, 1);
```

### Cards

- Radius `--radius-md` or `--radius-lg`. Background: white (or the darkest surface in dark sections).
- Use `--border` **or** `--shadow-sm` for rest state — not both heavily. Prefer border on dense grids, shadow on standalone cards.
- Hover (only if the whole card is a link): raise with `translateY(-2px)` and step shadow to `--shadow-md` over `--transition`. No scale, no border-color rave.
- Internal padding per the spacing rules (24px mobile / 32px desktop). Consistent across a grid.
- Image inside a card: full-bleed to the card edges (negative margin equal to padding), `aspect-ratio` locked, `object-fit: cover`, radius only on the top corners.

### Buttons

- Three variants only: **primary** (accent fill, white text), **secondary** (dark/navy fill or outline), **ghost** (text + icon, no fill).
- Radius `--radius-md`. Height: 44px default, 52px large, 36px small. Horizontal padding `--space-5` (24px).
- Font: `--text-sm` or `--text-base`, weight 600, no letter-spacing unless all-caps label.
- States: hover = darken fill ~8%; active = `translateY(1px)`; focus-visible = `2px` solid functional-blue outline with `2px` offset; disabled = 40% opacity, `cursor: not-allowed`.
- Transition `--transition` on `background-color` and `transform` only.
- One primary button per view section. Never two accent-filled buttons side by side.
- Icons in buttons: 16–20px, `--space-2` gap, vertically centered.

### Forms

- Label above the field, always visible. `--text-sm`, weight 500, `--space-2` below it.
- Input height 44px (textarea min 120px). Radius `--radius-sm`. `--border` at rest.
- Focus: border switches to functional-blue + `3px` soft ring (`box-shadow: 0 0 0 3px rgba(blue, 0.15)`). Remove default outline only when this ring is present.
- Padding inside inputs: `12px 14px`.
- Help text `--text-xs` neutral-grey below the field; error text same size in a dark red, with the border turning red.
- Required fields marked with a visible "Required" or `*` in the label — never placeholder-only.
- Placeholders are examples, not labels, and use a mid-grey. Never rely on them to convey the field's purpose.
- Vertical rhythm between fields: `--space-5` (24px).
- Submit button is full-width on mobile, auto-width on desktop, primary variant.

### Sections

- Every major section: an optional eyebrow label (`--text-xs`, uppercase, accent or grey), an H2, an optional lead paragraph (`--text-lg`, `--container-narrow`), then content.
- Alternate section backgrounds between white and one off-white/neutral tint — never more than two background colors in the page body. Dark sections used sparingly for contrast moments (stats, CTA, footer).

---

## 7. Don'ts

- **No gradient text.** No `background-clip: text`. Headings are a solid color.
- **No more than two font families.** Ever.
- **No lorem ipsum** in committed code — use real or realistic project copy, or leave a clearly marked `TODO:` string.
- No gradients as primary surfaces. A very subtle single-hue gradient is allowed only for a hero background or an image overlay scrim.
- No drop shadows on text. No gl/`text-shadow` except a functional scrim over photos.
- No pure black (`#000`) and no pure white text on saturated color unless it passes contrast.
- No animating in on every scroll; no motion longer than 400ms; no parallax; no scroll-jacking.
- No more than one accent color; no rainbow of "category" colors.
- No icon-only buttons without an `aria-label`.
- No fixed pixel heights on text containers.
- No carousels for primary content.
- No auto-playing video with sound.
- No layout that requires horizontal scrolling on any viewport ≥ 320px.
- No decorative stock imagery (see `gtech-brand` for the imagery rules).
