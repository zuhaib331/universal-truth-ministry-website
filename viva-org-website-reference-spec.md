# Viva.org — Full Website Reference Spec

This document is a complete analysis of https://www.viva.org, covering its site map, navigation
structure, page-by-page content, and recurring design patterns. It is meant to be handed to a
developer or AI agent as a build reference for a similarly themed website.

Viva is a UK-based Christian charity ("Viva Network") that supports networks of churches and
community organisations working with at-risk children in cities around the world. The site is
built on Squarespace.

---

## 1. Site Map (Full Page List)

### Top-level
- **Home** — `/`

### About Us (dropdown menu)
- How Viva Started — `/how-viva-started`
- How The Change Happens — `/how-the-change-happens`
- What Viva Does — `/what-viva-does`
- Where in The World — `/map`
- Our Team — `/our-team`
- Impact — `/vivas-impact`
- Resource Hub — `/resource-hub`

### Latest (dropdown menu)
- Articles (blog index) — `/latest-articles`
- Individual article pages — `/latest-articles/[slug]` (20+ posts, most recent shown first, "Older
  Posts" pagination at the bottom)
- World Weekend of Prayer — `/world-weekend-of-prayer`
- Cutting Edge (conference / webinar hub) — `/cutting-edge-gods-heart-for-child-protection-and-safeguarding`
  (also aliased at `/cuttingedge`)

### Get Involved (dropdown menu)
- Donate — `/donate`
- Work with Us (job vacancies) — `/jobs`
- Funding Priorities — `/funding-priorities`
- Join Our Mailing List — `/join-our-mailing-list`
- Prayer — `/prayer`
- Contact — `/contact-1`
- Community Fundraising — `/community-fundraising`

### Utility / footer-only pages
- Privacy Policy — `/privacy-policy`
- Safeguarding Policy (PDF)
- Legal Information — `/legal-information`
- Complaints — `/complaints`
- Manage Preferences — `/manage-preferences`
- Child Safeguarding — `/safeguarding`

### Language switcher
- "English" toggle in the nav (site also serves other languages via this switcher)

### Persistent header CTA
- **Donate** button, always visible top-right, separate from the "Donate" item inside "Get Involved"

---

## 2. Global Navigation Structure

- Logo top-left, links to home.
- Three dropdown menu groups: **About Us**, **Latest**, **Get Involved** — each expands to reveal
  its list of pages (shown above). On mobile, these collapse into an expandable "Folder" list with
  a "Back" link.
- Language switcher ("English") near the top-right.
- A standalone **Donate** button, styled distinctly from nav links (acts as the primary
  call-to-action), repeated at both the top of the mobile menu and desktop nav.
- Nav is overlaid transparently on the hero image on the homepage, and on a solid/dark background
  on interior pages.

---

## 3. Recurring Design Patterns (used across almost every page)

1. **Full-bleed header image** at the top of every interior page — a stock photo (usually of
   children or community settings, each carrying a small photo-credit caption), with a dark
   overlay so white text is readable on top.
2. **Dashed white line graphic** — a short decorative dashed-line image appears directly under the
   header image/title on nearly every page as a section divider.
3. **Small uppercase eyebrow label** (e.g. "About us", "Support us", "Get involved") appears above
   the large page heading, in a muted/accent color — used consistently to show which section of
   the site you're in.
4. **The "4 Cs" model** — a 4-icon framework (Connecting, Capacity Building, Collective Action,
   Citywide Influence) is reused on the homepage, "How The Change Happens," and "What Viva Does"
   pages, each time with slightly different wording. Icons are simple white-line illustrations.
   Some instances have "Read Bio" / "Click Here" links that open as **inline popups** (using a
   `#wm-popup=/slug` anchor pattern) rather than separate pages.
5. **Card grids** — recurring 3–4 column card layout for: values/pillars, stats, resources, team
   info, stories, and fundraising ideas. Each card = icon or photo + short title + 1–2 sentence
   description, sometimes with a "Read Bio" / "Click Here" / "Find out more" link.
6. **Stats blocks** — big-number achievement stats (e.g. "42 partner networks," "26 countries,"
   "more than one million children each year") shown as icon + large text, no charts, just bold
   numbers.
7. **"Stories of change"** — short, single-paragraph individual impact stories (first-name only,
   e.g. "Maria," "Laura," "Owen and Edward"), each with a photo (explicitly marked as
   "representative" stock imagery, not the real individual) and a "Read Bio" popup link.
8. **Blog / articles list** — each article preview = thumbnail image, author name + date (shown
   twice, likely a markup quirk), bold title (linked), 1–2 sentence excerpt, "Read More" link.
   Pagination via "Older Posts" link at the bottom.
9. **Donation page pattern** — donation is split by currency/region (UK £, US $, Hong Kong $, Rest
   of World), each a card linking out to a separate donation platform (Givingpage, Donorbox) —
   no embedded payment form on the Viva site itself.
10. **Persistent footer** on every page, containing:
    - Viva logo (white, small)
    - Social icons: Facebook, Instagram, LinkedIn, YouTube
    - Legal links: Privacy Policy, Safeguarding Policy (PDF), Legal information, Complaints, Manage
      Preferences, Contact us, Child Safeguarding
    - A fundraising regulator badge (image)
    - "Website by [agency]" credit line
    - A block of small print listing the charity's registered legal entities in three
      jurisdictions (Hong Kong, North America, United Kingdom), each with registration/company
      numbers
11. **Forms** are simple embedded Squarespace forms (mailing list, prayer sign-up) with no visible
    custom styling beyond a heading and short description — the actual form fields aren't captured
    by static content extraction, but the pattern is: heading, 1–2 sentence description, form.
12. **Tone of voice**: warm, mission-driven, second person ("you"/"we"), frequent short bolded
    key-phrases inside body paragraphs (e.g. "**inspires**", "**equips**", "**connects**"), Christian
    language used naturally throughout (faith statements, references to "God's heart for children,"
    the Nicene Creed as a statement of faith, prayer as a section of the site).

---

## 4. Page-by-Page Summary

### Home (`/`)
Hero: full-bleed background image, tagline "We want children everywhere to have life in all its
fullness," subtext "Together, we can make that a reality. Will you join us?" Below: a short mission
paragraph, then 3 icon+text points (scale of the problem, churches acting in isolation, what
working together achieves). Then the "4 Cs" model as 4 cards (Connecting / Capacity Building /
Collective Action / Citywide Influence), each with a "Read Bio" popup. Then "Our approach" link.
Then a newsletter sign-up band. Full footer.

### How Viva Started (`/how-viva-started`)
Single long-form origin story: Patrick McDonald in Bolivia in 1992, discovering uncoordinated
church feeding programs, coordinating them into a rotating schedule, and how that idea grew into
Viva's global network model. Simple single-column narrative text, no cards.

### How The Change Happens (`/how-the-change-happens`)
Explains Viva's theory of change: states 2 "problems" (children's challenges; churches acting in
isolation), then the same "4 Cs" model as the solution, each card with a longer explanation
paragraph than the homepage version. Ends with a summary statement and a link to "What Viva Does."

