# Infiniteloading 无限加载
列表滚动到底部自动加载更多数据。

## 基本用法

```html
<nut-infiniteloading 
    @loadmore="onInfinite" 
    :is-show-mod="true" 
    :has-more="isHasMore" 
    :is-loading="isLoading" 
    :threshold="200"
>
    <ul class="list" >
        <li 
            class="list-item" 
            v-for="(item, index) of data" 
            :key="item"
        >我是测试数据{{index + 1} }</li>
    </ul>
</nut-infiniteloading>
```
```javascript
export default {
    data() {
        return {
            data: new Array(30),
            page: 2,
            num: 30,
            isHasMore: true,
            isLoading: false,
            isErr: false,
            timer: null
        };
    },
    methods: {
        onInfinite () {
            this.isLoading = true;
            this.timer = setTimeout(() => {
                if (this.page <= 5) {
                    this.data = new Array(this.num * this.page);
                    this.page = this.page + 1;
                } else {
                    this.isHasMore = false;
                }
                this.isLoading = false;
            }, 100);
        }
    },
    destroyed() {
        clearTimeout(this.timer);
    }
};
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| has-more | 是否还有更多数据 | Boolean | true
| is-loading | 是否加载中 | Boolean | false
| threshold | 距离底部多远加载 | Number | 200
| is-showMod | 是否展示懒加载模块内容，一般适用于选项卡切换 | Boolean | false
| is-show-bottom-tips | 是否展示底部加载提示 | Boolean | true
| use-window | 将滚动侦听器添加到 window 否则侦听组件的父节点 | Boolean | true
| use-capture | 是否使用捕获模式 true捕获 false冒泡 | Boolean | false
| unload-more-txt | 没有更多数据展示文案 | String | 哎呀，这里是底部了啦' 
| container-id | 在use-window属性为false的时候，自定义设置节点ID | String | ''

## Slot

| name | 说明 
|----- | ----- 
| loading | 自定义“加载中”形式
| unloadMore | 自定义没有更多数据的展示形式

## Event

| 字段 | 说明 | 回调参数
|----- | ----- | -----
| loadmore | 继续加载的回调函数 | -
| scrollChange | 实时监听滚动高度 | 滚动高度
