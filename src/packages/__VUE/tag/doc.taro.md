# Tag 标签

### 介绍

用于标记和分类的标签。

### 安装

```js
import { createApp } from 'vue';
import { Tag } from '@nutui/nutui-taro';

const app = createApp();
app.use(Tag);
```

### 基础用法

> demo: tag basic exhibition

### 样式风格

> demo: tag custom exhibition

### 颜色自定义

> demo: tag color exhibition

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 标签类型，可选值为 `primary`、`success`、`danger`、`warning`、`default` | string | `default` |
| color | 标签颜色 | string | - |
| text-color | 文本颜色，优先级高于 `color` 属性 | string | `white` |
| plain | 是否为空心样式 | boolean | `false` |
| round | 是否为圆角样式 | boolean | `false` |
| mark | 是否为标记样式 | boolean | `false` |
| closeable | 是否为可关闭标签 | boolean | `false` |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 标签显示内容 |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击事件 | `event` |
| close | 关闭事件 | `event` |

### 类型定义 version

组件导出以下类型定义：

```js
import type { TagType, TagProps, TagInstance } from '@nutui/nutui-taro';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-tag-font-size | _12px_ |
| --nut-tag-default-border-radius | _4px_ |
| --nut-tag-round-border-radius | _8px_ |
| --nut-tag-default-background-color | _#000000_ |
| --nut-tag-primary-background-color | _#3460fa_ |
| --nut-tag-success-background-color | _#4fc08d_ |
| --nut-tag-danger-background-color | _linear-gradient(135deg,rgba(242, 20, 12, 1) 0%,rgba(232, 34, 14, 1) 70%,rgba(242, 77, 12, 1) 100%)_ |
| --nut-tag-danger-background-color-plain | _#df3526_ |
| --nut-tag-warning-background-color | _#f3812e_ |
| --nut-tag-default-color | _#ffffff_ |
| --nut-tag-border-width | _1px_ |
| --nut-tag-plain-background-color | _#fff_ |
| --nut-tag-height | _auto_ |
