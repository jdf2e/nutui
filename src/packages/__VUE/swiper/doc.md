# Swiper 轮播

### 介绍

常用于一组图片或卡片轮播。

### 安装

```js
import { createApp } from 'vue';
import { Swiper, SwiperItem } from '@nutui/nutui';

const app = createApp();
app.use(Swiper);
app.use(SwiperItem);
```

### 基础用法

`auto-play` 自动轮播的时长
`init-page` 初始索引值
`pagination-visible` 是否显示分页指示器
`pagination-color` 指示器颜色自定义

> demo: swiper basic

### 异步加载

> demo: swiper async

### 动态加载

支持动态增加/删除图片

> demo: swiper dynamic

### 自定义大小

`width` 自定义轮播大小

> demo: swiper width

### 自定义分页指示器

> demo: swiper page

### 手动切换

> demo: swiper methods

### 垂直方向

> demo: swiper vertical

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 轮播卡片的宽度 | number \| string | - |
| height | 轮播卡片的高度 | number \| string | - |
| direction | 轮播方向,可选值`horizontal`,`vertical` | string | `'horizontal'` |
| pagination-visible | 分页指示器是否展示 | boolean | `false` |
| pagination-color | 分页指示器选中的颜色 | string | `'#fff'` |
| pagination-unselected-color | 分页指示器没有选中的颜色 | string | `'#ddd'` |
| loop | 是否循环轮播 | boolean | `true` |
| duration | 动画时长（单位是 ms） | number \| string | `500` |
| auto-play | 自动轮播时长，0 表示不会自动轮播 | number \| string | `0` |
| init-page | 初始化索引值 | number \| string | `0` |
| touchable | 是否可触摸滑动 | boolean | `true` |
| is-prevent-default | 滑动过程中是否禁用默认事件 | boolean | `true` |
| is-stop-propagation | 滑动过程中是否禁止冒泡 | boolean | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 滑动之后的回调 | `当前索引值 index` |

### Slots

| 名称 | 说明 |
| --- | --- |
| page | 自定义指示器 |

### Methods

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| prev | 切换到上一页 | - |
| next | 切换到下一页 | - |
| to | 切换到指定轮播 | `index:number` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-swiper-pagination-item-width | _8px_ |
| --nut-swiper-pagination-item-height | _3px_ |
| --nut-swiper-pagination-item-margin-right | _7px_ |
| --nut-swiper-pagination-item-border-radius | _2px_ |
