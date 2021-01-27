#  infiniteloading组件

### 介绍

列表滚动到底部自动加载更多数据。

### 安装

```javascript
    import { createApp } from 'vue';
    import { InfiniteLoading } from '@nutui/nutui';

    const app = createApp();
    app.use(InfiniteLoading);
```

## 代码演示
    
### 基础用法

```html
<ul class="infiniteUl" id="scroll">
    <nut-infiniteloading
        containerId = 'scroll'
        :useWindow='false'
        :isLoading="isLoading"
        :hasMore="hasMore"
        @scrollChange="scrollChange"
        @loadMore="loadMore"
    >
        <li class="infiniteLi" v-for="(item, index) in defultList" :key="index">{{item}}</li>
    </nut-infiniteloading>
</ul>
```
```javascript
setup() {
    const isLoading = ref(false);
    const hasMore = ref(true);
    const data = reactive({
      defultList: []
    });
    const scrollChange = (dis) => {};
    const loadMore = () => {  
      isLoading.value = true;
      setTimeout(() => {
        const curLen = data.defultList.length;
        for (let i = curLen; i < curLen + 10; i++) {
          data.defultList.push(`${i} -- 塑像本来就在石头里，我只是把不要的部分去掉`);
        }
        isLoading.value = false;
        if (data.defultList.length > 30) hasMore.value = false;
      }, 500);
    };
    const init = () => {
      for (let i = 0; i < 10; i++) {
        data.defultList.push(`${i} -- 塑像本来就在石头里，我只是把不要的部分去掉`);
      }
    }
    onMounted(() => {
      init()
    });
    return { scrollChange, loadMore, isLoading, hasMore, ...toRefs(data) };
}
```

### 自定义加载文案

```html
<ul class="infiniteUl" id="customScroll">
    <nut-infiniteloading
        containerId = 'customScroll'
        :useWindow='false'
        :isLoading="customIsLoading"
        :hasMore="customHasMore"
        @loadMore="customLoadMore"
    >
        <li class="infiniteLi" v-for="(item, index) in customList" :key="index">{{item}}</li>
        <template v-slot:loading>
            <div class="loading">
                <span>加载中...</span>
            </div>
        </template>
        <template v-slot:unloadMore>
            <div class="unload-more">没有数据啦 ~~</div>
        </template>
    </nut-infiniteloading>
</ul>
```
```javascript
setup() {
    const customIsLoading = ref(false);
    const customHasMore = ref(true);
    const data = reactive({
      customList: ['']
    });
    const customLoadMore = () => {
      customIsLoading.value = true;
      setTimeout(() => {
        const curLen = data.customList.length;
        for (let i = curLen; i < curLen + 10; i++) {
          data.customList.push(`${i} -- 塑像本来就在石头里，我只是把不要的部分去掉`);
        }
        customIsLoading.value = false;
        if (data.customList.length > 30) customHasMore.value = false;
      }, 500);
    };
    const init = () => {
      for (let i = 0; i < 10; i++) {
        data.customList.push(`${i} -- 塑像本来就在石头里，我只是把不要的部分去掉`);
      }
    }
    onMounted(() => {
      init()
    });
    return { customIsLoading, customHasMore, customLoadMore,...toRefs(data) };
}
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| hasMore         | 是否还有更多数据               | Boolean | true                |
| isLoading        | 是否加载中                         | Boolean | false                |
| threshold         | 距离底部多远加载 | Number | 200               |
| useWindow | 将滚动侦听器添加到 window 否则侦听组件的父节点     | Boolean | true |
| useCapture          | 是否使用捕获模式 true 捕获 false 冒泡                        | Boolean | false            |
| containerId          | 在 useWindow 属性为 false 的时候，自定义设置节点ID                        | String | ''            |
| unloadMoreTxt          | “没有更多数”据展示文案                        | String | '哎呀，这里是底部了啦'            |

### Slot

| name | 说明           | 
|--------|----------------|
| loading  | 自定义“加载中”的展示形式 | 
| unloadMore  | 自定义“没有更多数据”的展示形式 | 

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| loadMore  | 继续加载的回调函数 | - |
| scrollChange  | 实时监听滚动高度 | 滚动高度 |
    