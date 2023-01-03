# Textarea 文本域

### 介绍

文本框内输入或编辑文字，支持限制输入数量。

### 安装

``` javascript
import { createApp } from 'vue';
import { Textarea } from '@nutui/nutui';

const app = createApp();
app.use(Textarea);

```

### 基础用法
:::demo

```html
<template>
  <nut-textarea v-model="value" />
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    const value = ref('');
    return { value };
  },
};
</script>
```
:::

### 显示字数统计

:::demo

```html
<template>
  <nut-textarea v-model="value" limit-show max-length="20" />
</template>
```
:::

### 高度自定义，拉伸
:::demo

```html
<template>
  <nut-textarea v-model="value" rows="10" autosize />
</template>
```
:::
### 只读、禁用

:::demo

```html
<template>
  <nut-textarea readonly model-value="textarea只读状态" />
  <nut-textarea disabled model-value="textarea禁用状态" limit-show max-length="20" />
</template>
```
:::

## API
### Props

| 参数        | 说明                                             | 类型           | 默认值         |
|-------------|--------------------------------------------------|----------------|----------------|
| v-model | input value, supports two-way binding | string | `-`|
| placeholder | Set placeholder prompt text | string | `Please enter content` |
| max-length | limit the longest input characters | string \| number | `-` |
| rows | height of textarea, priority is higher than autosize attribute `only supports H5` | string \| number | `2` |
| limit-show | Whether textarea displays input characters. Must be used with `max-length` | boolean | `false` |
| autosize | whether to adapt to the height of the content, or to pass in an object, such as `{ maxHeight: 200, minHeight: 100 }`, the unit is `px` | boolean \| {maxHeight?: number; minHeight?: number} | `false` |
| text-align | text position, optional values `left`, `center`, `right` | string | `left` |
| readonly | read-only property | boolean | `false` |
| disabled | disabled attribute | boolean | `false` |
| autofocus | get focus automatically | boolean | `false` |


### Events

| 名称   | 说明           | 回调参数    |
|--------|----------------|-------------|
| change | 输入框值改变时触发 | `value`       |
| focus  | 聚焦时触发     | `event`       |
| blur   | 失焦时触发     | `value, event` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                    | 默认值                     |
| --------------------------------------- | -------------------------- | 
| --nut-textarea-font| _var(--nut-font-size-2)_  |
| --nut-textarea-height| _100px_  |
| --nut-textarea-limit-color| _var(--nut-text-color)_  |
| --nut-textarea-text-color| _var(--nut-title-color)_  |
| --nut-textarea-disabled-color| _var(--nut-disable-color)_  |








