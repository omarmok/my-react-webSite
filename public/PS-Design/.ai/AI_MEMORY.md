# PS-Design — AI Memory

_Short, living memory. Update only the relevant lines after an approved task — do not rewrite this file wholesale._

## Project Identity
- PS-Design — Public Security Design System, code name AMN.
- Government/enterprise Design System.
- Arabic-first and RTL-focused.
- Bootstrap 5 + SCSS.

## Source of Truth
- SCSS implementation (`css/`).
- `DesignSystemDocumentation/`.
- Existing Tokens (`css/helpers/_variables.scss`, `tokens.json`) and current component APIs.

## Owner Preferences
- Production stability before cleanup.
- No breaking changes.
- No new public APIs without approval.
- Existing Tokens only — no approximation, no invention.
- No broad automatic cleanup.
- Concise bilingual (Arabic first, English second) reports.
- Problems listed as bullet points with suggested solutions — no long prose reports.
- Avoid irrelevant backend and JavaScript findings (out of scope unless explicitly requested).
- Owner alone handles Git — no Git commands from AI sessions, ever.

## Current Scope
- SCSS
- Components
- Tokens
- Documentation accuracy
- Public API protection

## Postponed
- Responsive standardization
- ~~Tags cleanup~~ Cancelled 2026-07-16 — now active scope
- Date Picker cleanup
- JavaScript dependency audit
- Razor/backend review

