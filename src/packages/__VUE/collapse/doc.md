# Collapse 折叠面板

### 介绍

将内容放置在多个折叠面板中，点击面板标题可展开或收缩内容。

### 安装

```js
import { createApp } from 'vue';
import { Collapse, CollapseItem } from '@nutui/nutui';

const app = createApp();
app.use(Collapse);
app.use(CollapseItem);
```

### 基础用法

CollapseItem 组件必须设置 name 属性作为唯一标识符。

> demo: collapse basic

### 绑定数据与事件

通过 `v-model` 可以控制展开的 CollapseItem，默认情况下为数组类型，其中的值是对应 CollapseItem 的 name 属性。

> demo: collapse data

### 手风琴

通过 `accordion` 可以设置为手风琴模式，最多展开一个面板，此时 `v-model` 为单个 name。

> demo: collapse accordion

### 自定义折叠图标

通过 `slots.icon` 或者 `props.icon` 属性设置自定义图标

> demo: collapse custom

### 禁用状态

> demo: collapse disabled

### 设置固定内容（不折叠）

> demo: collapse extra

## API

### Collapse Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前展开面板的 `name` | 手风琴模式：string \| number<br>非手风琴模式：(string \| number)[] | `-` |
| accordion | 是否开启手风琴模式 | boolean | `false` |

### CollapseItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 唯一标识符，必填 | string \| number | `-1` |
| title | 标题栏左侧内容，支持插槽传入（`props` 传入的优先级更高） | string | `-` |
| value | 标题栏右侧内容，支持插槽传入（`props` 传入的优先级更高） | string | `-` |
| icon | 标题栏左侧图标组件，等同于 `nutui-icon` 组件 | - | `-` |
| label | 标题栏描述信息 | number \| string | `-` |
| rotate | 点击折叠和展开的旋转角度,在自定义图标模式下生效 | string \| number | `180` |
| disabled | 标题栏是否禁用 | boolean | `false` |
| border | 是否显示边框 | boolean | `true` |

### CollapseItem Slots

| 名称 | 说明 |
| --- | --- |
| title | 标题栏左侧内容插槽 |
| value | 标题栏右侧内容插槽 |
| extra | 设置标题下固定内容（不折叠） |
| icon`4.2.0` | 设置自定义图标 |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 切换面板时触发 | `(modelValue, currName, status)` |

### 类型定义 v4.3.1

组件导出以下类型定义：

```js
import type {
  CollapseValue,
  CollapseProps,
  CollapseInstance,
  CollapseItemProps,
  CollapseItemInstance
} from '@nutui/nutui';
```

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
