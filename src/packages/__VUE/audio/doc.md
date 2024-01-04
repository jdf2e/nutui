# Audio 组件

### 介绍

用于音频播放

### 安装

```js
import { createApp } from 'vue';
import { Audio } from '@nutui/nutui';

const app = createApp();
app.use(Audio);
```

### 基础用法

> demo: audio basic

### 语音播放

> demo: audio play

### 进度条展示

> demo: audio progress

### 自定义操作按钮

> demo: audio control

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| url | 语音播放的连接 | string | `''` |
| muted | 是否静音 | boolean | `false` |
| autoplay | 是否自动播放 | boolean | `false` |
| loop | 是否循环播放 | boolean | `false` |
| preload | 是否预加载语音 | string | `auto` |
| type | 展示形式，可选值：`controls` 控制面板 `progress` 进度条 `icon` 图标 `none` 自定义 | string | `progress` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| fast-back | 触发语音快退 | 返回当前播放时长（单位：毫秒） |
| forward | 触发语音快进 | 返回当前播放时长（单位：毫秒） |
| play | 触发播放/暂停语音 | 返回当前播放状态 |
| ended | 语音播放完成，当 `loop == false` 时生效 | —— |
| mute | 触发静音 | —— |
| change-progress | 当进度条改变时触发 | 返回当前播放时长（单位：毫秒） |
| can-play | 当可以播放媒体文件时触发 | `event: Event` |
