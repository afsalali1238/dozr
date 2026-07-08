# Dozr Marketplace â€” Build Roadmap

Reverse-engineered from `LOGISTICS/02_Product/01_Kasper_Marketplace.docx` (the
real job-flow spec) plus the finalized brand guidelines. This is the order of
operations from here to a shippable v1 of the Marketplace site, and which
`.claude/agents/` specialist owns each step. Update the checkboxes as phases
complete â€” this file is the single source of truth for "what's next."

Scope for this round: the **Marketplace** product only (client-facing
equipment rental + freight booking). Vendor OS and Fleet/Telematics get the
same process, later â€” see "Later" section at the bottom.

## Phase 0 â€” Foundation

- [x] Docs reorganized (LOGISTICS/01-05 + Archive)
- [x] Brand guidelines finalized â€” `LOGISTICS/05_Brand_Design/Dozr_Brand_Guidelines.html`
- [x] Competitor UI teardown â€” `LOGISTICS/01_Strategy/competitor_ui_teardown.md`
      (TruKKer, Tenderd, EquipmentShare fetched live; Lalamove carried over
      from the existing addendum since its site didn't render via fetch)
- [x] `.claude/` control layer + expert agents + this roadmap

**Expertise used:** competitive/market research, information architecture (docs), brand systemization.

## Phase 1 â€” Information Architecture & Wireframes

**UPDATE (2026-07-08): mostly already done, via Claude Design.**
`Dozr_Wireframes.html` already contains low-fi structural wireframes for the
Marketplace client journey (1a Home, 1b Browse, 1c Equipment detail, 1d
Tracking) plus a separate low-fi pass at the Vendor Fleet dashboard (2a-2d,
out of scope this round). These are genuine Claude Design output (the
`dv-turn`/`dv-opt`/"Try next:" markup is that tool's export format), not a
placeholder.

- [x] Client journey wireframed: Home (search-first), Browse (filters+results),
      Equipment detail, Tracking â€” `Dozr_Wireframes.html` screens 1a-1d
- [ ] Still missing a wireframe pass for: **Quote Approval** (client approving
      a vendor-selected quote) and a standalone **Rate Cards** view (may not
      be needed as its own page â€” Browse + Detail already show live pricing;
      confirm before building one)
- [x] Teardown patterns already present in the wireframes/prototype: visual
      multi-type booking selector, transparent live pricing, GPS tracking
      link â€” matches `competitor_ui_teardown.md` recommendations

**Expertise needed for what's left:** information architecture for the two
missing screens only â€” small remaining scope, not a from-scratch pass.

## Phase 2 â€” Visual Design Pass

**UPDATE (2026-07-08): largely done for 4 of 6 screens, via Claude Design.**
`Dozr_Marketplace_Prototype.html` is a working hi-fi, interactive (JS
state-driven) prototype of Home, Browse, Detail+Booking (with live pricing
math), and Tracking (WhatsApp-style live delivery view) â€” already built on
the real brand tokens (Hanken Grotesk, Space Mono, #FFC400/#141518/#F6F6F3).

Owner going forward: **continue in Claude Design** for any new/changed
screens (it already has the brand system and this exact prototype loaded) â€”
`brand-guardian` (`/brand-check`) audits the output here rather than
redoing the visual work from scratch in this repo.

- [x] Home, Browse, Detail+Booking, Tracking â€” hi-fi, interactive
- [x] **Pricing model corrected (2026-07-08):** removed all published AED
      prices from Home/Browse/Detail â€” replaced every price+"View"/"Book now"
      combo with a "Request Quote" CTA. This matches the real backend flow
      (RFQ â†’ vendor quote â†’ approval), not fixed instant pricing.
- [x] **EquipmentShare pattern applied:** category tab bar added to Browse
      (Excavators/Loaders/Cranes/Trucks/Flatbeds/Generators); day-rate price
      filter replaced with a "GPS tracked" toggle; interactive tabbed feature
      showcase ("Track it live / Prove delivery / Get paid faster") added to
      Home, swapping a photo panel per tab â€” same pattern as their
      "Select a feature" section
- [ ] Quote Approval screen â€” needs a Claude Design pass once Phase 1's gap is filled
- [x] **Accessibility/semantic-HTML fixes (2026-07-08):** manual checklist pass
      on `Dozr_Marketplace_Prototype.html` â€” all 7 findings fixed. Contrast
      (`#9A9CA1`â†’`#5B5F66`, now 6.41:1), `<title>`+meta description added, every
      `<span onClick>`/`<div onClick>` converted to real `<button>` (nav, sign-in,
      logo/home links, back links, category tiles, all 9 equipment cards,
      category tab bar), view/request-quote actions split into separate
      non-nested buttons per card, category tab bar wired to real state
      (6 categories, active styling, `aria-current`), booking rail converted to
      real `<input type="date">`/`<select>`/`<input>` with `<label for>`, `.photo`
      placeholders given `role="img" aria-label` or `aria-hidden="true"`.
      Verified with an HTML parser: no tag mismatches, no nested buttons.
- [ ] `/brand-check` pass to confirm no token drift after these edits

**Expertise needed:** visual/UI design (Claude Design), brand systemization (brand-guardian).

## Phase 3 â€” Stack Decision & Scaffold

Owner: **frontend-builder** â€” decision needs afzl's sign-off, not auto-picked

- [x] **Decided (2026-07-08):** Vanilla HTML/CSS/JS, no framework/build-step,
      consistent with the three existing MVPs (kaslo-liard, vendorkaslo,
      telematics-flame). Multi-page static site (confirmed by inspecting
      kaslo-liard.vercel.app's actual source â€” real `index.html`/`track.html`/
      `login.html`, not a single-page app).
- [x] **No backend for v1, by design, not a placeholder:** equipment data
      hardcoded in `marketplace/data/equipment.js`; every action that would
      need a server (Request Quote, Approve Quote, Track Job) opens a
      `wa.me` WhatsApp deep link instead of a form â€” matches the real spec
      (`01_Kasper_Marketplace.docx`: quotes/approvals confirmed via
      WhatsApp). Supabase gets wired in later behind the same data
      functions, without touching page markup.
- [x] `marketplace/` folder scaffolded (2026-07-08, via clad-arch): shared
      `css/styles.css` (brand tokens as CSS vars), `js/main.js` (nav/category
      tab behavior), `js/whatsapp.js` (deep-link builders), `data/equipment.js`
      (hardcoded listings ported from the prototype), and 5 page shells
      (`index.html`, `browse.html`, `equipment-detail.html`, `tracking.html`,
      `quote-approval.html` â€” the last one stubbed/placeholder pending its
      Claude Design pass). See `marketplace/CLAUDE.md` for conventions.
- [ ] Add `.claude/hooks/format.sh` and `pre-push-check.sh` once real
      lint/build commands exist (skipped for now â€” pre-code stage)

**Expertise needed:** pragmatic frontend architecture, deployment (Vercel).

## Phase 4 â€” Build, Page by Page

Owner: **frontend-builder** (`/build-page <page>`), copy from **copywriter** first.
Page shells exist in `marketplace/` â€” each item below means filling in the
`<!-- TODO -->` sections in that page's shell, not creating the file.

- [x] Home (`marketplace/index.html`)
- [x] Equipment/Freight Browse (`marketplace/browse.html`)
- [x] Equipment Detail + Booking (`marketplace/equipment-detail.html`)
- [x] Live Tracking page (`marketplace/tracking.html`)
- [x] Quote Approval (`marketplace/quote-approval.html`) - implemented directly from `prompt/05_quote_approval_design.md` as a matching shared-link phone screen; still needs a formal design/brand review.

**Cut from v1 scope (2026-07-08):** standalone Rate Cards page â€” contradicts
the request-quote pricing model; Browse/Detail already carry the specs it
would have shown.

Each page: copywriter pass â†’ frontend-builder implements â†’ brand-guardian
checks â†’ qa-accessibility-reviewer checks. Don't skip straight to code
without the copy/wireframe existing for that page.

**Expertise needed:** UX copywriting, frontend implementation, brand QA.

## Phase 5 â€” QA & Ship

Owner: **qa-accessibility-reviewer**, gated by `/ship`

- [x] WCAG AA pass (contrast, keyboard nav, labels) â€” via the `frontend-checklist`
      MCP server (`.mcp.json`) + `frontend-checklist-global` skill (2026-07-08:
      wired in â€” 385 rules across HTML/CSS/JS/Performance/Accessibility/SEO/
      Security/Images/Testing/Privacy/i18n, public, no auth)
- [x] Mobile-first responsive check
- [x] All CTAs/WhatsApp deep links point to real destinations
- [x] Copy matches real numbers/workflow, no placeholder text left in

**Expertise needed:** accessibility auditing, QA.

## Later (explicitly out of scope this round)

- Vendor OS and Fleet/Telematics site rebuilds â€” same agents, same process, after Marketplace ships
- WhatsApp API (360dialog) upgrade from deep links
- Lead-magnet content asset (Ã  la TruKKer's "Gulf Freight Playbook") for SEO/trust
- Ops dashboard and vendor portal UIs (internal tools, not part of the public Marketplace site)

