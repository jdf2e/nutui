# AvatarCropper 头像剪切

### 介绍

用来对头像进行剪切生成一张新的图片。在 `NutUI` >= 4.2.0 版本中提供。

### 安装

```js
import { createApp } from 'vue'
import { AvatarCropper } from '@nutui/nutui-taro'

const app = createApp()
app.use(AvatarCropper)
```

### 基础用法

中间直接使用 avatar 组件，裁剪后图片内容会被替换为新的。

> demo: avatarcropper basic business

### 形状 v4.2.8

支持两种形状：`square`、`round`

> demo: avatarcropper shape business

### 裁剪区域 toolbar 插槽

自定义裁剪区域工具栏，`toolbar-position` 控制工具栏位置

> demo: avatarcropper toolbar business

## API

### AvatarCropper Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| max-zoom | 最大缩放倍数 | number | 3 |
| space | 裁剪区域两边预留的间隙 | number | 10 |
| toolbar-position | 裁剪区域工具栏位置,可选值为：`top` `bottom` | string | bottom |
| edit-text | 中间的文字内容 | string | 编辑 |
| cancel-text | 取消按钮的文字 | string | 取消 |
| cancel-confirm | 确认按钮的文字 | string | 确认 |
| shape`v4.2.8` | 头像的形状,可选值为：`square` `round` | string | square |
| size-type | 所选的图片的尺寸： 可选值：`original` `compressed` | Array | ['original', 'compressed'] |
| source-type | 选择图片的来源： 可选值：`album` `camera` | Array | ['album', 'camera'] |

### AvatarCropper Slots

| 名称 | 描述 |
| --- | --- |
| default | 默认插槽，可放置图片、图标、文本等元素 |
| toolbar | 选择文件后裁剪弹窗底部元素可以自定义，通过ref调用组件的方法 |

### AvatarCropper Events

| 名称 | 描述 | 回调参数 |
| --- | --- | --- |
| confirm | 裁剪后点击确认触发 | url:裁剪后的base64 |
| cancel | 点击取消触发 | - |

### AvatarCropper Ref

| 事件名 | 说明 |
| --- | --- |
| cancel | 取消裁剪 |
| reset | 重置为0度 |
| rotate | 旋转90度 |
| confirm | 确定裁剪 |
