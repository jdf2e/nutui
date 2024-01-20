# Range 区间选择器

### 介绍

滑动输入条，用于在给定的范围内选择一个值。

### 安装

```js
import { createApp } from 'vue';
import { Range } from '@nutui/nutui';

const app = createApp();
app.use(Range);
```

### 基础用法

> demo: range basic

### 双滑块

> demo: range range

### 指定范围

> demo: range limit

### 设置步长

> demo: range step

### 隐藏范围

> demo: range hidden-range

### 隐藏标签

> demo: range hidden-tag

### 禁用

> demo: range disabled

### 自定义样式

> demo: range color

### 自定义按钮

> demo: range button

### 垂直方向

> demo: range vertical

### 刻度标记

> demo: range marks

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前进度百分比 | number \| number[] | `0` |
| range | 是否开启双滑块模式 | boolean | `false` |
| max | 最大值 | number \| string | `100` |
| min | 最小值 | number \| string | `0` |
| step | 步长 | number \| string | `1` |
| disabled | 是否禁用滑块 | boolean | `false` |
| vertical | 是否竖向展示 | boolean | `false` |
| hidden-range | 是否隐藏范围值 | boolean | `false` |
| hidden-tag | 是否隐藏标签 | boolean | `false` |
| active-color | 进度条激活态颜色 | string | `rgba(250, 44, 25, 1)` |
| inactive-color | 进度条非激活态颜色 | string | `rgba(255, 163, 154, 1)` |
| button-color | 按钮颜色 | string | `rgba(250, 44, 25, 1)` |
| marks | 刻度标示 | object{key:number} | `{}` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 进度变化且结束拖动后触发 | `value: number \| number[]` |
| drag-start | 开始拖动时触发 | - |
| drag-end | 结束拖动时触发 | - |

### Slots

| 名称 | 说明 |
| --- | --- |
| button | 自定义滑动按钮 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-range-tip-font-color | _#333333_ |
| --nut-range-bg-color | _var(--nut-primary-color)_ |
| --nut-range-bg-color-tick | _#fa958c_ |
| --nut-range-bar-bg-color | _linear-gradient(135deg, var(--nut-primary-color) 0%, var(--nut-primary-color-end) 100%)_ |
| --nut-range-bar-btn-bg-color | _var(--nut-white)_ |
| --nut-range-bar-btn-width | _24px_ |
| --nut-range-bar-btn-height | _24px_ |
| --nut-range-bar-btn-border | _1px solid var(--nut-primary-color)_ |
