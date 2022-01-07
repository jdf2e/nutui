# OverLay 遮罩层

### 介绍

创建一个遮罩层，通常用于阻止用户进行其他操作

### 安装

```javascript
import { createApp } from 'vue';
// vue
import { OverLay } from '@nutui/nutui';
// taro
import { OverLay } from '@nutui/nutui-taro';

const app = createApp();
app.use(OverLay);
```

## 代码演示

### 基础用法

```html
<nut-overlay v-model:visible="state.show" :z-index="2000"></nut-overlay>
```

### 嵌套内容

```html
<nut-overlay v-model:visible="state.show2" :z-index="2000">
  <div class="wrapper">
    <div class="content">这里是正文</div>
  </div>
</nut-overlay>
```

## API

### Props

| 参数                   | 说明             | 类型           | 默认值 |
| ---------------------- | ---------------- | -------------- | ------ |
| v-model:visible                   | 当前组件是否显示 | Boolean        | `false`  |
| z-index                | 遮罩层级         | String, Number | `2000`   |
| duration               | 动画时长，单位秒 | String, Number | `0.3`    |
| overlay-class          | 自定义遮罩类名   | String         | -      |
| overlay-style          | 自定义遮罩样式   | CSSProperties  | -      |
| lock-scroll            | 背景是否锁定     | Boolean        | `false`  |
| close-on-click-overlay | 是否点击遮罩关闭 | Boolean        | `true`   |

### Events

| 事件名 | 说明       | 回调参数     |
| ------ | ---------- | ------------ |
| click  | 点击时触发 | event: Event |
