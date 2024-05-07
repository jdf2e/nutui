# TabBar 标签栏

### 介绍

底部导航常用场景

### 安装

```js
import { createApp } from 'vue'
import { Tabbar, TabbarItem } from '@nutui/nutui'

const app = createApp()
app.use(Tabbar)
app.use(TabbarItem)
```

### 基础用法

> demo: tabbar basic

### 通过名称匹配

> demo: tabbar name

### 自定义图标

通过 icon 插槽自定义图标，可以通过 slot-scope 判断标签是否选中

> demo: tabbar icon

### 自定义选中

> demo: tabbar check

### 徽标提示

设置 dot 属性后，会在图标右上角展示一个小红点；设置 value 属性后，会在图标右上角展示相应的徽标。

内部使用了 bardge 徽标组件，可将其属性直接作用于 TabbarItem props。

> demo: tabbar badge

### 自定义颜色

> demo: tabbar color

### 自定义数量

> demo: tabbar quantity

### 切换前的回调 version

> demo: tabbar before-switch

### 固定底部

> demo: tabbar fixed

## API

### Tabbar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 选中标签的索引值或者名称 | string \| number | `0` |
| bottom | 是否固定在页面底部 | boolean | `false` |
| unactive-color | icon 未激活的颜色 | string | `#7d7e80` |
| active-color | icon 激活的颜色 | string | `#1989fa` |
| safe-area-inset-bottom | 是否开启 iphone 系列全面屏底部安全区适配 | boolean | `false` |
| placeholder | 固定在底部时，是否在标签位置生成一个等高的占位元素 | boolean | `false` |
| before-switch `version` | 切换前的回调函数，返回 false 时拦截切换操作 | `(data, value) => boolean \| Promise<boolean>` | `() => true` |

### TabbarItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tab-title | 标签页的标题 | string | -- |
| name | 标签名称，作为匹配的标识符 | string | `当前标签的索引值` |
| icon | 标签页显示的[图标](#/zh-CN/component/icon) | Component | -- |
| href `deprecated` | 标签页的跳转链接；如果同时存在 `to`，优先级高于 `to` | string | -- |
| to `deprecated` | 标签页的路由对象，等于 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) 属性 | string \| object | -- |

### TabbarItem Slots

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| icon | 自定义图标 | active: boolean |

### Tabbar Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| tab-switch | 切换页签时触发事件 | 点击的数据和索引值 |

### 类型定义 v4.3.4

组件导出以下类型定义：

```js
import type {
  TabbarProps,
  TabbarInstance,
  TabbarItemProps,
  TabbarItemInstance
} from '@nutui/nutui';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-tabbar-active-color | _var(--nut-primary-color)_ |
| --nut-tabbar-unactive-color | _var(--nut-primary-color)_ |
| --nut-tabbar-border-top | _1px solid #eee_ |
| --nut-tabbar-border-bottom | _1px solid #eee_ |
| --nut-tabbar-box-shadow | _none_ |
| --nut-tabbar-item-text-font-size | _var(--nut-font-size-0)_ |
| --nut-tabbar-item-text-line-height | _initial_ |
| --nut-tabbar-height | _50px_ |
| --nut-tabbar-word-margin-top | _auto_ |
