# OverLay

### Intro

Create a mask layer, which is usually used to prevent users from doing other operations

### Install


```javascript
import { createApp } from 'vue';
// vue
import { OverLay } from '@nutui/nutui';
// taro
import { OverLay } from '@nutui/nutui-taro';

const app = createApp();
app.use(OverLay);
```


### Basic Usage

:::demo

```html
<template>
  <nut-button type="primary" @click="state.show = true">Show mask layer</nut-button>
  <nut-overlay v-model:visible="state.show" :z-index="2000"></nut-overlay>
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        show: false,
      });
      return {
        state
      };
    }
  };
</script>
```

:::

### Mask style

It can be set through `overlay-style`

:::demo

```html
<template>
  <nut-button type="primary" @click="state.show = true">Show mask layer</nut-button>
  <nut-overlay v-model:visible="state.show" :z-index="2000" :overlay-style="state.overlayStyle"></nut-overlay>
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        show: false,
        overlayStyle: {
          backgroundColor: 'rgba(0, 0, 0, .2)'
        }
      });
      return {
        state
      };
    }
  };
</script>
```

:::

### Nested content

:::demo

```html
<template>
  <nut-button type="success" @click="state.show2 = true">Nested content</nut-button>
  <nut-overlay v-model:visible="state.show2" :z-index="2000">
  <div class="wrapper">
    <div class="content">Here is the text</div>
  </div>
</nut-overlay>
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        show2: false,
      });
      return {
        state
      };
    }
  };
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  .content {
    display: flex;
    width: 150px;
    height: 150px;
    background: #fff;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    color: red;
  }
}
</style>
```

:::

## API

### Props

| Attribute | Description | Type   | Default |
| ---------------------- | ---------------- | -------------- | ------ |
| v-model:visible                   | Whether the current component is displayed | Boolean        | `false`  |
| z-index                | Mask level         | String, Number | `2000`   |
| duration               | Animation duration, Unit second | String, Number | `0.3`    |
| overlay-class          | Custom mask classname   | String         | -      |
| overlay-style          | Custom mask styles   | CSSProperties  | -      |
| lock-scroll            | Whether the background is locked(`MiniProgram not supported`)     | Boolean        | `true`  |
| close-on-click-overlay | Click to close the mask | Boolean        | `true`   |

### Events

| Event | Description                  | Arguments   |
| ------ | ---------- | ------------ |
| click  | Triggered when clicked | event: Event |
