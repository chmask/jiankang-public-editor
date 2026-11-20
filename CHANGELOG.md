# Changelog

## [0.4.0] - 2026-11-20

- Added 公众号标题策划 / gzh-title-strategist as a standalone Skill, bringing the plugin to 11 Skills.
- Added title diagnosis, generation, rewriting, comparison, ranking and cautious review with supplied account data, without body rewriting.
- Separated diagnosis-only, comparison-only and full strategy outputs; retained accurate original titles and source-material boundaries.
- Routed explicit WeChat title-only requests to the new Skill while preserving full publication packaging and the LinkedIn fallback for unspecified channels.
- Adapted the upstream liucongg Skill at commit 19e42a49fbb18bfe496e7d2950754d9d7d68904f under Apache-2.0; retained its license, attribution and modification notices. Historical statistics are not verified account baselines, current trends or algorithm rules.
- Updated the manual, project introduction and installation tag. Website trial modes, account connections and publishing permissions remain unchanged.
- Completed four independent forward-test groups and post-review regressions; structural validation does not certify editorial quality or platform results.

## [0.3.0] - 2026-10-20

- Added 社群语气适配 / adapt-social-language, bringing the plugin to 10 Skills.
- Added vocabulary and register guidance for LinkedIn, Facebook, Instagram, Reddit and WeChat Moments, grounded in audience relationships and specific communities rather than slang quotas.
- Defaulted unspecified outward-facing channels to LinkedIn and unspecified target language to English; explicit WeChat Official Account tasks retain Chinese defaults.
- Shared language guidance with LinkedIn adaptation and publication packaging; preserved author identity, qualifiers and evidence strength.
- Fixed Chinese-source upstream handoffs to retain the actual target channel rather than hard-coding WeChat.
- Updated installation/upgrade instructions, manual and project description. Other new social channels remain text-adaptation only; website trial remains WeChat-only.
- Completed independent forward trials and boundary regressions; these are not native-editor certification or platform-performance guarantees.

## [0.2.1] - 2026-10-06

- Corrected fixed-version Marketplace upgrade instructions after verifying the installed Codex CLI: remove the old named source, add the new tag, then refresh the plugin.
- No editorial behavior changes from 0.2.0.

## [0.2.0] - 2026-10-06

- Added four LinkedIn Skills for planning, English adaptation, publication packaging and performance review; nine Skills in total.
- Added platform/language/form routing while preserving existing WeChat calls.
- Added bidirectional platform/content packaging checks and a reviewable mapping of requirements, draft support, choices and unresolved author decisions.
- Protected qualifiers, terminology, cross-cultural context, author voice and first-person identity in English adaptation.
- Supported posts, articles, companion posts and single newsletter editions; no account connection or automatic publishing.
- Updated usage instructions and project documentation. Website trial adapters remain WeChat-only.
- Structural/contract checks are not a certification of editorial quality. Independent forward testing of the new LinkedIn branch remains pending.

## [0.1.0] - 2026-08-26

- Released the unified 传播统筹 entry point and four specialist Skills.
- Added evidence-aware topic planning, conservative WeChat adaptation, publication packaging, and performance review.
- Added optional handoff to 中文作家AI助理 without making it a runtime dependency.
- Documented author sovereignty, privacy, natural-paragraph layout, and publication boundaries.
