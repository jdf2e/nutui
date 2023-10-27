# InfiniteLoading 滚动加载

### 介绍

列表滚动到底部自动加载更多数据。

### 安装

```js
import { createApp } from 'vue';
import { InfiniteLoading } from '@nutui/nutui';

const app = createApp();
app.use(InfiniteLoading);
```

### 基础用法

:::demo

```vue
<template>
  <nut-infinite-loading v-model="infinityValue" :has-more="hasMore" @load-more="loadMore">
    <div class="test" v-for="(item, index) in sum" :key="index">{{ index }}</div>
  </nut-infinite-loading>
</template>

<script setup>
import { ref } from 'vue';
const cycle = ref(0);
const tabsValue = ref(0);
const sum = ref(24);
const infinityValue = ref(false);
const hasMore = ref(true);
const loadMore = (done) => {
  setTimeout(() => {
    sum.value = sum.value + 24;
    cycle.value++;
    if (cycle.value > 2) hasMore.value = false;
    infinityValue.value = false;
  }, 1000);
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

### 自定义加载文案

:::demo

```vue
<template>
  <nut-infinite-loading
    v-model="infinityValue"
    load-txt="Loading..."
    load-more-txt="End~"
    :has-more="hasMore"
    @load-more="loadMore"
  >
    <div class="test" v-for="(item, index) in sum" :key="index">{{ index }}</div>
  </nut-infinite-loading>
</template>

<script setup>
import { ref } from 'vue';
const cycle = ref(0);
const tabsValue = ref(0);
const sum = ref(24);
const infinityValue = ref(false);
const hasMore = ref(true);
const loadMore = (done) => {
  setTimeout(() => {
    sum.value = sum.value + 24;
    cycle.value++;
    if (cycle.value > 2) hasMore.value = false;
    infinityValue.value = false;
  }, 1000);
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

### 搭配 PullRefresh

:::demo

```vue
<template>
  <nut-infinite-loading v-model="infinityValue" :has-more="hasMore" @load-more="loadMore">
    <nut-pull-refresh v-model="refresh" @refresh="refreshFun">
      <div class="test" v-for="(item, index) in sum" :key="index">{{ index }}</div>
    </nut-pull-refresh>
  </nut-infinite-loading>
</template>

<script setup>
import { ref } from 'vue';
const cycle = ref(0);
const tabsValue = ref(0);
const sum = ref(24);
const infinityValue = ref(false);
const hasMore = ref(true);
const loadMore = (done) => {
  setTimeout(() => {
    sum.value = sum.value + 24;
    cycle.value++;
    if (cycle.value > 2) hasMore.value = false;
    infinityValue.value = false;
  }, 1000);
};
const refresh = ref(false);
const refreshFun = () => {
  setTimeout(() => {
    refresh.value = false;
    sum.value = 24;
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

| 参数          | 说明                                                    | 类型    | 默认值                   |
| ------------- | ------------------------------------------------------- | ------- | ------------------------ |
| v-model       | 是否触发滚动加载                                        | boolean | `false`                  |
| has-more      | 是否还有更多数据                                        | boolean | `true`                   |
| threshold     | 滚动条与底部距离小于 `threshold` 时触发 `loadMore` 事件 | number  | `200`                    |
| use-capture   | 是否使用捕获模式 `true` 捕获 `false` 冒泡               | boolean | `false`                  |
| load-more-txt | “没有更多数据” 展示文案                                 | string  | `'哎呀，这里是底部了啦'` |
| load-txt      | 上拉加载提示文案                                        | string  | `加载中...`              |

### Events

| 事件名        | 说明               | 回调参数 |
| ------------- | ------------------ | -------- |
| load-more     | 继续加载的回调函数 | -        |
| scroll-change | 实时监听滚动高度   | 滚动高度 |

### Slots

| 名称         | 说明                       |
| ------------ | -------------------------- |
| default      | 自定义加载内容             |
| loading      | 自定义底部加载中提示       |
| loading-icon | 自定义底部加载中图标       |
| finished     | 自定义加载完成后的提示文案 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                               | 默认值    |
| ---------------------------------- | --------- |
| --nut-infiniteloading-bottom-color | _#c8c8c8_ |
