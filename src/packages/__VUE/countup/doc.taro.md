# Countup 数字滚动

### 介绍

数字滚动组件，用于数字的动态效果展示

### 安装

```js
import { createApp } from 'vue';
import { Countup } from '@nutui/nutui-taro';

const app = createApp();
app.use(Countup);
```

### 基础用法

> demo: countup basic exhibition

### 自定义数字图片展示

> demo: countup custom exhibition

### 抽奖（模拟滚动抽奖）

> demo: countup scroll exhibition

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| init-num | 初始数字 | number | `0` |
| end-num | 结束数字 | number | `0` |
| speed | 间隔数字，目前仅支持基础用法 | number | `1` |
| to-fixed | 保留小数点后几位 | number | `0` |
| start-flag | 触发数字滚动的标识 | boolean | `true` |
| during | 滚动一次运行时间 | number | `1000` |
| num-width | 数字宽度，常用于自定义无缝滚动 | number | `20` |
| num-height | 数字高度，常用于自定义无缝滚动（抽奖功能必传） | number | `20` |
| custom-change-num | 要变化的数字（用于自定义图片，`initNum`、`endNum` 在此无效） | number | `1` |
| custom-bg-img | 自定义图片（建议使用雪碧图实现，使用抽奖功能必须使用雪碧图） | string | - |
| custom-spac-num | 图片中数字之间可能会存在间距 | number | `0` |
| type | 抽奖功能传 machine，可选值为 `machine` `' '` | string | `''` |
| machine-prize-num | 奖品个数，一共多少个奖品，必传 | number | `0` |
| machine-num | 抽奖位，即滚动几个，必传 | number | `3` |
| machine-prize-level | 中奖图标，图标在雪碧图中的位置 | number | `0` |
| machine-turn-more | 滚动圈数 | number | `0` |

> 说明：抽奖功能需要结合图标位置计算，故需传入雪碧图中单个图标的高度 num-height；中奖奖品根据雪碧图中的奖品位数来定位，从 1 到 N；

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| scroll-end | 滚动结束后回调函数 | - |
