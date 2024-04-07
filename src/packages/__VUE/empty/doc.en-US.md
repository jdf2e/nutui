# Empty

### Intro

Occupation reminder when empty.

### Install

```js
import { createApp } from 'vue'
import { Empty } from '@nutui/nutui'

const app = createApp()
app.use(Empty)
```

### Basic Usage

> demo: empty basic

### Image Type

> demo: empty type

### Custom Image

> demo: empty custom

### Bottom Content

> demo: empty bottom

## Empty

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| image | Image type, can be set to `empty`, `error`, `network` or image `URL` | string | `empty` |
| image-size | Image size | number \| string | `-` |
| description | Description | string | `-` |

### Slots

| Name | Description |
| --- | --- |
| default | Custom bottom content |
| image | Custom image |
| description | Custom description |

### Types v4.3.4

The component exports the following type definitions:

```js
import type {
  EmptyImage,
  EmptyProps,
  EmptyInstance
} from '@nutui/nutui'
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-empty-padding | _32px 0_ |
| --nut-empty-image-size | _170px_ |
| --nut-empty-description-margin-top | _4px_ |
| --nut-empty-description-color | _#666666_ |
| --nut-empty-description-font-size | _14px_ |
| --nut-empty-description-line-height | _20px_ |
| --nut-empty-description-padding | _0 40px_ |
