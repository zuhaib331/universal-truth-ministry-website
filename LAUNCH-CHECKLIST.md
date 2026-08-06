# Universal Truth Ministry Website — Launch Checklist

_Last updated: August 2026_

The website is built and technically ready to go live. This checklist shows what is done, what we hid for now, what still needs our information, and how to publish the site.

## Status: ready to launch

Nothing technical is stopping us. We just need to publish it (see "How to go live" below) and, over time, fill in the items that need our real information.

## Done (already on the site)

- Privacy Policy — full, plain-English version.
- Child Safeguarding page — built from our approved safeguarding statement.
- Contact form — uses Web3Forms and delivers to zuhaib.asgher@universaltruthministry.org.
- Menu works for keyboard, mouse, and touch users.
- Clear page titles and descriptions for search on every page.
- Round logo icon in the browser tab.
- Social-share preview image and tags (for WhatsApp, Facebook, LinkedIn).
- Sitemap and robots file for search engines.
- Faster, production-ready styling (no more loading from outside services).
- "Layyah, South Punjab" wording across the site.

## Hidden for now (turn back on later)

- **Blog** — the Blog link is hidden from the menu until we write our first real post. The blog files still exist in the `blog` folder; nothing was deleted. To turn it back on: publish a real post, then un-hide the Blog link (ask Claude, or remove the `<!-- Blog link hidden... -->` comment marks).
- **Impact "Stories of Change" section** — hidden until we have a real student story with a parent or guardian's written permission. To turn it back on: add the story (ask Claude).

## To do (needs our information)

1. **Our Story** — replace the placeholder with the real story: what year it began, why Layyah, one real moment that started it. (Page: our-story.html)
2. **A student story** for the Impact page — first name or a made-up name only, with a parent or guardian's written permission.
3. **What a donation pays for** — real costs, for example per student per month, books, rent, teacher pay. (Page: donate.html)
4. **Stronger impact numbers** — number of boys and girls, age range, subjects taught, weekly attendance. (Page: impact.html)
5. **First real blog post** — then turn the Blog link back on.

## How to go live (publishing)

1. Put this folder on a free static host: GitHub Pages, Cloudflare Pages, or Netlify (all free for a site this size).
2. Point the domain **universaltruthministry.org** at the host by adding one DNS record at our domain provider (the host gives the exact record to add).
3. After it is live, send a test message through the Contact form to confirm it arrives in our inbox.

## Notes

- Domain used in the site links: **universaltruthministry.org** (without "www"). If we prefer the "www" version, ask Claude to update the links.
- Pakistan's data-protection law is not yet in force. The Privacy Policy says we follow good practice and will update it as the law develops.
