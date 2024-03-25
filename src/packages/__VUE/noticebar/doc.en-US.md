# Noticebar

### Intro

Used to display a group of message notifications in a continuons loop.

### Install

```js
import { createApp } from 'vue'
import { Noticebar } from '@nutui/nutui'

const app = createApp()
app.use(Noticebar)
```

### Basic Usage

> demo: noticebar basic

### Custom Style

> demo: noticebar custom

### Scrollable

Scrolling is automatically enabled when the content length of the notification bar overflows, which can be controlled through the scrollable property.

> demo: noticebar scrollable

### Close Mode

> demo: noticebar close

### Wrapable

When text is long, you can enable multi-line display by setting the wrapable property.

> demo: noticebar wrap

### Vertical Scroll

> demo: noticebar vertical

### Vertical Scroll Custom Style

> demo: noticebar vertical-content

### Vertical Scroll Custom Right Icon

> demo: noticebar right

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| direction | Rolling direction | string | `across` |
| text | Notice text content | string | - |
| close-mode | Whether to enable the off mode | boolean | `false` |
| left-icon | Show left Icon | boolean, Scroll direction 'across' takes effect | `true` |
| color | Text Color | string | - |
| background | Background | string | - |
| delay | Delay time | string \| number | `1` |
| scrollable | Whether to scroll content | boolean | `true` |
| speed | Scrolling speed (px/s) | number | `50` |
| wrapable | Whether to enable text wrap,`scrollable` set `false` | boolean | `false` |

### Props（direction=vertical）

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| list | List | array | `[]` |
| speed | Scrolling speed | number | `50` |
| stand-time | Show time(millisecond) | number | `1000` |
| complex-am | Complex animation | boolean | `false` |
| height | height | number | `40` |
| close-mode | Whether to enable the off mode | boolean | `false` |

### Slots

| Name | Description |
| --- | --- |
| default | Notice text content |
| right-icon | Custom right icon |
| left-icon | Custom left icon, Scroll direction 'across' takes effect |

### Events

| Attribute | Description | Arguments |
| --- | --- | --- |
| click | Emitted when Noticebar is clicked | event: Event |
| close | Emitted when Noticebar is closed | event: Event |
| across-end | Emitted when across scrolling ends | event: Event |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-noticebar-background | _rgba(251, 248, 220, 1)_ |
| --nut-noticebar-color | _#d9500b_ |
| --nut-noticebar-font-size | _14px_ |
| --nut-noticebar-across-height | _40px_ |
| --nut-noticebar-across-line-height | _24px_ |
| --nut-noticebar-box-padding | _0 16px_ |
| --nut-noticebar-wrapable-padding | _16px_ |
| --nut-noticebar-lefticon-margin | _0px 10px_ |
| --nut-noticebar-righticon-margin | _0px 10px_ |
