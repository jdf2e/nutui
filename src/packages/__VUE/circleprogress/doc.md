# CircleProgress 环形进度条

### 介绍

圆环形的进度条组件

### 安装

``` javascript
import { createApp } from 'vue';
//vue
import { CircleProgress } from '@nutui/nutui';
//taro
import { CircleProgress } from '@nutui/nutui-taro';

const app = createApp();
app.use(CircleProgress);

```
### 基础用法
:::demo
```html
<template>
    <nut-cell>
     <nut-circleprogress :progress="20"> </nut-circleprogress>
   </nut-cell>
</template>
```
:::

### 环形进度条自定义宽度
:::demo
```html
<template>
    <nut-cell>
     <nut-circleprogress :progress="50" strokeWidth="10"> </nut-circleprogress>
   </nut-cell>
</template>
```
:::


### 环形进度条自定义颜色(支持渐变色)
:::demo
```html
<template>
    <nut-cell>
    <nut-circleprogress :progress="50" color="red" />
      <nut-circleprogress :progress="100" :color="gradientColor" />
   </nut-cell>
</template>
<script>
import { ref } from 'vue';
export default{
  setup() {
     const gradientColor = {
      '0%': '#FF5E5E',
      '100%': '#FFA062'
    };
    return {
      gradientColor
    };
  }
}
</script>
```
:::

### 环形进度条自定义大小
:::demo
```html
<template>
    <nut-cell>
     <nut-circleprogress :progress="50" radius="60"></nut-circleprogress>
    </nut-cell>
</template>
```
:::



### 环形进度条自定义内容
:::demo
```html
<template>
    <nut-cell>
     <nut-circleprogress :progress="50" radius="60">自定义</nut-circleprogress>
    </nut-cell>
</template>
```
:::

### 动态改变环形进度条的进度
:::demo
```html
<template>
  <div>
     <nut-circleprogress :progress="percent"></nut-circleprogress>
  </div>
  <div>
    <nut-button type="primary" @click="setReduceVal">减少</nut-button>
    <nut-button type="primary" @click="setAddVal">增加</nut-button>
  </div>
</template>
<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    const percent = ref(30);
    const setAddVal = () => {
      if (percent.value >= 100) {
        return;
      }
      percent.value += 10;
    };
    const setReduceVal = () => {
      if (percent.value - 10 <= 0) {
        percent.value = 0;
        return;
      }
      percent.value -= 10;
    };
    return {
      setAddVal,
      setReduceVal,
      percent
    };
  }
}
</script>
```
:::

## API
### Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| progress | 百分比 | Number,String | 必传项，无默认值
| stroke-width | 圆弧的宽度 | Number,String | 5
| radius | 半径 | Number,String | 50
| color | 圆环进度条颜色 | String , Object | '#fa2c19'
| path-color | 圆环轨道颜色| String | '#d9d9d9'
| stroke-linecap | 圆环进度条端点形状可选值为 square butt| String | 'round'
| clockwise| 是否顺时针展示| Boolean | true
### Slots

| 字段 | 说明 | 
|----- | ----- |
| default | 自定义文字内容| 

