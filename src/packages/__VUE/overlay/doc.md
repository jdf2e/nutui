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

使用 `visible` 控制遮罩层的显示/隐藏

:::demo

```html
<template>
  <nut-button type="primary" @click="show = true">显示遮罩层</nut-button>
  <nut-overlay v-model:visible="show"></nut-overlay>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        show: false,
      });
      return {
        ...toRefs(state)
      };
    }
  };
</script>
```

:::

### 遮罩样式

通过 `overlay-style` 进行设置遮罩样式

:::demo

```html
<template>
  <nut-button type="primary" @click="show = true">遮罩样式</nut-button>
  <nut-overlay v-model:visible="show" :overlay-style="overlayStyle"></nut-overlay>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        show: false,
        overlayStyle: {
          backgroundColor: 'rgba(0, 0, 0, .2)'
        }
      });
      return {
        ...toRefs(state)
      };
    }
  };
</script>
```

:::

### 设置动画时间

通过 `duration` 设置遮罩显示/隐藏的时间，时间 `s`

:::demo

```html
<template>
  <nut-button type="primary" @click="show = true">设置动画时间</nut-button>
  <nut-overlay v-model:visible="show" :duration="2.5"></nut-overlay>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        show: false
      });
      return {
        ...toRefs(state)
      };
    }
  };
</script>
```

:::

### 锁定背景滚动

通过 `lock-scroll` 设置遮罩在显示时是否锁定背景，禁止滚动

:::demo

```html
<template>
  <nut-button type="primary" @click="show = true">锁定背景滚动</nut-button>
  <nut-overlay v-model:visible="show" :lock-scroll="true"></nut-overlay>
</template>
<script lang="ts">
  import { reactive, toRefs} from 'vue';
  export default {
    setup() {
      const state = reactive({
        show: false
      });
      return {
        ...toRefs(state)
      };
    }
  };
</script>
```

:::

### 嵌套内容

支持默认 `slot`，可嵌套任意内容

:::demo

```html
<template>
  <nut-button type="success" @click="show = true">嵌套内容</nut-button>
  <nut-overlay v-model:visible="show">
    <div class="wrapper">
      <div class="content">这里是正文</div>
    </div>
  </nut-overlay>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        show: false,
      });
      return {
        ...toRefs(state)
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

### 点击遮罩不关闭

设置 `close-on-click-overlay` 可控制点击遮罩是否关闭，如果设置为 `true`，那么 `click` 事件也将同时失效

:::demo

```html
<template>
  <nut-button type="primary" @click="show = true">点击遮罩不关闭</nut-button>
  <nut-overlay v-model:visible="show" :close-on-click-overlay="false">
    <div class="wrapper">
      <div class="content" @click.stop="show = false;">close</div>
    </div>
  </nut-overlay>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        show: false,
      });
      return {
        ...toRefs(state)
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
| v-model:visible        | 控制遮罩的显示/隐藏 | boolean        | `false`  |
| z-index                | 自定义遮罩层级         | string, number | `2000`   |
| duration               | 显示/隐藏的动画时长，单位秒 | string, string | `0.3`    |
| overlay-class          | 自定义遮罩类名   | string         | -      |
| overlay-style          | 自定义遮罩样式   | CSSProperties  | -      |
| lock-scroll            | 遮罩显示时的背景是否锁定     | boolean        | `false`  |
| close-on-click-overlay | 点击遮罩时是否关闭，如果设置 `false`,那么 `click`事件将失效 | boolean        | `true`   |

### Events

| 事件名 | 说明       | 回调参数     |
| ------ | ---------- | ------------ |
| click  | 点击时触发，仅当 `close-on-click-overlay` 为 `true` 时生效   | event: MouseEvent |

### Slots

| 名称 | 说明       |
| ------ | ---------- |
| default  | 内嵌遮罩内容自定义 |
