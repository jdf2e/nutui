# Price 商品价格

### 介绍

用来对商品价格数值的小数点前后部分应用不同样式，还支持人民币符号、千位分隔符、设置小数点位数等功能。

### 安装

```js
import { createApp } from 'vue';
import { Price } from '@nutui/nutui-taro';

const app = createApp();
app.use(Price);
```

### 价格大小

支持 small、normal、large 三种尺寸，默认为 normal。

> demo: price size exhibition

### 小数点位数

`decimal-digits` 可设置小数点位数，默认展示 2 位小数。

> demo: price decimal exhibition

### 划线价

> demo: price through exhibition

### 货币符号

`symbol` 可设置货币符号，默认为 `¥`。

> demo: price symbol exhibition

### 货币符号位置

`position` 可以调整货币符号位置。

> demo: price position exhibition

### 千位分隔

`thousands` 可以按照千分号形式显示。

> demo: price thousands exhibition

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| price | 价格数量 | number \| string | `0` |
| need-symbol | 是否需要加上 `symbol` 符号 | boolean | `true` |
| symbol | 符号类型 | string | `&yen;` |
| decimal-digits | 小数位位数 | number | `2` |
| thousands | 是否按照千分号形式显示 | boolean | `false` |
| position | 符号显示在价格前或者后，`before`、`after` | string | `before` |
| size | 价格尺寸，`small`、`normal`、`large` | string | `normal` |
| strike-through`v4.0.3` | 是否展示划线价 | Boolean | false |

### 类型定义 4.3.2

组件导出以下类型定义：

```js
import type {
  PriceSize,
  PricePosition,
  PriceProps,
  PriceInstance
} from '@nutui/nutui-taro';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-price-symbol-big-size | _18px_ |
| --nut-price-big-size | _24px_ |
| --nut-price-decimal-big-size | _18px_ |
| --nut-price-symbol-medium-size | _14px_ |
| --nut-price-medium-size | _16px_ |
| --nut-price-decimal-medium-size | _14px_ |
| --nut-price-symbol-small-size | _10px_ |
| --nut-price-small-size | _12px_ |
| --nut-price-decimal-small-size | _10px_ |
