# Grid

### Intro

Used to separate into equal-width blocks for page navigation.

### Install

```js
import { createApp } from 'vue'
import { Grid, GridItem } from '@nutui/nutui'

const app = createApp()
app.use(Grid)
app.use(GridItem)
```

### Basic Usage

> demo: grid basic

### Column Num

> demo: grid column

### Square

> demo: grid square

### Gutter

> demo: grid gutter

### Reverse

> demo: grid reverse

### Horizontal

> demo: grid horizontal

### Custom Content

> demo: grid content

## API

### Grid Props

| Attribute | Description | Type | 默认值 |
| --- | --- | --- | --- |
| column-num | Column Num | number \| string | `4` |
| border | Whether to show border | boolean | `true` |
| gutter | Gutter,The default unit is `px` | number \| string | `0` |
| center | Whether to center content | boolean | `true` |
| square | Whether to be square shape | boolean | `false` |
| reverse | Whether to reverse the position of icon and text | boolean | `false` |
| direction | Content arrangement direction, can be set to `horizontal` | string | `vertical` |
| clickable | Whether to show click feedback when clicked | boolean | `false` |

### GridItem Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| text | text | string | - |

### GridItem Slots

| Name | Description |
| --- | --- |
| default | Custom content |
| text | Custom text |

### GridItem Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Emitted when component is clicked | event: Event |

### Types version

The component exports the following type definitions:

```js
import type {
  GridDirection,
  GridProps,
  GridInstance
} from '@nutui/nutui';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-grid-border-color | _#f5f6f7_ |
| --nut-grid-item-content-padding | _16px 8px_ |
| --nut-grid-item-content-bg-color | _var(--nut-white)_ |
| --nut-grid-item-text-margin | _8px_ |
| --nut-grid-item-text-color | _var(--nut-title-color2)_ |
| --nut-grid-item-text-font-size | _var(--nut-font-size-1)_ |
