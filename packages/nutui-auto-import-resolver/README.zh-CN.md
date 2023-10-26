# Nutui Auto Import Resolver

[English](./README.md) | 简体中文

`@nutui/auto-import-resolver` 是 [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) 的一个解析器，用于实现 NutUI 按需引入。

### 特性

- 支持 `Vite`, `Webpack`, `Vue CLI` 等
- 样式文件支持 CSS，SASS，默认 CSS
- 支持自动引入组件对应的 CSS 样式

### 安装

```shell
# via pnpm
pnpm add @nutui/auto-import-resolver unplugin-vue-components -D

# via npm
npm i @nutui/auto-import-resolver unplugin-vue-components -D

# via yarn
yarn add @nutui/auto-import-resolver unplugin-vue-components -D

# via Bun
bun add @nutui/auto-import-resolver unplugin-vue-components -D
```

## 默认使用

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
const NutUIResolver = require('@nutui/auto-import-resolver');

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
const NutUIResolver = require('@nutui/auto-import-resolver');

module.exports = {
  plugins: [
    Components({
      resolvers: [NutUIResolver()]
    })
  ]
};
```

## 使用 Sass

### Vite

```ts
// vite.config.ts
import Components from 'unplugin-vue-components/vite';
import NutUIResolver from '@nutui/auto-import-resolver';

export default defineConfig({
  plugins: [
    Components({
      resolvers: [NutUIResolver({ importStyle: 'sass' })]
    })
  ],
  // 配置全局样式变量
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`
      }
    }
  }
});
```

### Vue CLI

```ts
// vue.config.js
import Components from 'unplugin-vue-components/webpack';
const NutUIResolver = require('@nutui/auto-import-resolver');

module.exports = {
  configureWebpack: {
    plugins: [
      Components({
        resolvers: [NutUIResolver({ importStyle: 'sass' })]
      })
    ]
  },
  // 配置全局样式变量
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`
      }
    }
  }
};
```

### Webpack

```ts
// webpack.config.js
import Components from 'unplugin-vue-components/webpack';
const NutUIResolver = require('@nutui/auto-import-resolver');

module.exports = {
  plugins: [
    Components({
      resolvers: [NutUIResolver({ importStyle: 'sass' })]
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            // 配置全局样式变量
            loader: 'sass-loader',
            options: {
              additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`
            }
          }
        ]
      }
    ]
  }
};
```
