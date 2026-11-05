# PS-Design — Improvement Backlog

_Structured record of completed, pending, postponed, and blocked SCSS/documentation work. Do not auto-schedule implementation from the Pending section — every item still requires task-by-task Owner instruction._

---

## Completed

### Project-wide SCSS hardcoded-value token binding pass — exact matches only
- Description: Reviewed the requested SCSS scope for hardcoded spacing/radius/color/shadow values and replaced safe exact matches with existing SCSS variables only. No new tokens or variables were created.
- Status: Completed
- Priority: High (explicit Owner request)
- Scope reviewed: 94 SCSS files under `css/helpers/`, `css/common/`, `css/components/`, `css/pages/`, `css/login/`, and `css/_customClasses.scss`, excluding the explicitly forbidden `_tags.scss` and `_vue-treeselect.scss`.
- Files changed: 32 SCSS files (`css/common/_common.scss`, `css/common/_layout.scss`, `css/login/_ResetPassword.scss`, `css/login/_login.scss`, `css/components/_Accedentsketch.scss`, `css/components/_hearing.scss`, `css/components/_homeStatistics.scss`, `css/components/_mapDesign.scss`, and 24 page SCSS files).
- Values linked: 308 declaration value components were replaced with existing variables/tokens; all were exact-value substitutions from the correct semantic family.
- Exact matches: 308.
- Nearest-variable substitutions: 0. The project rules in `.ai/ARCHITECTURE_RULES.md` and `.ai/CODING_STANDARDS.md` forbid approximation, so no near-match value was applied.
- Left unchanged: values with no exact same-family token (`5px`, `10px` padding/margin/position values, `14px` padding, many one-off heights/widths, unmatched raw colors/shadows), values inside comments, Date Picker/vendor-sensitive values, Person Card/newIms-related styling, Radio API-related styling, `$Info-25`/`$Info-50`, Tags, and `_vue-treeselect.scss`.
- Verification: full `sass css/main.scss` compile succeeded. Baseline vs final compiled CSS: 22,297 lines before and after; selectors before/after stayed at 3,614; 0 selectors added; 0 selectors removed. Compiled textual diff was limited to 40 value-only hunks (45 removed lines / 45 added lines), caused by literal color names/hex values compiling differently after token binding; no selector/API movement.
- Public API impact: None — no class, selector, BEM modifier, data attribute, map, mixin, or variable was added/renamed/removed.
- Explicitly untouched: `css/common/_tags.scss`, `css/common/_vue-treeselect.scss`, Person Card implementation files, generated CSS, source maps, JavaScript, HTML.
- Git: no Git command of any kind was used.

### Add `moi-btn--text` to the current button system
- Description: Ported the documented `.moi-btn--text` variant from legacy `_oldButtons.scss` into `_buttons.scss`, preserving all states and exact values.
- Status: Completed
- Priority: High (documentation/implementation mismatch)
- Scope: `css/common/_buttons.scss`
- Dependencies: None
- Public API impact: None (existing documented class, previously unimplemented in current system; legacy copy still present)
- Risk: Low
- Evidence: Compiled diff was purely additive; byte-identical values to legacy version.
- Notes: Legacy copy in `_oldButtons.scss` intentionally not removed yet, pending visual QA sign-off.

### Centralize `$moi-btn-sizes`
- Description: Removed the duplicate Sass map from `_oldButtons.scss`; it now consumes the single map already exposed by `_buttons.scss`.
- Status: Completed
- Priority: Medium
- Scope: `css/common/_oldButtons.scss`
- Dependencies: None
- Public API impact: None
- Risk: None
- Evidence: Compiled output diff was exactly 0 lines (100% lossless).

### Centralize shared Checkbox styling
- Description: Moved `.form-check-input` / `.form-check-label` rules from `_common.scss` into a new `css/common/_checkbox.scss`, registered in `css/_common.scss`.
- Status: Completed
- Priority: Medium
- Scope: `css/common/_common.scss`, `css/common/_checkbox.scss` (new), `css/_common.scss`
- Dependencies: None
- Public API impact: None (no class renamed, removed, or added)
- Risk: Low
- Evidence: Sorted compile diff showed the move was lossless (0 lines removed for the moved rules).

### Revert unapproved `.moi-radio-group`
- Description: A Radio centralization attempt introduced a new wrapper class (`.moi-radio-group`). Once Public API Protection Rules were established, this was identified as a violation and reverted.
- Status: Completed
- Priority: High (correctness/governance)
- Scope: `css/common/_checkbox.scss`
- Dependencies: None
- Public API impact: None remaining (the new class no longer exists in the codebase)
- Risk: None
- Evidence: Post-revert sorted diff confirmed only `.moi-radio-group`-related lines were removed; nothing else in the ~24,600-line compiled stylesheet changed.

### Update `components.json`
- Description: Added 6 previously-undocumented-in-catalog components (Card, File Uploader, Stepper, Switch, Person Card, Tags) with purpose/SCSS file/doc page/anatomy/variants/RTL/accessibility notes. Removed "Card" from `missingComponents` (now documented); kept "Chip".
- Status: Completed
- Priority: Medium
- Scope: `components.json`
- Dependencies: None
- Public API impact: None (documentation of existing implementations only, no new SCSS classes created)
- Risk: Low
- Evidence: JSON validated programmatically; 15 components + 1 missing entry confirmed.
- Notes: Introduced a known schema inconsistency vs. the original 9 entries — see `KNOWN_DECISIONS.md`.

### Remove two verified duplicate utility rules
- Description: Removed a non-`!important` duplicate of `.radius-none` and a byte-identical duplicate of `.border-Lavender-25` from `_customClasses.scss`; both were provably dead due to CSS cascade/`!important` rules or exact duplication.
- Status: Completed
- Priority: Low
- Scope: `css/_customClasses.scss`
- Dependencies: None
- Public API impact: None (both removed rules were non-functional duplicates, not the canonical/active declaration)
- Risk: None
- Evidence: Full-project sorted diff confirmed these were the only 2 dead-code blocks removed anywhere in the compiled output.

### Complete safe SCSS compilation and diff verification
- Description: Established a baseline-compile + post-change-compile + diff methodology (dart-sass CLI in an isolated sandbox) used to verify every change above.
- Status: Completed
- Priority: High (process/verification)
- Scope: Verification tooling only, no project files
- Dependencies: None
- Public API impact: None
- Risk: None
- Evidence: Final compile exit 0, only the pre-existing `_card.scss` deprecation warning, full-project sorted diff showing exclusively the intended changes.

