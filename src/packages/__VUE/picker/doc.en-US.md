# Picker

### Intro

The picker component is usually used with Popup Component.

### Install

```js
import { createApp } from 'vue'
import { Picker } from '@nutui/nutui'

const app = createApp()
app.use(Picker)
```

### Basic Usage

> demo: picker basic

### v-model

The default selection is implemented by setting `modelValue`, which is an array of values for each configuration。

> demo: picker vmodel

### With Popup

The Picker is usually filled in as an auxiliary form, which can be paired with a Popup.

> demo: picker popup

### 3D

> demo: picker three-d

### Multiple Columns

> demo: picker columns

### Cascader

Use the children field of the Columns attribute to cascade options

> demo: picker cascader

### Async

> demo: picker async

### Custom Columns Field v4.1.4

> demo: picker field

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model:value | Default Index | Array | `[]` |
| columns | Columns data | PickerOption[] \| PickerOption[][] | - |
| field-names`v4.1.4` | custom columns field | object | `{ text: 'text', value: 'value', children: 'children', className: 'className' }` |
| title | Toolbar title | string | - |
| cancel-text | Text of cancel button | string | `cancel` |
| ok-text | Text of confirm button | string | `confirm` |
| three-dimensional | Turn on 3D effects | boolean | `false` |
| swipe-duration | Duration of the momentum animation | number \| string | `1000` |
| visible-option-num | Count of visible columns | number \| string | `7` |
| option-height | Option height | number \| string | `36` |
| show-toolbar | Whether to show toolbar | boolean | `true` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| confirm | Emitted when click confirm button. | `{ selectedValue, selectedOptions }` |
| cancel | Emitted when click close button. | `{ selectedValue, selectedOptions }` |
| change | Emitted when current option changed. | `{ columnIndex, selectedValue, selectedOptions }` |

### Slots

| Name | Description |
| --- | --- |
| default | Custom content bottom columns |
| top | Custom content top columns |

### Data Structure of PickerOption

| Key | Description | Type | Default |
| --- | --- | --- | --- |
| text | Text of column | string \| number | - |
| value | Value of column | string \| number | - |
| children | Cascader Option | Array | - |
| className | Extra CalssName | string | - |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-picker-cancel-color | _#808080_ |
| --nut-picker-ok-color | _var(--nut-primary-color)_ |
| --nut-picker-bar-cancel-font-size | _14px_ |
| --nut-picker-bar-ok-font-size | _14px_ |
| --nut-picker-bar-button-padding | _0 15px_ |
| --nut-picker-bar-title-font-size | _16px_ |
| --nut-picker-bar-title-color | _var(--nut-title-color)_ |
| --nut-picker-bar-title-font-weight | _normal_ |
| --nut-picker-item-height | _36px_ |
| --nut-picker-item-text-color | _var(--nut-title-color)_ |
| --nut-picker-item-text-font-size | _14px_ |
| --nut-picker-item-active-line-border | _1px solid #d8d8d8_ |
