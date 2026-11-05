# PS-Design — Component Registry

_Evidence-based inventory. Components audited in depth during prior phases (Button, Checkbox, Radio, Card, Tags) have fuller detail. Others are listed with confirmed file locations only — their variants/states/RTL/accessibility detail is marked "Needs Owner Confirmation" where no prior deep audit exists. No component API is invented here._

---

### Cross-Cutting Token Binding Pass
- Date: 2026-07-16.
- Scope: project-wide SCSS review for hardcoded value binding, constrained to existing variables/tokens only.
- Reviewed: 94 SCSS files in the requested scope, excluding explicitly forbidden `_tags.scss` and `_vue-treeselect.scss`.
- Changed: 32 SCSS files, mostly page/app-shell styles plus a small set of common/login/component partials.
- Linked values: 308 exact-match value components across spacing, radius, colors, and shadows.
- Left unchanged: no-match values, wrong-family candidates, comments, Date Picker/vendor-sensitive areas, Person Card/newIms styling, Radio API-related styling, and `$Info-25`/`$Info-50`.
- Verification: `sass css/main.scss` exit 0; 3,614 selectors before/after; 0 selectors added/removed; compiled CSS line count stayed 22,297.
- Public API impact: none.

### Buttons
- Public class/API: `.moi-btn`, modifiers `--Neutral`, `--Primary`, `--Lavender`, `--Info`, `--Warning`, `--Error` (each with `--solid`/`--outline`), plus `--text` (migrated from legacy).
- SCSS source: `css/common/_buttons.scss` (current), `css/common/_oldButtons.scss` (legacy, still partially consumed), `css/common/_buttonBase.scss`.
- Documentation page: `DesignSystemDocumentation/buttons.html`.
- Main variants: Neutral, Primary, Lavender, Info, Warning, Error; solid/outline; text.
- Main states: default, hover, active, focus (via `moi-focus-ring` mixin), disabled, `aria-disabled`.
- Data attributes: `data-size="sm|md|lg|xl"`.
- RTL support: Needs Owner Confirmation (not independently re-verified beyond what earlier SCSS audit covered).
- Accessibility: focus-visible outline present; `aria-disabled` handled in CSS.
- Token usage: `$moi-btn-sizes` map (centralized), color tokens referenced via `components.json`.
- Current status: Active; legacy/current systems still coexist. `--text` and `--text-icon` are now both migrated and served by the current `_buttons.scss` architecture (legacy copies kept in `_oldButtons.scss` for backward compatibility, producing intentional identical duplicate rule blocks in compiled output — same accepted pattern as `--text`). `--text--brown` remains legacy-only, still labeled "(legacy)" in documentation. Documentation for `--text`/`--text-icon` is complete (States matrix row + Developer API sample; "(legacy)" qualifier removed from `--text-icon` now that it's current).
- Legacy dependencies: `_oldButtons.scss`.
- **Quality score (Autonomous Maintainer Batch 1, 2026-07-16):** Design System Consistency 8, SCSS Quality 7, Token Usage 6.5, Accessibility 8, Documentation 8, Maintainability 6, Reusability 8 → **Overall ≈7.36** (Improve band — safest available fix applied, rest logged below).
- Safe fix applied (Batch 1): `_buttonBase.scss`'s shared `.btn, .moi-btn` gap (`8px`) reused `$gap-md` (exact match, zero visual change).
- **Batch 9 (Approved Issue Resolution, 2026-07-16) — further fixes applied:** `_oldButtons.scss`'s duplicate `:root {...}`, icon-sizing `@each` loop, and `@mixin moi-focus-ring` removed (confirmed 100% literal duplicates of `_buttons.scss`'s versions via isolated compile diff — 28 lines removed, nothing else changed). `@mixin moi-btn-size-vars`'s local copy in `_oldButtons.scss` could **not** be removed the same way — doing so breaks compilation, because `css/helpers/_mixins.scss` independently defines a third, same-named mixin with a different (stronger) cascade pattern, reachable via the same `@use "../helpers" as *;` import; Sass cannot disambiguate without a local shadow copy. This 3-way collision is a new, previously-undiscovered Architecture Opportunity — see `KNOWN_DECISIONS.md`. `.moi-btn--text-icon` migrated from `_oldButtons.scss` into `_buttons.scss` (exact selector/values preserved, confirmed actively used in `_table.scss` + 3 production pages); legacy copy kept. The 30+ untokenized legacy color variants in `_oldButtons.scss` remain out of scope (broad hardcoded-value migration still Postponed project-wide).
- Public API change allowed: No, without Owner Approval.
- Owner Approval required: Yes, for any new variant, size, or class.

