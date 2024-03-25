# Checkbox

### Intro

The multiple selection button is used to select.

### Install

```js
import { createApp } from 'vue'
import { Checkbox, CheckboxGroup } from '@nutui/nutui'

const app = createApp()
app.use(Checkbox)
app.use(CheckboxGroup)
```

### Basic Usage

> demo: checkbox basic

### Indeterminate

> demo: checkbox indeterminate

### Disabled

> demo: checkbox disabled

### Custom Size

> demo: checkbox size

### Custom Icon

Customize the icon through the slot, it is recommended to set the `icon` and `checkedIcon` two slots at the same time

> demo: checkbox icon

### Change Event

When the value changes, the `change` event will be triggered

> demo: checkbox event

### CheckboxGroup

> demo: checkbox group

### Disabled CheckboxGroup

> demo: checkbox group-disabled

### CheckboxGroup Methods

> demo: checkbox methods

### CheckboxGroup Limit the maximum number of options

> demo: checkbox max

### Select all / half / cancel

> demo: checkbox methods

### Button Shape

> demo: checkbox shape

## API

### Checkbox Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | If selected | boolean | `false` |
| disabled | Disable selection | boolean | `false` |
| text-position | The position of the text, optional value：`left`,`right` | string | `right` |
| icon-size | [Icon Size](#/en-US/icon) | string \| number | `18` |
| label | Text content of the check box | string | - |
| indeterminate | Whether half selection status is currently supported. It is generally used in select all operation | boolean | `false` |
| shape | Shape, optional values：`button`、`round` | String | `round` |

### Checkbox Slots

| Name | Description |
| --- | --- |
| icon | Icon when not selected |
| checkedIcon | Icon when selected |
| indeterminate | Icon when half selected |

### CheckboxGroup Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Identifier of the currently selected item, corresponding to `label` | Array | - |
| disabled | Whether to disable the selection, which will be used for all check boxes under it | boolean | `false` |
| max | Limit the number of choices. It cannot be used with select all / cancel / invert selection. `0 'means there is no limit | number | `0` |

### Checkbox Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | Triggered when the value changes | (state, label),`state` represents the current state，`label` indicates the currently selected value |

### CheckboxGroup Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | Triggered when the value changes | label,`label` returns an array representing the collection of currently selected items |

### CheckboxGroup Methods

| methodName | Description | Arguments |
| --- | --- | --- |
| toggleAll | Select all / cancel | `true`,to select all，`false`,cancel the selection |
| toggleReverse | Reverse selection | - |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-checkbox-label-color | _#1d1e1e_ |
| --nut-checkbox-label-disable-color | _#999_ |
| --nut-checkbox-icon-disable-color | _#d6d6d6_ |
| --nut-checkbox-label-margin-left | _15px_ |
| --nut-checkbox-label-font-size | _14px_ |
| --nut-checkbox-icon-font-size | _18px_ |
| --nut-checkbox-icon-disable-color2 | _var(--nut-help-color)_ |
| --nut-checkbox-button-padding | _5px 18px_ |
| --nut-checkbox-button-font-size | _12px_ |
| --nut-checkbox-button-border-radius | _15px_ |
| --nut-checkbox-button-border-color | _#f6f7f9_ |
| --nut-checkbox-button-background | _#f6f7f9_ |
| --nut-checkbox-button-font-color-active | _var(--nut-primary-color)_ |
| --nut-checkbox-button-border-color-active | _var(--nut-primary-color)_ |
| --nut-checkbox-button-background-active | _var(--nut-primary-color)_ |
| --nut-checkbox-display | _inline-flex_ |
| --nut-checkbox-margin-right | _20px_ |
