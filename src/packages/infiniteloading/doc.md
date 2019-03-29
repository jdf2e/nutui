# InfiniteLoading 无限加载
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
        >我是测试数据{{index + 1}}</li>
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
| hasMore | 是否还有更多数据 | Boolean | true
| isLoading | 是否加载中 | Boolean | false
| threshold | 距离底部多远加载 | Number | 200
| isShowMod | 是否展示懒加载模块内容，一般适用于选项卡切换 | Boolean | false

## Event

| 字段 | 说明 | 回调参数
|----- | ----- | -----
| loadmore | 继续加载的回调函数 | -