### What Viva Does (`/what-viva-does`)
Restates the "4 Cs" model a third time, this time framed as "click on the icons below to find out
more," each opening a popup bio. Ends with a donation call-to-action band with its own background
image ("Will you join us?" + Donate now button).

### Where in the World (`/map`)
Four big stat cards: "42 partner networks," "in 26 countries," "made up of more than 5,300 churches
and organisations," "impacting more than one million children each year." A disclaimer that partner
networks are independent entities. (The page name implies a map graphic/embed is normally present.)

### Our Team (`/our-team`)
Short "Governance" explanation: Viva operates as a global group under an "International Board,"
bringing together Viva Network (UK), Viva Network North America, Viva Network (Hong Kong) Ltd, and
Viva Network Africa (Uganda). Notes that partner networks are independent organisations. (Team
member bios/photos likely load dynamically and weren't captured in static content.)

### Impact (`/vivas-impact`)
Three achievement stat cards (child protection policies introduced, children in Learning Spaces,
policies influenced), then 2 larger feature cards (an independent evaluation by The Sagamore
Institute; a girls'-education program with CRANE), then a "Stories of change" section with 3
individual impact stories (Maria, Laura, Owen & Edward), each a popup bio.

### Resource Hub (`/resource-hub`)
A curated list of 9 resource cards: a new book (God's Heart for Child Protection and Safeguarding),
Cutting Edge, World Weekend of Prayer, Online Events, Viva Magazine, God's Heart for Children (book +
course), The Good Treatment Campaign, Children in Emergencies toolkit, and Viva Learn — most linking
out to dedicated sub-sites or external partners.

### Articles / Blog (`/latest-articles`)
Chronological list of dated articles (author name, date, thumbnail, title, short excerpt, "Read
More"), covering partner network stories from many countries (Philippines, Guatemala, Peru, India,
Paraguay, Cuba, Myanmar, Venezuela, Zambia, Mexico, Kenya, UK), conference recaps, and
prayer-campaign recaps. Paginated with "Older Posts."

### Cutting Edge (`/cutting-edge-gods-heart-for-child-protection-and-safeguarding`)
Event/webinar landing page for a webinar series tied to a book launch. Includes: intro description,
webinar dates/times (with timezone and translation notes), "about the book" blurb, "why attend"
section, a 3-icon summary (Shared Vision / Practical Action / Global Impact), a booking
call-to-action, and links to past year's session recordings/resources.

### Donate (`/donate`)
Region-based donation routing: 4 cards (UK £, US $, Hong Kong $, Rest of World), each linking to an
external giving platform (Givingpage or Donorbox). Below, a thank-you note and a link through to
Funding Priorities.

### Work with Us / Jobs (`/jobs`)
Minimal page: states there are currently no vacancies, invites people to check social media/job
sites for future openings.

### Funding Priorities (`/funding-priorities`)
Explains how donations are used, invites larger donors/partners to get in touch directly, includes a
"how much are you thinking of donating?" prompt (likely leading into a tiered giving options
widget not captured in static content).

### Join Our Mailing List (`/join-our-mailing-list`)
Simple newsletter sign-up page: heading, one-sentence description, embedded sign-up form.

### Prayer (`/prayer`)
Describes Viva's prayer community: monthly prayer diary, monthly Zoom prayer meeting, annual "World
Weekend of Prayer," states Viva's faith position (uses the Nicene Creed as its statement of faith),
and invites sign-up to the prayer mailing list via a form.

### Contact (`/contact-1`)
Two contact paths: "Contact one of our fundraising hubs" and "send us a message using our contact
form" (regional fundraising hub details and the form itself are dynamic and weren't captured in
static content).

### Community Fundraising (`/community-fundraising`)
Tied to Viva's 30th-anniversary campaign. Shows real supporter fundraising stories (a 10-year-old's
sponsored cycle ride, a mountain relay race, a retiree selling garden plants/lessons, a staff
member's half-marathon), then a card grid of fundraising idea prompts (triathlon, bake sale, social
media detox, themed birthday party, dream auction, readathon), and a closing invitation to get in
touch to set up a fundraising page.

