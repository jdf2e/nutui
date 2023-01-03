# trendarrow 

### Intro

### Install

```javascript

import { createApp } from 'vue';
import { TrendArrow } from '@nutui/nutui';

const app = createApp();
app.use(TrendArrow);

```

### Basic Usage

:::demo

```html
<template>
  <nut-cell>
    <nut-trend-arrow :show-text-color="false" :rate="1"/>
    <nut-trend-arrow :show-text-color="false" :rate="-0.2535"/>
  </nut-cell>
</template>
```

:::

### Change text color

:::demo

```html
<template>
  <nut-cell>
    <nut-trend-arrow :rate="10.2365"/>
    <nut-trend-arrow :rate="-0.2535"/>
  </nut-cell>
</template>
```

:::
### Specify decimal places

:::demo

```html
<template>
  <nut-cell>
    <nut-trend-arrow :digits="0" :rate="10.2365"/>
    <nut-trend-arrow :digits="0" :rate="-0.2535"/>
  </nut-cell>
</template>
```

:::
### Arrow ahead

:::demo

```html
<template>
  <nut-cell>
    <nut-trend-arrow arrowLeft :rate="0.2535"/>
    <nut-trend-arrow arrowLeft :rate="-0.2535"/>
  </nut-cell>
</template>
```

:::
### Show sign

:::demo

```html
<template>
  <nut-cell>
    <nut-trend-arrow showSign :rate="1"/>
    <nut-trend-arrow showSign :rate="-0.2535"/>
  </nut-cell>
</template>
```

:::
### Whether to show 0

:::demo

```html
<template>
  <nut-cell>
    <nut-trend-arrow showSign :rate="0"/>
    <nut-trend-arrow showSign showZero :rate="0"/>
  </nut-cell>
</template>
```

:::
### Custom color

:::demo

```html
<template>
  <nut-cell>
    <nut-trend-arrow :rate="10.2365" rise-color="rgb(73,143,242)"/>
    <nut-trend-arrow :rate="-0.2535" showSign drop-color="rgb(255, 190, 13)"/>
    <nut-trend-arrow
      :show-text-color="false"
      showSign
      :rate="-0.2535"
      text-color="rgb(39,197,48)"
      drop-color="rgb(255, 190, 13)"
    />
  </nut-cell>
</template>
```

:::

### Custom icon

::: demo

```html
<template>
  <nut-cell>
    <nut-trend-arrow :rate="10.2365">
      <template #upIcon><Success color="blue" width="18" height="18" /></template>
    </nut-trend-arrow>
    <nut-trend-arrow :rate="-10.2365">
      <template #downIcon><Failure color="red" /></template>
    </nut-trend-arrow>
  </nut-cell>
</template>
<script lang="ts">
  import { Success, Failure } from '@nutui/icons-vue';
  export default {
    components: { Success, Failure },
  };
</script>
```

:::
## API

### Props

| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| rate         | Value, the arrow is up when it is greater than 0, and the arrow is down when it is less than 0    | number | -                |
| digits         | decimal precision               | number | `2`               |
| show-sign         | Whether to display plus and minus signs               | boolean | `false`               |
| show-zero         |whether to show 0               | boolean | `false`               |
| arrow-left        | whether to show an arrow to the left of the number     | boolean | `false`               |
| sync-text-color   | Whether the text color is in sync with the arrow               | boolean | `true`   |
| text-color        | text color               | string | `#333333`               |
| rise-color         | up arrow color               | string | `#fa2c19`            |
| drop-color         | down arrow color               | string | `#64b578`           |

### Slots

| Name    | Description         |
|---------|--------------|
| upIcon | custom up icon |
| downIcon | custom down icon |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | 
| --------------------------------------- | -------------------------- | 
| --nut-trendarrow-font-size| _14px_   |
| --nut-trendarrow-before-icon-margin| _4px_   |
| --nut-trendarrow-icon-width| _12px_   |
