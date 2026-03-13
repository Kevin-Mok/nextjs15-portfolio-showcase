# VPS Config Copy Not Updating

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This document must be maintained in accordance with `.agent/PLANS.md`.

## Purpose / Big Picture

This investigation determines why updated biography copy in `config/portfolio.config.ts` does not appear on the deployed site after running `./rebuild-restart-portfolio.sh` on the VPS. The goal is to identify the actual source of the rendered text, determine whether environment variables or deployment steps override the checked-in config, and leave a clear path to reproduce and verify the answer.

## Progress

- [x] (2026-03-13 17:58Z) Read repository agent instructions, `.agent/PLANS.md`, `rebuild-restart-portfolio.sh`, and `config/portfolio.config.ts`.
- [x] (2026-03-13 18:08Z) Traced the changed bio fields to the homepage/about renderers and confirmed `intro` is the active field while `short` is fallback-only.
- [x] (2026-03-13 18:10Z) Confirmed the config fields are build-time fallbacks behind `NEXT_PUBLIC_BIO_INTRO` and `NEXT_PUBLIC_BIO_SHORT`, and local `.env.local` already sets both values.
- [x] (2026-03-13 18:12Z) Confirmed homepage metadata does not come from `config/portfolio.config.ts`; it is hardcoded in `app/page.tsx`.
- [x] (2026-03-13 18:13Z) Summarized likely VPS root causes and exact verification commands.
- [x] (2026-03-13 18:24Z) Reproduced the bug by building with `NEXT_PUBLIC_BIO_INTRO=REPO_SYNC_MARKER_9f1d3` and confirming the marker appeared in `.next/server/app/page.js`.
- [x] (2026-03-13 18:27Z) Removed env precedence for homepage `bio.intro` and `bio.short`, and updated tracked docs to make the repo-backed source of truth explicit.
- [x] (2026-03-13 18:31Z) Rebuilt with the same marker, confirmed the marker no longer appears in `.next/server/app/page.js`, and ran `npm run typecheck`.

## Surprises & Discoveries

- Observation: The changed `intro` and `short` strings in `config/portfolio.config.ts` are both guarded by `NEXT_PUBLIC_BIO_INTRO` and `NEXT_PUBLIC_BIO_SHORT` environment variables, so checked-in values are only used when those variables are unset.
  Evidence: `config/portfolio.config.ts` lines 36-48.
- Observation: The homepage desktop about panel reads only `personal.bio.intro`, so changing `short` alone would not affect that surface.
  Evidence: `components/tiles/content/AboutContent.tsx` lines 61-65.
- Observation: The parallax bio section reads `intro || short`, so `short` still loses whenever `intro` is present.
  Evidence: `components/layout/parallax/sections/ParallaxBioSection.tsx` lines 55-58.
- Observation: The homepage `<meta description>` and social metadata are defined directly in `app/page.tsx`, not derived from `config/portfolio.config.ts`.
  Evidence: `app/page.tsx` lines 6-25.
- Observation: `.env.local` already defines the bio strings locally and is not tracked by git, so a VPS copy of that file can override repo changes without changing the git checkout.
  Evidence: `.env.local` lines 24-31; `git ls-files .env.local` returned no tracked file.
- Observation: A build with `NEXT_PUBLIC_BIO_INTRO=REPO_SYNC_MARKER_9f1d3` and `NEXT_PUBLIC_BIO_SHORT=REPO_SYNC_MARKER_9f1d3` injected that marker into `.next/server/app/page.js` before the fix.
  Evidence: `rg -n 'REPO_SYNC_MARKER_9f1d3' .next/server/app/page.js` matched the built homepage config.
- Observation: After removing env precedence for `intro` and `short`, the same marker-based build no longer injected the marker, and the tracked bio string appeared instead.
  Evidence: `rg -n 'REPO_SYNC_MARKER_9f1d3' .next/server/app/page.js` returned no matches; `rg -n 'frontend-heavy full-stack products that launch fast' .next/server/app/page.js` matched.

## Decision Log

- Decision: Start with data flow tracing before assuming the VPS script is broken.
  Rationale: The deploy script does run `npm run build`, so an upstream override or alternate render path is more likely than a rebuild omission.
  Date/Author: 2026-03-13 / Codex
- Decision: Make homepage `bio.intro` and legacy `bio.short` tracked constants in `config/portfolio.config.ts` instead of env-backed fields.
  Rationale: The user wants VPS deploys to sync from git alone, and homepage lead copy is product copy rather than machine-specific configuration.
  Date/Author: 2026-03-13 / Codex

## Outcomes & Retrospective

