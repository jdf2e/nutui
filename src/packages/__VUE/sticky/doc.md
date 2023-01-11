# Sticky 粘性布局

### 介绍

效果同 `css` 中的 `position: sticky`,对低端浏览器可使用其做兼容。


### 安装

```javascript

import { createApp } from 'vue';
import { Sticky } from '@nutui/nutui';

const app = createApp();
app.use(Sticky);
```

### 基础用法

:::demo

```html
<template>
    <div class="demo">
        <nut-sticky top="57">
            <nut-button type="primary">吸顶按钮</nut-button>
        </nut-sticky>
    </div>
</template>
<style lang="scss">
  .demo {
      height: 200vh !important;
  }
</style>
```

:::

### 吸顶距离

:::demo

```html
<template>
    <div class="demo">
        <nut-sticky top="120">
            <nut-button type="primary">吸顶距离120px</nut-button>
        </nut-sticky>
    </div>
</template>
<style lang="scss">
  .demo {
      height: 200vh !important;
  }
</style>
```

:::

### 指定容器

:::demo

```html
<template>
    <div class="demo">
        <div class="sticky-container" ref="container">
        <nut-sticky top="20" :container="container" z-index="1">
            <nut-button type="info">指定容器</nut-button>
        </nut-sticky>
        </div>
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
<style lang="scss">
.demo{
  height: 200vh !important;
}
.sticky-container{
  width: 100%;
  height: 300px;
  background-color: rgb(98, 161, 167);
}
</style>
```

:::

### 吸底距离

:::demo

```html
<template>
  <div class="demo">
        <div class="container"></div>
        <nut-sticky bottom="100" position="bottom">
            <nut-button type="primary">吸底距离 100px</nut-button>
        </nut-sticky>
    </div>
</template>
<style lang="scss">
.demo{
    height: 200vh !important;
}
.container{
    height: 800px;
    width: 100%;
}
</style>
```

:::

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| position         | 吸附位置（`top`、`bottom`）               | string | `top`                |
| top         | 吸顶距离               | number | `0`                |
| bottom         | 吸底距离               | number | `0`                |
| container         | 容器的 `HTML` 节点               | Element | -                |
| z-index         | 吸附时的层级               | number | `2000`               |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| change  | 吸附状态改变时触发 | `val: Boolean` |
| scroll  | 滚动时触发 | `{ top: Number, fixed: Boolean }` |
