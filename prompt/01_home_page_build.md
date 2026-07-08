# Home page build

**Target tool:** AI coding assistant (Claude Code, Cursor, or similar — writes real files directly)
**File being built:** `marketplace/index.html`

---

Build out marketplace/index.html for the Dozr project. Read marketplace/CLAUDE.md
first for conventions, then fill in every <!-- TODO --> section in that file.

Source content: LOGISTICS/05_Brand_Design/Dozr_Marketplace_Prototype.html —
the Home screen (isHome block). Port its copy and layout, but rebuild all
markup as real semantic HTML/CSS (that file's interactivity is Claude
Design's internal preview engine and won't run standalone — use it for
content/visual reference only, don't copy its <x-dc>/sc-if/onClick syntax).

Sections to build, in order: hero (eyebrow, H1 "Move the iron. On site by
7am.", What/Where/Dates search bar, stat row), category tiles (render one
per window.DOZR_CATEGORIES from data/equipment.js, each linking to
browse.html?category=<id>), featured units (3 cards where
equipment.featuredOnHome is true, from window.DOZR_EQUIPMENT — each card
needs a separate "View details" link to equipment-detail.html?id=<id> AND a
separate "Request quote" link, not nested inside each other), the tabbed
feature showcase ("Track it live / Prove delivery / Get paid faster" —
needs its own small vanilla-JS tab-state script, page-specific, not in
js/main.js), and the FAQ section (port the 4 Q&As from the prototype
verbatim).

Rules: use only the CSS variables already defined in css/styles.css
(--ink, --yellow, --canvas, --slate, --line, etc.) — never a hardcoded hex.
Every clickable element is a real <button> or <a>, never a <div onClick>
or <span onClick>. Any placeholder photo divs get role="img" aria-label
if they represent real content, or aria-hidden="true" if purely
decorative. Don't touch the shared nav/footer markup — it's already
correct and must stay identical across pages.
