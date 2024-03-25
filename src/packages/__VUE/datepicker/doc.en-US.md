# DatePicker

### Intro

Used to select time, support date and time dimensions, usually used with the Popup component.

### Install

```js
import { createApp } from 'vue'
import { DatePicker } from '@nutui/nutui'

const app = createApp()
app.use(DatePicker)
```

### Choose Date

> demo: datepicker basic

### With popup

> demo: datepicker pop

### Choose Year-Month

> demo: datepicker yearMonth

### Choose Month-Day

> demo: datepicker monthDay

### Choose DateTime

> demo: datepicker date-time

### Choose Time

> demo: datepicker time

### Choose Hour-Minute v4.0.5

> demo: datepicker hour-minute

### Option Formatter

> demo: datepicker format

### Option Steps

> demo: datepicker step

### Option Filter

> demo: datepicker filter

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Default Date | date | `null` |
| type | Can be set to `date` `time` `year-month` `month-day` `datehour` `hour-minute`(`v4.0.5`) | string | `date` |
| minute-step | Option minute step | number | `1` |
| is-show-chinese | Show Chinese | boolean | `false` |
| min-date | Start date | date | `Ten years ago on January 1` |
| max-date | End date | date | `Ten years later on December 31` |
| formatter | Option text formatter | (type: string, option: PickerOption) => PickerOption |  |
| filter | Option filter | (type: string, option: PickerOption) => PickerOption[] |  |
| title | Title | string | `null` |
| ok-text | Text of confirm button | string | `confirm` |
| cancel-text | Text of cancel button | string | `cancel` |
| three-dimensional | Turn on 3D effects | boolean | `true` |
| swipe-duration | Duration of the momentum animation | number \| string | `1000` |
| visible-option-num | Count of visible columns | number \| string | `7` |
| option-height | Option height | number \| string | `36` |
| show-toolbar | Whether to show toolbar | boolean | `true` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| confirm | Emitted when click confirm button. | `{ selectedValue, selectedOptions }` |
| cancel | Emitted when click cancel button. | `{ selectedValue, selectedOptions }` |
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
