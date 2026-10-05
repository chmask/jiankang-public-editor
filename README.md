# 见康公众传播AI主编

面向微信公众号与 LinkedIn 专业内容的 Codex Skill-only 插件。0.2.1 支持英文选题、中文转英文及英文原稿改编、发布包装与传播复盘，同时保护作者主权、事实边界和论证强度。

[English](README.en.md) · [完整使用手册](docs/usage-manual.md) · [项目页](https://www.ai7habits.com/projects/jiankang-public-editor)

## 它解决什么问题

专业内容进入平台，需要处理读者、内容承诺、阅读路径、发布配套和有限反馈证据。这个插件把职责分成一个统一入口、四个公众号 Skill 与四个 LinkedIn Skill，共九个，每轮只执行一个主 Skill。发布包装采用双向检查：正文依据约束标题承诺，平台形式与职业读者需求决定组件选择；实质正文修改回到改编阶段并保留作者决定权。

| 中文名称 | 调用名称 | 职责 |
| --- | --- | --- |
| 传播统筹 | `$orchestrate-public-communication` | 判断阶段，选择并执行一个专业 Skill |
| 选题立意 | `$plan-wechat-content` | 明确读者、目标、角度、承诺与兑现依据 |
| 渠道改编 | `$adapt-writing-for-wechat` | 把稳定稿改编为适合公众号阅读的版本 |
| 发布包装 | `$package-wechat-publication` | 生成标题、摘要、封面文案、文末行动与转发文字 |
| 传播复盘 | `$review-wechat-performance` | 区分观察、比较、可能解释、未知与下一轮假设 |
| LinkedIn 选题立意 | `$plan-linkedin-content` | 明确职业读者、发布身份、形式与内容承诺 |
| LinkedIn 英文改编 | `$adapt-writing-for-linkedin` | 保护语义、限定、术语、声纹与身份真实性 |
| LinkedIn 发布包装 | `$package-linkedin-publication` | 双向检查平台要求、正文依据、包装选择及作者决定 |
| LinkedIn 传播复盘 | `$review-linkedin-performance` | 基于真实数据与可比窗口，不保证算法收益 |

## 安装

从固定版本安装：

```bash
codex plugin marketplace add chmask/jiankang-public-editor --ref v0.2.1
codex plugin add jiankang-public-editor@jiankang-public-editor
```

安装或升级后请新建一个 Codex 任务，让 Skill 在干净上下文中加载。

升级旧版时，先运行 `codex plugin marketplace remove jiankang-public-editor`，再运行上面的两条命令。移除的是市场来源配置，不是稿件或其他插件。

## 一句话使用

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

支持 post、article、companion_post 和 Newsletter 单期。也可以直接调用八个专业 Skill。`platform`、`language`、`format`、`mode=plan`、`skill=<skill-name>`、“保持原结构”和“不改正文”是提示词约定，不是 API 参数，自然语言说明同样有效。

## 与中文作家AI助理协同

本插件可以独立使用。“中文作家AI助理”是可选上游：正文若在核心判断、结构、论证、事实或声纹上仍不稳定，传播统筹会调用可用的上游 Skill，或生成完整交接单；不会模拟已经完成专业编辑。上游问题解决后，再返回传播流程。

## 作者主权与安全边界

作者保留事实、立场、结构、文风和最终表达的决定权。插件不虚构热点、事实、案例、数据、来源、引语或读者反馈，不把相关性写成因果，不为标题效果提高论断强度，不承诺爆款、阅读量或涨粉。

0.2.1 没有远程后端、MCP、账号数据库或平台凭据，不会登录、上传、创建微信草稿或公开发布。网站有限试用仍是公众号适配器，不等于网页已支持 LinkedIn。英文原稿不由中文专用 Skill 冒充专业审校；不虚构第一人称经历，不判断 AI 生成概率，不提供规避检测的方法，也不模仿在世作者的可识别风格。

## 开发与验证

```bash
npm test
```

仓库只包含公开插件、文档和依赖为零的结构校验，不包含私人稿件、账号数据、评测答案或生产凭据。问题与贡献请参阅 [CONTRIBUTING.md](CONTRIBUTING.md) 和 [SECURITY.md](SECURITY.md)。

结构及契约校验不等于专业质量认证；新增 LinkedIn 分支的独立前向行为评测仍待执行，输出仍需作者审阅。

## 许可

Apache-2.0。详见 [LICENSE](LICENSE)。
