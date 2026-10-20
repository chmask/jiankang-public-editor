---
title: 见康公众传播AI主编
slug: jiankang-public-editor
subtitle: 专业内容传播与社群语气适配助手
summary: 为公众号与 LinkedIn 提供选题、改编、发布包装和复盘，并适配 Facebook、Instagram、Reddit、朋友圈的用词与语气；未指定渠道时默认 LinkedIn。
coverImage: /projects/jiankang-public-editor/cover.png
projectStatus: Open Source Beta
category: AI Writing Tools
role: Product Director & Builder
language: zh
tags: [Codex Plugin, 微信公众号, LinkedIn, 英文写作, 社群语气, 内容传播, 开源]
githubUrl: https://github.com/chmask/jiankang-public-editor
documentationUrl: https://github.com/chmask/jiankang-public-editor/blob/main/docs/usage-manual.md
demoUrl: /projects/writing-tools/try?product=jiankang-public-editor
seoTitle: 见康公众传播AI主编 0.3.0｜专业传播与社群语气适配
seoDescription: 开源 Codex 插件，含十个 Skill：公众号与 LinkedIn 专业传播，以及 Facebook、Instagram、Reddit、朋友圈文字适配。未指定渠道默认 LinkedIn。
geoSummary: 见康公众传播AI主编 0.3.0 是开源 Codex Skill-only 插件，共十个 Skill：传播统筹、四个公众号 Skill、四个 LinkedIn Skill 和社群语气适配。支持中文转英文及英文稿改编，按读者关系和社区语境选择缩约、简称与用词，保护事实、作者声纹和身份。未指定渠道默认 LinkedIn，外发未指定语言默认英文，明确公众号则默认中文。Facebook、Instagram、Reddit、朋友圈仅覆盖文字适配；网页试用仍为公众号范围，不提供账号连接或自动发布。
---

## 项目是什么

“见康公众传播AI主编”是一款专业内容传播 Codex 插件。公众号和 LinkedIn 分别有选题、改编、发布包装与真实数据复盘能力；0.3.0 新增“社群语气适配”，为已有文字调整缩约、专业简称、社区用词和语气，覆盖 LinkedIn、Facebook、Instagram、Reddit 与朋友圈。

同一个观点，面对职业同行、群组成员或熟悉的朋友，措辞不必一样。插件先保留原意、证据强度和作者身份，再根据读者关系与具体场景改文字，不以俚语数量衡量是否“地道”。未指定最终发送渠道时默认 LinkedIn；外发内容未指定目标语言时默认英文，明确公众号则沿用中文默认值。

插件采用 Skill-only 架构，不需要独立后端、API Key 或微信公众号凭据。它可以独立安装；当文章在事实、论证或结构上仍有上游问题时，也可以与“中文作家AI助理”协作，并用明确的交接单隔开专业编辑与渠道传播。

## 十个专业 Skill

传播统筹 `$orchestrate-public-communication` 是统一入口。自动模式每一轮只选择并执行一个主 Skill，避免多个规则同时改写正文。

1. **传播统筹** `$orchestrate-public-communication`：识别当前阶段，判断是否需要上游编辑，选择并执行一个专业 Skill；
2. **选题立意** `$plan-wechat-content`：结合账号语境、目标读者、传播目标和已有材料，明确内容承诺及其兑现依据；
3. **渠道改编** `$adapt-writing-for-wechat`：把稳定稿改编为适合公众号阅读的版本，保留自然段、事实强度和作者声纹；
4. **发布包装** `$package-wechat-publication`：根据正文生成标题、摘要、封面短文案、文末行动和转发文字，不借包装之名重写正文；
5. **传播复盘** `$review-wechat-performance`：区分真实观察、可比基线、可能解释、未知和下一轮可验证假设；
6. **LinkedIn 选题立意** `$plan-linkedin-content`：明确职业读者、发布身份、形式与正文能够兑现的承诺；
7. **LinkedIn 英文改编** `$adapt-writing-for-linkedin`：处理中文转英文及英文原稿，保护限定、术语、声纹与身份真实性；
8. **LinkedIn 发布包装** `$package-linkedin-publication`：按动态帖、长文、配套帖或 Newsletter 单期准备实际需要的组件，同时核查平台适配与正文依据；
9. **LinkedIn 传播复盘** `$review-linkedin-performance`：根据真实数据和可比窗口提出谨慎解释，不保证算法收益；
10. **社群语气适配** `$adapt-social-language`：根据渠道、读者关系、作者声音和可核验社区材料，调整已有文字的用词、缩约、简称与语气。

