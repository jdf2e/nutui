# Countdown 倒计时

### 介绍

用于实时展示倒计时数值，支持毫秒精度。

### 安装

```js
import { createApp } from 'vue'
import { Countdown } from '@nutui/nutui'

const app = createApp()
app.use(Countdown)
```

### 基础用法

> demo: countdown basic

### 自定义格式

通过设置 `format` 属性可实现不同的倒计时展示文本

> demo: countdown format

### 毫秒级渲染

> demo: countdown millisecond

### 控制开始和暂停倒计时

通过 `paused` 属性实现倒计时的暂停和重启

> demo: countdown control

### 自定义展示样式

> demo: countdown custom

### Ref 方法

通过 `ref` 获取到组件实例后，可以调用 `start`、`pause`、`reset` 方法。在使用手动控制时，通过 `time` 属性实现倒计时总时长，单位为毫秒。`start-time`、`end-time` 属性失效

> demo: countdown ref

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前时间，自定义展示内容时生效 | object | `{}` |
| start-time | 开始时间 | string \| number | `Date.now()` |
| end-time | 结束时间 | string \| number | `Date.now()` |
| format | 时间格式 | string | `HH:mm:ss` |
| millisecond | 是否开启毫秒级渲染 | boolean | `false` |
| auto-start | 是否自动开始倒计时 | boolean | `true` |
| time | 倒计时显示时间，单位是毫秒。`auto-start` 为 `false` 时生效 | string \| number | `0` |
| paused | 是否暂停 | boolean | `false` |

### format 格式

| 格式 | 说明 |
| --- | --- |
| DD | 天数 |
| HH | 小时 |
| mm | 分钟 |
| ss | 秒数 |
| S | 毫秒（1 位） |
| SS | 毫秒（2 位） |
| SSS | 毫秒（3 位） |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| end`v4.1.5` | 倒计时结束时 | 剩余时间戳 |
| paused`v4.1.5` | 暂停时 | 剩余时间戳 |
| restart`v4.1.5` | 暂停时 | 剩余时间戳 |
| on-end | 倒计时结束时 | 剩余时间戳 |
| on-paused | 暂停时 | 剩余时间戳 |
| on-restart | 暂停时 | 剩余时间戳 |

### Methods

通过 `ref` 可以获取到 `Countdown` 实例并调用实例方法。

| 方法名 | 说明 |
| --- | --- |
| start | 开始倒计时 |
| pause | 暂停倒计时 |
| reset | 重设倒计时，若 `auto-start`为 `true`，重设后会自动开始倒计时 |

### 类型定义 version

组件导出以下类型定义：

```js
import type {
  CountdownProps,
  CountdownInstance
} from '@nutui/nutui'
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-countdown-display | _flex_ |
| --nut-countdown-color | _inherit_ |
| --nut-countdown-font-size | _initial_ |
