# Trim Bottom Whitespace On `it-support` Resume Variant

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `.agent/PLANS.md`.

## Purpose / Big Picture

The `it-support` resume PDF currently leaves noticeably more whitespace at the bottom of the page than needed. After this change, the generated `public/resume/kevin-mok-resume-it-support.pdf` output should keep the same one-page layout and validation guarantees while using a little more of the printable page area so the bottom gap is smaller.

## Progress

- [x] (2026-03-09 17:06Z) Read repository instructions, resume layout docs, and current `it-support` print CSS block.
- [x] (2026-03-09 17:07Z) Measured the current generated `it-support` PDF and confirmed bottom whitespace is `47.218pt`.
- [x] (2026-03-09 17:25Z) Kept the staged `it-support` resume content rebalance in `lib/resume-data.ts` and increased `--resume-print-top-offset` from `1.718pt` to `7.718pt` in `app/styles/13-resume-latex.css`.
- [x] (2026-03-09 17:26Z) Ran `npm run build`, `npm run calibrate:resume-layout`, `npm run verify:resume-layout`, and `npm run validate-resume-pdfs`; all passed with `public/resume/kevin-mok-resume-it-support.pdf` still on one page and measured at `41.218pt` bottom whitespace.

## Surprises & Discoveries

- Observation: The current `it-support` PDF already clears the enforcement floor by a wide margin, so this task is about visual balance rather than passing an existing max-whitespace rule.
  Evidence: `docs/resume/resume-layout-baseline.json` enforces `bottomWhitespaceMinPts: 21.793`, while `node scripts/measure-resume-bottom-whitespace.mjs --pdf public/resume/kevin-mok-resume-it-support.pdf --json` reported `47.21785599999998`.
- Observation: The staged worktree also rebalanced the `it-support` experience bullets by adding one more `redHatSupportExperience` bullet and removing one `digitalMarketplaceExperience` bullet.
  Evidence: `lib/resume-data.ts` now includes `redHatSupportExperience.bullets[5]` and drops `digitalMarketplaceExperience.bullets[2]` inside the `it-support` variant.

## Decision Log

- Decision: Treat this as a variant-specific print calibration change instead of editing resume copy.
  Rationale: The user asked to reduce bottom whitespace, and the safest lever is the `it-support` print variables in `app/styles/13-resume-latex.css`.
  Date/Author: 2026-03-09 / Codex
- Decision: Preserve the staged `it-support` bullet rebalance instead of reverting to a CSS-only diff.
  Rationale: The worktree already paired the print offset adjustment with a more support-focused bullet mix, and the full resume validation pipeline passed with the resulting one-page PDF and reduced bottom whitespace.
  Date/Author: 2026-03-09 / Codex

## Outcomes & Retrospective

The `it-support` resume variant now uses more of the printable page area without losing its one-page layout. The measured bottom whitespace moved from `47.218pt` to `41.218pt`, which is still comfortably above the enforced `21.793pt` minimum. The final staged change is not CSS-only: it also shifts one experience bullet from the digital marketplace role to the Red Hat support role, which keeps the variant more tightly aligned with support work while maintaining a validated layout.

## Context and Orientation

The resume PDFs are generated from `lib/resume-data.ts` and printed through layout rules in `app/styles/13-resume-latex.css`. Each resume variant can override print density with CSS custom properties such as `--resume-print-scale`, `--resume-print-leading`, and `--resume-print-top-offset`. The `it-support` variant uses the `.resume-variant-it-support` selector in that stylesheet and also selects a specific subset of project and experience bullets inside `lib/resume-data.ts`.

The measurement and verification scripts in `scripts/` use `pdftotext -bbox-layout` to compute page-edge whitespace from the generated PDFs under `public/resume/`. The current hard gate only enforces minimum top and bottom whitespace, so reducing excess bottom whitespace must still keep the PDF one page and above those minimums.

## Plan of Work

Preserve the staged `it-support` bullet selection changes in `lib/resume-data.ts`, then adjust the `.resume-variant-it-support` block in `app/styles/13-resume-latex.css` so the content sits lower on the page without changing line wrapping. After that, regenerate or confirm the generated resume PDFs with the current worktree content, measure the updated `it-support` output, and run the repository’s required resume gate commands to confirm the variant still validates.

## Concrete Steps

From `/home/kevin/coding/portfolio-site`:

1. Edit `app/styles/13-resume-latex.css` in the `.resume-variant-it-support` block.
2. Keep the `it-support` bullet changes in `lib/resume-data.ts`.
3. Run `npm run build`.
4. Run `npm run calibrate:resume-layout`.
5. Measure the updated output with `node scripts/measure-resume-bottom-whitespace.mjs --pdf public/resume/kevin-mok-resume-it-support.pdf --json`.
6. Run `npm run verify:resume-layout`.
7. Run `npm run validate-resume-pdfs`.

## Validation and Acceptance

Acceptance means:

- `public/resume/kevin-mok-resume-it-support.pdf` remains one US Letter page.
- The measured bottom whitespace for `it-support` is lower than the pre-change `47.218pt`.
- The final staged bullet mix for `it-support` remains support-focused, with six Red Hat bullets and one Digital Marketplace bullet.
- `npm run verify:resume-layout` passes for the generated resume set.
- `npm run validate-resume-pdfs` passes for the generated resume set.

## Idempotence and Recovery

This work is safe to repeat. Re-running `npm run build`, `npm run verify:resume-layout`, and `npm run validate-resume-pdfs` only regenerates and checks the PDFs. If the layout regresses, restore the original `.resume-variant-it-support` values and rerun the same commands.

## Artifacts and Notes

Initial measurement artifact:

    {
      "pdfPath": "/home/kevin/coding/portfolio-site/public/resume/kevin-mok-resume-it-support.pdf",
      "topWhitespacePts": 6.393942,
      "bottomWhitespacePts": 47.21785599999998
    }

Post-change measurement artifact:

    {
      "pdfPath": "/home/kevin/coding/portfolio-site/public/resume/kevin-mok-resume-it-support.pdf",
      "topWhitespacePts": 12.393942,
      "bottomWhitespacePts": 41.21785599999998
    }

Validation artifact:

    npm run verify:resume-layout
    ...
    OK kevin-mok-resume-it-support.pdf expected=21.793pt actual=41.218pt bottomDeficit=-19.425pt topDeficit=-7.500pt ratio=5.2043%
    All checked resume PDFs meet top/bottom whitespace minimums.

    npm run validate-resume-pdfs
    ...
    OK kevin-mok-resume-it-support.pdf pages=1 size=Letter fonts=CMUSerif topWhitespace=12.394pt bottomWhitespace=41.218pt targetTopMin=4.894pt targetBottomMin=21.793pt ratio=5.20%
    All resume PDFs passed validation.

## Interfaces and Dependencies

This task uses existing resume tooling and does not add dependencies:

- `app/styles/13-resume-latex.css`
- `scripts/measure-resume-bottom-whitespace.mjs`
- `scripts/verify-resume-layout.mjs`
- `scripts/validate-resume-pdfs.mjs`

Revision notes:
- (2026-03-09) Initial ExecPlan created for a minimal `it-support` bottom-whitespace trim.
- (2026-03-09) Updated the plan after validation to reflect the staged bullet rebalance, successful resume gate runs, and the final `41.218pt` bottom-whitespace measurement.
