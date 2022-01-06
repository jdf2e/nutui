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

## 基本用法
```html
<nut-drag>
  <div class="touch-dom">可点击，可拖拽</div>
</nut-drag>
```
## 限制拖拽方向
```html
<nut-drag direction="x">
  <div class="touch-dom">只能在X轴拖动</div>
</nut-drag>
```
## 自动吸边
```html
<nut-drag direction="x" :attract="true">
  <div class="touch-dom">拖动我</div>
</nut-drag>
```
## 限制拖拽边界
```html
<nut-drag
  :boundary="{ top: 401, left: 9, bottom: bottom(), right: right() }"
  :attract="true"
>
  <div class="touch-dom">拖动我</div>
</nut-drag>
<script>
 setup() {
    function right() {
      return document.documentElement.clientWidth - 300 - 9;
    }
    function bottom() {
      return document.documentElement.clientHeight - 559;
    }
    return {
      right,
      bottom
    };
  }
</script>
```
## Prop

| 字段      | 说明                                              | 类型           | 默认值                              |
| :-------- | :------------------------------------------------ | :------------- | :---------------------------------- |
| attract   | 是否开启自动吸边                                  | Boolean        | false                                |
| direction | 拖拽元素的拖拽方向限制，**x**/**y**/**all**三选一 | String         | 'all'                               |
| boundary  | 拖拽元素的拖拽边界                                | Object         | {top: 0,left: 0,right: 0,bottom: 0} |