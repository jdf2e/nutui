# Popover 气泡弹出框

### 介绍

点击或在元素上悬停鼠标，弹出气泡卡片浮层。

### 安装

```js
import { createApp } from 'vue'
import { Popover } from '@nutui/nutui'

const app = createApp()
app.use(Popover)
```

### 基础用法

Popover 支持明朗和暗黑两种风格，默认为明朗风格，将 `theme` 属性设置为 `dark` 可切换为暗黑风格。

> demo: popover basic

### 选项配置

在 list 数组中，可以通过 disabled 字段来禁用某个选项。

> demo: popover option

### 自定义内容

在名为 content 插槽中自定义内容。

> demo: popover content

### 位置自定义

通过 location 属性来控制气泡的弹出位置。可选值

```
top           # 顶部中间位置
left          # 左侧中间位置
right         # 右侧中间位置
bottom        # 底部中间位置
top-start     # 顶部左侧位置
top-end       # 顶部右侧位置
left-start    # 左侧上方位置
left-end      # 左侧下方位置
right-start   # 右侧上方位置
right-end     # 右侧下方位置
bottom-start  # 底部左侧位置
bottom-end    # 底部右侧位置
```

> demo: popover position

### 自定义目标元素

Popover 提供了 `targetId` 属性，用于匹配目标元素，在目标元素上添加对应的 id 值即可

> demo: popover target

### 自定义颜色

Popopver 提供了 2 种主题色，同样可以通过 `bg-color` 属性改变背景色

> demo: popover color

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| list | 选项列表 | List[] | `[]` |
| visible | 是否展示气泡弹出层 | boolean | `false` |
| theme | 主题风格，可选值为 `dark` | string | `light` |
| location | 弹出位置 | string | `bottom` |
| offset | 出现位置的偏移量 | [number,number] | `[0, 12]` |
| show-arrow | 是否显示小箭头 | boolean | `true` |
| custom-class | 自定义 class 值 | string | `''` |
| duration | 动画时长，单位秒 | number \| string | `0.3` |
| overlay | 是否显示遮罩层 | boolean | `false` |
| overlay-class | 自定义遮罩层类名 | string | `''` |
| overlay-style | 自定义遮罩层样式 | string | `''` |
| close-on-click-overlay | 是否在点击遮罩层后关闭菜单 | boolean | `true` |
| close-on-click-action | 是否在点击选项后关闭 | boolean | `true` |
| close-on-click-outside | 是否在点击外部元素后关闭菜单 | boolean | `true` |
| bg-color | 自定义背景色 | string | `-` |
| target-id | 自定义目标元素 id | string | `-` |
| arrow-offset | 小箭头的偏移量 | number | `0` |

### List 数据结构

List 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 选项文字 | string | `-` |
| icon | @nutui/icons-vue 图标 | VNode | `-` |
| disabled | 是否为禁用状态 | boolean | `false` |
| className | 为对应选项添加额外的类名 | string \| Array \| object | `-` |

### Slots

| 名称 | 说明 |
| --- | --- |
| content | 自定义气泡组件菜单内容 |
| reference | 触发 Popover 显示的元素内容 |

### Events

| 事件名 | 说明 |
| --- | --- |
| choose | 点击选项时触发 |
| open | 打开菜单时触发 |
| close | 关闭菜单时触发 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-popover-white-background-color | _rgba(255, 255, 255, 1)_ |
| --nut-popover-dark-background-color | _rgba(75, 76, 77, 1)_ |
| --nut-popover-border-bottom-color | _rgba(229, 229, 229, 1)_ |
| --nut-popover-primary-text-color | _rgba(51, 51, 51, 1)_ |
| --nut-popover-disable-color | _rgba(154, 155, 157, 1)_ |
| --nut-popover-menu-item-padding | _8px 0_ |
| --nut-popover-menu-item-margin | _0 8px_ |
| --nut-popover-menu-name-line-height | _normal_ |
