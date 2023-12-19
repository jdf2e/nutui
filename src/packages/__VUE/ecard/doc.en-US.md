# Ecard

### Intro

Virtual e-card selection

### Install

```js
import { createApp } from 'vue';
import { Ecard } from '@nutui/nutui';

const app = createApp();
app.use(Ecard);
```

### Basic

> demo: ecard basic

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| model-value | Price | number | `0` |
| choose-text | Main Title | string | `Select` |
| other-value-text | Other Text | string | `Other Value` |
| data-list | Ecard List | Array | `DataList[]` |
| card-amount-min | Other Min Value | number | `1` |
| card-amount-max | Other Max Value | number | `9999` |
| card-buy-min | Choose Min Value | number | `1` |
| card-buy-max | Choose Max Value | number | `9999` |
| placeholder | Placeholder | string | `Placeholder` |
| suffix | Symbol mark | string | `¥` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | Trigger event when Ecard is clicker | `value` |
| input-change | Triggered when the value changes | `value` |
| change-step | Triggered when the steps value changes | `value，modelValue` |

### Data Structure of DataList

| key | Description | Description |
| --- | --- | --- |
| price | price | string |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-ecard-bg-color | _#f0f2f5_ |
