# Scroller 滚动

局部滚动组件，支持惯性、吸边回弹。纵向可支持下拉刷新和上拉加载，横向可支持滚动末尾跳转。

## 基本用法

横向使用，支持惯性、吸边回弹，支持滚动末尾跳转。

```html
<nut-scroller @jump="jump()">
    <div slot="list" class="nut-hor-list-item" v-for="(item, index) of listData" :key="index">
        <dl class="nut-scroller-item-info">
            <dt>防水升级版 蓝 迷你小音</dt>
            <dd>2018-02-25</dd>
        </dl>
    </div>
    <slot slot="more"><div class="nut-hor-jump-more">查看更多</div></slot>
</nut-scroller>
```

横向小于一屏
```html
<div class="hor-panel">
    <nut-scroller @jump="jump()">
        <div slot="list" class="nut-hor-list-item" v-for="(item, index) of listData3" :key="index">
            <dl class="nut-scroller-item-info">
                <dt>防水升级版 蓝牙音箱 小音</dt>
                <dd>2018-02-25</dd>
            </dl>
        </div>
        <slot slot="more" ><div class="nut-hor-jump-more">查看更多</div></slot>
    </nut-scroller>
</div>
```
纵向使用，支持下拉刷新和上拉加载更多。

```html
<nut-scroller
    :is-un-more="isUnMore1" 
    :is-loading="isLoading1"
    :type="'vertical'"
    @loadMore="loadMoreVert"
    @pulldown="pulldown"
> 
    <div slot="list" class="nut-vert-list-panel">
        <div class="nut-vert-list-item" v-for="(item, index) of listData1" :key="index">
            <dl class="nut-scroller-item-info">
                <dt>防水升级版 蓝牙音箱 低音炮 IPX7设计 户外便携音响 迷你小音</dt>
                <dd>2018-02-25</dd>
            </dl>
        </div>
    </div>
</nut-scroller>
```

纵向不满一屏

```html
<nut-scroller
    :is-un-more="isUnMore2" 
    :is-loading="isLoading2"
    :type="'vertical'"
    @loadMore="loadMoreVert2"
    @pulldown="pulldown2"
> 
    <div slot="list" class="nut-vert-list-panel">
        <div class="nut-vert-list-item" v-for="(item, index) of listData2" :key="index">
            <dl class="nut-scroller-item-info">
                <dt>防水升级版 蓝牙音箱 低音炮 IPX7设计 户外便携音响 迷你小音</dt>
                <dd>2018-02-25</dd>
            </dl>
        </div>
    </div>
</nut-scroller>
```

```javascript
export default {
    data() {
        return {
            listData: new Array(20),
            listData1: new Array(20),
            listData2: [1, 2],
            listData3: [1],
            maxPages: 4,
            isUnMore1: false,
            isLoading1: false,
            page1: 2,
            maxPages2: 1,
            isUnMore2: false,
            isLoading2: false,
            page2: 2,
            timers: null,
        };
    },

    methods: {
        jump() {
            location.href = 'http://www.jd.com';
        },

        loadMoreVert() {
            this.isLoading1 = true;
            if (this.page1 > this.maxPages) {
                this.isUnMore1 = true;
                this.isLoading1 = false;
            } else {
                clearTimeout(this.timers);
                this.timer = setTimeout(() => {
                    this.isLoading1 = false;
                    this.isUnMore1 = false;
                    this.listData1 = new Array(20 * this.page1);
                    this.page1 = ++this.page1;
                }, 300);
            }
        },

        pulldown() {
            this.isLoading1 = true;
            clearTimeout(this.timers);
            this.timer = setTimeout(() => {
                this.isLoading1 = false;
                this.isUnMore1 = false;
                this.listData1 = new Array(20);
                this.page1 = 2;
            }, 3000);
        },


        loadMoreVert2() {
            this.isLoading2 = true;
            if (this.page2 > this.maxPages2) {
                this.isUnMore2 = true;
                this.isLoading2 = false;
            } else {
                clearTimeout(this.timers);
                this.timer = setTimeout(() => {
                    this.isLoading2 = false;
                     this.isUnMore2 = false;
                    this.listData2 = new Array(20 * this.page2);
                    this.page2 = ++this.page1;
                }, 300);
            }
        },

        pulldown2() {
            this.isLoading2 = true;
            clearTimeout(this.timers);
            this.timer = setTimeout(() => {
                this.isLoading2 = false;
                this.isUnMore2 = false;
                this.listData2 = new Array(10);
                this.page2 = 2;
            }, 300);
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
| type | 类型，'horizontal'横向或'vertical'纵向 | String | 'horizontal'
| stretch | 拉伸范围 | Number | 100
| isUnMore | 是否没有更多 | Boolean | false
| isLoading | 是否正在加载 | Boolean | false
| propsTime | type=vertical时，加载成功后pulldownTxt停留时间，单位为 ms | Number | 0
| threshold | 距离底部多少开始加载 | Number | 100
| pulldownTxt | 下拉展示文案 | String | '下拉刷新'
| loadMoreTxt | 上拉展示文案 | String | '上拉加载'
| unloadMoreTxt | 没有更多数据展示文案 | String | '没有更多了'
| scrollTo | 滚动到指定位置，只能设置复数，需要配合scrollToCbk使用 | Number | 1

## Event

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| pulldown | 下拉刷新回调 | -
| loadMore | 上拉加载回调 | -
| jump | 查看更多跳转回调 | -
| scrollToCbk | 滚动到指定位置之后，scrollTo参数设置成默认值 | -