## Mode
- **Autonomous Design System Maintainer Mode active (since 2026-07-16, permanent).** Read all `.ai/` files first on every task; score every component (1–10, 7 dimensions) in `COMPONENT_REGISTRY.md`; only Owner-cancelled postponements (currently: Tags) leave Restricted Scope.
- **Execution style, per explicit Owner correction (2026-07-16):** work in small batches of 2–4 closely related components, not one continuous full-system sweep. Finish and report each batch, then stop and recommend the next one. Owner-specified order: Batch 1 Buttons+Tags (done), Batch 2 Cards+Forms, Batch 3 Inputs+Select+Dropdown, Batch 4 Alerts+Notifications, Batch 5 Tables+Pagination, Batch 6 File Uploader+Person Card, Batch 7 Modal+Tabs, Batch 8 Stepper+Switch+Timeline.
- **Batch 1 (Buttons, Tags) completed 2026-07-16:** Buttons ≈7.36/10 (1 safe fix: `_buttonBase.scss` gap token; 2 findings logged, not implemented). Tags ≈8.64/10 (2 safe fixes: gap + radius tokens in `_tags.scss`; 1 architecture finding logged). Also discovered and reconciled: the Owner directly fixed `_card.scss`'s legacy `@import`→`@use` outside this workspace, resolving the old double-compilation issue — several `.ai/` files corrected to match. **Lesson: always re-read live source files at the start of each batch; do not assume prior-session summaries of file contents are still current, since the Owner may edit files directly between sessions.**
- **Batch 2 (Cards, Forms) completed 2026-07-16:** Cards ≈8.57/10, Forms (`_form.scss`) ≈8.64/10 — both already near-optimal, no safe changes found or needed after direct re-verification of every remaining literal value against the token scales. Next batch: Inputs, Select, Dropdown.
- **Batch 3 (Inputs, Select, Dropdown) completed 2026-07-16:** Fixed a real documentation mismatch (`components.json` Input Field focus-ring alpha 0.12→0.16, verified against `_form.scss`). Select (vue-treeselect) ≈4.1/10, no fix (vendor override — postponement + vendor-code caution). Dropdown ≈6.0/10, 2 safe token-reuse fixes + 1 dead-code removal in `_table.scss`. Also fixed a duplicate `font-weight: 500;` found in `_common.scss`'s select2 rule. New Architecture Opportunity logged: no project-wide height-token scale exists (affects Forms/Tags/Cards). Next batch: Alerts, Notifications.
- **Batch 4 (Alerts, Notifications) completed 2026-07-16:** `.moi-notification` ≈8.79/10, one safe fix ($padding-lg→$gap-lg for gap properties, same value). The separate `.alert-*`/`.custom-*-alert` legacy system ≈3.71/10, no fix — every color re-checked against the token scale, genuinely no match anywhere; its documentation gap needs an Owner decision. Next batch: Tables, Pagination.
- **Batch 5 (Tables, Pagination) completed 2026-07-16:** Tables ≈5.57/10, Pagination ≈6.0/10 — 10 exact-match token substitutions + 2 dead-code removals + 2 more icon-size migrations, all in `_table.scss`. **Important: discovered the numbered `$padding-N` Sass aliases do NOT equal N pixels** (e.g. `$padding-14`=12px, not 14px) — unlike `$gap-N` which is literal. Always verify against compiled output, never assume from a token's name. Next batch: File Uploader, Person Card.
- **Batch 6 (File Uploader, Person Card) completed 2026-07-16:** File Uploader ≈9.14/10, 3 small fixes (1 new icon migration, 1 token reuse, 1 redundant-declaration removal). Person Card: `.moi-person-card` (the genuine reusable component) ≈8.93/10, no changes needed. `.newIms--inquiryDs--card` (page-specific production code) ≈3.29/10, deliberately left untouched — already subject to a standing "Blocked pending visual QA" finding about cross-page value inconsistency. Next batch: Modal, Tabs.
- **Batch 7 (Modal, Tabs) completed 2026-07-16:** Modal ≈6.43/10, 2 safe token-category fixes; surfaced (not fixed) a real 34px-vs-16px close-button size inconsistency and a genuinely-dead, zero-output `%modal-header-heading` placeholder. Tabs: `.create__tabs` ≈4.57/10 no fix; `.tabsDesign` improved via 5 safe fixes (3 exact color matches, 2 exact radius matches, 1 dead-code removal). Next batch (final): Stepper, Switch, Timeline.
- **Batch 9 (Approved Issue Resolution) completed 2026-07-16 — post-plan cleanup batch, explicitly authorized by the Owner to resolve accumulated findings from Batches 1-8.** `_vue-treeselect.scss` and all Person Card implementations explicitly excluded, confirmed untouched. Fixed: `_oldButtons.scss` de-duplication (3 of 4 duplicate blocks removed; `moi-btn-size-vars` kept local — see new finding below); `.moi-btn--text-icon` migrated into `_buttons.scss`; `%modal-header-heading` removed (zero-output); `--theme-primary` source confirmed (JS runtime theming, `js/app.js`); 3 unused SCSS partials reviewed (none imported, `_createUser.scss` empty); Radio/`components.json` status note added. Documentation: `alert.html` gained a "Legacy Alerts" section (+ an unrelated pre-existing unclosed-div bug fixed in passing); new `timeline.html` and `tabs.html` pages created; `components.json` gained 3 new entries (Notifications, Timeline, Tabs) and Person Card's `scssFile` was fixed to a proper array. **New finding: `css/helpers/_mixins.scss` independently defines its own `moi-btn-size-vars` mixin with a different, stronger cascade than `_buttons.scss`'s — a genuine 3-way naming collision (not previously known) that blocks full de-duplication of `_oldButtons.scss` without a larger namespacing change.** `$Info-25`/`$Info-50` further investigated (confirmed as the only color family with this duplication) but still unresolved — no fix possible without guessing. Verified via full-project compile: exit 0, 24256 lines, diff showed only the 2 intended changes.
- **Batch 8 (Stepper, Switch, Timeline) completed 2026-07-16 — FINAL BATCH of the Owner's 8-batch plan.** Stepper `_stepper.scss` ≈6.71/10 (1 safe fix: `margin-left: 12px`→`$margin-lg`); `_radial-stepper.scss` ≈8.36/10 (no changes, already near-optimal). Switch ≈8.5/10 (no changes, already clean; notable `prefers-reduced-motion` accessibility support). Timeline ≈4.57/10 — first full audit (was previously only touched for icon sizing) — 9 safe fixes (6× color→`$white-100`, 1 partial padding→`$padding-5xl`, 2× radius→`$radius-md`); new documentation gap logged (no doc page, no `components.json` entry). All 16 named components/component-groups across all 8 batches now scored. Mode remains standing/permanent for future sessions.

