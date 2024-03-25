# Tabs

### Intro

It is often used for the storage and display of large blocks of content in the level area, and supports the form of embedded tags and rendering loop data.

### Install

```js
import { createApp } from 'vue'
import { Tabs, TabPane } from '@nutui/nutui'

const app = createApp()
app.use(Tabs)
app.use(TabPane)
```

### Basic Usage

> demo: tabs basic

### Smile Type

> demo: tabs smile

### Without Animation

By default, Tabs uses Transform layout to implement switching animation. If other Fixed positioned components (such as Popup, Menu), etc. are used internally, style interference will occur.

You can set `animated-time` to 0. At this time, Tabs will have no switching animation and panel switching will be smoother.

> demo: tabs animated-time

### Title Align to Left v4.2.7

> demo: tabs left-align

### Auto Height

> demo: tabs auto-height

### Swipeable

> demo: tabs swipeable

### Title Scroll (horizontal)

> demo: tabs scroll

### Title Scroll (vertical)

> demo: tabs vertical

### vertical + Smile Type

> demo: tabs vertical-smile

### FontSize

> demo: tabs size

### Custom Tab

> demo: tabs custom

## API

### Tabs Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Index of active tab | number \| string | `0` |
| color | Label selection color | string | `#1a1a1a` |
| background | Tab bar background color | string | `#f5f5f5` |
| direction | Use landscape orientation optional value `horizontal`、`vertical` | string | `horizontal` |
| type | Check the bottom display style optional value `line`、`smile` | string | `line` |
| swipeable`4.0.3` | Whether to enable gestures to slide left and right | boolean | `false` |
| title-scroll | Is the tab bar scrollable | boolean | `false` |
| ellipsis | Whether to omit too long title text | boolean | `true` |
| animated-time | Switch animation duration, unit ms 0 means no `animation` and `pane-key` is required | number \| string | `300` |
| title-gutter | Label gap | number \| string | `0` |
| size | Tab bar font size optional value `large` `normal` `small` | string | `normal` |
| auto-height | Automatic height. When set to `true`, `nut-tabs` and `nut-tabs__content` will change with the height of the current `nut-tab-pane`. | boolean | `false` |
| sticky | Whether to use sticky mode | boolean | `false` |
| top | Sticky offset top | number | `0` |
| align `v4.2.7` | Title alignment in the horizontal axis direction, optional values `left` `center` | string | `center` |

### Tabs Slots

| Name | Description |
| --- | --- |
| titles | Custom Titles Area |
| default | Custom Default Content |

### TabPane Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | title | string |  |
| pane-key | Tag Key , the matching identifier | string | 默认索引 0,1,2... |
| disabled | whether to disable tabs | boolean | false |

### TabPane Slots

| Name | Description |
| --- | --- |
| default | Custom Default Content |

### Tabs Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Triggered when the label is clicked | {title,paneKey,disabled} |
| change | Fired when the currently active tab changes | {title,paneKey,disabled} |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-tabs-tab-smile-color | _var(--nut-primary-color)_ |
| --nut-tabs-titles-border-radius | _0_ |
| --nut-tabs-titles-item-large-font-size | _var(--nut-font-size-3)_ |
| --nut-tabs-titles-item-font-size | _var(--nut-font-size-2)_ |
| --nut-tabs-titles-item-small-font-size | _var(--nut-font-size-1)_ |
| --nut-tabs-titles-item-color | _var(--nut-title-color)_ |
| --nut-tabs-titles-item-active-color | _var(--nut-title-color)_ |
| --nut-tabs-titles-background-color | _var(--nut-help-color)_ |
| --nut-tabs-horizontal-tab-line-color | _linear-gradient(90deg,var(--nut-primary-color) 0%,rgba(#fa2c19, 0.15) 100%)_ |
| --nut-tabs-horizontal-titles-height | _46px_ |
| --nut-tabs-horizontal-titles-item-min-width | _50px_ |
| --nut-tabs-horizontal-titles-item-active-line-width | _40px_ |
| --nut-tabs-vertical-tab-line-color | _linear-gradient(180deg,var(--nut-primary-color) 0%,rgba(#fa2c19, 0.15) 100%)_ |
| --nut-tabs-vertical-titles-item-height | _40px_ |
| --nut-tabs-vertical-titles-item-active-line-height | _14px_ |
| --nut-tabs-vertical-titles-width | _100px_ |
| --nut-tabs-titles-item-line-border-radius | _0_ |
| --nut-tabs-titles-item-line-opacity | _1_ |
