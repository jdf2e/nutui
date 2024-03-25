# Calendar 日历

### 介绍

日历，可平铺/弹窗展示

### 安装

```js
import { createApp } from 'vue'
import { Calendar } from '@nutui/nutui-taro'

const app = createApp()
app.use(Calendar)
```

### 选择单个日期

> demo: calendar single dentry

### 选择日期区间

> demo: calendar range dentry

### 选择多个日期

> demo: calendar multiple dentry

### 选择周

当设置为周选择时，会根据 `first-day-of-week` 判断周的起始与结束日期。如 `first-day-of-week` 为 0 时，一周的起始日期为星期日。其他情况时，一周的起始日期为星期一。

> demo: calendar week dentry

### 自定义禁用日期

通过配置 `disabled-date` 函数回调可实现自定义禁用某些日期为不可选中状态。

当 `type` 为 `range` 时，若是设置了该函数，则需要在选中结果后，自行过滤掉禁用的日期

> demo: calendar disabled dentry

### 快捷选择-单个日期

> demo: calendar single-quick dentry

### 快捷选择-日期范围

> demo: calendar range-quick dentry

### 自定义日历

> demo: calendar custom dentry

### 平铺展示

> demo: calendar tiled dentry

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:visible | 是否可见 | boolean | `false` |
| type | 类型，日期单择`one`，区间选择`range`,日期多选`multiple`,周选择`week`(`v4.0.1`) | string | '`one`' |
| poppable | 是否弹窗状态展示 | boolean | `true` |
| is-auto-back-fill | 自动回填 | boolean | `false` |
| title | 显示标题 | string | `日期选择` |
| default-value | 默认值，单个日期选择 `string`，其他为 `string[]` | string \| string[] | `null` |
| start-date | 开始日期 | string | `今天` |
| end-date | 结束日期 | string | `距离今天 365 天` |
| show-today | 是否展示今天标记 | boolean | `true` |
| start-text | 范围选择，开始信息文案 | string | `开始` |
| end-text | 范围选择，结束信息文案 | string | `结束` |
| confirm-text | 底部确认按钮文案 | string | `确认` |
| show-title | 是否在展示日历标题 | boolean | `true` |
| show-sub-title | 是否展示日期标题 | boolean | `true` |
| to-date-animation | 是否启动滚动动画 | boolean | `true` |
| first-day-of-week | 设置周起始日 | 0-6 | `0` |
| disabled-date | 一个用来判断该日期是否被禁用的函数，接受一个`年-月-日`作为参数。 应该返回一个 Boolean 值。 | function | `-` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| choose | 选择之后或是点击确认按钮触发,日期数组（包含年月日和星期） | `(string \| string[])[]` |
| close | 关闭时触发 | - |
| select | 点击/选择后触发 | `(string \| string[])[]` |

### Slots

| 名称 | 说明 |
| --- | --- |
| btn | 自定义日历标题下部，可用以添加自定义操作 |
| day | 日期信息 |
| top-info | 日期顶部信息 |
| bottom-info | 日期底部信息 |
| footer-info`v4.1.6` | 日历自定义底部，替代confirm按钮 |

### Methods

通过 [ref](https://vuejs.org/guide/essentials/template-refs.html) 可以获取到 `Calendar` 实例并调用实例方法。

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| scrollToDate | 滚动到指定日期所在月,如：'2021-12-30' | `string` |
| initPosition `v4.0.1` | 初始化滚动位置 | 无 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-calendar-primary-color | _var(--nut-primary-color)_ |
| --nut-calendar-choose-color | _var(--nut-primary-color)_ |
| --nut-calendar-choose-font-color | _var(--nut-primary-color)_ |
| --nut-calendar-base-color | _#333333_ |
| --nut-calendar-disable-color | _#d1d0d0_ |
| --nut-calendar-base-font | _var(--nut-font-size-3)_ |
| --nut-calendar-title-font | _var(--nut-font-size-4)_ |
| --nut-calendar-title-font-weight | _500_ |
| --nut-calendar-sub-title-font | _var(--nut-font-size-2)_ |
| --nut-calendar-text-font | _var(--nut-font-size-1)_ |
| --nut-calendar-day-font | _16px_ |
| --nut-calendar-day-active-border-radius | _0px_ |
| --nut-calendar-day-font-weight | _500_ |
| --nut-calendar-day67-font-color | _var(--nut-primary-color)_ |
| --nut-calendar-month-title-font-size | _inherit_ |
