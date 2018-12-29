# Rating 评分

## 基础用法

```html
<nut-rating>
</nut-rating>
```

绑定事件

```html
<nut-rating 
    @click="onClick"
>
</nut-rating>
```

自定义尺寸

```html
<nut-rating 
    :size="35"
>
</nut-rating>
```

自定义ICON

```html
<nut-rating
    :checkedIcon="icon1"
    :uncheckedIcon="icon2"
></nut-rating>
```

## Props

| 字段 | 说明 | 类型 | 默认值
| ----- | ----- | ----- | -----
| total | star 总数 | Number | 5
| value | 当前 star 数，可以使用 v-model 双向绑定数据 | Number | 3
| size | star 大小 | Number | 25
| uncheckedIcon | 使用图标(未选中) | String | -
| checkedIcon | 使用图标(选中) | String | -