# Backtop 返回顶部

### 介绍

提供较长的页面快捷返回顶部功能。

### 安装

```js
import { createApp } from 'vue';
import { Backtop } from '@nutui/nutui';

const app = createApp();
app.use(Backtop);
```

### 基础用法

> demo: backtop basic

### 设置出现位置

> demo: backtop distance

### 自定义样式

> demo: backtop custom

### API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| el-id | 获取监听元素的父级元素 | string | - |
| bottom | 距离页面底部距离 | number | `20` |
| right | 距离页面右侧距离 | number | `10` |
| distance | 页面垂直滚动多高后出现 | number | `200` |
| z-index | 设置组件页面层级 | number | `10` |
| is-animation | 是否有动画,和 `duration` 参数互斥 | boolean | `true` |
| duration | 设置动画持续时间 | number | `1000` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 按钮点击时触发事件 | `event: MouseEvent` |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 默认 `slot`，用以自定义内容 |

### 类型定义 v4.3.3

组件导出以下类型定义：

```ts
import type { BacktopProps, BacktopInstance } from '@nutui/nutui';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-backtop-border-color | _#e0e0e0_ |
