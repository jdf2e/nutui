# PullRefresh 下拉刷新

### 介绍

用于提供下拉刷新的交互操作。

### 安装

```js
import { createApp } from 'vue';
import { PullRefresh } from '@nutui/nutui';

const app = createApp();
app.use(PullRefresh);
```

### 基础用法

下拉时会触发 refresh 事件，在回调事件中可进行异步操作刷新数据，操作完成之后将 v-model 设置为 false，即刷新完成。

:::demo

```vue
<template>
  <nut-pull-refresh v-model="refresh" @refresh="refreshFun">
    <div>向下拉试试吧！</div>
    <div v-for="(item, index) in 24" class="test">{{ index }}</div>
  </nut-pull-refresh>
</template>

<script setup>
import { ref } from 'vue';
const refresh = ref(false);
const refreshFun = () => {
  setTimeout(() => {
    refresh.value = false;
  }, 3000);
};
</script>

<style>
.test {
  padding: 12px 0 12px 20px;
  border-top: 1px solid #eee;
}
</style>
```

:::

### 自定义文案

下拉刷新有 4 个状态：`'loading' | 'loosing' | 'pulling' `，分别对应属性 `pullingTxt、loosingTxt、loadingTxt` ，复杂样式可以通过 slot 插槽实现。

:::demo

```vue
<template>
  <nut-pull-refresh v-model="refresh" loosing-txt="松开吧" loading-txt="玩命加载中..." @refresh="refreshFun">
    <template #pulling-txt>
      <div>用力拉</div>
    </template>
    <div>向下拉试试吧！</div>
    <div v-for="(item, index) in 24" class="test">{{ index }}</div>
  </nut-pull-refresh>
</template>

<script setup>
import { ref } from 'vue';
const refresh = ref(false);
const refreshFun = () => {
  setTimeout(() => {
    refresh.value = false;
  }, 3000);
};
</script>

<style>
.test {
  padding: 12px 0 12px 20px;
  border-top: 1px solid #eee;
}
</style>
```

:::

### 自定义监听对象

PullRefresh 的触发条件是：父级滚动元素的滚动条在顶部位置，父级滚动元素的判定是通过父级是否设置了 `overflowY: scroll|auto|overlay `，若父级为 `Element`, 触发条件为 `Element.scrollTop === 0`。

:::demo

```vue
<template>
  <div class="parentpage">
    <nut-pull-refresh v-model="refresh" @refresh="refreshFun">
      <div v-for="(item, index) in 24" class="test">{{ index }}</div>
    </nut-pull-refresh>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const refresh = ref(false);
const refreshFun = () => {
  setTimeout(() => {
    refresh.value = false;
  }, 3000);
};
</script>

<style>
.test {
  padding: 12px 0 12px 20px;
  border-top: 1px solid #eee;
}
</style>
```

:::

## API

### Props

| 参数          | 说明                                       | 类型             | 默认值      |
| ------------- | ------------------------------------------ | ---------------- | ----------- |
| v-model       | 是否触发下拉刷新                           | boolean          | `false`     |
| pull-distance | 触发下拉刷新的距离                         | number \| string | `50`        |
| head-height   | 顶部内容高度                               | number \| string | `50`        |
| loading-icon  | 加载中状态时，`loading` 图标。为空表示去掉 | string           | `loading`   |
| pulling-txt   | 下拉过程提示文案                           | string           | `下拉刷新`  |
| loosing-txt   | 释放过程提示文案                           | string           | `释放刷新`  |
| loading-txt   | 加载过程提示文案                           | string           | `加载中...` |
| duration      | 下拉动画加载时长                           | number           | `0.3 `      |

### Events

| 事件名  | 说明                     | 回调参数                        |
| ------- | ------------------------ | ------------------------------- |
| change  | 下拉过程或状态改变时触发 | {status:string,distance:number} |
| refresh | 下拉刷新事件回调         | -                               |

### Slots

| 名称    | 说明               |
| ------- | ------------------ |
| pulling | 下拉过程的顶部内容 |
| loosing | 释放过程中顶部内容 |
| loading | 加载过程中顶部内容 |
| default | 自定义内容         |
