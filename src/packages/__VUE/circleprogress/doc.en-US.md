# CircleProgress

### Intro

Circular progress bar component,

### Install

```js
import { createApp } from 'vue'
import { CircleProgress } from '@nutui/nutui'

const app = createApp()
app.use(CircleProgress)
```

### Basic Usage

> demo: circleprogress basic

### Custom Width

> demo: circleprogress width

### Custom Color

> demo: circleprogress color

### Custom Size

> demo: circleprogress size

### Custom Content

> demo: circleprogress content

### Dynamic Change

> demo: circleprogress change

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

### Types v4.3.3

The component exports the following type definitions:

```js
import type {
  CircleProgressStrokeLinecap,
  CircleProgressProps,
  CircleProgressInstance
} from '@nutui/nutui';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-circleprogress-primary-color | _var(--nut-primary-color)_ |
| --nut-circleprogress-path-color | _#e5e9f2_ |
| --nut-circleprogress-text-color | _#000000_ |
| --nut-circleprogress-text-size | _var(--nut-font-size-3)_ |
