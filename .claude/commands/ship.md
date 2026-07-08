Pre-launch checklist for the Dozr Marketplace site (or the specific page/flow
in $ARGUMENTS). This is a checklist, not an automated gate — no build/lint/test
commands are wired up yet (pre-code stage, see CLAUDE.md).

Run through, in order:
1. `/brand-check` on every changed page.
2. Dispatch `qa-accessibility-reviewer` for the WCAG/mobile/keyboard pass.
3. Confirm every CTA and WhatsApp deep link actually points somewhere real
   (no placeholder hrefs left in).
4. Confirm copy matches real numbers/workflow from the product docs, not
   placeholder lorem ipsum.
5. Report a clear go/no-go with the specific blockers if any.
