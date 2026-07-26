# Universal Truth Ministry — Website

A plain static site (HTML + Tailwind CSS via CDN + Lucide icons). No build step, no database,
no server-side code. It runs the same way whether opened directly in a browser or hosted anywhere.

## Structure

```
index.html                  Homepage (hero, mission, core values, our work, contact)
images/                     All site photos and the logo
blog/
  index.html                 Blog listing page (shows cards linking to each post)
  post-template.html          A ready-to-copy template for writing a new post
terminology-style-guide.md   Approved wording standard (see note below)
```

## How to add a new blog post (no code knowledge required beyond copy/paste)

1. Duplicate `blog/post-template.html`, rename the copy (e.g. `new-scholarship-program.html`).
2. Open it and replace the title, date, main image, and paragraph text — the file has `<!-- CHANGE
   THIS -->`-style comments marking exactly what to edit.
3. Add any extra photos to `images/`.
4. Open `blog/index.html` and copy one of the existing post "cards" (the `<a>...</a>` block inside
   the grid), then update its link, image, title, and short summary to point at your new post file.
5. Save, commit, and push (see below) — the new post is live.

Nothing else needs to change. The homepage, nav, and footer are untouched by adding posts.

## Editing anything else

Every part of this site — the homepage text, colors, nav links, contact details — is plain HTML
in these files. Open the relevant file, edit the text between the tags, save. There is no CMS
layer and no proprietary format; it's all just files you own.

## Terminology standard

`terminology-style-guide.md` lists approved wording (e.g. use "Christian children from families
with limited financial and educational resources" instead of "underprivileged"). Apply it to any
new content — blog posts included.

## Deploying / moving hosts

This is a static site, so it runs on any host that serves plain files:

- **GitHub Pages / Cloudflare Pages / Netlify** (free): connect this repo, they auto-deploy on
  every push.
- **Traditional hosting (e.g. Hostinger shared hosting)**: upload these files via FTP or File
  Manager — no database, no PHP required.

Moving between hosts later is just: copy these files to the new host, point the domain's DNS at
it. Nothing to export, nothing to migrate.
