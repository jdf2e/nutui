#  Pullrefresh组件

### 介绍

纵向可支持下拉刷新和上拉加载，横向可支持左滑更新、右滑加载更多

### 安装
    
```javascript
import { createApp } from 'vue';
//vue
import { PullRefresh } from '@nutui/nutui';
//taro
import { PullRefresh } from '@nutui/nutui-taro';

const app = createApp();
app.use(PullRefresh);
```
    
## 代码演示

### 纵向

```html
<div class="vertical">
    <nut-pullrefresh
        @refresh="refresh"
        @down-refresh="downRefresh"
        :useWindow="false"
        containerId="pull"
    >
        <div class="content" id="pull">
            <div class="main">
                <div
                    class="text-data"
                    v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
                    :key="item"
                    >我是测试数据 {{ item }}</div>
            </div>
        </div>
    </nut-pullrefresh>
</div>
```
```javascript
setup() {
    const refresh = done => {
      console.log('上拉加载')
      setTimeout(() => {
        done();
      }, 1000);
    };

    const downRefresh = done => {
      console.log('下拉刷新')
      setTimeout(() => {
        done();
      }, 1000);
    }
    return { refresh, downRefresh };
}
```

### 横向

```html
<div class="horizontal">
    <nut-pullrefresh
        @refresh="refresh"
        @down-refresh="downRefresh"
        :useWindow="false"
        containerId="pullH"
        direction="horizontal"
    >
        <div class="contentH" id="pullH">
        <div class="mainH">
            <div
            class="text-data"
            v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
            :key="item"
            >我是测试数据 {{ item }}</div
            >
        </div>
        </div>
    </nut-pullrefresh>
</div>
```
```javascript
setup() {
    const refresh = done => {
      console.log('上拉加载')
      setTimeout(() => {
        done();
      }, 1000);
    };

    const downRefresh = done => {
      console.log('下拉刷新')
      setTimeout(() => {
        done();
      }, 1000);
    }
    return { refresh, downRefresh };
}
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| useWindow | 将滚动侦听器添加到 window 否则侦听组件的父节点     | Boolean | true |
| containerId          | 在 useWindow 属性为 false 的时候，自定义设置节点ID    | String | ''            |
| disabled          | 组件是否激活                        | Boolean | true            |
| direction        | 滚动的方向，'vertical' 纵向、'horizontal' 横向   | String | 'vertical'                |
| pullingText        | '下拉'文案   | Object | {top: '下拉刷新', bottom: '上拉加载',left: '左滑刷新', right: '右滑加载'}              |
| loosingText        | '释放'文案   | Object | {top: ’松手释放刷新', bottom: '松手释放刷新',left: '释放刷新', right: '加载更多'}              |
| loadingText        | '加载中'文案   | Object | {top: '加载中...', bottom: '加载中...',left: '加载中...', right: '加载中...'}              |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| refresh  | 纵向-上拉加载、横向-右滑加载更多时触发 | done() 函数，在数据更新完成以后，需要调用 done() 函数将组件状态初始化 |
| downRefresh  | 纵向-下拉刷新、横向-左滑刷新时触发 | done() 函数，在数据更新完成以后，需要调用 done() 函数将组件状态初始化 |  