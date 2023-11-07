# Space 间距

### 介绍

设置元素之间的间距。在 `NutUI` >= 4.2.0 版本中提供。

### 安装

```javascript
import { createApp } from 'vue';
import { Space } from '@nutui/nutui';

const app = createApp();
app.use(Space);
```

### 基础用法

Space 组件会在各个子组件之间设置一定的间距，默认间距为 8px。

:::demo

```html
<template>
  <nut-space>
    <nut-button type="primary">按钮</nut-button>
    <nut-button type="primary">按钮</nut-button>
    <nut-button type="primary">按钮</nut-button>
    <nut-button type="primary">按钮</nut-button>
  </nut-space>
</template>
```

:::

### 垂直排列

将 direction 属性设置为 vertical，可以设置垂直方向排列的间距。

:::demo

```html
<template>
  <nut-space direction="vertical" fill>
    <nut-button type="primary" block>按钮</nut-button>
    <nut-button type="primary" block>按钮</nut-button>
    <nut-button type="primary" block>按钮</nut-button>
    <nut-button type="primary" block>按钮</nut-button>
  </nut-space>
</template>
```

:::

### 自定义间距

通过调整 gutter 的值来控制间距的大小。传入 number 类型时，会默认使用 px 单位；也可以传入 string 类型，比如 2rem 或 5vw 等带有单位的值。
也可以设置css变量--nut-space-gap控制，优先级：gutter>css变量>默认样式

:::demo

```html
<template>
  <!-- gutter控制 -->
  <nut-space :gutter="20">
    <nut-button type="primary">按钮</nut-button>
    <nut-button type="primary">按钮</nut-button>
    <nut-button type="primary">按钮</nut-button>
    <nut-button type="primary">按钮</nut-button>
  </nut-space>
  <!-- css变量控制 -->
  <nut-cell :style="{ '--nut-space-gap': '30px' }">
    <nut-space>
      <nut-button type="primary">按钮</nut-button>
      <nut-button type="primary">按钮</nut-button>
      <nut-button type="primary">按钮</nut-button>
      <nut-button type="primary">按钮</nut-button>
    </nut-space>
  </nut-cell>
</template>
```

:::

### 自动换行

在水平模式下, 通过 wrap 属性来控制子元素是否自动换行。

:::demo

```html
<template>
  <nut-space wrap>
    <nut-button type="primary" block>按钮</nut-button>
    <nut-button type="primary" block>按钮</nut-button>
    <nut-button type="primary" block>按钮</nut-button>
    <nut-button type="primary" block>按钮</nut-button>
    <nut-button type="primary" block>按钮</nut-button>
    <nut-button type="primary" block>按钮</nut-button>
    <nut-button type="primary" block>按钮</nut-button>
    <nut-button type="primary" block>按钮</nut-button>
  </nut-space>
</template>
```

:::

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 间距方向，可选值 `vertical` `horizontal` | string | `horizontal` |
| align | 交叉轴对齐方式，可选值 `start` `end` `center` `baseline` | string | `-` |
| justify | 主轴对齐方式，可选值 `start` `end` `center` `between` `around` `evenly` `stretch` | string | `-` |
| wrap | 是否自动换行，仅在 horizontal 时有效 | boolean | `false` |
| fill | 是否让 Space 变为一个块级元素，填充整个父元素 | boolean | `false` |
| gutter | 间距大小，如 20px 2em，默认单位为 px，支持数组形式来分别设置横向和纵向间距 | number \| string \| number[] \| string[] | `-` |

### Slots

| Name | Description |
| --- | --- |
| default | Default slot |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| \--nutui-space-gap | `8px` | 间距大小 |
