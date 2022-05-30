# Indicator

### Intro

Displays the progress of a task or process, which is often used to open a process.

### Install

```javascript
import { createApp } from 'vue';
// vue
import { Indicator } from '@nutui/nutui'
// taro
import { Indicator } from '@nutui/nutui-taro'

const app = createApp();

app.use(Indicator);

```

### Basic Usage

:::demo
```html
<template>
  <nut-cell>
    <nut-indicator :size="3" :current="3">step1</nut-indicator>
  </nut-cell>
  <nut-cell>
    <nut-row>
      <nut-col :span="12">
        <nut-button size="small" type="primary">Main button</nut-button>
      </nut-col>
      <nut-col :span="12">
        <nut-indicator :block="true" align="right" :size="6" :current="5">step1</nut-indicator>
      </nut-col>
    </nut-row>
  </nut-cell>
</template>
```
:::

### Block usage
:::demo
```html
<template>
    <nut-cell>
      <nut-indicator :block="true" algin="center" :size="6" :current="5">step1</nut-indicator>
    </nut-cell>
    <nut-cell>
      <nut-indicator :block="true" align="left" :size="6" :current="1">step1</nut-indicator>
    </nut-cell>
    <nut-cell>
      <nut-indicator :block="true" align="right" :size="6" :current="5">step1</nut-indicator>
    </nut-cell>
</template>
```
:::

### Do not make up 0
:::demo
```html
<template>
    <nut-cell>
      <nut-indicator :fill-zero="false" :size="6" :current="5">step1</nut-indicator>
    </nut-cell>
</template>
```
:::


## API

### Props

| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| current  | Current step               | Number | 1              |
| size       | Step length                         | Number | 3               |
| block | Enable block level layout     | Boolean | false |
| align | Alignment, which takes effect only when `block` is true. optional value 'left', 'right', 'center'| String | left |
| fill-zero     | Whether to add 0 before singular number                      | Boolean | true        |
