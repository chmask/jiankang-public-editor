# Jiankang Public Communication Editor

Version 0.3.0 is an independent Codex Skill-only plugin for professional communication. It retains WeChat Official Account and LinkedIn planning, adaptation, publication packaging and performance review, and adds social language adaptation for LinkedIn, Facebook, Instagram, Reddit and WeChat Moments.

There are ten Skills: one orchestrator, four WeChat specialists, four LinkedIn specialists and social language adaptation. Each stage uses one main Skill.

## Install or update

```bash
codex plugin marketplace add chmask/jiankang-public-editor --ref v0.3.0
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

## Boundaries

Facebook, Instagram, Reddit and Moments support text/register adaptation only, not complete channel strategy, analytics or account operations. The website trial remains WeChat-only. No backend, MCP server, account database, credentials or automatic publishing. Codex host and model-provider data policies apply separately.

No fabricated facts, sources, metrics, feedback or first-person accomplishments; no virality promises. Independent forward trials and boundary regressions were performed for social adaptation, but do not certify native-editor quality or platform results. Authors still review outputs.

See the [Chinese README](README.md) and [usage manual](docs/usage-manual.md). Licensed under Apache-2.0.
