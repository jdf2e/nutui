# Barrage bullet chat

###  Intro

It is used for the rotation display of words and phrases, which is suitable for video or other similar needs.

### Install

``` javascript
import { createApp } from 'vue';
//vue
import { Barrage } from '@nutui/nutui';
//taro
import { Barrage } from '@nutui/nutui-taro';

const app = createApp();
app.use(Barrage);

```


### Basic usage

`Icon's' name 'attribute supports the incoming icon name or picture link.
:::demo

```html
<template>
  <nut-barrage ref="danmu" :danmu="list"></nut-barrage>
  <div class="test">
    <button @click="addDanmu" class="add nut-button--primary">随机添加</button>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  props: {},
  setup() {
    const inputVal = ref('');
    const danmu = ref(null);
    let list = ref(['画美不看', '不明觉厉', '喜大普奔', '男默女泪', '累觉不爱', '爷青结-']);
    function addDanmu() {
      let n = Math.random();
      danmu.value.add('随机——' + String(n).substr(2, 10));
    }
    return {
      inputVal,
      danmu,
      list,
      addDanmu
    };
  }
};
</script>
```

:::

### slot usage

> Using the slot requires putting the scrolling content inside the html tag, the applet environment is not currently supported

:::demo

```html
<template>
  <nut-barrage>
    <span>aaa</span>
    <span>bbb</span>
    <span>ccc</span>
    <span>ddd</span>
  </nut-barrage>
</template>
```

:::


## API

### Props

| Attribute | Description | Type   | Default |
|--------------|----------------------------------|--------|------------------|
| danmu         | Barrage list data               | Array | []              |
| frequency        | The time interval between the occurrence of each barrage in the visual area    | Number | 500               |
| speeds         | Rolling time of each barrage | Number |  2000               |
| rows  | The number of bullet screen lines is displayed in several lines    | Number | 1 |
| top  | Vertical distance of barrage    | Number | 10 |
| loop  | Loop play     | Boolean | true |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| add  | Add data | - |
