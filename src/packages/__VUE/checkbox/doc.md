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
app.use(Checkbox);
app.use(CheckboxGroup);
app.use(Icon);
```

### 基础用法

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

### 半选状态

:::demo

```html
<template>
  <nut-cell>
    <nut-checkbox v-model="checkbox9" :indeterminate="true" label="复选框">复选框</nut-checkbox>
  </nut-cell>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        checkbox9: true
      });
      return { ...toRefs(state) };
    }
  };
</script>
```

:::

### 禁用状态

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

### 自定义尺寸

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

### 自定义图标

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

### change事件

值发生变化时，将触发 `change` 事件

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

### checkboxGroup使用

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

### checkboxGroup 全选/取消

:::demo

```html
<template>
  <nut-checkboxgroup v-model="checkboxgroup3" ref="group" @change="changeBox4">
    <nut-checkbox v-for="item in checkboxsource" :key="item.label" :label="item.label">{{item.value}}</nut-checkbox>
  </nut-checkboxgroup>
  <span class="btn">
    <nut-button type="primary" @click="toggleAll(true)" style="margin: 0 20px 0 0">全选</nut-button>
    <nut-button type="primary" @click="toggleAll(false)" style="margin: 0 20px 0 0">取消</nut-button>
    <nut-button type="warning" @click="toggleReverse()">反选</nut-button>
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
        checkboxsource: [
          {label: '1', value: '组合复选框'},
          {label: '2', value: '组合复选框'},
          {label: '3', value: '组合复选框'},
          {label: '4', value: '组合复选框'},
          {label: '5', value: '组合复选框'},
          {label: '6', value: '组合复选框'}
        ]
      });

      const group = ref(null);
      const changeBox4 = (label: any[]) => {
        Toast.text(`${label.length === state.checkboxsource.length ? '全选' : '取消全选'}`);
      };

      const toggleAll = (f: boolean) => {
        (group.value as any).toggleAll(f);
      };

      const toggleReverse = () => {
        Toast.text(`反选`);
        group.value.toggleReverse();
      };

      return { ...toRefs(state), group, changeBox4, toggleAll };
    }
  };
</script>
```

:::

### checkboxGroup使用，限制最大可选数（2个）

:::demo

```html
<template>
  <nut-cell-group title="checkboxGroup使用，限制最大可选数（2个）">
    <nut-cell>
      <nut-checkboxgroup v-model="checkboxgroup4" :max="2">
        <nut-checkbox label="1" style="margin: 2px 20px 0 0">组合复选框</nut-checkbox>
        <nut-checkbox label="2">组合复选框</nut-checkbox>
        <nut-checkbox label="3" style="margin: 2px 20px 0 0">组合复选框</nut-checkbox>
        <nut-checkbox label="4">组合复选框</nut-checkbox>
      </nut-checkboxgroup>
    </nut-cell>
    <nut-cell>
      <div class="demo-check">选中</div>
      <div>{{ checkboxgroup4 }}</div>
    </nut-cell>
  </nut-cell-group>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  import { Toast } from '@nutui/nutui';
  export default {
    props: {},
    setup() {
      const state = reactive({
        checkboxgroup4: ['2']
      });

      return { ...toRefs(state) };
    }
  };
</script>
```

:::


### 全选/半选/取消

:::demo

```html
<template>
  <nut-cell-group title="全选/半选/取消">
    <nut-cell>
      <nut-checkbox :indeterminate="indeterminate" v-model="checkbox10" @change="changeBox5">全选</nut-checkbox>
    </nut-cell>
    <nut-checkboxgroup v-model="checkboxgroup5" ref="group2" @change="changeBox6">
      <nut-cell><nut-checkbox label="1" style="margin: 2px 20px 0 0">组合复选框</nut-checkbox></nut-cell>
      <nut-cell><nut-checkbox label="2">组合复选框</nut-checkbox></nut-cell>
      <nut-cell><nut-checkbox label="3">组合复选框</nut-checkbox></nut-cell>
      <nut-cell><nut-checkbox label="4">组合复选框</nut-checkbox></nut-cell>
    </nut-checkboxgroup>
  </nut-cell-group>
</template>
<script lang="ts">
  import { reactive, toRefs,ref, Ref } from 'vue';
  import { Toast } from '@nutui/nutui';
  export default {
    props: {},
    setup() {
      const group2 = ref(null) as Ref;
      const state = reactive({
        indeterminate: true,
        checkbox10: false,
        checkboxgroup5: [],
      });

      const changeBox5 = (value: boolean) => {
        group2.value.toggleAll(value);
      };

      const changeBox6 = (label: string[]) => {
        if(label.length === 4) {
          state.indeterminate = false;
          state.checkbox10 = true;
        } else if(label.length && label.length < 4){
          state.indeterminate = true;
          state.checkbox10 = true;
        } else {
          state.checkbox10 = false;
        }
      };

      return { ...toRefs(state), group2, changeBox5, changeBox6 };
    }
  };
</script>
```

:::


## API

### Checkbox Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| v-model | 是否处于选中状态 | Boolean | `false`
| disabled | 是否禁用选择 | Boolean | `false`
| text-position | 文本所在的位置，可选值：`left`,`right` | String | `right`
| icon-size | [图标尺寸](#/icon) | String、Number | `18`
| icon-name | [图标名称](#/icon)，选中前(建议和`icon-active-name`一起修改) | String | `'check-normal'`
| icon-active-name | [图标名称](#/icon)，选中后(建议和`icon-name`一起修改) | String | `'checked'`
| icon-indeterminate-name | [图标名称](#/icon)，半选状态 | String | `'check-disabled'`
| icon-class-prefix | 自定义 icon 类名前缀，用于使用自定义图标        | String                  | `nut-icon` |
| icon-font-class-name | 自定义 icon 字体基础类名        | String                  | `nutui-iconfont` |
| label | 复选框的文本内容 | String | -
| indeterminate | 当前是否支持半选状态，一般用在全选操作中        | Boolean                  | `false` |
### CheckboxGroup Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| v-model | 当前选中项的标识符，和 `label` 相对应  | Array | -
| disabled | 是否禁用选择,将用于其下的全部复选框 | Boolean | `false`
| max | 限制选择的数量，不能和`全选/取消/反选`一起使用, `0`表示没有限制 | Number | `0`



### Checkbox Events

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| change | 值变化时触发 | (state, label),`state`代表当前状态，`label`表示当前选中的值

### CheckboxGroup Events

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| change | 值变化时触发 | label,`label`返回一个数组，表示当前选中项的集合


### CheckboxGroup 方法

| 方法名 | 说明 | 参数 
|----- | ----- | ----- 
| toggleAll | 全选/取消 | `f`,传 `true`,表示全选，传 `false`,表示取消全选
| toggleReverse | 反选 | -
