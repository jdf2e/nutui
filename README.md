
<p align="center">
    <img alt="logo" src="https://img11.360buyimg.com/imagetools/jfs/t1/211965/25/7152/22022/61b16785E433119bb/aa41d7a9f7e823f3.png" width="150" style="margin-bottom: 10px;">
</p>

<p align="center">京东风格的轻量级移动端 Vue2、Vue3 组件库</p>

<p align="center">（支持一套代码生成 H5 和小程序）</p>

<p align="center">
    <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  </a>
    <a href="https://github.com/jdf2e/nutui">
    <img src="https://coveralls.io/repos/github/jdf2e/nutui/badge.svg?branch=master" alt="Coverage Status" />
    </a>
    <a href="https://github.com/jdf2e/nutui">
    <img src="https://img.shields.io/npm/l/@nutui/nutui.svg" alt="license"/>
    </a>
    <a href="https://www.npmjs.com/package/@nutui/nutui">
    <img src="https://img.shields.io/npm/v/@nutui/nutui.svg?style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/@nutui/nutui">
    <img src="https://img.shields.io/npm/dt/@nutui/nutui.svg?style=flat-square">
    </a>
    <a href="https://travis-ci.org/jdf2e/nutui">
    <img src="https://img.shields.io/travis/jdf2e/nutui.svg?style=flat-square">
    </a>  
    <a href="https://github.com/jdf2e/nutui">
    <img src="https://img.shields.io/github/contributors/jdf2e/nutui" alt="GitHub contributors">
    </a>
    <a href="https://github.com/jdf2e/nutui">
    <img src="https://img.shields.io/github/commit-activity/w/jdf2e/nutui" alt="GitHub commit activity">
    </a>
    <a href="https://github.com/jdf2e/nutui">
    <img src="https://img.shields.io/github/issues-closed/jdf2e/nutui" alt="GitHub closed issues">
    </a>  
    <a href="https://github.com/jdf2e/nutui">
    <img src="https://img.shields.io/github/commits-since/jdf2e/nutui/latest/next" alt="GitHub commits since latest release (by date)">
    </a>
    <a href="https://github.com/jdf2e/nutui">
    <img src="https://img.shields.io/github/release-date/jdf2e/nutui" alt="GitHub Release Date">
  </a>
</p>

<p align="center">
  <a href="https://nutui.jd.com/jdl/#/index" target="_blank">京东物流视觉（Vue2）</a>
  &nbsp;
  <a href="https://nutui.jd.com/jdt/#/" target="_blank">京东科技视觉（Vue3）</a>
  &nbsp;
  <a href="https://nutui.jd.com/?jdb#/zh-CN/component/button" target="_blank">京东零售B商城视觉（Vue3）</a>
  &nbsp;
  <a href="https://nutui.jd.com/theme/#/base" target="_blank">组件级UI定制</a>
</p>

> Nut[nʌt]，源自电影《冰河世纪》里松鼠 Scrat "执迷不悟"，一生追求，即便引发大灾难也绝不松手的坚果。
---


##  特性

* 🚀 70+ 高质量组件，覆盖移动端主流场景
* 💪 支持一套代码同时开发多端小程序+H5
* 📖 基于京东APP 10.0 视觉规范
* 🍭 支持按需引用
* 📖 详尽的文档和示例
* 💪 支持 TypeScript
* 💪 支持服务端渲染（测试阶段）
* 🍭 支持定制主题，内置 700+ 个主题变量
* 🌍 国际化支持
* 🍭 单元测试覆盖率超过 80%，保障稳定性
* 📖 提供 Sketch 设计资源

## 示例 H5 & 小程序

<p>
  <!--
   <img src="https://img10.360buyimg.com/imagetools/jfs/t1/200153/16/20367/65061/61b87cf5Edd8c846b/0f64b38d096f9ab9.jpg" height="250" alt="NutUI" /> -->
   <img src="https://img14.360buyimg.com/imagetools/jfs/t1/82310/37/20242/66386/62b57bb6Ebcad837d/a57b1fcdcc61dcc7.png" height="250" alt="NutUI" />
</p>

## 版本说明

> @nutui/nutui 和 @nutui/nutui-taro 属于并行版本，存在部分的差异化，版本号始终保持一致。如果想要兼容低版本 ios 10 以下，请使用 @nutui/nutui@2

