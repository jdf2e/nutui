# Nutui Auto Import Resolver

English | [简体中文](./README.zh-CN.md)

`@nutui/auto-import-resolver` 是 [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) 的一个解析器，用于实现 Nutui 按需引入。

### 特性

- 支持 `Vite`, `Webpack`,`Vue CLI` 等
- 支持自动引入组件对应的 CSS 样式

### 安装

```shell
# via npm
npm i @nutui/auto-import-resolver unplugin-vue-components -D

# via yarn
yarn add @nutui/auto-import-resolver unplugin-vue-components -D

# via pnpm
pnpm add @nutui/auto-import-resolver unplugin-vue-components -D

# via Bun
bun add @nutui/auto-import-resolver unplugin-vue-components -D
```

## 使用

### Vite

```ts
// vite.config.ts
import Components from 'unplugin-vue-components/vite';
import NutUIResolver from '@nutui/auto-import-resolver';

export default defineConfig({
  plugins: [
    Components({
      resolvers: [NutUIResolver()]
    })
  ]
});
```

### Vue CLI

```ts
// vue.config.js
import Components from 'unplugin-vue-components/webpack';
import NutUIResolver from '@nutui/auto-import-resolver';

module.exports = {
  configureWebpack: {
    plugins: [
      Components({
        resolvers: [NutUIResolver()]
      })
    ]
  }
};
```

### Webpack

```ts
// webpack.config.js
import Components from 'unplugin-vue-components/webpack';
import NutUIResolver from '@nutui/auto-import-resolver';

module.exports = {
  plugins: [
    Components({
      resolvers: [NutUIResolver()]
    })
  ]
};
```