### Form Controls (general)
- Public class/API: `.form-control[data-size="sm|md|lg|xl"]`, `.form-control:is(.is-err,.is-invalid,.is-ok,.is-valid)`, `.form-control:disabled/[readonly]`, plus a large set of page-specific mixins (`login-form-control`, `person-form-control`, `hearing-textarea-form-control`, `otarr-*-textarea-form-control`, `security-case-minus-plus-control`, `user-management-*-control`, `vehicles-restriction-textarea-form-control`, etc.).
- SCSS source: `css/common/_form.scss`.
- Documentation page: `DesignSystemDocumentation/text-fields.html` (confirmed present, substantial `data-size`/`form-control` coverage — 39 references found; not exhaustively line-audited against SCSS in this pass).
- **Quality score (Autonomous Maintainer Batch 2, 2026-07-16):** Design System Consistency 9, SCSS Quality 9.5, Token Usage 9, Accessibility 8, Documentation 8, Maintainability 9, Reusability 8 → **Overall ≈8.64** (Improve-only-if-clear-low-risk-benefit band).
- Exceptionally well-maintained already: the file is organized into 7 clearly numbered sections (Placeholder / Shared Helpers / Base / Sizes / States / Textarea / Special Cases), already reads icon sizing directly from `$moi-icon-sizes` (`icon-size`/`icon-token` keys in `$form-control-sizes`, consumed at `.form-control[data-size] .icon`/`svg`), and every remaining literal value already carries an accurate, verified-correct "DS token gaps" comment explaining why no token applies (spot-checked and confirmed: `1.125rem` font-size genuinely falls between `$font-sizes`' `lg` (1rem) and `xl` (1.25rem); `18px` icon-offset padding genuinely falls between `$padding-xl` (16px) and `$padding-2xl` (20px); textarea/special-case heights like 70/45/40/38/35/50/60/160/150/80px have no match anywhere in the padding/gap scale).
- **No safe changes found or made** — every candidate literal was individually re-verified against the token scales and confirmed to have no exact match; the file's own self-documentation is accurate.
- Minor architecture note (not implemented, informational only): section 7 ("Special Cases / Legacy Overrides") bundles many page-specific mixins (`login-*`, `person-*`, `hearing-*`, `otarr-*`, `security-case-*`, `user-management-*`, `vehicles-restriction-*`) into this shared common file rather than their respective `css/pages/` files. `CODING_STANDARDS.md` discourages moving rules across these boundaries without a clear functional justification verified by compile diff — left as-is, flagged only for Owner awareness.
- **Documentation fix applied (Batch 3, 2026-07-16):** cross-checked `components.json`'s "Input Field" catalog entry (original token-reference schema) against the real `_form.scss` implementation. Found the documented focus-state `boxShadow` alpha (`0.12`) did not match the SCSS's actual default (`_form-control-ring($border-color, $alpha: 0.16)`, used at `.form-control:focus` with no override, i.e. `0.16`). Corrected `components.json`'s value from `0.12` to `0.16` — a factual correction to an already-documented, already-implemented API field, not a new API or schema change (allowed under this mode's Documentation Rules). Verified `components.json` remains valid JSON after the edit.
- **Architecture Opportunity — Needs Owner Approval (not implemented):** this project defines Design Tokens for spacing/gap/radius/color/typography/shadow, but has **no token scale for control/element heights**. As a direct result, at least 3 different reusable components independently hardcode unrelated height values with no shared scale: Form Controls (`_form.scss`: 150/160/80/70/45/40/38/35/60/50px across textarea/verification/legacy mixins), Tags (`_tags.scss`: `default: 36px` control height), and Cards (`_card.scss`: `min-height: 120px` detail-item). None of these can be safely tokenized today because no such token exists, and inventing one is explicitly Owner-approval-gated (`ARCHITECTURE_RULES.md`: "Do not create new Tokens without explicit approval"). Benefit of an approved height scale: would let all 3+ components (and likely more found in later batches — Stepper/File Uploader also have many one-off heights) converge on shared values over time. Risk: a new token category is itself a form of new public API surface (`Public Sass maps... consumed by other files`), and retrofitting existing components to it must be done gradually, component by component, to avoid a large simultaneous visual-risk change. Suggested approach if approved: define a `$moi-control-heights` (or similarly named) map in `css/helpers/_variables.scss` seeded from the values already in use, then migrate components incrementally the same way `$moi-icon-sizes` was rolled out.
- Public API change allowed: No, without Owner Approval.

### Checkbox
- Public class/API: `.form-check-input`, `.form-check-label`.
- SCSS source: `css/common/_checkbox.scss` (centralized from `_common.scss`).
- Documentation page: Not found as a dedicated page in `DesignSystemDocumentation/` — only a `components.json` entry exists. Needs Owner Confirmation.
- Main states: default, `:checked`, `:focus`.
- RTL support: Needs Owner Confirmation.
- Token usage: `$Neutral-300`, `$Primary-500`.
- Current status: Centralized; API unchanged.
- Legacy dependencies: None known.
- Public API change allowed: No, without Owner Approval.

### Radio
- Public class/API: **None centralized.** The only existing implementation is scoped inside `#Accidents { label.radio { ... } }` in `css/common/_common.scss`, untouched.
- SCSS source: `css/common/_common.scss` (ID-scoped only).
- Documentation page: `components.json` has a "Radio" entry, but no centralized implementation backs it — accuracy Needs Owner Confirmation.
- Current status: **Lacking an approved centralized public API.** A prior attempt (`.moi-radio-group`) was reverted for not having approval.
- **Status documented (Autonomous Maintainer Batch 9, 2026-07-16):** no SCSS/code change made (none authorized). `components.json`'s Radio entry updated with an explicit note stating no approved reusable public Radio API currently exists, and that a future centralized implementation requires Owner Approval — makes the standing status explicit in the catalog itself rather than only in `.ai/`.
- Public API change allowed: **No — Blocked, Needs Owner Approval** before any centralization work.

### Dropdown
- Public class/API: `.dropdown-toggle`, `.dropdown-item`, `.dropdown-menu` (Bootstrap-derived), plus page-specific variants (`.dropdown-content`, `.dropdown-menu.show.apps`).
- SCSS source: scattered across `css/common/_common.scss`, `css/common/_layout.scss`, and `css/components/_table.scss` (a table-specific `.ellipsistd .dropdown-menu` override) — not centralized in one file.
- Documentation page: Not found as a dedicated page. `components.json` has a "Dropdown" entry.
- Confirmed via direct read: PS-Design's own overrides are thin — just the down-arrow icon (`.dropdown-toggle::after`) and item font (`.dropdown-item`). No custom BEM structure; the component is essentially Bootstrap's native dropdown with light visual overrides re-applied per context (global nav vs. table row actions).
- Variants/states/RTL/accessibility: Needs Owner Confirmation beyond what's stated above (states/accessibility are inherited from Bootstrap's own dropdown JS/markup, not re-implemented in this project's SCSS).
- Current status: Present, functional, intentionally decentralized (each context restyles the same Bootstrap base). No consolidation attempted (would require analysis + approval).
- **Quality score (Autonomous Maintainer Batch 3, 2026-07-16):** Design System Consistency 6, SCSS Quality 7, Token Usage 7, Accessibility 6, Documentation 4, Maintainability 6, Reusability 6 → **Overall ≈6.0** (Improve band — safest available fixes applied).
- Safe fixes applied in `css/components/_table.scss`'s `.ellipsistd .dropdown-menu` (the one genuinely reusable, non-page-specific Dropdown context — table row-action menus): `border-radius: 8px` → `$radius-md`; `.dropdown-item`'s `margin-bottom: 4px` → `$margin-xs`; removed a provably dead `border-radius: 5px;` declaration that was always overridden by a later `border-radius: 0;` in the same rule (zero computed-style change — verified in compiled output that the applied radius is unchanged at `0`).
- Left unchanged (out of scope by rule, not by oversight): the ~10 different dropdown skins in `css/common/_layout.scss` (`.user-detaiolsdrop`, `.seatingdrop`, `.left__area .navemail`, `.apps__items`, etc.) are page/app-shell-specific selectors, not reusable component logic — correctly excluded per "do not modify page-specific layouts." Remaining raw colors in `.ellipsistd .dropdown-item` (`#f8f8f8`, `#252f4a`, `#e9e9e9`) have no exact token match.
- Public API change allowed: No, without Owner Approval.