### Add missing States row + code sample for `.moi-btn--text`, and label `.moi-btn--text-icon` as legacy
- Description: Two documentation-completeness fixes in `DesignSystemDocumentation/buttons.html`, both authorized under the Autonomous Safe Task Manager's documentation rules (existing approved API, confirmed SCSS, adds coverage/clarity, no new API, no recommendation change): (1) added a "Text" row to the live States visual matrix and a dedicated "Text Button" code sample in the Developer API section, matching every other variant's documentation pattern; (2) labeled `.moi-btn--text-icon` as "(legacy)" / "(قديم)" in the Accessibility/usage guidance, since it is confirmed to exist only in `_oldButtons.scss`, the same way `.moi-btn--black` is already labeled legacy.
- Status: Completed
- Priority: High (closes gaps found in the prior investigation)
- Scope: `DesignSystemDocumentation/buttons.html` only (documentation, no SCSS touched)
- Dependencies: Builds on the earlier `buttons.html` investigation
- Public API impact: None — `.moi-btn--text` was already approved/implemented; `.moi-btn--text-icon` was already legacy; no class, markup pattern, or recommendation changed, only completeness/clarity added.
- Risk: None — purely additive HTML, verified via tag-balance check (`<div>`/`</div>` and `<button>`/`</button>` counts unchanged in delta, i.e. still balanced) and a direct grep confirming both edits landed as intended.
- Evidence: `.moi-btn--text` code sample uses the exact same markup pattern (`btn moi-btn moi-btn--text`) already proven correct earlier in the same file's "Full HTML reference" section; the States row reuses the identical live-button pattern used for Neutral/Lavender/Warning/Info/Error.
- Notes: The legacy copy of `.moi-btn--text-icon` in `_oldButtons.scss` itself was not touched — only the documentation label changed. Migrating `--text-icon` into the current `_buttons.scss` (option "a" from the prior investigation) remains a separate, un-taken option — it would be a SCSS/architecture change, not a documentation clarity fix, so it still requires explicit Owner approval if desired.

### Review remaining component quality (Alert, Dropdown, Notifications, Table, Pagination, Modal, Tabs)
- Description: Read-only deep-dive into the SCSS source of Alert, Dropdown, Notifications, Table, Pagination, Modal, and Tabs (Select/vue-treeselect already had baseline coverage). No files changed — findings recorded directly in `COMPONENT_REGISTRY.md`.
- Status: Completed (investigation only)
- Priority: Medium
- Scope: Read-only — `css/common/_common.scss` (Alert/Dropdown sections), `css/components/_Notification.scss`, `css/components/_table.scss`, `css/common/_modal.scss`, `css/components/_tabs.scss`, `css/components/_tabsDesign.scss`
- Dependencies: None
- Public API impact: None (no changes made)
- Risk: None
- Evidence / Key findings:
  - Alert and Dropdown are thin color/icon overrides on top of native Bootstrap components — no custom `.moi-` BEM structure exists for either.
  - Notifications (`.moi-notification`) is a real, well-built, `data-status`-driven BEM component with 5 status variants and its own button-state mixin — but has **no `components.json` entry and no dedicated documentation page**. Not added automatically (would be a new catalog entry, treated the same as a new-API-adjacent decision, not a pure clarity fix) — flagged as a candidate for a future, explicitly-approved documentation pass.
  - Tables/Pagination confirmed as page-oriented utility collections (search bar, skeleton loader, empty state, pagination controls) rather than a single cohesive BEM component. Found that `.moi-btn--text-icon` (the legacy-only button variant) is actively relied on in at least 3 places here — added as supporting evidence to the existing `.moi-btn--text-icon` migration decision.
  - Pagination's active-state color uses a `--theme-primary` CSS custom property whose definition source wasn't located in `css/helpers/_variables.scss` — logged as Needs Owner Confirmation.
  - Modal confirmed to have 3 header color variants (info/danger/neutral) and one unrelated, co-located page rule (`#IframeViewer`) that isn't part of the Modal API itself.
  - Tabs: confirmed the two files (`_tabs.scss`, `_tabsDesign.scss`) are **not** overlapping or duplicate — they are two distinct, page-scoped visual skins over Bootstrap's native tabs. Resolves the earlier "possible overlap not investigated" note with no action needed.
- Notes: `COMPONENT_REGISTRY.md` updated in place for all 7 components reviewed.

### Verify `components.json` entries for continued accuracy
- Description: Confirmed every `scssFile`/`documentationPage` path referenced in the 6 flat-schema entries (Card, File Uploader, Stepper, Switch, Person Card, Tags) actually exists on disk. The original 9 token-reference-schema entries don't reference file paths directly, so there was nothing file-based to check for those.
- Status: Completed (investigation only)
- Priority: Medium
- Scope: Read-only — `components.json`, filesystem existence checks
- Dependencies: None
- Public API impact: None
- Risk: None
- Evidence / Findings: All referenced files exist. One minor schema-quality note: the "Person Card" entry's `scssFile` field is a single comma-joined string (`"css/components/_personCard.scss, css/components/_PersonCardInfra.scss"`) rather than a JSON array, unlike how a cleaner catalog would represent two files. Both individual paths are valid and were previously verified to exist. Not fixed — changing the field's type is a (small) schema change and, per `KNOWN_DECISIONS.md`, no `components.json` schema changes happen without Owner approval, even minor ones.
- Notes: Logged as a minor, low-priority item — does not block anything.

### Confirm the purpose of `DesignSystemDocumentation/i18n-audit.json`
- Description: Read the file directly.
- Status: Completed (investigation only)
- Priority: Low
- Scope: Read-only — `DesignSystemDocumentation/i18n-audit.json`
- Dependencies: None
- Public API impact: None
- Risk: None
- Evidence / Findings: It's a generated i18n-coverage audit report, one entry per `DesignSystemDocumentation/*.html` page, recording: whether the page has the shared top-actions script wired in (`hasCentralJS`), whether it has a language toggle and scroll-to-top control, a count of `data-i18n`-marked nodes, and counts of nodes missing `data-ar`/`data-en` attributes. Every page shows `missingDataArCount: 0` (Arabic coverage complete by this metric); `missingDataEnCount` is high on every page. Not investigated further — how `missingDataEnCount` should be interpreted (e.g. whether it's expected, since pages appear to default to English text content directly rather than a `data-en` attribute) is a judgment call outside a read-only purpose-confirmation task.
- Notes: Purely descriptive finding — no action taken or recommended.

