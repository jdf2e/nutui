# 快速上手

## 推荐工程
我们提供一个命令行工具 [Gaea-cli](https://www.npmjs.com/package/gaea-cli) ，可用来快速生成一个已经内置了本组件库的基于 Webpack 的 Vue 项目工程。基于这个工程开发项目，可省去大量配置和调试环境的时间，也可略过下面组件库安装使用部分内容直接进入开发阶段。

## 安装

推荐使用 NPM 或 YARN 安装

#### NPM
```bash
npm i @nutui/nutui -S
```

#### YARN
```bash
yarn add @nutui/nutui
```
> 如果你的网络环境不佳，不妨试试国内的npm镜像

> 默认安装最新版，如需使用 1.x 版本，请指定版本号，如：  `npm i @nutui/nutui@1.3.2 -S`

#### 页面引入

在页面中使用 script 和 link 标签直接引入文件，并使用全局变量 nutui。我们在 npm 发布包内的 dist 目录下提供了 **nutui.js** **nutui.css** 以及 **nutui.min.js** **nutui.min.css**。

当然你也可以通过CDN的方式引入。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nutui/nutui@latest/dist/nutui.min.css">
<!-- 引入Vue -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
<!-- 引入组件库 -->
<script src="https://cdn.jsdelivr.net/npm/@nutui/nutui@latest/dist/nutui.min.js"></script>
```

> 在页面中直接引入，将无法使用 **主题换肤** 等功能。我们推荐使用 *NPM* 或 *YARN* 方式安装，不推荐在页面中直接引入的用法

## 加载示例

```javascript
import Vue from 'vue';
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';

NutUI.install(Vue);
```

> 注意：这种方式将会导入所有组件

## 按需加载

以下两种方式都可以实现只加载用到的组件，从而减少加载的文件体积。

### 1. 使用 webpack 插件 **[@nutui/babel-plugin-seperate-import](https://www.npmjs.com/package/@nutui/babel-plugin-separate-import)** (推荐)

首先安装 **@nutui/separate-import** 插件

```bash
npm i @nutui/separate-import -D
```

然后配置一下 **.babelrc** 文件

```bash
{
  "plugins": [
    ["@nutui/babel-plugin-separate-import", {
        "style": "css"
    }]
  ]
}
```
> style 选项值为 "css" 时加载组件对应的css文件，为 "scss" 时加载对应的scss文件。无style选项时，不自动加载样式文件。

接下来，我们就可以在项目里只引入用到的组件了。默认情况下，样式也无需单独引入。插件会自动将代码转换为方式二的手动引入方式。

```javascript
import Vue from 'vue';
import { Dialog,Picker } from '@nutui/nutui';

Dialog.install(Vue);
Picker.install(Vue);
```

### 2. 手动引入

```javascript
import Vue from 'vue';
import Button from '@nutui/nutui/dist/packages/button/button.js';  // 加载构建后的JS
import '@nutui/nutui/dist/packages/button/button.css';  //加载构建后的CSS
//主题定制等场景需要加载SCSS
//import '@nutui/nutui/dist/packages/button/button.scss'; 

Button.install(Vue);
```

## 组件使用

1.使用:prop传递数据格式为 数字、布尔值或函数时，必须带:(兼容字符串类型除外)，比如：
```html
<nut-switch :active="true" size="base"></nut-switch>
```

2.组件 css 单位使用的是 **px**，如果你的项目中需要 **rem** 单位，可借助一些工具进行转换，比如 webpack 的 [px2rem-loader](https://www.npmjs.com/package/px2rem-loader)、postcss 的 [postcss-plugin-px2rem](https://www.npmjs.com/package/postcss-plugin-px2rem) 插件

3.组件具体用法以文档为准

4.组件使用过程中如有问题或建议，欢迎[反馈](https://github.com/jdf2e/nutui/issues)