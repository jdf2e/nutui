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

| 字段             | 说明                                                         | 类型                    | 默认值            |
|------------------|--------------------------------------------------------------|-------------------------|-------------------|
| disabled         | 是否禁用选择                                                 | Boolean                 | `false`           |
| icon-size        | [图标尺寸](#/zh-CN/component/icon)                                           | String、Number          | `18`              |
| label            | 单选框标识                                                   | String、Number、Boolean | -                 |
| shape            | 形状，可选值为 button、round                                 | String                  | round             |

### Radio Slots
| 名称 | 说明 |
|-|-|
| icon | 未选中时的图标 |
| checkedIcon | 选中时的图标 |
### RadioGroup Props

| 字段          | 说明                                          | 类型                    | 默认值     |
|---------------|-----------------------------------------------|-------------------------|------------|
| v-model       | 当前选中项的标识符，与label值一致时呈选中状态 | String、Number、Boolean | -          |
| text-position | 文本所在的位置，可选值：`left`,`right`        | String                  | `right`    |
| direction     | 使用横纵方向 可选值 horizontal、vertical      | String                  | `vertical` |

### RadioGroup Events

| 字段   | 说明         | 回调参数                                           |
|--------|--------------|----------------------------------------------------|
| change | 值变化时触发 | 当前选中项值（label）【设置label后有值、默认为空】 |