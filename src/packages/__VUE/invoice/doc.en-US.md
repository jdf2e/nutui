# Invoice

### Intro

Display the application invoice page.

### Install

```js
import { createApp } from 'vue';
import { Invoice } from '@nutui/nutui';

const app = createApp();
app.use(Invoice);
```

### Basic Usage

> demo: invoice basic

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| data | Invoice data | Array | `[]` |
| form-value | Form data object (required when using form verification) | object | - |
| submit | Whether to show the submit button | boolean | `true` |

### Data Structure of Data

The optional attributes are as follows:

| Attribute | Description | Type |
| --- | --- | --- |
| type | Type, eg `input`、`radio` | string |
| label | Label | string |
| placeholder | Input placeholder | string |
| radio-label | Radio label | string |
| form-item-prop | The v-model field of the form field is required | string |
| rules | Check rules，[Refer to FormItem Rule data structure](#/en-US/form) | Array |
| required | Is it a required field | boolean |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| submit | Method of submitting form for verification | Promise |

### Types version

The component exports the following type definitions:

```js
import type {
  InvoiceDataItem,
  InvoiceProps,
  InvoiceInstance
} from '@nutui/nutui';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-invoice-padding | _ 10px 10px 20px_ |