### Select (vue-treeselect)
- Public class/API: `.vue-treeselect` and related vendor-prefixed classes (not `.moi-` namespaced).
- SCSS source: `css/common/_vue-treeselect.scss`.
- Documentation page: Not found as a dedicated page.
- Current status: Vendor-component styling override; not a native PS-Design component API. Needs Owner Confirmation on scope/ownership.
- **Quality score (Autonomous Maintainer Batch 3, 2026-07-16):** Design System Consistency 4, SCSS Quality 5, Token Usage 3, Accessibility 5, Documentation 3, Maintainability 5, Reusability 4 → **Overall ≈4.1** (Below-8 band — **no safe fix implemented**, reasoning below).
- Why no fix was made despite the low score: this file exists specifically to reskin one third-party vendor plugin (vue-treeselect). Nearly every value is a raw color chosen to match that plugin's exact visual requirements — a broad hardcoded-value-to-token migration here (a) falls under the project's standing, explicit "broad hardcoded-value-to-token migration" postponement, and (b) carries extra risk since `ARCHITECTURE_RULES.md` calls for caution around third-party/vendor code specifically. The non-square icon dimensions (`.vue-treeselect__x`/`.vue-treeselect__control-arrow` 20×10px, `.vue-treeselect__option-arrow` 18×12px) were already correctly excluded from the earlier Icon Size Migration for the same vendor/non-square reasons. Two small dead-commented-out CSS blocks exist (lines ~146–149) that are extremely low-risk to remove but were left untouched out of caution, since (being `/* */` block comments) they do compile into the output CSS as literal text, and this project's established practice treats any compiled-output change — however cosmetic — as worth flagging rather than auto-applying. Logged as a Needs Owner Approval candidate.
- Public API change allowed: No, without Owner Approval.

### Alerts / Notifications — IMPORTANT: two separate systems found under one conceptual name
Corrected during this pass after cross-checking `DesignSystemDocumentation/alert.html` against SCSS — the earlier "Alerts" and "Notifications" entries described what turned out to be two distinct, unrelated implementations. Both are recorded here rather than merged, since merging them would be an architectural judgment call, not a documentation-accuracy fix.

**A. `.moi-notification` — this is the actual documented "Alerts" component.**
- Public class/API: `.moi-notification` (BEM: `__content`, `__actions`, `__icon`, `__title`, `__message`, `__btn`, `__close`), driven by `data-status="neutral|info|error|warning|success"`.
- SCSS source: `css/components/_Notification.scss`.
- Documentation page: `DesignSystemDocumentation/alert.html` — confirmed by direct read: every example on this page uses `<div class="moi-notification" data-status="...">`, and the page explicitly instructs "Use `.moi-notification` with `data-status`... Do not add status classes manually." The page never mentions `.alert-primary`, `.alert-danger`, `.custom-alert-primary`, or `.custom-danger-alert`.
- `components.json`: **Resolved (Autonomous Maintainer Batch 9, 2026-07-16)** — added under explicit Owner authorization as "Notifications (current .moi-notification API)", with a note documenting the Alerts/`.moi-notification` naming mismatch directly in the entry's `purpose` field, and explicitly stating the legacy alert classes (below) are backward-compat-only, not a competing current component.
- Confirmed via direct read of the SCSS: each status drives CSS custom properties (`--moi-notification-bg`, `--moi-notification-color`, etc.) and a `moi-notification-btn-variant` mixin for the action button. Responsive breakpoint at `max-width: 576px` (stacks content vertically). States: hover/focus-visible/active on `__btn` and `__close` (focus uses `outline`+`outline-offset`, not the `moi-focus-ring` mixin Buttons use). Optional Bootstrap dismiss behavior (`alert alert-dismissible fade show` + `data-bs-dismiss="alert"`) layers on top per `alert.html`.
- RTL support: Needs Owner Confirmation (no explicit RTL-only rules found; layout uses `flex`/`gap`, direction-agnostic).
- Icon sizing: `&__icon svg` and `&__btn svg` were already `1.5rem` literals, **migrated** to `map.get($moi-icon-sizes, lg)` references during the Icon Size Migration pass (zero value change — pure token-reference swap, corroborating evidence for the Card reversal above). `&__close svg` (0.75rem/12px) has no matching entry (smallest map value is `sm`=1rem/16px) — left unchanged.
- **Quality score (Autonomous Maintainer Batch 4, 2026-07-16):** Design System Consistency 9, SCSS Quality 9, Token Usage 9, Accessibility 9, Documentation 8, Maintainability 9, Reusability 8.5 → **Overall ≈8.79** (Improve-only-if-clear-low-risk-benefit band).
- Safe fix applied: the root `.moi-notification` and its `&__content, &__actions` block both used `gap: $padding-lg;` — a *padding* token on a `gap` property. Both are 12px so the computed value was already correct, but reused the semantically-correct `$gap-lg` token instead (zero value change, better token-category correctness).
- `&__btn`/`&__close`'s `2.75rem` (44px) height coincidentally equals `$moi-btn-sizes`' `lg` height, but was not touched/flagged as a duplicate — 44px is also the standard WCAG minimum touch-target size, a plausible independent reason for the value, not clear evidence of accidental duplication.
- Public API change allowed: No, without Owner Approval.

