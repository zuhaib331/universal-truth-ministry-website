# Universal Truth Ministry — Website

A plain static site (HTML + Tailwind CSS via CDN + Lucide icons). No build step, no database,
no server-side code. It runs the same way whether opened directly in a browser or hosted anywhere.

## Structure

The nav now mirrors viva.org's pattern: two dropdown menus ("About Us" and "Get Involved"), each
opening to several dedicated pages, plus a standalone Blog link and a persistent Donate button.

```
index.html                  Homepage (hero, mission teaser, values highlights, work teaser, CTAs)

About Us (dropdown):
  our-story.html             Our Story
  vision-mission.html        Vision & Mission
  core-values.html           Full Core Values (all six)
  our-team.html              Our Team (founder profile)
  programs.html              What We Do — Education Center detail + planned future programs
  impact.html                Stats + stories of change (placeholder until consent is confirmed)

Get Involved (dropdown):
  donate.html                Donate (bank details shared privately via Contact)
  volunteer.html             Volunteer & Partner
  prayer.html                Prayer requests
  contact.html               Contact form (FormSubmit.co) + direct email/phone

privacy.html                 Draft privacy policy
safeguarding.html            Draft child safeguarding statement
images/                      Site photos and the logo
blog/
  index.html                 Blog listing page (shows cards linking to each post)
  post-template.html          A ready-to-copy template for writing a new post
terminology-style-guide.md   Approved wording standard (see note below)
viva-org-website-reference-spec.md   Full analysis of viva.org, used as the design/structure reference
```

Note: `about.html` and `get-involved.html` no longer exist — they were split into the pages listed
above (matching how viva.org has no single "About Us" page, just a dropdown of specific pages).
If you had those links bookmarked or shared anywhere, update them to `our-story.html` and
`donate.html` respectively.

### How the dropdown menu works

Each page repeats the same header block containing both dropdown menus. On desktop, hovering over
"About Us" or "Get Involved" reveals its items (pure CSS, no JavaScript needed for this part). On
mobile, a hamburger button (☰) toggles a simple stacked menu — this uses a small script at the
bottom of each page:

```html
<script>
  lucide.createIcons();
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => menu.classList.toggle('hidden'));
  }
</script>
```

If you add a new page to a dropdown later, remember to add its link in three places: the desktop
dropdown, the mobile menu list, and the footer if relevant — on every page, since there's no shared
template file.

## Current state / what's still needed

- **Logo:** in place (`images/logo.jpg`).
- **Photos:** in place with guardian consent confirmed — `images/hero.jpg` (homepage hero, stock),
  `images/classroom-writing.jpg` (homepage work teaser), `images/education-center-group.jpg`,
  `images/education-center-books.jpg`, `images/education-center-teaching.jpg` (Programs page photo
  grid), and `images/founder.jpg` (Our Team page). Any other placeholder blocks still use an
  icon-based gradient (no photo) — to add free stock photos there later: download images from
  [pexels.com](https://www.pexels.com/) or [pixabay.com](https://pixabay.com/) (both free, no
  attribution required), save them into `images/`, and swap the relevant placeholder `<div>` block
  for an `<img>` tag — each spot is marked with an HTML comment showing where.
- **Contact form:** uses [Web3Forms](https://web3forms.com) (free, no signup, no backend). The
  ministry's access key is already set in `contact.html` (the hidden `access_key` field), so the
  form is live as soon as the site is published. Submissions are emailed to the ministry inbox;
  you can also forward them to a Google Sheet from the Web3Forms dashboard.
- **Donate:** no online payment button yet (Universal Truth Ministry hasn't completed SECP
  registration or opened an organizational bank account). The Donate page invites donors to
  reach out via Contact, and bank details are shared privately, not published. Revisit once
  registration + bank account are done.
- **Domain:** the founder already owns a domain. No hosting cost is needed — see "Deploying" below.

## How to add a new blog post (no code knowledge required beyond copy/paste)

1. Duplicate `blog/post-template.html`, rename the copy (e.g. `new-scholarship-program.html`).
2. Open it and replace the title, date, main image (optional), and paragraph text — the file has
   `<!-- CHANGE THIS -->`-style comments marking exactly what to edit.
3. Add any extra photos to `images/`.
4. Open `blog/index.html` and copy one of the existing post "cards" (the `<a>...</a>` block inside
   the grid), then update its link, title, and short summary to point at your new post file.
5. Save, commit, and push (see below) — the new post is live.

Nothing else needs to change. The homepage, nav, and footer are untouched by adding posts.

## Editing anything else

Every part of this site — page text, colors, nav links, contact details — is plain HTML in these
files. Open the relevant file, edit the text between the tags, save. There is no CMS layer and no
proprietary format; it's all just files you own. The header nav and footer are repeated at the top/
bottom of every page (no shared template file), so if you change a nav link or footer link, repeat
that same edit across all pages to keep them consistent.

## Terminology standard

`terminology-style-guide.md` lists approved wording (e.g. use "Christian children from families
with limited financial and educational resources" instead of "underprivileged"). Apply it to any
new content — blog posts included.

## Deploying (free — using your existing domain)

This is a static site, so it runs on any host that serves plain files, at no cost:

1. **Pick a free static host:** GitHub Pages, Cloudflare Pages, or Netlify (all free forever for a
   site this size).
2. **Push these files** to a repository connected to that host (this folder is already a git repo
   — see `git log`).
3. **Point your existing domain at it via DNS:** at your domain registrar (e.g. Namecheap, GoDaddy,
   whichever you used to buy the domain), add the DNS record the host tells you to add — usually a
   `CNAME` record for a subdomain like `www`, or an `A`/`ALIAS` record for the root domain. Each
   host's docs walk through the exact records step by step once you connect the repo.
4. No purchase is required beyond the domain you already own — hosting itself stays free.

Moving between hosts later is just: copy these files to the new host, update the DNS record.
Nothing to export, nothing to migrate.
