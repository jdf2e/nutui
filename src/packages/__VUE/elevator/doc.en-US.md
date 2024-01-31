# Elevator

### Intro

It is used to quickly locate the list and display the index

### Install

```js
import { createApp } from 'vue';
import { Elevator } from '@nutui/nutui';

const app = createApp();
app.use(Elevator);
```

### Basic Usage

> demo: elevator basic

### Custom index

> demo: elevator custom

### Sticky

> demo: elevator sticky

### Custom Content

> demo: elevator content

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| height | Height of elevator area | number \| string | `200px` |
| accept-key | Index key value | string | `title` |
| index-list | Index list | Array（`item` needs to contain `id` and `name` attributes, and `name` supports passing in `html` structure） | `[{id: 0, name: ''}]` |
| is-sticky | Whether the index is ceiling | boolean | `false` |
| space-height | Up and down spacing of right anchor point | number | `23` |
| title-height | Height of left index | number | `35` |

### Slots

| Name | Description |
| --- | --- |
| default | Customize the contents of each data under the left index |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click-item | Click content | `key: string, item: { id: 0, name: '' }` |
| click-index | Click index | `key: string` |
| change | Change index | `index: number` |

### Methods

| Name | Description | Arguments |
| --- | --- | --- |
| scrollTo | Scroll to the location of the corresponding index | `index:number` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-elevator-list-item-highcolor | _var(--nut-primary-color)_ |
| --nut-elevator-list-item-font-size | _12px_ |
| --nut-elevator-list-item-font-color | _#333333_ |
| --nut-elevator-list-item-name-padding | _0 20px_ |
| --nut-elevator-list-item-name-height | _30px_ |
| --nut-elevator-list-item-name-line-height | _30px_ |
| --nut-elevator-list-item-code-font-size | _14px_ |
| --nut-elevator-list-item-code-font-color | _#1a1a1a_ |
| --nut-elevator-list-item-code-font-weight | _500_ |
| --nut-elevator-list-item-code-padding | _0 20px_ |
| --nut-elevator-list-item-code-height | _35px_ |
| --nut-elevator-list-item-code-line-height | _35px_ |
| --nut-elevator-list-item-code-after-width | _100%_ |
| --nut-elevator-list-item-code-after-height | _1px_ |
| --nut-elevator-list-item-code-after-bg-color | _#f5f5f5_ |
| --nut-elevator-list-item-code-current-box-shadow | _0 3px 3px 1px rgba(240, 240, 240, 1)_ |
| --nut-elevator-list-item-code-current-bg-color | _#fff_ |
| --nut-elevator-list-item-code-current-border-radius | _50%_ |
| --nut-elevator-list-item-code-current-width | _45px_ |
| --nut-elevator-list-item-code-current-height | _45px_ |
| --nut-elevator-list-item-code-current-line-height | _45px_ |
| --nut-elevator-list-item-code-current-position | _absolute_ |
| --nut-elevator-list-item-code-current-right | _60px_ |
| --nut-elevator-list-item-code-current-top | _50%_ |
| --nut-elevator-list-item-code-current-transform | _translateY(-50%)_ |
| --nut-elevator-list-item-code-current-text-align | _center_ |
| --nut-elevator-list-item-bars-position | _absolute_ |
| --nut-elevator-list-item-bars-right | _8px_ |
| --nut-elevator-list-item-bars-top | _50%_ |
| --nut-elevator-list-item-bars-transform | _translateY(-50%)_ |
| --nut-elevator-list-item-bars-padding | _15px 0_ |
| --nut-elevator-list-item-bars-background-color | _#eeeff2_ |
| --nut-elevator-list-item-bars-border-radius | _6px_ |
| --nut-elevator-list-item-bars-text-align | _center_ |
| --nut-elevator-list-item-bars-z-index | _1_ |
| --nut-elevator-list-item-bars-inner-item-padding | _3px_ |
| --nut-elevator-list-item-bars-inner-item-font-size | _10px_ |
| --nut-elevator-list-fixed-color | _var(--nut-primary-color)_ |
| --nut-elevator-list-fixed-bg-color | _var(--nut-white)_ |
| --nut-elevator-list-fixed-box-shadow | _0 0 10px #eee_ |
| --nut-elevator-list-item-bars-inner-item-active-color | _var(--nut-primary-color)_ |