## 最简单的使用方式

安装后，在新任务中说明内容和目标即可。没有指定渠道时，下面的请求会按 LinkedIn 英文外发处理：

```text
$orchestrate-public-communication
把这段文字调整为适合外发的自然表达，保留原意、限定和我的语气：……
```

公众号任务明确写出公众号，继续使用原有流程：

```text
$orchestrate-public-communication
把这篇文章处理成适合我的微信公众号发布的版本，保留作者风格，目标是提高收藏和转发：……
```

LinkedIn 的最简调用：

```text
$orchestrate-public-communication
platform=linkedin language=en format=post
把这份中文专业稿改编为英文动态帖，保留事实限定与我的克制语气：……
```

只调整社群措辞时，也可直接调用：

```text
$adapt-social-language
platform=reddit language=en community=<具体社区或你提供的规则>
按这个社区的读者调整措辞，保留项目关联披露，不加推广链接：……
```

要中文朋友圈文案，请明确写“中文朋友圈”或 `platform=moments language=zh`。“朋友圈文案”只指定渠道，没有指定输出语言；朋友圈不是公众号，插件不会因原稿中文就自动改成公众号文章。

除了传播统筹，也可以直接调用九个专业子 Skill。提示词中的 `platform`、`language`、`community`、`tone`、`slang`、`mode=plan`、`skill=<skill-name>`、“保持原结构”和“不改正文”是可选约定，不是 Codex API 参数，用自然语言说明同样有效。

## 社群语气怎样适配

LinkedIn 以职业读者、具体判断和依据为起点；Facebook 要区分个人动态、主页与群组；Instagram 配文应对应已提供的图片或视频，未提供视觉材料时不编造画面；Reddit 先检查具体 subreddit 的规则、推广限制和关联披露；朋友圈注意已有关系与隐私边界，不套陌生获客话术。这些是编辑起点，不是对整个平台的固定口音。

常规缩约如 we're、专业简称如 B2B、社区用语如 TL;DR，分别判断是否有助于理解。不会为增加“网感”机械加入缩写、emoji、标签或故意错拼，也不会为了语气改变 I / we 的身份指代。`slang=off` 不新增俚语；默认 `slang=auto` 按语境判断，`slang=light` 也不要求必须出现黑话。

具体社区的流行用词需要用户提供的材料或可核验的近期讨论支持。没有材料时，给通用自然语体并标明社区用词待核验；不会冒充资深成员、虚构亲历，或用伪装稿绕过推广和 AI 内容禁令。多渠道请求保留独立版本，事实与限定保持一致。

## 有限在线体验

网站统一试用页为 `/projects/writing-tools/try?product=jiankang-public-editor`。它仍只提供公众号范围的选题立意、渠道改编、发布包装和传播复盘四个固定适配器，与“中文作家AI助理”共用匿名访客每日额度。LinkedIn 和新增社群语气能力需安装 Codex 插件使用，不会随插件升级自动进入网页试用。

在线页不是 Codex Skill 运行环境：它不会自动调度插件、读取账号档案、浏览事实、上传文件、连接微信、创建草稿或发布内容。传播统筹与跨插件协作也需安装 Codex 插件。

两个产品在同一工作台中各自保留独立草稿。切换产品不会把书稿自动带入传播流程，也不会把传播稿反向写回书稿；如需跨插件协作，应在 Codex 中由用户明确调用或接受交接。网站的每日全局额度和访客额度由两个产品共同使用，切换产品不会获得额外次数。

