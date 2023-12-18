# Table

### Intro

Used to display the basic table

### Install

```js
import { createApp } from 'vue';
import { Table } from '@nutui/nutui';

const app = createApp();
app.use(Table);
```

### Basic Usage

> demo: table basic

### Border

> demo: table border

### Text Align

> demo: table align

### Summary Bar

> demo: table summary

### Stripes, alternating light and shade

> demo: table striped

### No data is displayed by default, and customization is supported

> demo: table nodata

### Custom cell

> demo: table custom

### Asynchronous rendering

> demo: table async

### Support sorting

> demo: table sort

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| bordered | Show border | boolean | `true` |
| columns | Header data | TableColumnProps[] | `[]` |
| data | Table data | object[] | `[]` |
| summary | Show profile | Function | - |
| striped | Whether the stripes alternate light and dark | boolean | `false` |

### TableColumnProps

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique identification of the column | string | `` |
| title | Header title | string | `` |
| stylehead | Header style | string | `` |
| stylecolumn | Column style | string | `` |
| align | Alignment of columns, optional values`left`,`center`,`right` | string | `left` |
| sorter | sort，optional values `true`,`function`, `default`, Where `default` means that you may depend on the interface after clicking, `function` you can return a specific sorting function, `default` indicates that the default sorting algorithm is adopted | boolean \| Function \| string | - |
| render | Custom render column data, high priority | Function(record) | - |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| sorter | Click the sort button to trigger | item: Data of the currently clicked header |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value | Description |
| --- | --- | --- |
| --nut-table-border-color | _#ececec_ | - |
| --nut-table-cols-padding | _10px_ | - |
| --nut-table-tr-even-bg-color | _#f3f3f3_ | - |
| --nut-table-tr-odd-bg-color | _var(--nut-white)_ | - |
