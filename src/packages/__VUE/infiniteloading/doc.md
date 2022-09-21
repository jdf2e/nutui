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
  <ul class="infiniteUl" id="scroll"  style='height: 300px;'>
    <nut-infiniteloading
        containerId = 'scroll'
        :use-window='false'
        :has-more="hasMore"
        @load-more="loadMore"
    >
        <li class="infiniteLi" v-for="(item, index) in defultList" :key="index">{{item}}</li>
    </nut-infiniteloading>
  </ul>
</template>

<script>
  import { ref,reactive,onMounted,toRefs} from 'vue';
  export default {
    setup(props) {
      const hasMore = ref(true);
      const data = reactive({
        defultList: []
      });
      const loadMore = done => {  
        setTimeout(() => {
          const curLen = data.defultList.length;
          for (let i = curLen; i < curLen + 10; i++) {
            data.defultList.push(`${i}`);
          }
          if (data.defultList.length > 30) hasMore.value = false;
          done()
        }, 500);
      };
      const init = () => {
        for (let i = 0; i < 10; i++) {
          data.defultList.push(`${i}`);
        }
      }
      onMounted(() => {
        init()
      });
      return { loadMore, hasMore, ...toRefs(data) };
    }
  }
</script>

<style>
.infiniteUl {
  height: 300px;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;
  background:#eee
}
.infiniteLi {
  margin-top: 10px;
  font-size: 14px;
  color: rgba(100, 100, 100, 1);
  text-align: center;
}
</style>
```
:::
### 下拉刷新

:::demo

```html
<template>
  <ul class="infiniteUl" id="refreshScroll" style='height: 300px;'>
    <nut-infiniteloading
      pull-icon="JD"
      container-id="refreshScroll"
      :use-window="false"
      :is-open-refresh="true"
      :has-more="refreshHasMore"
      @load-more="refreshLoadMore"
      @refresh="refresh"
    >
      <li
        class="infiniteLi"
        v-for="(item, index) in refreshList"
        :key="index"
        >{{ item }}</li
      >
    </nut-infiniteloading>
  </ul>
</template>

<script>
  import { ref,reactive,onMounted,toRefs} from 'vue';
  import { Toast } from '@nutui/nutui';
  export default {
    setup(props) {
      const refreshHasMore = ref(true);
      const data = reactive({
        refreshList: []
      });
      const refreshLoadMore = done => {
        setTimeout(() => {
          const curLen = data.refreshList.length;
          for (let i = curLen; i < curLen + 10; i++) {
            data.refreshList.push(
              `${i}`
            );
          }
          if (data.refreshList.length > 30) refreshHasMore.value = false;
          done()
        }, 500);
      };

      const refresh = (done) => {
        setTimeout(()=>{
          Toast.success('刷新成功');
          done()
        },1000)
      }
      const init = () => {
        for (let i = 0; i < 10; i++) {
          data.refreshList.push(`${i}`);
        }
      }
      onMounted(() => {
        init()
      });
      return { refreshLoadMore, refreshHasMore, refresh, ...toRefs(data) };
    }
  }
</script>

<style>
.infiniteUl {
  height: 300px;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;
  background:#eee
}
.infiniteLi {
  margin-top: 10px;
  font-size: 14px;
  color: rgba(100, 100, 100, 1);
  text-align: center;
}
</style>
```
:::
### 自定义加载文案
:::demo

```html
<template>
  <ul class="infiniteUl" id="customScroll">
    <nut-infiniteloading
      load-txt="loading"
      load-more-txt="没有啦～"
      container-id="customScroll"
      :use-window="false"
      :has-more="customHasMore"
      @load-more="customLoadMore"
    >
      <li class="infiniteLi" v-for="(item, index) in customList" :key="index">{{ item }}</li>
    </nut-infiniteloading>
  </ul>
</template>

<script>
  import { ref,reactive,onMounted,toRefs} from 'vue';
  export default {
    setup(props) {
      const customHasMore = ref(true);
      const data = reactive({
        customList: ['']
      });
      const customLoadMore = done => {
        setTimeout(() => {
          const curLen = data.customList.length;
          for (let i = curLen; i < curLen + 10; i++) {
            data.customList.push(`${i}`);
          }
          if (data.customList.length > 30) customHasMore.value = false;
          done()
        }, 500);
      };
      const init = () => {
        for (let i = 0; i < 10; i++) {
          data.customList.push(`${i}`);
        }
      }
      onMounted(() => {
        init()
      });
      return { customHasMore, customLoadMore,...toRefs(data) };
    }
  }
</script>

<style>
.infiniteUl {
  height: 300px;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;
  background:#eee
}
.infiniteLi {
  margin-top: 10px;
  font-size: 14px;
  color: rgba(100, 100, 100, 1);
  text-align: center;
}
</style>
```
:::

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| has-more         | 是否还有更多数据               | Boolean | `true`                |
| threshold         | 滚动条与底部距离小于 threshold 时触发 loadMore 事件 | Number | `200`               |
| use-window | 将滚动侦听器添加到 window 否则侦听组件的父节点     | Boolean | `true` |
| use-capture          | 是否使用捕获模式 true 捕获 false 冒泡                        | Boolean | `false`            |
| container-id          | 在 useWindow 属性为 false 的时候，自定义设置节点ID                        | String | `''`            |
| load-more-txt          | “没有更多数”据展示文案                        | String | `'哎呀，这里是底部了啦'`            |
| is-open-refresh        | 是否开启下拉刷新                         | Boolean | `false`                |
| pull-icon        | 下拉刷新[图标名称](#/icon)                        | String | <img src="https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png" width=40/>                |
| pull-txt        | 下拉刷新提示文案                         | String | `松手刷新`                |
| load-icon        | 上拉加载[图标名称](#/icon)                       | String | <img src="https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png" width=40 />                |
| load-txt        | 上拉加载提示文案                         | String | `加载中...`                |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| load-more  | 继续加载的回调函数 | done 函数，用于关闭加载中状态 |
| scroll-change  | 实时监听滚动高度 | 滚动高度 |
| refresh  | 下拉刷新事件回调 | done 函数，用于关闭加载中状态 |

### Slots

| 名称 | 说明           | 
|--------|----------------|
| loading  | 自定义底部记载中提示 |
| finished  | 自定义加载完成后的提示文案 |