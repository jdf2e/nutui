# Ecard 电子卡

### 介绍

虚拟电子卡选择

### 安装

```javascript

import { createApp } from 'vue';
import { Ecard } from '@nutui/nutui-taro';

const app = createApp();
app.use(Ecard);
```

### 基础用法

:::demo

```html
<template>
  <nut-ecard
    v-model="money"
    @input-change="inputChange"
    @change="change"
    @change-step="changeStep"
    :data-list="dataList"
  ></nut-ecard>
</template>
<script>
  import {ref, reactive } from 'vue';
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

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| modelValue        | 购买电子卡所需价钱                    | number | `0`            |
| choose-text         | 选择面值文案               | string |   `请选择电子卡面值`              |
| other-value-text        | 其他面值文案   | string |         `其他面值`        |
| data-list         | 电子卡面值列表| Array |        `DataList[]`        |
| card-amount-min| 其它面值最小值     | number | `1` |
| card-amount-max        | 其他面值最大值                      | number | `9999`            |
| card-buy-min        | 购买数量最小值                      | number | `1`            |
| card-buy-max        | 购买数量最大值                      | number | `9999`            |
| placeholder        | 其他面值默认提示语                    | string |    `请输入1-5000整数`         |
| suffix        | 符号标示                      | string | `¥`            |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| change  | 选中电子卡事件 | 点击的数据 |
| input-change  | 更改 `input` 框触发事件 | 输入的数据 |
| change-step  | 更改数量时触发 | 当前数量，当前选中的卡面值 |

### DataList 数据结构
| 键名	 | 说明           | 类型     |
|--------|----------------|--------------|
| price  | 每张电子卡价格 | string |
## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                                    | 默认值                     | 描述 |
| --------------------------------------- | -------------------------- | ---- |
| --nut-ecard-bg-color                    | _#f0f2f5_        | -    |

