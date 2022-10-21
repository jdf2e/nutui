# Drag 拖拽
### 介绍

实现可拖拽的任意元素

### 安装

``` javascript
import { createApp } from 'vue';
import { Drag } from '@nutui/nutui';

const app = createApp();
app.use(Drag);
```

### 基础用法
:::demo
```html
<template>
 <nut-drag>
      <nut-button type="primary">触摸移动</nut-button>
  </nut-drag>
</template>
```
:::
### 限制拖拽方向
:::demo
```html
<template>
  <nut-drag direction="x" :style="{ top: '200px', left: '8px' }">
      <nut-button type="primary">只能X轴拖拽</nut-button>
  </nut-drag>
  </template>
```
:::
### 自动吸边
:::demo
```html
<template>
  <nut-drag
      direction="x"
      :attract="true"
    >
      <nut-button type="primary">拖动我</nut-button>
    </nut-drag>
    </template>
```
:::
### 限制拖拽边界
:::demo
```html
<template>
 <div class="drag-boundary"></div>
    <nut-drag
      :boundary="{ top: 100, left: 9, bottom: bottom(), right: right() }"
      :style="{ top: '100px', left: '50px' }"
    >
      <nut-button type="primary">限制拖拽边界</nut-button>
    </nut-drag>
</template>
<script>
  export default {
 setup() {
    function right() {
      return document.documentElement.clientWidth - 300 - 9;
    }
    function bottom() {
      return document.documentElement.clientHeight - 300;
    }
    return {
      right,
      bottom
    };
  }
  }
</script>

<style>
.drag-boundary {
  position: absolute;
  top: 100px;
  left: 8px;
  width: 300px;
  height: 200px;
  border: 1px solid red;
}
</style>

```
:::
## API
### Props

| 字段      | 说明                                              | 类型           | 默认值                              |
| :-------- | :------------------------------------------------ | :------------- | :---------------------------------- |
| attract   | 是否开启自动吸边                                  | Boolean        | false                                |
| direction | 拖拽元素的拖拽方向限制，**x**/**y**/**all**三选一 | String         | 'all'                               |
| boundary  | 拖拽元素的拖拽边界                                | Object         | {top: 0,left: 0,right: 0,bottom: 0} |