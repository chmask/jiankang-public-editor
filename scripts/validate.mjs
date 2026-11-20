import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir, stat } from "node:fs/promises";

const skills = [
  "orchestrate-public-communication",
  "plan-wechat-content",
  "adapt-writing-for-wechat",
  "package-wechat-publication",
  "review-wechat-performance",
  "plan-linkedin-content",
  "adapt-writing-for-linkedin",
  "package-linkedin-publication",
  "review-linkedin-performance",
  "adapt-social-language",
  "gzh-title-strategist",
];

async function exists(path) {
  await stat(new URL(path, import.meta.url));
}

const manifest = JSON.parse(
  await readFile(new URL("../plugins/jiankang-public-editor/.codex-plugin/plugin.json", import.meta.url), "utf8"),
);
assert.equal(manifest.name, "jiankang-public-editor");
assert.equal(manifest.version, "0.4.0");
assert.equal(manifest.repository, "https://github.com/chmask/jiankang-public-editor");
assert.equal(manifest.homepage, "https://www.ai7habits.com/projects/jiankang-public-editor");

const marketplace = JSON.parse(
  await readFile(new URL("../.agents/plugins/marketplace.json", import.meta.url), "utf8"),
);
assert.equal(marketplace.name, "jiankang-public-editor");
assert.equal(marketplace.plugins[0].name, manifest.name);
assert.equal(marketplace.plugins[0].source.path, "./plugins/jiankang-public-editor");

for (const skill of skills) {
  await exists(`../plugins/jiankang-public-editor/skills/${skill}/SKILL.md`);
  await exists(`../plugins/jiankang-public-editor/skills/${skill}/agents/openai.yaml`);
}
await exists("../plugins/jiankang-public-editor/references/linkedin-quality.md");
await exists("../plugins/jiankang-public-editor/references/social-language.md");
const actualSkills = await readdir(new URL("../plugins/jiankang-public-editor/skills", import.meta.url));
assert.deepEqual(actualSkills.sort(), [...skills].sort());
const manual = await readFile(new URL("../docs/usage-manual.md", import.meta.url), "utf8");
assert.ok(manual.includes(`--ref v${manifest.version}`));
assert.ok(manual.includes('$adapt-social-language'));
assert.ok(manual.includes('$gzh-title-strategist'));
const titleRoot = "../plugins/jiankang-public-editor/skills/gzh-title-strategist/";
for (const file of ["UPSTREAM.md", "LICENSE", "references/content-types.md", "references/title-mechanics.md", "references/heat-research.md", "references/empirical-signals.md"]) {
  await exists(titleRoot + file);
}
const license = await readFile(new URL(titleRoot + "LICENSE", import.meta.url));
const licenseBlob = createHash("sha1").update(`blob ${license.length}\0`).update(license).digest("hex");
assert.equal(licenseBlob, "261eeb9e9f8b2b4b0d119366dda99c6fd7d35c64", "preserve the upstream Apache-2.0 license verbatim");

const readme = await readFile(new URL("../README.md", import.meta.url), "utf8");
for (const term of [
  "见康公众传播AI主编",
  "$orchestrate-public-communication",
  "作者主权",
  "Apache-2.0",
  "不承诺爆款",
]) {
  assert.match(readme, new RegExp(term.replace("$", "\\$")));
}

console.log(`Validated jiankang-public-editor v${manifest.version}: ${skills.length} Skills`);
