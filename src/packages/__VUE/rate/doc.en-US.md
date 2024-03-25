# Rate

### Intro

Use for quick rating actions, or to showcase reviews.

### Install

```js
import { createApp } from 'vue'
import { Rate } from '@nutui/nutui'

const app = createApp()
app.use(Rate)
```

### Basic Usage

> demo: rate basic

### Half Star

> demo: rate half

### Custom Icon

> demo: rate icon

### Custom Count

> demo: rate count

### Custom Color

> demo: rate color

### Disabled

> demo: rate disabled

### Read Only

> demo: rate read

### Binding Event

> demo: rate event

### Custom Size 35px

> demo: rate size

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | The current number of stars, you can use v-model to bind data in both directions | number \| string | - |
| count | Total number \| string of stars | number \| string | `5` |
| active-color | Icon selection color | string | `#fa200c` |
| void-color | Icon unselected color | string | `#ccc` |
| allow-half | half star | boolean | `false` |
| readonly | read-only | boolean | `false` |
| disabled | whether to disable | boolean | `false` |
| spacing | spacing | number \| string | `20` |
| touchable | Whether to allow select rate by touch gesture | boolean | `true` |
| size | `Icon` custom size , eg `20px` `2em` `2rem` | number \| string | - |
| custom-icon | custom `Icon`, set [VNode](https://vuejs.org/guide/extras/render-function.html#creating-vnodes) | VNode \| h | `StarFillN` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | An event that fires whenever the current score is modified | val |

### Types v4.3.3

The component exports the following type definitions:

```js
import type {
  RateProps,
  RateInstance
} from '@nutui/nutui';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-rate-icon-color | _var(--nut-primary-color)_ |
| --nut-rate-icon-void-color | _var(--nut-disable-color)_ |
