# Barrage bullet chat

###  Intro

It is used for the rotation display of words and phrases, which is suitable for video or other similar needs.

### Install

``` javascript
import { createApp } from 'vue';
import { Barrage } from '@nutui/nutui';

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
    <button @click="addDanmu" class="add nut-button--primary">add randomly</button>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  props: {},
  setup() {
    const inputVal = ref('');
    const danmu = ref();
    let list = ref(['aaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'ffff']);
    function addDanmu() {
      let n = Math.random();
      danmu.value.add('randomly——' + String(n).substr(2, 10));
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

| Parameter | Description | Type | Default |
|--------------|---------------------------------- |-------|------------------|
| danmu | Danmaku list data | Array | `[]` |
| frequency | the time interval of each barrage in the visible area | number | `500` |
| speeds | scrolling time of each barrage | number | `5000` |
| rows | Number of bullet chatting lines, displayed in several lines | number | `3` |
| top | vertical distance of the barrage | number | `10` |
| loop | Whether to play in a loop | boolean | `true` |

### Events

| Event Name | Description | Callback Parameters |
|--------|----------------|--------------|
| add | add data(used via ref instance) | - |
