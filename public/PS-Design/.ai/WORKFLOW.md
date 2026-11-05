# PS-Design — Standard AI Working Method

_Applies to every future task in this project. Read alongside `ARCHITECTURE_RULES.md` and `KNOWN_DECISIONS.md`._

## 1. Read Context
Before starting any task:
- Read all files inside `.ai/`.
- Review the relevant source files (not just the ones named in the request — check what imports/consumes them).
- Identify existing public APIs touched by the task.
- Identify related previous decisions in `KNOWN_DECISIONS.md`.

## 2. Understand
Clearly define, before touching anything:
- The task objective.
- The requested scope.
- Explicit exclusions.
- Source-of-truth files for this task.
- Potentially affected systems (other components, pages, or documentation that reference the same selectors/tokens).

## 3. Analyze
Before implementation:
- Inspect existing selectors.
- Inspect imports and dependencies (`@use`/`@forward` chain, and the legacy `@import` in `_card.scss`).
- Inspect Tokens and mixins for an existing match before considering a literal value.
- Inspect documentation examples in `DesignSystemDocumentation/`.
- Identify backward-compatibility risks.
- Check explicitly whether the task requires a new public API — if yes, stop per `ARCHITECTURE_RULES.md`.

## 4. Explain
Before any risky change, explain:
- Problem
- Proposed solution
- Files affected
- Public API impact
- Risks
- Verification method
- Rollback approach

## 5. Approval Gate
Stop and wait for Owner Approval when the task would:
- Introduce a new public API
- Remove or rename a selector
- Change component markup
- Change Token values
- Change shared architecture
- Affect many pages
- Modify legacy behavior
- Require a judgment that cannot be proven from the project

## 6. Implement
Only implement explicitly approved work. Rules:
- Make the smallest possible change.
- Do not modify unrelated files.
- Do not perform broad automatic replacements.
- Preserve visual appearance unless a change is explicitly requested.
- Preserve RTL.
- Preserve existing API contracts.

## 7. Compile
After approved SCSS changes:
- Compile `main.scss` in an isolated sandbox (never overwrite `css/main.css` by hand).
- Record errors and warnings.
- Distinguish new warnings from pre-existing ones (e.g., the known `_card.scss` legacy `@import` deprecation warning is pre-existing, not introduced by new work).

## 8. Verify
Verify:
- No selector was unexpectedly removed.
- No new public API appeared.
- No unrelated compiled CSS changed (use a full-project diff, not just a spot check).
- Documentation examples remain valid.
- RTL behavior remains stable.
- Existing component states still work.
- Backward compatibility is preserved.

## 9. Report
Provide a concise report covering:
- Problem
- Solution
- Files changed
- Verification
- Risks
- Items left unchanged
- Items needing Owner Approval

Standing formatting rule (per Owner instruction, established earlier in this project): reports are bilingual (Arabic first, then English), bullet points only, concise, no filler, no code dumps.

## 10. Update AI Workspace
After an approved task:
- Update only the relevant `.ai/` files (typically `KNOWN_DECISIONS.md` and `IMPROVEMENT_BACKLOG.md`).
- Keep decisions and backlog synchronized with what actually happened.
- Do not rewrite unrelated AI documentation "while you're in there."

## 11. Stop
- Do not continue to the next backlog item automatically.
- Do not perform additional cleanup beyond what was approved.
- Do not use Git.
- Wait for the next Owner instruction.