### `_customClasses.scss` double-compilation — resolved by the Owner directly
- Description: The Owner changed `css/components/_card.scss`'s legacy `@import "../customclasses";` to `@use "../customclasses";` directly (outside any AI session's edits — detected during the Batch 1 Autonomous Maintainer pass on 2026-07-16, evidenced by the file's current content and modification timestamp).
- Status: Completed (by the Owner, not this AI workspace — logged here for accuracy since `.ai/` must reflect real SCSS state)
- Verification performed by this AI session: isolated sandbox compile, exit 0, no deprecation warning; confirmed all 4 `@extend` calls in `&__content--block` still resolve (`.bg-Neutral-50`, `.border-Neutral-100`, `.radius-sm`, `.padding-md` all correctly extended in compiled output); full-project compiled line count dropped from ~24,645 to ~24,272 (the duplicate `_customClasses.scss` block is gone), with no other unexplained differences.
- Supersedes the earlier "cannot simply be deleted" finding from the Card internal-quality pass — that finding was correct for the file's state at the time, not for the current file.

### Investigate `_customClasses.scss` double-compilation and propose a fix (historical — see resolution above)
- Description: Confirmed the root cause: `css/components/_card.scss` line 2 contains a legacy `@import "../customclasses";`, which inlines the entire `_customClasses.scss` file (1,638 lines) at that point in the compile chain — early, inside the "components" aggregator. Separately, `css/main.scss`'s own final line `@use "./customClasses";` pulls the same file in again, later. Result: every rule in `_customClasses.scss` compiles twice into `css/main.css`.
- Status: Completed (investigation + proposal only — no fix implemented)
- Priority: Medium
- Scope: Read-only — `css/components/_card.scss`, `css/main.scss`
- Dependencies: None
- Public API impact: None (no change made)
- Risk of the investigation itself: None
- Proposed fix (for Owner decision, not implemented): Remove line 2 (`@import "../customclasses";`) from `_card.scss`, relying solely on the existing `@use "./customClasses";` in `main.scss`. Since Sass `@use` only ever includes a file once regardless of how many places reference it, and the duplicated rules are byte-identical, removing the redundant `@import` should not change any element's final rendered styling.
- Why not implemented autonomously: this is explicitly a **Mandatory Stop Condition** under this mission's rules — it is a "global CSS-order change" and would shrink the compiled `css/main.css` by roughly 1,600 lines (an entire duplicated block disappearing), which is a large compiled-output change even though the visual result should be identical. That combination (order change + large diff) requires Owner sign-off and a visual-QA pass before being applied, per `ARCHITECTURE_RULES.md`'s "prefer the solution with the lowest production risk" and this mission's stop-condition rules, not a judgment this loop is authorized to make alone.
- Recommended option: Approve the removal, verified afterward with the same baseline-vs-final full-project diff methodology used for the earlier SCSS Improvement Phase (should show zero visual/selector differences, only the duplicate block disappearing).

### Card icon sizing vs. official `$moi-icon-sizes` token system
- **Superseded by the "Design System Icon Size Migration" entry below** — the "leave unchanged" decision here used a stricter "exact equivalent" bar; the later, broader task set an explicit, more permissive "effectively identical" bar and reversed this specific call. Kept below for history/evidence, not as the current state of `_card.scss`.
- Description: Reviewed `css/helpers/_icons.scss` to identify the Design System's official icon-size tokens, then checked whether `css/components/_card.scss`'s hardcoded `24px` icon dimensions have an exact equivalent there.
- Status: Completed
- Priority: Medium
- Scope: `css/components/_card.scss` (comment updated only — no declaration/value changed)
- Dependencies: Builds on the earlier Card internal-quality pass
- Public API impact: None
- Risk: None
- Evidence / Findings: `css/helpers/_icons.scss` defines `$moi-icon-sizes: (sm: 1rem, md: 1.25rem, lg: 1.5rem, xl: 2rem, 2xl: 2.5rem, 3xl: 3rem, 4xl: 4rem)`, each consumed via `.icon-{name}` utility classes (`width`/`height` set from the map). The `lg` entry is annotated `// ~24px` in its own source comment — note the "~" (approximate), not an exact-equals claim. `1.5rem` only equals `24px` under the browser's default, unmodified 16px root font-size; no explicit `html { font-size: 16px }` reset was found anywhere in this project's own SCSS (relies on browser default). Concluded this is **not a provably exact equivalent**: swapping `24px` for `map.get($moi-icon-sizes, lg)` would compile to `1.5rem` (not byte-identical text), and — more importantly — would make the Card icon start scaling with the user's root font-size/browser zoom, where today it renders at a fixed 24px regardless of those settings. That is a real behavior difference under non-default conditions, not a pure no-op substitution.
- Decision: Left `24px` unchanged in both places (`&__icon` wrapper and its `svg`), per the task's own "if no exact equivalent exists, leave unchanged and report why" instruction. Updated the in-file comment (added during the earlier Card pass) to document this specific, deeper finding instead of leaving the previous, less complete token note.
- Verification: Compiled `main.scss` (exit 0, same pre-existing `_card.scss` `@import` warning only) and diffed the result against the previously-verified-clean Card compile from the prior task — **0-line diff, byte-identical.**

### Card (`.moi-card`) internal SCSS quality pass
- Description: Improved internal SCSS quality of `css/components/_card.scss` without touching public API, HTML, class names, BEM, data attributes, visual appearance, RTL, responsive behavior, or component behavior. Work covered all 9 requested review areas:
  1. **Duplication:** reviewed status variants, flex declarations, and color rules for safe merging. Concluded no safe consolidation exists — every candidate merge would require introducing a new combined selector into the compiled CSS (e.g. grouping `&__header, &__title-group { display: flex; }`), which changes the compiled output text even though final styles would match. Left unchanged rather than risk it.
  2. **Readability:** added section comments (Root, Status Variants, Header, Body, Content, Actions, Footer, Details, Responsive) — comments only, stripped entirely by Sass, zero compiled-output impact.
  3. **Tokens:** reviewed every hardcoded value. `24px` (icon size) numerically matches several spacing/radius tokens ($padding-3xl, $margin-3xl, $gap-24, $gap-3xl, $radius-3xl) but none represent a sizing concept — using one would be a semantic mismatch, not a genuine match, so left literal. `120px` (detail-item min-height) and `991.98px`/`767.98px` (responsive breakpoints) have no matching token in `css/helpers/_variables.scss` — left literal. No token replacements made.
  4. **Extends:** confirmed `.bg-Neutral-50`, `.border-Neutral-100` (`_customClasses.scss`), `.radius-sm`, `.padding-md` (`_spacing.scss`) are real, intentional, existing utility classes — not removed, documented in place.
  5. **`@import "../customclasses";`:** investigated and empirically tested (in an isolated sandbox copy, never touching the real project) — **not removed or replaced**, per instruction. See dedicated finding below.
  6. **Status variants (create/edit/details):** reviewed for duplication reduction — each variant's color values differ, so the 3 blocks aren't safely mergeable without a compiled-output change; left as 3 separate blocks with a comment explaining why.
  7. **Icon section:** 24px sizes left unchanged (already matches design intent); wrapper and inner `<svg>` both need their own explicit width/height — merging via `width: inherit` would change the declared value even though rendered result is identical today, so left unchanged.
  8. **Detail layout (`__detail-column`/`__detail-item`):** reviewed, comments added, no Flexbox→Grid change, no layout redesign.
  9. **Labels (`label`/`span` inside `&__content--block`):** confirmed replacing with component-specific classes would require an HTML change — not implemented, recorded below as Needs Owner Approval.
