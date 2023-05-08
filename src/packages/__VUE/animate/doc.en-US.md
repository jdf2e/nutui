# Animate

### Intro

Add animation effects to child elements

### Install

```javascript
import { createApp } from 'vue';
import { Animate } from '@nutui/nutui';

const app = createApp(Animate);
app.use(Animate);
```

### Clicking to trigger

:::demo

```html
<template>
  <nut-animate type='slide-right' action='click'>
    <nut-button type='primary'>From right to left</nut-button>
  </nut-animate>
  <nut-animate type='slide-left' action='click'>
    <nut-button type='primary'>From left to right</nut-button>
  </nut-animate>
  <nut-animate type='slide-top' action='click'>
    <nut-button type='primary'>From top to bottom</nut-button>
  </nut-animate>
  <nut-animate type='slide-bottom' action='click'>
    <nut-button type='primary'>From bottom to top</nut-button>
  </nut-animate>
</template>
```

:::

### Loop animation

:::demo

```html
<template>
  <nut-animate type='shake' :loop='true'>
    <nut-button type='primary'>shake-shake</nut-button>
  </nut-animate>
  <nut-animate type='ripple' :loop='true'>
    <nut-button type='primary'>ripple-ripple</nut-button>
  </nut-animate>
  <nut-animate type='breath' :loop='true'>
    <nut-button type='primary'>breath-breath</nut-button>
  </nut-animate>
  <nut-animate type='twinkle' :loop='true'>
    <nut-button type='primary'>twinkle-twinkle</nut-button>
  </nut-animate>
  <nut-animate type='flicker' :loop='true'>
    <nut-button type='primary'>flicker-flicker</nut-button>
  </nut-animate>
  <nut-animate type='jump' :loop='true'>
    <nut-button type='primary'>jump-jump</nut-button>
  </nut-animate>
  <nut-animate type='float' :loop='true'>
    <nut-button type='primary'>float-float</nut-button>
  </nut-animate>
</template>
```

:::


## API

### Props

| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| type         | For animation type, see the description of type value below               | string | `-`                |
| action         | Triggering method,`initial`- initialization execution; `click`- click to execute              | string | `initial`             |
| loop         | Whether to execute circularly. `true`- loop execution; `false`- execute once              | boolean | `false`               |
| duration`4.0.7` | AnimationDuration, ms | number \| string | - |

### Events

| Event | Description           | Arguments     |
|--------|----------------|--------------|
| click  | Triggered when an element is clicked | event: Event |

### Type value description

|    Order  |    Type name     |      Description     |
|:-------|:------- | :----------|
| 1|   shake  | shake，It is recommended that loop be true
| 2 |   ripple  | ripple
|3 |   breath  | breath，It is recommended that loop be true
|4 |   float  | float，It is recommended that loop be true
|5|   slide-right  | From right to left
|6 |   slide-left  | From left to right
|7|   slide-top  | From top to bottom
| 8 |   slide-bottom  | From bottom to top
|9 |   jump  | jump，It is recommended that loop be true
|10 |   twinkle  | twinkle，It is recommended that loop be true
|11 |   flicker  | Polish button，It is recommended that loop be true