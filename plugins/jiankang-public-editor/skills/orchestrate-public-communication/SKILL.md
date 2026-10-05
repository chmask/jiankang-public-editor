---
name: orchestrate-public-communication
description: Route professional WeChat or LinkedIn writing through one planning, adaptation, publication packaging or review Skill, including Chinese-to-English LinkedIn adaptation.
---

# 传播统筹

用户只需说明平台、内容和目标；你负责判断平台、语言、形式和当前阶段，加载并执行一个主 Skill。

## 双平台路由

先从用户要求识别 platform=wechat|linkedin、language 和 format。它们是提示词约定，不是 API 参数。平台明确而语言未指定时，公众号默认中文，LinkedIn 默认英文；用户要求优先。输入语言不能决定平台。平台未指定且无法从任务确定时只问平台，不默认为公众号。同时请求两平台时分阶段保留两份独立稿，不在同一轮让两套规则改同一正文。

LinkedIn 路由：选题 → ../plan-linkedin-content/SKILL.md；正文改编或英文修订 → ../adapt-writing-for-linkedin/SKILL.md；发布组件 → ../package-linkedin-publication/SKILL.md；真实数据复盘 → ../review-linkedin-performance/SKILL.md。正式中文名分别为 LinkedIn 选题立意、LinkedIn 英文改编、LinkedIn 发布包装、LinkedIn 传播复盘。

LinkedIn 的完整调用还须读取 ../../references/linkedin-quality.md，按平台要求与正文支持双向检查。英文原稿不交给中文上游 Skill 冒充专业审校；中文源稿有阻断时仍可按原交接协议处理。显式指定的平台与 Skill 冲突时说明冲突，不静默跨平台。

## 先读取

每次完整自动调用都先读取 `references/publication-workflow.md`。选择主 Skill 后，读取该专业 Skill 的完整 `SKILL.md`，再按其中的协议执行；不能只推荐、说明或列出 Skill。发现会阻断渠道工作的上游内容问题时，再读取 `references/upstream-handoff.md`。

## 核心原则

1. 一次任务只指定一个主 Skill；其他能力只做路由所需检查。
2. 事实、原意、作者声纹和长期公信力优先于短期传播指标。
3. 插件可以独立工作；中文作家AI助理只在确实可用时作为可选上游能力。
4. 缺少材料或数据时暴露缺口，不虚构热点、案例、反馈、基线或传播因果。
5. 外部工具可用不等于获得上传、创建草稿或公开发布授权。

## 调用模式

自动模式是无参数调用时的默认模式。先判断，再加载并执行一个主 Skill。

- `mode=auto`：显式采用默认自动判断与执行，通常省略。
- `mode=plan`：计划模式不改正文、不执行专业 Skill 的正文写入动作，也不创建任何外部状态。
- `skill=<skill-name>`：显式指定专业 Skill；无法识别时说明可用名称，不静默替换。
- `保持原结构`：不移动正文结构，只处理授权范围内的传播问题或组件。
- `不改正文`：只进行选题策划、发布包装或传播复盘，不生成改编正文。

同时出现 `mode=plan` 与 `skill=<skill-name>` 时，只围绕指定 Skill 制定计划。用户直接点名专业 Skill 时，按显式指定处理，不重复完整调度。

## 路由到专业 Skill

- **选题立意** `plan-wechat-content`（`../plan-wechat-content/SKILL.md`）：处理账号语境、读者、目标、选题价值、传播角度和读者承诺；
- **渠道改编** `adapt-writing-for-wechat`（`../adapt-writing-for-wechat/SKILL.md`）：把稳定内容调整为适合公众号阅读的版本；
- **发布包装** `package-wechat-publication`（`../package-wechat-publication/SKILL.md`）：处理标题、摘要、封面文案、文末行动和转发文字；
- **传播复盘** `review-wechat-performance`（`../review-wechat-performance/SKILL.md`）：根据真实数据与反馈形成谨慎解释和可验证假设。

## 上游编辑协同

只有核心判断、结构、材料支持、关键事实或作者声纹问题会阻断当前传播任务时，才考虑中文作家AI助理。先确认当前环境是否确实提供目标 Skill；可用时，按交接协议转入一个上游主 Skill。不可用时生成完整交接单，不模拟已经完成的编辑。

完成上游阶段后，使用其稳定稿、风险和作者决定返回传播流程。不能在同一编辑阶段让两个 Skill 同时重写正文。

## 调度输出

自动模式开始时只用一行说明：

`自动模式｜当前阶段：<阶段>｜主 Skill：<中文名称>`

计划模式使用：

`计划模式｜当前阶段：<阶段>｜建议主 Skill：<中文名称>`

中文名称必须原样使用：公众号沿用选题立意、渠道改编、发布包装、传播复盘；不得增加“公众号”等前缀或其他后缀。LinkedIn 使用上面的四个正式中文名。上游 Skill 可用且实际执行时使用它自己的正式中文名称；上游不可用并生成交接单时，主 Skill 写“传播统筹”，不能写成未执行的专业 Skill。

随后立即按主 Skill 协议交付。确有确认点、材料缺口或外部授权边界时再补充，不展开不必要的内部选择过程。

## 最终检查

- 是否选择了最窄、最合适的专业 Skill；
- 是否完整读取并执行主 Skill，而非只报出名称；
- 是否把上游写作问题与渠道传播问题混为一谈；
- 是否为了传播效果提高了事实强度或改变了作者立场；
- 是否把外部创建草稿或发布当成未经授权的附带动作。
