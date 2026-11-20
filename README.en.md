# Jiankang Public Communication Editor

Version 0.4.0 is an independent Codex Skill-only plugin for professional communication. It adds a standalone WeChat Official Account title strategist, while retaining WeChat and LinkedIn planning, adaptation, publication packaging and performance review, plus social language adaptation.

There are eleven Skills: one orchestrator, five WeChat specialists, four LinkedIn specialists and social language adaptation. Each stage uses one main Skill.

## Install or update

```bash
codex plugin marketplace add chmask/jiankang-public-editor --ref v0.4.0
codex plugin add jiankang-public-editor@jiankang-public-editor
```

When upgrading an existing fixed-version marketplace, first run `codex plugin marketplace remove jiankang-public-editor`, then the two commands above. This removes the source configuration, not manuscripts or other plugins. Start a new Codex conversation after updating.

## Use

```text
$orchestrate-public-communication
Adapt this outward-facing copy to a natural, audience-appropriate voice. Preserve meaning, qualifiers and my identity: …
```

If no channel is specified, LinkedIn is the default. English is the default target language for social copy, even when the source or request is Chinese. An explicit target language takes priority; explicit WeChat Official Account tasks retain a Chinese default. Moments and Official Accounts are distinct.

For a specific community:

```text
$adapt-social-language
platform=reddit language=en community=<specific community and supplied rules>
Adjust the wording and tone without inventing experience or concealing my project affiliation: …
```

Natural contractions, professional abbreviations and community terminology are separate editorial choices. There is no slang quota. Claims about current community language need supplied or verified recent evidence; otherwise the plugin uses a neutral natural register and identifies the gap. It does not disguise promotion or AI-assisted content to bypass community rules.

LinkedIn publication packaging checks both the platform form and what the draft supports. Substantive body changes return to adaptation with author decisions.

## WeChat title work only

```text
$gzh-title-strategist
Improve only the title of this WeChat Official Account article, without rewriting the body.
Give three distinct directions, explain the draft support, and recommend one.
Audience: …
Current title: …
Article: …
```

Direct use establishes a WeChat context and defaults to Chinese; an explicit target language takes priority. The orchestrator also selects this Skill for explicit WeChat title-only requests. A full title/digest/cover package still uses publication packaging. Generic title requests without a channel still default to LinkedIn.

Ordinary optimization offers three to six distinct options, unless a count is specified. Diagnosis-only does not replace the title; comparison-only does not add candidates; an accurate existing title may be retained. Full strategy is optional. Ratings are editorial judgments, not predicted click-through rates. Partial source material is identified rather than treated as a verified full draft.

Adapted from [liucongg/liucong-skills](https://github.com/liucongg/liucong-skills/tree/19e42a49fbb18bfe496e7d2950754d9d7d68904f/skills/gzh-title-strategist) under Apache-2.0; see the included [source and modification record](plugins/jiankang-public-editor/skills/gzh-title-strategist/UPSTREAM.md). Its historical statistics have not been independently verified and are not current trends, account baselines, or WeChat algorithm rules.

## Boundaries

Facebook, Instagram, Reddit and Moments support text/register adaptation only, not complete channel strategy, analytics or account operations. The website trial remains WeChat-only with four fixed modes; it does not include the standalone title Skill. No backend, MCP server, account database, credentials or automatic publishing. Codex host and model-provider data policies apply separately.

No fabricated facts, sources, metrics, feedback or first-person accomplishments; no virality promises. Independent forward trials and boundary regressions were performed for social adaptation, but do not certify native-editor quality or platform results. Authors still review outputs.

See the [Chinese README](README.md) and [usage manual](docs/usage-manual.md). Licensed under Apache-2.0.
