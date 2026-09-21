# Universal Truth Ministry — Website Design System

Written after a full audit of all 16 live pages. This is the first time these choices have been
written down in one place. Before this, every page was styled by copying whatever the last page
did, which is why the site works but feels repetitive (see the Design Critique from earlier for the
full findings).

**Important technical note before anything else:** this site's `styles.css` is not a live Tailwind
build. It's a pre-built, trimmed file that only contains the exact utility classes already used
somewhere in the HTML. If a class isn't already in that file, writing it in a page does nothing —
the browser just ignores it, silently. This audit confirmed real gaps: there is no `shadow-lg` (only
`hover:shadow-lg`), no `aspect-video`, no `h-56` or `h-96`, no `rounded-t-2xl`, no
`transition-transform` or `-translate-y` (so no "card lifts on hover" effect is possible right now).
Every component below only uses classes confirmed to already exist, so it will work immediately. But
this ceiling will keep showing up on future work. See Priority Actions at the end.

---

## Audit Summary

**Pages reviewed:** 16 | **Components found:** 8 | **Issues found:** 6

| Category | Finding |
|---|---|
| Color tokens | 100% consistent. No hardcoded hex colors found anywhere — every color goes through the navy/gold/slate Tailwind tokens. This is a real strength, keep it. |
| Heading sizes | Inconsistent. "H2" appears as `text-xl`, `text-lg`, `text-2xl`, and `text-3xl` across different pages with no clear rule for which size means what. |
| Shadows / elevation | Almost unused. `shadow-` classes appear only in nav dropdowns, never on content cards. Every card sits flat on the page. |
| Card patterns | 3 different card treatments exist already (plain, accent-border, section-tint) but were never named or written down, so each page reinvents which one to use. |
| Section rhythm | Every page repeats the same block order: dark hero → white section → gray section → dark stat band → CTA → footer. This is the main cause of the "basic/templated" feeling. |
| Photography | Every hero photo gets the same heavy dark overlay, which is good for text contrast but flattens the warmth of the real photos. |

---

## Foundations

### Color

| Token | Tailwind class | Hex | Use for |
|---|---|---|---|
| Primary Navy | `bg-slate-900` / `text-slate-900` | `#0f172a` | Header, footer, dark hero backgrounds, body headings |
| Gold Accent | `bg-brand-400` / `text-brand-400` | `#d4a015` | Primary buttons, links, eyebrow labels on dark backgrounds, active nav state |
| Gold Deep | `text-brand-500` / `border-brand-400` | `#946b08` | Eyebrow labels on light backgrounds, hover states, link text on white |
| Cream Tint | `bg-brand-50` | `#fffbeb` | Rare, soft highlight blocks (used once on Statement of Faith "Our Calling" box) — reserve for one callout per page, not general backgrounds |
| Neutral Surface | `bg-slate-50` | `#f8fafc` | Card backgrounds, alternating section backgrounds |
| Neutral Border | `border-slate-100` / `border-slate-200` | `#f1f5f9` / `#e2e8f0` | Dividers, card borders |
| Body Text | `text-slate-600` | `#475569` | Default paragraph text |
| Muted Text | `text-slate-500` | `#64748b` | Captions, field labels — passes contrast at 4.76:1, don't go lighter |
| **Avoid** | `text-slate-400` | `#94a3b8` | Fails accessibility contrast (2.6:1) on white. Currently used for source citations — needs fixing wherever it appears on a light background. |

### Typography

Two fonts: **Fraunces** (serif) for anything that should feel warm and considered — headlines,
pull-quotes. **Inter** (sans) for everything read in bulk — body copy, labels, buttons.

