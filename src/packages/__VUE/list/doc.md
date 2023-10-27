# List 虚拟列表

### 介绍

建议优先使用 `NutUI` 提供的 [滚动加载](#/zh-CN/component/infiniteloading) 组件实现列表。

`List` 组件为**虚拟列表**组件，它可以只渲染当前可视区域，其他部分在用户滚动到可视区域内之后再渲染。

**在绝大多数场景下，你并不需要使用到虚拟列表**。它可能会出现滑动白屏、计算位置不精确等问题。

### 安装

```javascript
import { createApp } from 'vue';
import { List } from '@nutui/nutui';

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
          <div class="list-item"> {{ index }} </div>
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
      });

      return { ...toRefs(state), handleScroll };
    }
  };
</script>
<style>
  body {
    width: 100%;
    height: 100vh;
  }
  #app {
    width: 100%;
    height: 100%;
  }
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
</style>
```

:::

## API

### Props

| 参数             | 说明                                  | 类型   | 默认值       |
| ---------------- | ------------------------------------- | ------ | ------------ |
| height           | 列表项的高度/预估高度，支持不固定高度 | Number | `80`         |
| list-data        | 列表数据                              | any[]  | `[]`         |
| container-height | 容器高度(最大值不能超过可视区)        | Number | `可视区高度` |
| buffer-size      | 数据缓冲区长度                        | Number | `5`          |
| margin           | 列表之间的间隙，和自定义样式保持一致  | Number | `10`         |

### Slots

| 参数  | 说明       | 类型   |
| ----- | ---------- | ------ |
| item  | 列表项数据 | Object |
| index | 列表索引   | Number |

### Events

| 事件名        | 说明             | 回调参数 |
| ------------- | ---------------- | -------- |
| scroll-bottom | 滚动到底部时触发 | -        |
| scroll-up     | 向上滚动         | -        |
| scroll-down   | 向下滚动         | -        |
