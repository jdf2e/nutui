# Sticky 粘性布局

### 介绍

使用 fixed 定位实现的类似 `position: sticky` 的吸顶效果。

> 仅支持吸顶效果，也可以使用官方推荐 https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/extended/component-plus/sticky.html

### 安装

```js
import { createApp } from 'vue';
import { Sticky } from '@nutui/nutui-taro';

const app = createApp();
app.use(Sticky);
```

### 基础用法

:::demo

```vue
<template>
  <nut-sticky>
    <nut-button type="primary">吸顶按钮</nut-button>
  </nut-sticky>
</template>
```

:::

### 吸顶距离

:::demo

```vue
<template>
  <nut-sticky top="120">
    <nut-button type="primary">吸顶距离120px</nut-button>
  </nut-sticky>
</template>
```

:::

## API

### Props

| 参数          | 说明                                         | 类型   | 默认值 |
| ------------- | -------------------------------------------- | ------ | ------ |
| top           | 吸顶距离                                     | number | `0`    |
| z-index       | 吸附时的层级                                 | number | `99`   |
| parent-height | 设置粘性元素的总高度，用于在脱离文档流时占位 | number | `667`  |