- Status: Completed
- Priority: Medium
- Scope: `css/components/_card.scss` (comments/documentation only — zero declarations or selectors changed)
- Dependencies: None
- Public API impact: **None.** No class created, renamed, or removed; no selector added or removed; no markup, data attribute, or BEM change.
- Risk: None
- Evidence / Verification: Compiled `css/main.scss` successfully (exit 0, only the pre-existing `_card.scss` `@import` deprecation warning). Built an isolated before/after comparison (original `_card.scss` vs. the commented version, both compiled from otherwise-identical scratch copies of `css/`) — **the resulting compiled CSS is byte-for-byte identical, 0-line diff, both 24,643 lines.** No selector added, none removed, no public API changed, RTL/responsive/visual output unaffected (impossible for them to change since no declaration changed).
- Important finding (corrects an earlier session's proposal): empirically confirmed via the same isolated-sandbox method that removing the `@import "../customclasses";` line — previously proposed as a "visually lossless" fix for the double-compilation issue — actually **breaks the build** with a hard Sass compile error, because `&__content--block`'s 4 `@extend` calls only resolve through this import (the file never `@use`s `customClasses` directly). `KNOWN_DECISIONS.md` corrected accordingly. The import was left completely untouched in the real file, exactly as instructed.
- Needs Owner Approval (recorded, not implemented): replace the bare `label`/`span` selectors inside `&__content--block` with component-specific classes (e.g. `.moi-card__content-label`, `.moi-card__content-value`) for better BEM consistency — requires an HTML markup change in every place `.moi-card__content--block` is used, so it's a public-API-adjacent change outside this pass's scope.

### Cross-check `alert.html` against SCSS (Alert vs. Notification)
- Description: Compared `DesignSystemDocumentation/alert.html` against both alert-related SCSS sources found in the earlier component-quality pass.
- Status: Completed (investigation only)
- Priority: High (real documentation-accuracy finding)
- Scope: Read-only — `DesignSystemDocumentation/alert.html`, `css/components/_Notification.scss`, `css/common/_common.scss`, plus a grep across root-level/product HTML for real-world usage evidence
- Dependencies: None
- Public API impact: None (no changes made)
- Risk: None
- Evidence / Findings: `alert.html` exclusively documents `.moi-notification` + `data-status` as "the" Alerts component — confirmed the page explicitly instructs not to add status classes manually and never mentions `.alert-primary`/`.alert-danger`/`.custom-alert-primary`/`.custom-danger-alert`. Those four classes are a completely separate, undocumented system in `_common.scss`, confirmed via grep to be actively used across 11 real product pages (`Cases/`, `ArrestedPersons/`, `UserManagement/`, `ResetPassword/`, `hearingReport/`, `violition.html`, `freehand.html`, `user-authentication/`, etc.) — not dead code. Also: the documented component is named "Alerts" but its SCSS file/class is named `_Notification.scss`/`.moi-notification` — a naming mismatch between documentation and implementation.
- Notes: `COMPONENT_REGISTRY.md`'s Alerts/Notifications entries rewritten to describe both systems accurately instead of treating them as one. No SCSS or documentation changed — this is purely a finding for Owner awareness, logged below.

### Verify `buttons.html` documentation accuracy post `moi-btn--text` migration
- Description: Cross-referenced `DesignSystemDocumentation/buttons.html` against `css/common/_buttons.scss` and `css/common/_oldButtons.scss`. Investigation only — no files modified.
- Status: Completed (investigation only)
- Priority: High (direct follow-up to the last approved change)
- Scope: Read-only — `DesignSystemDocumentation/buttons.html`, `css/common/_buttons.scss`, `css/common/_oldButtons.scss`
- Dependencies: None
- Public API impact: None (no changes made)
- Risk: None
- Evidence / Findings:
  - `.moi-btn--text` is accurately listed in the Core Variants table and has a working code sample in the "Full HTML reference" section — matches the current SCSS implementation exactly. Confirms the P1 migration is correctly reflected in documentation.
  - `.moi-btn--black` is correctly labeled "(Legacy)" in the docs and is genuinely sourced only from `_oldButtons.scss` — accurate.
  - The documented `.btn:disabled` styling description matches `css/common/_buttonBase.scss` exactly — accurate.
  - Gap found: `.moi-btn--text` has no row in the live "States" visual matrix and no dedicated "Developer API" code-block example, unlike every other variant (Primary, Neutral, Lavender, Warning, Info, Error all have both). Not inaccurate, just incomplete.
  - Discrepancy found: the Accessibility guidance section recommends `.moi-btn--text-icon` alongside `.moi-btn--text` for low-emphasis actions, but `.moi-btn--text-icon` is only implemented in the legacy `_oldButtons.scss` — it was not part of the P1 migration into the current button system. It still works (both files compile into the same CSS), but the guidance doesn't flag it as legacy the way `.moi-btn--black` is flagged.
  - Minor observation: the "Full HTML reference" section includes `.moi-btn--primary` / `.moi-btn--primary--outline` (lowercase) alongside `.moi-btn--Primary` (capitalized). Both are real, distinct, working classes (lowercase confirmed as legacy in `_oldButtons.scss`, commented "// legacy buttons styles"), so this is not inaccurate — but unlike `.moi-btn--black`, the lowercase variants aren't labeled "(legacy)", which could confuse a developer scanning the reference.
- Notes: No fix applied. Both real findings (missing states/example for `--text`, and the `--text-icon` guidance pointing at a legacy-only class) are logged below as Needs Owner Approval before any edit to this documentation file, per `ARCHITECTURE_RULES.md`'s treatment of documentation as part of the public API.

### Design System Icon Size Migration — `$moi-icon-sizes` as single source of truth (project-wide)
- Description: Explicit, project-wide Owner instruction to review all reusable components and replace hardcoded icon-glyph dimensions with `map.get($moi-icon-sizes, ...)` references wherever a confirmed, exact-value Design System icon size exists — under a deliberately more permissive "visually effectively identical" acceptance bar (not byte-identical), reversing the earlier narrower Card-only "exact equivalent" bar for this specific pass.
- Status: Completed
- Priority: High (explicit, broad Owner request)
- Scope: `css/components/_card.scss`, `css/components/_Notification.scss`, `css/components/_file-uploader.scss`, `css/common/_modal.scss`, `css/components/_stepper.scss`, `css/components/_table.scss` — all other reusable components reviewed, most left unchanged (see findings)
- Dependencies: `css/helpers/_icons.scss` (`$moi-icon-sizes` map, unchanged), builds on and reverses part of the earlier narrow Card-only icon pass
- Public API impact: None — no class, selector, data attribute, or markup added/removed/renamed anywhere; every edit is a same-computed-value substitution (`Npx` literal → `map.get($moi-icon-sizes, x)`, compiling to the equivalent `rem` value) or, for `_Notification.scss`/`_modal.scss`, a same-unit rem-literal → map-reference swap with zero value change.
- Risk: Low — all edits are value-substitution only inside existing declarations; verified via full-project isolated compile (exit 0, only the pre-existing `_card.scss` `@import` deprecation warning) and targeted grep of the compiled CSS confirming every touched selector compiled to the intended value.
- Migrated (per-component, all verified compiled to the expected value):
  - **Card** (`_card.scss`): `&__icon` / `&__icon svg` — 24px → `lg` (1.5rem). Reverses the earlier narrower "leave unchanged" decision under the new bar; corroborated by Notification already using the same 1.5rem value for an equivalent icon concept.
  - **Notifications** (`_Notification.scss`): `&__icon svg`, `&__btn svg` — already-`1.5rem` literals → `lg` reference (zero value change, pure token-reference swap).
  - **File Uploader** (`_file-uploader.scss`): `&__modal-icon svg` — 16px → `sm` (1rem). The 36px wrapper (`&__modal-icon`) itself has no map match and was left unchanged.
  - **Modal** (`_modal.scss`): `$modal-close-size` — already-`1rem` literal → `sm` reference (zero value change).
  - **Stepper** (`_stepper.scss`): `.steps li::after` background-icon box and `.wizerd__item--Complated .wizerdImage svg` — both 20px → `md` (1.25rem).
  - **Table/Pagination** (`_table.scss`): `.tablecontainer .table ... .moi-btn--text-icon svg` — 24px → `lg`; `.paginationContainer ul.pagination .page-link img` height — 24px → `lg` (width was not explicitly set, left as-is).
- Left unchanged (no exact `$moi-icon-sizes` match, or excluded for other documented reasons — see `KNOWN_DECISIONS.md` for full list): Notification's `&__close svg` (12px, below the map's smallest entry); several File Uploader icon sizes (22px/13px/28px/34px-15px/14px/26px, none match); Stepper's `.wizerdImage` badge (34px, avatar/badge not a glyph) and `.stepsNumber span` (24px, ambiguous counter badge); Table's `.userManagmetStyle--table-search` icon (24px, matches `lg` but page/module-specific, excluded per scope rule) and `.moreStutus` (24px, ambiguous, not confirmed as an SVG icon); Buttons (`css/common/_buttons.scss`, already systematized via `var(--btn-icon-size, ...)` tied to `$moi-btn-sizes`); Switch (`$form-sw-thumb`, a UI-control dimension, not an icon); vue-treeselect vendor arrows (non-square, cannot map); Radial Stepper and Timeline (no confirmed reusable icon-svg sizing found); Tags (explicitly postponed, see below); Person Card (naming-mismatch investigation found nothing eligible — see below).
- Notable investigation finding (not a code change): **Person Card three-way naming mismatch.** `.moi-person-card` (`_PersonCardInfra.scss`, proper BEM, documented by its own `moi-person-card.html` page) is the only confirmed genuine reusable Person Card component, but has no explicit icon width/height to migrate (`svg { flex-shrink: 0; }` only). `.person__card` (documented in `personcard.html`, 33 occurrences) has zero SCSS implementation anywhere in the project. `.newIms`-prefixed selectors in `_personCard.scss` (including its two `24px` svg blocks) are confirmed via grep to be actively used across real production pages (`index.html`, `Inquiry/`, `Cases/`, `dashboard/`, etc.) — page/feature-specific, correctly excluded from this migration. Logged in `KNOWN_DECISIONS.md` as needing Owner confirmation on which implementation is canonical.
- Governance conflict flagged, not resolved: this task's scope explicitly lists Tags as in-scope, but Tags icon sizing (`.tag-close svg` etc.) was left untouched, honoring the standing "Tags component cleanup" Postponed decision. Logged in `KNOWN_DECISIONS.md` for explicit Owner confirmation.
- Evidence: Full-project isolated sandbox compile (dart-sass 1.101.0), exit 0, only the pre-existing `_card.scss` `@import` deprecation warning; grep of the compiled CSS output confirmed every migrated selector compiled to its intended `rem` value and every left-unchanged value remained literal.