The deploy script was not the root problem. The original implementation let `NEXT_PUBLIC_BIO_INTRO` and `NEXT_PUBLIC_BIO_SHORT` override the checked-in homepage copy during `next build`, which broke the user's expectation that a VPS `git pull` would be enough. The fix makes homepage `bio.intro` and `bio.short` tracked constants in `config/portfolio.config.ts`, removes those env knobs from tracked docs, and proves the change with a build-time marker test. After this change, the VPS can pull the repo and rebuild without needing an untracked env update for the homepage lead copy. Homepage metadata remains separate in `app/page.tsx`.

## Context and Orientation

The site is a Next.js App Router application. `config/portfolio.config.ts` exports `portfolioConfig`, which contains user-facing copy as well as environment-variable-based fallbacks. The VPS deployment entrypoint is `rebuild-restart-portfolio.sh`, which optionally pulls git, runs `npm run build`, validates resume artifacts, restarts the `portfolio` systemd service, and performs HTTP readiness checks. If the site copy does not change after this script runs, the likely causes are that the rendered UI reads a different field, the changed field is overridden by environment variables at build time, or the VPS is rebuilding from a checkout that does not contain the local change.

## Plan of Work

First, trace every use of `portfolioConfig.personal.bio` and any page metadata that could surface the new string. Confirm whether the homepage, about tile, resume page, or SEO metadata reads `intro`, `short`, or another field entirely. Second, inspect environment-loading files and deployment assumptions to see whether `NEXT_PUBLIC_BIO_INTRO` or `NEXT_PUBLIC_BIO_SHORT` are set on the VPS, which would override the checked-in values during `npm run build`. Third, patch the config so the homepage lead copy is versioned in git, then rerun the same build-time reproducer to prove the env marker no longer wins.

The trace showed that the desktop homepage about panel renders only `personal.bio.intro`, the parallax bio section renders `personal.bio.intro || personal.bio.short`, and the homepage metadata is a separate hardcoded constant in `app/page.tsx`. Changing `config/portfolio.config.ts` therefore affects visible homepage body text only when the `NEXT_PUBLIC_BIO_*` overrides are absent during build, and it never affects homepage metadata unless `app/page.tsx` is also changed.

## Concrete Steps

From `/home/kevin/coding/portfolio-site`, run the following commands:

    rg -n "NEXT_PUBLIC_BIO_(INTRO|SHORT)|personal\\.bio|bio\\.(intro|short)" config app components lib
    sed -n '1,220p' rebuild-restart-portfolio.sh
    printenv | rg '^NEXT_PUBLIC_BIO_'
    rg -n '^NEXT_PUBLIC_(BIO_(INTRO|SHORT)|SEO_DESCRIPTION)=' .env .env.local .env.production .env.production.local 2>/dev/null
    rg -n "portfolioConfig|getPortfolioConfig" app components lib config
    NEXT_PUBLIC_BIO_INTRO='REPO_SYNC_MARKER_9f1d3' NEXT_PUBLIC_BIO_SHORT='REPO_SYNC_MARKER_9f1d3' ./node_modules/.bin/next build
    rg -n 'REPO_SYNC_MARKER_9f1d3' .next/server/app/page.js
    npm run typecheck

Before the fix, the marker grep returns a match in `.next/server/app/page.js`. After the fix, the marker grep returns no matches and the tracked intro text appears in the same file.

## Validation and Acceptance

Acceptance means the homepage lead copy is sourced from tracked repo code rather than `NEXT_PUBLIC_BIO_INTRO` / `NEXT_PUBLIC_BIO_SHORT`, a build with those env vars set no longer overrides the text, and `npm run typecheck` plus `next build` succeed.

## Idempotence and Recovery

The tracing and build steps are safe to repeat. The fix is additive and reversible by restoring the previous env-backed lines in `config/portfolio.config.ts`. Existing `.env.local` values for `NEXT_PUBLIC_BIO_INTRO` and `NEXT_PUBLIC_BIO_SHORT` become harmless dead overrides after this change.

## Artifacts and Notes

Relevant excerpt from `config/portfolio.config.ts`:

    const trackedHomepageBioIntro = "Full-stack engineer open to work..."
    intro: trackedHomepageBioIntro
    short: trackedHomepageBioIntro

Relevant excerpt from `app/page.tsx`:

    const homepageDescription =
      "Full-stack engineer open to work. I build production web apps and AI systems ..."

Relevant excerpt from `components/tiles/content/AboutContent.tsx`:

    {personal.bio.intro && <p>{personal.bio.intro}</p>}

## Interfaces and Dependencies

The relevant interfaces are `PortfolioConfig` from `config/types` and the exported `portfolioConfig` / `getPortfolioConfig()` from `config/portfolio.config.ts`. The relevant deployment dependency is the shell script `rebuild-restart-portfolio.sh`, which invokes `npm run build` before restarting the systemd service.

Revision note: Updated after implementation to record the marker-based reproducer, the tracked-source fix in `config/portfolio.config.ts`, and the successful post-fix verification build and typecheck.
