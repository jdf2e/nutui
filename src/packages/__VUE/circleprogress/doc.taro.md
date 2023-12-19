# CircleProgress 环形进度条

### 介绍

圆环形的进度条组件

### 安装

```js
import { createApp } from 'vue';
import { CircleProgress } from '@nutui/nutui-taro';

const app = createApp();
app.use(CircleProgress);
```

### 基础用法

:::demo

```vue
<template>
  <nut-circle-progress progress="20" />
</template>
```

:::

### 环形进度条自定义宽度

:::demo

```vue
<template>
  <nut-circle-progress progress="50" strokeWidth="10" />
</template>
```

:::

### 环形进度条自定义颜色(支持渐变色)

:::demo

```vue
<template>
  <nut-circle-progress progress="50" color="red" />
  <nut-circle-progress progress="100" :color="gradientColor" />
</template>
<script setup>
const gradientColor = {
  '0%': '#FF5E5E',
  '100%': '#FFA062'
};
</script>
```

:::

### 环形进度条自定义大小

:::demo

```vue
<template>
  <nut-circle-progress progress="50" radius="60" />
</template>
```

:::

### 环形进度条自定义内容

:::demo

```vue
<template>
  <nut-circle-progress progress="50" radius="60">自定义</nut-circle-progress>
</template>
```

:::

### 动态改变环形进度条的进度

:::demo

```vue
<template>
  <nut-circle-progress :progress="percent"></nut-circle-progress>
  <nut-button type="primary" @click="reduce">减少</nut-button>
  <nut-button type="primary" @click="add">增加</nut-button>
</template>
<script setup>
import { ref } from 'vue';
const percent = ref(30);
const add = () => {
  percent.value = Math.min(100, percent.value + 10);
};
const reduce = () => {
  percent.value = Math.max(0, percent.value - 10);
};
</script>
```

:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| progress | 百分比 | number \| string | `0` |
| stroke-width | 圆弧的宽度 | number \| string | `5` |
| radius | 半径 | number \| string | `50` |
| color | 圆环进度条颜色 | object \| string | `#fa2c19` |
| path-color | 圆环轨道颜色 | string | `#d9d9d9` |
| stroke-linecap | 圆环进度条端点形状可选值为 `square` `butt` | string | `round` |
| clockwise | 是否顺时针展示 | boolean | `true` |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义文字内容 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-circleprogress-primary-color | _var(--nut-primary-color)_ |
| --nut-circleprogress-path-color | _#e5e9f2_ |
| --nut-circleprogress-text-color | _#000000_ |
| --nut-circleprogress-text-size | _var(--nut-font-size-3)_ |
