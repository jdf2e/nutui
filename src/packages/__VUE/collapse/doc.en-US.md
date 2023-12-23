# Collapse

### Intro

Place the content in multiple folded panels, and click the panel title to expand or shrink the content.

### Install

```js
import { createApp } from 'vue';
import { Collapse, CollapseItem } from '@nutui/nutui';

const app = createApp();
app.use(Collapse);
app.use(CollapseItem);
```

### Basic Usage

The CollapseItem component must set the name property as a unique identifier.

> demo: collapse basic

### v-model & onChange

The expanded CollapseItem can be controlled through `v-model`, which is an array type by default, where the value is the name attribute of the corresponding CollapseItem.

> demo: collapse data

### 手风琴

Accordion mode can be set through `accordion`, and up to one panel can be expanded. In this case, `v-model` is a single name.

> demo: collapse accordion

### 自定义折叠图标

Set a custom icon through the `slots.icon` or `props.icon` property.

> demo: collapse custom

### 禁用状态

> demo: collapse disabled

### 设置固定内容（不折叠）

> demo: collapse extra

## API

### Collapse Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | `name` of the currently expanded panel | accordion-mode: string \| number<br>non-accordion-mode: (string \| number)[] | `-` |
| accordion | Whether to enable accordion mode | boolean | `false` |

### CollapseItem Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| name | unique identifier, required | string \| number | `-1` |
| title | The content on the left side of the title bar, supports slot input (`props` input has a higher priority) | string | `-` |
| value | The content on the right side of the title bar, support slot input (`props` input has a higher priority) | string | `-` |
| icon | The icon component on the left side of the title bar, equivalent to the `nutui-icon` component | - | `-` |
| label | title bar description | number \| string | `-` |
| rotate | Click the rotation angle of folding and unfolding, effective in the custom icon mode | string \| number | `180` |
| disabled | whether the title bar is disabled | boolean | `false` |
| border | Whether to display borders | boolean | `true` |

### CollapseItem Slots

| Name | Description |
| --- | --- |
| title | Content slot on the left side of the title bar |
| alue | Right content slot of the title bar |
| extra | Set fixed content under the title (no folding) |
| icon`4.2.0` | Set a custom icon |

### Events

| Event | Description | Callback parameter |
| --- | --- | --- |
| change | Triggered when switching panels | `(modelValue, currName, status)` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-collapse-item-padding | _13px 36px 13px 26px_ |
| --nut-collapse-item-color | _#666666_ |
| --nut-collapse-item-disabled-color | _#c8c9cc_ |
| --nut-collapse-item-icon-color | _#666666_ |
| --nut-collapse-item-font-size | _var(--nut-font-size-2)_ |
| --nut-collapse-item-line-height | _24px_ |
| --nut-collapse-item-sub-title-color | _#666666_ |
| --nut-collapse-wrapper-content-padding | _12px 26px_ |
| --nut-collapse-wrapper-empty-content-padding | _0 26px_ |
| --nut-collapse-wrapper-content-color | _#666666_ |
| --nut-collapse-wrapper-content-font-size | _var(--nut-font-size-2)_ |
| --nut-collapse-wrapper-content-line-height | _1.5_ |
| --nut-collapse-wrapper-content-background-color | _var(--nut-white)_ |