| Role | Class | When to use |
|---|---|---|
| Page H1 | `font-semibold text-4xl md:text-5xl` | One per page, in the hero |
| Section H2 | `font-semibold text-3xl` | Major section headings (e.g. "Our Impact So Far") |
| Card/subsection H2/H3 | `font-semibold text-lg` | Heading inside a card or list item — stop using `text-xl`/`text-2xl` here, it competes with section headings |
| Eyebrow label | `uppercase tracking-[0.3em] text-sm font-medium` | Small label above a heading (e.g. "ABOUT US"). Already consistent site-wide — keep exactly as-is, it's one of the site's best details. |
| Body | `leading-relaxed` (default size) or `leading-relaxed text-lg` for intro paragraphs | Paragraph text |
| Caption / meta | `text-sm text-slate-500` | Photo captions, field labels, timestamps |

**Rule going forward:** every heading in the same visual "tier" across the whole site should use the
exact same class string. Right now there are 6 different H2 treatments; there should be 2 (section
H2, card H2).

### Spacing

Stick to this scale (confirmed available): `2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 20` (as in `mb-8`,
`gap-6`, `py-20`). Section vertical padding: `py-20` or `py-24`. Card padding: `p-6` or `p-8`.

### Radius & Elevation

| Level | Class | Use for |
|---|---|---|
| Small | `rounded-lg` | Buttons, small tags |
| Medium | `rounded-xl` | Standard cards |
| Large | `rounded-2xl` | Feature cards, photo containers, callout boxes |
| Full | `rounded-full` | Pills, avatar circles, icon circles |
| Barely visible | `shadow-sm` | Effectively useless on this site. Tested and rejected: at 5% opacity and 2px, it is invisible on a tinted card against a white page. Do not reach for it. |
| Standard lift | `shadow-xl` | The working default for any card that should read as a card (feature cards, the donate box, callout cards) |
| Strong lift | `shadow-2xl` | Modals, dropdown menus (already used here) |

**Tested finding:** a card needs *both* a white background and `shadow-xl` to actually read as
lifted. `bg-slate-50` + `shadow-sm` stays visually flat, which is what the whole site looked like
before. The Core Values cards were changed to `bg-white p-8 rounded-xl shadow-xl` and that is the
pattern to copy.

**Exception:** small icon+label chips (like the three on What We Do) should stay flat and tinted
(`bg-slate-50`, no shadow). A heavy shadow on a small chip looks wrong. Elevation is for cards that
carry real content, not for labels.

---

## Components

### Button

| Variant | Class | Use for |
|---|---|---|
| Primary | `px-5 py-2 rounded-full bg-brand-400 text-white text-sm font-medium hover:bg-brand-500 transition-colors` | Main call to action (Donate, Support Us) — one per section max |
| Secondary | `px-5 py-2 rounded-full border border-slate-200 text-slate-700 text-sm font-medium hover:border-brand-400 transition-colors` | Supporting action next to a primary button (already used for "Volunteer" next to "Donate") |

### Card — 4 named variants

**1. Icon-Feature Card** (existing — Core Values, program highlights)
`bg-white p-8 rounded-xl shadow-xl` + icon circle (`w-12 h-12 rounded-full bg-brand-400/10`) +
heading + text. Use for: short, parallel list items (3-6 of the same kind of thing).

**2. Accent-Border Card** (existing — Donate bank details)
`bg-slate-50 border-l-4 border-brand-400 rounded-2xl p-8 shadow-xl`.
Use for: one important block of information per page that should stand out from surrounding text —
not for repeated grids of the same thing.

**3. Photo-Led Card** (new — replaces the flat stock-image cards on "What We're Planning Next")
```html
<div class="rounded-2xl overflow-hidden bg-white shadow-sm">
  <div class="h-48 bg-slate-100">
    <img src="images/example.jpg" class="w-full h-full object-cover" alt="..." />
  </div>
  <div class="p-6">
    <h3 class="font-semibold text-lg text-slate-900 mb-2">Card Title</h3>
    <p class="text-sm leading-relaxed text-slate-600">Description text.</p>
  </div>
</div>
```
Use for: any card representing a real thing with a real photo (programs, team, stories). Never pair
with a generic stock icon — if there's no real photo yet, use the Icon-Feature Card instead, don't
fake it with stock photography that doesn't match the rest of the site's documentary style.

