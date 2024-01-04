# NutUI 贡献指南

## 1、安装项目依赖

本项目为 pnpm monorepo 仓库，要求使用 pnpm 安装项目依赖。

请注意，仓库中的 `pnpm-lock.yaml` 可能会定期升级更新，项目启动所依赖的前置脚本文件也可能会有修改，因此建议每次参与贡献前都拉取最新的分支并重新执行以下操作。

```bash
pnpm i
```

## 2、项目开发环境

#### A、启动文档与 H5(@nutui/nutui) demo

```bash
pnpm dev
```

- 代码目录: `src/packages/__VUE/`
  - 组件源码: `index.vue`
  - 中文文档: `doc.md`
  - 英文文档: `doc.en-US.md`
  - demo 源码: `demo.vue` 或者 `demo/index.vue`

#### B、运行 Taro(@nutui/nutui-taro) demo

```bash
# Taro H5
pnpm dev:h5

# Taro 微信小程序
pnpm dev:weapp

# 其他小程序
pnpm dev:taro jd
pnpm dev:taro alipay
pnpm dev:taro tt
...
```

- 代码目录: `src/packages/__VUE/`
  - 组件源码: `index.taro.vue`
  - 文档: `doc.taro.md`
- demo 项目: `packages/nutui-taro-demo`

## 3、项目构建

```bash
# 构建 @nutui/nutui，目标产物在 `publish/nutui` 目录下
pnpm build

# 构建 @nutui/nutui-taro，目标产物在 `publish/nutui-taro` 目录下
pnpm build:taro

# 构建 @nutui/nutui 网站文档右侧的 Demo 示例
pnpm build:demo

# 构建 @nutui/nutui-taro 网站文档右侧的 Demo 示例
pnpm build:h5

# 构建 @nutui/nutui-taro 小程序 Demo 示例
pnpm build:weapp
```

## 4、在 PR 提交前

所有代码改动在进行 commit 之前都应该通过以下测试：

```bash
# 单元测试
pnpm test

# Eslint 检查
pnpm lint
```

在 commit 时，仓库会自动进行 prettier 格式化以及 eslint 自动修复。

若 commit 提交失败，请再次执行上面的命令，确保可以顺序通过后再提交。

## 5、PR 提交后

GitHub Action 将会自动进行以下 Job

必须通过:

- lint: eslint 检查。
- test: 单元测试检查。
- build: 包、demo 构建检查。

建议通过:

- Codecov: 单元测试覆盖率检查
- CodeFactor: 代码风格检查

## 其他内容

### 1、单元测试覆盖率

可以通过 `pnpm test:c` 执行测试并生成单元测试覆盖率数据。

### 2、文档与 demo 的关系

文档的改造正在进行中，部分组件已经完成。

- 改造前：demo 与文档无直接关联
  - 修改 `demo.vue` 时，需要手动更新 `doc.md`、`doc.en-US.md`
  - 修改 Taro demo 时，需要手动更新 `doc.taro.md`
- 改造后：文档中的代码示例由 demo 源文件直接生成
  - 中英文文档：需要指定【组件名称 示例名称】
  - `> demo: button plain` --> `src/packages/__VUE/button/demo/plain.vue`
  - Taro 文档：需要指定【组件名称 示例名称 组件类别】
  - `> demo: button plain basic` --> `packages/nutui-taro-demo/src/basic/pages/button/plain.vue`
