# ImagePreview

### Intro

Support full screen preview videos and images, support functional call.

### Install

```js
import { createApp } from 'vue';
import { ImagePreview } from '@nutui/nutui';

const app = createApp();
app.use(ImagePreview);
```

### Basic Usage

:::demo

```vue
<template>
  <nut-image-preview :show="state.showPreview" :images="state.imgData" @close="hideFn" />
  <nut-cell isLink title="Show preview" :showIcon="true" @click="showFn"></nut-cell>
</template>

<script setup>
import { reactive } from 'vue';
const state = reactive({
  showPreview: false,
  imgData: [
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'
    }
  ]
});

const showFn = () => {
  state.showPreview = true;
};

const hideFn = () => {
  state.showPreview = false;
};
</script>
```

:::

### With Init No

:::demo

```vue
<template>
  <nut-image-preview :show="state.showPreview" :images="state.imgData" :init-no="3" @close="hideFn" />
  <nut-cell isLink title="With init no" :showIcon="true" @click="showFn"></nut-cell>
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({
  showPreview: false,
  imgData: [
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'
    }
  ]
});

const showFn = () => {
  state.showPreview = true;
};

const hideFn = () => {
  state.showPreview = false;
};
</script>
```

:::

### With Pagination

:::demo

```vue
<template>
  <nut-image-preview
    :show="state.showPreview"
    :images="state.imgData"
    :pagination-visible="true"
    pagination-color="red"
    @close="hideFn"
  />
  <nut-cell isLink title="With pagination" :showIcon="true" @click="showFn"></nut-cell>
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({
  showPreview: false,
  imgData: [
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'
    }
  ]
});

const showFn = () => {
  state.showPreview = true;
};

const hideFn = () => {
  state.showPreview = false;
};
</script>
```

:::

### With Videos

:::demo

```vue
<template>
  <nut-image-preview :show="state.showPreview" :images="state.imgData" :videos="state.videoData" @close="hideFn" />
  <nut-cell isLink title="With videos" :showIcon="true" @click="showFn"></nut-cell>
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({
  showPreview: false,
  imgData: [
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'
    }
  ],
  videoData: [
    {
      source: {
        src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
        type: 'video/mp4'
      },
      options: {
        muted: true,
        controls: true
      }
    },
    {
      source: {
        src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
        type: 'video/mp4'
      },
      options: {
        muted: true,
        controls: true
      }
    }
  ]
});

const showFn = () => {
  state.showPreview = true;
};

const hideFn = () => {
  state.showPreview = false;
};
</script>
```

:::

### Functional Call

#### Functional call not support in taro.

:::demo

```vue
<template>
  <nut-cell isLink title="Functional call" :showIcon="true" @click="fnShow"></nut-cell>
</template>

<script setup>
import { showImagePreview } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/imagepreview/style';
import { reactive } from 'vue';
const state = reactive({
  imgData: [
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'
    }
  ]
});

const onClose = () => {
  console.log('imagepreview closed');
};

const fnShow = () => {
  showImagePreview({
    show: true,
    images: state.imgData,
    onClose
  });
};
</script>
```

:::

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| show | Whether to show preview | boolean | `false` |
| videos | Videos Array(Videos are before images, not support in taro) | VideoArray[] | `[]` |
| images | Images array | ImageArray[] | `[]` |
| autoplay | Autoplay time, zero means not autoplay | number \| string | `3000` |
| init-no | Init no | number | `0` |
| pagination-visible | Whether to show pagination | boolean | `false` |
| pagination-color | Pagination color | string | `#fff` |
| content-close | Click image to exit preview | boolean | `true` |
| show-index | Whether to show index | boolean | `true` |
| closeable | Whether to show close icon | boolean | `false` |
| close-icon-position | Close icon position,can be set to `top-left` | string | `top-right` |
| before-close | Callback function before close | (active: number) => boolean \| Promise<`boolean`> | - |
| max-zoom | Max zoom`Taro isn't supported` | number | `3` |
| min-zoom | Min zoom`Taro isn't supported` | number | `1/3` |
| is-Loop | Whether to loop | boolean | `true` |

### Data Structure of ImageArray

| Key | Description | Type |
| --- | --- | --- |
| src | img url | string |

### Data Structure of VideoArray

| Key | Description | Type |
| --- | --- | --- |
| source | Video url and type settings | object |
| options | Control video playback properties | object |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| close | Emitted when closing ImagePreview | - |
| change | Emitted when current image changed | index |

### Slots

| Name | Description |
| --- | --- |
| closeIcon | Custom close icon |
