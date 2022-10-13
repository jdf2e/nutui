# CircleProgress

### Intro

Circular progress bar component,

### Install

``` javascript
import { createApp } from 'vue';
//vue
import { CircleProgress } from '@nutui/nutui';
//taro
import { CircleProgress } from '@nutui/nutui-taro';

const app = createApp();
app.use(CircleProgress);

```
### Basic Usage
:::demo
```html
<template>
    <nut-cell>
     <nut-circleprogress :progress="20"> </nut-circleprogress>
   </nut-cell>
</template>
```
:::

### Custom Width
:::demo
```html
<template>
    <nut-cell>
     <nut-circleprogress :progress="50" strokeWidth="10"> </nut-circleprogress>
   </nut-cell>
</template>
```
:::


### Gradient
:::demo
```html
<template>
    <nut-cell>
    <nut-circleprogress :progress="50" color="red" />
      <nut-circleprogress :progress="100" :color="gradientColor" />
   </nut-cell>
</template>
<script>
import { ref } from 'vue';
export default{
  setup() {
     const gradientColor = {
      '0%': '#FF5E5E',
      '100%': '#FFA062'
    };
    return {
      gradientColor
    };
  }
}
</script>
```
:::

### Custom Size
:::demo
```html
<template>
    <nut-cell>
     <nut-circleprogress :progress="50" radius="60"></nut-circleprogress>
    </nut-cell>
</template>
```
:::



### Custom content
:::demo
```html
<template>
    <nut-cell>
     <nut-circleprogress :progress="50" radius="60">content</nut-circleprogress>
    </nut-cell>
</template>
```
:::

### Dynamic Change
:::demo
```html
<template>
  <div>
     <nut-circleprogress :progress="percent"></nut-circleprogress>
  </div>
  <div>
    <nut-button type="primary" @click="setReduceVal">reduce</nut-button>
    <nut-button type="primary" @click="setAddVal">add</nut-button>
  </div>
</template>
<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    const percent = ref(30);
    const setAddVal = () => {
      if (percent.value >= 100) {
        return;
      }
      percent.value += 10;
    };
    const setReduceVal = () => {
      if (percent.value - 10 <= 0) {
        percent.value = 0;
        return;
      }
      percent.value -= 10;
    };
    return {
      setAddVal,
      setReduceVal,
      percent
    };
  }
}
</script>
```
:::

## API
### Props

| Attribute | Description | Type | Default
|----- | ----- | ----- | -----
| progress | Progress Rate | Number,String | Required, no default value
| stroke-width | Stroke width | Number,String | 5
| radius | radius | Number,String | 50
| color | Progress color, passing object to render gradient | String , Object | '#fa2c19'
| path-color | Track Color| String | '#d9d9d9'
| stroke-linecap | Stroke linecap, can be set to square butt| String | 'round'
| clockwise| Whether to be clockwise| Boolean | true
### Slots

| Name | Description | 
|----- | ----- |
| default | Custom Content| 

