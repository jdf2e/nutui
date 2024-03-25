# Card 商品卡片

### 介绍

商品卡片，用于展示商品的图片、价格等信息

### 安装

```js
import { createApp } from 'vue'
import { Card } from '@nutui/nutui-taro'

const app = createApp()
app.use(Card)
```

### 基础用法

> demo: card basic business

### 自定义商品标签

> demo: card tag business

### 自定义店铺介绍

> demo: card shop business

### 自定义右下角内容

> demo: card footer business

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| img-url | 左侧图片 `URL` | string | - |
| title | 标题 | string | - |
| price | 商品价格 | string | - |
| vip-price | 会员价格 | string | - |
| shop-desc | 店铺介绍 | string | - |
| delivery | 配送方式 | string | - |
| shop-name | 店铺名称 | string | - |
| is-need-price | 是否需要价格展示 | boolean | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击事件 | event: MouseEvent |

### Slots

| 名称 | 说明 |
| --- | --- |
| prolist | 自定义商品介绍 |
| price | 价格自定义内容 |
| origin | 价格后方自定义内容 |
| shop-tag | 店铺介绍自定义 |
| footer | 右下角内容自定义 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-card-font-size-0 | _var(--nut-font-size-0)_ |
| --nut-card-font-size-1 | _var(--nut-font-size-1)_ |
| --nut-card-font-size-2 | _var(--nut-font-size-2)_ |
| --nut-card-font-size-3 | _var(--nut-font-size-3)_ |
| --nut-card-left-border-radius | _0_ |
| --nut-card-left-background-color | _inherit_ |
