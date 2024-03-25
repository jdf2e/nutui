# SideNavbar 侧边栏导航

### 介绍

用于内容选择和切换

### 安装

```js
import { createApp } from 'vue'
import { SideNavbar, SubSideNavbar, SideNavbarItem } from '@nutui/nutui-taro'

const app = createApp()
app.use(SideNavbar)
app.use(SubSideNavbar)
app.use(SideNavbarItem)
```

### 基础用法

> demo: sidenavbar basic nav

### 搭配 Popup

> demo: sidenavbar popup nav

### 嵌套（建议最多三层）

> demo: sidenavbar nest nav

## API

### SideNavbar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| offset | 导航缩进宽度 | number \| string | `15` |

### SubSideNavbar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 导航标题 | string | `` |
| open | 导航是否默认展开 | boolean | `true` |

### SideNavbarItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 导航标题 | string | `15` |

### SubSideNavbar Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| title-click | 导航点击 | - |

### SideNavbarItem Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 导航点击 | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-sidenavbar-content-bg-color | _var(--nut-white)_ |
| --nut-sidenavbar-sub-title-border-color | _#f6f6f6_ |
| --nut-sidenavbar-sub-title-bg-color | _#f6f6f6_ |
| --nut-sidenavbar-sub-title-font-size | _var(--nut-font-size-large)_ |
| --nut-sidenavbar-sub-title-radius | _0_ |
| --nut-sidenavbar-sub-title-border | _0_ |
| --nut-sidenavbar-sub-title-width | _100%_ |
| --nut-sidenavbar-sub-title-height | _40px_ |
| --nut-sidenavbar-sub-title-text-line-height | _40px_ |
| --nut-sidenavbar-sub-title-text-color | _var(--nut-title-color)_ |
| --nut-sidenavbar-item-title-color | _#333_ |
| --nut-sidenavbar-item-title-bg-color | _var(--nut-white)_ |
| --nut-sidenavbar-item-height | _40px_ |
| --nut-sidenavbar-item-line-height | _40px_ |
| --nut-sidenavbar-item-font-size | _16px_ |
