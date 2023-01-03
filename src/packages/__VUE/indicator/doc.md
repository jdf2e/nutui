# Indicator 指示器

### 介绍

显示一个任务或流程的进度，常用于开通流程。

### 安装

```javascript
import { createApp } from 'vue';
import { Indicator } from '@nutui/nutui'

const app = createApp();
app.use(Indicator);
```

### 基础用法

:::demo
```html
<template>
  <nut-cell>
    <nut-indicator :size="3" :current="3">step1</nut-indicator>
  </nut-cell>
  <nut-cell>
    <nut-row>
      <nut-col :span="12">
        <nut-button size="small" type="primary">主要按钮</nut-button>
      </nut-col>
      <nut-col :span="12">
        <nut-indicator :block="true" align="right" :size="6" :current="5">step1</nut-indicator>
      </nut-col>
    </nut-row>
  </nut-cell>
</template>
```
:::

### block用法
:::demo
```html
<template>
  <nut-cell>
    <nut-indicator :block="true" algin="center" :size="6" :current="5">step1</nut-indicator>
  </nut-cell>
  <nut-cell>
    <nut-indicator :block="true" align="left" :size="6" :current="1">step1</nut-indicator>
  </nut-cell>
  <nut-cell>
    <nut-indicator :block="true" align="right" :size="6" :current="5">step1</nut-indicator>
  </nut-cell>
</template>
```
:::

### 不补0
:::demo
```html
<template>
  <nut-cell>
    <nut-indicator :fill-zero="false" :size="6" :current="5">step1</nut-indicator>
  </nut-cell>
</template>
```
:::


## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| current  | 当前步骤               | number | `1`              |
| size       | 步骤长度                         | number | `3`               |
| block | 是否启用块级布局     | boolean | false |
| align | 对齐方式，仅在 `block` 为 `true` 时生效, 可选值 `left`, `right`, `center` | string | `left` |
| fill-zero     | 单数前面是否补 0                      | boolean | `true`        |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                    | 默认值                     |
| --------------------------------------- | -------------------------- |
| --nut-indicator-color|  _var(--nut-primary-color)_ |
| --nut-indicator-dot-color|  _var(--nut-disable-color)_ |
| --nut-indicator-white|  _var(--nut-white)_ |
| --nut-indicator-size|  _18px_ |
| --nut-indicator-dot-size|  _calc(var(--nut-indicator-size) / 3)_ |
| --nut-indicator-border-size|  _calc(var(--nut-indicator-size)+ 2)_ |
| --nut-indicator-number-font-size|  _10px_ |