### Autonomous Design System Maintainer — Batch 1 (Buttons, Tags)
- Description: First batch of the new standing Autonomous Design System Maintainer Mode. Scored Buttons and Tags against the 7-dimension rubric, implemented safe low-risk token-reuse fixes, logged everything else as a documented finding.
- Status: Completed
- Priority: High (explicit Owner mode)
- Scope: `css/common/_buttonBase.scss`, `css/common/_tags.scss`
- Public API impact: None — no selector/class/HTML/data-attribute change; both edits are exact-value token substitutions inside existing declarations.
- Buttons (score ≈7.36/10): applied `gap: 8px` → `gap: $gap-md` in `_buttonBase.scss`. Logged 2 Needs-Owner-Approval findings in `_oldButtons.scss` (duplicate mixins/`:root`, and 30+ untokenized legacy color variants) — not implemented, see `KNOWN_DECISIONS.md`.
- Tags (score ≈8.64/10): applied `$moi-tag-gap.default` (8px→`$gap-md`) and `$moi-tag-remove-sizes.radius` (2px→`$radius-xxs`) in `_tags.scss`. Logged 1 Architecture Opportunity (`$moi-tag-control-sizes` duplicates `$moi-icon-sizes`' values) — not implemented, see `KNOWN_DECISIONS.md`.
- Also resolved during this batch (not new work, a reconciliation): discovered and documented that the Owner directly fixed `_card.scss`'s legacy `@import`/double-compilation issue outside this AI workspace — see the dedicated entry above and `KNOWN_DECISIONS.md`.
- Verification: Full-project isolated sandbox compile, exit 0, no errors; grepped compiled CSS to confirm both Buttons and Tags fixes compiled to their unchanged intended values (`gap: 8px;`, `border-radius: 2px;`) with no selector changes.
- `.ai/` files updated: `COMPONENT_REGISTRY.md` (scores + findings for Buttons/Tags, Cards `@import` correction), `KNOWN_DECISIONS.md`, `PROJECT_CONTEXT.md`, `CODING_STANDARDS.md`, `TASK_MANAGER.md`, `AI_MEMORY.md`.
- Next recommended batch (per Owner's stated priority order): Cards, Forms.

### Autonomous Design System Maintainer — Batch 2 (Cards, Forms)
- Description: Second batch of the standing Autonomous Design System Maintainer Mode. Scored Cards and Forms (`_form.scss`) against the 7-dimension rubric.
- Status: Completed
- Priority: High (explicit Owner mode)
- Scope: Read-only for this batch — no SCSS changes made.
- Cards (score ≈8.57/10): no safe changes found; already optimized across 3 prior passes plus the Owner's own recent `@import` fix. Its 2 remaining literal values re-verified as genuinely tokenless.
- Forms (score ≈8.64/10): no safe changes found; the file's own extensive "DS token gaps" documentation was spot-checked and confirmed accurate. One informational architecture note logged (page-specific mixins bundled in a shared file) — not implemented.
- Verification: No compiled-output verification needed (no SCSS edited this batch); documentation/token claims verified by direct comparison against `css/helpers/_variables.scss` and `css/helpers/_mixins.scss`'s `$font-sizes` map.
- `.ai/` files updated: `COMPONENT_REGISTRY.md`, `KNOWN_DECISIONS.md`, `TASK_MANAGER.md`, `AI_MEMORY.md`.
- Next recommended batch (Owner-specified order): Inputs, Select, Dropdown.

### Autonomous Design System Maintainer — Batch 3 (Inputs, Select, Dropdown)
- Description: Third batch. Cross-checked Input Field documentation, scored Select (vue-treeselect) and Dropdown, applied safe fixes.
- Status: Completed
- Priority: High (explicit Owner mode)
- Scope: `components.json`, `css/common/_common.scss`, `css/components/_table.scss`
- Public API impact: None — one documentation value correction (not a schema/API change), plus token-reuse and dead-code-removal SCSS edits, all zero visual/computed-style change.
- Fixes applied:
  - `components.json`: corrected Input Field's documented focus-ring alpha from `0.12` to the real SCSS value `0.16`.
  - `_common.scss`: removed a byte-identical duplicate `font-weight: 500;` in `.select2-container--default .select2-selection--single`.
  - `_table.scss`: `.ellipsistd .dropdown-menu` border-radius (8px→`$radius-md`) and `.dropdown-item` margin-bottom (4px→`$margin-xs`) token-reuse; removed one provably dead `border-radius: 5px;` declaration (always overridden later in the same rule).
- Select (vue-treeselect) scored ≈4.1/10 — no fix implemented; it's vendor-plugin override styling, covered by the standing broad-token-migration postponement and vendor-code caution. Logged 2 dead comment blocks as a Needs-Owner-Approval candidate.
- Dropdown scored ≈6.0/10 — safest available fixes applied (see above); ~10 page-specific dropdown skins in `_layout.scss` correctly left untouched.
- New Architecture Opportunity logged: no project-wide token scale exists for control/element heights (affects Forms, Tags, Cards so far) — see `COMPONENT_REGISTRY.md`.
- Verification: Full-project isolated sandbox compile, exit 0, no errors; compiled line count dropped by exactly 2 (matching the 2 removed dead/duplicate declaration lines); grepped compiled CSS to confirm every fix produced the unchanged intended value with no selector changes; `components.json` re-validated as parseable JSON after the edit.
- `.ai/` files updated: `COMPONENT_REGISTRY.md`, `KNOWN_DECISIONS.md`, `TASK_MANAGER.md`, `AI_MEMORY.md`.
- Next recommended batch (Owner-specified order): Alerts, Notifications.

### Autonomous Design System Maintainer — Batch 4 (Alerts, Notifications)
- Description: Fourth batch. Scored both alert-related systems (`.moi-notification` and the separate `.alert-*`/`.custom-*-alert` legacy system) against the 7-dimension rubric.
- Status: Completed
- Priority: High (explicit Owner mode)
- Scope: `css/components/_Notification.scss`
- Public API impact: None — one token-reuse edit, same computed value.
- `.moi-notification` (score ≈8.79/10): reused `$gap-lg` instead of `$padding-lg` for 2 `gap:` declarations (same 12px value, better token-category correctness).
- `.alert-primary`/`.alert-danger`/`.custom-alert-primary`/`.custom-danger-alert` (score ≈3.71/10): no fix — every color re-verified against the token scale with no exact match found anywhere; the documentation gap (fully undocumented despite active use in 11 production pages) needs an Owner decision, not a mechanical fix.
- Verification: Full-project isolated sandbox compile, exit 0, no errors, line count unchanged (pure value-preserving substitution); grepped compiled CSS to confirm `gap: 12px;` unchanged at both edited locations.
- `.ai/` files updated: `COMPONENT_REGISTRY.md`, `KNOWN_DECISIONS.md`, `TASK_MANAGER.md`, `AI_MEMORY.md`.
- Next recommended batch (Owner-specified order): Tables, Pagination.

### Autonomous Design System Maintainer — Batch 5 (Tables, Pagination)
- Description: Fifth batch. Scored Tables and Pagination, applied the safest available fixes, and caught a real token-naming trap before it could cause an incorrect substitution.
- Status: Completed
- Priority: High (explicit Owner mode)
- Scope: `css/components/_table.scss`
- Public API impact: None — all edits are dead-code removal or exact-value token substitutions.
- Tables (score ≈5.57/10) / Pagination (score ≈6.0/10): see `COMPONENT_REGISTRY.md` for the full per-fix breakdown. Highlights: removed 2 duplicate declarations, reused `$gap-10`/`$radius-md`/`$padding-md`/`$padding-2xl`/`$margin-xxs` at 10 total call sites, migrated 2 more icon sizes to `$moi-icon-sizes`.
- **Token-naming trap caught:** the numbered `$padding-N` aliases don't equal `N` pixels (verified via compiled output before use) — logged in `KNOWN_DECISIONS.md` to prevent future mistakes.
- Verification: Full-project isolated sandbox compile, exit 0, no errors; line count dropped by exactly 2 (matching the 2 removed duplicate lines); grepped compiled CSS to confirm every fix produced its unchanged intended value at every call site.
- `.ai/` files updated: `COMPONENT_REGISTRY.md`, `KNOWN_DECISIONS.md`, `TASK_MANAGER.md`, `AI_MEMORY.md`.
- Next recommended batch (Owner-specified order): File Uploader, Person Card.

### Autonomous Design System Maintainer — Batch 6 (File Uploader, Person Card)
- Description: Sixth batch. Scored File Uploader and both "Person Card" implementations; applied safe fixes only where genuinely eligible.
- Status: Completed
- Priority: High (explicit Owner mode)
- Scope: `css/components/_file-uploader.scss`
- Public API impact: None.
- File Uploader (score ≈9.14/10): 3 small fixes — 1 new icon-size migration (`&__saved-icon`), 1 token-reuse (`$padding-xxs`), 1 redundant-declaration removal.
- Person Card: `.moi-person-card` (score ≈8.93/10) — no changes, already near-flawless. `.newIms--inquiryDs--card` (score ≈3.29/10) — deliberately no changes, page-specific production code already subject to a standing "Blocked pending visual QA" finding.
- Verification: Full-project isolated sandbox compile, exit 0, no errors; line count dropped by exactly 1 (matching the 1 removed redundant declaration); grepped compiled CSS to confirm every fix's value unchanged.
- `.ai/` files updated: `COMPONENT_REGISTRY.md`, `KNOWN_DECISIONS.md`, `TASK_MANAGER.md`, `AI_MEMORY.md`.
- Next recommended batch (Owner-specified order): Modal, Tabs.

### Autonomous Design System Maintainer — Batch 7 (Modal, Tabs)
- Description: Seventh batch. Scored Modal and both Tabs implementations, applied safe fixes, surfaced a real pre-existing visual inconsistency and a genuinely-dead placeholder without touching either.
- Status: Completed
- Priority: High (explicit Owner mode)
- Scope: `css/common/_modal.scss`, `css/components/_tabsDesign.scss`
- Public API impact: None.
- Modal (score ≈6.43/10): 2 safe token-category fixes. Surfaced (not fixed): `.modal-header .btn-close` renders at 34px vs. the shared 16px used elsewhere — a real visual inconsistency, not a token bug; and `%modal-header-heading`, a genuinely unused, zero-output placeholder — logged for Owner approval rather than deleted.
- Tabs: `.create__tabs` (score ≈4.57/10) — no fix, no exact token matches anywhere. `.tabsDesign` (score ≈5.0/10 before) — 5 safe fixes: 3 exact color-token matches, 2 exact radius-token matches, 1 dead-code removal.
- Verification: Full-project isolated sandbox compile, exit 0, no errors; line count dropped by exactly 1 (the removed dead declaration); grepped compiled CSS to confirm every fix's value unchanged.
- `.ai/` files updated: `COMPONENT_REGISTRY.md`, `KNOWN_DECISIONS.md`, `TASK_MANAGER.md`, `AI_MEMORY.md`.
- Next recommended batch (Owner-specified order, final batch): Stepper, Switch, Timeline.

### Autonomous Design System Maintainer — Batch 8 (Stepper, Switch, Timeline) — FINAL BATCH
- Description: Eighth and final batch per the Owner's stated 8-batch plan. Scored Stepper (both files), Switch, and Timeline (newly given a full audit, previously only touched for icon sizing) against the 7-dimension rubric, applied safe fixes.
- Status: Completed
- Priority: High (explicit Owner mode)
- Scope: `css/components/_stepper.scss`, `css/components/_timeline.scss` (`_radial-stepper.scss` and `_Switch.scss` read in full, no changes needed)
- Public API impact: None — all edits are exact-value token/color substitutions, zero visual change.
- Stepper (`_stepper.scss`, score ≈6.71/10): 1 safe fix — `.wizard > .steps .wizerdImage`'s `margin-left: 12px` reused `$margin-lg`. `_radial-stepper.scss` (score ≈8.36/10): no changes, already near-optimal, progress-ring geometry has no applicable token category.
- Switch (`_Switch.scss`, score ≈8.5/10): no changes, already clean; notably includes `@media (prefers-reduced-motion: reduce)` accessibility support.
- Timeline (`_timeline.scss`, score ≈4.57/10, first full audit — previously only reviewed for icon sizing): 9 safe fixes — 6× `#fff`/`#ffffff`/`white` → `$white-100`, 1× partial padding fix (`40px` of `10px 40px` → `$padding-5xl`), 2× `border-radius: 8px` → `$radius-md`. New documentation gap logged: no dedicated doc page, no `components.json` entry, despite confirmed active use.
- Verification: Full-project isolated sandbox compile (`batch8_verify`), exit 0, no errors, line count unchanged at 24266 (all fixes are pure value-preserving substitutions, no dead code removed this batch); grepped compiled CSS to confirm every fix's value unchanged at every call site (`margin-left: 12px;`, `background-color: #ffffff;`, `color: #ffffff;`, `border-radius: 8px;` all confirmed correct post-compile).
- `.ai/` files updated: `COMPONENT_REGISTRY.md`, `KNOWN_DECISIONS.md`, `TASK_MANAGER.md`, `AI_MEMORY.md`.
- **This was the final batch in the Owner's 8-batch plan.** All 8 batches (16 named components/component-groups) are now complete. No further batch is recommended — see the closing session report in `TASK_MANAGER.md`.

### Autonomous Design System Maintainer — Batch 9 (Approved Issue Resolution)
- Description: Owner explicitly authorized resolving the accumulated backlog of "Needs Owner Approval"/investigation findings from Batches 1-8, with `_vue-treeselect.scss` and all Person Card implementations explicitly excluded, and Legacy Alerts, `.moi-notification`, Timeline, and Tabs documentation explicitly approved for creation.
- Status: Completed
- Priority: High (explicit Owner instruction)
- Scope: `css/common/_oldButtons.scss`, `css/common/_buttons.scss`, `css/common/_modal.scss`, `DesignSystemDocumentation/buttons.html`, `DesignSystemDocumentation/alert.html`, `DesignSystemDocumentation/timeline.html` (new), `DesignSystemDocumentation/tabs.html` (new), `components.json`.
- Public API impact: None on CSS/selectors/HTML contracts. `.moi-btn--text-icon` is now additionally served by the current button architecture under its pre-existing, already-documented selector (no new class). 2 new documentation pages and 3 new `components.json` catalog entries were added for already-existing, already-implemented components — no new SCSS API was created.
- Key results:
  - `_oldButtons.scss`: removed 3 confirmed-duplicate blocks (`:root`, icon-sizing loop, `moi-focus-ring` mixin); discovered and documented a genuine 3-way mixin-naming collision with `css/helpers/_mixins.scss` that prevents fully de-duplicating `moi-btn-size-vars` (new Architecture Opportunity, not implemented).
  - `.moi-btn--text-icon` migrated into `_buttons.scss`; legacy copy kept; `buttons.html` updated.
  - Modal: `%modal-header-heading` removed (zero-output, verified). `.btn-close` 34px left unchanged (no matching token).
  - `--theme-primary` source confirmed (JS runtime theming) — no longer an open question.
  - `$Info-25`/`$Info-50`: cross-family + `tokens.json` comparison strengthens the "likely duplication bug" finding; still no provable fix, left unchanged.
  - 3 unused SCSS partials reviewed in full; none imported, none have a real consumer; `_createUser.scss` confirmed empty.
  - Radio: `components.json` updated with an explicit "no approved public API" note; no code change.
  - `alert.html`: added a full "Legacy Alerts" section (bilingual, real classes, recommends `.moi-notification`); fixed one genuine pre-existing unrelated HTML bug (unclosed div) found while editing.
  - New pages: `timeline.html`, `tabs.html` — both bilingual, real selectors only, HTML-balance verified.
  - `components.json`: Person Card `scssFile` converted to a proper array; 3 new entries added (Notifications, Timeline, Tabs); still valid JSON (18 components total).
- Verification: full-project isolated sandbox compile, exit 0, 24256 lines (net −10 from Batch 8's 24266: −28 dead-code removal, +18 additive `.moi-btn--text-icon`, 0 from the zero-output placeholder removal). Full diff against the Batch 8 baseline showed only those two changes, nothing else moved. All 3 edited/created HTML files passed a full open/close tag-balance check.
- `.ai/` files updated: `KNOWN_DECISIONS.md`, `IMPROVEMENT_BACKLOG.md` (this entry), `COMPONENT_REGISTRY.md`, `TASK_MANAGER.md`, `AI_MEMORY.md`.
- Confirmed untouched: `css/common/_vue-treeselect.scss`, `css/components/_personCard.scss`, `css/components/_PersonCardInfra.scss`, `DesignSystemDocumentation/personcard.html`.

---

## In Progress
- None currently.

---

## Pending
_Safe future analysis items — investigation only, no implementation implied by listing here._

- Verify documentation accuracy against current SCSS across the remaining cataloged components not yet deep-audited (Input Field, Badge/Priority Pill, Alert, Table, Modal, Dropdown — Button, Checkbox, Radio, Card, and Tags already have a deep audit; Alert/Table/Modal/Dropdown now have baseline SCSS-level findings too, see Completed, but haven't been cross-checked line-by-line against their documentation pages the way Buttons was).

---

## Postponed
- Responsive coverage / breakpoint standardization.
- ~~Tags component cleanup.~~ **Cancelled 2026-07-16** — now in active scope under Autonomous Design System Maintainer Mode.
- Date Picker cleanup and vendor override review.
- Broad hardcoded-value-to-token migration (only the files touched during the Safe SCSS Improvement Phase were converted).
- JavaScript dependency audit.
- Razor/backend code review.

---

## Blocked / Needs Owner Approval
- Centralized Radio public API — no implementation without an approved class/selector name. **Status documented, not resolved, 2026-07-16** — `components.json` now explicitly states no approved public API exists yet.
- `$Info-25` / `$Info-50` correction — no independently-confirmed correct value exists yet. **Investigated further 2026-07-16** — confirmed as the only color family with this duplication (see `KNOWN_DECISIONS.md`); still unresolved.
- Importing or deleting the 3 unused SCSS partials (`_createUser.scss`, `_newPermits.scss`, `_ViolationDirectoryApproval.scss`). **Reviewed in full 2026-07-16** — confirmed none are imported anywhere or have a real HTML/JS consumer; `_createUser.scss` is genuinely empty. Still not imported/deleted, recommended as archive/removal candidates.
- Card style consolidation — same-named patterns have different values per page; needs a visual-QA pass first.
- Any new class, modifier, data attribute, or component API not already approved and recorded in `KNOWN_DECISIONS.md`.
- ~~Migrating `.moi-btn--text-icon` from `_oldButtons.scss` into the current `_buttons.scss`.~~ **Resolved 2026-07-16** — migrated into `_buttons.scss` under explicit Owner authorization; legacy copy kept; verified via compile diff. No longer Blocked.
- ~~Adding a `components.json` entry for the `.moi-notification` component.~~ **Resolved 2026-07-16** — added under explicit Owner authorization ("Notifications (current .moi-notification API)"). No longer Blocked.
- ~~Removing the redundant legacy `@import "../customclasses";` from `css/components/_card.scss`.~~ **Resolved — done directly by the Owner, detected 2026-07-16.** The file now uses `@use "../customclasses";`; verified via isolated compile that all `@extend` calls still resolve and the double-compilation is gone. See `KNOWN_DECISIONS.md` for full detail. No longer Blocked.
- Replacing the bare `label`/`span` selectors inside `.moi-card__content--block` with component-specific BEM classes — would require an HTML markup change everywhere this block is used. Recommendation recorded, not implemented.
- Whether Tags icon sizing should be migrated to `$moi-icon-sizes` — the Icon Size Migration task explicitly listed Tags as in-scope, but the standing Tags-cleanup postponement was treated as controlling and Tags was left untouched. Needs explicit Owner confirmation either way.
- Which "Person Card" implementation (`.moi-person-card` in `_PersonCardInfra.scss`, `.person__card` documented in `personcard.html` with no SCSS, or `.newIms` in `_personCard.scss` used in production pages) is the canonical reusable component — discovered during the Icon Size Migration task, unresolved. **Explicitly out of scope for Batch 9 per Owner instruction (2026-07-16) — left completely untouched, not even documentation.**
- ~~Adding a `components.json` entry and/or dedicated documentation page for Timeline.~~ **Resolved 2026-07-16** — `timeline.html` created, `components.json` entry added, under explicit Owner authorization. No longer Blocked.
- ~~Adding a `components.json` entry and/or dedicated documentation page for Tabs.~~ **Resolved 2026-07-16** — `tabs.html` created, `components.json` entry added, under explicit Owner authorization. No longer Blocked.
- **New (2026-07-16):** `css/helpers/_mixins.scss` independently defines its own `moi-btn-size-vars` mixin with a different, stronger 3-selector cascade than `_buttons.scss`'s version, forcing both `_buttons.scss` and `_oldButtons.scss` to keep a local shadow copy to avoid a Sass "multiple global modules" ambiguity error. Unifying to one canonical definition (likely the stronger `helpers/_mixins.scss` version) via namespaced imports is a real cleanup opportunity but changes which selectors govern cascade strength for consumers — logged as an Architecture Opportunity in `KNOWN_DECISIONS.md`, not implemented.
