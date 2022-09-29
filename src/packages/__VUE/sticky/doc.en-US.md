# Sticky

### Intro

The effect is the same as `position: sticky` in `CSS`, which can be used for compatibility with low-end browsers

### Install

```javascript

import { createApp } from 'vue';
// vue
import { Sticky } from '@nutui/nutui';
// taro
import { Sticky } from '@nutui/nutui-taro';

const app = createApp();
app.use(Sticky);

```

### Basic Usage

:::demo

```html
<template>
  <nut-cell>
    <nut-sticky top="57">
      <nut-button type="primary">Ceiling button</nut-button>
    </nut-sticky>
  </nut-cell>
</template>
<style lang="scss">
#app{
  height: auto !important;
}
</style>
```

:::

### Ceiling distance

:::demo

```html
<template>
  <nut-cell>
    <nut-sticky top="120">
      <nut-button type="primary">Ceiling distance 120px</nut-button>
    </nut-sticky>
  </nut-cell>
</template>
<style lang="scss">
#app{
  height: auto !important;
}
</style>
```

:::

### Specify container

:::demo

```html
<template>
  <div class="sticky-container" ref="container">
    <nut-sticky top="100" :container="container" z-index="1">
      <nut-button type="info">Specify container</nut-button>
    </nut-sticky>
  </div>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const container = ref(null);
      return {
        container
      };
    }
  };
</script>
<style lang="scss" scoped>
.sticky-container{
  width: 100%;
  height: 300px;
  background-color: #fff;
}
</style>
<style lang="scss">
#app{
  height: auto !important;
}
</style>
```

:::

### Suction distance

:::demo

```html
<template>
  <nut-cell>
    <nut-sticky bottom="100" position="bottom">
      <nut-button type="primary">Suction distance 100px</nut-button>
    </nut-sticky>
  </nut-cell>
</template>
<style lang="scss">
#app{
  height: auto !important;
}
</style>
```

:::

## API

### Props

| Attribute    | Description                      | Type   | Default          |
|--------------|----------------------------------|--------|------------------|
| position         | Adsorption position（`top`、`bottom`）               | String | `top`                |
| top         | Ceiling distance               | Number | `0`                |
| bottom         | Suction distance               | Number | `0`                |
| container         | The 'HTML' node of the container needs to specify the `id` at the same time in the miniProgram        | Element | -                |
| z-index         | Level of adsorption               | Number | `2000`               |

### Events

| Event | Description                  | Arguments   |
|--------|----------------|--------------|
| change  | Triggered when the adsorption state changes | `val: Boolean` |
| scroll  | Triggered when scrolling | `{ top: Number, fixed: Boolean }` |
