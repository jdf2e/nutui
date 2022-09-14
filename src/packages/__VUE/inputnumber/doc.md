# InputNumber 数字输入框

### 介绍

通过点击按钮控制数字增减。

### 安装

``` javascript
import { createApp } from 'vue';
// vue
import { InputNumber,Icon } from '@nutui/nutui';
// taro
import { InputNumber,Icon } from '@nutui/nutui-taro';

const app = createApp();
app.use(InputNumber);
app.use(Icon);

```


### 基础用法

初始化一个默认值

:::demo

``` html
<template>
  <nut-inputnumber v-model="value" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const value = ref(1);
      return { value };
    },
  };
</script>
```

:::

### 步长设置

设置步长 `step` 5 

:::demo

```html
<template>
  <nut-inputnumber v-model="value" step="5" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const value = ref(1);
      return { value };
    },
  };
</script>
```

:::

### 限制输入范围

`min` 和 `max` 属性分别表示最小值和最大值

:::demo

```html
<template>
  <nut-inputnumber v-model="value" min="10" max="20" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const value = ref(10);
      return { value };
    },
  };
</script>
```

:::

### 禁用状态

`disabled` 禁用状态下无法点击按钮或修改输入框。

:::demo

```html
<template>
  <nut-inputnumber v-model="value" disabled />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const value = ref(1);
      return { value };
    },
  };
</script>
```

:::

### 只读禁用输入框

`readonly` 设置只读禁用输入框输入行为

:::demo

```html
<template>
  <nut-inputnumber v-model="value" readonly />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const value = ref(1);
      return { value };
    },
  };
</script>
```

:::

### 支持小数点

设置步长 `step` 0.1  `decimal-places` 小数保留1位

:::demo

```html
<template>
  <nut-inputnumber v-model="value" step="0.1" decimal-places="1" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const value = ref(1);
      return { value };
    },
  };
</script>
```

:::
### 支持异步修改

通过 `change` 事件和 `model-value` 进行异步修改

:::demo

```html
<template>
  <nut-inputnumber :model-value="value" @change="onChange" />
</template>
<script lang="ts">
  import { reactive, getCurrentInstance, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      let { proxy } = getCurrentInstance();
      const state = reactive({
        value: 1
      });
      const onChange = (value: number) => {
        proxy.$toast.loading('异步演示 2 秒后更改');
        setTimeout(() => {
          state.value = value;
          proxy.$toast.hide();
        }, 2000);
      };
      return { ...toRefs(state), onChange };
    },
  };
</script>
```

:::
### 自定义按钮大小

:::demo

```html
<template>
  <nut-inputnumber v-model="value"  button-size="30" input-width="50" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const value = ref(1);
      return { value };
    },
  };
</script>
```

:::
### 自定义按钮图标

:::demo

```html
<template>
  <nut-inputnumber icon-left="left" icon-right="right" v-model="value" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const value = ref(1);
      return { value };
    },
  };
</script>
```

:::

## API

### Props

| 参数           | 说明                       | 类型           | 默认值     |
|----------------|----------------------------|----------------|------------|
| v-model        | 初始值                     | String、Number | -          |
| input-width    | 输入框宽度                 | String         | `40px`     |
| button-size    | 操作符+、-尺寸             | String         | `20px`     |
| min            | 最小值限制                 | String、Number | `1`        |
| max            | 最大值限制                 | String、Number | `9999` |
| step           | 步长                       | String、Number | `1`        |
| decimal-places | 设置保留的小数位           | String、Number | `0`        |
| disabled       | 禁用所有功能               | Boolean        | false      |
| readonly       | 只读状态禁用输入框操作行为 | Boolean        | false      |
| icon-left `v3.2.2`  | 左侧操作符图标名，同 Icon 组件 name 属性 | String  | `minus` |
| icon-right `v3.2.2` | 右侧操作符图标名，同 Icon 组件 name 属性 | String  | `plus`  |
| font-class-name `v3.2.2` | 自定义icon 字体基础类名 | String   | `nutui-iconfont` |
| class-prefix `v3.2.2` | 自定义icon 类名前缀，用于使用自定义图标 | String   | `nut-icon`  |

### Events

| 事件名    | 说明                   | 回调参数                       |
|-----------|------------------------|--------------------------------|
| add       | 点击增加按钮时触发     | event: Event                   |
| reduce    | 点击减少按钮时触发     | event: Event                   |
| overlimit | 点击不可用的按钮时触发 | event: Event,type:string (reduce or add)                    |
| change    | 值改变时触发           | value:  number , event : Event |
| blur      | 输入框失去焦点时触发   | event: Event                   |
| focus     | 输入框获得焦点时触发   | event: Event                   |
