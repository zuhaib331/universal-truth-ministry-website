# Universal Truth Ministry Website — Project Context & Handoff

This file is the single source of truth for the website project. It captures everything decided and
built so far, so any new chat session (or new helper) can pick up without re-explaining. Keep it
updated as decisions change.

_Last updated: July 28, 2026._

---

## 1. What this project is

Building a website for **Universal Truth Ministry (UMT)** — a faith-based (Christian) organization
in Pakistan. The site was modeled on **viva.org** (a large Christian children's charity) at the
founder's request, borrowing its structure and visual patterns but scaled down to fit a small,
single-site ministry.

- **Founder / main contact:** Zuhaib Asgher (note spelling: "Asgher", used in email; earlier a team
  card said "Asghar" — standardized to "Asgher").
- **Email on site:** zuhaib.asgher@universaltruthministry.org
- **Phone on site:** +92 308 4040671
- **LinkedIn:** https://www.linkedin.com/company/universal-truth-ministry/

### Geographic focus (keep consistent everywhere)
UMT serves **South Punjab, Pakistan**, and **started in Layyah**. Layyah is the starting point /
first location, not the whole scope. Some pages still say the vaguer "Pakistan's remote and
neglected areas" — this can be sharpened to "South Punjab" where it fits (pending task).

### The organization in one paragraph
UMT's first and only active project is the **Universal Truth Education Center** in Layyah, serving
**40+ Christian children from families with limited financial and educational resources**. The
ministry is still completing legal registration as a **Section 42 Not-for-Profit Company (SECP)**.
The Education Center is explicitly framed as the *first* project, one step toward a larger vision —
this framing matters (see decision log).

---

## 2. Where the files live

- **Website folder (persists on user's computer):** `D:\UTM\Website`
- It is a **git repo** (one commit: "Initial commit"). Not yet deployed anywhere.
- Plain static site: **HTML + Tailwind CSS via CDN + Lucide icons**. No build step, no framework,
  no backend. Every page is a standalone `.html` file (nav/footer are copy-pasted into each, no
  shared template).

---

## 3. Current site structure (16 pages)

Nav mirrors viva.org: two hover **dropdowns** + Blog link + persistent **"Support Us" button**
(originally "Donate", briefly "Get Involved", now "Support Us" — still links to `get-involved.html`),
plus a **mobile hamburger menu** (small JS toggle at bottom of each page). Note the nav also has a
separate "Get Involved" **dropdown menu label** (About Us / Get Involved dropdowns) — that label is
unchanged; only the standalone CTA button text changed.

```
index.html            Homepage
About Us (dropdown):
  our-story.html       Our Story           [CONTENT IS STILL PLACEHOLDER, now with a photo+text split layout]
  vision-mission.html  Vision & Mission
  core-values.html     Core Values (all six)
  our-team.html        Our Team (founder profile, photo+bio split layout)
  programs.html        What We Do (Education Center + planned future programs)
  impact.html          Impact (stats + empty "Stories of Change")
Get Involved (dropdown):
  get-involved.html    How to Help — the hub page: Pray / Volunteer / Give side by side, equally weighted
  donate.html          Donate (no online payment; bank details shared privately via Contact)
  volunteer.html       Volunteer & Partner
  prayer.html          Prayer (expanded South Punjab-focused prayer list)
  contact.html         Contact (form + email/phone)  [FORM EMAIL NOW SET to zuhaib.asgher@universaltruthministry.org]
privacy.html           Privacy Policy (draft)
safeguarding.html      Child Safeguarding (draft)
blog/
  index.html           Blog listing (only the example/template post so far)
  post-template.html   Copy-to-create-new-post template
```

Deleted along the way: `about.html` and the old `get-involved.html` (split into the pages above;
a new `get-involved.html` was later rebuilt as the "how to help" hub, see section 4).

The persistent nav button and the "Get Involved" dropdown both link to `get-involved.html` first
(labeled "How to Help"), before Donate/Volunteer/Prayer/Contact. This is deliberate: the site should
never feel like it's asking for money first. Prayer, volunteering, and giving are presented as
equally weighted options everywhere (homepage CTA, get-involved.html), never with Donate emphasized.

### Supporting docs in the folder
- `PROJECT-CONTEXT.md` — this file.
- `content-improvements-todo.md` — the active content to-do list (see section 6).
- `README.md` — how to edit, add blog posts, and deploy.
- `terminology-style-guide.md` — approved wording (see section 5).
- `viva-org-website-reference-spec.md` — full analysis of viva.org used as the design reference.
- `image-shopping-list.md` — list of image slots + where to source them.

---

## 4. Design system (so new pages match)

- **Colors (Tailwind `brand`):** 50 `#fffbeb`, 400 `#d4a015` (gold), 500 `#b8860f` (darker gold),
  900 `#1e293b` (slate). Body text `slate-600`, dark sections `slate-900`.
- **Fonts:** **Fraunces** (warm serif, Google Fonts) for all headings — `h1`, `h2`, `h3` — plus
  **Inter** for body text. Applied via a Google Fonts link that loads both families, and a small
  `<style>` block in each page's `<head>` (`h1, h2, h3 { font-family: 'Fraunces', serif; }`) rather
  than adding a class to every heading tag. Do **not** revert to Inter-only headings — the all-Inter
  look was flagged as one of the clearest "this was AI-generated" tells on the site.
- **Icons:** Lucide (`<i data-lucide="name">` + `lucide.createIcons()`).
- **Recurring motifs (keep):** dashed gold divider line; small uppercase gold "eyebrow" labels above
  headings; rounded-full buttons; footer with dashed line + tagline "Raising Christ-centered leaders
  who transform families and communities."

### Anti-"AI-generated" theme rules (established July 28, 2026 — follow for all future pages/edits)

The founder did a walkthrough and flagged specific visual patterns that make the site look
AI-generated/templated. These are now house rules, not one-off fixes:

- **No em dashes ("—") anywhere in site copy.** Rewrite with a period, comma, colon, or
  parentheses depending on the sentence. This includes `<title>` tags (use `Page Name | Universal
  Truth Ministry`, not `Page Name — Universal Truth Ministry`) and meta descriptions, not just
  visible body copy.
- **Don't default to the gold-circle-plus-icon card, repeated 3x in a grid, as the go-to way to
  present "a few things."** It's the single most recognizable AI-nonprofit-template pattern. Prefer
  varied treatments instead: a left-aligned numbered list with large Fraunces serif numerals
  (01/02/03, see homepage "Why This Matters"), or horizontal rows with a left accent border and
  alternating background tint (see get-involved.html's Pray/Volunteer/Give rows). Icon-in-circle
  cards are still fine for genuinely list-like content (e.g. the six Core Values grid) but should
  not be the default reflex for every "3 things" section.
- **Don't give every page the identical dark-gradient-hero-then-centered-block formula.** Page
  headers should differ by page family:
  - **About-family pages** (Our Story, Vision & Mission, Core Values, Our Team, Programs, Impact):
    keep the dark `bg-slate-900` gradient hero (`from-slate-900 via-slate-800 to-brand-900/40`),
    white text.
  - **Get-Involved-family pages** (Prayer, Volunteer, Donate, Contact, Get Involved/How to Help):
    use a warm light header instead — `bg-gradient-to-br from-brand-50 via-white to-brand-50`,
    `text-slate-900` heading, `text-brand-500` eyebrow (not `brand-400`, which doesn't have enough
    contrast on a light background).
  - **Legal pages** (Privacy Policy, Child Safeguarding): minimal plain header, no gradient at all —
    `border-b border-slate-100 py-14`, left-aligned (not centered), `text-brand-500` eyebrow,
    `text-slate-900` heading.
- **Avoid centering everything.** Prefer left-aligned body copy and asymmetric image+text
  side-by-side layouts (image one side, text the other) for narrative/bio content, especially Our
  Story and Our Team. Reserve centered text for hero sections and short one-line CTAs.
- **Use real photos for asymmetric splits where available** (`founder.jpg`,
  `education-center-teaching.jpg`, etc.) rather than leaving narrative pages as a lone centered
  text block.

---

## 5. Content rules (must follow)

**Approved terminology (replace directly, no explanations):**
- "spiritual grooming" → "spiritual formation" or "Christian character development"
- "home-based school" → "home-based supplementary education and Bible-formation program"
- "Religious Studies" → "Religious Studies, including Bible teaching, Gospel learning, Christian
  identity, and discipleship"
- "underprivileged Christian children" → "Christian children from families with limited financial
  and educational resources"

**Voice:** warm, plain, first-person ("we"), specific over generic. The user explicitly asked to
avoid AI-recognizable / boilerplate phrasing (e.g. no "began with a simple conviction", no repeated
"whether X, Y, or Z"). Simple, clear English.

**Child safeguarding (this ministry serves children):** never publish children's full names, exact
addresses, or identifying details without guardian consent. Use first names or pseudonyms and
general location only.

**Truthfulness:** only put verifiable numbers/claims on the site. Don't overstate scope. Flag
anything that could mislead a donor or SECP/grant reviewer.

---

## 6. Images (all real photos, guardian consent confirmed by founder)

In `images/`:
- `logo.jpg` — UMT logo (nav/footer everywhere).
- `hero.jpg` — homepage hero. **Stock photo from Pexels** (B&W rural Pakistani children), labeled
  "Representative stock image (Source: Pexels)". Not real students.
- `classroom-writing.jpg` — homepage "Our Work" teaser. Real, consented.
- `education-center-group.jpg`, `education-center-books.jpg`, `education-center-teaching.jpg` —
  Programs page photo grid. Real, consented.
- `founder.jpg` — Zuhaib's portrait, on Our Team.

All images were compressed/resized (each well under 300KB) for free hosting. **No image is reused
across different sections.** Real student photos were originally removed at the user's request, then
later re-added once the user confirmed guardian consent.

---

## 7. Key decisions made (the "why")

- **Modeled on viva.org** but scaled down — borrow patterns, not the 14+ page scale.
- **Education Center = first project, not the whole ministry.** Homepage explicitly says "This is
  our first project, one step toward the full vision." This was a deliberate fix so donors/
  reviewers see UMT as bigger than one program.
- **No online donations yet.** UMT has no SECP registration or org bank account, so a payment
  processor isn't possible/appropriate. Donate page invites contact; bank details shared privately.
  Revisit once registration + bank account exist.
- **Free hosting, existing domain.** User owns a domain but has zero hosting budget. Plan: deploy
  free to GitHub Pages / Cloudflare Pages / Netlify, point the existing domain via DNS. No cost
  beyond the already-owned domain.
- **Contact form:** uses Web3Forms (free, no backend). The ministry's access key is set in
  `contact.html` (the hidden `access_key` field), so the form is live once the site is published.
  Submissions are emailed to the ministry inbox (zuhaib.asgher@universaltruthministry.org).
- **English only.**

---

## 8. Outstanding content to-do (from content-improvements-todo.md)

**Priority 1 (blocking launch):**
1. Replace Our Story placeholder with the founder's real story _(needs founder's facts)_.
2. ~~Set up the contact form in contact.html~~ **Done** — uses Web3Forms with the ministry's
   access key already in place (delivers to zuhaib.asgher@universaltruthministry.org); the form is
   live once the site is published.
3. Add real Stories of Change to impact.html _(needs facts + consent)_.

**Priority 2 (trust):**
4. Strengthen Impact numbers (year founded, boys/girls, ages, subjects, attendance) _(needs input)_.
5. Add a Statement of Faith _(Claude can draft)_.
6. Add "How your donation helps" with real cost figures _(needs input)_.
7. Expand founder bio on Our Team _(needs input)_.
8. Finalize Privacy & Safeguarding out of draft _(Claude drafts, founder confirms)_.

**Priority 3 (polish):**
9. ~~Rework homepage hero headline~~ **Done** — hero now leads with the Matthew 19:14 verse
   instead of a generic/Viva-like headline.
10. Add Phase A/B/C timeline to future programs _(Claude can draft)_.
11. Write the first real blog post _(needs input)_.
12. Tighten per-page meta descriptions & titles for SEO _(Claude can do alone)_.

~~Plus: sharpen "Pakistan's remote and neglected areas" → "South Punjab" site-wide~~ **Partially
done** — homepage's "Why This Matters" section and the Prayer page are now explicitly South
Punjab-focused. Other pages (Vision & Mission mission statement, Programs, Contact address) may
still say the vaguer "Pakistan's remote and neglected areas" — worth a full sweep.

**Still needs founder's facts:** 1, 3, 4, 6, 7, 11.
**Claude can draft/do without new input:** 5, 8, 10, 12, and finishing the South Punjab sweep.

---

## 9. Deployment (not done yet)

Site is built but **not live**. To launch: push the repo to a free static host (GitHub/Cloudflare
Pages/Netlify), then add a DNS record at the domain registrar to point the owned domain at it.
Steps are in README.md. Still need from user: which registrar the domain is with.

---

## 10. Approved organization identity (reference text)

**Vision:** "To raise a new generation of Christ-centered leaders who transform families and
communities across Pakistan and beyond."

**Mission:** "Universal Truth Ministry exists to educate children, train leaders, and develop
communities through Christ-centered programs, including quality education, vocational and technical
skills training, and community development. Rooted in the Christian community, we serve everyone in
need across Pakistan's remote and neglected areas, following the teaching of Jesus." (Note: this
exact text, including the "Pakistan's remote and neglected areas" phrase, still appears on
vision-mission.html and index.html; punctuation was updated to remove an em dash per the house
style rule in section 4, wording otherwise unchanged. The "South Punjab" sharpening pass has not
been applied to this specific sentence yet.)

**Core values:** Faith, Love, Service, Integrity, Excellence, Transparency.

**Strategy phases:** Phase A (Year 1) — strengthen Education Center, complete registration, build
team. Phase B (Years 2–3) — launch Computer & AI training. Phase C (Years 3–5) — Women's Vocational
Training Center, then Foster Care Center (largest, last).

There is also imported project knowledge mounted read-only in the Claude project (Organization
Identity doc, Project Context doc, Terminology doc, LinkedIn link) — richer background lives there.
