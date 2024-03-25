# Noticebar 通告栏

### 介绍

用于循环播放展示一组消息通知。

### 安装

```js
import { createApp } from 'vue'
import { Noticebar } from '@nutui/nutui-taro'

const app = createApp()
app.use(Noticebar)
```

### 基础用法

> demo: noticebar basic exhibition

### 自定义样式

> demo: noticebar custom exhibition

### 滚动播放

通知栏的内容长度溢出时会自动开启滚动播放，可通过 scrollable 属性可以控制该行为

> demo: noticebar scrollable exhibition

### 关闭模式

> demo: noticebar close exhibition

### 自定义内容

> demo: noticebar content exhibition

### 多行展示

文字较长时，可以通过设置 `wrapable` 属性来开启多行展示。默认为不滚动，可以通过设置 scrollable 控制为滚动。

> demo: noticebar wrap exhibition

### 纵向滚动

> demo: noticebar vertical exhibition

### 自定义滚动内容

> demo: noticebar vertical-content exhibition

### 纵向自定义右侧图标

> demo: noticebar right exhibition

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 滚动的方向，可选 `across`、`vertical` | string | `across` |
| text | 提示的信息 | string | - |
| close-mode | 是否启用关闭模式 | boolean | `false` |
| left-icon | 是否展示左侧图标, 滚动方向为 `across` 生效 | boolean | `true` |
| color | 导航栏的文字颜色 | string | - |
| background | 导航栏的背景颜色 | string | - |
| delay | 延时多少秒 | string \| number | `1` |
| scrollable | 是否可以滚动 | boolean | - |
| speed | 滚动速率 (px/s) | number | `50` |
| wrapable | 是否开启文本换行，`scrollable` 会设置为 `false` | boolean | `false` |

### Props（direction=vertical）

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| list | 纵向滚动数据列表 | Array | `[]` |
| speed | 滚动的速度 | number | `50` |
| stand-time | 停留时间(毫秒) | number | `1000` |
| complex-am | 稍复杂的动画，耗能会高 | boolean | `false` |
| height | 每一个滚动列的高度(px)，注意：在使用 `slot` 插槽定义滚动单元时，按照实际高度修改此值 | number | `40` |
| close-mode | 是否启用右侧关闭图标，可以通过 `slot[name=right-icon]` 自定义图标 | boolean | `false` |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 通知文本的内容 |
| right-icon | 自定义右侧图标 |
| left-icon | 自定义左侧图标, 滚动方向为 `across` 生效 |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 外层点击事件回调 | event: Event |
| close | 关闭通知栏时触发 | event: Event |
| across-end | 横向滚动结束时触发 | event: Event |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-noticebar-background | _rgba(251, 248, 220, 1)_ |
| --nut-noticebar-color | _#d9500b_ |
| --nut-noticebar-font-size | _14px_ |
| --nut-noticebar-across-height | _40px_ |
| --nut-noticebar-across-line-height | _24px_ |
| --nut-noticebar-box-padding | _0 16px_ |
| --nut-noticebar-wrapable-padding | _16px_ |
| --nut-noticebar-lefticon-margin | _0px 10px_ |
| --nut-noticebar-righticon-margin | _0px 10px_ |
