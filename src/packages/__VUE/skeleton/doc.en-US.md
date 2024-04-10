# Skeleton screen

### Intro

Filling gray bitmap in the area to be loaded on the page is essentially the transition effect in the process of interface loading.

### Install

```js
import { createApp } from 'vue'
import { Skeleton } from '@nutui/nutui'

const app = createApp()
app.use(Skeleton)
```

### Basic usage

> demo: skeleton basic

### Multi-lines

> demo: skeleton row

### Show Avatar

> demo: skeleton avatar

### Round Style

> demo: skeleton round

### Picture combination

> demo: skeleton picture

### Display subcomponents

> demo: skeleton sub

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| loading | Whether to display skeleton screen | boolean | `true` |
| width | Width per row | string | `default` |
| height | Height of each row | string | `15px` |
| animated | Whether to turn on skeleton screen animation | boolean | `false` |
| avatar | Show avatar | boolean | `false` |
| avatar-shape | Avatar shape: square / round | string | `round` |
| avatar-size | Avatar size | string | `50px` |
| round | Is the title / paragraph rounded | boolean | `false` |
| title | Show paragraph titles (first line displayed) | boolean | `true` |
| row | Set the number of paragraph lines (shown below the title) | string | `1` |

### Slots

| Name | Description |
| --- | --- |
| default | Skeleton screen display content |

### Types v4.3.5

The component exports the following type definitions:

```js
import type {
  SkeletonProps,
  SkeletonInstance
} from '@nutui/nutui';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-skeleton-content-avatar-background-color | _#efefef_ |
| --nut-skeleton-content-line-background-color | _#efefef_ |
| --nut-skeleton-animation-background-color | _linear-gradient(90deg,hsla(0, 0%, 100%, 0),hsla(0, 0%, 100%, 0.5) 50%, hsla(0, 0%, 100%, 0) 80%)_ |