---

## 5. Content & Tone Themes to Preserve

- Christian, faith-driven language used naturally and confidently (not defensive or vague about
  faith).
- Every page ties back to the core phrase "life in all its fullness" and to children's safety,
  learning, and thriving.
- Heavy use of concrete numbers (years of operation, country counts, network counts, children
  reached) rather than vague claims.
- First-person plural voice ("we," "our") paired with direct address to the reader ("you," "will
  you join us?").
- Storytelling used deliberately to humanize statistics (named individuals, specific challenges,
  specific outcomes).
- Every content page ends with, or links to, a call-to-action (donate, get in touch, subscribe,
  find out more) — no page is a dead end.

---

## 6. Notes on Adapting This for Universal Truth Ministry

If this structure is used as a reference for Universal Truth Ministry's site, a few honest
differences to flag:

- Viva is a large, ~30-year-old international federation with 42 partner networks across 26
  countries — its site map (14+ pages, blog, multi-region donation routing, multi-entity legal
  footer) reflects that scale. Universal Truth Ministry currently runs one Education Center in
  Layyah — a much smaller, single-site operation.
- The recommended approach is to **borrow the visual language and section patterns** (hero with
  dashed-line divider, eyebrow labels, icon-based "how we work" cards, stats blocks, stories of
  change, card-grid resources, consistent footer) rather than copy the full page count.
- A realistic adapted site map would be: Home, About Us (with Vision/Mission/Core Values folded
  in), How We Work (the equivalent of the "4 Cs" — could reframe around Universal Truth Ministry's
  own Phase A/B/C strategic objectives), Our Work / Education Center (the "Impact" + "stories of
  change" pattern), Get Involved (Donate + Contact + Prayer, combined into one section instead of
  seven separate pages), and a Contact page.
- Donation routing by currency/region (UK £ / US $ / HK $) isn't relevant yet — a single
  donate/contact path is enough until Universal Truth Ministry registers and sets up multiple
  giving channels.
