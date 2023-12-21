# FixedNav

### Intro

Hover stow experience Interaction for quick navigation

### Install

```js
import { createApp } from 'vue';
import { FixedNav } from '@nutui/nutui';

const app = createApp();
app.use(FixedNav);
```

### Basic Usage

> demo: fixednav basic

### Left effect

> demo: fixednav left

### Without Overlay

> demo: fixednav overlay

### Support drag and drop with drag

> demo: fixednav drag

### Custom use

> demo: fixednav custom

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| visible | visible is | boolean | `false` |
| nav-list | Suspended list content data | Array | `[]` |
| active-color | list active button color | string | `#fa2c19 Inherit theme color` |
| active-text | Stow list button copy | string | `Close Nav` |
| un-active-text | Expand list button copy | string | `Open Nav ` |
| type | Navigation direction, optional value `left` `right` | string | `right` |
| overlay | Whether to display the mask when expanding | boolean | `true` |
| position | `fixed` Vertical position | object | `{top: 'auto',bottom: 'auto'}` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| selected | Triggered after selection | `{item:item,$event:Event}` |

### Slots

| Name | Description |
| --- | --- |
| btn | slot custom button |
| list | slot custom expanded list content |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-fixednav-bg-color | _var(--nut-white)_ |
| --nut-fixednav-font-color | _var(--nut-black)_ |
| --nut-fixednav-index | _201_ |
| --nut-fixednav-btn-bg | _linear-gradient(135deg, var(--nut-primary-color) 0%, var(--nut-primary-color-end) 100%)_ |
| --nut-fixednav-item-active-color | _var(--nut-primary-color)_ |
