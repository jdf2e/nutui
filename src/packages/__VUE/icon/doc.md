# Icon 图标

### 介绍

独立安装 [@nutui/icons-vue](https://github.com/jdf2e/nutui-icons) 图标组件包。提供两种使用方式（Svg 按需使用、IconFont 全量使用）。

### 安装

```bash
npm i --save @nutui/icons-vue
```

## 方式一： SVG 按需使用

按需加载组件使用方式，可选项见 @nutui/icons-vue/dist/types/index.d.ts

```js
import { Add } from '@nutui/icons-vue';
// template
<Add color="red" />;
```

<icon-demo />

```
其中组件库内部使用 SVG 为
Loading,Location,Location2,Check,Close,Left,Service,Top,Right,CheckNormal,Checked,CheckDisabled,DownArrow,JoySmile,Image,ImageError,CircleClose,MaskClose,Minus,Plus,ArrowUp2,ArrowDown2,Notice,CheckChecked,StarN,Tips,Loading1,TriangleUp,TriangleDown,Photograph,Failure,Del,Link,Download
```

### Props

| 参数   | 说明                             | 类型             | 默认值 |
| ------ | -------------------------------- | ---------------- | ------ |
| name   | 图标名称或图片链接               | string           | -      |
| color  | 图标颜色                         | string           | -      |
| width  | 图标大小，如 `20px` `2em` `2rem` | string \| object | -      |
| height | 图标大小，如 `20px` `2em` `2rem` | string \| object | -      |

### Events

| 事件名 | 说明           | 回调参数     |
| ------ | -------------- | ------------ |
| click  | 点击图标时触发 | event: Event |

## 方式二： IconFont 全量使用

```js
import { createApp } from 'vue';
import { IconFont } from '@nutui/icons-vue';
import '@nutui/icons-vue/dist/style_iconfont.css';
const app = createApp();
app.use(IconFont);
```

`Icon` 的 `name` 属性支持传入图标名称或图片链接。

:::demo

```vue
<template>
  <IconFont name="dongdong"></IconFont>
  <IconFont name="JD"></IconFont>
  <IconFont
    size="40"
    name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
  ></IconFont>
</template>
```

:::

#### 图标颜色

`Icon` 的 `color` 属性用来设置图标的颜色。

:::demo

```vue
<template>
  <IconFont name="dongdong" color="#fa2c19"></IconFont>
  <IconFont name="dongdong" color="#64b578"></IconFont>
  <IconFont name="JD" color="#fa2c19"></IconFont>
</template>
```

:::

#### 图标大小

`Icon` 的 `size` 属性用来设置图标的尺寸大小，默认单位为 `px`。

:::demo

```vue
<template>
  <IconFont name="dongdong"></IconFont>
  <IconFont name="dongdong" size="24"></IconFont>
  <IconFont name="dongdong" size="16"></IconFont>
</template>
```

:::

#### 通用动态图标

添加指定的 class 类就可以实现图片动态效果，默认是播放 1 次，添加 `nut-icon-am-infinite` 类即可实现循环播放。通过设置 css 可实现动画启动前的延迟间隔、动画在多久时间内完成

:::demo

```vue
<template>
  <IconFont name="dou-arrow-up" class="nut-icon-am-jump nut-icon-am-infinite"></IconFont>
  <IconFont name="star-fill-n" class="nut-icon-am-blink nut-icon-am-infinite"></IconFont>
  <IconFont name="refresh2" class="nut-icon-am-rotate nut-icon-am-infinite"></IconFont>
  <IconFont name="heart-fill" class="nut-icon-am-breathe nut-icon-am-infinite"></IconFont>
  <IconFont name="microphone" class="nut-icon-am-flash nut-icon-am-infinite"></IconFont>
  <IconFont name="download" class="nut-icon-am-bounce nut-icon-am-infinite"></IconFont>
  <IconFont name="message" class="nut-icon-am-shake nut-icon-am-infinite"></IconFont>
</template>

<style>
.nut-icon {
  --animate-duration: 1s;
  --animate-delay: 0s;
}
</style>
```

:::

### Props

| 参数            | 说明                             | 类型             | 默认值           |
| --------------- | -------------------------------- | ---------------- | ---------------- |
| name            | 图标名称或图片链接               | string           | -                |
| color           | 图标颜色                         | string           | -                |
| size            | 图标大小，如 `20px` `2em` `2rem` | string \| object | -                |
| font-class-name | 自定义 `icon` 字体基础类名       | string           | `nutui-iconfont` |
| class-prefix    | 自定义 `icon` 类名前缀           | string           | `nut-icon`       |
| tag             | `HTML` 标签                      | string           | `i`              |

### Events

| 事件名 | 说明           | 回调参数     |
| ------ | -------------- | ------------ |
| click  | 点击图标时触发 | event: Event |

## 方式三：使用自定义图标库

`@nutui/icons-vue` 本身提供的图标数量有限，如果不能满足需求，可以考虑使用通用性更强、数量更多的图标库。

- 推荐图标格式：SVG

- 推荐图标库：[iconify](https://iconify.design/)，它提供了超过 150,000 个开源图标。

- 推荐图标方案：[unplugin-icons](https://github.com/antfu/unplugin-icons)，它提供了按需引入 `iconify` 的方式。
