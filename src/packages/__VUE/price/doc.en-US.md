# Price

### Intro

It is used to apply different styles to the parts before and after the decimal point of the commodity price value, and also supports functions such as the RMB symbol, thousands separator, and setting the number of decimal points.

### Install

```javascript
import { createApp } from 'vue';
import { Price } from '@nutui/nutui';

const app = createApp();
app.use(Price);

```


### Price size

Three sizes are supported: small, normal, and large, and the default is normal.

:::demo

``` html
<template>
    <nut-price :price="0" size="small" :need-symbol="false" />
    <nut-price :price="0" size="normal" :need-symbol="false" />
    <nut-price :price="0" size="large" :need-symbol="false" />
</template>
```

:::

### Decimals places

`decimal-digits` can set the number of decimal places, and 2 decimal places are displayed by default.

:::demo

``` html
<template>
    <nut-price :price="8888" :decimal-digits="0" />
</template>
```

:::

### Currency symbol

`symbol` can set the currency symbol, the default is `¥`.

:::demo

``` html

<template>
    <nut-price :price="10010.01" symbol="¥" />
</template>
```
:::
### Currency symbol position

`position` can adjust the currency symbol position.

:::demo

``` html
<template>
    <nut-price :price="8888.01" position="after" symbol="元" />
</template>
```

:::

### Thousands separator

`thousands` can be displayed as thousands.

:::demo

``` html
<template>
    <nut-price :price="15213.1221" :decimal-digits="3" :thousands="true" />
</template>
```

:::
## API
### Props

| Attribute      | Description                                                | Type            | Default |
|----------------|------------------------------------------------------------|------------------|--------|
| price          | Price                                                      | number ｜ string | 0       |
| need-symbol    | Add symbol                                                 | boolean          | true   |
| symbol         | Symbol type                                                | string           | &yen;  |
| decimal-digits | Decimal digits                                             | number | 2      |
| thousands      | Thousands separation                                       | boolean          | false  |
| position       | The symbol appear before or after the price，`before`、`after` | string           | before |
| size           | Size，`small`、`normal`、`large`                | string           | large |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | 
| --------------------------------------- | -------------------------- | 
| --nut-price-symbol-big-size| _18px_  |
| --nut-price-big-size| _24px_  |
| --nut-price-decimal-big-size| _18px_  |
| --nut-price-symbol-medium-size| _14px_  |
| --nut-price-medium-size| _16px_  |
| --nut-price-decimal-medium-size| _14px_  |
| --nut-price-symbol-small-size| _10px_  |
| --nut-price-small-size| _12px_  |
| --nut-price-decimal-small-size| _10px_  |