# FixedNav 悬浮导航

### 介绍

悬浮收起体验交互，用于快捷导航

### 安装

```js
import { createApp } from 'vue'
import { FixedNav } from '@nutui/nutui'

const app = createApp()
app.use(FixedNav)
```

### 基础用法

> demo: fixednav basic

### 左侧效果

> demo: fixednav left

### 取消背景遮罩

> demo: fixednav overlay

### 配合 Drag 支持拖拽

> demo: fixednav drag

### 自定义使用

> demo: fixednav custom

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否打开 | boolean | `false` |
| nav-list | 悬浮列表内容数据 | Array | `[]` |
| active-color | 选中按钮文案颜色 | string | `#fa2c19 默认集成主题色` |
| active-text | 收起列表按钮文案 | string | `收起导航` |
| un-active-text | 展开列表按钮文案 | string | `快速导航` |
| type | 导航方向,可选值 `left` `right` | string | `right` |
| overlay | 展开时是否显示遮罩 | boolean | `true` |
| position | fixed 垂直位置 | object | `{top: 'auto',bottom: 'auto'}` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| selected | 选择之后触发 | `{item:item,$event:Event}` |

### Slots

| 名称 | 说明 |
| --- | --- |
| btn | 自定义按钮 |
| list | 自定义展开列表内容 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-fixednav-bg-color | _var(--nut-white)_ |
| --nut-fixednav-font-color | _var(--nut-black)_ |
| --nut-fixednav-index | _201_ |
| --nut-fixednav-btn-bg | _linear-gradient(135deg, var(--nut-primary-color) 0%, var(--nut-primary-color-end) 100%)_ |
| --nut-fixednav-item-active-color | _var(--nut-primary-color)_ |
