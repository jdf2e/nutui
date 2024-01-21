# SideNavbar

### Intro

For content selection and switching

### Install

```js
import { createApp } from 'vue';
import { SideNavbar, SubSideNavbar, SideNavbarItem } from '@nutui/nutui';

const app = createApp();
app.use(SideNavbar);
app.use(SubSideNavbar);
app.use(SideNavbarItem);
```

### Basic Usage

> demo: sidenavbar basic

### Popup

> demo: sidenavbar popup

### Nesting (up to three layers recommended)

> demo: sidenavbar nest

## API

### SideNavbar Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| offset | Navigation indent width | number \| string | `15` |

### SubSideNavbar Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Navigation title | string | `` |
| ikey | Navigation unique identifier | number \| string | `` |
| open | Whether navigation is expanded by default | boolean | `true` |

### SideNavbarItem Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Navigation title | string | `15` |
| ikey | Navigation unique identifier | number \| string | `` |

### SubSideNavbar Events

| Event | Description | Arguments |
| --- | --- | --- |
| title-click | Navigation Click | - |

### SideNavbarItem Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Navigation Click | - |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-sidenavbar-content-bg-color | _var(--nut-white)_ |
| --nut-sidenavbar-sub-title-border-color | _#f6f6f6_ |
| --nut-sidenavbar-sub-title-bg-color | _#f6f6f6_ |
| --nut-sidenavbar-sub-title-font-size | _var(--nut-font-size-large)_ |
| --nut-sidenavbar-sub-title-radius | _0_ |
| --nut-sidenavbar-sub-title-border | _0_ |
| --nut-sidenavbar-sub-title-width | _100%_ |
| --nut-sidenavbar-sub-title-height | _40px_ |
| --nut-sidenavbar-sub-title-text-line-height | _40px_ |
| --nut-sidenavbar-sub-title-text-color | _var(--nut-title-color)_ |
| --nut-sidenavbar-item-title-color | _#333_ |
| --nut-sidenavbar-item-title-bg-color | _var(--nut-white)_ |
| --nut-sidenavbar-item-height | _40px_ |
| --nut-sidenavbar-item-line-height | _40px_ |
| --nut-sidenavbar-item-font-size | _16px_ |
