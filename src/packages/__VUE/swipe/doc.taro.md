# Swipe 滑动手势

## 介绍

常用于单元格左右滑删除等手势操作

## 安装

```js
import { createApp } from 'vue';
import { Swipe } from '@nutui/nutui-taro';

const app = createApp();
app.use(Swipe);
```

## 代码演示

### 基础用法

> demo: swipe basic

### 禁止滑动

> demo: swipe disabled

### 左右滑动

> demo: swipe direction

### Ref 方法

> demo: swipe methods

### 自定义内容

> demo: swipe content

### 使用 SwipeGroup 控制 Swipe 之间互斥

此时各个 Swipe 的 name 为必填项。

> demo: swipe lock

## Swipe

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 唯一标识 | string | - |
| disabled | 是否禁用滑动 | string | `false` |
| touch-move-prevent-default | 是否阻止滑动事件行为 | boolean | `false` |
| touch-move-stop-propagation | 是否阻止滑动事件冒泡 | boolean | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| open | 滑动时触发，left 指向左滑，right 指向右滑 | `name, position: 'left' \| 'right'` |
| close | 关闭时触发，同上 | `name, position: 'left' \| 'right'` |

### Slots

| 名称 | 说明 |
| --- | --- |
| left | 左侧滑动内容 |
| default | 自定义内容 |
| right | 右侧滑动内容 |

### Methods

通过 [ref](https://vuejs.org/guide/essentials/template-refs.html) 可以获取到 `Swipe` 实例并调用实例方法。

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| click | 点击事件 | `name, position: 'left' \| 'content' \| 'right'` |
| open | 滑动单元格侧边栏，left 指向左滑，right 指向右滑 | `name, position: 'left' \| 'right'` |
| close | 收起单元格侧边栏，同上 | `name, position: 'left' \| 'right'` |

## SwipeGroup

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| lock`v4.1.1` | 控制内部 Swipe 互斥，即滑动打开某一个 Swipe 时，触发其余 Swipe 的 close 方法 | boolean | `false` |
