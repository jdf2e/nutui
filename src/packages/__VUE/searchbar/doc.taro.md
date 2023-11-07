# Searchbar 搜索栏

### 介绍

搜索栏

### 安装

```js
import { createApp } from 'vue';
import { Searchbar } from '@nutui/nutui-taro';

const app = createApp();
app.use(Searchbar);
```

### 基础用法

:::demo

```vue
<template>
  <nut-searchbar v-model="value"></nut-searchbar>
</template>
<script setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

:::

### 设置搜索框形状

:::demo

```vue
<template>
  <nut-searchbar shape="square"></nut-searchbar>
</template>
```

:::

### 搜索事件监听

:::demo

```vue
<template>
  <nut-searchbar v-model="value" @search="search"></nut-searchbar>
</template>
<script setup>
import { ref } from 'vue';
import { showToast } from '@nutui/nutui';
const value = ref('');

const search = function () {
  console.log('搜索触发');
};
</script>
```

:::

### 显示搜索 icon

:::demo

```vue
<template>
  <nut-searchbar v-model="value">
    <template #leftin>
      <Search2 />
    </template>
  </nut-searchbar>
</template>
<script setup>
import { ref } from 'vue';
import { Search2 } from '@nutui/icons-vue';
const value = ref('');
</script>
```

:::

### 右侧添加搜索文字

:::demo

```vue
<template>
  <nut-searchbar v-model="value">
    <template #rightout> 搜索 </template>
  </nut-searchbar>
</template>
<script setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

:::

### 更改输入框内部及外部的背景样式

:::demo

```vue
<template>
  <nut-searchbar v-model="value" background="linear-gradient(to right, #9866F0, #EB4D50)" input-background="#fff">
  </nut-searchbar>
</template>
<script setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

:::

### 自定义清除按钮 icon

:::demo

```vue
<template>
  <nut-searchbar v-model="value">
    <template #clear-icon>
      <img :src="icon" style="width: 10px; height: 10px" />
    </template>
  </nut-searchbar>
</template>
<script setup>
import { ref } from 'vue';
const value = ref('');
const icon =
  'https://img10.360buyimg.com/imagetools/jfs/t1/170133/30/22902/10546/61833626E32d7ccde/a7c373ba30de9a89.png';
</script>
```

:::

### 显示全部 icon

:::demo

```vue
<template>
  <nut-searchbar v-model="value">
    <template #leftout>
      <Left />
    </template>
    <template #leftin>
      <Search2 />
    </template>
    <template #rightin>
      <Photograph />
    </template>
    <template #rightout>
      <Message />
    </template>
  </nut-searchbar>
</template>
<script setup>
import { ref } from 'vue';=
import { Search2, Left, Photograph, Message } from '@nutui/icons-vue-taro';
const value = ref('');
</script>
```

:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前输入的值 | number \| string | `''` |
| label | 搜索框左侧文本 | string | `''` |
| shape | 搜索框形状，可选值为 `square` `round` | string | `round` |
| max-length | 最大输入长度 | number \| string | `9999` |
| input-type | 输入框类型 | string | `text` |
| placeholder | 输入框默认暗纹 | string | `请输入` |
| clearable | 是否展示清除按钮 | boolean | `true` |
| clear-icon | 自定义清除按钮图标（默认使用 `@nutui/nutui-icons`） | Object | `CircleClose` |
| background | 输入框外部背景 | string | `#fff` |
| input-background | 输入框内部背景 | string | `#f7f7f7` |
| confirm-type | 键盘右下角按钮的文字，仅在`type='text'`时生效，可选值 `send`：发送、`search`：搜索、`next`：下一个、`go`：前往、`done`：完成 | string | `done` |
| autofocus | 是否自动聚焦 | boolean | `false` |
| focus-style | 聚焦时搜索框样式 | Object | `-` |
| disabled | 是否禁用输入框 | boolean | `false` |
| readonly | 输入框只读 | boolean | `false` |
| input-align | 对齐方式，可选 `left` `center` `right` | string | `left` |
| safe-area-inset-bottom`v4.1.6` | 是否开启 iphone 系列全面屏底部安全区适配 | boolean | `false` |
| cursor-spacing`v4.1.7` | 指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 | number | 0 |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 输入内容时触发 | `val, event` |
| focus | 聚焦时触发 | `val, event` |
| blur | 失焦时触发 | `val, event` |
| clear | 点击清空时触发 | `val` |
| search | 按下 ENTER 键时触发 | `val, event` |
| click-input | 点击输入区域时触发 | `event` |
| click-left-icon | 点击左侧图标时触发 | `val, event` |
| click-right-icon | 点击右侧图标时触发 | `val, event` |

### Slots

| 名称 | 说明 |
| --- | --- |
| leftin | 输入框内 左 icon |
| leftout | 输入框外 左 icon |
| rightin | 输入框内 右 icon |
| rightout | 输入框外 右 icon |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-searchbar-background | _var(--nut-white)_ |
| --nut-searchbar-right-out-color | _var(--nut-black)_ |
| --nut-searchbar-padding | _9px 16px_ |
| --nut-searchbar-width | _100%_ |
| --nut-searchbar-input-background | _#f7f7f7_ |
| --nut-searchbar-input-padding | _0 0 0 13px_ |
| --nut-searchbar-input-height | _32px_ |
| --nut-searchbar-input-width | _100%_ |
| --nut-searchbar-input-border-radius | _16px_ |
| --nut-searchbar-input-box-shadow | _0 0 8px 0 rgba(0, 0, 0, 0.04)_ |
| --nut-searchbar-input-bar-color | _inherit_ |
| --nut-searchbar-input-bar-placeholder-color | _inherit_ |
