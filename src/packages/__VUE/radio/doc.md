# Radio 单选按钮

### 介绍

用于在一组备选项中进行单选

### 安装

``` ts
import { createApp } from 'vue';
import { Radio,RadioGroup } from '@nutui/nutui';
import { Checklist } from '@nutui/icons-vue';
const app = createApp();
app.use(Radio);
app.use(RadioGroup);
app.use(Checklist);
```
### 基础用法

通过 **v-model** 绑定值当前选项的 **label** 。并且必须 **nut-radio-group** 和 **nut-radio** 相结合进行使用

:::demo

```html
<template>
  <nut-cell-group title="基本用法">
    <nut-cell>
      <nut-radio-group v-model="radioVal">
        <nut-radio label="1">选项1</nut-radio>
        <nut-radio disabled label="2">选项2</nut-radio>
        <nut-radio label="3">选项3</nut-radio>
      </nut-radio-group>
    </nut-cell>
    <nut-cell>
      <nut-radio-group v-model="radioVal" text-position="left">
        <nut-radio label="1">选项1</nut-radio>
        <nut-radio disabled label="2">选项2</nut-radio>
        <nut-radio label="3">选项3</nut-radio>
      </nut-radio-group>
    </nut-cell>
    <nut-cell>
      <nut-radio-group v-model="radioVal">
        <nut-radio shape="button" label="1">选项1</nut-radio>
        <nut-radio disabled shape="button" label="2">选项2</nut-radio>
        <nut-radio shape="button" label="3">选项3</nut-radio>
      </nut-radio-group>
    </nut-cell>
  </nut-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      return { radioVal };
    },
  };
</script>
```

:::

### 水平使用

:::demo

```html
<template>
  <nut-cell-group title="水平使用">
    <nut-cell>
      <nut-radio-group v-model="radioVal" direction="horizontal">
        <nut-radio label="1">选项1</nut-radio>
        <nut-radio label="2">选项2</nut-radio>
        <nut-radio label="3">选项3</nut-radio>
      </nut-radio-group>
    </nut-cell>
    <nut-cell>
      <nut-radio-group v-model="radioVal" text-position="left" direction="horizontal">
        <nut-radio label="1">选项1</nut-radio>
        <nut-radio label="2">选项2</nut-radio>
        <nut-radio label="3">选项3</nut-radio>
      </nut-radio-group>
    </nut-cell>
    <nut-cell>
      <nut-radio-group v-model="radioVal" direction="horizontal">
        <nut-radio shape="button" label="1">选项1</nut-radio>
        <nut-radio shape="button" label="2">选项2</nut-radio>
        <nut-radio shape="button" label="3">选项3</nut-radio>
      </nut-radio-group>
    </nut-cell>
  </nut-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      return { radioVal };
    },
  };
</script>
```

:::
### 自定义尺寸

:::demo

```html
<template>
  <nut-cell-group title="自定义尺寸">
    <nut-cell>
      <nut-radio-group v-model="radioVal">
        <nut-radio label="1" icon-size="12">自定义尺寸12</nut-radio>
        <nut-radio label="2" icon-size="12">自定义尺寸12</nut-radio>
      </nut-radio-group>
    </nut-cell>
  </nut-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      return { radioVal };
    },
  };
</script>
```

:::

### 自定义图标

通过slot自定义图标，建议同时设置`icon`和`checkedIcon`两个插槽

:::demo

```html
<template>
  <nut-cell-group title="Radio自定义图标">
    <nut-cell>
      <nut-radio-group v-model="radioVal">
        <nut-radio label="1">
          自定义图标
          <template #icon> <Checklist /> </template>
          <template #checkedIcon> <Checklist color="red" /> </template>
        </nut-radio>
        <nut-radio label="2">
          自定义图标
          <template #icon> <Checklist /> </template>
          <template #checkedIcon> <Checklist color="red" /> </template>
        </nut-radio>
      </nut-radio-group>
    </nut-cell>
  </nut-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      return { radioVal };
    },
  };
</script>
```

:::

### 触发 change 事件

:::demo

```html
<template>
  <nut-cell-group title="触发事件">
    <nut-cell>
      <nut-radio-group v-model="radioVal" @change="handleChange">
        <nut-radio label="1">触发事件</nut-radio>
        <nut-radio label="2">触发事件</nut-radio>
      </nut-radio-group>
    </nut-cell>
    <nut-cell title="当前选中值" :desc="radioVal"></nut-cell>
  </nut-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      const handleChange = (value: any) => {
        console.log(value);
      };
      return { radioVal, handleChange };
    },
  };
</script>
```
:::

## API

### Radio Props

| 参数             | 说明                                                         | 类型                    | 默认值            |
|------------------|--------------------------------------------------------------|-------------------------|-------------------|
| disabled         | 是否禁用选择                                                 | boolean                 | `false`           |
| icon-size        | [图标尺寸](#/zh-CN/component/icon)                                           | string \| number          | `18`              |
| label            | 单选框标识                                                   | string \| number \| boolean | -                 |
| shape            | 形状，可选值为 button、round                                 | string                  | `round`             |

### Radio Slots
| 名称 | 说明 |
|-|-|
| icon | 未选中时的图标 |
| checkedIcon | 选中时的图标 |
### RadioGroup Props

| 参数          | 说明                                          | 类型                    | 默认值     |
|---------------|-----------------------------------------------|-------------------------|------------|
| v-model       | 当前选中项的标识符，与 `label` 值一致时呈选中状态 | string \| number \| boolean | -          |
| text-position | 文本所在的位置，可选值：`left`,`right`        | string                  | `right`    |
| direction     | 使用横纵方向 可选值 `horizontal、vertical `     | string                  | `vertical` |

### RadioGroup Events

| 事件名   | 说明         | 回调参数                                           |
|--------|--------------|----------------------------------------------------|
| change | 值变化时触发 | 当前选中项值（label）【设置label后有值、默认为空】 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                                    | 默认值                     |
| --------------------------------------- | -------------------------- |
|  --nut-radio-label-font-color|  _#1d1e1e_  |
|  --nut-radio-label-font-active-color|  _var(--nut-primary-color)_  |
|  --nut-radio-label-disable-color|  _#999_  |
|  --nut-radio-icon-disable-color|  _#d6d6d6_  |
|  --nut-radio-label-button-border-color|  _var(--nut-primary-color)_  |
|  --nut-radio-label-button-background|  _var(--nut-active-color)_  |
|  --nut-radio-label-margin-left|  _15px_  |
|  --nut-radio-button-border-radius|  _15px_  |
|  --nut-radio-label-font-size|  _14px_  |
|  --nut-radio-button-font-size|  _12px_  |
|  --nut-radio-button-padding|  _5px 18px_  |
|  --nut-radio-icon-font-size|  _18px_  |
|  --nut-radio-icon-disable-color2|  _var(--nut-help-color)_  |