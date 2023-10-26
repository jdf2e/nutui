# Picker

### Intro

The picker component is usually used with Popup Component.

### Install

```js
import { createApp } from 'vue';
import { Picker } from '@nutui/nutui';

const app = createApp();
app.use(Picker);
```

### Basic Usage

:::demo

```vue
<template>
  <nut-picker :columns="columns" title="Choose City" @confirm="confirm"></nut-picker>
</template>
<script setup>
import { ref } from 'vue';
const columns = ref([
  { text: 'NanJing', value: 'NanJing' },
  { text: 'WuXi', value: 'WuXi' },
  { text: 'ZangZu', value: 'ZangZu' },
  { text: 'BeiJing', value: 'BeiJing' },
  { text: 'LianYunGang', value: 'LianYunGang' },
  { text: 'ZheJiang', value: 'ZheJiang' },
  { text: 'JiangSu', value: 'JiangSu' }
]);

const confirm = ({ selectedValue, selectedOptions }) => {
  console.log(selectedOptions.map((val) => val.text).join(','));
};
</script>
```

:::

### With Popup

The Picker is usually filled in as an auxiliary form, which can be paired with a Popup.

:::demo

```vue
<template>
  <nut-cell title="Choose City" :desc="desc" @click="show = true"></nut-cell>
  <nut-popup position="bottom" v-model:visible="show">
    <nut-picker v-model="value" :columns="columns" title="Choose City" @confirm="confirm" @cancel="show = false">
      <nut-button block type="primary">Button</nut-button>
    </nut-picker>
  </nut-popup>
</template>
<script setup>
import { ref } from 'vue';
const show = ref(false);
const desc = ref();
const value = ref();
const columns = ref([
  { text: 'NanJing', value: 'NanJing' },
  { text: 'WuXi', value: 'WuXi' },
  { text: 'ZangZu', value: 'ZangZu' },
  { text: 'BeiJing', value: 'BeiJing' },
  { text: 'LianYunGang', value: 'LianYunGang' },
  { text: 'ZheJiang', value: 'ZheJiang' },
  { text: 'JiangSu', value: 'JiangSu' }
]);

const confirm = ({ selectedValue, selectedOptions }) => {
  desc.value = selectedOptions.map((val) => val.text).join(',');
  show.value = false;
};
</script>
```

:::

### Default Index

The default selection is implemented by setting `modelValue`, which is an array of values for each configuration。

:::demo

```vue
<template>
  <nut-picker v-model="value" :columns="columns" title="Choose City" @confirm="confirm"> </nut-picker>
</template>
<script setup>
import { ref } from 'vue';
const value = ref(['ZheJiang']);
const columns = ref([
  { text: 'NanJing', value: 'NanJing' },
  { text: 'WuXi', value: 'WuXi' },
  { text: 'ZangZu', value: 'ZangZu' },
  { text: 'BeiJing', value: 'BeiJing' },
  { text: 'LianYunGang', value: 'LianYunGang' },
  { text: 'ZheJiang', value: 'ZheJiang' },
  { text: 'JiangSu', value: 'JiangSu' }
]);
const confirm = ({ selectedValue, selectedOptions }) => {
  console.log(selectedOptions.map((val) => val.text).join(','));
};
</script>
```

:::

### 3D

:::demo

```vue
<template>
  <nut-picker v-model="value" :columns="columns" title="Choose City" :threeDimensional="false" @confirm="confirm">
  </nut-picker>
</template>
<script setup>
import { ref } from 'vue';
const value = ref(['ZheJiang']);
const columns = ref([
  { text: 'NanJing', value: 'NanJing' },
  { text: 'WuXi', value: 'WuXi' },
  { text: 'ZangZu', value: 'ZangZu' },
  { text: 'BeiJing', value: 'BeiJing' },
  { text: 'LianYunGang', value: 'LianYunGang' },
  { text: 'ZheJiang', value: 'ZheJiang' },
  { text: 'JiangSu', value: 'JiangSu' }
]);

const confirm = ({ selectedValue, selectedOptions }) => {
  console.log(selectedOptions.map((val) => val.text).join(','));
};
</script>
```

:::

### Multiple Columns

:::demo

```vue
<template>
  <nut-picker v-model="value" :columns="columns" title="Choose City" @confirm="confirm" @change="change"> </nut-picker>
</template>
<script setup>
import { ref } from 'vue';
const value = ref(['Wednesday', 'Afternoon']);
const columns = ref([
  [
    { text: 'Monday', value: 'Monday' },
    { text: 'Tuesday', value: 'Tuesday' },
    { text: 'Wednesday', value: 'Wednesday' },
    { text: 'Thursday', value: 'Thursday' },
    { text: 'Friday', value: 'Friday' }
  ],
  [
    { text: 'Morning', value: 'Morning' },
    { text: 'Afternoon', value: 'Afternoon' },
    { text: 'Evening', value: 'Evening' }
  ]
]);

const confirm = ({ selectedValue, selectedOptions }) => {
  console.log(selectedOptions.map((val) => val.text).join(','));
};
const change = ({ selectedValue, selectedOptions }) => {
  console.log(selectedValue);
};
</script>
```

:::

### Cascade

Use the children field of the Columns attribute to cascade options

:::demo

