# Grid

### Intro

Used to separate into equal-width blocks for page navigation.

### Install

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

### Basic Usage

:::demo
```html
<template>
  <nut-grid>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
  </nut-grid>
</template>
```
:::

### Column Num

:::demo
```html
<template>
  <nut-grid :column-num="3">
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
  </nut-grid>
</template>
```
:::

### Square

:::demo
```html
<template>
  <nut-grid :column-num="3" square>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
  </nut-grid>
</template>
```
:::

### Gutter

:::demo
```html
<template>
  <nut-grid :gutter="10">
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
  </nut-grid>
</template>
```
:::

### Reverse

:::demo
```html
<template>
  <nut-grid reverse>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
  </nut-grid>
</template>
```
:::

### Horizontal

:::demo
```html
<template>
  <nut-grid direction="horizontal">
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
  </nut-grid>
</template>
```
:::

### Icon Style

:::demo
```html
<template>
  <nut-grid :column-num="3" icon-color="#fa2c19">
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
    <nut-grid-item icon="dongdong" icon-color="#478EF2" icon-size="40" text="text"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="text"></nut-grid-item>
  </nut-grid>
</template>
```
:::

### Route

:::demo
```html
<template>
  <nut-grid :column-num="2">
    <nut-grid-item icon="home" text="Vue Router" to="/"></nut-grid-item>
    <nut-grid-item icon="search" text="URL" url="https://jd.com"></nut-grid-item>
  </nut-grid>
</template>
```
:::

### Custom Content

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
| column-num    | Column Num                                     | number \| string         | `4`        |
| icon-size     | Icon size,for example `20px` `2em` `2rem`          | number \| string        | `28px`     |
| icon-color    | Icon color                                  | string                 | -          |
| border        | Whether to show border                               | boolean                | `true`     |
| gutter        | Gutter,The default unit is `px`               | number \| string        | `0`        |
| center        | Whether to center content                      | boolean                | `true`      |
| square        | 	Whether to be square shape                      | boolean                | `false`     |
| reverse       | 	Whether to reverse the position of icon and text       | boolean                | `false`     |
| direction     | 	Content arrangement direction, can be set to  `horizontal`    | string                 | `vertical`  |
| clickable     | Whether to show click feedback when clicked        | boolean                | `false`     |

### GridItem Props

| 参数                  | 说明                                                                                     | 类型               | 默认值      |
|----------------------|-----------------------------------------------------------------------------------------|--------------------|------------|
| text                 | text                                                                                     | string             | -          |
| icon                 | Icon name or URL                                                            | string             | -          |
| icon-size            | Icon size,for example `20px` `2em` `2rem`      | number \| string  |`28px`  |
| icon-color           | Icon color              | string            | -           |
| url `not supported by miniProgram`   | Link URL             | string            | -           |
| to `not supported by miniProgram` | 	Target route of the link, same as [to](https://router.vuejs.org/zh/api/#to) of vue-router | string \| object| -    |
| replace `not supported by miniProgram` | If true, the navigation will not leave a history record       | boolean           | `false`     |

### GridItem Slots

| Name                   | Description                 |
|-----------------------|----------------------|
| default               | Custom content         |
| icon                  | Custom icon            |
| text                  | Custom text            |

### GridItem Events

| Event                 | Description           | Arguments               |
|-----------------------|-----------------------|-----------------------|
| click                 | Emitted when component is clicked          | event: Event          |
