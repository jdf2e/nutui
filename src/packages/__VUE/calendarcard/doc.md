# CalendarCard 日历卡片

### 介绍

日历卡片。在 `NutUI` >= 4.3.0 版本中提供。

### 安装

```js
import { createApp } from 'vue';
import { CalendarCard } from '@nutui/nutui';

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

> demo: calendarcard custom-range

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
| type | 类型，单个日期 `single`，多个日期 `multiple`，日期范围 `range`，周选择 `week` | `string` | `single` |
| v-model | 当前选中值，单个日期 Date 格式，多个日期/范围选择 Date[] 格式 | `Date \| Date[]` | `-` |
| startDate | 限制范围开始日期 | `Date` | `-` |
| endDate | 限制范围结束日期 | `Date` | `-` |
| firstDayOfWeek | 设置周起始日，0 为周日，1 为周一 | `0-6` | `1` |
| disableDay | 设置不可选日期 | `(day: CalendarCardDay) => boolean` | `-` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选择值发生变化时触发 | `(val: Date \| Date[]) => void` | `-` |
| day-click | 点击后触发 | `(day: CalendarCardDay) => void` | `-` |
| page-change | 切换月份时触发 | `(val: { year, month }) => void` | `-` |

### Slots

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| default | 日期信息 | `{ day: CalendarCardDay }` |
| top | 日期顶部信息 | `{ day: CalendarCardDay }` |
| bottom | 日期底部信息 | `{ day: CalendarCardDay }` |

### Methods

通过 [ref](https://vuejs.org/guide/essentials/template-refs.html) 可以获取到 `Calendar` 实例并调用实例方法。

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| jump | 在当前基础上前进或后退月数，正数向前，负数向后 | `step: number` |
| jumpTo | 跳转至特定的年月 | `year: number, month: number` |

### 类型定义

组件导出以下类型定义：

```js
import type {
  CalendarCardType,
  CalendarCardDay,
  CalendarCardMonth,
  CalendarCardValue,
  CalendarCardProps,
  CalendarCardInstance
} from '@nutui/nutui';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-calendar-choose-background-color | _rgba(#fa2c19, 0.09)_ |
| --nut-calendar-choose-color | _var(--nut-primary-color)_ |
| --nut-calendar-disable-color | _#d1d0d0_ |
| --nut-calendar-base-font | _var(--nut-font-size-3)_ |
