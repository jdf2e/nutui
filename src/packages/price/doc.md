# Price 商品价格

用来对商品价格数值的小数点前后部分应用不同样式，还支持人民币符号、千位分隔符、设置小数点位数等功能。

## 基本用法

```html
<nut-price 
    :price="1010" 
    :needSymbol="false" 
    :thousands="true"
/>
```

带人民币符号，无千位分隔

```html
<nut-price  
    :price="10010.01" 
    :needSymbol="true" 
    :thousands="false"
/>
```

带人民币符号和千位分隔，保留小数点后三位

```html
<nut-price  
    :price="15213.122" 
    :decimalDigits="3" 
    :needSymbol="true" 
    :thousands="true"
/>
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| price | 价格数量 | Number | 0
| needSymbol | 是否需要加上人民币符号 | Boolean | true
| decimalDigits | 小数位位数 | Number | 2
| thousands | 是否按照千分号形式显示 | Boolean | false