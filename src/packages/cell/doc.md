# Cell 列表项

列表项，可组成列表。

## 基本用法

```html
<nut-cell 
  title = "左侧主标题" 
  subTitle = "左侧副标题"
  desc = "右侧描述文字"
  :showIcon = "true"
>
</nut-cell>
```

**isLink**值为true时有点击状态。

```html
<nut-cell 
  :isLink = "true"
  title = "左侧主标题"
  subTitle = "左侧副标题"
  desc="右侧描述文字">
</nut-cell>
```

设置**linkUrl**，点击可跳转。

```html
<nut-cell 
  :isLink = "true"
  linkUrl = http://m.jd.com"
  title = "左侧主标题" 
  subTitle = "左侧副标题"
  desc="右侧描述文字">
</nut-cell>
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| title | 左侧主slot | String | -
| subTitle | 左侧副slot | String | -
| desc | 右侧slot | String | -
| isLink | 是否是链接 | Boolean | false
| linkUrl | 链接Url | String | -
| showIcon | 是否展示右侧箭头Icon | Boolean | false
| bgColor | 背景颜色 | String | "#FFFFFF"
