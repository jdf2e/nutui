# CircleProgress

### Intro

Circular progress bar component,

### Install

```js
import { createApp } from 'vue';
import { CircleProgress } from '@nutui/nutui';

const app = createApp();
app.use(CircleProgress);
```

### Basic Usage

:::demo

```vue
<template>
  <nut-circle-progress progress="20" />
</template>
```

:::

### Custom Width

:::demo

```vue
<template>
  <nut-circle-progress progress="50" strokeWidth="10" />
</template>
```

:::

### Gradient

:::demo

```vue
<template>
  <nut-circle-progress progress="50" color="red" />
  <nut-circle-progress progress="100" :color="gradientColor" />
</template>
<script setup>
const gradientColor = {
  '0%': '#FF5E5E',
  '100%': '#FFA062'
};
</script>
```

:::

### Custom Size

:::demo

```vue
<template>
  <nut-circle-progress progress="50" radius="60" />
</template>
```

:::

### Custom content

:::demo

```vue
<template>
  <nut-circle-progress progress="50" radius="60">content</nut-circle-progress>
</template>
```

:::

### Dynamic Change

:::demo

```vue
<template>
  <nut-circle-progress :progress="percent"></nut-circle-progress>
  <nut-button type="primary" @click="reduce">reduce</nut-button>
  <nut-button type="primary" @click="add">add</nut-button>
</template>
<script setup>
import { ref } from 'vue';
const percent = ref(30);
const add = () => {
  percent.value = Math.min(100, percent.value + 10);
};
const reduce = () => {
  percent.value = Math.max(0, percent.value - 10);
};
</script>
```

:::

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| progress | Progress Rate | number \| string | `0` |
| stroke-width | Stroke width | number \| string | `5` |
| radius | radius | number \| string | `50` |
| color | Progress color, passing object to render gradient | object \| string | `#fa2c19` |
| path-color | Track Color | string | `#d9d9d9` |
| stroke-linecap | Stroke linecap, can be set to square butt | String | `round` |
| clockwise | Whether to be clockwise | boolean | `true` |

### Slots

| Name | Description |
| --- | --- |
| default | Custom Content |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-circleprogress-primary-color | _var(--nut-primary-color)_ |
| --nut-circleprogress-path-color | _#e5e9f2_ |
| --nut-circleprogress-text-color | _#000000_ |
| --nut-circleprogress-text-size | _var(--nut-font-size-3)_ |
