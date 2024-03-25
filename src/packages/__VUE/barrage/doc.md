# Barrage 弹幕

### 介绍

用于话语和词组的轮播展示，适用于视频中或其他类似需求中。

### 安装

```js
import { createApp } from 'vue'
import { Barrage } from '@nutui/nutui'

const app = createApp()
app.use(Barrage)
```

### 基础用法

> demo: barrage basic

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| danmu | 弹幕列表数据 | Array | `[]` |
| frequency | 可视区域内每个弹幕出现的时间间隔 | number | `500` |
| speeds | 每个弹幕的滚动时间 | number | `5000` |
| rows | 弹幕行数，分几行展示 | number | `3` |
| top | 弹幕垂直距离 | number | `10` |
| loop | 是否循环播放 | boolean | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| add | 添加数据(通过 ref 实例使用) | - |
