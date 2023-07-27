# Swipe

## Intro

Used for cell components that can slide left and right to display operation buttons.

## Install

```js
import { createApp } from 'vue';
import { Swipe } from '@nutui/nutui';

const app = createApp();
app.use(Swipe);
```

## Demo

### Basic usage

:::demo

```vue
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

```vue
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

```vue
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

```vue
<template>
  <nut-switch v-model="checked" @change="changSwitch" />
  <nut-swipe ref="refSwipe">
    <nut-cell title="Async on and off"></nut-cell>
    <template #right>
      <nut-button shape="square" style="height:100%" type="danger">Delelte</nut-button>
    </template>
  </nut-swipe>
</template>
<script setup>
import { ref } from 'vue';
const refSwipe = ref();
const checked = ref(false);
const changSwitch = (value) => {
  if (value) {
    refSwipe.value?.open('left');
  } else {
    refSwipe.value?.close();
  }
};
</script>
```

:::

### Custom

:::demo

```vue
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
<script setup>
import { ref } from 'vue';
const number = ref(0);
</script>
```

:::

### Use SwipeGroup to make swipe exclusive

The prop `name` of Swipe is required.

:::demo

```vue
<template>
  <nut-swipe-group lock>
    <nut-swipe name="11">
      <nut-cell round-radius="0" title="Swipe left to delete" />
      <template #right>
        <nut-button shape="square" style="height: 100%" type="danger">delete</nut-button>
      </template>
    </nut-swipe>
    <nut-swipe name="22">
      <nut-cell round-radius="0" title="Swipe left to delete" />
      <template #right>
        <nut-button shape="square" style="height: 100%" type="danger">delete</nut-button>
      </template>
    </nut-swipe>
    <div>
      <nut-swipe name="33">
        <nut-cell round-radius="0" title="Swipe left to delete" />
        <template #right>
          <nut-button shape="square" style="height: 100%" type="danger">delete</nut-button>
        </template>
      </nut-swipe>
    </div>
  </nut-swipe-group>
</template>
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

| Event | Description                                          | Arguments                            |
| ----- | ---------------------------------------------------- | ------------------------------------ |
| open  | Emitted when Swipe is opened, swipe left/swipe right | `name, position: 'left' \| 'right' ` |
| close | Emitted when Swipe is closed, swipe left/swipe right | `name, position: 'left' \| 'right' ` |

### Slots

| Name    | Description    |
| ------- | -------------- |
| left    | Custom left    |
| default | Custom default |
| right   | Custom right   |

### Methods

Use [ref](https://vuejs.org/guide/essentials/template-refs.html) to get Swipe instance and call instance methods.

| Name  | Description                         | Arguments                                        |
| ----- | ----------------------------------- | ------------------------------------------------ |
| click | click event                         | `name, position: 'left' \| 'content' \| 'right'` |
| open  | open swipe, swipe left/swipe right  | `name, position: 'left' \| 'right' `             |
| close | close swipe, swipe left/swipe right | `name, position: 'left' \| 'right' `             |

## SwipeGroup

### Props

| Attribute    | Description                                  | Type    | Default |
| ------------ | -------------------------------------------- | ------- | ------- |
| lock`v4.1.1` | When a child Swipe opens, others will close. | boolean | `false` |
