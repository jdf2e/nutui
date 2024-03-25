# Form

### Intro

It is used for data entry and verification. It supports input box, radio box, check box, file upload and other types.

### Install

```js
import { createApp } from 'vue'
import { Form, FormItem } from '@nutui/nutui'

const app = createApp()
app.use(Form)
app.use(FormItem)
```

### Basic Usage

> demo: form basic

### Dynamic Form

> demo: form dynamic

### Validate Form

`4.1.0` adds Promise-based custom error message function:

`validator` is a function, and the return value type is `boolean | Promise`. If `false` is returned or the Promise of `resolve(false)` is triggered, it means that the verification fails, and the prompt message set by `message` will be displayed. Returns the Promise that if `reject(error)` is triggered, the `error` is reserved as the prompt text, with a higher priority than `message`.

> demo: form validate

### Form Type

> demo: form type

### Customize the Label & Star location v4.2.4

> demo: form star

## API

### Form Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| model-value | Form data object (required when using form verification) | object |  |
| rules | Unified configuration FormItem attr rules | { prop: FormItemRule[] } | `{}` |
| disabled | Disable all data entry components under the form | boolean | `false` |
| label-position`v4.2.4` | The location of the form item label | `top` \| `left` \| `right` | `left` |
| star-position`v4.2.4` | The red star position of the single label is required | `left` \| `right` | `left` |

### Form Events

| Event | Description | Arguments |
| --- | --- | --- |
| validate | Triggered after any single table item fails to be verified | The `prop` value of the form item to be verified, whether the verification is passed, and the error message (if any) |

### FormItem Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| required | Whether to display the red asterisk next to the label of the required field | boolean | `false` |
| prop | The v-model field of the form field is required when the form verification function is used | string | - |
| rules | Define validation rules | FormItemRule [] | [] |
| label-width | The width of the form item label. The default unit is `px` | number \| string | - |
| label-align | Form item label alignment. The optional values are `center` `right` | string | `left` |
| body-align | Default Solt box alignment. The optional values are `center` `right` | string | `left` |
| error-message-align | Error prompt text alignment. The optional values are `center` and `right` | string | `left` |
| show-error-line | Whether to mark the input box in red when the verification fails | boolean | `true` |
| show-error-message | Whether to display the error prompt under the input box when the verification fails | boolean | `true` |
| label-position`v4.2.4` | The location of the form item label, The priority is higher than that in form label-position | `top` \| `left` \| `right` | `left` |
| star-position`v4.2.4` | The red star position of the single label is required, The priority is higher than that in form star-position | `left` \| `right` | `left` |

### FormItemRule data structure

Use the `rules` attribute of FormItem to define verification rules. The optional attributes are as follows:

| Attribute | Default | Type |
| --- | --- | --- |
| required | Is it a required field | boolean |
| message | Error prompt copy | string |
| validator | Verification by function | (value:string,rule?:FormItemRule) => boolean \| Promise |
| regex | Verification by regular expression | RegExp |

### FormItem Slots

| Name | Description |
| --- | --- |
| default | Default slot |
| label | Custom `label` slot |

### Methods

Use [ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs) to get Form instance and call instance methods.

| Name | Description | Arguments | Return value |
| --- | --- | --- | --- |
| submit | Method of submitting form for verification | - | - |
| reset | Clear verification results | - | - |
| validate | Active trigger verification is used to trigger when the user customizes the scene, such as blur and change events | Same as FormItem prop value | - |

### Types v4.3.1

The component exports the following type definitions:

```js
import type {
  FormErrorMessage,
  FormLabelPosition,
  FormStarPosition,
  FormItemRule,
  FormProps,
  FormInstance,
  FormItemProps,
  FormItemInstance
} from '@nutui/nutui';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-form-item-error-line-color | _var(--nut-required-color)_ |
| --nut-form-item-required-color | _var(--nut-required-color)_ |
| --nut-form-item-error-message-color | _var(--nut-required-color)_ |
| --nut-form-item-label-font-size | _14px_ |
| --nut-form-item-label-width | _90px_ |
| --nut-form-item-label-margin-right | _10px_ |
| --nut-form-item-label-text-align | _left_ |
| --nut-form-item-required-margin-right | _4px_ |
| --nut-form-item-body-font-size | _14px_ |
| --nut-form-item-body-slots-text-align | _left_ |
| --nut-form-item-body-input-text-align | _left_ |
| --nut-form-item-tip-font-size | _10px_ |
| --nut-form-item-tip-text-align | _left_ |
