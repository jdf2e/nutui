# Drag 拖拽
### 介绍

实现可拖拽的任意元素

### 安装

``` javascript
import { createApp } from 'vue';
import { Drag } from '@nutui/nutui';

const app = createApp();
app.use(Drag);
```

### 基础用法
```html
<nut-drag>
  <div class="touch-dom">可点击，可拖拽</div>
</nut-drag>
```
### 限制拖拽方向
```html
<nut-drag direction="x">
  <div class="touch-dom">只能在X轴拖动</div>
</nut-drag>
```

### 限制拖拽方向
```html
<nut-drag direction="y">
  <div class="touch-dom">只能在Y轴拖动</div>
</nut-drag>
```
## API
### Props

| 字段      | 说明                                              | 类型           | 默认值                              |
| :-------- | :------------------------------------------------ | :------------- | :---------------------------------- |
| direction | 拖拽元素的拖拽方向限制，**x**/**y**/**all**三选一 | String         | 'all'                               |