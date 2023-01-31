# Price

### Intro

It is used to apply different styles to the parts before and after the decimal point of the commodity price value, and also supports functions such as the RMB symbol, thousands separator, and setting the number of decimal points.

### Install

```javascript
import { createApp } from 'vue';
//vue
import { Price } from '@nutui/nutui';
//taro
import { Price } from '@nutui/nutui-taro';

const app = createApp();
app.use(Price);

```


### Price size

Three sizes are supported: small, normal, and large, and the default is large.

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
### Strike Through

:::demo

``` html
<template>
    <nut-price :price="8888" decimal-digits="0" size="normal" :need-symbol="true" :thousands="true" strike-through />
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
### Asynchronous random changes

:::demo

``` html
<template>
    <nut-price :price="price" :decimal-digits="3" :need-symbol="true" :thousands="true" />
</template>


<script lang="ts">
    import { ref } from 'vue';
    export default {
        setup() {
            const price = ref(0);
            setInterval(() => {
                price.value = Math.random()*10000000;
            }, 1000);
            return {
                price
            };
        }
    }
</script>
```
:::
## API
### Props

| Attribute      | Description                                                | Type            | Default |
|----------------|------------------------------------------------------------|------------------|--------|
| price          | Price                                                      | Number ｜ String | 0       |
| need-symbol    | Add symbol                                                 | Boolean          | true   |
| symbol         | Symbol type                                                | String           | &yen;  |
| decimal-digits | Decimal digits                                             | Number ｜ String | 2      |
| thousands      | Thousands separation                                       | Boolean          | false  |
| position       | The symbol appear before or after the price，`before`、`after` | String           | before |
| size           | Size，`small`、`normal`、`large`                            | String           | large |
| strike-through`v3.3.1`          | strike-through    | Boolean           | false |