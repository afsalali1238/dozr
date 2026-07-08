# Tracking page build

**Target tool:** AI coding assistant (Claude Code, Cursor, or similar)
**File being built:** `marketplace/tracking.html`

---

Finish marketplace/tracking.html for the Dozr project. This one is the
simplest — the visual design is already fully done in the prototype and
doesn't need new layout decisions, just a direct, faithful port into real
code inside the #tracking-body div (marked with a TODO comment already).

Source: the Tracking screen (isTracking block) in
LOGISTICS/05_Brand_Design/Dozr_Marketplace_Prototype.html. Port: the
map/photo panel (give it role="img" aria-label describing the route,
e.g. "Live GPS map showing CAT 320 en route to Al Quoz"), the "Arriving
06:52 / 14 min away / 8.2 km" info row, the 4-step status timeline
(Booked & confirmed → Dispatched from yard → En route → Arrived on site,
with the checkmark/dot styling from the prototype), and the two
bottom buttons — "Call driver" (a real tel: link) and "Share" (use the
Web Share API if available, falling back to copying the URL).

This page has no site nav by design (see the comment already in the
file) — it's a link opened directly from a WhatsApp message, not
something users navigate to from the main site. Don't add one.
