# PS-Design — Autonomous Task Manager

_Defines the autonomous execution loop for working through `IMPROVEMENT_BACKLOG.md` without a new prompt after every small task. Operates strictly inside the rules of `ARCHITECTURE_RULES.md`, `WORKFLOW.md`, `KNOWN_DECISIONS.md`, and `CODING_STANDARDS.md` — this file does not override any of them._

## Mode: Autonomous Design System Maintainer (permanent, established 2026-07-16)
- This is now a **standing mode**, not a one-off mission: on every future task, read all `.ai/` files first, then continue working through the full reusable component set until no Safe Tasks remain, without waiting for a new prompt after each completed item.
- This supersedes `WORKFLOW.md` §11 ("do not continue to the next backlog item automatically... wait for the next Owner instruction") **only** for continuous maintenance sessions explicitly invoked under this mode. Single, narrowly-scoped Owner requests (e.g. "fix X in file Y") still follow the normal single-task `WORKFLOW.md` flow and stop after that one task, per WORKFLOW.md's `Do not continue to the next backlog item automatically` unless the Owner explicitly re-invokes this Maintainer Mode.
- **Tags is no longer a Restricted/Postponed area.** The Owner explicitly cancelled the Tags postponement in this mode's kickoff instruction. Tags is now reviewed and improved under exactly the same Safe Task rules as every other component. All earlier `.ai/` references to "Tags cleanup postponed" are superseded by this entry.
- Every other standing Postponed/Restricted area (responsive standardization, Date Picker, JS dependency audit, Razor/backend) remains untouched unless the Owner explicitly cancels it the same way Tags was cancelled.

## Component Scoring Rubric
For every component reviewed under this mode, score 1–10 on each dimension, then compute an overall score (simple average unless a dimension is clearly not applicable):
- Design System Consistency
- SCSS Quality
- Token Usage
- Accessibility
- Documentation
- Maintainability
- Reusability

Scoring bands:
- **9.5–10:** Leave unchanged.
- **8–9.4:** Improve only if there is a clear, low-risk, evidence-backed benefit.
- **Below 8:** Improve using the safest possible approach available (see Safe Task Checklist below); if no safe approach exists, log as `Needs Owner Approval` instead of forcing a fix.

Scores are recorded per-component in `COMPONENT_REGISTRY.md` and are living values — re-score a component whenever it's substantively touched again.

## Architecture Opportunities
If the same implementation pattern is found repeated in 3+ reusable components, do not refactor automatically. Instead, document in `KNOWN_DECISIONS.md` under a new "Architecture Opportunities" heading: the pattern, why it should become a shared abstraction, estimated benefit, estimated risk, affected components, and a suggested approach. Mark `Architecture Opportunity — Needs Owner Approval` and continue with other Safe Tasks — this never blocks the session.

## Execution Loop
1. Read `IMPROVEMENT_BACKLOG.md`.
2. Identify the highest-priority item that is: Pending, clearly scoped, low risk, evidence-supported, not Postponed, not Blocked, not marked `Needs Owner Approval`.
3. Analyze the task (existing selectors, imports, tokens, documentation, backward-compatibility risk).
4. Check it against every rule in the Safe Task Checklist below.
5. Implement only if it fully qualifies as a Safe Task.
6. Compile when SCSS changed (isolated sandbox, never hand-edit generated CSS).
7. Verify the result (see Verification Requirements below).
8. Update the relevant `.ai/` files (`IMPROVEMENT_BACKLOG.md`, `KNOWN_DECISIONS.md`, `COMPONENT_REGISTRY.md`, `AI_MEMORY.md`, and the Session Log in this file).
9. Mark the item complete in `IMPROVEMENT_BACKLOG.md`.
10. Select the next highest-priority Safe Task and repeat, without stopping to ask after each one.
11. Stop the full mission only when no Safe Tasks remain (see Final Stop Logic).

