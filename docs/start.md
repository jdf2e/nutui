# 快速上手

## 推荐工程

我们提供一个命令行工具 [Gaea CLI](https://www.npmjs.com/package/gaea-cli) ，可用来快速生成一个已经内置了本组件库的基于 Webpack 的 Vue 项目工程。基于这个工程开发项目，可省去大量配置和调试环境的时间，也可略过下面组件库安装使用部分内容直接进入开发阶段。

## 安装

* 通过 NPM 或 YARN 安装（推荐）

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

* 页面直接引用

在页面中使用 script 和 link 标签直接引入文件，**NutUI** 将会自动注册。我们在 npm 发布包内的 dist 目录下提供了 **nutui.js** **nutui.css** 以及 **nutui.min.js** **nutui.min.css**。

当然你也可以通过 CDN 的方式引入， 可以在 **jsdelivr** 和 **unpkg** 等公共 CDN 上获取到 NutUI。我们推荐链接到一个你可以手动更新的指定版本号。

```html 开发环境版本，包含了有帮助的命令行警告
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<!-- 引入样式 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nutui/nutui@latest/dist/nutui.css">
<!-- 引入Vue -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- 引入组件库 -->
<script src="https://cdn.jsdelivr.net/npm/@nutui/nutui@latest/dist/nutui.js"></script>
```
或者
```html
<!-- 生产环境版本，优化了尺寸和速度 -->
<!-- 引入样式 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nutui/nutui@latest/dist/nutui.min.css">
<!-- 引入Vue -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
<!-- 引入组件库 -->
<script src="https://cdn.jsdelivr.net/npm/@nutui/nutui@latest/dist/nutui.min.js"></script>
```

CDN 引入示例

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 引入样式 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nutui/nutui@latest/dist/nutui.min.css">
</head>
<body>
    <div id="app">
        <nut-button @click="showDialog">
            Button
        </nut-button>
    </div>

    <!-- 引入Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
    <!-- 引入NutUI组件库 -->
    <script src="https://cdn.jsdelivr.net/npm/@nutui/nutui@latest/dist/nutui.min.js"></script>
    <script>
        new Vue({
            el: '#app',
            methods: {
                showDialog() {
                    this.$dialog({
                        title: "确定删除此订单？",
                        content: "删除后将从你的记录里消失，无法找回"
                    });
                }
            }
        });
    </script>
</body>
</html>
```

CDN 按需加载引入示例

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>

  <body>
    <div id="app">
      <nut-button>cdn按需加载</nut-button>
    </div>

    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <!-- 引入样式 -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@nutui/nutui@latest/dist/packages/button/button.css"
    />
    <!-- 引入Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!-- 引入组件库 -->
    <script src="https://cdn.jsdelivr.net/npm/@nutui/nutui@latest/dist/packages/button/button.js"></script>
    <script>
      Vue.component(button.default.name, button.default);
      new Vue({
        el: "#app"
      });
    </script>
  </body>
</html>
```

> 在页面中直接引入，将无法使用 **主题定制** 等功能。我们推荐使用 *NPM* 或 *YARN* 方式安装，不推荐在页面中直接引入的用法

* 通过 **Vue CLI** 图形化界面安装

如果你的项目是使用 [Vue CLI](https://cli.vuejs.org/zh/) 脚手架搭建，那么你还可以通过 **Vue CLI** 提供的图形化界面安装 **NutUI** ：在图形化界面的 **依赖** 界面，点击右上角 **安装依赖** 按钮，搜索 **@nutui/nutui** 安装即可。

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

首先安装 **@nutui/babel-plugin-separate-import** 插件

```bash
npm i @nutui/babel-plugin-separate-import -D
```

然后配置一下babel的配置文件

``` bash
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
如果需要按需加载 scss 文件（如需要自定义主题）时，除了需要把 style 选项值设为为 **scss** 外，还需要修改 webpack 配置文件的 sass-loader 配置，如下所示：

``` bash
{
    loader: 'sass-loader',
    options: {
        data: `@import "@nutui/nutui/dist/styles/index.scss"; `
    }
}
```

`vue.config.js` VueCLI3 配置方式 

``` bash
module.exports = {
    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项
            scss: {
                // @/ 是 src/ 的别名
                // 注意：在 sass-loader v7 中，这个选项名是 "data"
                prependData: ` 
                @import "@/assets/custom_theme.scss";
                @import "@nutui/nutui/dist/styles/index.scss";
                `,
            }
        },
    }
}
```

> VueCLI 3 相关Demo 请查看 [NutUI Demo](https://github.com/richard1015/nutui-demo)

### 2. 手动引入

```javascript
import Vue from 'vue';
import Button from '@nutui/nutui/dist/packages/button/button.js';  // 加载构建后的JS
import '@nutui/nutui/dist/packages/button/button.css';  //加载构建后的CSS
//主题定制等场景需要加载SCSS,而不是构建后的CSS
//import '@nutui/nutui/dist/packages/button/button.scss'; 

Button.install(Vue);
```

## 组件使用

1.使用:prop传递数据格式为 数字、布尔值或函数时，必须带:(兼容字符串类型除外)，比如：
```html
<nut-switch :active="true" size="base"></nut-switch>
```

2.组件 css 单位使用的是 **px**，如果你的项目中需要 **rem** 单位，可借助一些工具进行转换，比如 [webpack](https://www.webpackjs.com/) 的 [px2rem-loader](https://www.npmjs.com/package/px2rem-loader)、[postcss](https://github.com/postcss/postcss) 的 [postcss-plugin-px2rem](https://www.npmjs.com/package/postcss-plugin-px2rem) 插件等

VueCLI3 配置示例 `vue.config.js`
``` javascript
const pxtorem = require('postcss-pxtorem');
module.exports = {
    css: {
        loaderOptions: {
          postcss: {
            plugins: [
              pxtorem({
                rootValue: 37.5,
                propList: ['*']
              })
            ]
          }
        }
      }
}
```

3.组件具体用法以文档为准

4.组件使用过程中如有问题或建议，欢迎[反馈](https://github.com/jdf2e/nutui/issues)