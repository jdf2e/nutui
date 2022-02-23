# 快速上手

## 预览


> 扫描下方二维码体验，体验 Vue3 组件库示例

<img src="https://img12.360buyimg.com/imagetools/jfs/t1/162421/39/13392/9425/6052ea60E592310a9/264bdff23ef5fe95.png" width="200" alt="NutUI">

## NPM 安装

```bash
# Vue2 项目 需要参考 2.x 文档 https://nutui.jd.com/2x
npm i @nutui/nutui

# Vue3 项目
npm i @nutui/nutui@next

# taro 小程序项目
npm i @nutui/nutui-taro
```

### NPM 使用示例

#### 导入全部组件

> 注意：这种方式将会导入所有组件，打包文件大小会很大，我们推荐使用按需加载
```javascript
import { createApp } from "vue";
import App from "./App.vue";
// 注意：这种方式将会导入所有组件
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
createApp(App).use(NutUI).mount("#app");
```

#### Vite 构建工具 通过 vite-plugin 使用按需加载

#### 为什么只按需引入样式

由于 vite 本身已按需导入了组件库，因此仅样式不是按需导入的，因此只需按需导入样式即可。

[Vite](https://vitejs.dev/) 构建工具，使用 [vite-plugin-style-import](https://github.com/anncwb/vite-plugin-style-import) 实现按需引入。

##### 安装插件
``` bash
npm install vite-plugin-style-import --save-dev
```
在 `vite.config` 中添加配置：
``` javascript
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';
export default {
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: '@nutui/nutui',
          libraryNameChangeCase: 'pascalCase',
          resolveStyle: (name) => {
            return `@nutui/nutui/dist/packages/${name}/index.scss`
          }
        }
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // 配置 nutui 全局 scss 变量
        additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`
      }
    }
  }
};
```
#### WebPack 构建工具 通过 babel 使用按需加载

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
接着像这样在代码中直接引入组件。

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import { Button, Icon } from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
createApp(App).use(Button).use(Icon).mount("#app");
```

#### CDN 安装使用示例

> 可以通过 CDN 的方式引入， 可以在 **jsdelivr** 和 **unpkg** 等公共 CDN 上获取到 NutUI。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- 引入样式 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nutui/nutui@next/dist/style.css" />
    <!-- 引入Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@next"></script>
    <!-- 引入NutUI组件库 -->
    <script src="https://cdn.jsdelivr.net/npm/@nutui/nutui@next/dist/nutui.umd.js"></script>
  </head>
  <body>
    <div id="app">
        
    </div>
    <script>
      // 在 #app 标签下渲染一个按钮组件
      const app = Vue.createApp({
        template: `
        <nut-button type="primary">主要按钮</nut-button>
        <nut-button type="info">信息按钮</nut-button>
        <nut-button type="default">默认按钮</nut-button>
        <nut-button type="danger">危险按钮</nut-button>
        <nut-button type="warning">警告按钮</nut-button>
        <nut-button type="success">成功按钮</nut-button>
        `,
      });
      app.use(nutui);
      app.mount("#app");
    </script>
  </body>
</html>
```

> 在页面中直接引入，将无法使用 **主题定制** 等功能。我们推荐使用 *NPM* 或 *YARN* 方式安装，不推荐在页面中直接引入的用法


## 使用注意事项

- 使用:prop传递数据格式为 数字、布尔值或函数时，必须带:(兼容字符串类型除外)，比如：
```html
<nut-switch :active="true" size="base"></nut-switch>
```

- 组件 css 单位使用的是 **px**，如果你的项目中需要 **rem** 单位，可借助一些工具进行转换，比如 [webpack](https://www.webpackjs.com/) 的 [px2rem-loader](https://www.npmjs.com/package/px2rem-loader)、[postcss](https://github.com/postcss/postcss) 的 [postcss-plugin-px2rem](https://www.npmjs.com/package/postcss-plugin-px2rem) 插件等