## Task Selection Order
1. Confirmed documentation accuracy issues.
2. Read-only component audits.
3. `components.json` verification.
4. Documentation gaps for already-approved current APIs.
5. Internal no-output-change SCSS cleanup.
6. Duplicate compilation / import investigation.
7. Component quality review without API changes.
8. Other low-risk backlog items.

Never select: Postponed items, Blocked items, items requiring a new public API, items with unknown production impact. (Tags is no longer Postponed — see Mode section above.)

## Safe Task Checklist
A task is safe only when **all** of the following are true:
- Does not introduce a new public API, CSS class, BEM modifier, or data attribute.
- Does not change HTML markup contracts.
- Does not rename or remove any selector.
- Does not delete or move files.
- Does not change or create Design Token values.
- Does not alter shared architecture.
- Does not change backward compatibility.
- Does not touch a still-Postponed area (responsive, Date Picker, JS, Razor — Tags removed from this list, see Mode section above).
- Does not require visual design judgment.
- Does not require Owner confirmation.
- Has a clear verification method and can be reverted safely.
- Changes the smallest possible number of files.

Documentation may be updated automatically only when: the API already exists and is approved, the SCSS implementation is confirmed, the update adds clarity or missing coverage, no new API is invented, no existing recommendation changes materially, and no product behavior is affected. (Examples: add a missing states row for an approved class, add a code sample using an existing markup pattern, label a confirmed-legacy API as Legacy, correct a proven class-name typo.)

## Mandatory Stop Conditions
Stop and do not implement when a task involves: any new public API surface; selector removal/rename; legacy-code removal; token changes; component-behavior or architecture change; global CSS-order change; broad/project-wide refactor; a change affecting many unrelated pages; incomplete evidence; multiple valid options with materially different effects; unprovable production impact; an ambiguous backlog item; or anything in Restricted Scope (responsive, Tags, Date Picker, JS audit, Razor/backend, vendor code, generated CSS, Git/publishing).

When a stop condition is hit: do not implement; mark the item `Needs Owner Approval` in `IMPROVEMENT_BACKLOG.md` and `KNOWN_DECISIONS.md` with Problem / why work stopped / options / benefits / risks / recommended option; then continue to the next independent Safe Task if one exists.

## Verification Requirements
After every implemented task, confirm: the intended issue is resolved; no unrelated file changed; no public selector was added or removed unexpectedly; no class was renamed; no data attribute was added; no unrelated compiled CSS changed; SCSS compile succeeds when applicable; documentation references the real implementation; RTL is unchanged; backward compatibility is intact. If compiled output changes beyond the approved selector/declaration, revert the task and log the reason.

## Git
Fully forbidden — no Git command of any kind, including inspection. The Owner alone handles Git and publishing.

## Session Log
_Newest entries first. One entry per completed or blocked task._

### Batch: Project-wide SCSS hardcoded-value token binding pass
- Status: Completed. Reviewed the requested SCSS scope and applied exact-match token/variable substitutions only.
- Files reviewed: 94 SCSS files, excluding explicit no-touch files `_tags.scss` and `_vue-treeselect.scss`.
- Files changed: 32 SCSS files. Main changed groups: common/layout, login, selected non-excluded components, and page SCSS.
- Values linked: 308 declaration value components; exact matches: 308; nearest-variable substitutions: 0.
- Left unchanged: `5px`, `10px` padding/margin/position values, one-off dimensions, unmatched colors/shadows, comments, Date Picker/vendor-sensitive values, Person Card/newIms styling, Radio API areas, `$Info-25`/`$Info-50`, Tags, `_vue-treeselect.scss`.
- Verification: full `sass css/main.scss` compile exit 0; selector count unchanged at 3,614; 0 selectors added/removed; compiled line count unchanged at 22,297.
- Public API impact: none. No Git command was used.

