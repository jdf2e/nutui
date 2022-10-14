# Steps 步骤条

### 介绍

拆分展示某项流程的步骤，引导用户按流程完成任务或向用户展示当前状态。

### 安装

```javascript
import { createApp } from 'vue';
//vue
import { Steps, Step } from '@nutui/nutui';
//taro
import { Steps, Step  } from '@nutui/nutui-taro';

const app = createApp();
app.use(Steps);
app.use(Step);
```

### 基础用法

:::demo

```html
<template>
  <nut-steps :current="current1" @click-step="handleClickStep">
    <nut-step title="步骤一">
      1
      <template v-slot:title>步骤一</template>
    </nut-step>
    <nut-step title="未开始">2</nut-step>
    <nut-step title="未开始">3</nut-step>
    <nut-step title="未开始">4</nut-step>
  </nut-steps>
</template>
<script>
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        current1: 1,
      });
      const handleClickStep = (index: number) => {
        console.log(index)
      };
      return { ...toRefs(state), handleClickStep };
    }
  };
</script>
```
:::

### 标题和描述信息

:::demo

```html
<template>
  <nut-steps :current="current2">
    <nut-step title="已完成" content="步骤描述">1</nut-step>
    <nut-step title="进行中" content="步骤描述">2</nut-step>
    <nut-step title="未开始" content="步骤描述">3</nut-step>
  </nut-steps>
</template>
<script>
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        current2: 1,
      });
      return { ...toRefs(state) };
    }
  };
</script>
```

:::

### 自定义图标

:::demo

```html
<template>
  <nut-steps current="1">
    <nut-step title="已完成" icon="service">1</nut-step>
    <nut-step title="进行中" icon="people">2</nut-step>
    <nut-step title="未开始" icon="location2">3</nut-step>
  </nut-steps>
</template>
```

:::

### 竖向步骤条

:::demo

```html
<template>
  <nut-steps direction="vertical" current="2">
    <nut-step title="已完成" content="您的订单已经打包完成，商品已发出">1</nut-step>
    <nut-step title="进行中" content="您的订单正在配送途中">2</nut-step>
    <nut-step title="未开始" content="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦">3</nut-step>
  </nut-steps>
</template>
```

:::

### 点状步骤和垂直方向

:::demo

```html
<template>
  <nut-steps direction="vertical" progress-dot current="2">
    <nut-step title="已完成" content="您的订单已经打包完成，商品已发出">1</nut-step>
    <nut-step title="进行中" content="您的订单正在配送途中">2</nut-step>
    <nut-step title="未开始">
      3
      <template v-slot:content>
        <p>收货地址为：</p>
        <p>北京市经济技术开发区科创十一街18号院京东大厦</p>
      </template>
    </nut-step>
  </nut-steps>
</template>
```

:::




## API

### Steps Props

| 参数                   | 说明                                                        | 类型           | 默认值      |
| ---------------------- | ----------------------------------------------------------- | -------------- | ----------- |
| direction	             | 	显示方向，`horizontal`,`vertical`  | String        | 'horizontal'  | 
| current	               | 	当前所在的步骤           | Number、String        | '0'      |
| progress-dot            |  点状步骤条     | Boolean | false         |

### Steps Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click-step  | 点击步骤的标题或图标时触发 | index: number |

### Step Props

| 参数           | 说明                   | 类型     | 默认值      |
| ---------------- | ---------------------- | ------------ | ----------- |
| title            | 流程步骤的标题         | String | 步骤 |
| content          | 流程步骤的描述性文字(支持 html 结构)       | String | 步骤描述 |
| icon          | 图标       | String | null |
| icon-color          | 图标颜色       | String | null |

### Step Slots

| 参数           | 说明                   |
| ---------------- | ---------------------- |
| title            | 步骤标题         |
| content          | 步骤内容       |
