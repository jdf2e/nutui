# 小程序开发

## 介绍

* 作为一款具有京东风格的组件库，我们一直致力于用心打造更符合开发者体验的组件库。NutUI 3.0 上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。

* 为了给开发者提供更高效便捷的开发方式，NutUI 和 Taro 合力，现已可以用 NutUI 开发小程序了，NutUI 提供了 50+ 组件涵盖了日常业务开发使用的大部分组件。

* 二者的结合，不仅可以让开发者一处代码，多端运行，畅快自如地开发小程序。更可以在开发过程中，使用到更美观、更便捷、组件更丰富的组件库。我们将 NutUI 和 Taro 更完美地接合到一起，Taro 官方将 NutUI 作为 Vue技术栈的推荐组件库。现在开发者将可以使用 NutUI 无缝开发 H5 和多端小程序。

## 预览


> 微信扫描下方二维码体验，体验组件库示例 , Demo 源码  https://github.com/jdf2e/nutui-demo/tree/master/taro

<img width="200" src="https://storage.360buyimg.com/jdc-article/gh_f2231eb941be_258.jpg" />

## 安装

* 通过 Npm 或 Yarn 安装

### 安装 Taro 脚手架

``` bash
# 使用 npm 安装 CLI
npm install -g @tarojs/cli

# OR 使用 yarn 安装 CLI
yarn global add @tarojs/cli

# OR 安装了 cnpm，使用 cnpm 安装 CLI
cnpm install -g @tarojs/cli
```

> 值得一提的是，如果安装过程出现sass相关的安装错误，请在安装 mirror-config-china 后重试。

``` bash
npm install -g mirror-config-china
```

### 检查是否安装成功

``` bash
taro -v
```

### 项目初始化

使用命令创建模板：

``` bash
taro init myApp
```

### 按照下方图片依次选择，选择 Vue3 + NutUI 模板

<img src="https://storage.360buyimg.com/jdc-article/taro.jpg" />

### NPM 使用示例

> 注意：这种方式将会导入所有组件，打包文件大小会很大

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import NutUI from "@nutui/nutui-taro";
import "@nutui/nutui-taro/dist/style.css";
createApp(App).use(NutUI);
```


#### 推荐使用按需加载

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 语句自动转换为按需引入的方式。
##### 安装插件
``` bash
npm install babel-plugin-import --save-dev
```

在 `.babelrc` 或 `babel.config.js` 中添加配置：
``` javascript
{
  // ...
  plugins: [
    [
      "import",
      {
        "libraryName": "@nutui/nutui",
        "libraryDirectory": "dist/packages/_es",
        "camel2DashComponentName": false
      },
      'nutui3-vue'
    ],
    [
      "import",
      {
        "libraryName": "@nutui/nutui-taro",
        "libraryDirectory": "dist/packages/_es",
        "camel2DashComponentName": false
      },
      'nutui3-taro'
    ]
  ]
}
```

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import { Button, Cell, Icon } from "@nutui/nutui-taro";
import "@nutui/nutui-taro/dist/style.css";
createApp(App).use(Button).use(Cell).use(Icon);
```



#### 定制化主题使用

首先需要在 **app.ts** 文件中配置 使用 scss 样式文件如：

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import { Button, Cell, Icon } from "@nutui/nutui-taro";
// 定制化主题必须使用 scss 
import '@nutui/nutui-taro/dist/styles/themes/default.scss';
createApp(App).use(Button).use(Cell).use(Icon);
```

创建定制化主题样式文件 ```assets/styles/custom_theme.scss``` ，样式变量覆盖表参考 [nutui variables](https://github.com/jdf2e/nutui/blob/next/src/packages/styles/variables.scss)
``` scss
$primary-color: #478EF2;
$primary-color-end: #496AF2;
```



然后需要在 `config/index.js` 文件中配置 `scss` 文件全局覆盖如：

``` javascript
const path = require('path');
const config = {
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  sass: {
    resource: [
        path.resolve(__dirname, '..', 'src/assets/styles/custom_theme.scss')
    ]
  },
  // ...
```

`vue` 文件中使用查看效果

``` html
<template>
  <view>
      <nut-button type="primary" >nutui</nut-button>
  </view>
</template>
```