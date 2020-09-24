# NavBar 头部导航

> 依赖 Icon 组件，渲染左右两侧的图标

## 基础样式

```html
<nut-navbar :close-show="false" :search-show="false"></nut-navbar>
```

## 右侧增加折叠菜单

```html
<nut-navbar :close-show="false"></nut-navbar>
```

## 右侧文案样式

通过slot **back-icon**，**close-icon**,**search-icon**,**more-icon** 修改左右两侧图标；

```html
<nut-navbar :close-show="false" :more-show="false" title="自定义标题">
    <a slot="search-icon">新建</a>
</nut-navbar>
```

## H5样式

内置 `on-click-back`，`on-click-close`，`on-click-title`，`on-click-search`，`on-click-more` 监听事件。

```html
<nut-navbar 
    @on-click-back="back" 
    @on-click-close="close" 
    @on-click-title="title" 
    @on-click-search="search" 
    @on-click-more="more"
>
</nut-navbar>
```

```javascript
export default {
    methods: {
        back() {
        alert('header头部， 点击返回');
        },
        close() {
        alert('header头部， 点击关闭');
        },
        title() {
        alert('header头部， 点击title');
        },  
        search() {
        alert('header头部， 点击搜索');
        },
        more() {
        alert('header头部， 点击更多');
        }
    }
};
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| back-show | 是否显示左侧返回按钮 | Boolean | true
| close-show | 是否显示左侧关闭按钮 | Boolean | true
| title | 中间显示文字内容 | String | 导航标题栏
| search-show | 是否显示右侧搜索按钮 | Boolean | true
| more-show | 是否显示右侧更多按钮 | Boolean | true


## slot

| 字段 | 说明 | 
|----- | ----- |  
| back-icon | 渲染左侧返回按钮 |
| close-icon | 渲染左侧关闭按钮|
| title | 渲染中间标题区域 |
| search-icon |渲染右侧搜索按钮|
| more-icon |渲染右侧更多按钮|