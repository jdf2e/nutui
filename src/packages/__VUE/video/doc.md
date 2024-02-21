# Video 视频播放器

### 介绍

原生 video 实现的视频播放器

### 安装

```js
import { createApp } from 'vue';
import { Video, Button } from '@nutui/nutui';

const app = createApp();
app.use(Video);
```

### 基础用法

> demo: video basic

### 自动播放

autoplay 属性设置视频自动播放

> demo: video autoplay

### 视频封面海报设置

poster 属性设置视频海报

> demo: video poster

### 行内播放

playsinline 属性设置移动端视频行内播放，阻止新打开页面播放（兼容 ios，兼容部分安卓机）

> demo: video playsinline

### 视频背景图

当设置视频为背景图时需要将 muted 静音、 disabled 禁止操作、loop 循环播放、autoplay 自动播放设置为 true，移动端需要设置 playsinline 行内展示

> demo: video background

### Ref 方法 v4.1.6

> demo: video methods

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| source | 视频地址和类型设置 | VideoSource | {} |
| options | 控制视频播放属性 | VideoOptions | {} |

### VideoSource 数据结构

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| src | 视频链接 | boolean |
| type | 视频类型 | string |

### VideoOptions 数据结构

| 键名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoplay | 是否自动播放 | boolean | `false` |
| poster | 海报设置 | string | - |
| loop | 是否循环播放 | boolean | `false` |
| controls | 是否展示操作栏 | boolean | `true` |
| muted | 是否静音 | boolean | `false` |
| volume | 音量控制 | number | `0.5` |
| disabled | 禁用操作（如循环播放的背景图，禁止操作） | boolean | `false` |
| playsinline | 是否设置为行内播放元素（解决安卓兼容问题） | boolean | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| play | 播放 | videoElm |
| pause | 暂停 | videoElm |
| playend | 播放完成回调 | videoElm |
| time | 播放时触发(current 为当前播放时间，total 为总时间) | (current:string,total:string) |

### Ref v4.1.6

| 事件名 | 说明 |
| --- | --- |
| play | 播放 |
| pause | 暂停 |
| stop | 结束 |
| muted | 静音 |
| unmuted | 取消静音 |
