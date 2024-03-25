# Table 表格

### 介绍

用于展示基础表格

### 安装

```js
import { createApp } from 'vue'
import { Table } from '@nutui/nutui-taro'

const app = createApp()
app.use(Table)
```

### 基础用法

> demo: table basic exhibition

### 是否显示边框

> demo: table border exhibition

### 文字对齐方式

> demo: table align exhibition

### 显示总结栏

> demo: table summary exhibition

### 条纹、明暗交替

> demo: table striped exhibition

### 无数据默认展示，支持自定义

> demo: table nodata exhibition

### 自定义单元格

> demo: table custom exhibition

### 异步渲染

> demo: table async exhibition

### 支持排序

> demo: table sort exhibition

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| bordered | 是否显示边框 | boolean | `true` |
| columns | 表头数据 | TableColumnProps[] | `[]` |
| data | 表格数据 | object[] | `[]` |
| summary | 是否显示简介 | Function | - |
| striped | 条纹是否明暗交替 | boolean | `false` |

### TableColumnProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 列的唯一标识 | string | `` |
| title | 表头标题 | string | `` |
| stylehead | 表头样式 | string | `` |
| stylecolumn | 列样式 | string | `` |
| align | 列的对齐方式，可选值`left`,`center`,`right` | string | `left` |
| sorter | 排序，可选值有 `true`,`function`, `default`, 其中 `default`表示点击之后可能会依赖接口, `function`可以返回具体的排序函数, `default`表示采用默认的排序算法 | boolean \| Function \| string | - |
| render | 自定义渲染列数据，优先级高 | Function(record) | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| sorter | 点击排序按钮触发 | item: 当前点击的表头的数据 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-table-border-color | _#ececec_ |
| --nut-table-cols-padding | _10px_ |
| --nut-table-tr-even-bg-color | _#f3f3f3_ |
| --nut-table-tr-odd-bg-color | _var(--nut-white)_ |