## Recent Completed Work
- Project-wide SCSS hardcoded-value token binding pass completed 2026-07-16: 94 SCSS files reviewed, 32 SCSS files changed, 308 exact value components linked to existing variables/tokens, 0 nearest approximations. Tags, `_vue-treeselect.scss`, Person Card APIs, Radio API, `$Info-25`/`$Info-50`, generated files, JS/HTML untouched. Full `css/main.scss` compile succeeded; 0 selector additions/removals; no Git used.
- `moi-btn--text` migrated into the current button system.
- Button size map (`$moi-btn-sizes`) centralized.
- Checkbox SCSS centralized.
- Radio API attempt (`.moi-radio-group`) reverted.
- `components.json` expanded (6 components added).
- Two dead utility duplicates removed from `_customClasses.scss`.
- SCSS compilation verified clean at every step (full-project diff methodology).
- `.ai/` AI workspace created (8 files) — no source files touched, no Git commands run.
- `.ai/TASK_MANAGER.md` created; ran one autonomous Safe Task session:
  - Fixed 2 documentation-completeness gaps in `buttons.html` (`.moi-btn--text` States row + code sample; `.moi-btn--text-icon` labeled legacy).
  - Read-only audited Alert, Dropdown, Notifications, Table, Pagination, Modal, Tabs — found Tabs' two files are NOT duplicates (different scoped skins); found `.moi-notification` is what `alert.html` actually documents as "Alerts" (naming mismatch with SCSS file); found a separate, undocumented, actively-used alert class system (`.alert-primary` etc.) in 11 real pages.
  - Verified `components.json` file references all resolve on disk (one minor schema note: Person Card's `scssFile` is a comma-string, not an array).
  - Confirmed `i18n-audit.json` is a generated Arabic/English coverage report.
  - Investigated and proposed (not implemented) a fix for `_customClasses.scss`'s double-compilation.
- Card (`.moi-card`) internal SCSS quality pass: comments/organization only, zero declaration/selector changes, compiled output byte-identical.
- Narrow Card-only icon review: `24px` icon left unchanged (no "exact equivalent" in `$moi-icon-sizes` at the time's stricter bar). **Later superseded — see below.**
- **Design System Icon Size Migration (project-wide, broader Owner-set "effectively identical" bar):** reversed the Card decision above (24px→`lg`/1.5rem) and migrated 5 more components — Notification (icon/btn svg, already-1.5rem literal→token reference), File Uploader (16px→`sm`), Modal (`$modal-close-size`, already-1rem literal→token reference), Stepper (20px arrow-icon + Complated svg→`md`), Table/Pagination (24px row-action svg + page-link img height→`lg`). All other reusable components reviewed and left unchanged with documented reasons (no exact match, page-specific, or already systematized differently). Found and logged two unresolved items: a Tags scope-vs-postponement conflict, and a three-way Person Card naming mismatch (`.moi-person-card` = genuine component with no icon sizing to migrate; `.person__card` = documented but unimplemented; `.newIms` = page-specific production code, excluded). Verified via full-project compile (exit 0) + compiled-output grep confirming every migrated selector's new value.

## Critical Rules
- Do not create `.moi-radio-group`.
- Do not create any new public class, modifier, or data attribute without approval.
- Git (updated 2026-10-18): follow `ARCHITECTURE_RULES.md` → Git — `main` only, temporary task branches, no force-push / history rewrite, Owner approval before merging design- or behaviour-affecting changes.
- Do not classify HTML outside `DesignSystemDocumentation/` as deprecated by default — treat case by case.
- Do not add new `components.json` catalog entries or new documentation pages autonomously — treat as needing Owner approval, even for real, existing, undocumented components (e.g. `.moi-notification`, `.alert-primary` family).
