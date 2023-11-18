# Video

### Intro

Video player implemented by native video

### Install

```js
import { createApp } from 'vue';
import { Video, Button } from '@nutui/nutui';

const app = createApp();
app.use(Video);
```

### Basic Usage

:::demo

```vue
<template>
  <nut-video :source="state.source" :options="state.options" @play="play" @pause="pause" @playend="playend">
  </nut-video>
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({
  source: {
    src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
    type: 'video/mp4'
  },
  options: {
    controls: true
  }
});
const play = (elm) => console.log('play', elm);
const pause = (elm) => console.log('pause', elm);
const playend = (elm) => console.log('playend', elm);
</script>
```

:::

### Auto play

`autoplay` Property to set video autoplay

:::demo

```vue
<template>
  <nut-video :source="state.source" :options="state.options"></nut-video>
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({
  source: {
    src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
    type: 'video/mp4'
  },
  options: {
    autoplay: true,
    muted: true,
    controls: true
  }
});
</script>
```

:::

### Initialize mute

The `muted` property sets the initial mute of the video

:::demo

```vue
<template>
  <nut-video :source="state.source" :options="state.options"></nut-video>
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({
  source: {
    src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
    type: 'video/mp4'
  },
  options: {
    muted: true,
    controls: true
  }
});
</script>
```

:::

### Video cover poster settings

The `poster` property sets the video poster

:::demo

```vue
<template>
  <nut-video :source="state.source" :options="state.options"></nut-video>
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({
  source: {
    src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
    type: 'video/mp4'
  },
  options: {
    controls: true,
    poster:
      'https://img12.360buyimg.com/ling/s345x208_jfs/t1/168105/33/8417/54825/603df06dEfcddc4cb/21f9f5d0a1b3dad4.jpg.webp'
  }
});
</script>
```

:::

### play inline

The `playsinline` property sets the mobile terminal video to play in line and prevents the newly opened page from playing (compatible with IOS and some Android machines)

:::demo

```vue
<template>
  <nut-video :source="state.source" :options="state.options"></nut-video>
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({
  source: {
    src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
    type: 'video/mp4'
  },
  options: {
    playsinline: true,
    controls: true
  }
});
</script>
```

:::

### Set video as background

When setting the video as the background image, it is necessary to set `muted`, `disabled`, `operation prohibited`, `loop`, `loop` and `autoplay` to `true`, and the mobile terminal needs to set `playinline` for in-line display

:::demo

```vue
<template>
  <nut-video :source="state.source" :options="state.options"></nut-video>
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({
  source: {
    src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
    type: 'video/mp4'
  },
  options: {
    controls: false,
    autoplay: true,
    muted: true,
    disabled: true,
    playsinline: true,
    loop: true
  }
});
</script>
```

:::

### Video switching

Reset the video when the video address changes

:::demo

```vue
<template>
  <nut-video :source="state.source1" :options="state.options"></nut-video>
  <nut-button type="primary" @click="changeVideo">切换视频</nut-button>
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({
  source1: {
    src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
    type: 'video/mp4'
  },
  options: {
    controls: true
  }
});
const changeVideo = () => {
  state.source1.src = 'https://vjs.zencdn.net/v/oceans.mp4';
};
</script>
```

:::

### Ref Control play, pause, stop, muted, unmuted v4.1.6

:::demo

```vue
<template>
  <nut-video
    ref="videoRef"
    :source="state.source"
    :options="state.options"
    @play="play"
    @pause="pause"
    @playend="playend"
  >
  </nut-video>
  <nut-button type="success" class="m-b" @click="videoRef.play()">播放</nut-button>
  <nut-button type="warning" class="m-b" @click="videoRef.pause()">暂停</nut-button>
  <nut-button type="danger" class="m-b" @click="videoRef.stop()">结束</nut-button>
  <nut-button type="success" class="m-b" @click="videoRef.muted()">静音</nut-button>
  <nut-button type="danger" class="m-b" @click="videoRef.unmuted()">取消静音</nut-button>
</template>
<script setup>
import { reactive, ref } from 'vue';
const state = reactive({
  source: {
    src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
    type: 'video/mp4'
  },
  options: {
    controls: true
  }
});
const videoRef = ref(null);
const play = (elm) => console.log('play', elm);
const pause = (elm) => console.log('pause', elm);
const playend = (elm) => console.log('playend', elm);
</script>
```

:::

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| source | Video url and type settings | VideoSource | {} |
| options | Control video playback properties | VideoOptions | {} |

### VideoSource 数据结构

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| src | Video Src | boolean |
| type | Video Type | string |

### VideoOptions 数据结构

| key | Description | Type | Default |
| --- | --- | --- | --- |
| autoplay | Auto play | boolean | `false` |
| poster | Poster settings | string | - |
| loop | Poster loop | boolean | `false` |
| controls | Show operation control | boolean | `true` |
| muted | Mute | boolean | `false` |
| volume | Volume control | number | `0.5` |
| disabled | Disable operation (e.g. background image of circular playback, prohibit operation) | boolean | `false` |
| playsinline | Whether to set as inline playback element (solve Android compatibility problem) | boolean | `false` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| play | play event | - |
| pause | pause event | - |
| playend | Playback completion callback | - |
| time | Triggered when playing(current is the current playback time，total is the total time) | (current:string,total:string) |

### Ref v4.1.6

| Event | Description |
| --- | --- |
| play | play |
| pause | pause |
| stop | stop |
| muted | muted |
| unmuted | unmuted |
