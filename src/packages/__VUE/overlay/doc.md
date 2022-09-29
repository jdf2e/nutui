# OverLay 遮罩层

### 介绍

创建一个遮罩层，通常用于阻止用户进行其他操作

### 安装


```javascript
import { createApp } from 'vue';
// vue
import { OverLay } from '@nutui/nutui';
// taro
import { OverLay } from '@nutui/nutui-taro';

const app = createApp();
app.use(OverLay);
```

### 基础用法

:::demo

```html
<template>
  <nut-button type="primary" @click="state.show = true">显示遮罩层</nut-button>
  <nut-overlay v-model:visible="state.show" :z-index="2000"></nut-overlay>
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        show: false,
      });
      return {
        state
      };
    }
  };
</script>
```

:::

### 遮罩样式

可以通过 `overlay-style` 进行设置

:::demo

```html
<template>
  <nut-button type="primary" @click="state.show = true">显示遮罩层</nut-button>
  <nut-overlay v-model:visible="state.show" :z-index="2000" :overlay-style="state.overlayStyle"></nut-overlay>
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        show: false,
        overlayStyle: {
          backgroundColor: 'rgba(0, 0, 0, .2)'
        }
      });
      return {
        state
      };
    }
  };
</script>
```

:::

### 嵌套内容

:::demo

```html
<template>
  <nut-button type="success" @click="state.show2 = true">嵌套内容</nut-button>
  <nut-overlay v-model:visible="state.show2" :z-index="2000">
  <div class="wrapper">
    <div class="content">这里是正文</div>
  </div>
</nut-overlay>
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        show2: false,
      });
      return {
        state
      };
    }
  };
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  .content {
    display: flex;
    width: 150px;
    height: 150px;
    background: #fff;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    color: red;
  }
}
</style>
```

:::

## API

### Props

| 参数                   | 说明             | 类型           | 默认值 |
| ---------------------- | ---------------- | -------------- | ------ |
| v-model:visible                   | 当前组件是否显示 | Boolean        | `false`  |
| z-index                | 遮罩层级         | String, Number | `2000`   |
| duration               | 动画时长，单位秒 | String, Number | `0.3`    |
| overlay-class          | 自定义遮罩类名   | String         | -      |
| overlay-style          | 自定义遮罩样式   | CSSProperties  | -      |
| lock-scroll            | 背景是否锁定(`小程序不支持`)     | Boolean        | `false`  |
| close-on-click-overlay | 是否点击遮罩关闭 | Boolean        | `true`   |

### Events

| 事件名 | 说明       | 回调参数     |
| ------ | ---------- | ------------ |
| click  | 点击时触发 | event: Event |