**4. Stat Block** (refined — homepage/Impact numbers)
```html
<div class="text-center">
  <p class="text-4xl md:text-5xl font-semibold text-brand-500">35</p>
  <p class="text-sm text-slate-600 mt-2 leading-relaxed">Christian children currently receiving education</p>
</div>
```
Keep the number large and in Fraunces-weight semibold (already correct). The fix here is
consistency: make sure the number size and label size are identical across Homepage and Impact page
(currently they already match — keep it that way as more stats get added).

### Hero — 2 named variants

**1. Dark Overlay Hero** (existing — keep for pages that open with a quote or need maximum text
contrast: Homepage, Donate, program pages)
Current pattern is fine. One change: consider a slightly lighter overlay
(`bg-slate-900/70` instead of a near-opaque gradient) on pages where the photo itself is the point.

**2. Photo-Forward Hero** (new — for narrative pages where the photo should breathe: Our Story, Our
Team)
```html
<section class="pt-16 pb-8">
  <div class="max-w-4xl mx-auto px-6 text-center mb-10">
    <p class="uppercase tracking-[0.3em] text-sm font-medium text-brand-500 mb-4">About Us</p>
    <h1 class="text-slate-900 font-semibold text-4xl md:text-5xl">Our Story</h1>
  </div>
  <div class="max-w-5xl mx-auto px-6">
    <img src="images/example.jpg" class="w-full h-72 md:h-96 object-cover rounded-2xl shadow-sm" alt="..." />
  </div>
</section>
```
Note: `h-96` is not yet in `styles.css` — use `h-80` (confirmed available) until the build is fixed
(see Priority Actions).

---

## Do's and Don'ts

| Do | Don't |
|---|---|
| Reuse the 4 named card variants above | Invent a 5th flat gray box variant for a new section |
| Add `shadow-sm` or `shadow-xl` to cards | Leave every card with no elevation |
| Use `text-slate-500` or darker for small text on white | Use `text-slate-400` on a white/light background |
| Vary hero style between Dark Overlay and Photo-Forward across pages | Use dark-overlay-hero + 3 icon cards + stat band on every single page |
| Keep the eyebrow label pattern exactly as-is | Change label styling per page |

---

## Priority Actions

1. ~~**Fix the accessibility contrast issue**~~ **DONE (Sept 2026).** All 5 instances of
   `text-slate-400` on light backgrounds were changed to `text-slate-500`, taking them from 2.5:1
   (fail) to 4.8:1 (pass). Note: the Donate card's `text-slate-500` labels sit on `bg-slate-50`,
   which measures 4.55:1. That passes, but only just. If you want more margin there, those labels
   can go to `text-slate-600`.
2. ~~**Add elevation to existing cards**~~ **DONE (Sept 2026).** Core Values cards are now
   `bg-white ... shadow-xl`; the Donate and Get Involved accent cards got `shadow-xl`; the What We Do
   chips were left flat on purpose.
3. **Standardize H2 sizing** — audit every page and collapse the 6 current H2 treatments into the 2
   documented above. This is the biggest remaining consistency win and is still open.
4. **Replace the "What We're Planning Next" stock-icon cards** with the new Photo-Led Card pattern
   (using real photos where available, Icon-Feature Card where not).
5. **Vary the hero on Our Story and Our Team** to the new Photo-Forward Hero, since those pages are
   about people and photos, not a call to action.
6. **Consider fixing the build process.** The purged-CSS limitation above will block every future
   styling change the same way it blocked parts of this system (`h-96`, `aspect-video`,
   `rounded-t-2xl`, hover-lift animation all had to be worked around or dropped). Setting up a real
   Tailwind build (even a simple one that regenerates `styles.css` from a class scan before each
   deploy) would remove this ceiling permanently. This is a separate, one-time technical task —
   happy to set it up if you want it.
