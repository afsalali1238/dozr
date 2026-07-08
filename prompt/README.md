# Dozr Marketplace — Build Prompts

Ready-to-paste prompts for building out the rest of the Marketplace site,
one per task. Each has been written/corrected against the actual project
conventions (`marketplace/CLAUDE.md`, brand tokens, the WhatsApp-deep-link
pattern instead of a backend, the semantic-HTML rules already enforced in
the prototype). Copy the whole prompt into the tool noted at the top of
each file — don't mix prompts across tools, they're written for different
output styles (exact code vs. visual/creative generation).

| File | Task | Tool |
|---|---|---|
| `01_home_page_build.md` | Fill in `marketplace/index.html` | AI coding assistant (Claude Code, Cursor, etc.) |
| `02_browse_page_build.md` | Fill in `marketplace/browse.html` | AI coding assistant |
| `03_equipment_detail_build.md` | Fill in `marketplace/equipment-detail.html` | AI coding assistant |
| `04_tracking_page_build.md` | Finish `marketplace/tracking.html` | AI coding assistant |
| `05_quote_approval_design.md` | Design the missing Quote Approval screen | Claude Design (or similar visual/design tool) |
| `06_equipment_hero_photography.md` | Generate real equipment/hero photos | Image-generation tool (Midjourney, DALL·E, Ideogram, etc.) |

Build order (per `ROADMAP.md` Phase 4): Home → Browse → Equipment Detail →
Tracking, with Quote Approval slotting in once its design lands. Photography
can happen any time in parallel — the pages are written to accept real
images dropped into `marketplace/assets/` without markup changes (photo
divs already carry the right `role="img" aria-label` / `aria-hidden`
attributes).

Update this file if a prompt gets revised or a new one is added — keep it
as the index, not a duplicate of the prompt content itself.
