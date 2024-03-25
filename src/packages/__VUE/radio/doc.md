# Radio 单选按钮

### 介绍

用于在一组备选项中进行单选

### 安装

```js
import { createApp } from 'vue'
import { Radio, RadioGroup } from '@nutui/nutui'

const app = createApp()
app.use(Radio)
app.use(RadioGroup)
```

### 基础用法

通过 `v-model` 绑定某个选项的 `label` 字段。`nut-radio` 必须与 `nut-radio-group` 相结合进行使用。

> demo: radio basic

### 水平方向

通过 `direction` 设置方向，默认值为 `vertical`，可设置为 `horizontal`。

> demo: radio horizontal

### 禁用状态

> demo: radio disabled

### 自定义图标

> demo: radio icon

### 左侧文本

通过 `text-position` 设置文本位置，默认值为 `right`，可设置为 `left`。

> demo: radio position

### 图标尺寸

> demo: radio icon-size

### 设置形状

通过 `shape` 设置 Radio 形状，默认值为 `round`，可设置为 `button`。

> demo: radio shape

### 自定义按钮尺寸 v4.2.4

通过 `size` 设置 Radio 大小，仅在 `shape` 为 `button` 时生效。

> demo: radio size

### 触发事件

> demo: radio event

## API

### Radio Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用选择 | boolean | `false` |
| icon-size | [图标尺寸](#/zh-CN/component/icon) | string \| number | `18` |
| label | 单选框标识 | string \| number \| boolean | - |
| shape | 形状，可选值为 `button`、`round` | string | `round` |
| size`v4.2.4` | 尺寸，可选值为 `small` `mini` `normal`，仅在 shape 为 `button` 时生效 | string | `normal` |

### Radio Slots

| 名称 | 说明 |
| --- | --- |
| icon | 未选中时的图标 |
| checkedIcon | 选中时的图标 |

### RadioGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前选中项的标识符，与 `label` 值一致时呈选中状态 | string \| number \| boolean | - |
| text-position | 文本所在的位置，可选值：`left`,`right` | string | `right` |
| direction | 使用横纵方向 可选值 `horizontal、vertical ` | string | `vertical` |

### RadioGroup Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 值变化时触发 | 当前选中项值（label）【设置 label 后有值、默认为空】 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-radio-label-font-color | _#1d1e1e_ |
| --nut-radio-label-font-active-color | _var(--nut-primary-color)_ |
| --nut-radio-label-disable-color | _#999_ |
| --nut-radio-icon-disable-color | _#d6d6d6_ |
| --nut-radio-label-button-border-color | _var(--nut-primary-color)_ |
| --nut-radio-label-button-background | _var(--nut-primary-color)_ |
| --nut-radio-label-margin-left | _15px_ |
| --nut-radio-button-border-radius | _15px_ |
| --nut-radio-label-font-size | _14px_ |
| --nut-radio-button-font-size | _12px_ |
| --nut-radio-button-padding | _5px 18px_ |
| --nut-radio-icon-disable-color2 | _var(--nut-help-color)_ |
