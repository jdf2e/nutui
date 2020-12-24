# Popup 弹出层 组件

### 介绍

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示

### 安装

```javascript
import { createApp } from 'vue';
import { Popup } from '@nutui/nutui';

const app = createApp();
app.use(Popup);
```

## 代码演示

### 基础用法 1

`Icon` 的 `name` 属性支持传入图标名称或图片链接。

```html
<nut-popup name="wifi"></nut-popup> <nut-popup name="mail"></nut-popup>
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
| ------------ | -------------------------------- | ------ | ---------------- |
| name         | 图标名称或图片链接               | String | -                |
| color        | 图标颜色                         | String | -                |
| size         | 图标大小，如 `20px` `2em` `2rem` | String | -                |
| class-prefix | 类名前缀，用于使用自定义图标     | String | `nutui-iconfont` |
| tag          | HTML 标签                        | String | `i`              |

### Events

| 事件名 | 说明           | 回调参数     |
| ------ | -------------- | ------------ |
| click  | 点击图标时触发 | event: Event |
