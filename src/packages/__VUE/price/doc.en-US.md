# Price

### Intro

It is used to apply different styles to the parts before and after the decimal point of the commodity price value, and also supports functions such as the RMB symbol, thousands separator, and setting the number of decimal points.

### Install

```js
import { createApp } from 'vue'
import { Price } from '@nutui/nutui'

const app = createApp()
app.use(Price)
```

### Size

size: `small`, `normal`, `large`

> demo: price size

### Decimals places

`decimal-digits` can set the number of decimal places, and 2 decimal places are displayed by default.

> demo: price decimal

### Strike Through

> demo: price through

### Currency symbol

`symbol` can set the currency symbol, the default is `¥`.

> demo: price symbol

### Currency symbol position

`position` can adjust the currency symbol position.

> demo: price position

### Thousands separator

`thousands` can be displayed as thousands.

> demo: price thousands

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| price | Price | number \| string | `0` |
| need-symbol | Add symbol | boolean | `true` |
| symbol | Symbol type | string | `&yen;` |
| decimal-digits | Decimal digits | number | `2` |
| thousands | Thousands separation | boolean | `false` |
| position | The symbol appear before or after the price，`before`、`after` | string | `before` |
| size | Size，`small`、`normal`、`large` | string | `normal` |
| strike-through`v4.0.3` | strike-through | Boolean | false |

### Types v4.3.2

The component exports the following type definitions:

```js
import type {
  PriceSize,
  PricePosition,
  PriceProps,
  PriceInstance
} from '@nutui/nutui';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
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
