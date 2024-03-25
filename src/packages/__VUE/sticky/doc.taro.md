# Sticky 粘性布局

### 介绍

使用 fixed 定位实现的类似 `position: sticky` 的吸顶效果。

### 安装

```js
import { createApp } from 'vue'
import { Sticky } from '@nutui/nutui-taro'

const app = createApp()
app.use(Sticky)
```

### 基础用法

> demo: sticky basic layout

### 吸顶距离

> demo: sticky top layout

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| top | 吸顶距离 | number | `0` |
| z-index | 吸附时的层级 | number | `99` |