**B. `.alert-primary` / `.alert-danger` / `.custom-alert-primary` / `.custom-danger-alert` — a separate, undocumented, actively-used system.**
- Public class/API: `.alert` (Bootstrap base), `.alert-primary`, `.alert-danger`, `.custom-alert-primary`, `.custom-danger-alert`.
- SCSS source: `css/common/_common.scss` — a thin color-override layer on native Bootstrap `.alert`, no `.moi-` BEM structure.
- Documentation page: **None.** Confirmed via direct read that `alert.html` never references any of these class names.
- Real-world usage: confirmed via grep — actively used across multiple production pages outside `DesignSystemDocumentation/` (`Cases/`, `ArrestedPersons/`, `UserManagement/`, `ResetPassword/`, `hearingReport/`, `violition.html`, `freehand.html`, `user-authentication/`). **Not dead code.**
- `components.json`: the existing "Alert" entry (original token-reference schema) was not cross-checked against this specific class set in this pass — Needs Owner Confirmation on which system it actually describes.
- **Documented (Autonomous Maintainer Batch 9, 2026-07-16):** `alert.html` now has a full "Legacy Alerts" section, bilingual, listing all 4 classes, marking them Legacy/backward-compatible-only/not-recommended-for-new-development, and recommending `.moi-notification` for new work. No class was recolored (explicitly disallowed without an exact token match, and none exists — see above). No class was removed or renamed.
- **Quality score (Autonomous Maintainer Batch 4, 2026-07-16):** Design System Consistency 3, SCSS Quality 5, Token Usage 2, Accessibility 5, Documentation 2, Maintainability 5, Reusability 4 → **Overall ≈3.71** (Below-8 band — **no fix implemented**, reasoning below).
- Every color value in this system (`#d9272d`, `#e6f0ff`, `#0d60da`, `#eaf2ff`, `#cde2ff`, `rgba(255, 39, 0, 0.05)`, `#fad9dc`, `#ff375e`) was individually re-checked this pass against the full Primary/Info/Error token scales in `css/helpers/_variables.scss` — **none has an exact match**, so no safe token substitution is available (approximating would violate `ARCHITECTURE_RULES.md`'s "do not approximate a Token value"). Restructuring this system into a mixin-driven pattern (like `.moi-notification`'s) would be a genuine refactor with compiled-output and possibly visual implications, not a mechanical safe task. The documentation gap requires an Owner-level judgment call (whether/how to document an entirely separate, undocumented alert system) rather than a mechanical fix.
- Public API change allowed: No, without Owner Approval. This finding (undocumented-but-actively-used alert classes) is logged as a documentation gap in `IMPROVEMENT_BACKLOG.md` — no fix attempted, since deciding whether/how to document it is a judgment call, not a mechanical correction.

### Cards
- Public class/API: `.moi-card` family, plus page-specific variants such as `.newIms--inquiryDs--card` that carry different values per page.
- SCSS source: `css/components/_card.scss`.
- Documentation page: `DesignSystemDocumentation/card.html`.
- `components.json`: "Card" entry added during the SCSS Improvement Phase.
- Known issue: same-named patterns across pages are **not** value-identical — consolidation was evaluated and explicitly not performed to avoid visual regressions. Blocked pending visual QA.
- **Resolved 2026-07-16 (by the Owner directly, not this AI workspace):** the legacy `@import "../customclasses";` was changed to `@use "../customclasses";`. Verified via isolated compile: `&__content--block`'s 4 `@extend` calls still resolve correctly, no errors, and the previous `_customClasses.scss` double-compilation is gone. See `IMPROVEMENT_BACKLOG.md`/`KNOWN_DECISIONS.md` for detail.
- Internal SCSS quality pass completed (comments/organization only — Root/Status Variants/Header/Body/Content/Actions/Footer/Details/Responsive sections labeled, `@extend`/`@import`/token rationale documented inline). Zero declaration or selector changes; compiled output verified byte-identical.
- Icon `24px` (`&__icon`/`&__icon svg`) **migrated** to `map.get($moi-icon-sizes, lg)` (1.5rem) during the "Design System Icon Size Migration" pass, reversing the earlier narrower "leave unchanged" call. That earlier call used a stricter "exact equivalent" bar; this pass used an explicit, more permissive Owner-set "effectively identical" bar, and was corroborated by `.moi-notification` already using the same 1.5rem value for an equivalent icon concept. Verified via compiled-output grep: `.moi-card__icon`/`.moi-card__icon svg` now output `width/height: 1.5rem`.
- Minor open item: `&__content--block`'s `label`/`span` are bare element selectors rather than component-specific classes — documented as a future, HTML-touching improvement candidate in `IMPROVEMENT_BACKLOG.md`, not changed (would require a markup change).
- **Quality score (Autonomous Maintainer Batch 2, 2026-07-16):** Design System Consistency 9, SCSS Quality 9, Token Usage 9, Accessibility 8, Documentation 8, Maintainability 9, Reusability 8 → **Overall ≈8.57** (Improve-only-if-clear-low-risk-benefit band). Re-verified the file's two remaining literal values against the full spacing scale in `_variables.scss`: `min-height: 120px` sits exactly between `$padding-9xl` (96px) and `$padding-10xl` (128px) — confirmed no exact token exists, comment is accurate. `991.98px`/`767.98px` breakpoints confirmed to have no token equivalent anywhere in the project. **No further safe changes found** — this file has already been through 3 prior improvement passes plus the Owner's own `@import`→`@use` fix; it is genuinely near-optimal for its current scope. Left unchanged.
- Public API change allowed: No, without Owner Approval.

### Person Card
- **Naming/implementation mismatch found (Icon Size Migration pass) — three non-overlapping "Person Card" things exist:**
  1. `.moi-person-card` (`css/components/_PersonCardInfra.scss`) — proper BEM naming, documented by its own dedicated page `moi-person-card.html` (confirmed via grep: this page uses `.moi-person-card`, `.moi-person-card--container--header`, etc., not `.person__card`). This is the only one of the three confirmed to be genuine reusable Design System component logic. Read in full: no explicit icon width/height anywhere (only `svg { flex-shrink: 0; }`, i.e. intrinsic SVG sizing) — nothing eligible to migrate.
  2. `.person__card` — documented in `DesignSystemDocumentation/personcard.html` (33 occurrences), but grepping the entire `css/` tree found **zero** SCSS backing anywhere. This documented component has no implementation (likely styled via utility-class composition directly in HTML).
  3. `.newIms`-prefixed selectors (`css/components/_personCard.scss`) — confirmed via grep to be actively used across real production pages (`index.html`, `Inquiry/`, `Cases/`, `dashboard/`, `violitionDashboard/`, `incomingIncidents/`, etc.), not `DesignSystemDocumentation/`. Page/feature-specific production code, not the documented reusable component. Its two `24px` svg blocks were correctly excluded from the Icon Size Migration per "do not modify page-specific layouts unless they represent reusable component logic."
