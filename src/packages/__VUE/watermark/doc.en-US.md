# watermark 

### Intro

### Install

```javascript 

import { createApp } from 'vue';
// vue
import { Watermark } from '@nutui/nutui';
// taro
import { Watermark } from '@nutui/nutui-taro';

const app = createApp();
app.use(Watermark);

```

### Basic Usage

:::demo

```html
<template>
  <nut-cell class="wrap">
    <nut-button @click="showTextMark">Text WaterMark</nut-button>
    <nut-button @click="showImageMark">Image WaterMark</nut-button>
    <nut-watermark v-if="!flag" class="mark1" z-index="1" content="nut-ui-water-mark"></nut-watermark>
    <nut-watermark
      v-if="flag"
      class="mark1"
      :image-width="60"
      :image-height="23"
      z-index="1"
      :image="imgSrc"
    ></nut-watermark>
  </nut-cell>
</template>
<script lang="ts">
  export default {
    setup() {
      const imgSrc = ref('//img11.360buyimg.com/imagetools/jfs/t1/57345/6/20069/8019/62b995cdEd96fef03/51d3302dfeccd1d2.png');
      const flag = ref(false);
      const showTextMark = () => {
        flag.value = false;
      };
      const showImageMark = () => {
        flag.value = true;
      };
      return { translate, imgSrc, showTextMark, showImageMark, flag };
    }
  };
</script>
<style lang="scss" scoped>
  .wrap {
    width: 100%;
    height: 240px;
    display: block;
    background: #fff;
    >img {
      width: 100%;
    }
    .mark1 {
      width: 100%;
      top: 50px;
    }
    .nut-button{
      margin-right: 10px;
    }
  }
</style>
```
:::

### Part Usage
:::demo

```html
<template>
  <nut-cell class="wrap">
    <img :src="src" alt="" />
    <nut-watermark :fullPage="false" font-color="#fa2c19" content="nut-ui"></nut-watermark>
  </nut-cell>
</template>
<script lang="ts">
  export default {
    setup() {
     const src = ref('//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg');
      return { src };
    }
  };
</script>
<style lang="scss" scoped>
  .wrap {
    width: 100%;
    height: 240px;
    display: block;
    background: #fff;
     > img {
      width: 100%;
    }
  }
</style>
```
:::
## API

### Props
| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| width       | Width of watermark     | `number`           | `120`                |
| height      | Height of watermark               | `number`           | `64`                 |
| rotate      | Rotation angle when drawing watermark   | `number`           | `-22`                |
| image       | Image source, it is recommended to export 2x or 3x images, and the image rendering watermark is preferred | `string`           | -                    |
| imageWidth  | Width of image                                             | `number`           | `120`                |
| imageHeight | Height of image                                             | `number`           | `64`                 |
| zIndex      | Z-index of the appended watermark element                             | `number`           | `2000`               |
| content     | Watermark text content                                         | `string`           | -                    |
| fontColor   | Watermark text color                                         | `string`           | `rgba(0, 0, 0, .15)` |
| fontSize    | Watermark text font size                                             | `string \| number` | `16`                 |
| gapX        | Horizontal spacing between watermarks                                   | `number`           | `24`                 |
| gapY        | Vertical spacing between watermarks                                   | `number`           | `48`                 |
| fullPage    | Overwrite entire page                                     | `boolean`          | `true`               |
| fontFamily  | Watermark text font family                  | `boolean`          | `true`               |
