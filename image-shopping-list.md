# Universal Truth Ministry Website — Image Shopping List

This is the full list of image "slots" the website currently has, so you know exactly what to
search for on [pexels.com](https://www.pexels.com/) or [pixabay.com](https://pixabay.com/) (both
free, no attribution required). For each one: where it's used, what it should look like, size, and
search terms to try. Save every file into the `images/` folder using the exact filename listed —
that way they'll be easy to wire in later.

Since none of these are real photos of your students, once any of them go live we'll add a small
"stock image" credit caption near it — the same honest practice Viva.org uses for its stock photos.

---

## 1. Logo — DONE

**File:** `images/logo.jpg`
**Status:** Already provided, already in use on every page. No action needed.

---

## 2. Homepage Hero Background — REQUIRED for the biggest visual upgrade

**File to save as:** `images/hero.jpg`
**Used on:** `index.html` (the very top section, currently a plain dark gradient)
**Size:** as wide as possible, ideally 1920×1080px or larger (16:9 landscape). It gets cropped
differently on mobile vs desktop, so pick a photo where the main subject is roughly centered, not
crammed into one corner.
**What it should look like:** something warm and hopeful connected to children, learning, or
community — this is the very first thing a visitor sees. A photo with open, uncluttered space
(sky, wall, simple background) works best because we lay dark text over it.
**Search terms to try:** "children classroom learning", "kids education hope", "rural school
students", "students studying together", "child smiling classroom"
**Note:** avoid photos where faces are extremely close-up/identifiable as a *specific* real child —
generic/candid-style stock works better since this isn't your actual center.

---

## 3. Interior Page Header Banner — OPTIONAL

**File to save as:** `images/page-header.jpg`
**Used on:** the header band at the top of About, Programs, Impact, Get Involved, Contact,
Privacy, and Safeguarding pages (currently all a plain dark gradient — this would replace it
sitewide with one consistent photo).
**Size:** same as hero — wide, 1920×1080px or larger.
**What it should look like:** something calmer/more muted than the hero photo, since these are
secondary pages — e.g. hands, an open book, a community gathering, or a simple textured
background. Needs to still look good under a dark overlay with white text on top.
**Search terms to try:** "open book hands", "community hands together", "hope light background",
"simple textured background dark"
**Note:** this is optional — the plain gradient already looks clean and intentional. Only get this
if you want more visual richness across the interior pages.

---

## 4. Education Center / "Our Work" Section Photos — OPTIONAL (2 images)

**Files to save as:** `images/classroom-1.jpg`, `images/classroom-2.jpg`
**Used on:** `programs.html` (Education Center section) and optionally the "Our Work" teaser on
`index.html` — both currently text/icon-only, no photos.
**Size:** roughly square or 4:3 (e.g. 1000×750px) — these sit in card/grid layouts, not full-width.
**What it should look like:**
- `classroom-1.jpg`: children in a classroom setting — writing, reading, or listening to a teacher.
- `classroom-2.jpg`: a wider shot — a group of students together, or a simple rural school building/
  outdoor learning space.
**Search terms to try:** "children writing notebook", "teacher classroom students", "kids learning
together group", "rural school children outdoor", "south asian classroom students" (Pexels/Pixabay
do have some South Asia-specific results, which would feel more locally authentic than generic
Western classroom photos).

---

## 5. Blog Default Thumbnail — OPTIONAL

**File to save as:** `images/blog-default.jpg`
**Used on:** `blog/index.html` — the thumbnail shown on each post "card" in the blog list
(currently a gradient + icon placeholder).
**Size:** 800×450px (16:9), small file size preferred since it repeats on every post card.
**What it should look like:** something generic and newsy/updates-related — could simply reuse
`classroom-1.jpg` or `hero.jpg` if you don't want to source a separate one.
**Search terms to try:** "notebook writing pen", "community meeting", "children reading book"

---

## 6. Blog Post Main Image — OPTIONAL (per post)

**File to save as:** `images/post-1.jpg` (already referenced, commented out, in
`blog/post-template.html`), then `post-2.jpg`, `post-3.jpg`, etc. for each new post.
**Used on:** the top of each individual blog post.
**Size:** 1200×500px (wide banner), or similar to the hero image.
**What it should look like:** whatever fits that specific post's topic — pick something new each
time you write a post, rather than reusing the same one everywhere.
**Search terms to try:** depends on the post topic — e.g. "scholarship graduation", "community
event", "volunteers teaching"

---

## Quick priority order

If you only have time to source a few images right now, do them in this order:

1. **Hero image** (#2) — biggest visual impact, most visible slot on the whole site.
2. **Classroom photos** (#4) — makes the Education Center feel real and specific.
3. Everything else (#3, #5, #6) — nice to have, but the site already looks clean without them.

Once you've downloaded and saved any of these into `images/` with the exact filenames above, send
a note and I'll wire each one into the actual HTML (swapping out the gradient/icon placeholder for
the real photo, with a small credit caption).
