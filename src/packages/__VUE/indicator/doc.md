# Indicator 指示器

### 介绍

显示一个任务或流程的进度，常用于开通流程。

### 安装

```javascript
import { createApp } from 'vue';
// vue
import { Indicator } from '@nutui/nutui'
// taro
import { Indicator } from '@nutui/nutui-taro'

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
| current  | 当前步骤               | Number | 1              |
| size       | 步骤长度                         | Number | 3               |
| block | 是否启用块级布局     | Boolean | false |
| align | 对齐方式，仅在block为true时生效, 可选值 'left', 'right', 'center'| String | left |
| fill-zero     | 单数前面是否补0                      | Boolean | true        |
