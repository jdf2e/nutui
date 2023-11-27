# CalendarCard 日历卡片

### 介绍

日历卡片

### 安装

```js
import { createApp } from 'vue';
import { CalendarCard } from '@nutui/nutui-taro';

const app = createApp();
app.use(CalendarCard);
```

### 选择单个日期

> demo: calendarcard single

### 选择多个日期

> demo: calendarcard multiple

### 选择范围

> demo: calendarcard range

### 选择周

> demo: calendarcard week

### 自定义日期信息（插槽）

> demo: calendarcard info

### 自定义周起始日

> demo: calendarcard first

### 自定义选择范围

> demo: calendarcard customRange

### 自定义禁止选择日期

> demo: calendarcard disable

### 搭配 Popup 使用

> demo: calendarcard popup

### 使用 Ref

> demo: calendarcard ref

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |


### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |


### Slots

| 名称 | 说明 |
| --- | --- |


### Methods

通过 [ref](https://vuejs.org/guide/essentials/template-refs.html) 可以获取到 `Calendar` 实例并调用实例方法。

| 方法名 | 说明 | 参数 |
| --- | --- | --- |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |

