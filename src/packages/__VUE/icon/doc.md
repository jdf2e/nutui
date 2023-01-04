# Icon 图标

### 介绍

独立安装 [@nutui/icons-vue](https://github.com/jdf2e/nutui-icons) 图标组件包。提供两种使用方式（Svg 按需使用、IconFont 全量使用）。

### 安装

```bash
npm i --save @nutui/icons-vue
```

### 方式一： Svg 按需使用

按需加载组件使用方式，可选项见 @nutui/icons-vue/dist/types/index.d.ts

```js
import { Add } from '@nutui/icons-vue';
// template
<Add color='red' />
```

<icon-demo />

```
其中组件库内部使用 Svg 为
Loading,Location,Location2,Check,Close,Left,Service,Top,Right,CheckNormal,Checked,CheckDisabled,DownArrow,JoySmile,Image,ImageError,CircleClose,MaskClose,Minus,Plus,ArrowUp2,ArrowDown2,Notice,CheckChecked,StarN,Tips,Loading1,TriangleUp,TriangleDown,Photograph,Failure,Del,Link,Download
```

### Props

| 参数   | 说明                             | 类型             | 默认值 |
|--------|----------------------------------|------------------|--------|
| name   | 图标名称或图片链接               | string           | -      |
| color  | 图标颜色                         | string           | -      |
| width  | 图标大小，如 `20px` `2em` `2rem` | string \| object | -      |
| height | 图标大小，如 `20px` `2em` `2rem` | string \| object | -      |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击图标时触发 | event: Event |

### 方式二： IconFont 全量使用

```js
import { createApp } from 'vue';
import { IconFont } from '@nutui/icons-vue';

const app = createApp();
app.use(IconFont);
```

`Icon` 的 `name` 属性支持传入图标名称或图片链接。

:::demo
```html
<template>
  <IconFont name="dongdong"></IconFont>
  <IconFont name="JD"></IconFont>
  <IconFont size="40"  name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"></IconFont>
</template>
```
:::

#### 图标颜色

`Icon` 的 `color` 属性用来设置图标的颜色。

:::demo
```html
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
```html
<template>
  <IconFont name="dongdong"></IconFont>
  <IconFont name="dongdong" size="24"></IconFont>
  <IconFont name="dongdong" size="16"></IconFont>
</template>
```
:::
#### 通用动态图标

添加指定的 class 类就可以实现图片动态效果，默认是播放1次，添加 `nut-icon-am-infinite` 类即可实现循环播放。通过设置 css 可实现动画启动前的延迟间隔、动画在多久时间内完成

:::demo
```html
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
  .nut-icon{
    --animate-duration: 1s ; 
    --animate-delay: 0s;
  }
</style>
```
:::




#### 自定义图标

如果需要在现有 Icon 的基础上使用更多图标，可以引入第三方 iconfont 对应的字体文件和 CSS 文件，之后就可以在 Icon 组件中直接使用。

> 方案一 引入 [iconfont](https://www.iconfont.cn/)   推荐此方案

第一步：首先在 [iconfont](https://www.iconfont.cn/) 生成你自定义的Icon文件下载存放至本地项目  [详细使用说明](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8d11a391&helptype=code)

``` bash
/assets/font/demo.css
/assets/font/demo_index.html
/assets/font/iconfont.css
/assets/font/iconfont.js
/assets/font/iconfont.json
/assets/font/iconfont.ttf
/assets/font/iconfont.woff
/assets/font/iconfont.woff2
```

第二步：项目入口文件 main.js 引用 `iconfont.css`


``` javascript
import './assets/font/iconfont.css';
```

第三步：

```html
<!-- 
  font-class-name 指定类名为默认 iconfont
  class-prefix 指定默认 icon
  name 值根据 iconfont.css 中值对应填写 
-->
<IconFont font-class-name="iconfont" class-prefix="icon" name="close" />
```



> 方案二 第三方自定义字体库

```css
/* 引入第三方或自定义的字体图标样式 */
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-extra::before {
  content: '\e626';
}
```

```html
<!-- 
  font-class-name 指定类名为默认 my-icon
  class-prefix 指定默认 my-icon
-->
<IconFont font-class-name="my-icon" class-prefix="my-icon" name="extra" />

```

自定义 iconfont [Demo示例](https://github.com/jdf2e/nutui-demo/blob/master/vite/src/App.vue#L15) 

## IconFont API

### Props

| 参数            | 说明                                     | 类型             | 默认值           |
|-----------------|------------------------------------------|------------------|------------------|
| name            | 图标名称或图片链接                       | string           | -                |
| color           | 图标颜色                                 | string           | -                |
| size            | 图标大小，如 `20px` `2em` `2rem`         | string \| object | -                |
| font-class-name | 自定义 `icon` 字体基础类名                 | string           | `nutui-iconfont` |
| class-prefix    | 自定义 `icon` 类名前缀，用于使用自定义图标 | string           | `nut-icon`       |
| tag             | `HTML` 标签                                | string           | `i`              |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击图标时触发 | event: Event |

