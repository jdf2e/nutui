# Cell 列表项

列表项，可组成列表。

## 基本用法

**to**有值的时候，跳转路由，**click-cell**点击cell触发事件

```html
<nut-cell title="我是标题" desc="描述文字" @click-cell="clickEvnt" to="/index">
</nut-cell>
```

设置**link-url**，点击可跳转。设置**target**，可以配置是否打开新的页面

```html
<nut-cell :is-link="true" link-url="//m.jd.com" :show-icon="true" title="带链接" target="_target">
</nut-cell>
```
可以通过设置slot，设置cell的具体内容

```html
<nut-cell :is-link="true" :show-icon="true">
    <span slot="title">我是主标题</span>
    <span slot="sub-title">我是副标，我们都是通过Slot分发的</span>
    <span slot="desc">我是描述</span>
</nut-cell>
```

```html
<nut-cell :show-icon="true">
    <span slot="title">通过Slot自定义右侧ICON</span>
    <nut-icon type="tick" slot="icon" size="15px" color="#848484"></nut-icon>
</nut-cell>
```
**slot为avatar**可以添加左侧头像，具体组件配置请参考avatar组件

```html
<nut-cell :show-icon="true" title="我是标题" sub-title="我是副标题" desc="展示默认ICON">
  <div slot="avatar"><nut-avatar></nut-avatar></div>
</nut-cell>
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| title | 左侧主标题 | String | -
| sub-title | 左侧副标题 | String | -
| desc | 右侧部分内容 | String | -
| is-link | 是否是链接 | Boolean | false
| link-url | 链接Url | String | -
| show-icon | 是否展示右侧箭头Icon | Boolean | false
| bg-color | 背景颜色 | String | "#FFFFFF"
| to      |路由路径| String |-|
| target |同`<a>`中target属性|String|_self|



## Event
|字段|说明|回调参数|
|--|--|--|
|click-cell|点击cell区域触发事件回调函数|无|