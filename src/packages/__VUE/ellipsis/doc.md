# ellipsis 

### 介绍

展示空间不足时，隐去部分内容并用“...”替代。

### 安装

```javascript

import { createApp } from 'vue';
// vue
import { Ellipsis } from '@nutui/nutui';
// taro
import { Ellipsis } from '@nutui/nutui-taro';

const app = createApp();
app.use(Ellipsis);

```

### 头部省略

:::demo

```html
<template>
  <nut-ellipsis content="NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。" direction="start" ></nut-ellipsis>
</template>
```
:::

### 尾部省略

:::demo

```html
<template>
  <nut-ellipsis content="NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。" direction="end" ></nut-ellipsis>
</template>
```
:::

### 中间省略

:::demo

```html
<template>
  <nut-ellipsis content="NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。" direction="middle" ></nut-ellipsis>
</template>
```
:::

### 多行省略

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

### 展开收起

:::demo

```html
<template>
  <nut-ellipsis 
    direction="start" 
    expandText="展开" 
    collapseText="收起"
    content="NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。" ></nut-ellipsis>
</template>
```
:::

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| content         | 文本内容               | String | -                |
| direction         | 省略位置               | 'start' | 'end' | 'middle' | 'end'               |
| rows         | 展示几行               | Number | 1              |
| expand-text         | 展开操作的文案               | String | ''              |
| collapse-text         | 收起操作的文案               | String | ''               |
| symbol         | 省略的符号     | String | '...'       |
| line-height          | 容器的行高     | String、Number | 20       |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 文本点击是触发 | -- |
| change  | 点击展开收起时触发 | -- |