- Which of the three is canonical going forward is unresolved — logged in `KNOWN_DECISIONS.md` as Needs Owner Confirmation.
- Public class/API: Needs Owner Confirmation on exact class list (see mismatch above).
- SCSS source: `css/components/_personCard.scss` (page-specific `.newIms` styles), `css/components/_PersonCardInfra.scss` (genuine reusable `.moi-person-card`).
- Documentation page: `DesignSystemDocumentation/personcard.html` (documents `.person__card`, unimplemented) and `moi-person-card.html` (documents `.moi-person-card`, implemented).
- `components.json`: "Person Card" entry added during the SCSS Improvement Phase — `scssFile` lists both `_personCard.scss` and `_PersonCardInfra.scss`; given the finding above, this entry's accuracy (which file backs which documented page) should be revisited by the Owner.
- **Quality score, `.moi-person-card` / `_PersonCardInfra.scss` (Autonomous Maintainer Batch 6, 2026-07-16):** Design System Consistency 9.5, SCSS Quality 9.5, Token Usage 10, Accessibility 7, Documentation 8, Maintainability 9.5, Reusability 9 → **Overall ≈8.93** (Improve-only-if-clear-low-risk-benefit band). Re-read in full: genuinely near-flawless token usage — every padding/gap/radius/color value uses a Design Token, including the multi-value `border-color` gradient effect on `&--container--header__image` (all 4 values are tokens, not raw hex). **No safe changes found or made.**
- **Quality score, `.newIms--inquiryDs--card` / `_personCard.scss` (Autonomous Maintainer Batch 6, 2026-07-16):** Design System Consistency 2, SCSS Quality 4, Token Usage 5, Accessibility 4, Documentation 1, Maintainability 3, Reusability 4 → **Overall ≈3.29** (Below-8 band). **No fix implemented, deliberately** — this file is page/feature-specific production code (confirmed real usage across `index.html`, `Inquiry/`, `Cases/`, `dashboard/`, etc., not the documented reusable component), the exact same reasoning that already excluded its icon sizes from the earlier Icon Size Migration. It is also the subject of a standing, separate finding — "Card style consolidation... Blocked pending visual QA" — because same-named `.newIms--inquiryDs--card` patterns are known to carry different, non-identical values across different pages, meaning even a same-value token substitution here carries more risk than usual until that visual-QA question is resolved. At least one technically-exact token match exists in this file (`border-radius: 8px`→`$radius-md`, appearing 3 times) but was deliberately **not applied**, to stay consistent with the standing exclusion rather than selectively touching an out-of-scope, page-specific file.
- Public API change allowed: No, without Owner Approval.

### File Uploader
- Public class/API: Needs Owner Confirmation on exact class list (not deeply audited beyond file/doc mapping).
- SCSS source: `css/components/_file-uploader.scss`.
- Documentation page: `DesignSystemDocumentation/file-uploader.html`.
- `components.json`: "File Uploader" entry added during the SCSS Improvement Phase.
- Icon sizing: `&__modal-icon svg` (16px) **migrated** to `map.get($moi-icon-sizes, sm)` (1rem) during the Icon Size Migration pass. The `&__modal-icon` wrapper itself (36px badge) and several other icon sizes in this file (22px, 13px, 28px, 34px/15px, 14px, 26px) have no exact map match — left unchanged.
- **Quality score (Autonomous Maintainer Batch 6, 2026-07-16):** Design System Consistency 9.5, SCSS Quality 9.5, Token Usage 9.5, Accessibility 9, Documentation 8, Maintainability 9.5, Reusability 9 → **Overall ≈9.14** (Improve-only-if-clear-low-risk-benefit band — this is one of the most polished files in the entire project; only 3 small fixes found after very close review).
- Safe fixes applied: `&__saved-icon` (16px, a genuine icon not caught by the original Icon Size Migration pass) migrated to `map.get($moi-icon-sizes, sm)`; `&__count`'s `padding: 2px $padding-md` reused `$padding-xxs` for the exact-match `2px` (same value); removed a redundant `font-weight: 500;` in the same rule — `smallfont-reg-10` (already `@include`d two lines above) already sets `font-weight: 500;`, so the explicit re-declaration was a same-value, same-specificity no-op.
- Left unchanged (re-verified, no exact match): `&__dropzone-icon` (22px), `&__error svg` (13px), `&__empty svg` (28px), `&__type-icon`/inner svg (34px/15px), `&__action svg`/`&__modal-close svg` (14px), `&__preview-generic-icon`/inner svg (56px/26px) — all badge/glyph sizes individually re-checked against `$moi-icon-sizes`, none match.
- Public API change allowed: No, without Owner Approval.

### Tables
- Public class/API: `.tablecontainer .table` (base grid/scroll wrapper), `.table__search` (+ `__title`, `__body` elements), `.tableSeetings`, `.tableloader` (skeleton loading state), `.nodataTable` (empty state), `.moi-btn--text-icon` used extensively for row-action buttons.
- SCSS source: `css/components/_table.scss` (also contains Pagination — see below).
- Documentation page: Not found as a dedicated page in `DesignSystemDocumentation/`.
- `components.json`: "Table" entry (original token-reference schema).
- Confirmed via direct read: not a single cohesive BEM component — a collection of page-oriented table utilities (search bar, loading skeleton via CSS `@keyframes`, empty state, row actions). Heavy use of hardcoded hex colors and `!important` (consistent with the project-wide pattern, not flagged for cleanup here — Tables were not part of the `_customClasses.scss` P8 scope).
- Notable dependency: `.moi-btn--text-icon` (the legacy-only button variant, see Buttons entry) is relied on in at least 3 places in this file (`.actiontd`, `.tableloader`, generic `tr td`) — real evidence this class is actively used in production tables, not a dead leftover. Logged as additional context for the pending `.moi-btn--text-icon` migration decision in `IMPROVEMENT_BACKLOG.md`.
- Icon sizing: `.tablecontainer .table ... .moi-btn--text-icon svg` (24px, row-action icons) **migrated** to `map.get($moi-icon-sizes, lg)` during the Icon Size Migration pass — treated as reusable table-row-action logic, not page-specific. By contrast, `.userManagmetStyle--table-search .btn svg` (also 24px) was left unchanged: its selector name ties it to the User Management page specifically, excluded per "do not modify page-specific layouts." `.moreStutus` (24px) was also left unchanged — ambiguous, not confirmed to be an SVG icon (possibly a status/number badge).
- **Quality score (Autonomous Maintainer Batch 5, 2026-07-16):** Design System Consistency 5, SCSS Quality 6, Token Usage 7, Accessibility 5, Documentation 4, Maintainability 6, Reusability 6 → **Overall ≈5.57** (Below-8 band — safest available fixes applied).
- Safe fixes applied this batch: removed 2 byte-identical duplicate declarations (`.leftnav select`'s doubled `font-weight: 500;`, `[data-tooltip]:after`'s doubled `border-top: 5px solid #000000;`); reused exact-match tokens for `gap: 10px` (→`$gap-10`, 6 occurrences across this file), `.searchfields`'s `border-radius: 8px` (→`$radius-md`), `.tableloader tr td`'s `padding: 8px` (→`$padding-md`), `.ellipsistd .dropdown-menu h5`'s `padding: 20px` (→`$padding-2xl`), `.actiontd .moi-btn--text-icon`'s `margin: 0 2px` (→`$margin-xxs`). Two further icon-glyph sizes found and migrated: `.table__search--body .action-items .btn img` (20px→`md`) and `.edituserimage img` (24px→`lg`, `!important` preserved).
- **Important token-naming finding (not a code change, logged for Owner awareness):** the project's numbered `$padding-N` aliases (`$padding-8`, `$padding-10`, `$padding-12`, `$padding-14`, etc., defined in `css/helpers/_variables.scss`) do **not** equal `N` pixels — they alias into the smaller named scale imprecisely (e.g. `$padding-14` compiles to `12px`, not `14px`; `$padding-10` compiles to `8px`, not `10px`). This is a real trap: several raw `10px`/`20px` values in this file could easily be miscorrected to the wrong token by a future pass that assumes `$padding-N` means `Npx`. By contrast, the numbered `$gap-N` scale (`$gap-2` through `$gap-30`) **is** literal and trustworthy (`$gap-10` really is `10px`). All fixes in this batch were verified against actual compiled values, not assumed from token names.
- Left unchanged (no exact match after individual verification): several 5px border-radius values project-wide (no token between 4px and 6px); various raw hex colors (`#bababa`, `#f6f5f1`, `#e9e9e9`, `#f8f8f8`, `#252f4a`, etc.); `.tablecontainer .table tr td img`'s `width: 24px` (ambiguous — not confirmed as an icon vs. generic content image, left as in the original Icon Size Migration pass).
- Public API change allowed: No, without Owner Approval.

