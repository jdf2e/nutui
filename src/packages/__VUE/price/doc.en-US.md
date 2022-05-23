# Price

### Intro

It is used to apply different styles to the parts before and after the decimal point of commodity price values. It also supports the functions of RMB symbol, thousand separator, setting the number of decimal places and so on.

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

### No decimal

:::demo

``` html
<template>
    <nut-price :price="8888" decimal-digits="0" size="normal" :need-symbol="true" :thousands="true" />
</template>
```

:::

### There is a RMB symbol without thousands separation

:::demo

``` html

<template>
    <nut-price :price="10010.01" :need-symbol="true" :thousands="false" />
</template>
```
:::
### There are RMB symbols, separated by thousands, and three decimal places are reserved

:::demo

``` html
<template>
    <nut-price :price="15213.1221" :decimal-digits="3" :need-symbol="true" :thousands="true" />
</template>
```

:::

### Adjust symbol position

:::demo

``` html
<template>
    <nut-price :price="8888.01" position="after" symbol="元" size="normal" :need-symbol="true" :thousands="true" />
</template>
```

:::
### Asynchronous random change

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

### Prop

| Attribute      | Description                                                | Type            | Default |
|----------------|------------------------------------------------------------|------------------|--------|
| price          | Price                                                      | Number ｜ String | 0       |
| need-symbol    | Add symbol                                                 | Boolean          | true   |
| symbol         | Symbol type                                                | String           | &yen;  |
| decimal-digits | Decimal digits                                             | Number ｜ String | 2      |
| thousands      | Thousands separation                                       | Boolean          | false  |
| position       | The symbol appears before or after price，`before`、`after` | String           | before |
| size           | Size，`large`、`normal`、`small`                            | String           | large |