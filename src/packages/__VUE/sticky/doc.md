# Sticky 粘性布局

### 介绍

效果同 `css` 中的 `position: sticky`,对低端浏览器可使用其做兼容

### 安装

```javascript

import { createApp } from 'vue';
// vue
import { Sticky } from '@nutui/nutui';
// taro
import { Sticky } from '@nutui/nutui-taro';

const app = createApp();
app.use(Sticky);

```

### 基础用法

:::demo

```html
<template>
  <nut-cell>
    <nut-sticky top="57">
      <nut-button type="primary">吸顶按钮</nut-button>
    </nut-sticky>
  </nut-cell>
</template>
<style lang="scss">
#app{
  height: auto !important;
}
</style>
```

:::

### 吸顶距离

:::demo

```html
<template>
  <nut-cell>
    <nut-sticky top="120">
      <nut-button type="primary">吸顶距离120px</nut-button>
    </nut-sticky>
  </nut-cell>
</template>
<style lang="scss">
#app{
  height: auto !important;
}
</style>
```

:::

### 指定容器

:::demo

```html
<template>
  <div class="sticky-container" ref="container">
    <nut-sticky top="100" :container="container" z-index="1">
      <nut-button type="info">指定容器</nut-button>
    </nut-sticky>
  </div>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const container = ref(null);
      return {
        container
      };
    }
  };
</script>
<style lang="scss" scoped>
.sticky-container{
  width: 100%;
  height: 300px;
  background-color: #fff;
}
</style>
<style lang="scss">
#app{
  height: auto !important;
}
</style>
```

:::

### 吸底距离

:::demo

```html
<template>
  <nut-cell>
    <nut-sticky bottom="100" position="bottom">
      <nut-button type="primary">吸底距离100px</nut-button>
    </nut-sticky>
  </nut-cell>
</template>
<style lang="scss">
#app{
  height: auto !important;
}
</style>
```

:::

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| position         | 吸附位置（`top`、`bottom`）               | String | `top`                |
| top         | 吸顶距离               | Number | `0`                |
| bottom         | 吸底距离               | Number | `0`                |
| container         | 容器的 `HTML` 节点, 在小程序环境下需要同时指定 `id`               | Element | -                |
| z-index         | 吸附时的层级               | Number | `2000`               |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| change  | 吸附状态改变时触发 | `val: Boolean` |
| scroll  | 滚动时触发 | `{ top: Number, fixed: Boolean }` |
