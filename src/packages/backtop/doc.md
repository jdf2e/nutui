# BackTop 组件

### 介绍

提供较长的页面快捷返回顶部功能。

### 安装

```javascript
import { BackTop } from '@nutui/nutui'
```

## 代码演示

### 基础用法 1

```js
<BackTop elId="elId" />
```

### 设置出现位置

```js
<BackTop elId="elId" distance={200} bottom={50} />
```

### 自定义样式

```js
<BackTop elId="elId" distance={200} bottom={50} children={<div>无</div>} />
```

### click 事件

```js
<BackTop
  elId="elId"
  distance={200}
  backTopClick={() => {
    console.log('触发返回顶部')
  }}
/>
```

## API

### Props

| 字段        | 说明                            | 类型    | 默认值 |
| ----------- | ------------------------------- | ------- | ------ |
| elId        | 获取监听元素的父级元素          | String  | -      |
| bottom      | 距离页面底部距离                | Number  | `20`   |
| right       | 距离页面右侧距离                | Number  | `10`   |
| distance    | 页面垂直滚动多高后出现          | Number  | `200`  |
| zIndex      | 设置组件页面层级                | Number  | `10`   |
| isAnimation | 是否有动画,和 duration 参数互斥 | Boolean | `true` |
| duration    | 设置动画持续时间                | Number  | `1000` |

### Events

| 名称         | 说明               | 回调参数          |
| ------------ | ------------------ | ----------------- |
| backTopClick | 按钮点击时触发事件 | event: MouseEvent |
