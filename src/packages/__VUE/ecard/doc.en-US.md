# Ecard

### Intro

Virtual e-card selection

### Install

```javascript

import { createApp } from 'vue';
// vue
import { Ecard, InputNumber } from '@nutui/nutui';
// taro
import { Ecard, InputNumber } from '@nutui/nutui-taro';

const app = createApp();
app.use(Ecard);
app.use(InputNumber);

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
| modelValue        | Price                | Number | 0            |
| choose-text         | Main Title               | String |  Select   |
| other-value-text        | Other Text   | String |         Other Value        |
| data-list         | Ecard List| Array |        []        |
| card-amount-min| Other Min Value     | Number | 1|
| card-amount-max        | Other Max Value                      | Number | 9999            |
| card-buy-min        | Choose Min Value                      | Number | 9999            |
| card-buy-max        | Choose Max Value                      | Number | 9999            |
| placeholder        | Placeholder                     | String |    Placeholder       |
| suffix        | Symbol mark                      | String | ¥            |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| change  | Trigger event when Ecard is clicker | value |
| input-change  | Triggered when the value changes |value |
| change-step  | Triggered when the steps value changes | value，modelValue |
