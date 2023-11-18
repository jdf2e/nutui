# Cell 单元格

### 介绍

列表项，可组成列表。

### 安装

```js
import { createApp } from 'vue';
import { Cell, CellGroup } from '@nutui/nutui';

const app = createApp();
app.use(Cell);
app.use(CellGroup);
```

### 基础用法

> demo: cell basic

### 尺寸设置 large

> demo: cell size

### 默认插槽

> demo: cell slot

### 右侧 desc 插槽 v4.1.6

> demo: cell desc

### 左侧 title 插槽

> demo: cell title

### CellGroup 分组用法

> demo: cell group

### 右侧 link 插槽

> demo: cell link

### 左侧 icon 插槽

> demo: cell icon

### 设置 align

> demo: cell align

### 垂直居中

通过 `center` 属性可以让 Cell 的左右内容都垂直居中。

> demo: cell center

## API

### CellGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 分组标题 | string | - |
| desc | 分组描述 | string | - |

### Cell Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题名称 | string | - |
| sub-title | 左侧副标题 | string | - |
| desc | 右侧描述 | string | - |
| desc-text-align | 右侧描述文本对齐方式 [text-align](https://www.w3school.com.cn/cssref/pr_text_text-align.asp) | string | `right` |
| is-link | 是否展示右侧箭头并开启点击反馈 | boolean | `false` |
| round-radius | 圆角半径 | number | `6px` |
| url | 点击后跳转的链接地址 | string | - |
| to | 点击后跳转的目标路由对象，同 `vue-router` 的 [to 属性](https://router.vuejs.org/zh/api/#to) 属性 | string \| object | - |
| replace | 是否在跳转时替换当前页面历史 | boolean | `false` |
| center | 是否使内容垂直居中 | boolean | `false` |
| size | 单元格大小，可选值为 `large` | string | - |

### Cell Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击事件 | `event:Event` |

### Cell Slots

| 名称 | 说明 |
| --- | --- |
| icon | 自定义左侧 `icon` 区域 |
| default | 自定义内容 |
| link | 自定义右侧 `link` 区域 |
| title | 自定义 `title` 标题区域 |
| desc`v4.1.6` | 自定义 `desc` 描述区域 |

### CellGroup Slots

| 名称 | 说明 |
| --- | --- |
| title | 自定义 `title` 标题区域 |
| desc | 自定义 `desc` 描述区域 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-cell-color | _var(--nut-title-color2)_ |
| --nut-cell-title-font | _var(--nut-font-size-2)_ |
| --nut-cell-title-desc-font | _var(--nut-font-size-1)_ |
| --nut-cell-desc-font | _var(--nut-font-size-2)_ |
| --nut-cell-desc-color | _var(--nut-disable-color)_ |
| --nut-cell-border-radius | _6px_ |
| --nut-cell-padding | _13px 16px_ |
| --nut-cell-line-height | _20px_ |
| --nut-cell-after-right | _16px_ |
| --nut-cell-after-border-bottom | _1px solid #f5f6f7_ |
| --nut-cell-default-icon-margin | _0 4px 0 0px_ |
| --nut-cell-large-title-font | _var(--nut-font-size-large)_ |
| --nut-cell-large-title-desc-font | _var(--nut-font-size-base)_ |
| --nut-cell-large-padding | _15px 16px_ |
| --nut-cell-background | _var(--nut-white)_ |
| --nut-cell-box-shadow | _0px 1px 7px 0px rgba(237, 238, 241, 1)_ |
| --nut-cell-group-title-padding | _0 10px_ |
| --nut-cell-group-title-color | _#909ca4_ |
| --nut-cell-group-title-font-size | _var(--nut-font-size-2)_ |
| --nut-cell-group-title-line-height | _20px_ |
| --nut-cell-group-desc-padding | _0 10px_ |
| --nut-cell-group-desc-color | _#909ca4_ |
| --nut-cell-group-desc-font-size | _var(--nut-font-size-1)_ |
| --nut-cell-group-desc-line-height | _16px_ |
| --nut-cell-group-background-color | _var(--nut-white)_ |
