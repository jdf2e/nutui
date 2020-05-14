## CirecleProgress 环形进度条

显示任务的当前操作进度。

## 基本用法

```html
    
    <nut-circleprogress progress="10">
    </nut-circleprogress>
```
## 环形进度条自定义样式

```htmL
    
    <nut-circleprogress progress="50" :progress-option="progressOption">
    </nut-circleprogress>
```

## 环形进度条自定义内容

```htmL
    
    <nut-circleprogress progress="50" :is-auto="true">
    </nut-circleprogress>
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| progress | 百分比 | Number,String | 必传项，无默认值
| stroke-inner-width | 圆弧的宽度 | Number,String | 10
| is-auto | 是否自定义内容显示 | Boolean | false
| progress-option | 外圆相关参数对象,其中包括半径，宽度，背景颜色，进度色值 | Object | {radius: 50,strokeOutWidth: 10, backColor: '#d9d9d9',progressColor: 'red'}
