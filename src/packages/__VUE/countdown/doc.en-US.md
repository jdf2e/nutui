# Countdown 倒计时

### 介绍

Used to display the countdown value in real time, and precision supports milliseconds.

### Install

```js
import { createApp } from 'vue'
import { Countdown } from '@nutui/nutui'

const app = createApp()
app.use(Countdown)
```

### Basic Usage

> demo: countdown basic

### Format

Different countdown display text can be realized by setting the `format` attribute.

> demo: countdown format

### Millisecond

> demo: countdown millisecond

### Manual Control

Paused and restarted the countdown with the `paused` attribute

> demo: countdown control

### Custom Style

> demo: countdown custom

### Ref Methods

> demo: countdown ref

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Current Time | object | `{}` |
| start-time | Start Time | string \| number | `Date.now()` |
| end-time | End Time | string \| number | `Date.now()` |
| format | Format Time | string | `HH:mm:ss` |
| millisecond | Whether to enable millisecond render | boolean | `false` |
| auto-start | Whether to auto start count down | boolean | `true` |
| time | Total time, unit milliseconds | string \| number | `0` |
| paused | Paused | boolean | `false` |
| show-days | Show Text Day | boolean | `false` |
| show-plain-text | Show Text | boolean | `false` |

### Format

| Name | Description |
| --- | --- |
| DD | Day |
| HH | Hour |
| mm | Minute |
| ss | Second |
| S | Millisecond, 1-digit |
| SS | Millisecond, 2-digits |
| SSS | Millisecond, 3-digits |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| end`v4.1.5` | Emitted when count down end | Residual Timestamp |
| paused`v4.1.5` | Emitted when count down paused | Residual Timestamp |
| restart`v4.1.5` | Emitted when count down restart | Residual Timestamp |
| on-end | Emitted when count down end | Residual Timestamp |
| on-paused | Emitted when count down paused | Residual Timestamp |
| on-restart | Emitted when count down restart | Residual Timestamp |

### Methods

| Name | Description |
| --- | --- |
| start | Count Down Start |
| pause | Count Down Pause |
| reset | Count Down Reset |

### Types version

The component exports the following type definitions:

```js
import type {
  CountdownProps,
  CountdownInstance
} from '@nutui/nutui'
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-countdown-display | _flex_ |
| --nut-countdown-color | _inherit_ |
| --nut-countdown-font-size | _initial_ |
