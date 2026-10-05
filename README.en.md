# Jiankang Public Communication Editor

Version 0.2.0 is an independent Codex Skill-only plugin for professional content on WeChat Official Accounts and LinkedIn. One orchestrator selects one specialist per stage: four WeChat Skills and four LinkedIn Skills, nine in total.

LinkedIn includes English topic planning, Chinese-to-English and English-source adaptation, publication packaging and evidence-aware performance review. Packaging checks both the platform form and what the actual draft can support; it does not invent the author's experience or guarantee algorithm rewards.

## Install or update

```bash
codex plugin marketplace add chmask/jiankang-public-editor --ref v0.2.0
codex plugin add jiankang-public-editor@jiankang-public-editor
```

Start a new Codex task after installation or upgrade:

```text
$orchestrate-public-communication
platform=linkedin language=en format=post
Adapt this professional draft into an English LinkedIn post. Preserve its qualifiers, evidence and my restrained voice: …
```

Formats: post, article, companion_post and a single newsletter edition. Controls are prompt conventions, not API parameters. Natural-language requests also work.

## Boundaries

No backend, MCP server, account database, credentials or automatic publishing. Optional Chinese Writer AI Assistant handoff applies to Chinese source material, not as a substitute for English editorial review. The website's limited trial remains WeChat-only.

No fabricated facts, sources, metrics, feedback or first-person accomplishments; no promises of virality. Structural validation does not certify editorial expertise. Independent forward testing of the new LinkedIn branch remains pending.

See the [Chinese README](README.md) and [usage manual](docs/usage-manual.md). Licensed under Apache-2.0.
