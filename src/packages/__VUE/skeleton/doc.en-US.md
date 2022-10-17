# Skeleton screen

### Intro

Filling gray bitmap in the area to be loaded on the page is essentially the transition effect in the process of interface loading.

### Install

```javascript

import { createApp } from 'vue';
// vue
import { Skeleton } from '@nutui/nutui';
// taro
import { Skeleton } from '@nutui/nutui-taro';

const app = createApp();
app.use(Skeleton);

```


### Basic usage

:::demo
```html
<template>
  <nut-skeleton width="250px" height="15px" animated> </nut-skeleton>
</template>

```
:::

### Incoming multiline

:::demo
```html
<template>
  <nut-skeleton width="250px" height="15px" title animated row="3"> </nut-skeleton>
</template>

```
:::


### Show Faces

:::demo
```html
<template>
  <nut-skeleton width="250px" height="15px" title animated avatar avatarSize="100px" row="3"> </nut-skeleton>
</template>
```
:::


### Title paragraph fillet style

:::demo
```html
<template>
  <nut-skeleton width="250px" height="15px" animated round></nut-skeleton>
</template>
```
:::

### Picture combination

:::demo
```html
<template>
  <div class="pic-compose">
    <nut-skeleton width="250px" height="15px" title animated row="3" class="item"> </nut-skeleton>
    <nut-skeleton width="250px" height="15px" title animated row="3" class="item"> </nut-skeleton>
  </div>
</template>
<style lang="scss">
.pic-compose {
  display: flex;
  justify-content: space-between;
  .item {
    width: 47%;
  }
}
</style>
```
:::


### Display subcomponents

:::demo
```html
<template>
  <div class="content">
    <nut-switch v-model="checked" size="15px" />
    <nut-skeleton width="250px" height="15px" title animated avatar row="3" :loading="!checked">
      <div class="container">
        <nut-avatar
          size="50"
          icon="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
        />
      <div class="right-content">
        <div class="title">NutUI</div>
        <div class="desc"
            >A set of JD style lightweight mobile terminal Vue group library provides rich basic components and business components to help developers quickly build mobile applications.
        </div>
      </div>
    </nut-skeleton>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    const checked = ref(false);
    return {
      checked
    };
  }
};
</script>

<style lang="scss">
.content {
  .nut-switch {
    display: flex;
    margin: 0 16px 8px 0;
  }
  .container {
    display: flex;
    .right-content {
      margin-left: 19px;
      font-family: PingFangSC;
      display: flex;
      flex-direction: column;
      .title {
        font-size: 14px;
        color: rgba(51, 51, 51, 1);
      }
      .desc {
        margin-top: 10px;
        font-size: 13px;
        color: rgba(154, 155, 157, 1);
      }
    }
  }
}
</style>

```
:::




## API
### Props

| Attribute | Description | Type   | Default |
|------------|-------------------------------------------------|---------|----------|
| loading    | Whether to display skeleton screen                                    | Boolean | `true`    | 
| width       | Width per row                                        | String  | `default` |
| height      | Height of each row                                        | String  | `100px`   |
| animated    | Whether to turn on skeleton screen animation            | Boolean  | `false`  |
| avatar      | Show avatar                      | Boolean | `false`   |
| avatar-shape      | Avatar shape: square / round                       | String | `round`   |
| avatar-size       | Avatar size                                   | String | `50px`    |
| round  |         Is the title / paragraph rounded                       | Boolean | `false`  |
| row    | Set the number of paragraph lines                                           | String | `1`       |
| title  |           Show paragraph titles                              | Boolean | `true`   |


### Slots

| Name          | Description        |
|---------|---------------|
| default | Skeleton screen display content  |

