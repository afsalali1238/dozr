# Equipment Detail page build

**Target tool:** AI coding assistant (Claude Code, Cursor, or similar)
**File being built:** `marketplace/equipment-detail.html`

---

Build out marketplace/equipment-detail.html for the Dozr project. Read
marketplace/CLAUDE.md first, then fill in the <!-- TODO --> sections.

Source content: the Detail+Booking screen (isDetail block) in
LOGISTICS/05_Brand_Design/Dozr_Marketplace_Prototype.html — reference
only, rebuild as real code.

On load: read ?id= from the URL via
getEquipmentById(new URLSearchParams(location.search).get('id')) in
data/equipment.js. Render gallery (main photo + thumbnail row — main
photo gets role="img" aria-label with the unit name, thumbnails get
aria-hidden="true" if empty placeholders), title/category eyebrow, specs
table (iterate unit.specs, a plain key/value object), and unit.description
if present.

Booking rail (right side): this must be a REAL form — <label for="rentalStart">
+ <input type="date">, <label for="rentalDuration"> + <select> with the
duration options from the prototype (1 week / 2 weeks / 1 month / Custom),
<label for="deliverTo"> + <input type="text">. Primary CTA is a link
styled as .btn.btn-primary.btn-full with the text "Request Quote" —
its href must be built at render time (or on click) via
DozrWhatsApp.requestQuote(unit.name, durationValue, deliverToValue) from
js/whatsapp.js, so it opens WhatsApp with a pre-filled, accurate message.
Below the CTA, keep the "No payment required to request" reassurance line
and the "Verified supplier · replies in ~40 min" trust line from the
prototype.

No published price anywhere on this page except inside the WhatsApp
message context — this matches the request-quote model already decided
for v1.
