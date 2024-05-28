# Searchbar

### Intro

Search bar

### Install

```js
import { createApp } from 'vue'
import { Searchbar } from '@nutui/nutui'

const app = createApp()
app.use(Searchbar)
```

### Basic Usage

> demo: searchbar basic

### Shape

> demo: searchbar shape

### Left Slot

> demo: searchbar left

### Right Slot

> demo: searchbar right

### Background

> demo: searchbar background

### Focus Style

> demo: searchbar focus

### Clear Icon

> demo: searchbar clear

### All Slots

> demo: searchbar all

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | current input value | number / | string | `''` |
| label | left text of search box | string | `''` |
| shape | search box shape, optional value is `square` `round` | string | `round` |
| max-length | maximum input length | number \| string | `9999` |
| input-type | input box type | string | `text` |
| placeholder | The default dark pattern of the input box | string | `Please enter` |
| clearable | whether to show clear button | boolean | `true` |
| clear-icon | custom clear button icon (default use `@nutui/nutui-icons`) | Object | `CircleClose` |
| background | external background of the input box | string | `#fff` |
| input-background | background of input box | string | `#f7f7f7` |
| autofocus | Whether to automatically focus | boolean | `false` |
| focus-style | search box style when focused | Object | `-` |
| disabled | Whether to disable the input box | boolean | `false` |
| readonly | input field is read only | boolean | `false` |
| input-align | alignment, optional `left` `center` `right` | string | `left` |
| safe-area-inset-bottom`v4.1.6` | Whether to enable the security zone at the bottom of the full screen of iphone series | boolean | `false` |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| change | fires when something is entered | `val, event` |
| focus | fires on focus | `val, event` |
| blur | Triggered when out of focus | `val, event` |
| clear | Triggered when click clear | `val` |
| search | fires when the ENTER key is pressed | `val, event` |
| click-input | Fired when the input field is clicked | `event` |
| click-left-icon | Fires when the left icon is clicked | `val, event` |
| click-right-icon | Fires when the right icon is clicked | `val, event` |

### Slots

| Name | Description |
| --- | --- |
| leftin | left icon in the input box |
| leftout | left Icon outside the input box |
| rightin | right icon in the input box |
| rightout | right icon outside the input box |

### Types version

The component exports the following type definitions:

```js
import type {
  SearchbarProps,
  SearchbarInstance,
  SearchbarInputAlign,
  SearchbarShape,
} from '@nutui/nutui';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to
[ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-searchbar-background | _var(--nut-white)_ |
| --nut-searchbar-right-out-color | _var(--nut-black)_ |
| --nut-searchbar-padding | _9px 16px_ |
| --nut-searchbar-width | _100%_ |
| --nut-searchbar-input-background | _#f7f7f7_ |
| --nut-searchbar-input-padding | _0 0 0 13px_ |
| --nut-searchbar-input-height | _32px_ |
| --nut-searchbar-input-width | _100%_ |
| --nut-searchbar-input-border-radius | _16px_ |
| --nut-searchbar-input-box-shadow | _0 0 8px 0 rgba(0, 0, 0, 0.04)_ |
| --nut-searchbar-input-bar-color | _inherit_ |
| --nut-searchbar-input-bar-placeholder-color | _inherit_ |
