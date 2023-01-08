# Sticky

### Intro

The effect is the same as `position: sticky` in `CSS`, which can be used for compatibility with low-end browsers

### Install

```javascript

import { createApp } from 'vue';
import { Sticky } from '@nutui/nutui';

const app = createApp();
app.use(Sticky);

```

### Basic Usage

:::demo

```html
<template>
    <div class="demo">
        <nut-sticky top="57">
            <nut-button type="primary">Ceiling button</nut-button>
        </nut-sticky>
    </div>
</template>
<style lang="scss">
    .demo {
        height: 200vh !important;
    }
</style>
```

:::

### Ceiling distance

:::demo

```html
<template>
    <div class="demo">
        <nut-sticky top="120">
            <nut-button type="primary">Ceiling button distance 120px</nut-button>
        </nut-sticky>
    </div>
</template>
<style lang="scss">
  .demo {
      height: 200vh !important;
  }
</style>
```

:::

### Specify container

:::demo

```html
<template>
  <div class="demo">
      <div class="sticky-container" ref="container">
      <nut-sticky top="20" :container="container" z-index="1">
          <nut-button type="info">Specify Container</nut-button>
      </nut-sticky>
      </div>
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
<style lang="scss">
.demo{
  height: 200vh !important;
}
.sticky-container{
  width: 100%;
  height: 300px;
  background-color: rgb(98, 161, 167);
}
</style>
```

:::

### Suction distance

:::demo

```html
<template>
  <div class="demo">
        <div class="container"></div>
        <nut-sticky bottom="100" position="bottom">
            <nut-button type="primary">Suction distance 100px</nut-button>
        </nut-sticky>
    </div>
</template>
<style lang="scss">
.demo{
    height: 200vh !important;
}
.container{
    height: 800px;
    width: 100%;
}
</style>
```

:::

## API

### Props

| Attribute    | Description                      | Type   | Default          |
|--------------|----------------------------------|--------|------------------|
| position         | Adsorption position（`top`、`bottom`）               | string | `top`                |
| top         | Ceiling distance               | number | `0`                |
| bottom        | Suction distance               | number | `0`                |
| container         | The 'HTML' node of the container        | Element | -                |
| z-index         | Level of adsorption               | number | `2000`               |

### Events

| Event | Description                  | Arguments   |
|--------|----------------|--------------|
| change  | Triggered when the adsorption state changes | `val: Boolean` |
| scroll | Triggered when scrolling | `{ top: Number, fixed: Boolean }` |
