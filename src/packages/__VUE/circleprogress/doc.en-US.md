# CircleProgress

### Intro

Circular progress bar component,

### Install

``` javascript
import { createApp } from 'vue';
import { CircleProgress } from '@nutui/nutui';

const app = createApp();
app.use(CircleProgress);

```
### Basic Usage
:::demo
```html
<template>
    <nut-cell>
     <nut-circle-progress :progress="20"> </nut-circle-progress>
   </nut-cell>
</template>
```
:::

### Custom Width
:::demo
```html
<template>
    <nut-cell>
     <nut-circle-progress :progress="50" strokeWidth="10"> </nut-circle-progress>
   </nut-cell>
</template>
```
:::


### Gradient
:::demo
```html
<template>
    <nut-cell>
    <nut-circle-progress :progress="50" color="red" />
      <nut-circle-progress :progress="100" :color="gradientColor" />
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
     <nut-circle-progress :progress="50" radius="60"></nut-circle-progress>
    </nut-cell>
</template>
```
:::



### Custom content
:::demo
```html
<template>
    <nut-cell>
     <nut-circle-progress :progress="50" radius="60">content</nut-circle-progress>
    </nut-cell>
</template>
```
:::

### Dynamic Change
:::demo
```html
<template>
  <div>
     <nut-circle-progress :progress="percent"></nut-circle-progress>
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

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --------------------------------------- | -------------------------- | ---- |
| --nut-circleprogress-primary-color| _var(--nut-primary-color)_ | -  |
| --nut-circleprogress-path-color| _#e5e9f2_ | -  |
| --nut-circleprogress-text-color| _#000000_ | -  |
| --nut-circleprogress-text-size| _var(--nut-font-size-3)_ | -  |

