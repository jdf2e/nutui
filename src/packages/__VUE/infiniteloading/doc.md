#  InfiniteLoading 滚动加载

### 介绍

列表滚动到底部自动加载更多数据。

### 安装

```javascript
import { createApp } from 'vue';
import { InfiniteLoading } from '@nutui/nutui';

const app = createApp();
app.use(InfiniteLoading);
```

### 基础用法

:::demo

```html
<template>
  <nut-tabs v-model="tabsValue" animatedTime="0" >
    <nut-tab-pane title="基础用法">
        <ul class="infiniteUl">
           <nut-infinite-loading
                v-model="infinityValue"
                :has-more="hasMore"
                @load-more="loadMore"
            >
                <div class="infiniteLi" v-for="(item, index) in defultList" :key="index">{{item}}</div>
            </nut-infinite-loading>
        </ul>
    </nut-tab-pane>
  </nut-tabs>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      let cycle = 0;
      const tabsValue = ref(0)
      const infinityValue = ref(false)
      const hasMore = ref(true);
      const letter = ['A','B','C','D','E','F','G', 'H','IJ','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
      const defultList = ref(letter);
      const loadMore = done => {  
        setTimeout(() => {

          defultList.value = defultList.value.concat(letter);
          cycle++;
          if (cycle > 2) hasMore.value = false;
          infinityValue.value = false;
        }, 1000); 
      };
      
      return {tabsValue, loadMore, hasMore, defultList, infinityValue };
    }
  }
</script>

<style lang="scss">
  .nut-tab-pane {
    padding: 0 !important;
    padding-left: 16px !important;
  }
  .infiniteUl {
    width: 100%;
    height: calc(100vh - 120px);
    padding: 0;
    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .infiniteLi {
    font-size: 14px;
    color: #333;
    padding: 12px 0;
    border-bottom: 1px solid #eee;
  }
</style>

```
:::
### 自定义加载文案

:::demo

```html
<template>
  <nut-tabs v-model="tabsValue" animatedTime="0" >
    <nut-tab-pane title="自定义加载文案">
        <ul class="infiniteUl">
          <nut-infinite-loading
              v-model="infinityValue"
              load-txt="Loading..."
              load-more-txt="没有啦~"
              :has-more="hasMore"
              @load-more="loadMore"
            >
              <li class="infiniteLi" v-for="(item, index) in defultList" :key="index">{{ item }}</li>
            </nut-infinite-loading>
        </ul>
    </nut-tab-pane>
  </nut-tabs>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      let cycle = 0;
      const tabsValue = ref(0)
      const infinityValue = ref(false)
      const hasMore = ref(true);
      const letter = ['A','B','C','D','E','F','G', 'H','IJ','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
      const defultList = ref(letter);
      const loadMore = done => {  
        setTimeout(() => {

          defultList.value = defultList.value.concat(letter);
          cycle++;
          if (cycle > 2) hasMore.value = false;
          infinityValue.value = false;
        }, 1000); 
      };
      
      return {tabsValue, loadMore, hasMore, defultList, infinityValue };
    }
  }
</script>

<style lang="scss">
  .nut-tab-pane {
    padding: 0 !important;
    padding-left: 16px !important;
  }
  .infiniteUl {
    width: 100%;
    height: calc(100vh - 120px);
    padding: 0;
    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .infiniteLi {
    font-size: 14px;
    color: #333;
    padding: 12px 0;
    border-bottom: 1px solid #eee;
  }
</style>

```
:::


## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| v-model         | 是否触发滚动加载               | boolean | `false`                |
| has-more         | 是否还有更多数据               | boolean | `true`                |
| threshold         | 滚动条与底部距离小于 `threshold` 时触发 `loadMore` 事件 | number | `200`               |
| use-capture          | 是否使用捕获模式 `true` 捕获 `false` 冒泡                        | boolean | `false`            |
| load-more-txt          | “没有更多数据” 展示文案                        | string | `'哎呀，这里是底部了啦'`            |
| load-txt        | 上拉加载提示文案                         | string | `加载中...`                |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| load-more  | 继续加载的回调函数 | - |
| scroll-change  | 实时监听滚动高度 | 滚动高度 |

### Slots

| 名称 | 说明           | 
|--------|----------------|
| default  | 自定义加载内容 |
| loading  | 自定义底部加载中提示 |
| loading-icon  | 自定义底部加载中图标 |
| finished  | 自定义加载完成后的提示文案 |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                                    | 默认值                     | 
| --------------------------------------- | -------------------------- | 
| --nut-infiniteloading-bottom-color       | _#c8c8c8_        | 