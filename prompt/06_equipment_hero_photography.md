# Equipment / hero photography

**Target tool:** Image-generation tool (Midjourney, DALL·E, Ideogram, etc.)
**Output goes into:** `marketplace/assets/`

---

Generate a set of photos for a UAE construction equipment rental
marketplace called Dozr. Visual tone: clean, professional, slightly
editorial — not stock-photo generic. Real construction/logistics
settings in the UAE (desert-adjacent industrial yards, Dubai/Sharjah
skyline hints in the far background where relevant, warm daylight,
slight golden-hour warmth is welcome but not mandatory).

Set 1 — equipment hero shots (one image per unit, 4:3 or 16:9,
shot 3/4-angle, equipment clean and well-lit, isolated against a plain
yard/sky background so it reads clearly as a listing photo):
- Mini excavator, CAT 305 CR, compact size read clearly
- Excavator, CAT 320, mid-size crawler excavator
- Wheel loader, Komatsu WA320
- Excavator, Hitachi ZX130
- Excavator, Kubota KX080
- Excavator, Volvo EC220
- Excavator, CAT 336, largest of the set, scale should read as heavy-duty

Set 2 — homepage hero image (wide, 21:9 or similar): equipment being
loaded/moved at a UAE industrial yard at early morning light, conveying
"on site by 7am" — motion and readiness, not a static parked-vehicles shot.

Set 3 — trust/feature imagery (3 images, square or 4:3): (a) a phone
showing a live GPS tracking map/pin, (b) a driver and site supervisor
doing a digital delivery sign-off (ePOD) with a tablet or phone, (c) a
WhatsApp-style chat bubble mockup showing an invoice/quote message —
these support the "Track it live / Prove delivery / Get paid faster"
feature section on the homepage.

Style constraint: no text/logos baked into the image (UI chrome, WhatsApp
branding, etc. gets added in code afterward) — keep these as clean
photography, not mockups with fake text overlays.

---

**Filenames to save as** (so they drop straight into place without
renaming — see `data/equipment.js` for the `id` values these match):
`cat-305-cr.jpg`, `cat-320.jpg`, `komatsu-wa320.jpg`, `hitachi-zx130.jpg`,
`kubota-kx080.jpg`, `volvo-ec220.jpg`, `cat-336.jpg`, `hero-home.jpg`,
`feature-tracking.jpg`, `feature-epod.jpg`, `feature-invoice.jpg`.
