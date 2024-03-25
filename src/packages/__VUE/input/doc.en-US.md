# Input

### Intro

The user can enter content in the text box.

### Install

```js
import { createApp } from 'vue'
import { Input } from '@nutui/nutui'

const app = createApp()
app.use(Input)
```

### Basic Usage

The value of field is bound with `v-model`.

> demo: input basic

### Custom Type

> demo: input type

### Readonly And Disabled

> demo: input status

### Show Clear Icon

Display the clear icon during input by setting 'clearable'. The clear button will be hidden after losing focus. You can set the clear button to continue to display after losing focus through 'showClearIcon'.

> demo: input clear

### Use With Form

Use in combination with `nut-form` and `nut-form-item`

> demo: input form

### Format Value

Use `formatter` prop to format the input value.

> demo: input format

### Show Word Limit

After setting the `maxlength` and `show-word-limit` attributes, word count will be displayed at the bottom.

> demo: input count

### No Border

> demo: input border

### Input Align

> demo: input align

### Event

> demo: input event

### Slot

> demo: input slot

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Input value, two-way binding | string \| number | - |
| type | Input type, support all native types and `number` `digit` type | string | `text` |
| placeholder | Placeholder when the input box is empty | string | - |
| input-align | Input align, eg `left`、`center`、`right` | string | `left` |
| required | Whether to show required mark | boolean | `false` |
| border | Whether to show inner borde | boolean | `true` |
| disabled | Whether to disable field | boolean | `false` |
| readonly | Whether to be readonly | boolean | `false` |
| autofocus | Whether to auto focus, unsupported in iOS | boolean | `false` |
| max-length | Max length of value | string ｜ number | - |
| clearable | Whether to be clearable | boolean | `false` |
| showClearIcon `4.0.2` | Whether to continue to display the clear button after losing focus, which will take effect when 'clearable' is set | boolean | `false` |
| clear-size | Clear Icon `font-size` | string | `14` |
| show-word-limit | Whether to show word limit, need to set the `max-length` prop | boolean | `false` |
| error | Whether to mark the input content in red | boolean | `false` |
| formatter | Input value formatter | `(val: string) => string` | - |
| format-trigger | When to format value, eg `onChange`、`onBlur` | string | `onChange` |
| confirm-type | The text of the button in the lower right corner of the keyboard, only valid when `type='text'`, eg `send`, `search`, `next`, ` go`, `done` | string | `done` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| update:model-value | Emitted when input value changed | `val` |
| focus | Emitted when input is focused | `event` |
| blur | Emitted when input is blurred | `event` |
| clear | Emitted when the clear icon is clicked | `event` |
| click | Emitted when component is clicked | `event` |
| click-input | Emitted when the input is clicked | `event` |
| confirm`4.2.1` | Triggered when you click the soft keyboard to confirm ｜ `event` |

### Slots

| Name | Description |
| --- | --- |
| clear | Customize the end of the input box to clear the button |
| left `4.0.1` | Customize the slot content on the left side of the input box |
| right `4.0.1` | Customize the slot content on the right side of the input box |

### Ref

| Name | Description |
| --- | --- |
| focus `4.0.6` | Focus |
| blur `4.0.6` | Blur |
| select `4.0.6` | Selct |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-input-border-bottom | _#eaf0fb_ |
| --nut-input-disabled-color | _#c8c9cc_ |
| --nut-input-required-color | _var(--nut-required-color)_ |
| --nut-input-font-size | _var(--nut-font-size-2)_ |
