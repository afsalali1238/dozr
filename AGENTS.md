# Dozr

Dozr (formerly Kasper Technologies FZ-LLC) — UAE construction & port logistics
platform: equipment rental + freight booking marketplace, a vendor SaaS, and
GPS/fleet telematics. Three MVPs already exist (Marketplace, Vendor OS, Fleet).
Now rebuilding the **Marketplace** site under the finalized Dozr brand.

## Where things live

- `LOGISTICS/01_Strategy/` — feasibility study, competitive report + UI teardown, financial model
- `LOGISTICS/02_Product/` — product specs: Marketplace, Vendor OS, GPS-as-a-Service, Telematics
- `LOGISTICS/03_Engineering/` — Teltonika/telematics engineering briefing, hardware requirements
- `LOGISTICS/04_Operations/` — ops manual (13-stage job pipeline — the real workflow being digitized)
- `LOGISTICS/05_Brand_Design/` — **`Dozr_Brand_Guidelines.html` is the canonical brand source.** Read it before any design or copy work. Also has the marketplace/wireframe prototypes already made.
- `LOGISTICS/99_Archive/` — superseded drafts. Not context. Don't read unless explicitly asked.
- `marketplace/` — the actual website code (created once Phase 3 of ROADMAP.md starts — doesn't exist yet)
- `ROADMAP.md` — phase-by-phase build plan, which agent owns each phase, current status

## Brand tokens (NON-NEGOTIABLE — see Dozr_Brand_Guidelines.html for the full system)

- Colors: ink `#141518` (text/dark) · yellow `#FFC400` (accent, use sparingly) ·
  yellow-tint `#FFF6D6` · yellow-dark `#E6AF00` · canvas `#F6F6F3` (page bg) ·
  surface `#FFFFFF` (cards) · slate `#5B5F66` (secondary text) · line `#E8E8E3`
  (borders) · green `#1F9A6D` (success) · error `#D64545`
- Type: **Space Grotesk** (headings) · **Hanken Grotesk** (body) · **Space Mono**
  (labels, eyebrows, mono/technical UI)
- Radius: buttons `10px` · cards `16px` · chips/pills `999px`. Spacing grid: `8px`.
- Never invent colors/fonts outside this set. If a design needs something not
  listed here, flag it — don't improvise and call it brand-compliant.

## Current phase

Building the **Marketplace** (client-facing equipment rental + freight booking —
the full job-flow spec is `LOGISTICS/02_Product/01_Kasper_Marketplace.docx`:
booking → RFQ → vendor quote → PO → dispatch → GPS tracking → ePOD → invoice →
payment, all WhatsApp-native). Vendor OS and Fleet/Telematics rebuilds come
after, same process. See `ROADMAP.md` for the live phase.

## Stack

Not finalized in code yet. Recommendation in `ROADMAP.md`: stay Vanilla
HTML/CSS/JS + Supabase + Vercel, consistent with the three existing MVPs and
the Vendor OS build brief — lowest risk, fastest to ship solo, no build-step
friction. This is a recommendation, not a decision — confirm before scaffolding.

## Working style

- afzl is doing the design/build himself — Codex's role here is research,
  wireframes, and expert review at each step, not unilateral execution.
- Prefer dispatching to `.Codex/agents/` specialists via the Task tool over
  doing every step in the main thread — each one owns a phase in ROADMAP.md.
- Kasper-named legacy docs are historical (pre-rebrand), not wrong — don't
  rename or rewrite them without asking first.
- No lint/build/test commands exist yet (pre-code stage). Don't invent them.

## Imported Claude Cowork project instructions
