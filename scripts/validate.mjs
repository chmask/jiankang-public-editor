import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";

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
];

async function exists(path) {
  await stat(new URL(path, import.meta.url));
}

const manifest = JSON.parse(
  await readFile(new URL("../plugins/jiankang-public-editor/.codex-plugin/plugin.json", import.meta.url), "utf8"),
);
assert.equal(manifest.name, "jiankang-public-editor");
assert.equal(manifest.version, "0.2.1");
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

console.log("Validated jiankang-public-editor v0.2.1: 9 Skills");
