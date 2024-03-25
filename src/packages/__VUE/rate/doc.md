# Rate 评分

### 介绍

用于快速的评级操作，或对评价进行展示。

### 安装

```js
import { createApp } from 'vue'
import { Rate } from '@nutui/nutui'

const app = createApp()
app.use(Rate)
```

### 基础用法

> demo: rate basic

### 半星

> demo: rate half

### 自定义 icon

> demo: rate icon

### 自定义数量

> demo: rate count

### 自定义颜色

> demo: rate color

### 禁用状态

> demo: rate disabled

### 只读状态

> demo: rate read

### 绑定事件

> demo: rate event

### 自定义尺寸 35px

> demo: rate size

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前 `star` 数，可使用 `v-model` 双向绑定数据 | number \| string | - |
| count | `star` 总数 | number \| string | `5` |
| active-color | 图标选中颜色 | string | `#fa200c` |
| void-color | 图标未选中颜色 | string | `#ccc` |
| allow-half | 是否半星 | boolean | `false` |
| readonly | 是否只读 | boolean | `false` |
| disabled | 是否禁用 | boolean | `false` |
| spacing | 间距 | number \| string | `20` |
| touchable | 是否可以通过滑动手势选择评分 | boolean | `true` |
| size | `Icon` 尺寸大小，如 `20px` `2em` `2rem` | number \| string | - |
| custom-icon | 自定义 `Icon`, 传入 [VNode](https://cn.vuejs.org/guide/extras/render-function.html#creating-vnodes) | VNode | `StarFillN` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 当前分值修改时时触发的事件 | 当前值 |

### 类型定义 v4.3.3

组件导出以下类型定义：

```js
import type {
  RateProps,
  RateInstance
} from '@nutui/nutui';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-rate-icon-color | _var(--nut-primary-color)_ |
| --nut-rate-icon-void-color | _var(--nut-disable-color)_ |
