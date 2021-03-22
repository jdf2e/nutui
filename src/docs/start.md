# 快速上手

## 安装

* 通过 Npm 或 Yarn 安装

#### NPM 安装

```bash
# Vue2 项目
npm i @nutui/nutui -S

# Vue3 项目
npm i @nutui/nutui@beta -S
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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nutui/nutui@beta/dist/style.css" />
    <!-- 引入Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@next"></script>
    <!-- 引入NutUI组件库 -->
    <script src="https://cdn.jsdelivr.net/npm/@nutui/nutui@beta/dist/nutui.umd.js"></script>
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
#### NPM 使用示例

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
createApp(App).use(NutUI).mount("#app");
```

> 注意：这种方式将会导入所有组件

## 推荐使用按需加载

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import { Button, Cell, Icon } from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
createApp(App).use(Button).use(Cell).use(Icon).mount("#app");
```


## 注意事项

- 使用:prop传递数据格式为 数字、布尔值或函数时，必须带:(兼容字符串类型除外)，比如：
```html
<nut-switch :active="true" size="base"></nut-switch>
```

- 组件 css 单位使用的是 **px**，如果你的项目中需要 **rem** 单位，可借助一些工具进行转换，比如 [webpack](https://www.webpackjs.com/) 的 [px2rem-loader](https://www.npmjs.com/package/px2rem-loader)、[postcss](https://github.com/postcss/postcss) 的 [postcss-plugin-px2rem](https://www.npmjs.com/package/postcss-plugin-px2rem) 插件等
