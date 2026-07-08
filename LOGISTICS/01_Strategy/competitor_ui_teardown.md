# Competitor UI/UX Teardown — Addendum to logistics_competitive_report.docx

Purpose: the main competitive report (and its Section 8 addendum) covers business
model, funding, and strategic lessons. This addendum adds a **UI/UX layer**,
specifically for designing the Dozr Marketplace website. Sources are live sites,
fetched 2026-07-08. Lalamove's site is a JS-rendered SPA that didn't return
readable content via fetch — its feature list below is carried over from the
existing addendum (section8_addendum_features_to_steal.docx), not re-verified
visually this round.

## TruKKer (trukker.com) — closest regional analog, highest-value teardown

- **Two-sided hero, split immediately**: "Ship with us" / "Join as a Carrier" /
  "Explore More" (enterprise ProcureCo) as three parallel tracks on the homepage,
  each with its own bullet value props. No single generic CTA — the visitor
  self-selects their role in the first screen.
- **WhatsApp is the headline mechanic, not a footnote**: "Shippers raise freight
  requests via WhatsApp, email, calls, voice notes or dashboard. AI instantly
  structures them into RFQs and matches them with verified vendors, who bid via
  WhatsApp, calls, or the Partner App." This is presented as a *feature*, with
  its own section and a "Start a Conversation" WhatsApp deep-link CTA — directly
  validates Dozr's own WhatsApp-first job flow (booking, RFQ, quote, dispatch are
  all WhatsApp-native per `LOGISTICS/02_Product/01_Kasper_Marketplace.docx`).
- **One-line brand mnemonic**: "ANY TRUCK | ANY TIME | ANY WHERE" — repeated,
  memorable, sets expectation before any feature list.
- **Trust-building content asset**: a free "22-page Gulf Freight Playbook"
  (routes/rates/regulations for Khor Fakkan, Sohar, Jeddah) offered as a lead
  magnet — positions them as the domain authority, not just a booking tool.
  Worth stealing as a later-phase idea (see ROADMAP.md), not core v1.
- **Vertical/industry logo strip** under the hero (FMCG, Automotive, Retail,
  Construction, Manufacturing, Oil & Gas, etc.) — cheap trust signal, easy to
  reuse for Dozr's construction/port focus.
- **Guarantee language as a feature, not a footnote**: "100% fulfilment,"
  "48-hour payment," "guaranteed truck availability" — stated as bullet
  features next to the relevant CTA, not buried in copy.

## Tenderd (tenderd.com) — closest analog for the Fleet/Telematics product, not Marketplace

- **Quantified impact stats immediately below the fold**: "10% reduction in fuel
  spend," "25% increase in productivity," "50% reduction in safety violations,"
  "100% end-to-end digitized." Numbers-first credibility, before any feature
  explanation. Dozr's own `telematics-flame` MVP already does this (ROI
  multiple, net savings) — keep that pattern, consider bringing a lighter
  version to the Marketplace site too (e.g. "500+ jobs/month," "AED X saved").
- **Case studies as mini-proof cards**: client name + one stat + one-line
  result (e.g. "AD Ports — 30% increase in equipment utilization"), not full
  case study text on the homepage — just enough to link out.
- **SEO-driven FAQ block** at the bottom of the homepage answering "what is
  fleet management," "what is telematics," etc. — captures search traffic,
  cheap to replicate for Dozr's own category terms ("what is a digital freight
  marketplace UAE," etc.) in a later phase.

## EquipmentShare (equipmentshare.com) — best analog for the equipment-rental half of Marketplace

- **Interactive tabbed feature demo**: "Select a feature: Track Equipment
  Productivity / Improve Uptime / Increase Safety" — clicking a tab swaps a
  live product screenshot and a 3-bullet feature list next to it. Much
  stronger than static screenshots for showing the booking/tracking/ePOD flow
  without needing a full working dashboard yet.
- **Equipment mega-menu by category** (Earthmoving, Aerial Work Platforms,
  Forklift & Material Handling, Agriculture & Landscaping, Compressed Air) with
  popular items listed directly in the nav dropdown — reduces clicks to the
  specific machine a buyer wants. Directly applicable to Dozr's equipment
  categories (boom truck, flatbed, low-bed trailer, generator, etc. — already
  seen in the kaslo-liard MVP's equipment filter).
- **Rent vs. Buy vs. Service as top-level nav split** — not relevant to Dozr
  v1 (rental + freight only), but worth remembering if equipment sales/service
  gets added later.

## Lalamove (carried over from section8_addendum_features_to_steal.docx — not re-fetched)

- Instant booking: pickup, drop-off, vehicle type in one screen.
- Multi-vehicle-type selection matched to cargo size (motorcycle → 5T truck →
  flatbed/lorry) — the clearest example of a fast, visual equipment/vehicle
  picker. Directly relevant to Dozr's booking form UX.
- Dynamic real-time pricing shown before confirming.
- Live driver tracking with ETA countdown.
- Multi-stop bookings, scheduled bookings up to 7 days ahead.
- In-app driver messaging without exposing phone numbers.

## Patterns to steal for Dozr Marketplace v1 (ranked by fit)

1. **Two-sided hero** (Client books / Vendor joins) instead of one generic CTA
   — TruKKer pattern, fits Dozr's real 4-actor flow.
2. **WhatsApp as a stated feature**, with its own visual section and deep-link
   CTA — not hidden in the booking flow. Matches how Dozr actually operates.
3. **Visual multi-type booking selector** (equipment/vehicle icons, not a
   dropdown) — Lalamove pattern, upgrades the current kaslo-liard select boxes.
4. **Tabbed live-feature preview** (booking → tracking → ePOD → invoice) using
   real screenshots as they're built — EquipmentShare pattern, replaces
   needing finished screenshots of every screen up front.
5. **Transparent rate cards** — already present in kaslo-liard MVP, keep, just
   restyle to brand tokens (see `LOGISTICS/05_Brand_Design/Dozr_Brand_Guidelines.html`).
6. **Quantified trust stats** near the top (jobs completed, avg RFQ response
   time, vendors verified) — Tenderd pattern.
7. *(Later phase, not v1)* Lead-magnet content asset, industry logo strip,
   SEO FAQ block.

See `ROADMAP.md` (Dozr project root) for where this feeds into the wireframe
and build phases.