### Batch: Autonomous Design System Maintainer — Batch 9 (Approved Issue Resolution)
- Status: Completed. Owner explicitly authorized resolving the accumulated backlog of findings from Batches 1-8, with `_vue-treeselect.scss` and all Person Card implementations explicitly out of scope, and 2 new documentation pages + Legacy Alerts documentation explicitly approved.
- Buttons/`_oldButtons.scss`: removed 3 confirmed-duplicate blocks (`:root`, icon-sizing loop, `moi-focus-ring`). Discovered a genuine 3-way `moi-btn-size-vars` mixin-naming collision with `css/helpers/_mixins.scss` (different, stronger cascade) that prevents full de-duplication — new Architecture Opportunity logged, not implemented. `.moi-btn--text-icon` migrated into `_buttons.scss` (legacy copy kept); `buttons.html` updated.
- Modal: `%modal-header-heading` removed (confirmed zero-output). `.btn-close` 34px re-investigated, left unchanged (no matching token).
- Pagination `--theme-primary`: confirmed as a JS runtime theming mechanism (`js/app.js`) — resolved from unknown to documented, no code change needed.
- `$Info-25`/`$Info-50`: further investigated (cross-family + `tokens.json` comparison) — still no provable fix, left unchanged.
- 3 unused SCSS partials reviewed in full — none imported, none have a real consumer; `_createUser.scss` confirmed empty. Left un-imported.
- Radio: `components.json` updated with an explicit "no approved public API" note; no code change.
- `alert.html`: added "Legacy Alerts" section (bilingual); fixed one unrelated pre-existing HTML bug (unclosed div) found while editing.
- Created `DesignSystemDocumentation/timeline.html` and `DesignSystemDocumentation/tabs.html` (new pages, real selectors only, HTML-balance verified).
- `components.json`: Person Card `scssFile` converted to array (metadata-only); added Notifications/Timeline/Tabs entries (18 components total, still valid JSON).
- Files changed: `css/common/_oldButtons.scss`, `css/common/_buttons.scss`, `css/common/_modal.scss`, `DesignSystemDocumentation/buttons.html`, `DesignSystemDocumentation/alert.html`, `DesignSystemDocumentation/timeline.html` (new), `DesignSystemDocumentation/tabs.html` (new), `components.json`.
- Verification: full-project isolated sandbox compile, exit 0, 24256 lines (net −10 from Batch 8's 24266). Full diff against the Batch 8 baseline showed only 2 changes (the `.moi-btn--text-icon` addition and the `_oldButtons.scss` dead-code removal) — nothing else moved anywhere in the compiled stylesheet. All 3 edited/created HTML files passed a full tag-balance check.
- `.ai/` files updated: `KNOWN_DECISIONS.md`, `IMPROVEMENT_BACKLOG.md`, `COMPONENT_REGISTRY.md`, `PROJECT_CONTEXT.md`, `AI_MEMORY.md`, this file.
- Confirmed untouched: `css/common/_vue-treeselect.scss`, `css/components/_personCard.scss`, `css/components/_PersonCardInfra.scss`, `DesignSystemDocumentation/personcard.html`.
- No Git command of any kind was used.

### Batch: Autonomous Design System Maintainer — Batch 8 (Stepper, Switch, Timeline) — FINAL BATCH
- Status: Completed. Stepper `_stepper.scss` ≈6.71/10 (1 safe fix); `_radial-stepper.scss` ≈8.36/10 (no changes, already near-optimal). Switch `_Switch.scss` ≈8.5/10 (no changes, already clean, notable `prefers-reduced-motion` support). Timeline `_timeline.scss` ≈4.57/10 — first full component audit (previously only reviewed for icon sizing) — 9 safe fixes applied.
- Files changed: `css/components/_stepper.scss`, `css/components/_timeline.scss`.
- Verification: isolated full-project compile (`batch8_verify`), exit 0, line count unchanged at 24266 lines (all fixes this batch are pure value-preserving substitutions, no dead code removed), grep-confirmed every fix's value unchanged.
- `.ai/` files updated: `COMPONENT_REGISTRY.md`, `KNOWN_DECISIONS.md`, `IMPROVEMENT_BACKLOG.md`, `AI_MEMORY.md`, this file.
- **This is the final batch of the Owner's 8-batch plan.** All 16 named components/component-groups have now been scored under Autonomous Design System Maintainer Mode. No further batch is pending — see the closing session report delivered to the Owner.
- Mode remains standing/permanent for future sessions: any new component work, or a fresh maintenance sweep, should still follow the same read-`.ai`-first → score → safest-fix → verify → update-`.ai` → batch-report cycle.

### Batch: Autonomous Design System Maintainer — Batch 7 (Modal, Tabs)
- Status: Completed. Modal ≈6.43/10 (2 safe fixes; surfaced a real 34px-vs-16px close-button inconsistency and a genuinely-dead placeholder, neither touched). Tabs: `.create__tabs` ≈4.57/10 (no fix), `.tabsDesign` ≈5.0/10→improved (5 safe fixes).
- Files changed: `css/common/_modal.scss`, `css/components/_tabsDesign.scss`.
- Verification: isolated full-project compile, exit 0, line count down by exactly 1, grep-confirmed every fix's value unchanged.
- `.ai/` files updated: `COMPONENT_REGISTRY.md`, `KNOWN_DECISIONS.md`, `IMPROVEMENT_BACKLOG.md`, `AI_MEMORY.md`.
- Next batch (Owner-specified order, final batch): Stepper, Switch, Timeline.

### Batch: Autonomous Design System Maintainer — Batch 6 (File Uploader, Person Card)
- Status: Completed. File Uploader ≈9.14/10, 3 small fixes. Person Card: `.moi-person-card` ≈8.93/10 (no changes needed), `.newIms--inquiryDs--card` ≈3.29/10 (deliberately no changes — page-specific, already Blocked pending visual QA per a standing finding).
- Files changed: `css/components/_file-uploader.scss`.
- Verification: isolated full-project compile, exit 0, line count down by exactly 1, grep-confirmed every fix's value unchanged.
- `.ai/` files updated: `COMPONENT_REGISTRY.md`, `KNOWN_DECISIONS.md`, `IMPROVEMENT_BACKLOG.md`, `AI_MEMORY.md`.
- Next batch (Owner-specified order): Modal, Tabs.

### Batch: Autonomous Design System Maintainer — Batch 5 (Tables, Pagination)
- Status: Completed. Tables ≈5.57/10, Pagination ≈6.0/10 — safest available fixes applied (dead-code removal + 10 exact-match token substitutions across `_table.scss`, plus 2 more icon-size migrations found on closer review).
- Important: caught and documented a token-naming trap — the numbered `$padding-N` Sass aliases don't equal `N` pixels (unlike `$gap-N`, which does). Verified every fix against real compiled output before applying, avoiding a possible silent value change.
- Files changed: `css/components/_table.scss`.
- Verification: isolated full-project compile, exit 0, line count down by exactly 2 as expected, grep-confirmed every fix's value unchanged.
- `.ai/` files updated: `COMPONENT_REGISTRY.md`, `KNOWN_DECISIONS.md`, `IMPROVEMENT_BACKLOG.md`, `AI_MEMORY.md`.
- Next batch (Owner-specified order): File Uploader, Person Card.

### Batch: Autonomous Design System Maintainer — Batch 4 (Alerts, Notifications)
- Status: Completed.
- `.moi-notification`: ≈8.79/10. One safe fix (`$padding-lg`→`$gap-lg` for 2 `gap:` declarations, same value).
- `.alert-*`/`.custom-*-alert` legacy system: ≈3.71/10, no fix — every color re-checked against the token scale, no exact match anywhere; documentation gap needs an Owner decision.
- Files changed: `css/components/_Notification.scss`.
- Verification: isolated full-project compile, exit 0, line count unchanged, grep-confirmed unchanged computed value.
- `.ai/` files updated: `COMPONENT_REGISTRY.md`, `KNOWN_DECISIONS.md`, `IMPROVEMENT_BACKLOG.md`, `AI_MEMORY.md`.
- Next batch (Owner-specified order): Tables, Pagination.

### Batch: Autonomous Design System Maintainer — Batch 3 (Inputs, Select, Dropdown)
- Status: Completed.
- Inputs: cross-checked `components.json`'s Input Field entry against `_form.scss`, fixed a real factual mismatch (focus-ring alpha 0.12→0.16).
- Select (vue-treeselect): ≈4.1/10, no fix (vendor override, postponement + vendor-code caution apply).
- Dropdown: ≈6.0/10, 2 safe token-reuse fixes + 1 dead-code removal in `_table.scss`'s `.ellipsistd .dropdown-menu`.
- Also fixed a duplicate declaration found in passing in `_common.scss`'s `.select2-*` rule.
- Files changed: `components.json`, `css/common/_common.scss`, `css/components/_table.scss`.
- Verification: isolated full-project compile, exit 0; compiled line count dropped by exactly 2, matching the 2 removed dead/duplicate lines; targeted grep confirmed all fixes compiled to unchanged values.
- `.ai/` files updated: `COMPONENT_REGISTRY.md`, `KNOWN_DECISIONS.md`, `IMPROVEMENT_BACKLOG.md`, `AI_MEMORY.md`.
- Next batch (Owner-specified order): Alerts, Notifications.

### Batch: Autonomous Design System Maintainer — Batch 2 (Cards, Forms)
- Status: Completed. No SCSS changes — both components already near-optimal; every candidate literal value re-verified against token scales and confirmed to have no exact match.
- Cards: ≈8.57/10. Forms (`_form.scss`): ≈8.64/10.
- Files changed: none.
- `.ai/` files updated: `COMPONENT_REGISTRY.md`, `KNOWN_DECISIONS.md`, `IMPROVEMENT_BACKLOG.md`, `AI_MEMORY.md`.
- Next batch (Owner-specified order): Inputs, Select, Dropdown.

### Batch: Autonomous Design System Maintainer — Batch 1 (Buttons, Tags)
- Status: Completed. Per explicit Owner instruction, this mode now runs in small 2–4-component batches (not a single continuous full-system sweep) — see Batch order in the Owner's instruction, recorded in `IMPROVEMENT_BACKLOG.md`.
- Buttons: scored ≈7.36/10 (Design System Consistency 8, SCSS Quality 7, Token Usage 6.5, Accessibility 8, Documentation 8, Maintainability 6, Reusability 8). One safe fix (`_buttonBase.scss` gap token). Two Needs-Owner-Approval findings logged, not implemented.
- Tags: scored ≈8.64/10 (Design System Consistency 9, SCSS Quality 9, Token Usage 8, Accessibility 9, Documentation 7.5, Maintainability 9, Reusability 9). Two safe fixes (`_tags.scss` gap + radius tokens). One Architecture Opportunity logged, not implemented. Postponement formally cancelled per Owner instruction.
- Reconciliation: found and documented that `_card.scss`'s legacy `@import` was already fixed to `@use` directly by the Owner outside this workspace — corrected 4 `.ai/` files that had referenced the old, now-resolved finding.
- Files changed: `css/common/_buttonBase.scss`, `css/common/_tags.scss`.
- Verification: isolated full-project compile, exit 0, targeted grep confirming both fixes compiled to unchanged values, no selector/API changes.
- `.ai/` files updated: all of them (`COMPONENT_REGISTRY.md`, `KNOWN_DECISIONS.md`, `IMPROVEMENT_BACKLOG.md`, `PROJECT_CONTEXT.md`, `CODING_STANDARDS.md`, `AI_MEMORY.md`, this file).
- Next batch (Owner-specified order): Cards, Forms.

### Task: Design System Icon Size Migration — `$moi-icon-sizes` as single source of truth (explicit, broad Owner request, not autonomous)
- Status: Completed
- Files: `css/components/_card.scss`, `css/components/_Notification.scss`, `css/components/_file-uploader.scss`, `css/common/_modal.scss`, `css/components/_stepper.scss`, `css/components/_table.scss` (all: literal icon-size values replaced with `map.get($moi-icon-sizes, ...)` references; each file also gained `@use "sass:map";` where not already present)
- Full component sweep performed: Buttons, Cards, Alerts/Notifications, Inputs, Select, Dropdown, Tabs, Stepper, Timeline, File Uploader, Person Card, Tables, Pagination, Modal, Switch, Tags, Radial Stepper, PersonCardInfra, vue-treeselect.
- Migrated (24px/20px/16px/1rem/1.5rem literals → map references, all verified to compile to the same value): Card icon (24px→lg, reverses the earlier narrower Card-only "leave unchanged" decision under the new "effectively identical" bar), Notification icon/btn svg (already-1.5rem literal→lg reference), File Uploader modal-icon svg (16px→sm), Modal `$modal-close-size` (already-1rem literal→sm reference), Stepper arrow-icon box + Complated wizerdImage svg (20px→md), Table row-action svg (24px→lg), Pagination page-link img height (24px→lg).
- Left unchanged with documented reasons: Notification close svg (12px, below smallest map entry), several File Uploader sizes (22/13/28/34-15/14/26px, no match), Stepper badge circles (34px/24px, not glyph icons), Table's page-specific search-bar icon (`.userManagmetStyle`, excluded per scope rule) and ambiguous `.moreStutus` badge, Buttons (already systematized via `var(--btn-icon-size)`), Switch thumb (UI control, not icon), vue-treeselect (non-square vendor arrows), Radial Stepper and Timeline (no eligible icon sizing found), Tags (governance conflict — see below), Person Card (naming-mismatch investigation, nothing eligible — see below).
- Notable finding: Person Card three-way naming mismatch (`.moi-person-card` in `_PersonCardInfra.scss` = genuine reusable component but no icon sizing to migrate; `.person__card` in `personcard.html` = documented but zero SCSS backing; `.newIms` in `_personCard.scss` = page-specific production code, excluded). Logged as Needs Owner Confirmation.
- Governance conflict flagged: task scope explicitly listed Tags as in-scope; standing Tags-cleanup postponement was treated as controlling instead — Tags left untouched. Logged as Needs Owner Confirmation.
- Verification: Full-project isolated sandbox compile (dart-sass 1.101.0) — exit 0, only the pre-existing `_card.scss` `@import` deprecation warning. Targeted grep of compiled CSS confirmed every migrated selector compiled to its intended `rem` value (e.g. `.moi-card__icon svg { width: 1.5rem; height: 1.5rem; }`, `.steps li::after { width: 1.25rem; height: 1.25rem; }`, modal close-button placeholder consumers still `width/height: 1rem`) and no selector text changed.
- Public API impact: None. `.ai/` files updated: `IMPROVEMENT_BACKLOG.md`, `KNOWN_DECISIONS.md`, `COMPONENT_REGISTRY.md`, `AI_MEMORY.md`.

### Task: Card icon sizing vs. official `$moi-icon-sizes` tokens (explicit Owner request)
- Status: Completed
- Files: `css/components/_card.scss` (comment updated only — the `24px` values themselves unchanged)
- Findings: `css/helpers/_icons.scss` defines the official icon-size system, `$moi-icon-sizes` (sm→4xl). `lg: 1.5rem` is documented as "~24px" (approximate, not exact) and only pixel-matches at the default 16px root font-size; being `rem`-based, substituting it would make the icon start scaling with root font-size/zoom, unlike today's fixed `24px`. Not a provably exact, no-op equivalent — left unchanged per the task's own fallback instruction.
- Verification: Compiled (exit 0, same pre-existing warning only); diffed against the prior verified-clean Card compile — 0-line diff, byte-identical.
- Public API impact: None. `.ai/` files updated: `IMPROVEMENT_BACKLOG.md`, `KNOWN_DECISIONS.md`, `COMPONENT_REGISTRY.md`.

### Task: Card (`.moi-card`) internal SCSS quality pass (explicit Owner request, not autonomous)
- Status: Completed
- Files: `css/components/_card.scss` (comments/organization only — zero declarations/selectors changed)
- Verification: Isolated before/after compile comparison — 0-line diff, compiled output byte-identical (24,643 lines both).
- Public API impact: None.
- Corrected an earlier finding: removing `_card.scss`'s legacy `@import` does NOT compile cleanly (empirically tested) — it breaks `@extend .bg-Neutral-50` and 3 other extends. `KNOWN_DECISIONS.md`/`IMPROVEMENT_BACKLOG.md` updated accordingly.
- Needs Owner Approval logged: replacing bare `label`/`span` in `&__content--block` with BEM classes (requires HTML change).
- `.ai/` files updated: `IMPROVEMENT_BACKLOG.md`, `KNOWN_DECISIONS.md`, `COMPONENT_REGISTRY.md`.

### Task: Cross-check `alert.html` vs SCSS; verify `components.json`; confirm `i18n-audit.json` purpose; investigate `_customClasses.scss` double-compilation
- Status: Completed (all investigation-only; one item — the `_card.scss` double-import fix — produced a written proposal but was correctly NOT implemented, a Mandatory Stop Condition)
- Key finding: `alert.html` documents `.moi-notification` (in `_Notification.scss`) as "Alerts" — a separate, undocumented, actively-used class family (`.alert-primary` etc. in `_common.scss`, used in 11 real pages) was not previously known to be unrelated to what's documented.
- Files read only; no source changed. `.ai/` files updated: `IMPROVEMENT_BACKLOG.md`, `KNOWN_DECISIONS.md`, `COMPONENT_REGISTRY.md`, `AI_MEMORY.md`.
- Public API impact: None. Remaining risk: None.
- Session stopped here: the one remaining Pending backlog item (deep documentation-vs-SCSS audit for Input Field, Badge/Priority Pill, Table, Modal, Dropdown doc pages) is large/open-ended rather than a single bounded task — left Pending for a future scoped session rather than run indefinitely in this one.

### Task: Review remaining component quality (Alert, Dropdown, Notifications, Table, Pagination, Modal, Tabs)
- Status: Completed (investigation only, read-only)
- Files read: `css/common/_common.scss`, `css/components/_Notification.scss`, `css/components/_table.scss`, `css/common/_modal.scss`, `css/components/_tabs.scss`, `css/components/_tabsDesign.scss`
- Evidence: See `COMPONENT_REGISTRY.md` entries for each component (all updated in place with real facts, replacing prior "Needs Owner Confirmation" placeholders where evidence was found).
- Verification: Read-only, no source changed — nothing to compile.
- Public API impact: None.
- Remaining risk: None.
- New Needs-Owner-Approval items surfaced: `.moi-notification` missing from `components.json`; `--theme-primary` custom property source unconfirmed. Logged in `IMPROVEMENT_BACKLOG.md` and `KNOWN_DECISIONS.md`.
- `.ai/` files updated: `IMPROVEMENT_BACKLOG.md`, `KNOWN_DECISIONS.md`, `COMPONENT_REGISTRY.md`.

### Task: Fix `buttons.html` documentation gaps for `.moi-btn--text` / `.moi-btn--text-icon`
- Status: Completed
- Files: `DesignSystemDocumentation/buttons.html`
- Evidence: Added States matrix row + Developer API code sample for `.moi-btn--text` (existing approved class, pattern copied from other variants). Labeled `.moi-btn--text-icon` "(legacy)"/"(قديم)" matching the existing `.moi-btn--black` legacy label.
- Verification: grep confirms both edits present exactly once each; `<div>`/`</div>` and `<button>`/`</button>` tag counts balanced (105/105, 90/90) after edit.
- Public API impact: None — no class added/removed/renamed, no recommendation changed.
- Remaining risk: None.
- `.ai/` files updated: `IMPROVEMENT_BACKLOG.md`, `KNOWN_DECISIONS.md`, `COMPONENT_REGISTRY.md`.

### Session: 2026-07-15/16 — Autonomous Safe Task Manager mission kickoff
- `TASK_MANAGER.md` created. Beginning autonomous loop per Task Selection Order.