## 为什么独立于中文作家AI助理

书稿编辑与平台传播不是同一件事。前者关心核心问题、材料、论证、体裁和长期作者声纹；后者还要处理账号语境、移动端阅读、发布包装和反馈复盘。把两套规则长期混在一个插件里，渠道偏好容易反过来污染书稿。

因此，两个产品保持独立、按需协作。见康公众传播AI主编发现正文尚不稳定时，会调用可用的上游 Skill，或生成完整的“上游编辑交接单”；它不会假装已经完成证据审计或发展编辑。上游问题处理完毕后，再带着稳定稿返回传播流程。

## 排版与传播原则

LinkedIn 发布包装采用双向检查：正文的核心判断、依据和限定决定标题与开篇能作出什么承诺；平台形式与职业读者的阅读路径决定哪些组件值得保留。交付“平台要求/建议 → 正文依据 → 包装选择 → 缺口或作者决定”的对应记录。正文需要补证据或实质重组时，转回改编阶段，不在包装中悄悄改写。精确平台限制发布前核验；编辑建议不冒充平台硬要求。

移动端友好不等于一行一句。正文以承担完整叙述、说明或论证任务的自然段为基础；短段只在转折、停顿或强调确有作用时保留。标题必须由正文支持并兑现，原题已经准确有力时无需为了数量强行替换。

传播复盘不把一次结果写成规律。数据必须带统计窗口，并尽可能与同一账号、口径接近的历史内容比较。没有曝光、基线或可比样本时，插件会明确写出缺口，不自行推导“最佳发布时间”等结论。

## 作者主权与事实边界

作者主权意味着作者保留事实、立场、结构、文风和最终表达的决定权。插件可以提出问题和方案，但不能以“平台偏好”替作者接受高风险修改；产品不以流量或点击率作为唯一目标或最高目标。

插件不虚构事实、案例、数据、来源，也不虚构热点、人物动作、心理、感官、引语、读者反馈或社会共识；不把相关性写成因果，不为标题效果提高论断强度。医疗、健康、法律和财务等高风险内容缺少来源时，只能标记“待补来源”“作者解释”或“无法由现有材料确认”。

插件没有独立远程后端和账号数据库，不会自行保存账号长期档案，也不会自动登录、上传或发布到微信公众号、LinkedIn 或其他社群。稿件仍在当前 Codex 任务环境中处理，模型服务与 Codex 自身的数据处理规则另行适用。即使未来增加 MCP 或网站连接层，读取、修改、上传、创建草稿和公开发布仍是彼此独立的权限，必须逐项获得授权。

## 0.3.0 的边界

公众号和 LinkedIn 保留完整的四阶段编辑流程；LinkedIn 支持动态帖、长文、配套帖及 Newsletter 单期。Facebook、Instagram、Reddit 和朋友圈只支持已有文字的语言与轻量适配，不提供这些渠道的完整选题、发布包或绩效模型。语气适配不是全渠道运营，也不代替发布前的平台与社区规则核验。

网页试用仍为公众号范围。不完整支持书稿、论文、公文、小说、广告投放、社群运营或全渠道增长；没有账号长期档案、自动数据导入、内容日历、图片生成、微信草稿创建和自动发布能力，也不承诺爆款、阅读量或涨粉。

## 开源与路线

项目以独立仓库开源：[GitHub](https://github.com/chmask/jiankang-public-editor)。[0.3.0](https://github.com/chmask/jiankang-public-editor/releases/tag/v0.3.0) 在公众号与 LinkedIn 专业能力之外增加社群语气适配，并将未指定渠道时的默认值设为 LinkedIn。安装、升级和十个 Skill 的用法见[用户手册](https://github.com/chmask/jiankang-public-editor/blob/main/docs/usage-manual.md)。插件结构检查不等于专业质量认证，实际使用仍需作者审阅。

后续版本将依次探索可审阅的账号档案、系列选题与内容日历、多篇文章的结构化复盘，以及经明确授权的 MCP 或网站连接层。
