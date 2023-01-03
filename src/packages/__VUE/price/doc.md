# Price 商品价格

### 介绍

用来对商品价格数值的小数点前后部分应用不同样式，还支持人民币符号、千位分隔符、设置小数点位数等功能。

### 安装

```javascript
import { createApp } from 'vue';
import { Price } from '@nutui/nutui';

const app = createApp();
app.use(Price);

```


### 价格大小

支持 small、normal、large 三种尺寸，默认为 normal。

:::demo

``` html
<template>
    <nut-price :price="0" size="small" :need-symbol="false" />
    <nut-price :price="0" size="normal" :need-symbol="false" />
    <nut-price :price="0" size="large" :need-symbol="false" />
</template>
```

:::

### 小数点位数

`decimal-digits` 可设置小数点位数，默认展示2位小数。

:::demo

``` html
<template>
    <nut-price :price="8888" :decimal-digits="0" />
</template>
```

:::

### 货币符号

`symbol` 可设置货币符号，默认为 `¥`。

:::demo

``` html

<template>
    <nut-price :price="10010.01" symbol="¥" />
</template>
```
:::

### 货币符号位置

`position` 可以调整货币符号位置。

:::demo

``` html
<template>
    <nut-price :price="8888.01" position="after" symbol="元" />
</template>
```

:::
### 千位分隔

`thousands` 可以按照千分号形式显示。

:::demo

``` html
<template>
    <nut-price :price="15213.1221" :decimal-digits="3" :thousands="true" />
</template>
```

## API
### Props

| 字段           | 说明                                    | 类型    | 默认值 |
|----------------|-----------------------------------------|---------|--------|
| price          | 价格数量                                | Number ｜ String | 0      |
| need-symbol    | 是否需要加上 symbol 符号                 | Boolean          | true   |
| symbol         | 符号类型                                | String           | &yen;  |
| decimal-digits | 小数位位数                              | Number  | 2     |
| thousands      | 是否按照千分号形式显示                    | Boolean          | false  |
| position       | 符号显示在价格前或者后，`before`、`after`  | String           | `before` |
| size           | 价格尺寸，`small`、`normal`、`large`     | String           | `large` |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                    | 默认值                     | 描述 |
| --------------------------------------- | -------------------------- | ---- |
| --nut-price-symbol-big-size| _18px_  | -  |
| --nut-price-big-size| _24px_  | -  |
| --nut-price-decimal-big-size| _18px_  | -  |
| --nut-price-symbol-medium-size| _14px_  | -  |
| --nut-price-medium-size| _16px_  | -  |
| --nut-price-decimal-medium-size| _14px_  | -  |
| --nut-price-symbol-small-size| _10px_  | -  |
| --nut-price-small-size| _12px_  | -  |
| --nut-price-decimal-small-size| _10px_  | -  |