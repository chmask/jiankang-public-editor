# 见康公众传播AI主编

面向专业内容传播的 Codex Skill-only 插件。0.4.0 新增独立的公众号标题策划，保留公众号与 LinkedIn 的选题、改编、发布包装和复盘，以及多社群用词与语气适配。未指定最终渠道时默认 LinkedIn，保护作者主权、事实边界与身份真实性。

[English](README.en.md) · [完整使用手册](docs/usage-manual.md) · [项目页](https://www.ai7habits.com/projects/jiankang-public-editor)

## 它解决什么问题

专业内容进入平台，需要处理读者、内容承诺、阅读路径、发布配套和有限反馈证据。这个插件包含一个传播统筹、五个公众号 Skill、四个 LinkedIn Skill 与一个社群语气适配，共十一个，每轮只执行一个主 Skill。只优化公众号标题时使用独立入口；标题加摘要、封面等完整组件仍走发布包装。正文依据约束标题承诺，实质正文修改回到改编阶段并保留作者决定权。

| 中文名称 | 调用名称 | 职责 |
| --- | --- | --- |
| 传播统筹 | `$orchestrate-public-communication` | 判断阶段，选择并执行一个专业 Skill |
| 选题立意 | `$plan-wechat-content` | 明确读者、目标、角度、承诺与兑现依据 |
| 渠道改编 | `$adapt-writing-for-wechat` | 把稳定稿改编为适合公众号阅读的版本 |
| 公众号标题策划 | `$gzh-title-strategist` | 独立诊断、生成、改写、比较与排序公众号标题，不改正文 |
| 发布包装 | `$package-wechat-publication` | 生成标题、摘要、封面文案、文末行动与转发文字 |
| 传播复盘 | `$review-wechat-performance` | 区分观察、比较、可能解释、未知与下一轮假设 |
| LinkedIn 选题立意 | `$plan-linkedin-content` | 明确职业读者、发布身份、形式与内容承诺 |
| LinkedIn 英文改编 | `$adapt-writing-for-linkedin` | 保护语义、限定、术语、声纹与身份真实性 |
| LinkedIn 发布包装 | `$package-linkedin-publication` | 双向检查平台要求、正文依据、包装选择及作者决定 |
| LinkedIn 传播复盘 | `$review-linkedin-performance` | 基于真实数据与可比窗口，不保证算法收益 |
| 社群语气适配 | `$adapt-social-language` | 根据渠道、读者与具体社区调整缩约、简称、用词和语气 |

## 安装

从固定版本安装：

```bash
codex plugin marketplace add chmask/jiankang-public-editor --ref v0.4.0
codex plugin add jiankang-public-editor@jiankang-public-editor
```

安装或升级后请新建一个 Codex 任务，让 Skill 在干净上下文中加载。

升级旧版时，先运行 `codex plugin marketplace remove jiankang-public-editor`，再运行上面的两条命令。移除的是市场来源配置，不是稿件或其他插件。

## 一句话使用

未指定渠道默认 LinkedIn；外发未指定目标语言默认英文，明确公众号则默认中文。中文源稿或“朋友圈文案”本身不等于要求中文输出；要中文请说“中文朋友圈”或 language=zh。

```text
$orchestrate-public-communication
把这段文字调整为适合外发的自然表达，保留原意、限定和我的声音：……
```

公众号任务明确指定公众号：

```text
$orchestrate-public-communication
把这篇文章处理成适合我的微信公众号发布的版本，保留作者风格，目标是提高收藏和转发：……
```

LinkedIn 的最简调用：

```text
$orchestrate-public-communication
platform=linkedin language=en format=post
把这份中文专业稿改编为英文动态帖，保留限定、证据和我的克制语气：……
```

LinkedIn 支持 post、article、companion_post 和 Newsletter 单期。也可以直接调用十个专业子 Skill。`platform`、`language`、`format`、`community`、`tone`、`slang`、`mode=plan`、`skill=<skill-name>`、“保持原结构”和“不改正文”是提示词约定，不是 API 参数，自然语言说明同样有效。

## 只优化公众号标题

```text
$gzh-title-strategist
只优化这篇公众号文章的标题，不改正文。
目标读者：……；作者语气：克制、具体。
原标题：……
正文：……
给三个不同方向，说明正文依据，最后推荐一个。
```

也可让传播统筹处理“这篇公众号文章只优化标题”。普通优化默认三至六个不同方向；只诊断时不换题，只比较时不新增方案，原标题准确有力时可以保留。完整策略按需展开，评分只是编辑判断，不是点击率预测。只有摘要时标明暂定，只有原标题时不声称核验正文。

标题能力改编自 [liucongg/liucong-skills](https://github.com/liucongg/liucong-skills/tree/19e42a49fbb18bfe496e7d2950754d9d7d68904f/skills/gzh-title-strategist)，保留 Apache-2.0 许可与[来源和修改说明](plugins/jiankang-public-editor/skills/gzh-title-strategist/UPSTREAM.md)。上游统计未独立复核，不代表当前热点、你的账号基线或微信算法规则。网站试用尚无独立标题入口。

## 社群语气适配

```text
$adapt-social-language
platform=reddit language=en community=<具体社区或你提供的规则>
调整用词与语气，保留项目关联披露、事实和限定，不加推广链接：……
```

普通缩约、专业简称与社区黑话分开判断；不堆俚语、不编亲历、不冒充成员。流行词需要近期可核验的社区材料，缺少材料时用通用自然语体并标明待核验。slang=off 不新增俚语，auto（默认）按语境判断，light 也不是黑话配额。明确禁止推广或 AI 内容的社区不提供规避稿。

## 与中文作家AI助理协同

本插件可以独立使用。“中文作家AI助理”是可选上游：正文若在核心判断、结构、论证、事实或声纹上仍不稳定，传播统筹会调用可用的上游 Skill，或生成完整交接单；不会模拟已经完成专业编辑。上游问题解决后，再返回传播流程。

## 作者主权与安全边界

作者保留事实、立场、结构、文风和最终表达的决定权。插件不虚构热点、事实、案例、数据、来源、引语或读者反馈，不把相关性写成因果，不为标题效果提高论断强度，不承诺爆款、阅读量或涨粉。

0.4.0 没有远程后端、MCP、账号数据库或平台凭据，不会登录、上传、创建微信草稿或公开发布。Facebook、Instagram、Reddit、朋友圈仅覆盖文字适配，不代表完整渠道策划或绩效模型。网站有限试用仍为公众号范围。英文原稿不由中文专用 Skill 冒充专业审校；不虚构第一人称经历，不判断 AI 生成概率，不提供规避检测的方法，也不模仿在世作者的可识别风格。Codex 宿主和模型服务的数据处理规则各自适用。

## 开发与验证

```bash
npm test
```

仓库只包含公开插件、文档和依赖为零的结构校验，不包含私人稿件、账号数据、评测答案或生产凭据。问题与贡献请参阅 [CONTRIBUTING.md](CONTRIBUTING.md) 和 [SECURITY.md](SECURITY.md)。

社群语气与标题能力完成基线、独立前向试用及边界回归。结构检查与有限试用不等于母语编辑认证或全平台质量保证，输出仍需作者审阅。

## 许可

Apache-2.0。详见 [LICENSE](LICENSE)。
