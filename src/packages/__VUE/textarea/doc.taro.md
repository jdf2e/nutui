# Textarea 文本域

### 介绍

文本框内输入或编辑文字，支持限制输入数量。

### 安装

``` javascript
import { createApp } from 'vue';
import { Textarea } from '@nutui/nutui-taro';

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
| v-model     | 输入值，支持双向绑定                             | string         | `-`|
| placeholder | 设置占位提示文字                                 | string         | `请输入内容` |
| max-length  | 限制最长输入字符                                 | string \| number | `-`              |
| rows | textarea的高度，优先级高于autosize属性 `仅支持 H5`         | string \| number | `2`            |
| limit-show  | textarea是否展示输入字符。须配合`max-length`使用 | boolean        | `false`        |
| autosize | 是否自适应内容高度，也可传入对象, <br/> 如 `{ maxHeight: 200, minHeight: 100 }`，单位为`px` | boolean \| {maxHeight?: number; minHeight?: number}       | `false`        |
| text-align  | 文本位置,可选值`left`,`center`,`right`           | string         | `left`         |
| readonly    | 只读属性                                         | boolean        | `false`        |
| disabled    | 禁用属性                                         | boolean        | `false`        |
| autofocus   | 自动获取焦点                                     | boolean        | `false`        |


### Events

| 事件名   | 说明           | 回调参数    |
|--------|----------------|-------------|
| change | 输入框值改变时触发 | `value`       |
| focus  | 聚焦时触发     | `event`       |
| blur   | 失焦时触发     | `value,event` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                                    | 默认值                     | 
| --------------------------------------- | -------------------------- | 
| --nut-textarea-font| _var(--nut-font-size-2)_  |
| --nut-textarea-height| _100px_  |
| --nut-textarea-limit-color| _var(--nut-text-color)_  |
| --nut-textarea-text-color| _var(--nut-title-color)_  |
| --nut-textarea-disabled-color| _var(--nut-disable-color)_  |








