# Icon

### Intro

Install the [@nutui/icons-vue](https://github.com/jdf2e/nutui-icons) package independently. Two usage modes are provided (SVG on-demand usage and IconFont full usage).

### Install

```bash
npm i --save @nutui/icons-vue
```

## Use: SVG import on demand

Use mode of on-demand loading components, see @nutui/icons-vue/dist/types/index.d.ts

```js
import { Add } from '@nutui/icons-vue';
// template
<Add color="red" />;
```

<icon-demo />

```
The SVG used internally in the component library is
Loading,Location,Location2,Check,Close,Left,Service,Top,Right,CheckNormal,Checked,CheckDisabled,DownArrow,JoySmile,Image,ImageError,CircleClose,MaskClose,Minus,Plus,ArrowUp2,ArrowDown2,Notice,CheckChecked,StarN,Tips,Loading1,TriangleUp,TriangleDown,Photograph,Failure,Del,Link,Download
```

### Props

| Attribute | Description | Type | Default |
|  ---  |  ---  |  ---  |  ---  |
| name | Icon name or URL | string | - |
| color | Icon color | string | - |
| width | Icon size , eg `20px` `2em` `2rem` | string \| object | - |
| height | Icon size , eg `20px` `2em` `2rem` | string \| object | - |

### Events

| Event | Description | Arguments |
|  ---  |  ---  |  ---  |
| click | Emitted when icon is clicked | event: Event |

## Use: Full use of IconFont

```ks
import { createApp } from 'vue';
import { IconFont } from '@nutui/icons-vue';
import '@nutui/icons-vue/dist/style_iconfont.css';
const app = createApp();
app.use(IconFont);
```

Use `name` prop to set icon name or icon URL.

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

### Icon Color

Use `color` prop to set icon color.

:::demo

```vue
<template>
  <IconFont name="dongdong" color="#fa2c19"></IconFont>
  <IconFont name="dongdong" color="#64b578"></IconFont>
  <IconFont name="JD" color="#fa2c19"></IconFont>
</template>
```

:::

### Icon Size

Use `size` prop to set icon size default unit is `px` .

:::demo

```vue
<template>
  <IconFont name="dongdong"></IconFont>
  <IconFont name="dongdong" size="24"></IconFont>
  <IconFont name="dongdong" size="16"></IconFont>
</template>
```

:::

### Universal motion icons

Adding the specified class class can realize the dynamic effect of the picture. The default is to play once, and adding the `nut-icon-am-infinite` class can realize the loop playback. By setting css, the delay interval before the animation starts, and how long the animation will be completed

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

| Attribute | Description | Type | Default |
|  ---  |  ---  |  ---  |  ---  |
| name | Icon name or URL | string | - |
| color | Icon color | string | - |
| size | Icon size , eg `20px` `2em` `2rem` | string \| object | - |
| font-class-name | Custom icon font base class name | string | `nutui-iconfont` |
| class-prefix | Custom icon class name prefix for using custom icons | string | `nut-icon` |
| tag | HTML Tag of root element | string | `i` |

### Events

| Event | Description | Arguments |
|  ---  |  ---  |  ---  |
| click | Emitted when icon is clicked | event: Event |

## Use: other icons

The number of icons provided by `@nutui/icons-vue` itself is limited. If it cannot meet the needs, you can consider using a more versatile and larger number of icon libraries.

- Recommended icon format: SVG

- Recommended icon library: [iconify](https://iconify.design/), which provides more than 150,000 open source icons.

- Recommended icon scheme: [unplugin-icons](https://github.com/antfu/unplugin-icons), which provides a way to introduce `iconify` on demand.
