# Browse page build

**Target tool:** AI coding assistant (Claude Code, Cursor, or similar)
**File being built:** `marketplace/browse.html`

---

Build out marketplace/browse.html for the Dozr project. Read
marketplace/CLAUDE.md first, then fill in the <!-- TODO --> sections.

Source content: the Browse screen (isBrowse block) in
LOGISTICS/05_Brand_Design/Dozr_Marketplace_Prototype.html — same caveat,
reference for layout/copy only, rebuild as real vanilla HTML/CSS/JS.

Category tab bar: render one button per window.DOZR_CATEGORIES entry with
data-category="<id>", matching what js/main.js's initCategoryTabs()
already expects (it dispatches a "dozr:category-change" custom event on
click — listen for that event in this page's own script to re-render the
results grid, don't duplicate the tab-click logic). On page load, read
?category= from the URL (set when arriving from a Home tile) to preselect
a tab.

Filters sidebar: operating weight chips, availability radio-style options,
GPS-tracked toggle, verified-only toggle — port the exact visual pattern
from the prototype's Browse screen using the .chip class already in
css/styles.css.

Results grid: render from getEquipmentByCategory(activeCategoryId) in
data/equipment.js. Each card: a button/link to view details
(equipment-detail.html?id=<id>) wrapping the photo+name+specs, and a
SEPARATE "Request quote" button below it — not nested inside the first
button. This exact split-button pattern was already fixed in the
prototype for accessibility on 2026-07-08; don't regress it. Photo divs:
role="img" aria-label with the category name, or aria-hidden="true" if
no distinguishing image content is being shown yet.
