# InputNumber

### Intro

Control the number increase or decrease by clicking the button.

### Install

```js
import { createApp } from 'vue'
import { InputNumber } from '@nutui/nutui'

const app = createApp()
app.use(InputNumber)
```

### Basic Usage

Initialize a default value

> demo: inputnumber basic

### Step size setting

Set step `step` 5

> demo: inputnumber step

### Limit input range

`min` and `max` attributes represent the minimum and maximum values respectively

> demo: inputnumber limit

### Disabled state

`disabled` When disabled, you cannot click the button or modify the input box.

> demo: inputnumber disabled

### Read only disable input box

`readonly` Set read-only disable input box input behavior

> demo: inputnumber readonly

### Support decimal point

Set step size `step` 0.1 `decimal places` keep 1 decimal place

> demo: inputnumber decimal

### Custom button size

> demo: inputnumber size

### Custsom icon name

> demo: inputnumber icon

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Initial value | string \| number | - |
| input-width | Input box width | string | `` |
| button-size | Operators +, - Dimensions | string | `` |
| min | Minimum limit | string \| number | `1` |
| max | Maximum limit | string \| number | `9999` |
| step | step | string \| number | `1` |
| decimal-places | Set reserved decimal places | string \| number | `0` |
| disabled | Disable all features | boolean | `false` |
| readonly | Read only status disables input box operation behavior | boolean | `false` |

### Attrs version

The attributes on `InputNumber` will be inherited by `input` element.

### Slots

| Name | Description |
| --- | --- |
| left-icon | Custom left icon |
| right-icon | Custom right icon |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| add | Triggered when the Add button is clicked | `event: Event ` |
| reduce | Triggered when the decrease button is clicked | `event: Event` |
| overlimit | Triggered when an unavailable button is clicked | `event: Event,type:string (reduce or add)` |
| change | Triggered when the value changes | `value:  number , event : Event ` |
| blur | Triggered when the input box blur | `event: Event` |
| focus | Triggered when the input box focus | `event: Event ` |

### Types v4.3.3

The component exports the following type definitions:

```js
import type {
  InputNumberProps,
  InputNumberInstance
} from '@nutui/nutui';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-inputnumber-icon-color | _var(--nut-title-color)_ |
| --nut-inputnumber-icon-void-color | _var(--nut-disable-color)_ |
| --nut-inputnumber-icon-size | _20px_ |
| --nut-inputnumber-input-width | _40px_ |
| --nut-inputnumber-input-font-size | _12px_ |
| --nut-inputnumber-input-font-color | _var(--nut-title-color)_ |
| --nut-inputnumber-input-background-color | _var(--nut-help-color)_ |
| --nut-inputnumber-input-border-radius | _4px_ |
| --nut-inputnumber-input-margin | _0 6px_ |
| --nut-inputnumber-input-border | _0_ |
| --nut-inputnumber-border | _0_ |
| --nut-inputnumber-border-radius | _0_ |
| --nut-inputnumber-height | _auto_ |
| --nut-inputnumber-line-height | _normal_ |
| --nut-inputnumber-border-box | _content-box_ |
| --nut-inputnumber-display | _inline-flex_ |
