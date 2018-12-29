# Stepper 加减按钮

## 默认用法

```html
<nut-stepper 
    init="1"
></nut-stepper>
```

设置最大最小值

```html
<nut-stepper 
    init="100" 
    min="1" 
    max="100"
></nut-stepper>
```

设置加减的步长

```html
<nut-stepper 
    init="10"
    step="5"
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

## Props

| 字段 | 说明 | 类型 | 默认值 
| ----- | ----- | ----- | ----- 
| init | 初始值 | Number | 1
| min | 最小值 | Number, String | 0
| max | 最大值 | Number, String | Infinity
| step | 步长 | Number | 1
| readonly | 是否只读 | Boolean | false
| transition | 是否需要过渡效果 | Boolean | true
| simple | 是否显示简单版 | Boolean | true