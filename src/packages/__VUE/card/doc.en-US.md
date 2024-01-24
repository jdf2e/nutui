# Card

### Intro

Used to display product pictures, prices and other information.

### Install

```js
import { createApp } from 'vue';
import { Card } from '@nutui/nutui';

const app = createApp();
app.use(Card);
```

### Usage

### Basic Usage

> demo: card basic

### Custom prolist

> demo: card tag

### Custom Content

> demo: card shop

### Customize bottom right content

> demo: card footer

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| img-url | Left thumb image `URL` | string | - |
| title | Title | string | - |
| price | Price | string | - |
| vip-price | vip-price | string | - |
| shop-desc | shop-desc | string | - |
| delivery | delivery | string | - |
| shop-name | shop-name | string | - |
| is-need-price | Whether price display is required | Boolean | `true` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | click event | event: MouseEvent |

### Slots

| Name | Description |
| --- | --- |
| prolist | Custom product introduction |
| price | Custom price |
| origin | Custom content behind the price |
| shop-tag | Custom shop introduction |
| footer | Customize bottom right content |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-card-font-size-0 | _var(--nut-font-size-0)_ |
| --nut-card-font-size-1 | _var(--nut-font-size-1)_ |
| --nut-card-font-size-2 | _var(--nut-font-size-2)_ |
| --nut-card-font-size-3 | _var(--nut-font-size-3)_ |
| --nut-card-left-border-radius | _0_ |
| --nut-card-left-background-color | _inherit_ |
