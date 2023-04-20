#  Swipe

## Intro

Used for cell components that can slide left and right to display operation buttons.

## Install

```javascript
import { createApp } from 'vue'
import { Swipe } from '@nutui/nutui'

const app = createApp()
app.use(Swipe)
```

## Demo

### Basic usage

:::demo
```html
<template>
  <nut-swipe>
    <nut-cell round-radius="0" title="Swipe left to delete" />
    <template #right>
      <nut-button shape="square" style="height:100%" type="danger">Delelte</nut-button>
    </template>
  </nut-swipe>
</template>
```
:::


### Disable swipe

:::demo
```html
<template>
  <nut-swipe disabled>
    <nut-cell round-radius="0" title="Disable swipe" />
    <template #right>
      <nut-button shape="square" style="height:100%" type="danger">Delelte</nut-button>
    </template>
  </nut-swipe>
</template>
```
:::

### Swipe left and right

:::demo
```html
<template>
  <nut-swipe>
    <template #left>
      <nut-button shape="square" style="height:100%" type="success">Select</nut-button>
    </template>
    <nut-cell round-radius="0" title="You can swipe left and right" />
    <template #right>
      <nut-button shape="square" style="height:100%" type="danger">Delelte</nut-button>
      <nut-button shape="square" style="height:100%" type="info">Collect</nut-button>
    </template>
  </nut-swipe>
</template>
```
:::

### Async control swipe

:::demo
```html
<template>
  <nut-swipe ref="refSwipe" @open="open" @close="close">
    <nut-cell title="Async on and off">
    <template v-slot:link>
      <nut-switch v-model="checked" @change="changSwitch" active-text="on" inactive-text="off" />
    </template>
    </nut-cell>
    <template #right>
      <nut-button shape="square" style="height:100%" type="danger">Delelte</nut-button>
    </template>
  </nut-swipe>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    const refSwipe = ref<HTMLElement>();
    const checked = ref(false);
    const changSwitch = (value: boolean) => {
      if (value) {
        refSwipe.value?.open('left');
      } else {
        refSwipe.value?.close();
      }
    };
    const open = (obj: any) => {
      console.log(obj);
    };
    const close = (obj: any) => {
      console.log(obj);
    };
    return { checked, changSwitch, refSwipe, open, close };
  }
}
</script>
```
:::

### Custom

:::demo
```html
<template>
  <nut-swipe>
    <template #left>
      <nut-button shape="square" style="height:100%" type="success">Select</nut-button>
    </template>
    <nut-cell title="product description">
    <template v-slot:link>
      <nut-input-number v-model="number" />
    </template>
    </nut-cell>
    <template #right>
      <nut-button shape="square" style="height:100%" type="danger">Delelte</nut-button>
      <nut-button shape="square" style="height:100%" type="info">Collect</nut-button>
    </template>
  </nut-swipe>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    const number = ref(0);
    return { number };
  }
}
</script>
```
:::

## Swipe

### Props

| Attribute                   | Description                                    | Type    | Default |
| --------------------------- | ---------------------------------------------- | ------- | ------- |
| name                        | identifies                                     | string  | -       |
| disabled                    | Whether to disabled swipe                      | string  | `false` |
| touch-move-prevent-default  | Whether to stop touchmove event preventdefault | boolean | `false` |
| touch-move-stop-propagation | Whether to stop touchmove event propagation    | boolean | `false` |

### Events

| Event | Description                                          | Arguments               |
| ----- | ---------------------------------------------------- | ----------------------- |
| open  | Emitted when Swipe is opened, swipe left/swipe right | `name, position: 'left' | 'right' ` |
| close | Emitted when Swipe is closed, swipe left/swipe right | `name, position: 'left' | 'right' ` |

### Slots
| Name    | Description    |
| ------- | -------------- |
| left    | Custom left    |
| default | Custom default |
| right   | Custom right   |

### Methods

Use [ref](https://vuejs.org/guide/essentials/template-refs.html) to get Swipe instance and call instance methods.

| Name  | Description                         | Arguments               |
| ----- | ----------------------------------- | ----------------------- |
| open  | open swipe, swipe left/swipe right  | `name, position: 'left' | 'right' ` |
| close | close swipe, swipe left/swipe right | `name, position: 'left' | 'right' ` |