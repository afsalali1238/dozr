/* =================================================================
   WhatsApp deep-link helper — the ONE place the business number lives.

   Every action that would normally need a backend (Request Quote,
   Approve Quote, Track Job, "Ask a question") routes through here
   instead of a form POST. This matches the real product spec: quotes
   and approvals are confirmed over WhatsApp, not a web form.

   When a real backend exists, this file is the only thing that should
   need to change (e.g. logging the click server-side before redirect,
   or swapping to the 360dialog API per ROADMAP.md "Later" section) —
   page markup and the buildXMessage() calls should not need to change.
   ================================================================= */

// DEMO PLACEHOLDER: DOZR_WHATSAPP_NUMBER is a fake number for the prototype.
// Replace with the real Dozr business WhatsApp number (E.164, no
// leading +, e.g. "971501234567" for a UAE mobile number) before production.
const DOZR_WHATSAPP_NUMBER = "971000000000";

/**
 * Build a wa.me deep link that opens WhatsApp with a pre-filled message.
 * @param {string} message - plain text, will be URL-encoded
 * @param {string} [number] - override the default business number
 * @returns {string} full https://wa.me/... URL
 */
function buildWhatsAppLink(message, number = DOZR_WHATSAPP_NUMBER) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

/**
 * Convenience builders for the specific actions used across the site.
 * Keep the message copy here, not scattered across page files, so voice
 * stays consistent and easy to update in one place.
 */
const DozrWhatsApp = {
  requestQuote(equipmentName, dates, location) {
    const message = `Hi Dozr, I'd like a quote for: ${equipmentName}\nDates: ${dates}\nDeliver to: ${location}`;
    return buildWhatsAppLink(message);
  },
  requestFreight(lane, cargo, date, vehicle) {
    const message = `Hi Dozr, I need a freight quote.\nLane: ${lane}\nCargo: ${cargo}\nDate: ${date}\nVehicle: ${vehicle}`;
    return buildWhatsAppLink(message);
  },
  approveQuote(quoteRef) {
    const message = `Hi Dozr, I approve the quote ${quoteRef ? `(ref ${quoteRef})` : ""}. Please proceed.`;
    return buildWhatsAppLink(message);
  },
  askAQuestion(context) {
    const message = context
      ? `Hi Dozr, I have a question about: ${context}`
      : "Hi Dozr, I have a question.";
    return buildWhatsAppLink(message);
  },
  trackJob(jobRef) {
    const message = `Hi Dozr, can I get a live tracking link for ${jobRef || "my job"}?`;
    return buildWhatsAppLink(message);
  },
};
