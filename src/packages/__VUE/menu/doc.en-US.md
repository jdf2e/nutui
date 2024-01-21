# Menu

### Intro

The menu list that pops down downwards.

### Install

```js
import { createApp } from 'vue';
import { Menu, MenuItem } from '@nutui/nutui';

const app = createApp();
app.use(Menu);
app.use(MenuItem);
```

### Basic Usage

> demo: menu basic

### Custom Menu Content

Popup can be closed with toggle method in menu instance.

> demo: menu custom

### Two Cols In One Line

> demo: menu col

### Custom Active Color

> demo: menu color

### Custom Icons

> demo: menu icon

### Expand Directions

> demo: menu up

### Disable Menu

> demo: menu disabled

## API

### Menu Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| direction | Expand direction, can be set to up | string | `down` |
| duration | duration time, s | string \| number | `0.3` |
| active-color | Active color of title and option | string | `#F2270C` |
| close-on-click-overlay | Whether to close when overlay is clicked | boolean | `true` |
| scroll-fixed | Whether to fixed when window is scrolled, fixed position can be set | boolean \| string \| number | `false` |
| title-class | Custome title class | string | - |
| lock-scroll | Whether the background is locked | boolean | `true` |
| overlay | overlay | boolean | `true` |

### Menu Slots

| Name | Description |
| --- | --- |
| icon | Custom title icon |

### MenuItem Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Item title | string | `当前选中项文字` |
| options | Options | Array | - |
| disabled | Whether to disable dropdown item | boolean | `false` |
| cols | Display how many options in one line | number | `1` |
| active-title-class | Active custome title class | string | - |
| inactive-title-class | Inactive custome title class | string | - |

### MenuItem Slots

| Name | Description |
| --- | --- |
| icon | Custom option icon |

### MenuItem Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | Emitted select option changed | Selected value |
| toggle | Toggle menu display status, `true` to show，`false` to hide, no param is negated | show?: boolean |
| open | Emitted when opening menu | - |
| close | Emitted when closing menu | - |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-menu-bar-line-height | _48px_ |
| --nut-menu-item-font-size | _var(--nut-font-size-2)_ |
| --nut-menu-item-text-color | _var(--nut-title-color)_ |
| --nut-menu-item-active-text-color | _var(--nut-primary-color)_ |
| --nut-menu-bar-border-bottom-color | _#eaf0fb_ |
| --nut-menu-bar-opened-z-index | _2001_ |
| --nut-menu-item-disabled-color | _#969799_ |
| --nut-menu-title-text-padding-left | _8px_ |
| --nut-menu-title-text-padding-right | _8px_ |
| --nut-menu-item-content-padding | _12px 24px_ |
| --nut-menu-item-content-max-height | _214px_ |
| --nut-menu-item-option-padding-top | _12px_ |
| --nut-menu-item-option-padding-bottom | _12px_ |
| --nut-menu-item-option-i-margin-right | _6px_ |
| --nut-menu-bar-box-shadow | _0 2px 12px rgba(89, 89, 89, 0.12)_ |
| --nut-menu-scroll-fixed-top | _0_ |
| --nut-menu-scroll-fixed-z-index | _1000_ |
| --nut-menu-active-item-font-weight | _500_ |
