# PS-Design — Coding Standards

_Only standards actually supported by the project and confirmed by the Owner. Nothing here is an invented "best practice" — if it isn't evidenced or explicitly decided, it isn't listed._

## SCSS
- Use Sass `@use` and `@forward` (the project's dominant and, as of 2026-07-16, only pattern — the last remaining legacy `@import` in `css/components/_card.scss` was converted to `@use` by the Owner directly). Do not add new legacy `@import`s.
- Preserve existing import order in aggregator files (`css/main.scss`, `css/_common.scss`, `css/_components.scss`, `css/_pages.scss`, `css/_helpers.scss`, `css/_login.scss`).
- Keep helpers, components, common, login, pages, and custom utilities separated — do not move rules across these boundaries without a clear shared-vs-page-specific justification.
- Keep page-specific rules in page files (`css/pages/`).
- Keep shared component rules in component (`css/components/`) or common (`css/common/`) files.
- Do not move rules solely for aesthetics or file organization — every move must have a functional or de-duplication justification, verified by compile diff.
- Avoid increasing selector specificity.
- Do not remove intentional utility `!important` (the dominant pattern in `_customClasses.scss`) — only remove where dead/duplicate status is provable via cascade logic or byte-identical duplication.

## Naming
- Preserve existing `.moi-` namespaced public APIs.
- Preserve existing BEM structures (`&--Variant`, `&__element`).
- Do not create new public names without approval.
- Do not rename inconsistent legacy selectors automatically, even when the inconsistency is obvious.

## Tokens
- Use exact existing Tokens when available (`css/helpers/_variables.scss`, mirrored in `tokens.json`).
- Do not approximate a Token value to the nearest existing one.
- Do not create or rename Tokens without approval.
- Where no exact Token exists for a literal value, keep the literal and document why (as done for `#000`, `5px` in the `moi-btn--text` port).

## Components
- Preserve states and variants exactly as implemented.
- Preserve existing HTML compatibility — no markup contract changes.
- Keep internal SCSS changes invisible to consumers (pure refactors must produce identical compiled output).
- Treat documented examples in `DesignSystemDocumentation/` as API contracts, not just illustrations.

## Documentation
- Documentation examples must match the real SCSS implementation.
- Arabic-first with English support, per the project's established bilingual pattern.
- Do not document an unapproved API.
- Incorrect and correct examples in documentation must be original to this project — do not copy examples from external UX websites (Nielsen Norman, Laws of UX, etc. may be used as evaluation benchmarks, never as content sources).

## Verification
- Compile after approved SCSS changes, using an isolated sandbox — never hand-edit `css/main.css`.
- Compare compiled output before/after (full-project diff, not a spot check).
- Explicitly check which selectors were added and which were removed.
- Report pre-existing warnings (e.g., the `_card.scss` legacy `@import` deprecation) separately from anything newly introduced.

## Git
- Follow `ARCHITECTURE_RULES.md` → Git (updated 2026-10-18): `main` is the only permanent branch; Claude manages Git with temporary task branches that are merged after approval and then deleted.
