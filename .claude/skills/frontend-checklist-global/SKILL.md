---
name: frontend-checklist-global
description: "Use when auditing or improving any frontend codebase against the full Front-End Checklist rule corpus through one entry point."
metadata:
  category: global
  priority: high
  difficulty: intermediate
  estimatedTime: "30"
  source: frontendchecklist.io
  url: https://frontendchecklist.io/mcp
---

# Front-End Checklist Global Audit

This skill connects one entry point to all 385 Front-End Checklist rules
(HTML, CSS, JavaScript, Performance, Accessibility, SEO, Security, Images,
Testing, Privacy, Internationalization) via the public MCP server declared in
`.mcp.json` at the Dozr project root (`https://mcp.frontendchecklist.io`,
read-only, no auth). Use MCP retrieval instead of trying to recall rules from
memory.

For Dozr specifically: this is the QA layer `qa-accessibility-reviewer` and
`frontend-builder` (see `.claude/agents/`) should reach for once real
Marketplace pages exist under `marketplace/` (ROADMAP.md Phase 4-5) — it
covers WCAG/accessibility far more thoroughly than a manual pass, plus
performance, SEO, and security checks the other agents don't own.

## Workflow

1. Start with `review_code` for pasted code, file contents, or focused code review.
2. Use `audit_url` for a public page when you need rendered HTML audited quickly.
3. Narrow or expand scope with `search_rules`, `list_categories`, `get_workflow`, or `get_quick_reference`.
4. For each issue, use `get_rule`, `fix_rule`, or `explain_rule` to give exact remediation.
5. If a checklist is a better fit than ad hoc search, use `get_checklist_rules`.

## Audit Stance

- Be conservative. Prefer fewer, stronger findings over speculative breadth.
- Only report an issue when the code or markup shown supports it directly.
- In small component or route audits, prefer the strongest 1-2 supported findings over listing every possible enhancement.
- Do not infer business intent from a snippet alone. Example: do not assume a field is required unless the code or surrounding copy makes that explicit.
- Do not treat `alt=""` as an issue by default; empty alt can be correct for decorative images.
- When an image is explicitly decorative, prefer zero findings unless the snippet shows a concrete problem rather than a hypothetical optimization.
- Do not raise low-confidence preference tweaks as findings when the snippet is otherwise sound. Prefer silence over weak nitpicks.
- Do not treat React or JSX fragments as full HTML documents unless the snippet includes real document context like `<html>`, `<head>`, or `<body>`.

## Coverage Checklist

- Forms: check labels, accessible button names, explicit button types, `autocomplete` hints, password-field autocomplete, and validation semantics that are explicit in the code.
- Images: check `width`/`height`, `loading`, `srcset`/`sizes`, and whether image semantics are clearly meaningful or decorative. Do not assume tiny SVG logos or clearly decorative assets must be lazy-loaded.
- Metadata: check title placement, canonical-url behavior, meta descriptions, Open Graph coverage, and structured data only when the file is responsible for metadata.
- Motion: check expensive animated properties, prefer transform/opacity, and require `prefers-reduced-motion` handling for persistent motion.
- Security: check `target="_blank"` links for `noopener noreferrer`, insecure form actions, password input best practices, and blocking third-party scripts.
- Structure: check duplicate ids, list semantics, and table headers conservatively.

## Rule-Derived Highlights

### Set explicit width and height on images
Always set `width`/`height` on `<img>` matching intrinsic dimensions, paired
with `height: auto` in CSS. Missing dimensions are the leading cause of CLS.
Reserve findings for meaningful content images — decorative micro-assets
(e.g. Dozr's `.photo` placeholder divs) are low-priority exceptions when CSS
already reserves stable space.

### Hide decorative elements from assistive technology
Use `alt=""` (not `alt="image"` or missing alt) for decorative images. Add
`aria-hidden="true"` to decorative SVGs/icons. `role="presentation"` removes
semantic meaning from elements.

### Use transform and opacity for animations
Only `transform` and `opacity` composite on the GPU without triggering
layout. Prefer CSS transitions over JS animation libraries for simple
effects. Respect `prefers-reduced-motion`.

### Validate forms accessibly
Associate error messages with fields using `aria-describedby`, use
`aria-invalid` for validation state, mark required fields with `required`/
`aria-required`, provide inline errors near the field, never rely on color
alone. Directly relevant to Dozr's booking/request-quote form (dates,
duration, delivery site fields).

### Provide visible custom focus indicators
Never use `outline: none` without a `:focus-visible` replacement. Focus
indicators need 3:1 contrast against adjacent colors (WCAG 2.2). Relevant to
Dozr's ink-on-canvas/yellow-accent palette — verify focus rings are visible
against `#F6F6F3` canvas and `#141518` ink surfaces alike.

## Coverage

- accessibility: 89 rules (9 critical, 25 high)
- css: 31 rules (10 high)
- html: 34 rules (3 critical, 12 high)
- i18n: 5 rules
- images: 25 rules (1 critical, 15 high)
- javascript: 26 rules (1 critical, 12 high)
- performance: 42 rules (1 critical, 21 high)
- privacy: 5 rules (2 high)
- security: 22 rules (4 critical, 10 high)
- seo: 93 rules (19 high)
- testing: 13 rules (7 high)

## Evaluation Standard

- Prefer findings tied to exact files, routes, selectors, or code snippets.
- Prioritize critical and high issues first.
- Explain uncertainty instead of overstating when the snippet does not show enough context.
- Avoid generic advice when the MCP tools can retrieve a rule or fix prompt.
- When no issue is found automatically, use `search_rules` to broaden review coverage before concluding clean.

Source: https://github.com/thedaviddias/Front-End-Checklist (MIT licensed).
MCP docs: https://frontendchecklist.io/mcp
