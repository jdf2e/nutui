# trendarrow 

### 介绍

带有箭头指示的百分比数字,用以展示指标趋势

### 安装

```javascript

import { createApp } from 'vue';
// vue
import { TrendArrow } from '@nutui/nutui';
// taro
import { TrendArrow } from '@nutui/nutui-taro';

const app = createApp();
app.use(TrendArrow);

```

### 基础用法

:::demo

```html
<template>
  <nut-cell>
    <nut-trendarrow :show-text-color="false" :rate="1"/>
    <nut-trendarrow :show-text-color="false" :rate="-0.2535"/>
  </nut-cell>
</template>
```

:::

### 改变文字颜色

:::demo

```html
<template>
  <nut-cell>
      <nut-trendarrow :rate="10.2365"/>
      <nut-trendarrow :rate="-0.2535"/>
  </nut-cell>
</template>
```

:::
### 指定小数位

:::demo

```html
<template>
  <nut-cell>
      <nut-trendarrow :digits="0" :rate="10.2365"/>
      <nut-trendarrow :digits="0" :rate="-0.2535"/>
  </nut-cell>
</template>
```

:::
### 箭头在前面

:::demo

```html
<template>
  <nut-cell>
      <nut-trendarrow arrowLeft :rate="0.2535"/>
      <nut-trendarrow arrowLeft :rate="-0.2535"/>
  </nut-cell>
</template>
```

:::
### 显示正负号

:::demo

```html
<template>
  <nut-cell>
      <nut-trendarrow showSign :rate="1"/>
      <nut-trendarrow showSign :rate="-0.2535"/>
  </nut-cell>
</template>
```

:::
### 是否展示0

:::demo

```html
<template>
  <nut-cell>
      <nut-trendarrow showSign :rate="0"/>
      <nut-trendarrow showSign showZero :rate="0"/>
  </nut-cell>
</template>
```

:::
### 自定义颜色

:::demo

```html
<template>
  <nut-cell>
      <nut-trendarrow :rate="10.2365" rise-color="rgb(73,143,242)"/>
      <nut-trendarrow :rate="-0.2535" showSign drop-color="rgb(255, 190, 13)"/>
      <nut-trendarrow
        :show-text-color="false"
        showSign
        :rate="-0.2535"
        text-color="rgb(39,197,48)"
        drop-color="rgb(255, 190, 13)"
      />
  </nut-cell>
</template>
```

:::
## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| rate         | 数值，大于0时箭头向上，小于0时箭头向下    | Number | -                |
| digits         | 小数位精度               | Number | 2               |
| show-sign         | 是否显示加减号               | Boolean | false               |
| show-zero         | 是否显示 0               | Boolean | false               |
| arrow-left        | 是否在数字左侧显示箭头     | Boolean | false               |
| sync-text-color   | 文字颜色是否与箭头同步               | Boolean | true   |
| text-color        | 文字颜色               | String | '#333333'               |
| rise-color         | 向上箭头颜色               | String | '#fa2c19'               |
| drop-color         | 向下箭头颜色               | String | ‘#64b578’               |
| icon-size         | 箭头大小               | String | '12px'               |
| up-icon-name         | 自定义向上箭头icon               | String | 'triangle-up'               |
| down-icon-name         | 自定义向下箭头icon               | String | 'triangle-down'               |


### Slots

| 名称    | 说明         |
|---------|--------------|
| default | 	默认slot，用以自定义Icon内容 |
