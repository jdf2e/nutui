# Checkbox

### Intro

The multiple selection button is used to select.

### Install

``` ts
import { createApp } from 'vue';
// vue
import { Checkbox,CheckboxGroup,Icon } from '@nutui/nutui';
// taro
import { Checkbox,CheckboxGroup,Icon } from '@nutui/nutui-taro';

const app = createApp();
app.use(Checkbox).use(CheckboxGroup).use(Icon);
```

## Basic Usage

:::demo

```html
<template>
  <nut-checkbox v-model="checkbox1" label="check box">check box</nut-checkbox>
  <nut-checkbox v-model="checkbox2" text-position="left">check box</nut-checkbox>
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

## Disabled state

:::demo

```html
<template>
  <nut-checkbox v-model="checkbox3" disabled>Disabled when not selected</nut-checkbox>
  <nut-checkbox v-model="checkbox4" disabled>Disabled when selected</nut-checkbox>
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

## Custom size

:::demo

```html
<template>
  <nut-checkbox v-model="checkbox5" icon-size="25">Custom size 25</nut-checkbox>
  <nut-checkbox v-model="checkbox6" icon-size="10">Custom size 10</nut-checkbox>
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

## Custom icon

It is recommended to set the `icon-name` and `icon-active-name` attributes at the same time

:::demo

```html
<template>
  <nut-checkbox v-model="checkbox7" icon-name="checklist" icon-active-name="checklist">Custom icon</nut-checkbox>
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

## change Event

When the value changes, the `change` event will be triggered

:::demo

```html
<template>
  <nut-checkbox v-model="checkbox" @change="changeBox3">change check box</nut-checkbox>
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
        console.log('Change event trigger' + checked, label);
      } 
      return { ...toRefs(state), changeBox3 };
    }
  };
</script>
```

:::

## use checkboxGroup

:::demo

```html
<template>
  <nut-checkboxgroup v-model="checkboxgroup1">
    <nut-checkbox label="1">Combined check box</nut-checkbox>
    <nut-checkbox label="2">Combined check box</nut-checkbox>
    <nut-checkbox label="3">Combined check box</nut-checkbox>
    <nut-checkbox label="4">Combined check box</nut-checkbox>
  </nut-checkboxgroup>
  <nut-cell>
    <div class="demo-check">Currently selected value</div>
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

## Checkboxgroup select all / cancel

:::demo

```html
<template>
  <nut-checkboxgroup v-model="checkboxgroup3" ref="group" @change="changeBox4">
    <nut-checkbox v-for="item in checkboxsource" :key="item.label" :label="item.label">{{item.value}}</nut-checkbox>
  </nut-checkboxgroup>
  <span class="btn">
    <nut-button type="primary" @click="toggleAll(true)">Select all</nut-button>
    <nut-button type="primary" @click="toggleAll(false)">cancel</nut-button>
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
          {label: '1', value: 'Combined check box'},
          {label: '2', value: 'Combined check box'}
        ]
      });

      const group = ref(null);
      const changeBox4 = (label: any[]) => {
        Toast.text(`${label.length === state.checkboxsource.length ? 'Select all' : 'Cancel select all'}`);
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

| Attribute | Description | Type   | Default 
|----- | ----- | ----- | ----- 
| v-model | If selected | Boolean | `false` 
| disabled | Disable selection | Boolean | `false` 
| text-position | The position of the text, optional value：`left`,`right` | String | `right` 
| icon-size | [Icon Size](#/en-US/icon) | String、Number | `18` 
| icon-name | [Icon Name](#/en-US/icon)，Before selection (it is suggested to modify it together with `icon-active-name`) | String | `'check-normal'` 
| icon-active-name | [Icon Name](#/en-US/icon)，After selection (it is suggested to modify it together with `icon-name`) | String | `'checked'` 
| icon-class-prefix | Custom icon class name prefix, used to use custom icons        | String                  | `nut-icon` 
| icon-font-class-name | Basic class name of custom icon font        | String                  | `nutui-iconfont` 
| label | Text content of the check box | String | - 


## CheckboxGroup

| Attribute | Description | Type   | Default 
|----- | ----- | ----- | ----- 
| v-model | Identifier of the currently selected item, corresponding to `label`  | Array | - 
| disabled | Whether to disable the selection, which will be used for all check boxes under it | Boolean | `false` 



## Checkbox Event

| Event | Description                  | Arguments   
|----- | ----- | ----- 
| change | Triggered when the value changes | (state, label),`state` represents the current state，`label` indicates the currently selected value 

## CheckboxGroup Event

| Event | Description                  | Arguments   
|----- | ----- | ----- 
| change | Triggered when the value changes | label,`label` returns an array representing the collection of currently selected items 
