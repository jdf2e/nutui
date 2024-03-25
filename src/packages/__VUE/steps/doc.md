# Steps 步骤条

### 介绍

拆分展示某项流程的步骤，引导用户按流程完成任务或向用户展示当前状态。

### 安装

```js
import { createApp } from 'vue'
import { Steps, Step } from '@nutui/nutui'

const app = createApp()
app.use(Steps)
app.use(Step)
```

### 基础用法

> demo: steps basic

### 点状样式

> demo: steps dot

### 标题和描述信息

> demo: steps desc

### 自定义图标

> demo: steps custom

### 竖向步骤条

> demo: steps vertical

### 点状步骤和垂直方向

> demo: steps vertical-dot

## API

### Steps Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 显示方向，`horizontal`,`vertical` | string | `horizontal` |
| current | 当前所在的步骤 | number \| string | `0` |
| progress-dot | 点状步骤条 | boolean | `false` |

### Steps Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click-step | 点击步骤的标题或图标时触发 | index: number |

### Step Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 流程步骤的标题 | string | `步骤` |
| content | 流程步骤的描述性文字(支持 html 结构) | string | `步骤描述` |

### Step Slots

| 名称 | 说明 |
| --- | --- |
| title | 步骤标题 |
| content | 步骤内容 |
| icon | 步骤图标 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-steps-base-icon-width | _25px_ |
| --nut-steps-base-icon-height | _25px_ |
| --nut-steps-base-icon-line-height | _25px_ |
| --nut-steps-base-icon-font-size | _13px_ |
| --nut-steps-base-title-font-size | _14px_ |
| --nut-steps-base-line-color | _#909ca4_ |
| --nut-steps-base-title-color | _#909ca4_ |
| --nut-steps-base-title-margin-bottom | _10px_ |
| --nut-steps-base-content-font-size | _14px_ |
| --nut-steps-base-content-color | _#666_ |
| --nut-steps-wait-icon-bg-color | _#959fb1_ |
| --nut-steps-wait-icon-text-color | _var(--nut-white)_ |
| --nut-steps-wait-icon-color | _var(--nut-white)_ |
| --nut-steps-wait-head-color | _#909ca4_ |
| --nut-steps-wait-head-border-color | _#909ca4_ |
| --nut-steps-wait-content-color | _#909ca4_ |
| --nut-steps-finish-head-color | _var(--nut-primary-color)_ |
| --nut-steps-finish-head-border-color | _var(--nut-primary-color)_ |
| --nut-steps-finish-title-color | _var(--nut-primary-color)_ |
| --nut-steps-finish-line-background | _var(--nut-primary-color)_ |
| --nut-steps-finish-icon-text-color | _var(--nut-white)_ |
| --nut-steps-process-head-color | _var(--nut-white)_ |
| --nut-steps-process-head-border-color | _var(--nut-primary-color)_ |
| --nut-steps-process-title-color | _var(--nut-primary-color)_ |
| --nut-steps-process-icon-text-color | _var(--nut-primary-color)_ |
