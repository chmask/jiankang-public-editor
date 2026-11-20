# 上游来源与修改说明

本 Skill 改编自 [liucongg/liucong-skills 的 gzh-title-strategist](https://github.com/liucongg/liucong-skills/tree/19e42a49fbb18bfe496e7d2950754d9d7d68904f/skills/gzh-title-strategist)。上游贡献者署名为 liucongg/liucong-skills contributors；本项目不代表上游认可或背书。

- 固定提交：`19e42a49fbb18bfe496e7d2950754d9d7d68904f`
- 获取日期：2026-11-20
- 许可：Apache License 2.0，原始全文保留在 [LICENSE](LICENSE)。该许可适用于本目录引入的上游内容；不改变插件其他部分的许可。
- 上游仓库根目录与本 Skill 目录未发现 NOTICE 或单独许可；未引入其他 Skill。
- 无脚本、二进制、MCP、Hooks 或独立后端依赖。

## 本项目修改

`SKILL.md` 保留正文价值优先、多角度标题、比较推荐与相关性边界，改为“公众号标题策划”；增加直接调用与跨平台冲突边界、普通/完整/仅诊断/复盘的输出范围、材料不足处理、作者声音与健康等高风险事实强度保护。普通请求不强制展开上游十三至十六个候选；主观评分不作为点击率预测。

`agents/openai.yaml` 修改中文显示名、简介和提示词，显式保留正常自动发现。

四份参考保留上游方法与示例，并在文件头标明修改。`content-types.md` 增加模板不授权编造事实的限定；`title-mechanics.md` 区分编辑建议与平台硬限制；`heat-research.md` 将五账号统计改为以用户可复核的账号材料为先；`empirical-signals.md` 保留上游原始统计与解释，注明未独立复核，不能推广为用户账号表现、当前热度或平台因果规律。

插件传播统筹新增公众号标题专门路由，未改变其他平台的默认渠道、完整发布包结构与外部发布授权。
