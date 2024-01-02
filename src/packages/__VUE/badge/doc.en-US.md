# Badge

### Intro

A red dot, number or text appearing in the upper right corner of the icon or text indicates that there is new content or pending information.

### Install

```js
import { createApp } from 'vue';
import { Badge } from '@nutui/nutui';

const app = createApp();
app.use(Badge);
```

### Basic Usage

> demo: badge basic

### Max

> demo: badge max

### Custom Color

> demo: badge color

### Custom Content

> demo: badge icon

### Custom Position

> demo: badge position

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| value | content | string | `-` |
| max | When value is a numeric value, the maximum value | number | `10000` |
| z-index | badge z-index | number | `10` |
| dot | whether to dot | boolean | `false` |
| bubble(`>v4.0.0`) | whether to bubble | Boolean | `false` |
| hidden | whether to hide | boolean | `false` |
| top | Up and down offset, support unit setting, for example: 5px | number | `0` |
| right | Left and right offset, support unit setting, for example: 5px | number | `0` |
| color | badge background color | string | `#fa2c19` |

### Slots

| Name | Description |
| --- | --- |
| default | Default slot |
| icon | Icon slot |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-badge-background-color | _linear-gradient(135deg, var(--nut-primary-color) 0%, var(--nut-primary-color-end) 100%)_ |
| --nut-badge-color | _#fff_ |
| --nut-badge-font-size | _var(--nut-font-size-1)_ |
| --nut-badge-border-radius | _14px_ |
| --nut-badge-icon-padding | _4px_ |
| --nut-badge-padding | _0 5px_ |
| --nut-badge-content-transform | _translate(50%, -50%)_ |
| --nut-badge-z-index | _1_ |
| --nut-badge-dot-width | _7px_ |
| --nut-badge-dot-height | _7px_ |
| --nut-badge-dot-border-radius | _7px_ |
| --nut-badge-dot-padding | _0px_ |
