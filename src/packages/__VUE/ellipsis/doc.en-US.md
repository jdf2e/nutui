# ellipsis 

### Intro

Display space is insufficient, hidden part of the content and "..." Alternative.

### Install

```javascript

import { createApp } from 'vue';
import { Ellipsis } from '@nutui/nutui';

const app = createApp();
app.use(Ellipsis);

```

### Leading

:::demo

```html
<template>
  <nut-ellipsis content="NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。" direction="start" ></nut-ellipsis>
</template>
```
:::

### Tailing

:::demo

```html
<template>
  <nut-ellipsis content="NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。" direction="end" ></nut-ellipsis>
</template>
```
:::

### Middle

:::demo

```html
<template>
  <nut-ellipsis content="NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。" direction="middle" ></nut-ellipsis>
</template>
```
:::

### Multi-line

:::demo

```html
<template>
  <nut-ellipsis 
    content="NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。" 
    direction="start" 
    rows="3"></nut-ellipsis>
</template>
```
:::

### Expand & Collapse

:::demo

```html
<template>
  <nut-ellipsis 
    direction="start" 
    expandText="Expand" 
    collapseText="Collapse"
    content="NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。" ></nut-ellipsis>
</template>
```
:::

## API

### Props

| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| content         | Content               | string | -                |
| direction         | Direction, `start` \| `end` \| `middle`                | string | `end`               |
| rows         | Rows               | number | `1`              |
| expand-text         | Expand text               | string | `''`             |
| collapse-text         | Collapse text               | string | `''`               |
| symbol         | Symbol     | string | `...`       |
| line-height         | the row height of the container     | string \| number | `20`       |

### Events

| Event  | Description     | Arguments    |
|--------|----------------|--------------|
| click  | Emitted when the content is clicked | - |
| change  | Emitted when expand or collapse is clicked | `expand` or `collapse` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value | 
| --------------------------------------- | -------------------------- | 
|  --nut-ellipsis-expand-collapse-color       | _#3460fa_        | 
