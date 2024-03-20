# Navbar

### Intro

Provide navigation function, often used at the top of the page.

### Install

```js
import { createApp } from 'vue';
import { Navbar } from '@nutui/nutui';

const app = createApp();
app.use(Navbar);
```

### Basic Usage

> demo: navbar basic

### Custom Left Slot

> demo: navbar left

### Custom Right Slot

> demo: navbar right

### Custom Title Content

> demo: navbar title

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | string | - |
| left-text | Left Text | string | - |
| desc | Desc | string | - |
| left-show | Whether to show the left arrow | boolean | `false` |
| title-icon | Whether to show icon in title | boolean | `false` |
| border | Whether to show bottom border | boolean | `false` |
| fixed | Is it pinned to the top | boolean | `false` |
| placeholder | Whether to generate a placeholder element when fixed | boolean | `false` |
| safe-area-inset-top | Whether to enable top safety zone adaptation | boolean | `false` |
| z-index | Z-index | number ｜ string | - |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click-title`4.1.5` | Click page title event | event:Event |
| click-icon`4.1.5` | Click the page title icon event | event:Event |
| click-right`4.1.5` | Click right button event | event:Event |
| click-back`4.1.5` | Click left Icon event | event:Event |
| on-click-title | Click page title event | event:Event |
| on-click-icon | Click the page title icon event | event:Event |
| on-click-right | Click right button event | event:Event |
| on-click-back | Click left Icon event | event:Event |

### Slots

| Name | Description |
| --- | --- |
| left | Customize left content |
| right | Customize the content on the right |
| content | Customize the middle content of the navigation bar |
| left-show | Custom icon of left arrow |
| title-icon | Custom icon in header |

### Types v4.3.3

The component exports the following type definitions:

```js
import type {
  NavbarProps,
  NavbarInstance
} from '@nutui/nutui';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-navbar-height | _44px_ |
| --nut-navbar-padding | _0 16px_ |
| --nut-navbar-background | _var(--nut-white)_ |
| --nut-navbar-box-shadow | _0px 1px 7px 0px rgba(237, 238, 241, 1)_ |
| --nut-navbar-color | _var(--nut-title-color2)_ |
| --nut-navbar-title-base-font | _var(--nut-font-size-2)_ |
| --nut-navbar-title-font | _var(--nut-font-size-2)_ |
| --nut-navbar-title-font-weight | _0_ |
| --nut-navbar-title-font-color | _var(--nut-navbar-color)_ |
| --nut-navbar-title-width | _100px_ |
| --nut-navbar-title-icon-margin | _0 0 0 13px_ |
