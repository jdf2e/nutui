# Animate

### Intro

Add animation effects to child elements

### Install

```js
import { createApp } from 'vue';
import { Animate } from '@nutui/nutui';

const app = createApp(Animate);
app.use(Animate);
```

### Trigger animation through show

> demo: animate show

### Loop animation

> demo: animate loop

### Click to trigger

> demo: animate click

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| show`v4.1.1` | Trigger animation when show changes from `false` to `true` | boolean | `false` |
| type | For animation type, see the description of type value below | string | `-` |
| loop | Whether to execute circularly. `true`- loop execution; `false`- execute once | boolean | `false` |
| duration`4.0.7` | AnimationDuration, ms | number \| string | - |
| action | Triggering method,`initial`- initialization execution; `click`- click to execute | string | - |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| animate`v4.1.1` | Trigger of animation | - |
| click | Triggered when an element is clicked | event: Event |

### Type value description

| Order | Type name | Description |
| --- | --- | --- |
| 1 | shake | shake，It is recommended that loop be true |
| 2 | ripple | ripple |
| 3 | breath | breath，It is recommended that loop be true |
| 4 | float | float，It is recommended that loop be true |
| 5 | slide-right | From right to left |
| 6 | slide-left | From left to right |
| 7 | slide-top | From top to bottom |
| 8 | slide-bottom | From bottom to top |
| 9 | jump | jump，It is recommended that loop be true |
| 10 | twinkle | twinkle，It is recommended that loop be true |
| 11 | flicker | Polish button，It is recommended that loop be true |

### Types version

The component exports the following type definitions:

```js
import type {
  AnimateType,
  AnimateAction,
  AnimateProps,
  AnimateInstance
} from '@nutui/nutui';
```
