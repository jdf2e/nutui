# Navbar 头部导航

### 介绍

提供导航功能，常用于页面顶部。

### 安装

```js
import { createApp } from 'vue';
import { Navbar } from '@nutui/nutui';

const app = createApp();
app.use(Navbar);
```

### 基础用法

> demo: navbar basic

### 自定义左侧插槽

> demo: navbar left

### 自定义右侧插槽

> demo: navbar right

### 自定义标题内容

> demo: navbar title

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题名称 | string | - |
| left-text | 左侧文案 | string | - |
| desc | 右侧描述 | string | - |
| left-show | 是否展示左侧箭头 | boolean | `false` |
| title-icon | 标题中是否展示 `icon` | boolean | `false` |
| border | 是否显示下边框 | boolean | `false` |
| fixed | 是否固定到顶部 | boolean | `false` |
| placeholder | 固定在顶部时，是否在标签位置生成一个等高的占位元素 | boolean | `false` |
| safe-area-inset-top | 是否开启顶部安全区适配 | boolean | `false` |
| z-index | 导航栏 `z-index` | number ｜ string | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click-title`4.1.5` | 点击页面标题事件 | event:Event |
| click-icon`4.1.5` | 点击页面标题 `icon` 事件 | event:Event |
| click-right`4.1.5` | 点击右侧按钮事件 | event:Event |
| click-back`4.1.5` | 点击左侧图标事件 | event:Event |
| on-click-title | 点击页面标题事件 | event:Event |
| on-click-icon | 点击页面标题 `icon` 事件 | event:Event |
| on-click-right | 点击右侧按钮事件 | event:Event |
| on-click-back | 点击左侧图标事件 | event:Event |

### Slots

| 名称 | 说明 |
| --- | --- |
| left | 自定义左侧内容 |
| right | 自定义右侧内容 |
| content | 自定义导航栏中间内容 |
| left-show | 左侧箭头自定义图标 |
| title-icon | 标题中自定义图标 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-navbar-height | _44px_ |
| --nut-navbar-margin-bottom | _20px_ |
| --nut-navbar-padding | _0 16px_ |
| --nut-navbar-background | _var(--nut-white)_ |
| --nut-navbar-box-shadow | _0px 1px 7px 0px rgba(237, 238, 241, 1)_ |
| --nut-navbar-color | _var(--nut-title-color2)_ |
| --nut-navbar-title-base-font | _var(--nut-font-size-2)_ |
| --nut-navbar-title-font | _var(--nut-font-size-2)_ |
| --nut-navbar-title-font-weight | _0_ |
| --nut-navbar-title-font-color | _var(--nut-navbar-color)_ |
| --nut-navbar-title-width | _100px_ |
| --nut-navbar-title-icon-margin | _0 0 0 13px_ |
