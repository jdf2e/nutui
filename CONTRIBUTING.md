# 开发者贡献指南

我们非常欢迎社区的开发者向 NutUI 做出贡献。在提交贡献之前，请花一些时间阅读以下内容，保证贡献是符合规范并且能帮助到社区。

## Issue 报告指南

如果提交的是 Bug 报告，请务必遵守 [`Bug report`](https://github.com/jdf2e/nutui/blob/next/.github/ISSUE_TEMPLATE/bug_report.md) 模板。


## 开发配置

你需要保证你的 Node.js 版本大于 12，把仓库 clone 到本地，并运行以下命令：

```bash
$ yarn install
$ yarn run dev
```

> install 之前您可能还需要准照 https://github.com/Automattic/node-canvas#compiling 的说明来确保 `node-canvas` 能成功安装。

## 提交 commit

整个 NutUI 仓库遵从 [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)，在输入 commit message 的时候请务必遵从此规范。

Title Format
type(ComponentName?)：commit message

例如：

docs: fix type in quickstart
build: optimize build speed
fix(Button): incorrect style
feat(Button): add color prop

允许的类型 Types:

upd
chore
docs
feat
fix
test
refactor
revert
style
releas

## Pull Request 指南

1. 务必保证 `npm run build` `npm run build:taro:vue` 能够编译成功；
2. 当相关包的 `package.json` 含有 `npm test` 命令时，必须保证所有测试用例都需要通过；
3. 当相关包有测试用例时，请给你提交的代码也添加相应的测试用例；
4. 提交代码 commit 时，commit 信息需要遵循 [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)。
5. 如果提交的代码非常多或功能复杂，可以把 PR 分成几个 commit 一起提交。我们在合并时会根据情况 squash。
 
 ## Credits

感谢以下所有给 NutUI 贡献过代码的开发者

https://github.com/jdf2e/nutui/graphs/contributors
