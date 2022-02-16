# Checkbox 复选按钮

### 介绍

多选按钮用于选择。

### 安装

``` ts
import { createApp } from 'vue';
// vue
import { Checkbox,CheckboxGroup,Icon } from '@nutui/nutui';
// taro
import { Checkbox,CheckboxGroup,Icon } from '@nutui/nutui-taro';

const app = createApp();
app.use(Checkbox).use(CheckboxGroup).use(Icon);
```

## 基本用法

:::demo

```html
<template>
  <nut-checkbox v-model="checkbox1" label="复选框">复选框</nut-checkbox>
  <nut-checkbox v-model="checkbox2" text-position="left">复选框</nut-checkbox>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        checkbox1: false,
        checkbox2: false
      });
      return { ...toRefs(state) };
    }
  };
</script>
<style lang="scss" scoped>
  .nut-checkbox {
    display: flex;
    margin-right: 20px;
    .nut-checkbox__label {
      margin-left: 10px;
    }
  }
</style>
```

:::

## 禁用状态

:::demo

```html
<template>
  <nut-checkbox v-model="checkbox3" disabled>未选时禁用状态</nut-checkbox>
  <nut-checkbox v-model="checkbox4" disabled>选中时禁用状态</nut-checkbox>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        checkbox3: false,
        checkbox4: true,
      });
      return { ...toRefs(state) };
    }
  };
</script>
```

:::

## 自定义尺寸

:::demo

```html
<template>
  <nut-checkbox v-model="checkbox5" icon-size="25">自定义尺寸25</nut-checkbox>
  <nut-checkbox v-model="checkbox6" icon-size="10">自定义尺寸10</nut-checkbox>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        checkbox5: true,
        checkbox6: true,
      });
      return { ...toRefs(state) };
    }
  };
</script>
```

:::

## 自定义图标

这里建议同时设置 `icon-name` 和 `icon-active-name` 属性

:::demo

```html
<template>
  <nut-checkbox v-model="checkbox7" icon-name="checklist" icon-active-name="checklist">自定义图标</nut-checkbox>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        checkbox7: true,
      });
      return { ...toRefs(state) };
    }
  };
</script>
```

:::

## change事件

值发生变化时，将触发change事件

:::demo

```html
<template>
  <nut-checkbox v-model="checkbox" @change="changeBox3">change复选框</nut-checkbox>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        checkbox: false,
      });
      const changeBox3= (checked: boolean, label: string) => {
        console.log('change事件触发' + checked, label);
      } 
      return { ...toRefs(state), changeBox3 };
    }
  };
</script>
```

:::

## checkboxGroup使用

:::demo

```html
<template>
  <nut-checkboxgroup v-model="checkboxgroup1">
    <nut-checkbox label="1">组合复选框</nut-checkbox>
    <nut-checkbox label="2">组合复选框</nut-checkbox>
    <nut-checkbox label="3">组合复选框</nut-checkbox>
    <nut-checkbox label="4">组合复选框</nut-checkbox>
  </nut-checkboxgroup>
  <nut-cell>
    <div class="demo-check">当前选中值</div>
    <div>{{ checkboxgroup1 }}</div>
  </nut-cell>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        checkboxgroup1: ['2', '3'],
      });

      return { ...toRefs(state) };
    }
  };
</script>
```

:::

## checkboxGroup 全选/取消

:::demo

```html
<template>
  <nut-checkboxgroup v-model="checkboxgroup3" ref="group" @change="changeBox4">
    <nut-checkbox label="1">组合复选框</nut-checkbox>
    <nut-checkbox label="2">组合复选框</nut-checkbox>
  </nut-checkboxgroup>
  <span class="btn">
    <nut-button type="primary" @click="toggleAll(true)">全选</nut-button>
    <nut-button type="primary" @click="toggleAll(false)">取消</nut-button>
  </span>
</template>
<script lang="ts">
  import { reactive, toRefs, ref } from 'vue';
  import { Toast } from '@nutui/nutui';
  export default {
    props: {},
    setup() {
      const state = reactive({
        checkboxgroup3: ['2'],
      });

      const group = ref(null);
      const changeBox4 = (label: any[]) => {
        Toast.text(`${label.length ? '全选' : '取消全选'}`);
      };

      const toggleAll = (f: boolean) => {
        (group.value as any).toggleAll(f);
      };

      return { ...toRefs(state), group, changeBox4, toggleAll };
    }
  };
</script>
```

:::

## Checkbox

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| v-model | 是否处于选中状态 | Boolean | `false`
| disabled | 是否禁用选择 | Boolean | `false`
| text-position | 文本所在的位置，可选值：`left`,`right` | String | `right`
| icon-size | [图标尺寸](#/icon) | String、Number | `18`
| icon-name | [图标名称](#/icon)，选中前(建议和`icon-active-name`一起修改) | String | `'check-normal'`
| icon-active-name | [图标名称](#/icon)，选中后(建议和`icon-name`一起修改) | String | `'checked'`
| label | 复选框的文本内容 | String | -


## CheckboxGroup

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| v-model | 当前选中项的标识符，和 `label` 相对应  | Array | -
| disabled | 是否禁用选择,将用于其下的全部复选框 | Boolean | `false`



## Checkbox Event

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| change | 值变化时触发 | (state, label),`state`代表当前状态，`label`表示当前选中的值

## CheckboxGroup Event

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| change | 值变化时触发 | label,`label`返回一个数组，表示当前选中项的集合
