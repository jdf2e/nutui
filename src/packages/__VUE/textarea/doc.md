# Textarea 文本域

### 介绍

文本框内输入或编辑文字，支持限制输入数量。

### 安装

```js
import { createApp } from 'vue';
import { Textarea } from '@nutui/nutui';

const app = createApp();
app.use(Textarea);
```

### 基础用法

:::demo

```vue
<template>
  <nut-textarea v-model="value" />
</template>
<script setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

:::

### 显示字数统计

:::demo

```vue
<template>
  <nut-textarea v-model="value" limit-show max-length="20" />
</template>
<script setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

:::

### 高度自定义，拉伸

:::demo

```vue
<template>
  <nut-textarea v-model="value" :rows="1" autosize />
</template>
<script setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

:::

### 只读、禁用

:::demo

```vue
<template>
  <nut-textarea readonly model-value="textarea 只读状态" />
  <nut-textarea disabled model-value="textarea 禁用状态" />
</template>
```

:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 输入值，支持双向绑定 | string | - |
| placeholder | 设置占位提示文字 | string | `'请输入'` |
| max-length | 限制最长输入字符 | string \| number | - |
| rows | textarea 的高度，优先级高于 autosize 属性 `仅支持 H5` | string \| number | `2` |
| limit-show | textarea 是否展示输入字符。须配合`max-length`使用 | boolean | `false` |
| autosize | 是否自适应内容高度，也可传入对象, 如 { maxHeight: 200, minHeight: 100 }，单位为 px | boolean \| {maxHeight?: number; minHeight?: number} | `false` |
| text-align | 文本位置,可选值`left`,`center`,`right` | string | `left` |
| readonly | 只读属性 | boolean | `false` |
| disabled | 禁用属性 | boolean | `false` |
| autofocus | 自动获取焦点 | boolean | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 输入框值改变时触发 | `value` |
| focus | 聚焦时触发 | `event` |
| blur | 失焦时触发 | `value,event` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-textarea-font | _var(--nut-font-size-2)_ |
| --nut-textarea-limit-color | _var(--nut-text-color)_ |
| --nut-textarea-text-color | _var(--nut-title-color)_ |
| --nut-textarea-disabled-color | _var(--nut-disable-color)_ |
