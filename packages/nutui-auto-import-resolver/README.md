# NutUI Auto Import Resolver

[English](./README.md) | 简体中文

`@nutui/auto-import-resolver` is a resolver for [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) that enables on-demand importing of NutUI components.

### Features

- Supports `Vite`, `Webpack`, `Vue CLI`, and more.
- Automatically imports the corresponding CSS styles for the components.

### Installation

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

## Usage

### Vite

```ts
// vite.config.ts
import Components from 'unplugin-vue-components/vite';
import { NutUIResolver } from '@nutui/auto-import-resolver';

export default defineConfig({
  plugins: [
    Components({
      resolvers: [NutUIResolver()],
    }),
  ],
});
```

### Vue CLI

```ts
// vue.config.js
import Components from 'unplugin-vue-components/webpack';
import { NutUIResolver } from '@nutui/auto-import-resolver';

module.exports = {
  configureWebpack: {
    plugins: [
      Components({
        resolvers: [NutUIResolver()],
      }),
    ],
  },
};
```

### Webpack

```ts
// webpack.config.js
import Components from 'unplugin-vue-components/webpack';
import { NutUIResolver } from '@nutui/auto-import-resolver';

module.exports = {
  plugins: [
    Components({
      resolvers: [NutUIResolver()],
    }),
  ],
};
```