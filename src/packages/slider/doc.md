# Slider 滑块

滑动输入器，用于在数值区间/自定义区间内进行选择。

## 基本用法

```html
<nut-slider 
   v-model="val1" 
   :range="[0,10]"
>
</nut-slider>
```

拖动时展示标签

```html
<nut-slider 
   v-model="val2" 
   :range="[0,100]" 
   :showLabel="true"
>
</nut-slider>
```

一直展示标签

```html
<nut-slider 
   v-model="val3" 
   :range="[0,100]" 
   :showLabel="true" 
   :showLabelAlways="true"
>
</nut-slider>
```

两端显式可选取范围

```html
<nut-slider 
   v-model="val4" 
   :range="[-50,50]" 
   :showLabel="true" 
   :showRangeTxt="true"
>
</nut-slider>
```

设置分段数（stage=20）

```html
<nut-slider 
   v-model="val5" 
   :range="[0,100]" 
   :showLabel="true" 
   :showRangeTxt="true" 
   :stage="5"
>
</nut-slider>
```

## 自定义class

```html
<nut-slider 
   class="my-slider" 
   v-model="val6" 
   :range="[0,100]"
>
</nut-slider>
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| value | 滑块选定的值，可以使用 **v-model** 双向绑定数据。 | Number | -
| showLabel | 拖动时是否展示标签 | Boolean | false
| showLabelAlways | 是否一直展示标签 | Boolean | false
| showRangeTxt | 两端是否展示可选取范围 | Boolean | false
| stage | 分段数 | Number/String | -
