# Backtop

### Intro

Provides a quick return to the top function for long pages.

### Install

```js
import { createApp } from 'vue'
import { Backtop } from '@nutui/nutui'

const app = createApp()
app.use(Backtop)
```

### Basic Usage

> demo: backtop basic

### Distance

> demo: backtop distance

### Custom Style

> demo: backtop custom

### API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| el-id | Get the parent element of the listening element | string | - |
| bottom | Distance from bottom of page | number | `20` |
| right | Distance from the right side of the page | number | `10` |
| distance | How high to scroll the page vertically | number | `200` |
| z-index | Set the component z-index | number | `10` |
| is-animation | Whether there is animation, mutually exclusive with the duration parameter | boolean | `true` |
| duration | Set animation duration | number | `1000` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Emitted when component is clicked | `event: MouseEvent` |

### Slots

| Name | Description |
| --- | --- |
| default | The default slot is used to customize the content |

### Types v4.3.3

The component exports the following type definitions:

```ts
import type { BacktopProps, BacktopInstance } from '@nutui/nutui'
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).
| Name | Default Value |
| --------------------------------------- | -------------------------- |
| --nut-backtop-border-color | _#e0e0e0_ |
