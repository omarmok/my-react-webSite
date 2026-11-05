# PS-Design — Project Context

_Last updated: 2026-07-15. Based on direct inspection of the repository; items without direct evidence are marked "Needs Owner Confirmation" rather than assumed._

## Project Name
- Public Security Design System — code name **AMN** (نظام التصميم – الأمن العام).
- Version per `README.md`: `0.1.0-alpha`.

## Purpose
- A governed UI framework for enterprise/government-grade security platforms (per `README.md`, `GOVERNANCE.md`).
- Establishes a shared vocabulary for foundations, components, and governance rules to ensure consistency, accessibility, security, and auditability across products.

## Main Goals (per project governance docs)
- One canonical, Arabic-first RTL component library reused across multiple internal products (Cases, Traffic Violations, User Management, Arrested Persons, Security Case, etc.).
- Documented, governed component API surface with a defined ownership/change process (`GOVERNANCE.md`).

## Technology Stack
- HTML/CSS Design System on Bootstrap 5 (`css/bootstrap-v5.css` present; Bootstrap-derived classes such as `.form-check`, `.dropdown-menu`, `.alert-*` are used throughout).
- Sass (SCSS) using the `@use`/`@forward` module system throughout. The previous legacy `@import "../customclasses";` in `css/components/_card.scss` (which caused `_customClasses.scss` to compile twice) was changed to `@use "../customclasses";` by the Owner directly — detected and verified 2026-07-16 (compiles cleanly, `@extend` calls still resolve, duplication gone). No known legacy `@import`s remain as of that date.
- IBM Plex Sans Arabic as the project's stated typography (per project rules given at kickoff; not independently re-verified against font files in this pass).
- jQuery-era vendor libraries present (slick, aos, sweet-alert, mdb, dataTables, swiper, vue-treeselect, mapbox-gl, etc.). JavaScript dependency auditing is explicitly out of scope for this workspace.
- CSS build (2026-10-18): the repo root has `package.json` + `scripts/build-css.mjs` (Dart Sass + Autoprefixer, browserslist `defaults`). `npm install` once, then `npm run build:css` or `npm run watch:css` (also VS Code tasks «CSS: build» / «CSS: watch»). It writes `css/main.css` + `css/main.min.css` with `.map` files — the same outputs the VS Code Live Sass Compiler extension produced, which is no longer needed. Never edit the compiled files by hand.

## Folder Structure (confirmed via direct directory listing)
- `css/`
  - `css/helpers/` — Design Tokens (`_variables.scss`), mixins, fonts, spacing, icons.
  - `css/common/` — shared/global partials: `_buttons.scss`, `_oldButtons.scss` (legacy, still in use), `_buttonBase.scss`, `_checkbox.scss`, `_common.scss`, `_tags.scss`, `_modal.scss`, `_nav.scss`, `_form.scss`, `_datepicker.scss`, `_Switch.scss`, `_breadcrumb.scss`, `_vue-treeselect.scss`, `_layout.scss`.
  - `css/components/` — component-specific partials: `_card.scss`, `_stepper.scss`, `_radial-stepper.scss`, `_tabs.scss`, `_tabsDesign.scss`, `_table.scss`, `_file-uploader.scss`, `_personCard.scss`, `_PersonCardInfra.scss`, `_Notification.scss`, `_charts.scss`, `_timeline.scss`, and several page-adjacent partials (`_hearing.scss`, `_letters.scss`, `_mapDesign.scss`, etc.).
  - `css/pages/` — page SCSS grouped by domain (8 modules since 2026-10-18; see «Page modules» below). Each module only defines `@mixin`s; `css/_pages.scss` emits them with `@include` in the original cascade order.
  - `css/login/`, `css/map/` — scoped partials.
  - `css/main.scss` — root aggregator: `@use "./helpers"; @use "./components"; @use "./common"; @use "./login"; @use "./pages"; @use "./customClasses";`
  - `css/_customClasses.scss` — utility-class file; extensive intentional `!important` usage.
- `DesignSystemDocumentation/` — canonical documentation per `README.md`/`GOVERNANCE.md`. Contains `index.html` plus per-topic pages: `buttons.html`, `card.html`, `alert.html`, `stepper.html`, `switch.html`, `tags.html`, `file-uploader.html`, `personcard.html`, `ColorSystem.html`, `typography.html`, `spacing.html`, `radius.html`, `shadows.html`, `iconography.html`, `text-fields.html`, `layout.html`, `Entity.html`, `StartDeveloping.html`, plus `i18n-audit.json` (purpose not investigated in this pass — Needs Owner Confirmation).
- Root-level `.html` files (`index.html`, `components.html`, `Card.html`, `alert.html`, `layout.html`, `file-uploader.html`, `moi-person-card.html`, etc.) and numerous product folders (`Cases/`, `TrafficViolition/`, `SecurityCase/`, `ArrestedPersons/`, `UserManagement/`, `timeLine/`, etc.) — see "Relationship between SCSS and HTML examples" below.
- `components.json` (root) — code-facing component catalog.
- `tokens.json` (root) — Design Tokens: `color`, `spacing`, `radius`, `shadow`, `typography`, `buttons`, `forms`.
- `README.md`, `GOVERNANCE.md`, `CONTRIBUTING.md`, `CHANGELOG.md` — project governance docs.

