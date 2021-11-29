# Overlay 组件

### 介绍

创建一个遮罩层，通常用于阻止用户进行其他操作

### 安装


``` javascript
import { OverLay } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

```tsx
<Overlay visible={true} zindex={2000}></Overlay>
```

### 嵌套内容

```tsx
<nut-overlay visible={true} zIndex={2000}>
  <div className="wrapper">
    <div className="content">这里是正文</div>
  </div>
</nut-overlay>
```

## API

### Props

| 参数                   | 说明             | 类型           | 默认值 |
| ---------------------- | ---------------- | -------------- | ------ |
| visible                   | 当前组件是否显示 | Boolean        | `false`  |
| zIndex                | 遮罩层级         | Number | 2000   |
| duration               | 动画时长，单位秒 | Number | 0.3    |
| overlayClass          | 自定义遮罩类名   | String         | -      |
| overlayStyle          | 自定义遮罩样式   | CSSProperties  | -      |
| lockScroll          | 背景是否锁定   | Boolean  | `false`     |
| closeOnClickOverlay | 是否点击遮罩关闭 | Boolean        | `true`   |

### Events

| 事件名 | 说明       | 回调参数     |
| ------ | ---------- | ------------ |
| onClick  | 点击时触发 | event: Event |
