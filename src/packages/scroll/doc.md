# 下拉刷新&&无限加载

## 基本用法

```html
<nut-pullrefresh-loadmore 
  :on-refresh="onRefresh"
  :on-infinite="onInfinite"
  <!-- 这里添加你需要的内容 -->
>
</nut-pullrefresh-loadmore>
```
## 下拉刷新&&无限加载方法使用

支持下拉刷新、无限加载单独使用

### 下拉刷新
```html
onRefresh() {
  // 调用API获取数据 PS：这里通过setTimeout来mock
  setTimeout(() => {
    let start = this.top - 1;
    for (let i = start; i > start - 10; i--) {
      this.items.splice(0, 0, '塑像本来就在石头里，我只是把不要的部分去掉 ' + (i > -10  ? ('0' + -i) : -i));
    }
    this.top = this.top - 10;
    // 停止下拉动画
    this.$refs.scroller && this.$refs.scroller.finishPullToRefresh();
  }, 1500);
}
```

### 无限加载
```html
onInfinite(cb) {
  // 通过回调函数cb进行控制是否数据加载
  if(this.bottom >= 50) {
    cb(true)
    return
  }
  setTimeout(() => {
    let start = this.bottom + 1;
    for (let i = start; i < start + 10; i++) {
      this.items.push('塑像本来就在石头里，我只是把不要的部分去掉 ' + (i < 10 ? ('0' + i) : i));
    }
    this.bottom = this.bottom + 10;
      this.$refs.scroller && this.$refs.scroller.finishInfinite();
  }, 1500);
}
```

## 自定义文案、样式

支持文案及样式覆写。

```html
refreshText="下拉释放刷新-加载数据"
noDataText="没有数据啦~"
...
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| onRefresh | 下拉刷新回调函数 | Function | -
| onInfinite | 尺寸，需要带单位 | Function | -
| refreshText | 颜色 | String | 下拉刷新
| noDataText | 没有数据展示的问题 | String | 没有更多数据 
| width | 容器宽度，不需要带单位，采用px | Number | 100%
| height | 容器高度，不需要带单位，采用px | Number | 100%
| refreshLayerColor | 下拉刷新颜色 | String | #AAAAAA
| loadingLayerColor | 无限加载颜色 | String | #AAAAAA
| minContentHeight | 容器最小高度，不需要带单位，采用px | Number | -

