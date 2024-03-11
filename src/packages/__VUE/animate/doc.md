# Animate

### 介绍

给子元素添加动画效果

### 安装

```js
import { createApp } from 'vue';
import { Animate } from '@nutui/nutui';

const app = createApp(Animate);
app.use(Animate);
```

### 通过 show 控制动画

> demo: animate show

### 循环动画

> demo: animate loop

### 点击触发

> demo: animate click

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show`v4.1.1` | 控制动画，当值从 false 变为 true 时会触发一次动画 | boolean | `false` |
| type | 动画类型，见下方 `type` 值说明 | string | `-` |
| loop | 是否循环执行。`true`-循环执行; `false`-执行一次 | boolean | `false` |
| duration`v4.0.7` | 动画时长，单位 ms | number \| string | - |
| action | （不能与 show 同时使用）触发方式，`initial`-初始化执行; `click`-点击执行 | string | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| animate`v4.1.1` | 动画触发 | - |
| click | 点击元素时触发 | event: Event |

### type 值说明

| 序号 | 参数名称 | 参数说明 |
| --- | --- | --- |
| 1 | shake | 抖动，建议 loop 为 true |
| 2 | ripple | 不循环则是放大后缩小，循环则是心跳 |
| 3 | breath | 呼吸灯，建议 loop 为 true |
| 4 | float | 漂浮，建议 loop 为 true |
| 5 | slide-right | 由右向左划入 |
| 6 | slide-left | 由左向右划入 |
| 7 | slide-top | 由上至下划入 |
| 8 | slide-bottom | 由下至上划入 |
| 9 | jump | 跳跃，建议 loop 为 true |
| 10 | twinkle | 水波，建议 loop 为 true |
| 11 | flicker | 擦亮按钮，建议 loop 为 true |

### 类型定义 version

组件导出以下类型定义：

```js
import type {
  AnimateType,
  AnimateAction,
  AnimateProps,
  AnimateInstance
} from '@nutui/nutui';
```
