# Drag 拖拽
### 介绍

实现可拖拽的任意元素

### 安装

``` javascript
import { createApp } from 'vue';
import { Drag } from '@nutui/nutui-taro';

const app = createApp();
app.use(Drag);
```

## 限制拖拽边界
```html
<nut-drag style="width: 90%; height: 200px; border: 1px solid red" direction="all" width="120"height="40">
    <nut-button style="width: 120px; height: 40px" type="primary">触摸移动</nut-button>
</nut-drag>
```

## 限制拖拽方向
```html
 <nut-drag direction="x" width="120" height="40">
      <nut-button style="width: 120px; height: 40px" type="primary">只能X轴拖拽</nut-button>
 </nut-drag>
 <nut-drag direction="y" width="120" height="40">
    <nut-button style="width: 120px; height: 40px" type="primary">只能X轴拖拽</nut-button>
 </nut-drag>
```
## 不限制边界
```html
 <nut-drag direction="all" width="120" height="40">
    <nut-button style="width: 120px; height: 40px" type="primary" >触摸移动</nut-button>
 </nut-drag>
```
## Prop

| 字段      | 说明                                              | 类型           | 默认值                              |
| :-------- | :------------------------------------------------ | :------------- | :---------------------------------- |
| width   | 子元素宽度                                  | string        |              ''                   |
| height   | 子元素高度                                  | string        |             ''                    |
| direction | 拖拽元素的拖拽方向限制，**x**/**y**/**all**三选一 | String         | 'all'                               |
| boundary  | 拖拽元素的拖拽边界                                | Object         | {top: 0,left: 0,right: 0,bottom: 0} |