# Checkbox 复选按钮

### 介绍

多选按钮用于选择。

### 安装

```js
import { createApp } from 'vue';
import { Checkbox, CheckboxGroup } from '@nutui/nutui';

const app = createApp();
app.use(Checkbox);
app.use(CheckboxGroup);
```

### 基础用法

> demo: checkbox basic

### 半选状态

> demo: checkbox indeterminate

### 禁用状态

> demo: checkbox disabled

### 自定义尺寸

> demo: checkbox size

### 自定义图标

通过 slot 自定义图标，建议同时设置 `icon` 和 `checkedIcon` 两个插槽

> demo: checkbox icon

### Change 事件

值发生变化时，将触发 `change` 事件

> demo: checkbox event

### CheckboxGroup

> demo: checkbox group

### CheckboxGroup 禁用

> demo: checkbox group-disabled

### CheckboxGroup 方法

> demo: checkbox methods

### CheckboxGroup 限制最大可选数

> demo: checkbox max

### 全选/半选/取消

> demo: checkbox methods2

### 按钮形状

> demo: checkbox shape

## API

### Checkbox Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 是否处于选中状态 | boolean | `false` |
| disabled | 是否禁用选择 | boolean | `false` |
| text-position | 文本所在的位置，可选值：`left`,`right` | string | `right` |
| icon-size | [图标尺寸](#/zh-CN/component/icon) | string \| number | `18` |
| label | 复选框的文本内容 | string | - |
| indeterminate | 当前是否支持半选状态，一般用在全选操作中 | boolean | `false` |
| shape | 形状，可选值：`button`、`round` | String | `round` |

### Checkbox Slots

| 名称 | 说明 |
| --- | --- |
| icon | 未选中时的图标 |
| checkedIcon | 选中时的图标 |
| indeterminate | 半选时的图标 |

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前选中项的标识符，和 `label` 相对应 | Array | - |
| disabled | 是否禁用选择,将用于其下的全部复选框 | boolean | `false` |
| max | 限制选择的数量，不能和`全选/取消/反选`一起使用, `0`表示没有限制 | number | `0` |

### Checkbox Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 值变化时触发 | (state, label), `state` 代表当前状态，`label` 表示当前选中的值 |

### CheckboxGroup Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 值变化时触发 | `label`,`label` 返回一个数组，表示当前选中项的集合 |

### CheckboxGroup Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| toggleAll | 全选/取消 | 传 `true`,表示全选，传 `false`,表示取消全选 |
| toggleReverse | 反选 | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-checkbox-label-color | _#1d1e1e_ |
| --nut-checkbox-label-disable-color | _#999_ |
| --nut-checkbox-icon-disable-color | _#d6d6d6_ |
| --nut-checkbox-label-margin-left | _15px_ |
| --nut-checkbox-label-font-size | _14px_ |
| --nut-checkbox-icon-font-size | _18px_ |
| --nut-checkbox-icon-disable-color2 | _var(--nut-help-color)_ |
| --nut-checkbox-button-padding | _5px 18px_ |
| --nut-checkbox-button-font-size | _12px_ |
| --nut-checkbox-button-border-radius | _15px_ |
| --nut-checkbox-button-border-color | _#f6f7f9_ |
| --nut-checkbox-button-background | _#f6f7f9_ |
| --nut-checkbox-button-font-color-active | _var(--nut-primary-color)_ |
| --nut-checkbox-button-border-color-active | _var(--nut-primary-color)_ |
| --nut-checkbox-button-background-active | _var(--nut-primary-color)_ |
| --nut-checkbox-display | _inline-flex_ |
| --nut-checkbox-margin-right | _20px_ |
