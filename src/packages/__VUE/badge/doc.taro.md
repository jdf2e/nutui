# Badge 徽标

### 介绍

出现在图标或文字右上角的红色圆点、数字或者文字，表示有新内容或者待处理的信息。

### 安装

```js
import { createApp } from 'vue'
import { Badge } from '@nutui/nutui-taro'

const app = createApp()
app.use(Badge)
```

### 基础用法

> demo: badge basic exhibition

### 最大值

> demo: badge max exhibition

### 自定义颜色

> demo: badge color exhibition

### 自定义徽标内容

> demo: badge icon exhibition

### 自定义位置

> demo: badge position exhibition

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 显示的内容 | string | `-` |
| max | `value` 为数值时，最大值 | number | `10000` |
| z-index | 徽标的 `z-index` 值 | number | `10` |
| dot | 是否为小点 | boolean | `false` |
| bubble(`>v4.0.0`) | 是否为气泡形状 | Boolean | `false` |
| hidden | 是否隐藏 | boolean | `false` |
| top | 上下偏移量，支持单位设置，可设置为：`5px` 等 | number | `0` |
| right | 左右偏移量，支持单位设置，可设置为：`5px` 等 | number | `0` |
| color | 徽标背景颜色 | string | `#fa2c19` |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 徽标包裹的子元素 |
| icon | 徽标自定义 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-badge-background-color | _linear-gradient(135deg, var(--nut-primary-color) 0%, var(--nut-primary-color-end) 100%)_ |
| --nut-badge-color | _#fff_ |
| --nut-badge-font-size | _var(--nut-font-size-1)_ |
| --nut-badge-border-radius | _14px_ |
| --nut-badge-icon-padding | _4px_ |
| --nut-badge-padding | _0 5px_ |
| --nut-badge-content-transform | _translate(50%, -50%)_ |
| --nut-badge-z-index | _1_ |
| --nut-badge-dot-width | _7px_ |
| --nut-badge-dot-height | _7px_ |
| --nut-badge-dot-border-radius | _7px_ |
| --nut-badge-dot-padding | _0px_ |
