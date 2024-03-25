# trendarrow

### 介绍

带有箭头指示的百分比数字，用以展示指标趋势。

### 安装

```js
import { createApp } from 'vue'
import { TrendArrow } from '@nutui/nutui-taro'

const app = createApp()
app.use(TrendArrow)
```

### 基础用法

> demo: trendarrow basic exhibition

### 指定小数位

> demo: trendarrow digits exhibition

### 箭头在前面

> demo: trendarrow left exhibition

### 显示正负号

> demo: trendarrow sign exhibition

### 是否展示 0

> demo: trendarrow zero exhibition

### 自定义颜色

> demo: trendarrow color exhibition

### 自定义图标

> demo: trendarrow icon exhibition

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| rate | 数值，大于 0 时箭头向上，小于 0 时箭头向下 | number | - |
| digits | 小数位精度 | number | `2` |
| show-sign | 是否显示加减号 | boolean | `false` |
| show-zero | 是否显示 0 | boolean | `false` |
| arrow-left | 是否在数字左侧显示箭头 | boolean | `false` |
| sync-text-color | 文字颜色是否与箭头同步 | boolean | `true` |
| text-color | 文字颜色 | string | `#333333` |
| rise-color | 向上箭头颜色 | string | `#fa2c19` |
| drop-color | 向下箭头颜色 | string | `#64b578` |

### Slots

| 名称 | 说明 |
| --- | --- |
| up-icon | 自定义向上箭头图标，默认使用 `TriangleUp` |
| down-icon | 自定义向下箭头图标，默认使用 `TriangleDown` |

### 类型定义 version

组件导出以下类型定义：

```ts
import type { TrendArrowProps, TrendArrowInstance } from '@nutui/nutui-taro'
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-trendarrow-font-size | _14px_ |
| --nut-trendarrow-before-icon-margin | _4px_ |
