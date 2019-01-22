# Rate 评分

用于快速的评级操作，或对评价进行展示。

## 基础用法

```html
<nut-rate>
</nut-rate>
```

绑定事件

```html
<nut-rate 
    @click="onClick"
>
</nut-rate>
```

自定义尺寸

```html
<nut-rate 
    :size="35"
>
</nut-rate>
```

自定义ICON

```html
<nut-rate
    :checkedIcon="icon1"
    :uncheckedIcon="icon2"
></nut-rate>
```

## Prop

| 字段 | 说明 | 类型 | 默认值
| ----- | ----- | ----- | -----
| total | star 总数 | Number | 5
| value | 当前 star 数，可以使用 v-model 双向绑定数据 | Number | 3
| size | star 大小 | Number | 25
| spacing | 两个star的间距 | Number | 20
| uncheckedIcon | 使用图标(未选中) | String | -
| checkedIcon | 使用图标(选中) | String | -

## Events
| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| click | 点击star市触发 | star的index