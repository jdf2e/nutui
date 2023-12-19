# Drag 拖拽

### 介绍

实现可拖拽的任意元素

### 安装

```js
import { createApp } from 'vue';
import { Drag } from '@nutui/nutui';

const app = createApp();
app.use(Drag);
```

### 基础用法

> demo: drag basic

### 限制拖拽方向

> demo: drag direction

### 自动吸边

> demo: drag attract

### 限制拖拽边界

> demo: drag boundary

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| attract | 是否开启自动吸边（根据 screenWidth 进行吸边） | boolean | `false` |
| direction | 拖拽元素的拖拽方向限制，`x`、`y`、`all` | string | `all` |
| boundary | 拖拽元素的拖拽边界 | object | `{top: 0,left: 0,right: 0,bottom: 0}` |
