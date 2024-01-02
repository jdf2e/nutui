# Drag 拖拽

### 介绍

实现可拖拽的任意元素

### 安装

```js
import { createApp } from 'vue';
import { Drag } from '@nutui/nutui-taro';

const app = createApp();
app.use(Drag);
```

### 基础用法

> demo: drag basic feedback

### 限制拖拽方向

> demo: drag direction feedback

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 拖拽元素的拖拽方向限制，`x`、`y`、`all` | string | `all` |
