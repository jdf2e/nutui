# Ecard

### Intro

Virtual e-card selection

### Install

```javascript

import { createApp } from 'vue';
import { Ecard } from '@nutui/nutui';

const app = createApp();
app.use(Ecard);
```

### Basic

:::demo

```html
<template>
  <nut-ecard
    v-model="money"
    @inputChange="inputChange"
    @change="change"
    @changeStep="changeStep"
    :data-list="dataList"
  ></nut-ecard>
</template>
<script>
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const dataList=reactive([
        {
          price:10
        },
        {
          price:20
        },
        {
          price:30
        },
        {
          price:40
        },
      ])
    const money = ref(0);
    const inputChange = (val) => {
      money.value = val;
    };
    const change = (item) => {
      money.value = item.price;
    };
    const changeStep = (num,price) => {
      const val = price * num;
      money.value = val;
    };
      return {
        dataList,
        inputChange,
        change,
        money,
        changeStep
      };
    }
  };
</script>
```

:::

## API

### Props

| Attribute | Description | Type   | Default 
|--------------|----------------------------------|--------|------------------|
| modelValue        | Price                | number | `0`            |
| choose-text         | Main Title               | string |  `Select`   |
| other-value-text        | Other Text   | string |         `Other Value`        |
| data-list         | Ecard List| Array |        `[]`        |
| card-amount-min| Other Min Value     | number | `1`|
| card-amount-max        | Other Max Value                      | number | `9999`            |
| card-buy-min        | Choose Min Value                      | number | `9999`            |
| card-buy-max        | Choose Max Value                      | number | `9999`            |
| placeholder        | Placeholder                     | string |    `Placeholder`       |
| suffix        | Symbol mark                      | string | `¥`            |

### Events

| Event | Description           | Arguments     |
|--------|----------------|--------------|
| change  | Trigger event when Ecard is clicker | `value` |
| input-change  | Triggered when the value changes |`value` |
| change-step  | Triggered when the steps value changes | `value，modelValue` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value |
| --------------------------------------- | -------------------------- |
| --nut-ecard-bg-color                    | _#f0f2f5_        |

