# watermark 水印

### 介绍

页面上添加特定的文字或图案，可用于防止信息盗用。

### 安装

```js
import { createApp } from 'vue'
import { Watermark } from '@nutui/nutui-taro'

const app = createApp()
app.use(Watermark)
```

### 基础用法

> demo: watermark basic exhibition

### 局部用法

> demo: watermark part exhibition

### 多行水印 v4.2.5

`content` 属性支持传入 `string[]` 类型，展示多行水印

> demo: watermark multi exhibition

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 水印的宽度 | number | `120` |
| height | 水印的高度 | number | `64` |
| rotate | 水印绘制时，旋转的角度 | number | `-22` |
| image | 图片源，建议导出 2 倍或 3 倍图，优先使用图片渲染水印 | string | - |
| image-width | 图片宽度 | number | `120` |
| image-height | 图片高度 | number | `64` |
| z-index | 追加的水印元素的 z-index | number | `2000` |
| content | 水印文字内容 | string \| string[] | - |
| font-color | 水印文字颜色 | string | `rgba(0, 0, 0, .15)` |
| font-size | 文字大小 | string \| number | `16` |
| gap-x | 水印之间的水平间距 | number | `24` |
| gap-y | 水印之间的垂直间距 | number | `48` |
| full-page | 是否覆盖整个页面 | boolean | `true` |
| font-family | 水印文字字体 | boolean | `true` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-watermark-z-index | _2000_ |
