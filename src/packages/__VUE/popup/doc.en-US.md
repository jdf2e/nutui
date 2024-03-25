# Popup

### Intro

The pop-up layer container is used to display pop-up windows, information prompts and other contents, and supports the superposition display of multiple pop-up layers

### Install

```js
import { createApp } from 'vue'
import { Popup } from '@nutui/nutui'

const app = createApp()
app.use(Popup)
```

### Basic Usage

Control display/hide by setting `visible`

> demo: popup basic

### Position

Control the pop-up position by setting the value of `position`

> demo: popup position

### Close Icon

The `closeable` controls whether the icon can be closed. The `close-icon-position` sets the position of the icon. The `close-icon` defines the display icon.

> demo: popup close

### Round

Set `round` to control whether rounded corners are displayed

> demo: popup round

### Multi Layers

> demo: popup multi

### Teleport

Use the [Teleport](https://vuejs.org/guide/built-ins/teleport.html) component provided by Vue to implement specified node mounting.

> demo: popup port

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model:visible | Control the display/hide of the current component | boolean | `false` |
| z-index | Mask level | string \| number | `2000` |
| duration | Animation duration of component display/hide, in seconds | string \| number | `0.3` |
| lock-scroll | Whether the background is locked | boolean | `true` |
| overlay | Show mask | boolean | `true` |
| close-on-click-overlay | Click to close the mask | boolean | `true` |
| position | Eject position（top,bottom,left,right,center） | string | `"center"` |
| transition | Animation name | string | - |
| style | Custom pop-up style | CSSProperties | - |
| pop-class | Custom bullet box classname | string | - |
| closeable | Show close button | boolean | `false` |
| close-icon-position | Close button position（top-left,top-right,bottom-left,bottom-right） | string | `"top-right"` |
| destroy-on-close | Will the contents of `slot` be cleared after the bullet layer is closed | boolean | `true` |
| round | Show fillet | boolean | `false` |
| overlay-class | Custom mask class name | string | - |
| overlay-style | Custom Mask Style | CSSProperties | - |
| safe-area-inset-bottom | Whether to enable iPhone series full screen bottom safety zone adaptation, which is only valid when `position` is `bottom` | Boolean | `false` |
| teleport | Specify the mount node | string | `"body"` |
| teleport-disable | Whether the node is allowed to be mounted, true means mount | boolean | `false` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click-pop | Triggered when clicking the pop-up layer | `event: Event` |
| click-close-icon | Triggered when the close icon is clicked | `event: Event` |
| open | Triggered when the pop-up box is opened | - |
| close | Triggered when the pop-up box is closed | - |
| opened | Triggered at the end of the mask open animation | `el: Element` |
| closed | Triggered when the mask closes and the animation ends | `el: Element` |
| click-overlay | Click mask trigger | `event: Event` |

### Slots

| Name | Description |
| --- | --- |
| default | Customize Embedded Content |
| close-icon | Custom icon for close button |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-popup-close-icon-margin | _16px_ |
| --nut-popup-border-radius | _20px_ |
