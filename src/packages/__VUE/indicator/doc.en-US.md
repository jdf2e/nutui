# Indicator

### Intro

Displays the progress of a task or process, which is often used to open a process.

### Install

```javascript
import { createApp } from 'vue';
import { Indicator } from '@nutui/nutui'

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

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --------------------------------------- | -------------------------- | ---- |
| --nut-indicator-color|  _var(--nut-primary-color)_ | -  |
| --nut-indicator-dot-color|  _var(--nut-disable-color)_ | -  |
| --nut-indicator-white|  _var(--nut-white)_ | -  |
| --nut-indicator-size|  _18px_ | -  |
| --nut-indicator-dot-size|  _calc(var(--nut-indicator-size) / 3)_ | -  |
| --nut-indicator-border-size|  _calc(var(--nut-indicator-size)+ 2)_ | -  |
| --nut-indicator-number-font-size|  _10px_ | -  |
