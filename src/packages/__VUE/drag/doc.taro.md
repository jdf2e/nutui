# Drag 拖拽

### 介绍

实现可拖拽的任意元素

### 安装

```js
import { createApp } from 'vue';
import { Drag } from '@nutui/nutui-taro';

const app = createApp();
app.use(Drag);
```

### 基础用法

:::demo

```vue
<template>
  <nut-drag>
    <nut-button type="primary">触摸移动</nut-button>
  </nut-drag>
</template>
```

:::

### 限制拖拽方向

:::demo

```vue
<template>
  <nut-drag direction="x" :style="{ top: '200px', left: '8px' }">
    <nut-button type="primary">只能X轴拖拽</nut-button>
  </nut-drag>
</template>
```

:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|  ---  |  ---  |  ---  |  ---  |
| direction | 拖拽元素的拖拽方向限制，**x**/**y**/**all** 三选一 | string | `all` |
