# List 虚拟列表

### 介绍
在正常的列表展示以及上拉加载中，我们通常使用 `NutUI` 提供的 [滚动加载](#/zh-CN/infiniteloading) 组件，那如果我们加载的数据量非常大时，则可能会产生严重的性能问题，导致视图无法响应操作一段时间，这时候我们就用到了虚拟列表组件 `List`，它可以保证只渲染当前可视区域，其他部分在用户滚动到可视区域内之后再渲染。保证了页面流程度，提升性能。

### 安装

```javascript

import { createApp } from 'vue';
// vue
import { List } from '@nutui/nutui';
// taro
import { List } from '@nutui/nutui-taro';

const app = createApp();
app.use();

```

### 基础用法

:::demo

```html
<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell>
      <nut-list :height="50" :listData="count" @scroll-bottom="handleScroll">
        <template v-slot="{ item, index }">
          <div class="list-item">
            {{ index }}
          </div>
        </template>
      </nut-list>
    </nut-cell>
  </div>
</template>
<script lang="ts">
import { onMounted, reactive, toRefs } from 'vue';
export default {
  props: {},
  setup() {
    const state = reactive({
      count: new Array(100).fill(0)
    });

    const handleScroll = () => {
      let arr = new Array(100).fill(0);
      const len = state.count.length;
      state.count = state.count.concat(arr.map((item: number, index: number) => len + index + 1));
    };

    onMounted(() => {
      state.count = state.count.map((item: number, index: number) => index + 1);
    })

    return { ...toRefs(state), handleScroll };
  }
};
</script>
<style lang="scss">
body {
  width: 100%;
  height: 100vh;
}
#app {
  width: 100%;
  height: 100%;
}
.demo {
  .nut-cell {
    height: 100%;
  }
  .nut-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    background-color: #f4a8b6;
    border-radius: 10px;
  }
}
</style>
```

:::

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| height         | 列表项的高度/预估高度，支持不固定高度               | Number | `80`                |
| list-data         | 列表数据               | any[] | `[]`                |
| container-height `v3.1.19`        | 容器高度(最大值不能超过可视区)              | Number | `可视区高度`                |
| buffer-size `v3.3.5`        | 数据缓冲区长度              | Number | `5`                |
| margin `v3.3.5`        | 列表之间的间隙，和自定义样式保持一致         | Number | `10`                |

### Slots

| 参数         | 说明                             | 类型   |
|--------------|----------------------------------|--------|
| item         | 列表项数据               | Object |
| index         | 列表索引               | Number |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| scroll-bottom `v3.1.21`   | 滚动到底部时触发 | - |
| scroll-up `v3.3.5`   | 向上滚动 | - |
| scroll-down `v3.3.5`   | 向下滚动 | - |