| 版本 | 支持的框架 | 视觉规范 | 支持的应用类型 | 兼容
| --- | --- | --- | --- | --- |
| @nutui/nutui  | Vue 3x | 京东 [APP 10.0](https://nutui.jd.com/#/resource) 规范 | H5 | 现代浏览器以 Chrome >= 51、iOS >= 10.0（与 Vue3 一致）
| @nutui/nutui-taro  | Vue3 + Taro | 京东 [APP 10.0](https://nutui.jd.com/#/resource) 规范 | H5&小程序，可[开发多端](https://nutui.jd.com/#/starttaro) | 现代浏览器及 Chrome >= 51、iOS >= 10.0（与 Vue3 一致）
| @nutui/nutui@2  | Vue 2x | 京东 APP 7.0 规范 | H5 | 现代浏览器及 Android >= 4.0、iOS >= 8.0
| @nutui/nutui-jdl  | Vue 2x | [京东物流视觉规范](https://nutui.jd.com/jdl/#/design) | H5 | 现代浏览器及 Android >= 4.0、iOS >= 8.0


## 构建版本

> AMD 环境、Webpack、Vite 等构建工具环境、服务端建议使用 es 版，非模块化环境（如通过 `<script>` 标签直接引用）建议使用 umd 压缩版。

* es **nutui.es.js**

* umd **nutui.umd.js**


## 使用案例

NutUI 已经投入了我们的生产环境中使用，业界也在广泛地使用 NutUI 开发多端应用。
<p>
<img src="http://storage.360buyimg.com/jdc-article/nutuiDemo/user-cases.jpg" alt="NutUI" />
</p>
<p><a href="https://nutui.jd.com/#/case">查看等多的案例，请点击</a></p>
<p><a href="https://get.jd.com/#/survey/index?id=4217247740034539">我们正在征集更多优秀案例，欢迎点击提交</a></p>

## 链接

<ul>
    <li>
        <a href="https://github.com/jdf2e/nutui/discussions">
            Discussions  (用👍投票)
        </a>
    </li>
    <li>
        <a href="https://github.com/jdf2e/nutui/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22">
            Feature Requests (用👍投票)
        </a>
    </li>
     <li>
        <a href="https://github.com/jdf2e/nutui/labels/bug%203.0">
            Bugs (用👍投票)
        </a>
    </li>
     <li>
        <a href="https://github.com/jdf2e/nutui/issues?q=is%3Aissue+is%3Aopen+label%3Aquestion">
            Question  (用👍投票)
        </a>
    </li>
</ul>

## 开发交流

| 版本 | 微信群 |内部咚咚群 |
| --- | --- |--- |
| [NutUI Vue](https://github.com/jdf2e/nutui/issues) | <img src="https://nutui.jd.com/3x/3.1.17/vx-codeys.png" width="100" /> 关注后回复「NutUI」 | 82957939
| [NutUI x Taro](https://github.com/jdf2e/nutui/issues) | <img src="https://camo.githubusercontent.com/db4276b4ee4b443158195e943e9e678cb4d2afb7580f70d4d817ef0a90413aec/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f7461726f2d6a642d636f6d2f7374617469632f636f6e746163745f7461726f5f6e757475695f71722e706e67" width="100" /> 关注后回复「NutUI」 | 1022545110 |
| [NutUI React](https://github.com/jdf2e/nutui-react/issues) | 回复「NutUI」 | 1022619199


## 贡献者们

感谢以下小伙伴们为 NutUI 发展做出的贡献：

<a href="https://github.com/jdf2e/nutui/graphs/contributors">
  <img src="https://opencollective.com/nutui/contributors.svg?width=890&button=false" alt="contributors">
</a>

## 参与共建

非常欢迎社区开发者为 NutUI 贡献代码，在贡献之前请先阅读 [贡献指南](https://nutui.jd.com/#/contributing)，参与共建提 [PR](https://github.com/jdf2e/nutui/pulls)。

感谢以下所有给 NutUI 贡献过代码的 [开发者](https://github.com/jdf2e/nutui/graphs/contributors)。

## 开发计划

[Milestones](https://github.com/jdf2e/nutui/projects)

## 更新日志

本项目遵从 [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)，更新日志请查阅 [Release](https://github.com/jdf2e/nutui/releases)。

## 开源协议

本项目基于 **MIT** 协议


## github stargazers 

![stargazers](https://starchart.cc/jdf2e/nutui.svg)