### Pagination
- Public class/API: `.paginationContainer`, `ul.pagination`, `.page-link`, `.leftnav` (page-size selector + goto controls).
- SCSS source: bundled inside `css/components/_table.scss` (not a standalone file).
- Documentation page: Not found as a dedicated page.
- `components.json`: no standalone entry currently — bundled under Table if at all. Needs Owner Confirmation on whether this should become its own catalog entry.
- Confirmed via direct read: uses a `--theme-primary` CSS custom property (not one of the `$Primary-*`/`$Neutral-*` SCSS tokens used elsewhere) for the active page-link color. **Resolved (Autonomous Maintainer Batch 9, 2026-07-16):** traced to `js/app.js`/`js/app.es5.js`'s `applyThemeColor()` — a runtime theming mechanism that injects a `<style>` block setting `--theme-primary` from a user color-picker (`.colorpicker`) plus `localStorage`, defaulting to `#25935f`. This is an intentional runtime override, not a missing SCSS token — nothing to substitute it with; left unchanged as correctly implemented.
- Icon sizing: `.page-link img` height (24px, width not explicitly set) **migrated** to `map.get($moi-icon-sizes, lg)` during the Icon Size Migration pass.
- **Quality score (Autonomous Maintainer Batch 5, 2026-07-16):** Design System Consistency 6, SCSS Quality 7, Token Usage 6.5, Accessibility 6, Documentation 4, Maintainability 6.5, Reusability 6 → **Overall ≈6.0** (Below-8 band — safest available fixes applied).
- Safe fixes applied: `.leftnav select`'s duplicate `font-weight: 500;` removed; `.leftnav`/`.leftnav .goto`'s `gap: 10px` reused `$gap-10` (exact match).
- Left unchanged (no exact match): `.leftnav select`'s `border: 1px solid #bababa;` and `border-radius: 5px;`; `.page-link`'s `border-radius: 5px;`. `--theme-primary`'s source is now confirmed (see above), no fix needed.
- Public API change allowed: No, without Owner Approval.

