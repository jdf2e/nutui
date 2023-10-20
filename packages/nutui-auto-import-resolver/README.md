# NutUI Auto Import Resolver

English | [简体中文](./README.zh-CN.md)

`@nutui/auto-import-resolver` is a resolver for [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) that enables on-demand importing of NutUI components.

### Features

- Supports `Vite`, `Webpack`, `Vue CLI`, and more.
- Style files support CSS, SASS, default CSS
- Automatically imports the corresponding CSS styles for the components.

### Installation

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

## Usage Default

### Vite

```ts
// vite.config.ts
import Components from 'unplugin-vue-components/vite';
import NutUIResolver from '@nutui/auto-import-resolver';

export default defineConfig({
  plugins: [
    Components({
      resolvers: [NutUIResolver()],
    }),
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
        resolvers: [NutUIResolver()],
      }),
    ],
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
      resolvers: [NutUIResolver()],
    }),
  ]
};
```

## Usage Sass

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