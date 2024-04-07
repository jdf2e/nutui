# trendarrow

### Intro

### Install

```js
import { createApp } from 'vue'
import { TrendArrow } from '@nutui/nutui'

const app = createApp()
app.use(TrendArrow)
```

### Basic Usage

> demo: trendarrow basic

### Specify decimal places

> demo: trendarrow digits

### Arrow ahead

> demo: trendarrow left

### Show sign

> demo: trendarrow sign

### Whether to show 0

> demo: trendarrow zero

### Custom color

> demo: trendarrow color

### Custom icon

::: demo

> demo: trendarrow icon

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| rate | Value, the arrow is up when it is greater than 0, and the arrow is down when it is less than 0 | number | - |
| digits | decimal precision | number | `2` |
| show-sign | Whether to display plus and minus signs | boolean | `false` |
| show-zero | whether to show 0 | boolean | `false` |
| arrow-left | whether to show an arrow to the left of the number | boolean | `false` |
| sync-text-color | Whether the text color is in sync with the arrow | boolean | `true` |
| text-color | text color | string | `#333333` |
| rise-color | up arrow color | string | `#fa2c19` |
| drop-color | down arrow color | string | `#64b578` |

### Slots

| Name | Description |
| --- | --- |
| up-icon | custom up icon |
| down-icon | custom down icon |

### Types v4.3.4

The component exports the following type definitions:

```js
import type {
  TrendArrowProps,
  TrendArrowInstance
} from '@nutui/nutui'
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-trendarrow-font-size | _14px_ |
| --nut-trendarrow-before-icon-margin | _4px_ |
