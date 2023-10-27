# Rate

### Intro

Use for quick rating actions, or to showcase reviews.

### Install

```js
import { createApp } from 'vue';
import { Rate } from '@nutui/nutui';

const app = createApp();
app.use(Rate);
```

### Basic Usage

:::demo

```vue
<template>
  <nut-rate v-model="value" />
</template>
<script setup>
import { ref } from 'vue';
const value = ref(3);
</script>
```

:::

### half star

:::demo

```vue
<template>
  <nut-rate allow-half v-model="value" />
</template>
<script setup>
import { ref } from 'vue';
const value = ref(3.5);
</script>
```

:::

### Custom icon

:::demo

```vue
<template>
  <nut-rate :custom-icon="HeartFill" v-model="value" />
</template>
<script setup>
import { ref } from 'vue';
import { HeartFill } from '@nutui/icons-vue';
const value = ref(3);
</script>
```

:::

### Custom Quantity

:::demo

```vue
<template>
  <nut-rate count="10" v-model="value" />
</template>
<script setup>
import { ref } from 'vue';
const value = ref(3);
</script>
```

:::

### Custom Color

:::demo

```vue
<template>
  <nut-rate v-model="value" active-color="#FFC800" />
</template>
<script setup>
import { ref } from 'vue';
const value = ref(3);
</script>
```

:::

### Disabled state

:::demo

```vue
<template>
  <nut-rate disabled v-model="value" />
</template>
<script setup>
import { ref } from 'vue';
const value = ref(3);
</script>
```

:::

### read-only status

:::demo

```vue
<template>
  <nut-rate v-model="value" readonly />
</template>
<script setup>
import { ref } from 'vue';
const value = ref(3);
</script>
```

:::

### Binding events

:::demo

```vue
<template>
  <nut-rate v-model="value" @change="onChange" />
</template>
<script setup>
import { ref } from 'vue';
const value = ref(3);
const onChange = (val) => {
  console.log(val);
};
</script>
```

:::

### Custom Size 35px

:::demo

```vue
<template>
  <nut-rate v-model="value" size="35" />
</template>
<script setup>
import { ref } from 'vue';
const value = ref(3);
</script>
```

:::

## API

### Props

| Attribute    | Description                                                                                     | Type             | Default     |
| ------------ | ----------------------------------------------------------------------------------------------- | ---------------- | ----------- |
| v-model      | The current number of stars, you can use v-model to bind data in both directions                | number \| string | -           |
| count        | Total number \| string of stars                                                                 | number \| string | `5`         |
| active-color | Icon selection color                                                                            | string           | `#fa200c`   |
| void-color   | Icon unselected color                                                                           | string           | `#ccc`      |
| allow-half   | half star                                                                                       | boolean          | `false`     |
| readonly     | read-only                                                                                       | boolean          | `false`     |
| disabled     | whether to disable                                                                              | boolean          | `false`     |
| spacing      | spacing                                                                                         | number \| string | `20`        |
| touchable    | Whether to allow select rate by touch gesture                                                   | boolean          | `true`      |
| size         | `Icon` custom size , eg `20px` `2em` `2rem`                                                     | number \| string | -           |
| custom-icon  | custom `Icon`, set [VNode](https://vuejs.org/guide/extras/render-function.html#creating-vnodes) | VNode \| h       | `StarFillN` |

### Events

| Event  | Description                                                | Arguments |
| ------ | ---------------------------------------------------------- | --------- |
| change | An event that fires whenever the current score is modified | val       |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                       | Default Value              |
| -------------------------- | -------------------------- |
| --nut-rate-icon-color      | _var(--nut-primary-color)_ |
| --nut-rate-icon-void-color | _var(--nut-disable-color)_ |
