# Sticky 粘性布局

### 介绍

使用 fixed 定位实现的类似 `position: sticky` 的吸顶效果。

### 安装

```js
import { createApp } from 'vue';
import { Sticky } from '@nutui/nutui';

const app = createApp();
app.use(Sticky);
```

### 基础用法

> demo: sticky basic

### 吸顶距离

> demo: sticky top

### 指定容器

> demo: sticky container

### 吸底距离

> demo: sticky bottom

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| position | 吸附位置（`top`、`bottom`） | string | `top` |
| top | 吸顶距离，`position` 为 `top` 时生效 | number | `0` |
| bottom | 吸底距离，`position` 为 `bottom` 时生效 | number | `0` |
| container | 容器的 `HTML` 节点 | Element | - |
| z-index | 吸附时的层级 | number | `99` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 吸附状态改变时触发 | `fixed: boolean` |
