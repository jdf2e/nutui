#  Video

### Intro

Video player implemented by native video

### Install

``` javascript
import { createApp } from 'vue';
import { Video, Button } from '@nutui/nutui';

const app = createApp();
app.use(Video);
```

### Basic Usage

:::demo
```html
<template>
  <nut-video
    :source="source"
    :options="options"
    @play="play"
    @pause="pause"
    @playend="playend">
  </nut-video>
</template>
<script lang="ts">
import { toRefs, reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      source: {
        src: "https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D",
        type: "video/mp4",
      },
      options: {
        controls: true,
      },
    });
    const play = (elm: any) => console.log('play', elm);
    const pause = (elm: any) => console.log('pause', elm);
    const playend = (elm: any) => console.log('playend', elm);

    return { ...toRefs(state), play, pause, playend,  };
  }
}
</script>
```
:::

### Auto play
`autoplay` Property to set video autoplay

:::demo
```html
<template>
  <nut-video :source="source" :options="options"></nut-video>
</template>
<script lang="ts">
import { toRefs, reactive } from 'vue';
export default {
  setup() {
      const state = reactive({
        source: {
          src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
          type: 'video/mp4'
        },
        options: {
          autoplay: true,
          muted: true,
          controls: true
        },
      });

      return { ...toRefs(state) };
  }
}
</script>
```
:::

### Initialize mute
The `muted` property sets the initial mute of the video

:::demo
```html
<template>
  <nut-video :source="source" :options="options"></nut-video>
</template>
<script lang="ts">
import { toRefs, reactive } from 'vue';
export default {
  setup() {
      const state = reactive({
        source: {
          src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
          type: 'video/mp4'
        },
        options: {
          muted: true,
          controls: true
        },
      });

      return { ...toRefs(state) };
  }
}
</script>
```
:::

### Video cover poster settings
The `poster` property sets the video poster

:::demo
```html
<template>
  <nut-video :source="source" :options="options"></nut-video>
</template>
<script lang="ts">
import { toRefs, reactive } from 'vue';
export default {
  setup() {
      const state = reactive({
        source: {
          src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
          type: 'video/mp4'
        },
        options: {
          controls: true,
          poster: 'https://img12.360buyimg.com/ling/s345x208_jfs/t1/168105/33/8417/54825/603df06dEfcddc4cb/21f9f5d0a1b3dad4.jpg.webp'
        },
      });

      return { ...toRefs(state) };
  }
}
</script>
```

:::

### play inline
The `playsinline` property sets the mobile terminal video to play in line and prevents the newly opened page from playing (compatible with IOS and some Android machines)

:::demo
```html
<template>
  <nut-video :source="source" :options="options"></nut-video>
</template>
<script lang="ts">
import { toRefs, reactive } from 'vue';
export default {
  setup() {
      const state = reactive({
        source: {
          src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
          type: 'video/mp4'
        },
        options: {
          playsinline: true,
          controls: true,
        },
      });

      return { ...toRefs(state) };
  }
}
</script>
```
:::

### Set video as background
When setting the video as the background image, it is necessary to set `muted`, `disabled`, `operation prohibited`, `loop`, `loop` and `autoplay` to `true`, and the mobile terminal needs to set `playinline` for in-line display

:::demo
```html
<template>
  <nut-video :source="source" :options="options"></nut-video>
</template>
<script lang="ts">
import { toRefs, reactive } from 'vue';
export default {
  setup() {
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
        },
      });

      return { ...toRefs(state) };
  }
}
</script>
```
:::

### Video switching
Reset the video when the video address changes

:::demo
```html
<template>
  <nut-video :source="source1" :options="options"></nut-video>
  <nut-button type="primary" @click="changeVideo">Video switching</nut-button>
</template>
<script lang="ts">
import { toRefs, reactive } from 'vue';
export default {
  setup() {
      const state = reactive({
        source1: {
          src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
          type: 'video/mp4'
        },
        options: {
          controls: true
        },
      });
      const changeVideo = () => {
        state.source1.src = 'https://vjs.zencdn.net/v/oceans.mp4';
      };

      return { ...toRefs(state), changeVideo };
  }
}
</script>
```
:::


## API

### Props

| Attribute           | Description                                                                        | Type    | Default  |
|---------------------|------------------------------------------------------------------------------------|---------|----------|
| source              | Video url and type settings                                                        | VideoSource  | {}        |
| options             | Control video playback properties                                                  | VideoOptions  | {} |


### VideoSource 数据结构
| 键名                | 说明                                       | 类型    | 
| ------------------- | ------------------------------------------ | ------- | 
| src    | Video Src                              | boolean | 
| type      | Video Type                          | string  | 
### VideoOptions 数据结构
| key           | Description   | Type    | Default  |
| ------------------- | ------------------------------------------ | ------- | 
| autoplay    | Auto play  | boolean | `false`    |
| poster      | Poster settings   | string  | -        |
| loop        | Poster loop      | boolean | `false`    |
| controls    | Show operation control  | boolean | `true`     |
| muted       | Mute       | boolean | `false`    |
| volume      | Volume control   | number  | `0.5`      |
| disabled    | Disable operation (e.g. background image of circular playback, prohibit operation) | boolean | `false`    |
| playsinline | Whether to set as inline playback element (solve Android compatibility problem)    | boolean | `false`    |

### Events

| Event   | Description                  | Arguments |
|---------|------------------------------|-----------|
| play    | play event                   | -         |
| pause   | pause event                  | -         |
| playend | Playback completion callback | -         |
| time  | Triggered when playing(current is the current playback time，total is the total time)|(current:string,total:string)  |