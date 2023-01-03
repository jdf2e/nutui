# Icon

### Intro

Install the [@nutui/icons-vue](https://github.com/jdf2e/nutui-icons) package independently. Two usage modes are provided (Svg on-demand usage and IconFont full usage).

### Install

```bash
npm i --save @nutui/icons-vue
```
### Use: Svg import on demand

Use mode of on-demand loading components, see @nutui/icons-vue/dist/types/index.d.ts

```js
import { Add } from '@nutui/icons-vue';
// template
<Add color='red' />
```

<icon-demo />

```
The Svg used internally in the component library is
Loading,Location,Location2,Check,Close,Left,Service,Top,Right,CheckNormal,Checked,CheckDisabled,DownArrow,JoySmile,Image,ImageError,CircleClose,MaskClose,Minus,Plus,ArrowUp2,ArrowDown2,Notice,CheckChecked,StarN,Tips,Loading1,TriangleUp,TriangleDown,Photograph,Failure,Del,Link,Download
```
### Props

| Attribute | Description                        | Type             | Default |
|-----------|------------------------------------|------------------|---------|
| name      | Icon name or URL                   | string           | -       |
| color     | Icon color                         | string           | -       |
| width     | Icon size , eg `20px` `2em` `2rem` | string \| object | -       |
| height    | Icon size , eg `20px` `2em` `2rem` | string \| object | -       |

### Events

| Event | Description                  | Arguments    |
|-------|------------------------------|--------------|
| click | Emitted when icon is clicked | event: Event |

### Use: Full use of IconFont

```ks
import { createApp } from 'vue';
import { IconFont } from '@nutui/icons-vue';

const app = createApp();
app.use(IconFont);
```

Use `name` prop to set icon name or icon URL.

:::demo
```html
<template>
  <IconFont name="dongdong"></IconFont>
  <IconFont name="JD"></IconFont>
  <IconFont size="40"  name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"></IconFont>
</template>
```
:::

#### Icon Color

Use `color` prop to set icon color.

:::demo
```html
<template>
  <IconFont name="dongdong" color="#fa2c19"></IconFont>
  <IconFont name="dongdong" color="#64b578"></IconFont>
  <IconFont name="JD" color="#fa2c19"></IconFont>
</template>
```
:::

#### Icon Size

Use `size` prop to set icon size default unit is `px` .

:::demo
```html
<template>
  <IconFont name="dongdong"></IconFont>
  <IconFont name="dongdong" size="24"></IconFont>
  <IconFont name="dongdong" size="16"></IconFont>
</template>
```
:::
#### Universal motion icons

Adding the specified class class can realize the dynamic effect of the picture. The default is to play once, and adding the `nut-icon-am-infinite` class can realize the loop playback. By setting css, the delay interval before the animation starts, and how long the animation will be completed

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




#### custom iconfont

If you need to use more icons based on the existing Icon, you can import the font file and CSS file corresponding to the third-party iconfont, and then you can use it directly in the Icon component.

> use [iconfont](https://www.iconfont.cn/)   recommend

1：first in [iconfont](https://www.iconfont.cn/) generate your custom Icon file and download it to the local project  [Docs](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8d11a391&helptype=code)

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

2：project entry file main.js add `iconfont.css`


``` javascript
import './assets/font/iconfont.css';
```

3：use

```html
<!-- 
  font-class-name  iconfont
  class-prefix  icon
  name The name value is filled in according to the value in iconfont.css 
-->
<IconFont font-class-name="iconfont" class-prefix="icon" name="close" />
```



> Use a third-party custom font library

```css
/* Introduce third-party or custom font icon styles */
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
  font-class-name  my-icon
  class-prefix  my-icon
-->
<IconFont font-class-name="my-icon" class-prefix="my-icon" name="extra" />

```

custom iconfont [Demo](https://github.com/jdf2e/nutui-demo/blob/master/vite/src/App.vue#L15) 

## API

### Props

| Attribute       | Description                                          | Type             | Default          |
|-----------------|------------------------------------------------------|------------------|------------------|
| name            | Icon name or URL                                     | string           | -                |
| color           | Icon color                                           | string           | -                |
| size            | Icon size , eg `20px` `2em` `2rem`                   | string \| object | -                |
| font-class-name | Custom icon font base class name                     | string           | `nutui-iconfont` |
| class-prefix    | Custom icon class name prefix for using custom icons | string           | `nut-icon`       |
| tag             | HTML Tag of root element                             | string           | `i`              |

### Events

| Event | Description                  | Arguments    |
|-------|------------------------------|--------------|
| click | Emitted when icon is clicked | event: Event |

