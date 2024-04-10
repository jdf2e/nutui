# Skeleton 骨架屏

### 介绍

在页面上待加载区域填充灰色的占位图，本质上是界面加载过程中的过渡效果。

### 安装

```js
import { createApp } from 'vue'
import { Skeleton } from '@nutui/nutui'

const app = createApp()
app.use(Skeleton)
```

### 基础用法

> demo: skeleton basic

### 传入多行

> demo: skeleton row

### 显示头像

> demo: skeleton avatar

### 标题段落圆角风格

> demo: skeleton round

### 图片组合

> demo: skeleton picture

### 显示子组件

> demo: skeleton sub

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| loading | 是否显示骨架屏 | boolean | `true` |
| width | 每行宽度 | string | `default` |
| height | 每行高度 | string | `15px` |
| animated | 是否开启骨架屏动画 | boolean | `false` |
| avatar | 是否显示头像 | boolean | `false` |
| avatar-shape | 头像形状：正方形/圆形 | string | `round` |
| avatar-size | 头像大小 | string | `50px` |
| round | 标题/段落是否采用圆角风格 | boolean | `false` |
| title | 是否显示段落标题（第一行显示） | boolean | `true` |
| row | 设置段落行数（title 下方展示） | string | `1` |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 骨架屏显示内容 |

### 类型定义 v4.3.5

组件导出以下类型定义：

```js
import type {
  SkeletonProps,
  SkeletonInstance
} from '@nutui/nutui';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-skeleton-content-avatar-background-color | _#efefef_ |
| --nut-skeleton-content-line-background-color | _#efefef_ |
| --nut-skeleton-animation-background-color | _linear-gradient(90deg,hsla(0, 0%, 100%, 0),hsla(0, 0%, 100%, 0.5) 50%, hsla(0, 0%, 100%, 0) 80%)_ |
