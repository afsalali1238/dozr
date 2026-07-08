# Quote Approval screen — design pass

**Target tool:** Claude Design (or similar visual/interactive design generator)
**File being extended:** `LOGISTICS/05_Brand_Design/Dozr_Marketplace_Prototype.html`

---

I'm extending an existing hi-fi interactive prototype at
`LOGISTICS/05_Brand_Design/Dozr_Marketplace_Prototype.html` (Dozr — UAE
equipment rental marketplace). It already has 4 screens (Home, Browse,
Detail+Booking, Tracking) built on a `<x-dc>` template framework with
`sc-if` screen switching and a `DCLogic` state class. Read that file first
to match its exact visual system and code patterns before building
anything.

Add a 5th screen: **Quote Approval**.

Context — this is NOT a full marketplace page like the others. Per the
real product spec, the flow is: client requests a quote (already built) →
vendor sends back a fixed price → client receives a WhatsApp message with
an "approval link" → opens it → **one tap to approve** → PO
auto-generates. So this screen should be structurally and tonally identical
to the existing **Tracking screen** in the same file: a no-login,
shared-link, single mobile-width phone-frame card — not a full desktop
page with nav.

Model it directly on the Tracking screen's layout (same
`min-height:calc(100vh - 41px)` wrapper, same 340px phone-frame card with
rounded corners and box-shadow, same top bar with the Dozr logo, same
"shared tracking link · no login needed" eyebrow pattern at the top).

Content for the card:
- Eyebrow: "Quote ready · no login needed"
- Equipment being quoted: reuse "CAT 320 · 20 tonne excavator" (consistent
  with the Detail page's example unit) with a small photo/placeholder div
- Vendor name + verified badge (reuse the "● Verified supplier" pattern
  already used elsewhere in the file)
- Quote summary: rental dates, duration, delivery location (reuse the
  same values already in the Detail page's booking rail: 12 Aug 2026,
  2 weeks, Al Quoz Industrial 3), and a single clear price line (this is
  the one screen in the whole prototype where a real AED number is
  appropriate, since a real quote has been issued)
- Terms line: one sentence, plain — e.g., "Price valid for 48 hours. PO
  generated automatically on approval."
- One primary CTA: **"Approve Quote"** — full-width, same yellow #FFC400
  button style as the rest of the file
- One secondary, low-emphasis action: "Ask a question" (WhatsApp icon +
  text link, not a button) — for edge cases where the client wants to
  negotiate before approving
- After approval (on click), show a brief confirmation state within the
  same card: a green checkmark, "Approved — PO sent to vendor," reuse the
  timeline-dot visual language from the Tracking screen if it fits

Wire it into the existing DCLogic state: add `screen: 'approval'` as a
fifth `isX` flag alongside `isHome/isBrowse/isDetail/isTracking`, plus a
local `approved` boolean toggled by an `approveQuote` handler, so the
confirmation state renders in place without a page change.

Strict constraints: use only the existing Dozr brand tokens already
present in the file (ink #141518, yellow #FFC400, yellow-tint #FFF6D6,
canvas #F6F6F3, surface #FFFFFF, slate #5B5F66, line #E8E8E3, green
#1F9A6D, error #D64545; Space Grotesk for headings, Hanken Grotesk for
body, Space Mono for labels/eyebrows; button radius 10px, card radius
16px). Do not invent new colors, fonts, or spacing values. Match the
semantic-HTML conventions already in the file (real <button> elements
for anything clickable, not <div onClick> or <span onClick> — this file
was recently fixed for accessibility and should stay that way).

---

Once generated, drop the updated file back into `05_Brand_Design/` and
run `/brand-check` before treating it as the design source for
`marketplace/quote-approval.html`.
