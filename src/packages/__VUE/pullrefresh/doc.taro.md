#  InfiniteLoading 滚动加载

### 介绍

列表滚动到底部自动加载更多数据。

#### 直接使用 Taro 现有 ScrollView 组件开发 [参考文档](https://docs.taro.zone/docs/components/viewContainer/scroll-view)

<!-- ### 安装

```javascript
  import { createApp } from 'vue';
  import { InfiniteLoading } from '@nutui/nutui-taro';

  const app = createApp();
  app.use(InfiniteLoading);
```

## 代码演示
    
### 基础用法

在一个页面中，只能有一个 Infiniteloading，不可同时存在两个以及更多。

```html
<div class="infiniteUl" id="scrollDemo">
  <nut-infiniteloading
    pull-icon="JD"
    load-txt="loading"
    load-more-txt="没有啦～"
    :is-open-refresh="true"
    container-id="scrollDemo"
    :has-more="hasMore"
    @load-more="loadMore"
    @refresh="refresh"
  >
    <div
      class="infiniteLi"
      v-for="(item, index) in defultList"
      :key="index"
      >{{ item }}</div
    >
  </nut-infiniteloading>
</div>
```
```javascript
setup() {
    const hasMore = ref(true);

    const data = reactive({
      defultList: ['']
    });

    const loadMore = (done) => {
      setTimeout(() => {
        const curLen = data.defultList.length;

        for (let i = curLen; i < curLen + 10; i++) {
          data.defultList.push(`${i}`);
        }

        if (data.defultList.length > 30) hasMore.value = false;

        done();
      }, 500);
    };

    const refresh = (done) => {
      setTimeout(() => {
        console.log('刷新成功');
        done();
      }, 1000);
    };

    const init = () => {
      for (let i = 0; i < 20; i++) {
        data.defultList.push(`${i}`);
      }
    };
    onMounted(() => {
      init();
    });
    return {
      loadMore,
      hasMore,
      refresh,
      ...toRefs(data)
    };
}
```


## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| has-more         | 是否还有更多数据               | Boolean | `true`                |
| container-id          | 必填，设置滚动节点ID                        | String | `''`            |
| load-more-txt          | “没有更多数”据展示文案                        | String | `'哎呀，这里是底部了啦'`            |
| is-open-refresh        | 是否开启下拉刷新                         | Boolean | `false`                |
| pull-icon        | 下拉刷新[图标名称](#/zh-CN/component/icon)                        | String | <img src="https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png" width=40/>                |
| pull-txt        | 下拉刷新提示文案                         | String | `松手刷新`                |
| load-icon        | 上拉加载[图标名称](#/zh-CN/component/icon)                       | Boolean | <img src="https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png" width=40 />                |
| load-txt        | 上拉加载提示文案                         | String | `加载中...`                |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| load-more  | 继续加载的回调函数 | done 函数，用于关闭加载中状态 |
| scroll-change  | 实时监听滚动高度 | 滚动高度 |
| refresh  | 下拉刷新事件回调 | done 函数，用于关闭加载中状态 | -->
    