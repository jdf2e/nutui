# Avatar 头像

### 介绍

用来代表用户或事物，支持图片、图标或字符展示。

### 安装

```js
import { createApp } from 'vue'
import { Avatar } from '@nutui/nutui-taro'

const app = createApp()
app.use(Avatar)
```

### 基础用法

> demo: avatar basic exhibition

### 尺寸

支持三种尺寸：small、normal、large

> demo: avatar size exhibition

### 形状

支持两种形状：`square`、`round`

> demo: avatar shape exhibition

### 自定义颜色

> demo: avatar color exhibition

### 带徽标的头像

> demo: avatar badge exhibition

### 头像组合展现

> demo: avatar group exhibition

### 组合头像可控制层级方向

> demo: avatar zindex exhibition

### 点击事件

> demo: avatar click exhibition

### 动态修改数量

> demo: avatar count exhibition

## API

### Avatar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 头像的大小，可选值为：`large`、`normal`、`small`，支持输入数字 | string \| number | `normal` |
| shape | 头像的形状，可选值为：`square`、`round ` | string | `round` |
| color | 字体颜色 | string | `#666` |
| bg-color | 背景色 | string | `#eee` |

### AvatarGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| max-count | 显示的最大头像个数 | string \| number | - |
| max-content | 头像数量超出时，会出现一个头像折叠元素，该元素内容可为`...`、`more`、`+N` | string | `+N` |
| size | 头像的大小，可选值为：`large`、`normal`、`small`，支持直接输入数字 | string \| number | `normal` |
| shape | 头像的形状，可选值为：`square`、`round` | string | `round` |
| max-color | 头像折叠元素的字体颜色 | string | `#666` |
| max-bg-color | 头像折叠元素的背景色 | string | `#eee` |
| span | 头像之间的间距 | string | `-8` |
| zIndex | 组合头像之间的层级方向，可选值为：`left`、`right` | string | `left` |

### Avatar Slots

| 名称 | 描述 |
| --- | --- |
| default | 默认插槽，可放置图片、图标、文本等元素 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件]()。

| 名称 | 默认值 |
| --- | --- |
| --nut-actionsheet-light-color | _#f6f6f6_ |
| --nut-avatar-square | _5px_ |
| --nut-avatar-large-width | _60px_ |
| --nut-avatar-large-height | _60px_ |
| --nut-avatar-small-width | _32px_ |
| --nut-avatar-small-height | _32px_ |
| --nut-avatar-normal-width | _40px_ |
| --nut-avatar-normal-height | _40px_ |
