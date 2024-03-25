# Tour 引导

### 介绍

用于引导用户了解产品功能的气泡组件。自 4.0 版本开始提供该组件。

### 安装

```js
import { createApp } from 'vue'
import { Tour } from '@nutui/nutui'

const app = createApp()
app.use(Tour)
```

### 基础用法

在每一步中设置 `target` 目标元素的 id ，Tour 组件则会根据设置的 id 值进行查找

> demo: tour basic

### 自定义样式

通过 `mask-width`、`mask-height`、`bg-color` 可配置镂空遮罩的大小、气泡弹层背景色

> demo: tour custom

### 设置偏移量

`offset` 可设置镂空遮罩层相对于目标元素的距离，`popoverOffset` 可设置气泡层的偏移量

> demo: tour position

### 自定义内容

通过 slot 插槽可自定义气泡层内容

> demo: tour content

### 步骤引导

属性 `type` 设置为 `step` 可以进行步骤操作。属性 `Steps` 数组中的每一项代表每步的内容

> demo: tour step

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 是否展示引导弹出层 | boolean | `false` |
| type | 引导类型 | string | `step` |
| steps | 引导步骤内容 | StepOptions[] | `[]` |
| offset | 镂空遮罩相对于目标元素的偏移量 | [number, number] | `[8, 10]` |
| current | 类型为 `step` 时，默认展示第几步 | number | `0` |
| custom-class | 自定义 class 值 | string | '' |
| location | 弹出层位置,同 Popopver 的[location 属性](https://nutui.jd.com/#/zh-CN/component/popover) | string | `bottom` |
| next-step-Txt | 下一步按钮文案 | string | `下一步` |
| prev-step-Txt | 上一步按钮文案 | string | `上一步` |
| complete-txt | 完成按钮文案 | string | `'完成'` |
| mask | 是否显示镂空遮罩 | boolean | `true` |
| bg-color | 自定义背景色 | boolean | - |
| theme | 气泡遮罩层主题,同 Popopver 的[theme 属性](https://nutui.jd.com/#/zh-CN/component/popover) | string | `'light'` |
| mask-width | 镂空遮罩层宽度 | number \| string | '' |
| mask-height | 镂空遮罩层高度 | number \| string | '' |
| close-on-click-overlay | 是否在点击镂空遮罩层后关闭,同 Popopver 的[closeOnClickOverlay 属性](https://nutui.jd.com/#/zh-CN/component/popover) | Boolean | `true` |
| show-prev-step | 是否展示上一步按钮 | boolean | `true` |
| show-title-bar | 是否展示标题栏 | boolean | `false` |

### StepOptions

| 键名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| target | 目标对象 | id | - |
| content | 气泡层内容 | string | '' |
| location | 弹出层位置,同 Popopver 的[location 属性](https://nutui.jd.com/#/zh-CN/component/popover) | string | `'bottom'` |
| popover-offset | 气泡层偏移量，同 Popopver 的[offset 属性](https://nutui.jd.com/#/zh-CN/component/popover) | [number, number] | `[0, 12]` |
| arrow-offset | 小箭头的偏移量，同 Popopver 的[arrowOffset 属性](https://nutui.jd.com/#/zh-CN/component/popover) | number | `0` |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义气泡层内容 |
| prev-step | 自定义上一步内容 |
| next-step | 自定义下一步内容 |

### Events

| 事件名 | 说明 |
| --- | --- |
| change | 切换步骤时触发 |
| close | 气泡层关闭时触发 |
