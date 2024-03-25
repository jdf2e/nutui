# Radio

### Intro

Used to make a single selection in a set of alternatives

### Install

```js
import { createApp } from 'vue'
import { Radio, RadioGroup } from '@nutui/nutui'

const app = createApp()
app.use(Radio)
app.use(RadioGroup)
```

### Basic Usage

Bind the `label` field of an option through `v-model`. `nut-radio` must be used in conjunction with `nut-radio-group`.

> demo: radio basic

### Horizontal

Set the direction through `direction`. The default value is `vertical` and can be set to `horizontal`.

> demo: radio horizontal

### Disabled

> demo: radio disabled

### Custom icon

> demo: radio icon

### Text Position

Set the text position through `text-position`. The default value is `right` and can be set to `left`.

> demo: radio position

### Icon Size

> demo: radio icon-size

### Shape

Set the Radio shape through `shape`. The default value is `round` and can be set to `button`.

> demo: radio shape

### Custom Button Size v4.2.4

Set the Radio size through `size`, which only takes effect when `shape` is `button`.

> demo: radio size

### Event Trigger

> demo: radio event

## API

### Radio Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| disabled | Disable selection | boolean | `false` |
| icon-size | [Icon Size](#/en-US/icon) | string \| number | `18` |
| label | Radio box ID | string \| number \| boolean | - |
| shape | Shape, optional values are `button`、`round` | string | `round` |
| size`v4.2.4` | Can be set to `small` `mini` `normal`, when `shape` = `button` | string | `normal` |

### Radio Slots

| Name | Description |
| --- | --- |
| icon | Icon when not selected |
| checkedIcon | Icon when selected |

### RadioGroup Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | The identifier of the currently selected item is selected when it is consistent with the `label` value | string \| number \| boolean | - |
| text-position | The position of the text, optional value：`left`,`right` | string | `right` |
| direction | Use horizontal and vertical optional values `horizontal`、`vertical` | string | `vertical` |

### RadioGroup Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | Triggered when the value changes | Currently selected item value（label）【There is a value after setting `label`, which is empty by default】 |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-radio-label-font-color | _#1d1e1e_ |
| --nut-radio-label-font-active-color | _var(--nut-primary-color)_ |
| --nut-radio-label-disable-color | _#999_ |
| --nut-radio-icon-disable-color | _#d6d6d6_ |
| --nut-radio-label-button-border-color | _var(--nut-primary-color)_ |
| --nut-radio-label-button-background | _var(--nut-primary-color)_ |
| --nut-radio-label-margin-left | _15px_ |
| --nut-radio-button-border-radius | _15px_ |
| --nut-radio-label-font-size | _14px_ |
| --nut-radio-button-font-size | _12px_ |
| --nut-radio-button-padding | _5px 18px_ |
| --nut-radio-icon-disable-color2 | _var(--nut-help-color)_ |
