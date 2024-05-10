# Overlay

### Intro

Create a mask layer, which is usually used to prevent users from doing other operations

### Install

```js
import { createApp } from 'vue'
import { Overlay } from '@nutui/nutui'

const app = createApp()
app.use(Overlay)
```

### Basic Usage

Use `visible` to control the display/hiding of mask layers

> demo: overlay basic

### Mask style

It can be set through `overlay-style`

> demo: overlay mask

### Set animation time

Set mask display/hide time through `duration`, time `s`

> demo: overlay duration

### Lock Background Scroll

Use `lock scroll` to set whether the mask locks the background when displaying, and prohibit scrolling

> demo: overlay lock

### Nested content

The default `slot` is supported, and any content can be nested

> demo: overlay nest

### Click the mask not to close

Set `close on click override` to control whether the click mask is closed. If it is set to `true`, the `click` event will also become invalid

> demo: overlay close

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model:visible | Control the display/hide of masks | boolean | `false` |
| z-index | Custom Mask Level | string \| number | `2000` |
| duration | Display/hide animation duration, in seconds | string \| number | `0.3` |
| overlay-class | Custom mask class name | string | - |
| overlay-style | Custom Mask Style | CSSProperties | - |
| lock-scroll | Whether the background is locked when the mask is displayed | boolean | `true` |
| close-on-click-overlay | Whether to close the mask when clicking. | boolean | `true` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Triggered when clicked. | event: MouseEvent |

### Slots

| Name | Description |
| --- | --- |
| default | Embedded Mask Content Customization |

### Types version

The component exports the following type definitions:

```js
import type {
  OverlayProps,
  OverlayInstance
} from '@nutui/nutui';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-overlay-bg-color | _rgba(0, 0, 0, 0.7)_ |
