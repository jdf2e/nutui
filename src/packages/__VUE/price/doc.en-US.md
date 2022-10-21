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


### Support three sizes：small、normal、large

:::demo

``` html
<template>
    <nut-price :price="0" size="small" :need-symbol="false" :thousands="true" />
    <nut-price :price="0" size="normal" :need-symbol="false" :thousands="true" />
    <nut-price :price="0" size="large" :need-symbol="false" :thousands="true" />
</template>
```

:::

### No decimals

:::demo

``` html
<template>
    <nut-price :price="8888" decimal-digits="0" size="normal" :need-symbol="true" :thousands="true" />
</template>
```

:::

### With RMB symbol, no thousands separator

:::demo

``` html

<template>
    <nut-price :price="10010.01" :need-symbol="true" :thousands="false" />
</template>
```
:::
### With RMB symbol, separated by thousands, keep three decimal places

:::demo

``` html
<template>
    <nut-price :price="15213.1221" :decimal-digits="3" :need-symbol="true" :thousands="true" />
</template>
```

:::

### Adjust the symbol position

:::demo

``` html
<template>
    <nut-price :price="8888.01" position="after" symbol="元" size="normal" :need-symbol="true" :thousands="true" />
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
| size           | Size，`large`、`normal`、`small`                            | String           | large |