# Range 区间选择器

## 基础用法

```html
<nut-range
    :rangeValues.sync="val1"
    :range="[-93,322]"
>
</nut-range>
```

修改主题颜色

```html
<nut-range
    color="#31ccec"
    :rangeValues.sync="val2" 
    :range="[0,200]">
</nut-range>
```

显示标签文字

```html
<nut-range
    color="#31ccec"
    :rangeValues.sync="val2"
    :range="[0,200]"
    :showLabel="true"
    :showRangeTxt="true"
>
</nut-range>
```

## Prop

| 字段 | 说明 | 类型 | 默认值
| ----- | ----- | ----- | -----
| rangeValues | 区间数据 | Array | [0, 0]
| color | 主题颜色 | String | #ff0000
| showLabel | 是否在选择区间时显示标签 | Boolean | false
| showLabelAlways | 是否一直显示着标签 | Boolean | false
| showRangeTxt | 是否显示区间值 | Boolean | false
| range | 最小最大区间范围 | Array | [0, 10]
| stage | 区间的步长 | Number, String | 1