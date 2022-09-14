# trendarrow 

### Intro

### Install

```javascript

import { createApp } from 'vue';
// vue
import { TrendArrow } from '@nutui/nutui';
// taro
import { TrendArrow } from '@nutui/nutui-taro';

const app = createApp();
app.use(TrendArrow);

```

### Basic Usage

:::demo

```html
<template>
  <nut-cell>
    <nut-trendarrow :show-text-color="false" :rate="1"/>
    <nut-trendarrow :show-text-color="false" :rate="-0.2535"/>
  </nut-cell>
</template>
```

:::

### Change text color

:::demo

```html
<template>
  <nut-cell>
      <nut-trendarrow :rate="10.2365"/>
      <nut-trendarrow :rate="-0.2535"/>
  </nut-cell>
</template>
```

:::
### Specify decimal places

:::demo

```html
<template>
  <nut-cell>
      <nut-trendarrow :digits="0" :rate="10.2365"/>
      <nut-trendarrow :digits="0" :rate="-0.2535"/>
  </nut-cell>
</template>
```

:::
### Arrow ahead

:::demo

```html
<template>
  <nut-cell>
      <nut-trendarrow arrowLeft :rate="0.2535"/>
      <nut-trendarrow arrowLeft :rate="-0.2535"/>
  </nut-cell>
</template>
```

:::
### Show sign

:::demo

```html
<template>
  <nut-cell>
      <nut-trendarrow showSign :rate="1"/>
      <nut-trendarrow showSign :rate="-0.2535"/>
  </nut-cell>
</template>
```

:::
### Whether to show 0

:::demo

```html
<template>
  <nut-cell>
      <nut-trendarrow showSign :rate="0"/>
      <nut-trendarrow showSign showZero :rate="0"/>
  </nut-cell>
</template>
```

:::
### Custom color

:::demo

```html
<template>
  <nut-cell>
      <nut-trendarrow :rate="10.2365" rise-color="rgb(73,143,242)"/>
      <nut-trendarrow :rate="-0.2535" showSign drop-color="rgb(255, 190, 13)"/>
      <nut-trendarrow
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

## API

### Props

| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| rate         | Value, the arrow is up when it is greater than 0, and the arrow is down when it is less than 0    | Number | -                |
| digits         | decimal precision               | Number | 2               |
| show-sign         | Whether to display plus and minus signs               | Boolean | false               |
| show-zero         |whether to show 0               | Boolean | false               |
| arrow-left        | whether to show an arrow to the left of the number     | Boolean | false               |
| sync-text-color   | Whether the text color is in sync with the arrow               | Boolean | true   |
| text-color        | text color               | String | '#333333'               |
| rise-color         | up arrow color               | String | '#fa2c19'               |
| drop-color         | down arrow color               | String | ‘#64b578’               |
| icon-size         | arrow size               | String | '12px'               |
| up-icon-name         | custom up arrow icon               | String | 'triangle-up'               |
| down-icon-name         | custom down arrow icon               | String | 'triangle-down'               |

### Slots

| Name    | Description         |
|---------|--------------|
| default | 	The default slot is used to customize the icon |