```vue
<template>
  <nut-picker v-model="value" :columns="columns" title="Choose City" @confirm="confirm"></nut-picker>
</template>
<script setup>
import { ref } from 'vue';
const value = ref(['FuJian', 'FuZhou', 'TaiJiang']);
const columns = ref([
  {
    text: 'ZheJiang',
    value: 'ZheJiang',
    children: [
      {
        text: 'HangZhou',
        value: 'HangZhou',
        children: [
          { text: 'XiHu', value: 'XiHu' },
          { text: 'YuHang', value: 'YuHang' }
        ]
      },
      {
        text: 'WenZhou',
        value: 'WenZhou',
        children: [
          { text: 'LuCheng', value: 'LuCheng' },
          { text: 'OuHai', value: 'OuHai' }
        ]
      }
    ]
  },
  {
    text: 'FuJian',
    value: 'FuJian',
    children: [
      {
        text: 'FuZhou',
        value: 'FuZhou',
        children: [
          { text: 'GuLou', value: 'GuLou' },
          { text: 'TaiJiang', value: 'TaiJiang' }
        ]
      },
      {
        text: 'XiaMen',
        value: 'XiaMen',
        children: [
          { text: 'SiMing', value: 'SiMing' },
          { text: 'HaiCang', value: 'HaiCang' }
        ]
      }
    ]
  }
]);

const confirm = ({ selectedValue, selectedOptions }) => {
  console.log(selectedOptions.map((val) => val.text).join(','));
};
</script>
```

:::

### Async

:::demo

```vue
<template>
  <nut-picker v-model="value" :columns="columns" title="Choose City" @confirm="confirm"></nut-picker>
</template>
<script lang="ts">
import { ref, onMounted } from 'vue';
const columns = ref([]);
const value = ref<string[]>([]);
onMounted(() => {
  setTimeout(() => {
    columns.value = [
      { text: 'NanJing', value: 'NanJing' },
      { text: 'WuXi', value: 'WuXi' },
      { text: 'ZangZu', value: 'ZangZu' },
      { text: 'BeiJing', value: 'BeiJing' },
      { text: 'LianYunGang', value: 'LianYunGang' },
      { text: 'ZheJiang', value: 'ZheJiang' },
      { text: 'JiangSu', value: 'JiangSu' }
    ];

    value.value = ['ZangZu'];
  }, 500);
});

const confirm = ({ selectedValue, selectedOptions }) => {
  console.log(selectedOptions.map((val) => val.text).join(','));
};
</script>
```

:::

### Custom Columns Field v4.1.4

:::demo

```vue
<template>
  <nut-picker v-model="value" :columns="columns" :field-names="fieldNames" title="Choose City" @confirm="confirm">
  </nut-picker>
</template>
<script setup>
import { ref } from 'vue';
const value = ref([]);
const fieldNames = ref({
  text: 'name',
  value: 'code',
  children: 'list'
});
const columns = ref([
  {
    name: 'ZheJiang',
    code: 'ZheJiang',
    list: [
      {
        name: 'HangZhou',
        code: 'HangZhou',
        list: [
          { name: 'XiHu', code: 'XiHu' },
          { name: 'YuHang', code: 'YuHang' }
        ]
      },
      {
        name: 'WenZhou',
        code: 'WenZhou',
        list: [
          { name: 'LuCheng', code: 'LuCheng' },
          { name: 'OuHai', code: 'OuHai' }
        ]
      }
    ]
  }
]);

const confirm = ({ selectedValue, selectedOptions }) => {
  console.log(selectedOptions.map((val) => val.text).join(','));
};
</script>
```

:::

## API

### Props

| Attribute | Description | Type | Default |
|  ---  |  ---  |  ---  |  ---  |
| v-model:value | Default Index | Array | `[]` |
| columns | Columns data | PickerOption[] \| PickerOption[][] | - |
| field-names`v4.1.4` | custom columns field | object | `{ text: 'text', value: 'value', children: 'children' }` |
| title | Toolbar title | string | - |
| cancel-text | Text of cancel button | string | `cancel` |
| ok-text | Text of confirm button | string | `confirm` |
| three-dimensional | Turn on 3D effects | boolean | `false` |
| swipe-duration | Duration of the momentum animation | number \| string | `1000` |
| visible-option-num | Count of visible columns | number \| string | `7` |
| option-height | Option height | number \| string | `36` |
| show-toolbar | Whether to show toolbar | boolean | `true` |

### Events

| Event | Description | Arguments |
|  ---  |  ---  |  ---  |
| confirm | Emitted when click confirm button. | `{ selectedValue, selectedOptions }` |
| cancel | Emitted when click close button. | `{ selectedValue, selectedOptions }` |
| change | Emitted when current option changed. | `{ columnIndex, selectedValue, selectedOptions }` |

### Slots

| Name | Description |
|  ---  |  ---  |
| default | Custom content bottom columns |
| top | Custom content top columns |

### Data Structure of PickerOption

| Key | Description | Type | Default |
|  ---  |  ---  |  ---  |  ---  |
| text | Text of column | string \| number | - |
| value | Value of column | string \| number | - |
| children | Cascader Option | Array | - |
| className | Extra CalssName | string | - |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
|  ---  |  ---  |
| --nut-picker-cancel-color | _#808080_ |
| --nut-picker-ok-color | _var(--nut-primary-color)_ |
| --nut-picker-bar-cancel-font-size | _14px_ |
| --nut-picker-bar-ok-font-size | _14px_ |
| --nut-picker-bar-button-padding | _0 15px_ |
| --nut-picker-bar-title-font-size | _16px_ |
| --nut-picker-bar-title-color | _var(--nut-title-color)_ |
| --nut-picker-bar-title-font-weight | _normal_ |
| --nut-picker-item-height | _36px_ |
| --nut-picker-item-text-color | _var(--nut-title-color)_ |
| --nut-picker-item-text-font-size | _14px_ |
| --nut-picker-item-active-line-border | _1px solid #d8d8d8_ |
