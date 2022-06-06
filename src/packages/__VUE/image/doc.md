# image 

### 介绍

增强版的 img 标签，提供多种图片填充模式，支持图片加载中提示、加载失败提示。

### 安装

```javascript

import { createApp } from 'vue';
// vue
import { Image } from '@nutui/nutui';
// taro
import { Image } from '@nutui/nutui-taro';

const app = createApp();
app.use();

```

### 基础用法

:::demo

```html
<template>
  
</template>
<script lang="ts">
  export default {
    setup() {
      return {  };
    }
  };
</script>
```

:::

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| name         | 图标名称或图片链接               | String | -                |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击图标时触发 | event: Event |