## Source of Truth
- **SCSS implementation (`css/`)** is the primary *technical* source of truth for actual rendered behavior.
- **`DesignSystemDocumentation/`** is the primary source of truth for the *documented, approved* component API (per `README.md`'s own "Single Source of Truth" section).
- `README.md` and `GOVERNANCE.md` both state, in their own words, that HTML outside `DesignSystemDocumentation/` (and outside `docs/overview/`) is "deprecated." However, several root-level HTML files and product folders (`index.html`, `Card.html`, `file-uploader.html`, `timeLine/`, `Cases/`) carry recent modification timestamps, which conflicts with a blanket "deprecated" reading.
- **Explicit Owner instruction for this workspace overrides the literal governance wording**: do not automatically classify HTML files outside `DesignSystemDocumentation/` as production, legacy, or deprecated. Treat them as examples, prototypes, previous implementation references, or developer working pages until confirmed case-by-case. This override is recorded here so future AI sessions do not "correct" it back to the governance docs' literal wording.

## SCSS Architecture
- Module system: `@use`/`@forward`, aggregated through `css/_common.scss`, `css/_components.scss`, `css/_helpers.scss`, `css/_pages.scss`, `css/_login.scss` into root `css/main.scss`.
- Naming convention: `.moi-` prefixed, BEM-ish modifiers (`.moi-btn`, `.moi-btn--Primary`, `.moi-card__header`, `.moi-tag--filled`).
- Button sizing pattern: `data-size="sm|md|lg|xl"` attribute driven, backed by CSS custom properties (`--btn-height`, `--btn-px`, etc.) sourced from the shared `$moi-btn-sizes` Sass map (now centralized — see `KNOWN_DECISIONS.md`).
- A legacy button system (`css/common/_oldButtons.scss`) coexists with the current one (`css/common/_buttons.scss`); migration is in progress and not complete (e.g., `--text-icon`, `--text--brown` variants still legacy-only).
- The previous double-compilation of `_customClasses.scss` via the legacy `@import` in `_card.scss` was resolved by the Owner directly (2026-07-16) — see Technology Stack above.

## Documentation Structure
- `DesignSystemDocumentation/index.html` is the documentation entry point.
- `components.json` (root) is a separate, code-facing catalog that partially mirrors `DesignSystemDocumentation/` but currently uses **two different internal schemas**:
  - The original 9 entries (Button, Input Field, Alert, Badge/Priority Pill, Table, Modal, Dropdown, Checkbox, Radio) use a token-reference schema (`anatomy` / `variants` with nested `styles` / `sizeTokens` / `states` / `notes`).
  - The 6 entries added in the prior SCSS Improvement Phase (Card, File Uploader, Stepper, Switch, Person Card, Tags) use a flatter schema (`purpose` / `scssFile` / `documentationPage` / `rtlNotes` / `accessibilityNotes`).
  - This inconsistency is real, evidenced directly in the JSON, and unresolved. It was not fixed previously because the instruction at the time was "extend, do not redesign the schema." Flagged in `IMPROVEMENT_BACKLOG.md` as a pending analysis item — no schema change should be made without Owner approval, since `components.json`'s structure is itself part of the documented contract consumed by tooling/developers.

## Component Architecture
- See `COMPONENT_REGISTRY.md` for the full, evidence-based inventory.
- Typical shape: a root `.moi-*` class, BEM modifier classes for variants (`--Primary`, `--outline`, etc.), and in some components a `data-*` attribute for sizing/state.
- At least one component (Radio) currently has **no centralized, reusable public implementation** — only a page/ID-scoped instance exists (`#Accidents label.radio` in `css/common/_common.scss`). Centralizing it requires introducing a new public class, which is Owner-approval-gated per `ARCHITECTURE_RULES.md`.

## Design Tokens
- Defined in `css/helpers/_variables.scss` (SCSS variables) and mirrored in `tokens.json` (JSON: `color`, `spacing`, `radius`, `shadow`, `typography`, `buttons`, `forms`).
- Known unresolved token issue: `$Info-25` and `$Info-50` currently share the same value in both `_variables.scss` and `tokens.json`. No independent source (e.g., a Figma export) was available to confirm whether this is intentional or a duplication bug. **Investigated further 2026-07-16:** confirmed `Info` is the only color family (of `Neutral`, `Lavender`, `Primary`, `Info`, `Error`, `Warning`) where `25` and `50` share an identical value — every other family has genuinely distinct steps, and `tokens.json` independently shows the same duplication (not a single-file typo). Strengthens the case that this is a likely duplication bug, but no correct differing value can be proven — left unchanged, still Needs Owner Confirmation.

## Build / Compilation Process
- `npm run build:css` / `npm run watch:css` (see Technology Stack). `css/main.css` and the other generated files must never be edited manually.
- `npm run css:diff` (2026-10-20, `scripts/css-diff.mjs`) compiles the working tree and `origin/main` (or `npm run css:diff -- <ref>`) and compares them declaration by declaration: removed / added / reordered. A pure refactor must report 0 / 0 / 0. Also available as the VS Code task «CSS: diff vs main».

## SCSS change checklist (every SCSS batch)
1. Temporary branch from `main` (`fix/`, `chore/`, `feature/`).
2. Descriptive commit messages — `type(scope): what and why`, e.g. `refactor(scss): merge case pages into case-records`; never «css» / «fix css».
3. `npm run build:css` and commit the compiled `main.css` / `main.min.css` together with the SCSS in the same commit.
4. `npm run css:diff` — paste the summary in the PR; every removed or changed declaration must be intentional.
5. Visual check of the affected pages, then Owner approval before merging (design-affecting changes).

## Page modules (css/pages, 2026-10-18)
Old page partial → new module mixin (emitted from `css/_pages.scss` in this order):

| Old partial | New module · mixin |
|---|---|
| `_landingpage` | `overview` · `landing-page` |
| `_ maincontainer` | `identity-access` · `verification` |
| `_SecurityCase` | `case-workflows` · `security-case` |
| `_SecurityCaseFa` | `case-workflows` · `security-case-states` |
| `_violitionDetails` | `case-records` · `violation-details` |
| `_UserManagementRols` | `identity-access` · `permissions` |
| `_summary` | `reporting` · `summary` |
| `_cases` | `case-records` · `case-details` |
| `_report` | `reporting` · `report` |
| `_email` | `mail` · `message` |
| `_ArrestedPersons` | `field-procedures` · `statements` |
| `_OtarrContainer` | `field-procedures` · `examination` |
| `_VehiclesRestriction` | `field-procedures` · `vehicle-restrictions` |
| `_Sessionexpired` | `identity-access` · `session-expired` |
| `_userManagmetStyle` | `identity-access` · `user-administration` |
| `_CivilComplains` | `case-workflows` · `civil-complaints` |
| `_newDSCasesBasicInfo` | `case-records` · `basic-information` |
| `_newims` | `identity-access` · `inquiry` |
| `_incomingIncidents` | `inbox` · `incoming` |
| `_dashboardMainContent` | `overview` · `dashboard` |
| `_SecurityCaseDetails` | `case-workflows` · `details` |
| `_emailContainer` | `mail` · `mailbox` |
| `_violitionDashboard` | `overview` · `violation-dashboard` |
| `_violationinbox` | `inbox` · `violations` |
| `_recordCreate` | `case-records` · `create-record` |
| `_incidentinbox` | `inbox` · `incidents` |
| `_violitionStatistics` | `overview` · `violation-statistics` |
| `_Deathmanagment` | `field-procedures` · `death-management` |
| `_accidentCreateMainDiv` | `case-records` · `attachments` |

Removed by the Owner (2026-10-18): `_TrafficViolition`, `_searchAboutCaseMembers`, `_createAgency` (empty), `_createUser`, `_ViolationDirectoryApproval`. All recoverable from git history.
Kept on purpose (Owner, 2026-10-20): `_newPermits.scss` stays in `css/pages/` even though `_pages.scss` does not import it — do not delete it.
HTML pages in this repo are test pages only (Owner, 2026-10-20): do not edit them, and a class used only in test HTML is not a reason to keep its CSS.

## Current Project Status
- Actively maintained: multiple root HTML files and product folders show recent modification activity, indicating ongoing work outside `DesignSystemDocumentation/` — this is precisely why this workspace does not auto-label that content as deprecated.
- A Safe SCSS Improvement Phase (9 Owner-approved priorities) was completed: `moi-btn--text` migrated into the current button system, `$moi-btn-sizes` centralized, Checkbox SCSS centralized, `components.json` expanded (6 components added), 2 dead-code utility duplicates removed from `_customClasses.scss`, gradual token adoption applied to touched files. A Radio centralization attempt introduced a new public class (`.moi-radio-group`) and was **reverted** after the Public API Protection Rules were established, since it had not received prior approval.
- Full status of every backlog item is tracked in `IMPROVEMENT_BACKLOG.md`.

## Relationship Between SCSS and HTML Examples
- `DesignSystemDocumentation/*.html` pages are expected to demonstrate the documented, approved component API and should stay in sync with the SCSS implementation.
- Root-level and product-folder `.html` files (outside `DesignSystemDocumentation/`) are **not assumed** to be production, legacy, or deprecated by default. Per Owner instruction, treat them as examples, prototypes, or developer-reference pages until confirmed otherwise, case by case.
- Neither type of HTML file overrides the SCSS as the technical source of truth for actual rendered styling.

## Relationship Between SCSS and DesignSystemDocumentation/
- `DesignSystemDocumentation/` documents the *intended, approved* public API.
- `css/` SCSS implements the *actual* rendered behavior.
- When the two disagree (e.g., a documented example existed only in legacy SCSS, not the current system, as was the case with `moi-btn--text`), the resolution is to bring the SCSS implementation in line with what is already documented — via Owner-approved, additive, backward-compatible changes — rather than editing the documentation to match a different reality, and never by inventing a new API to close the gap without approval.
