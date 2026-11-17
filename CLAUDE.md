# Universal Truth Ministry website: notes for Claude Code

The static website for Universal Truth Ministry (UTM), Layyah, South Punjab, Pakistan.
It is hosted on GitHub Pages at https://universaltruthministry.org. Founder: Zuhaib Asgher.
Moved here from Cowork on 17 Nov 2026. Read `DESIGN-SYSTEM.md` before changing any design.

## How the founder likes to work
- Use simple, clear English. Give short answers.
- **Show a preview (screenshots) before changing anything.** Wait for "okay" before saving or pushing.
- Push only when the founder asks. End every commit message with:
  `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`

## Technical rules
- Plain HTML pages, with Tailwind already built into `styles.css`. That file is trimmed (purged):
  **a Tailwind class that is not already in styles.css does nothing.** Check that a class exists first,
  or write the rule in the page's own `<style>` block.
- **Cache rule:** pages load `styles.css?v=20261118c`, `lucide-lite.js?v=20261118a` and `sponsor-children.js?v=20261019c`.
  When you change one of these files, raise its `?v=` number on every page that loads it.
- Icons come from `lucide-lite.js` (10 KB, only the icons the site uses). It swaps each `<i data-lucide>` for an
  `<svg>`, so icon CSS must target `svg` as well as `i`. To use a new icon, rebuild `lucide-lite.js` from the full
  `lucide.min.js` (kept in the folder as the source, not loaded by any page).
- Homepage styles are the `hp-` classes in index.html. What We Do, Our Story, Impact, Donate, Get Involved, Volunteer, Prayer, Contact, Core Values, Vision & Mission and Statement of Faith use the `pg-`
  classes in their own `<style>` block. Our Story and What We Do have a photo viewer: add `data-zoom="group"` to an `<img>`.
- Photo headers use `.photo-header` + `.photo-shade`, with `object-position` set on the faces
  (group 35%, books 30%, classroom-writing 70%, teaching 60%).
- Check every page at 1366px and 390px wide. There must be no sideways scrolling.

## Content and safeguarding rules (never break these)
- Use only facts the founder has approved. Never invent numbers, dates, partners or quotes.
- Children: first names only. No health or family problems. No sponsored child's photo outside
  the email-gated Sponsor page (one founder-approved exception: the four 2020 Christmas play photos on Our Story).
  Never add "persecution", "Muslim" or conversion language.
- Planned projects (Computer & AI Training next, then the Women's Vocational Training Center and
  Foster Care) must never be described as started. No dates or costs for them.
- Remove GPS and other photo metadata (EXIF) from every new photo, and resize it to about 1200px.
- `images/children/` and `sponsor-children.js` are blocked in robots.txt. Keep it that way.

## Current numbers (counted October 2026)
- 35 children (15 boys, 20 girls, ages 4–16), 6 classes a week, 2 local Christian teachers.
- 20 students read the Bible daily, with a Monday Bible test.
- Bible results: Matthew class average 88.5%, Mark 95.5%.
- Sponsorship: about US$38 a month (US$456 a year). Confirmed by the founder, 18 Nov 2026.

## Open questions for the founder
1. ~~Cost per child: US$456 or US$447?~~ Answered 18 Nov 2026: **US$456 a year** (about US$38 a month) is correct.
2. Our Story says "no outside funding to date". Is that still true?
3. ~~Did Sunday school also run during 2016–2024?~~ Answered 18 Nov 2026: no, apart from one event. In December
   2020 the family went back to Layyah for one day to hold a Christmas play with the Sunday school children
   (now in the 2016 part of Our Story). The four 2020 Christmas play photos include sponsored children. **On 18 Nov
   2026 the founder chose to make an exception and show them on Our Story**, with the banner's names and faces
   blurred (`images/christmas-play-2020-*.jpg`). This exception covers only these four photos.
4. Does the parents' written permission cover the new Sunday school photos?
   A close-up of one girl is saved but not used: `sunday-school-2024-girl-colouring.jpg`.
5. Volunteer roles, and whether the proposal PDF can go on the website.

## Next ideas (agreed, not yet done)
- The photo viewer on the homepage photo strip.
- Donate: "Where your money goes" and a donor FAQ.
- A real email signup for updates.
- ~~Vision & Mission: remove the "2.5 times poverty" line.~~ Done 18 Nov 2026.
- Statement of Faith: add one belief-to-action sentence.
- Sponsor: add a "whole child" line.
