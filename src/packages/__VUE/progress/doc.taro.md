# Progress 进度条

### 介绍

展示操作或任务的当前进度。

### 安装

```js
import { createApp } from 'vue';
import { Progress } from '@nutui/nutui-taro';

const app = createApp();
app.use(Progress);
```

### 基础用法

> demo: progress basic exhibition

### 设置颜色高度

> demo: progress color exhibition

### 设置百分比不显示

> demo: progress text exhibition

### 设置百分比内显

> demo: progress inside exhibition

### 设置百分比内显自定义内容

> demo: progress content exhibition

### 自定义尺寸

size: `small`, `base`, `large`

> demo: progress size exhibition

### 设置状态显示

> demo: progress status exhibition

### 动态改变

> demo: progress change exhibition

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| percentage | 百分比 | number | `0` |
| is-show-percentage | 是否需要展示百分号 | boolean | `true` |
| stroke-color | 进度条背景色 | string | `#f30` |
| stroke-width | 进度条宽度 | string | - |
| size | 进度条及文字尺寸，可选值 `small` `base` `large` | string | `base` |
| show-text | 是否显示进度条文字内容 | boolean | `true` |
| text-inside | 进度条文字显示位置(false:外显，true:内显) | boolean | `false` |
| text-color | 进度条文字颜色设置 | string | `#333` |
| text-background | 进度条文字背景颜色设置 | string | - |
| status | 进度条当前状态，可选值`active(展示动画效果)` `icon(展示icon标签)` | string | `text` |

### Slots

| 名称 | 说明 | 作用域参数 |
| --- | --- | --- |
| icon-name | 右侧 `icon` 内容 | - |

### 类型定义 version

组件导出以下类型定义：

```js
import type {
  ProgressSize,
  ProgressStatus,
  ProgressProps,
  ProgressInstance
} from '@nutui/nutui-taro';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-progress-inner-background-color | _linear-gradient(135deg,var(--nut-primary-color) 0%,var(--nut-primary-color-end) 100%)_ |
| --nut-progress-insidetext-background | _var(--nut-progress-inner-background-color)_ |
| --nut-progress-outer-background-color | _#f3f3f3_ |
| --nut-progress-outer-border-radius | _12px_ |
| --nut-progress-insidetext-border-radius | _5px_ |
| --nut-progress-insidetext-padding | _3px 5px 3px 6px_ |
| --nut-progress-small-height | _5px_ |
| --nut-progress-small-text-font-size | _7px_ |
| --nut-progress-small-text-line-height | _10px_ |
| --nut-progress-small-text-padding | _2px 4px_ |
| --nut-progress-base-height | _10px_ |
| --nut-progress-base-text-font-size | _9px_ |
| --nut-progress-base-text-line-height | _13px_ |
| --nut-progress-base-text-padding | _var(--nut-progress-insidetext-padding)_ |
| --nut-progress-large-height | _15px_ |
| --nut-progress-large-text-font-size | _13px_ |
| --nut-progress-large-text-line-height | _18px_ |
| --nut-progress-large-text-padding | _var(--nut-progress-insidetext-padding)_ |
