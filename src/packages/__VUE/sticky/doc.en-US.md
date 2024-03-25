# Sticky

### Intro

Use fixed positioning to achieve a ceiling effect similar to `position: sticky`.

### Install

```js
import { createApp } from 'vue'
import { Sticky } from '@nutui/nutui'

const app = createApp()
app.use(Sticky)
```

### Basic Usage

> demo: sticky basic

### Top Distance

> demo: sticky top

### Custom Container

> demo: sticky container

### Bottom Distance

> demo: sticky bottom

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| position | Adsorption position（`top`、`bottom`） | string | `top` |
| top | Ceiling distance, enable when `position = top` | number | `0` |
| bottom | Suction distance, enable when `position = bottom` | number | `0` |
| container | The 'HTML' node of the container | Element | - |
| z-index | Level of adsorption | number | `99` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | Triggered when the adsorption state changes | `fixed: boolean` |
