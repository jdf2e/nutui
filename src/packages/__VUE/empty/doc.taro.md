# Empty 空状态

### 介绍

空状态时的占位提示

### 安装

```js
import { createApp } from 'vue';
import { Empty } from '@nutui/nutui-taro';

const app = createApp();
app.use(Empty);
```

### 基础用法

> demo: empty basic exhibition

### 图片类型

> demo: empty type exhibition

### 自定义图片

> demo: empty custom exhibition

### 底部内容

> demo: empty bottom exhibition

## Empty

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| image | 图片类型，可选值为 `empty`、`error`、`network`，支持传入图片 `URL` | string | `empty` |
| image-size | 图片大小，单位为 `px` | number \| string | `-` |
| description | 图片下方的描述文字 | string | `-` |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义底部内容 |
| image | 自定义图片 |
| description | 自定义描述文字 |

### 类型定义 version

组件导出以下类型定义：

```ts
import type { EmptyImage, EmptyProps, EmptyInstance } from '@nutui/nutui-taro';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-empty-padding | _32px 0_ |
| --nut-empty-image-size | _170px_ |
| --nut-empty-description-margin-top | _4px_ |
| --nut-empty-description-color | _#666666_ |
| --nut-empty-description-font-size | _14px_ |
| --nut-empty-description-line-height | _20px_ |
| --nut-empty-description-padding | _0 40px_ |
