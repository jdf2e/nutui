# Radio 单选按钮

### 介绍

用于在一组备选项中进行单选

### 安装

``` ts
import { createApp } from 'vue';
//vue
import { Radio,RadioGroup,Icon } from '@nutui/nutui';
//taro
import { Radio,RadioGroup,Icon } from '@nutui/nutui-taro';

const app = createApp();
app.use(Radio);
app.use(RadioGroup);
app.use(Icon);
```
### 基础用法

通过 **v-model** 绑定值当前选项的 **label** 。并且必须 **nut-radiogroup** 和 **nut-radio** 相结合进行使用

:::demo

```html
<template>
  <nut-cell-group title="基本用法">
    <nut-cell>
      <nut-radiogroup v-model="radioVal">
        <nut-radio label="1">选项1</nut-radio>
        <nut-radio disabled label="2">选项2</nut-radio>
        <nut-radio label="3">选项3</nut-radio>
      </nut-radiogroup>
    </nut-cell>
    <nut-cell>
      <nut-radiogroup v-model="radioVal" text-position="left">
        <nut-radio label="1">选项1</nut-radio>
        <nut-radio disabled label="2">选项2</nut-radio>
        <nut-radio label="3">选项3</nut-radio>
      </nut-radiogroup>
    </nut-cell>
    <nut-cell>
      <nut-radiogroup v-model="radioVal">
        <nut-radio shape="button" label="1">选项1</nut-radio>
        <nut-radio disabled shape="button" label="2">选项2</nut-radio>
        <nut-radio shape="button" label="3">选项3</nut-radio>
      </nut-radiogroup>
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
      <nut-radiogroup v-model="radioVal" direction="horizontal">
        <nut-radio label="1">选项1</nut-radio>
        <nut-radio label="2">选项2</nut-radio>
        <nut-radio label="3">选项3</nut-radio>
      </nut-radiogroup>
    </nut-cell>
    <nut-cell>
      <nut-radiogroup v-model="radioVal" text-position="left" direction="horizontal">
        <nut-radio label="1">选项1</nut-radio>
        <nut-radio label="2">选项2</nut-radio>
        <nut-radio label="3">选项3</nut-radio>
      </nut-radiogroup>
    </nut-cell>
    <nut-cell>
      <nut-radiogroup v-model="radioVal" direction="horizontal">
        <nut-radio shape="button" label="1">选项1</nut-radio>
        <nut-radio shape="button" label="2">选项2</nut-radio>
        <nut-radio shape="button" label="3">选项3</nut-radio>
      </nut-radiogroup>
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
      <nut-radiogroup v-model="radioVal">
        <nut-radio label="1" icon-size="12">自定义尺寸12</nut-radio>
        <nut-radio label="2" icon-size="12">自定义尺寸12</nut-radio>
      </nut-radiogroup>
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

建议 `icon-name` `icon-active-name` 一起修改

:::demo

```html
<template>
  <nut-cell-group title="Radio自定义图标">
    <nut-cell>
      <nut-radiogroup v-model="radioVal">
        <nut-radio label="1" icon-name="checklist" icon-active-name="checklist">自定义图标</nut-radio>
        <nut-radio label="2" icon-name="checklist" icon-active-name="checklist">自定义图标</nut-radio>
      </nut-radiogroup>
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
      <nut-radiogroup v-model="radioVal" @change="handleChange">
        <nut-radio label="1">触发事件</nut-radio>
        <nut-radio label="2">触发事件</nut-radio>
      </nut-radiogroup>
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
| icon-size        | [图标尺寸](#/icon)                                           | String、Number          | `18`              |
| icon-name        | [图标名称](#/icon)，选中前(建议和`icon-active-name`一起修改) | String                  | `'check-normal'`  |
| icon-active-name | [图标名称](#/icon)，选中后(建议和`icon-name`一起修改)        | String                  | `'check-checked'` |
| icon-class-prefix | 自定义 icon 类名前缀，用于使用自定义图标        | String                  | `nut-icon` |
| icon-font-class-name | 自定义 icon 字体基础类名        | String                  | `nutui-iconfont` |
| label            | 单选框标识                                                   | String、Number、Boolean | -                 |
| shape            | 形状，可选值为 button、round                                 | String                  | round             |

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