### Modal
- Public class/API: `.modal` (Bootstrap-based) with PS-Design-specific nested classes: `.modal-info-header`, `.modal-danger-header`, `.modal-header`, `.modal-body`, `.modal-footer`, `.btn-close`, `.close`.
- SCSS source: `css/common/_modal.scss`.
- Documentation page: Not found as a dedicated page.
- `components.json`: "Modal" entry (original token-reference schema).
- Confirmed via direct read: three header color variants (info/danger/default-neutral), each with its own close-icon image reference (`$modal-close-icon-path`, `$modal-danger-close-icon-path` — both point to `../images/*.svg` files, not re-verified for existence in this pass). Also contains one unrelated, page-specific rule (`#IframeViewer { z-index: ... }`) that isn't part of the Modal component's own API — just co-located in the same file.
- RTL support: Needs Owner Confirmation (no explicit RTL-only rules found in this file).
- Icon sizing: `$modal-close-size` was already an exact `1rem` literal, **migrated** to `map.get($moi-icon-sizes, sm)` reference during the Icon Size Migration pass (zero value change — pure token-reference swap; confirmed via compiled output, `%modal-close-button`'s consumers still compile to `width/height: 1rem`).
- **Quality score (Autonomous Maintainer Batch 7, 2026-07-16):** Design System Consistency 7, SCSS Quality 7, Token Usage 7, Accessibility 6, Documentation 4, Maintainability 7, Reusability 7 → **Overall ≈6.43** (Below-8 band — safest available fixes applied).
- Safe fixes applied: `.modal-header`'s `padding: $gap-16` (a gap-category token on a padding property) reused the semantically-correct `$padding-xl` (same 16px value); `.form-check`'s `padding: 10px 1.5rem 5px 5px` — the `1.5rem` (24px) component matched `$padding-3xl` exactly, reused (other 3 values have no match, kept literal).
- **Notable finding, not changed:** `.modal-header .btn-close` `@extend`s `%modal-close-button` (which sets `width/height: $modal-close-size` = 1rem/16px) but then immediately overrides both with explicit `width: 34px; height: 34px;` in the same rule — meaning this specific close button actually renders at 34px, not 16px like the other two header variants' close buttons. This is a real, pre-existing visual inconsistency between header variants, not a bug this pass introduced — left untouched since "fixing" it would be a genuine visual-behavior change requiring Owner approval, not a token substitution.
- **Resolved (Autonomous Maintainer Batch 9, 2026-07-16):** `%modal-header-heading` — confirmed (again) never `@extend`ed anywhere in the `css/` tree, and now explicitly authorized for removal under this batch's instructions ("You may remove `%modal-header-heading` if it is confirmed unused and produces zero output"). Removed; verified via isolated compile diff that the compiled output is 0 lines different anywhere in the project.
- **`.btn-close` 34px re-investigated, still unchanged (Batch 9):** 34px does not match any entry in `$moi-icon-sizes` or any other sizing token in the project, so there is no "existing approved size" to align it to per this batch's explicit instruction. Left unchanged, still flagged for visual QA — this is a real, pre-existing visual inconsistency between header variants (16px vs. 34px close buttons), not a bug introduced by any pass in this engagement.
- Public API change allowed: No, without Owner Approval.

### Switch
- Public class/API: Bootstrap `.form-check.form-switch` pattern (distinct from Checkbox — intentionally excluded from Checkbox/Radio consolidation).
- SCSS source: `css/common/_Switch.scss`.
- Documentation page: `DesignSystemDocumentation/switch.html`.
- `components.json`: "Switch" entry added during the SCSS Improvement Phase.
- **Quality score (Autonomous Maintainer Batch 8, 2026-07-16):** Design System Consistency 8, SCSS Quality 9, Token Usage 8, Accessibility 9.5, Documentation 8, Maintainability 9, Reusability 8 → **Overall ≈8.5** (Improve-only-if-clear-low-risk-benefit band — no changes made). Re-read in full: already a clean, well-organized file with no dead code and no unmatched hardcoded values found. Notable strength: includes a `@media (prefers-reduced-motion: reduce)` block disabling the thumb-slide transition for users who request reduced motion — a genuine accessibility feature not seen in most other components audited this session.
- Public API change allowed: No, without Owner Approval.

### Stepper
- Public class/API: Needs Owner Confirmation on exact class list.
- SCSS source: `css/components/_stepper.scss`, `css/components/_radial-stepper.scss` (radial variant).
- Documentation page: `DesignSystemDocumentation/stepper.html`.
- `components.json`: "Stepper" entry added during the SCSS Improvement Phase.
- Icon sizing: `.steps li::after` (background-image arrow icon box) and `.wizerd__item--Complated .wizerdImage svg` — both 20px, **migrated** to `map.get($moi-icon-sizes, md)` (1.25rem) during the Icon Size Migration pass. `.wizerdImage` itself (34px badge circle) and `.stepsNumber span` (24px step-number badge) left unchanged — both are avatar/counter badges, not glyph icons. `_radial-stepper.scss` reviewed in full (progress-ring component, `60px`/`14px` stroke-width) — no icon sizing present, nothing eligible.
- **Quality score, `_stepper.scss` (Autonomous Maintainer Batch 8, 2026-07-16):** Design System Consistency 6, SCSS Quality 7, Token Usage 7.5, Accessibility 6, Documentation 7, Maintainability 7, Reusability 6.5 → **Overall ≈6.71** (Below-8 band — safest available fix applied). Fixed: `.wizard > .steps .wizerdImage`'s `margin-left: 12px` reused `$margin-lg` (exact match). Left unchanged (no exact match after re-check): `.wizerdImage`/`.wizard .wizerdImage` (34px badges), `.stepsNumber span` (24px badge), `.wizard .steps .disabled img` (18px, no paired width, ambiguous), `margin-bottom: 15px`.
- **Quality score, `_radial-stepper.scss` (Autonomous Maintainer Batch 8, 2026-07-16):** Design System Consistency 9, SCSS Quality 9, Token Usage 9, Accessibility 7, Documentation 7, Maintainability 9, Reusability 8.5 → **Overall ≈8.36** (Improve-only-if-clear-low-risk-benefit band). Re-read in full — genuinely clean, no safe changes found; its geometry values (60px ring, 70px flex-basis, 14px stroke-width) are progress-ring-specific dimensions with no applicable token category.
- Public API change allowed: No, without Owner Approval.

### Tabs
- Public class/API: two separate, unrelated implementations, both layered on Bootstrap's native `.nav-tabs`/`.tab-content`:
  - `.create__tabs .nav-tabs .nav-link` (`_tabs.scss`) — circular icon-style tabs (80×80px, dashed border, `#140ddc` active color).
  - `.tabsDesign nav` / `.tabsDesign .tab-content` (`_tabsDesign.scss`) — a bordered card-style tab panel (`#1b8354` border, white content area).
- SCSS source: `css/components/_tabs.scss` **and** `css/components/_tabsDesign.scss`.
- Confirmed via direct read: **not overlapping/duplicate** — these are two visually and structurally distinct, page-scoped skins over Bootstrap tabs, not two competing implementations of the same component. No consolidation is applicable; this resolves the "possible overlap not yet investigated" note from the prior pass.
- Documentation page: **Resolved (Autonomous Maintainer Batch 9, 2026-07-16)** — `DesignSystemDocumentation/tabs.html` created, documenting both patterns with real selectors, anatomy tables, usage rules, accessibility guidance, and Developer API code samples.
- `components.json`: **Resolved (Batch 9)** — "Tabs" entry added under explicit Owner authorization, referencing both SCSS files and the new documentation page.
- **Quality score, `.create__tabs` (`_tabs.scss`) (Autonomous Maintainer Batch 7, 2026-07-16):** Design System Consistency 4, SCSS Quality 6, Token Usage 5, Accessibility 5, Documentation 2, Maintainability 6, Reusability 4 → **Overall ≈4.57**. No fix — `#140ddc`/`#c8c6ff` were individually re-checked against the full token file, no exact match exists anywhere; `margin: 0 10px` and `width/height: 80px` also have no exact token match. Page-scoped skin, small file, nothing safely actionable.
- **Quality score, `.tabsDesign` (`_tabsDesign.scss`) (Autonomous Maintainer Batch 7, 2026-07-16):** Design System Consistency 6, SCSS Quality 6, Token Usage 5, Accessibility 5, Documentation 2, Maintainability 6, Reusability 5 → **Overall ≈5.0** before fixes, **higher after** (5 safe fixes applied): `background: #f8f6f2`→`$baige`, `border-color: #1b8354`→`$Primary-600`, two `border-radius` values (6px→`$radius-sm`, 8px→`$radius-md`), `background: #fff`→`$white-100` — all exact color/value matches, confirmed via direct comparison against `_variables.scss`. Also removed a dead `display: block;` in `.tab-content > .active` — it was always overridden by a later `display: flex;` in the same rule (zero computed-style change).
- Public API change allowed: No, without Owner Approval.

### Tags
- Public class/API: `.moi-tag`, `.moi-tag--filled`, and related modifiers.
- SCSS source: `css/common/_tags.scss`.
- Documentation page: `DesignSystemDocumentation/tags.html`.
- `components.json`: entry added during the SCSS Improvement Phase as "Tags (current .moi-tag API)".
- Current status: Cleanup, hardcoded-value reduction, and `!important` reduction inside Tags are explicitly **postponed** (out of scope for prior work by Owner instruction).
- The "Design System Icon Size Migration" task explicitly listed Tags as in-scope, but `.tag-close svg` (already variable-based, `$icon-size`) and other Tags icon sizing were **not touched at that time**, honoring the then-standing postponement.
- **Postponement cancelled 2026-07-16** — Tags is now in active Design System maintenance scope (Autonomous Design System Maintainer Mode). Reviewed in Batch 1.
- **Quality score (Autonomous Maintainer Batch 1, 2026-07-16):** Design System Consistency 9, SCSS Quality 9, Token Usage 8, Accessibility 9, Documentation 7.5, Maintainability 9, Reusability 9 → **Overall ≈8.64** (Improve-only-if-clear-low-risk-benefit band — already a high-quality, well-architected file; 2 small safe fixes applied, one architecture finding logged, nothing else warranted touching).
- Already excellent practice confirmed: `_moi-tag-size($size-token)` already reads icon sizing straight from `map.get($moi-icon-sizes, $size-token)` (line ~218) — this is the correct, established pattern the rest of the Design System should follow.
- Safe fixes applied: `$moi-tag-gap`'s `default` (8px) → `$gap-md` reference; `$moi-tag-remove-sizes`'s `radius` (2px) → `$radius-xxs` reference. Both exact-value, same-semantic substitutions, zero visual change.
- Left unchanged (documented, no exact/semantic match): `$moi-tag-control-sizes`'s `default: 36px` (coincidentally equals a `$form-control-sizes` height entry, but tag-pill-height and form-input-height are different semantic concepts — not merged); `legacy-indicator-offset: 5px`; `focus-outline`/`focus-offset: 2px` (outline geometry, not a radius, no dedicated token exists anywhere in the project for this).
- **Architecture Opportunity — Needs Owner Approval (not implemented):** `$moi-tag-control-sizes`'s `sm`/`md`/`lg`/`xl`/`2xl`/`3xl`/`4xl` entries are byte-identical, key-for-key, to `$moi-icon-sizes` — the values were re-typed into a second map rather than derived from the shared one. Benefit of merging: single source of truth, avoids future silent drift if one map is edited and not the other. Risk: this would semantically couple "tag control height" to "icon size," which are different concerns that only coincidentally share values today — if the Owner ever changes icon sizing independently, tag height would silently follow unless this coupling is intentional. Affects: `css/common/_tags.scss` only. Suggested approach if approved: derive `$moi-tag-control-sizes`'s shared keys from `$moi-icon-sizes` via a small `@each`/`map.merge`, keeping `default: 36px` as the one truly tag-specific entry.
- Public API change allowed: No, without Owner Approval.

### Date Picker
- Public class/API: Needs Owner Confirmation (not deeply audited).
- SCSS source: `css/common/_datepicker.scss`; vendor CSS `css/bootstrap-datetimepicker.css`.
- Documentation page: Not found as a dedicated page.
- Current status: Cleanup **postponed**; vendor overrides should remain unchanged for now, per Owner decision.
- Public API change allowed: No, without Owner Approval.

---

### Timeline
- Public class/API: Needs Owner Confirmation on exact class list — two visually distinct skins in one file: `.timeline` (left/right alternating card timeline) and `.iq-timeline2`/`.Itinerary` (date-badge + content-block timeline, used for activity/itinerary feeds).
- SCSS source: `css/components/_timeline.scss`.
- Documentation page: **Resolved (Autonomous Maintainer Batch 9, 2026-07-16)** — `DesignSystemDocumentation/timeline.html` created, documenting both patterns with real selectors, anatomy tables, usage rules, accessibility guidance, and Developer API code samples.
- `components.json`: **Resolved (Batch 9)** — "Timeline" entry added under explicit Owner authorization.
- Previously reviewed for icon sizing only during the Icon Size Migration pass (connector dots, arrow border-widths, avatar images) — no confirmed reusable icon-svg sizing found at that time, nothing migrated. Full component audit completed in Batch 8.
- **Quality score (Autonomous Maintainer Batch 8, 2026-07-16):** Design System Consistency 4, SCSS Quality 5, Token Usage 6 (post-fix), Accessibility 5, Documentation 2, Maintainability 5, Reusability 5 → **Overall ≈4.57** (Below-8 band — safest available fixes applied).
- Safe fixes applied (9 total, all exact-value token/color substitutions, zero visual change): `.timelinecontainer`'s `padding: 10px 40px` → `padding: 10px $padding-5xl` (only the 40px component matched; 10px kept literal); `.content`'s `background-color: white` → `$white-100`; `.bg-Date`'s `background-color: #ffffff` → `$white-100`; `.bg-Date-currant .content-date`'s `color: #fff` → `$white-100`; `.iq-timeline2 .content-block`'s `background: #fff` → `$white-100` and `border-radius: 8px` → `$radius-md`; `.Itinerary .content-block`'s `background: #fff` → `$white-100` and `border-radius: 8px` → `$radius-md`; `.Itinerary .numric`'s `color: #fff` → `$white-100`.
- Left unchanged (re-checked individually, no exact token match): connector dot `::after` (2px width, `#9b9b9b`), timeline node dots (15×15px, `#fefff6`/`#bfbfbf`), arrow-triangle border-widths (9/11/13px, `rgba(...)`/`#bfbfbf`/`#ffffff`), various grays (`#c2c2c2`, `#c9c9c9`, `#e7e7e7`, `#ededed`, `#f1f1f1`, `#6f778d`), avatar images (`.iq-timeline2 .content-block img`, 40×40px), `.Itinerary .numric`'s 20×20px badge size (ambiguous — avatar/badge-style, excluded per icon-sizing rule), `.Itinerary .topInfo .block img` (16px height-only, no paired width — ambiguous, left as-is for consistency with prior caution on unpaired dimensions).
- **Documentation gap noted, not actioned:** no dedicated documentation page and no `components.json` entry exist for this component despite real, active use across at least two distinct visual patterns — flagged as a Needs-Owner-Decision item, consistent with how other undocumented-but-real components (`.moi-notification`, `.alert-primary` family) have been handled in this engagement.
- Public API change allowed: No, without Owner Approval.

## Other Components Present (Not Yet Audited)
- **Breadcrumb** — `css/common/_breadcrumb.scss`.
- **Charts** — `css/components/_charts.scss` (noted as conceptually overlapping with the unused `_ViolationDirectoryApproval.scss` partial — investigated, not merged, in `IMPROVEMENT_BACKLOG.md`).

These are confirmed to exist via direct file inspection but have not received a component-level audit (variants/states/tokens/RTL/accessibility). Treat any claim about their internals as Needs Owner Confirmation until audited.
