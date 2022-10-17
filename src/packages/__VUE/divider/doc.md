# Divider 分割线

### 介绍
    
用于将内容分隔为多个区域。

### 安装
``` javascript
import { createApp } from 'vue';
// vue
import { Divider } from '@nutui/nutui';
// taro
import { Divider } from '@nutui/nutui-taro';

const app = createApp();
app.use(Divider);
```



### 基础用法

默认渲染一条水平分割线。

:::demo

``` html
<template>
  <nut-divider />
</template>
```

:::

### 展示文本

通过插槽可以在分割线中间插入内容。

:::demo

``` html
<template>
  <nut-divider>文本</nut-divider>
</template>
```

:::

### 内容位置

通过 content-position 指定内容所在位置。

:::demo

``` html
<template>
  <nut-divider content-position="left">文本</nut-divider>
  <nut-divider content-position="right">文本</nut-divider>
</template>
```

:::

### 虚线

添加 dashed 属性使分割线渲染为虚线。

:::demo

``` html
<template>
  <nut-divider dashed>文本</nut-divider>
</template>
```

:::

### 自定义样式

可以直接通过 style 属性设置分割线的样式。

:::demo

``` html
<template>
  <nut-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">文本</nut-divider>
</template>
```

:::

### 垂直分割线

:::demo

``` html
<template>
  <nut-cell>
    <div :style="{fontSize: '14px'}">
      文本
      <nut-divider direction="vertical" />
      <a href="#" :style="{ color: '#1989fa' }">链接</a>
      <nut-divider direction="vertical" />
      <a href="#" :style="{ color: '#1989fa' }">链接</a>
    </div>
  </nut-cell>
</template>
```

:::

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| dashed         | 是否使用虚线               | Boolean | false                |
| hairline        | 是否使用 0.5px 线                         | Boolean | true                |
| content-position        | 内容位置，可选值为left right                         | String | center                |
| direction `v3.1.21`         | 水平还是垂直类型               | String | 'horizontal'                |

### Slots

| 名称 | 说明           | 
|--------|----------------|
| default  | 内容 | 
    