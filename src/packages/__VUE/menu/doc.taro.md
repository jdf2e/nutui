# Menu 菜单

### 介绍

向下弹出的菜单列表

### 安装

```js
import { createApp } from 'vue';
import { Menu, MenuItem } from '@nutui/nutui-taro';

const app = createApp();
app.use(Menu);
app.use(MenuItem);
```

### 基础用法

> demo: menu basic nav

### 自定义菜单内容

使用实例上的 toggle 方法可以手动关闭弹框。

> demo: menu custom nav

### 一行两列

> demo: menu col nav

### 自定义选中态颜色

> demo: menu color nav

### 自定义图标

> demo: menu icon nav

### 向上展开

> demo: menu up nav

### 禁用菜单

> demo: menu disabled nav

## API

### Menu Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 菜单展开方向，可选值为 `up` | string | `down` |
| duration | 动画时长，单位 s | string \| number | `0.3` |
| active-color | 选项的选中态图标颜色 | string | `#F2270C` |
| close-on-click-overlay | 是否在点击遮罩层后关闭菜单 | boolean | `true` |
| scroll-fixed | 滚动后是否固定，可设置固定位置 | boolean \| string \| number | `false` |
| title-class | 自定义标题样式类 | string | - |
| lock-scroll | 背景是否锁定 | boolean | `true` |
| overlay | 是否开启背景遮罩 | boolean | `true` |

### Menu Slots

| 名称 | 说明 |
| --- | --- |
| icon | 自定义标题图标 |

### MenuItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 菜单项标题 | string | `当前选中项文字` |
| options | 选项数组 | Array | - |
| disabled | 是否禁用菜单 | boolean | `false` |
| cols | 可以设置一行展示多少列 `options` | number | `1 ` |
| active-title-class | 选项选中时自定义标题样式类 | string | - |
| inactive-title-class | 选项非选中时自定义标题样式类 | string | - |

### MenuItem Slots

| 名称 | 说明 |
| --- | --- |
| icon | 自定义选项图标 |

### MenuItem Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选择 `option` 之后触发 | 选择的 value |
| toggle | 切换菜单展示状态，传 `true` 为显示，`false` 为隐藏，不传参为取反 | show?: boolean |
| open | 打开菜单栏时触发 | - |
| close | 关闭菜单栏时触发 | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-menu-bar-line-height | _48px_ |
| --nut-menu-item-font-size | _var(--nut-font-size-2)_ |
| --nut-menu-item-text-color | _var(--nut-title-color)_ |
| --nut-menu-item-active-text-color | _var(--nut-primary-color)_ |
| --nut-menu-bar-border-bottom-color | _#eaf0fb_ |
| --nut-menu-bar-opened-z-index | _2001_ |
| --nut-menu-item-disabled-color | _#969799_ |
| --nut-menu-title-text-padding-left | _8px_ |
| --nut-menu-title-text-padding-right | _8px_ |
| --nut-menu-item-content-padding | _12px 24px_ |
| --nut-menu-item-content-max-height | _214px_ |
| --nut-menu-item-option-padding-top | _12px_ |
| --nut-menu-item-option-padding-bottom | _12px_ |
| --nut-menu-item-option-i-margin-right | _6px_ |
| --nut-menu-bar-box-shadow | _0 2px 12px rgba(89, 89, 89, 0.12)_ |
| --nut-menu-scroll-fixed-top | _0_ |
| --nut-menu-scroll-fixed-z-index | _1000_ |
| --nut-menu-active-item-font-weight | _500_ |
