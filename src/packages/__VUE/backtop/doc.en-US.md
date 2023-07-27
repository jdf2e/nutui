# Backtop

### Intro

Provides a quick return to the top function for long pages.

### Install

```js
import { createApp } from 'vue';
import { Backtop } from '@nutui/nutui';

const app = createApp();
app.use(Backtop);
```

### Basic Usage

:::demo

```vue
<template>
  <div class="demo" id="elId">
    <div v-for="(item, index) in 24" class="test">{{ index }}</div>
    <nut-backtop @click="handleClick"></nut-backtop>
  </div>
</template>
<script setup>
const handleClick = () => {
  console.log('back to top');
};
</script>
<style>
.test {
  height: 80px;
  display: flex;
  align-items: center;
  border: 1px solid gray;
}
</style>
```

:::

### Distance

:::demo

```vue
<template>
  <div class="demo" id="elId">
    <div v-for="(item, index) in 24" class="test">{{ index }}</div>
    <nut-backtop :distance="200"></nut-backtop>
  </div>
</template>

<style>
.test {
  height: 80px;
  display: flex;
  align-items: center;
  border: 1px solid gray;
}
</style>
```

:::

### Custom Style

:::demo

```vue
<template>
  <div class="demo" id="elId">
    <div v-for="(item, index) in 24" class="test">{{ index }}</div>
    <nut-backtop :distance="100" :bottom="90"><div>无</div></nut-backtop>
  </div>
</template>

<style>
.test {
  height: 80px;
  display: flex;
  align-items: center;
  border: 1px solid gray;
}
</style>
```

:::

### API

### Props

| Attribute    | Description                                                                | Type    | Default |
| ------------ | -------------------------------------------------------------------------- | ------- | ------- |
| el-id        | Get the parent element of the listening element                            | string  | -       |
| bottom       | Distance from bottom of page                                               | number  | `20`    |
| right        | Distance from the right side of the page                                   | number  | `10`    |
| distance     | How high to scroll the page vertically                                     | number  | `200`   |
| z-index      | Set the component z-index                                                  | number  | `10`    |
| is-animation | Whether there is animation, mutually exclusive with the duration parameter | boolean | `true`  |
| duration     | Set animation duration                                                     | number  | `1000`  |

### Events

| Event | Description                       | Arguments           |
| ----- | --------------------------------- | ------------------- |
| click | Emitted when component is clicked | `event: MouseEvent` |

### Slots

| Name    | Description                                       |
| ------- | ------------------------------------------------- |
| default | The default slot is used to customize the content |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).
| Name | Default Value |
| --------------------------------------- | -------------------------- |
| --nut-backtop-border-color | _#e0e0e0_ |
