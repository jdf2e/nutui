# Grid 宫格

### 介绍

用于分隔成等宽区块进行页面导航。

### 安装

``` javascript
import { createApp } from 'vue';
// vue
import { Grid, GridItem } from '@nutui/nutui';
// taro
import { Grid, GridItem } from '@nutui/nutui-taro';

const app = createApp();
app.use(Grid);
app.use(GridItem);
```

### 基础用法

:::demo
```html
<template>
  <nut-grid>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
  </nut-grid>
</template>
```
:::

### 自定义列数

:::demo
```html
<template>
  <nut-grid :column-num="3">
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
  </nut-grid>
</template>
```
:::

### 正方形格子

:::demo
```html
<template>
  <nut-grid :column-num="3" square>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
  </nut-grid>
</template>
```
:::

### 格子间距

:::demo
```html
<template>
  <nut-grid :gutter="10">
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
  </nut-grid>
</template>
```
:::

### 内容翻转

:::demo
```html
<template>
  <nut-grid reverse>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
  </nut-grid>
</template>
```
:::

### 内容横向

:::demo
```html
<template>
  <nut-grid direction="horizontal">
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
  </nut-grid>
</template>
```
:::

### 图标颜色/大小

:::demo
```html
<template>
  <nut-grid :column-num="3" icon-color="#fa2c19">
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" icon-color="#478EF2" icon-size="40" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
  </nut-grid>
</template>
```
:::

### 页面导航

:::demo
```html
<template>
  <nut-grid :column-num="2">
    <nut-grid-item icon="home" text="路由跳转 ’/‘ " to="/"></nut-grid-item>
    <nut-grid-item icon="search" text="URL 跳转" url="https://jd.com"></nut-grid-item>
  </nut-grid>
</template>
```
:::

### 自定义内容

:::demo
```html
<template>
  <nut-grid :border="false">
    <nut-grid-item v-for="i in 4" :key="i">
      <nut-avatar
        size="large"
        icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      />
    </nut-grid-item>
  </nut-grid>
</template>
```
:::
## API
### Grid Props

| 参数          | 说明                                      | 类型                    | 默认值      |
|---------------|------------------------------------------|------------------------|------------|
| column-num    | 列数                                     | number \| string         | `4`        |
| icon-size     | 图标大小，如 `20px` `2em` `2rem`          | number \| string        | `28px`     |
| icon-color    | 图标颜色                                  | string                 | -          |
| border        | 是否显示边框                               | boolean                | `true`     |
| gutter        | 格子之间的间距，默认单位为`px`               | number \| string        | `0`        |
| center        | 是否将格子内容居中显示                      | boolean                | `true`      |
| square        | 是否将格子固定为正方形                      | boolean                | `false`     |
| reverse       | 内容翻转                                  | boolean                | `false`     |
| direction     | 格子内容排列的方向，可选值为 `horizontal`    | string                 | `vertical`  |
| clickable     | 是否开启格子点击反馈                        | boolean                | `false`     |

### GridItem Props

| 参数                  | 说明                                                                                     | 类型               | 默认值      |
|----------------------|-----------------------------------------------------------------------------------------|--------------------|------------|
| text                 | 文字                                                                                     | string             | -          |
| icon                 | [图标名称](#/icon) 或图片链接                                                              | string             | -          |
| icon-size            | 图标大小，如 `20px` `2em` `2rem`                                                          | number \| string   | `28px`     |
| icon-color           | 图标颜色                                                                                  | string            | -           |
| url `小程序不支持`     | 点击后跳转的链接地址                                                                        | string            | -           |
| to `小程序不支持`      | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) 属性 | string \| object  | -           |
| replace `小程序不支持` | 是否在跳转时替换当前页面历史                                                                 | boolean           | `false`     |

### GridItem Slots

| 名称                   | 说明                 |
|-----------------------|----------------------|
| default               | 自定义所有内容         |
| icon                  | 自定义图标            |
| text                  | 自定义文字            |

### GridItem Events

| 事件名                 | 说明                   | 回调参数               |
|-----------------------|-----------------------|-----------------------|
| click                 | 点击格子时触发          | event: Event          |
