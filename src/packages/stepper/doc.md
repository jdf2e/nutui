# Stepper 步进器

通过点击按钮控制数字增减。

## 默认用法

```html
<nut-stepper 
    :value.sync="val1"
></nut-stepper>
```

设置最大最小值

```html
<nut-stepper 
    :value.sync="val2" 
    :min="5" 
    :max="100"
></nut-stepper>
```

设置加减的步长

```html
<nut-stepper 
    :value.sync="val3" 
    :step="5"
></nut-stepper>
```

设置只读

```html
<nut-stepper 
    :readonly="true"
></nut-stepper>
```

显示边框

```html
<nut-stepper 
    :simple="false"
></nut-stepper>
```

关闭动画效果

```html
<nut-stepper 
    :transition="false" 
    :simple="false"
></nut-stepper>
```

## Prop

| 字段 | 说明 | 类型 | 默认值 
| ----- | ----- | ----- | ----- 
| value | 初始值 | Number, String | 1
| min | 最小值 | Number, String | 0
| max | 最大值 | Number, String | Infinity
| step | 步长 | Number, String | 1
| readonly | 是否只读 | Boolean | false
| transition | 是否需要过渡效果 | Boolean | true
| simple | 是否显示简单版 | Boolean | true
| decimalPlaces | 设置保留的小数位 | Number | 0

## Event

| 字段 | 说明 | 回调参数
|----- | ----- | -----
| add | 点击加时触发事件 ｜ value
| reduce | 点击减时触发事件 ｜ value
| change | 值改变时触发事件 ｜ value
| blur | 输入框失去焦点时触发事件 | value
| focus | 输入框获取焦点时触发事件 | value
