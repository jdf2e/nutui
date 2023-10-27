# Sticky 粘性布局

### 介绍

使用 fixed 定位实现的类似 `position: sticky` 的吸顶效果。

### 安装

```js
import { createApp } from 'vue';
import { Sticky } from '@nutui/nutui';

const app = createApp();
app.use(Sticky);
```

### 基础用法

:::demo

```vue
<template>
  <div style="height: 200vh; padding-top: 100px;">
    <nut-sticky>
      <nut-button type="primary">吸顶按钮</nut-button>
    </nut-sticky>
  </div>
</template>
```

:::

### 吸顶距离

:::demo

```vue
<template>
  <div style="height: 200vh; padding-top: 200px;">
    <nut-sticky top="120">
      <nut-button type="primary">吸顶距离120px</nut-button>
    </nut-sticky>
  </div>
</template>
```

:::

### 指定容器

:::demo

```vue
<template>
  <div style="height: 200vh; padding-top: 100px">
    <div style="width: 100%; height: 150px; background: pink" ref="container">
      <nut-sticky top="20" :container="container">
        <nut-button type="info">指定容器</nut-button>
      </nut-sticky>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const container = ref(null);
</script>
```

:::

### 吸底距离

:::demo

```vue
<template>
  <div style="height: 100vh; padding-top: 100vh">
    <nut-sticky bottom="50" position="bottom">
      <nut-button type="primary">吸底距离 50px</nut-button>
    </nut-sticky>
  </div>
</template>
```

:::

## API

### Props

| 参数      | 说明                                    | 类型    | 默认值 |
| --------- | --------------------------------------- | ------- | ------ |
| position  | 吸附位置（`top`、`bottom`）             | string  | `top`  |
| top       | 吸顶距离，`position` 为 `top` 时生效    | number  | `0`    |
| bottom    | 吸底距离，`position` 为 `bottom` 时生效 | number  | `0`    |
| container | 容器的 `HTML` 节点                      | Element | -      |
| z-index   | 吸附时的层级                            | number  | `99`   |

### Events

| 事件名 | 说明               | 回调参数         |
| ------ | ------------------ | ---------------- |
| change | 吸附状态改变时触发 | `fixed: boolean` |
