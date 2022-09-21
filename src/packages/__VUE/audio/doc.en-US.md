# Audio

### Intro

Audio Playing

### Install


```javascript
import { createApp } from 'vue';
// vue
import { Audio} from '@nutui/nutui';

const app = createApp();
app.use(Audio);
```

### Basic Usage

:::demo

```html
<template>
    <nut-audio
      url="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
      :muted="muted"
      :autoplay="autoplay"
      :loop="true"
      type="icon"
    ></nut-audio>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const data = reactive({
      muted: false,
      autoplay: false
    });
    return {
      ...toRefs(data)
    };
  }
};
</script>
```
:::

### Voice Playing

:::demo

```html
<template>
    <nut-audio
      url="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
      :muted="muted"
      :autoplay="autoplay"
      :loop="false"
      type="none"
      ref="audioDemo"
    >
      <div class="nut-voice">
        <div><nut-icon name="voice"></nut-icon></div>
        <div>{{ duration }}"</div>
      </div>
    </nut-audio>
</template>
<script lang="ts">
import { reactive, toRefs, onMounted } from 'vue';
export default {
  setup() {
    const audioDemo = ref(null);
    const data = reactive({
      muted: false,
      autoplay: false
    });
    const duration = ref(0);
    onMounted(() => {
      setTimeout(() => {
        duration.value = audioDemo.value.second.toFixed();
      }, 500);
    });

    return {
      ...toRefs(data),
      duration,
      audioDemo
    };
  }
};
</script>

<style>
  .nut-voice {
    display: flex;
    justify-content: space-between;
    width: 100px;
    height: 20px;
    padding: 8px;
    border: 1px solid rgba(0, 0, 0, 0.6);
    border-radius: 18px;
  }
</style>
```
:::

### Progress

:::demo

```html
<template>
    <nut-audio
      url="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
      :muted="muted"
      :autoplay="autoplay"
      :loop="true"
      type="progress"
    >
      <div class="nut-audio-operate-group">
        <nut-audio-operate type="back"></nut-audio-operate>
        <nut-audio-operate type="play"></nut-audio-operate>
        <nut-audio-operate type="forward"></nut-audio-operate>
        <nut-audio-operate type="mute"></nut-audio-operate>
      </div>
    </nut-audio>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const data = reactive({
      muted: false,
      autoplay: false
    });
    return {
      ...toRefs(data)
    };
  }
};
</script>
```
:::

### Custom Control

:::demo

```html
<template>
    <nut-audio
      url="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
      :muted="muted"
      :autoplay="autoplay"
      :loop="false"
      type="progress"
      @forward="forward"
      @fastBack="fastBack"
      @play="changeStatus"
      @ended="ended"
      @changeProgress="changeProgress"
    >
      <div class="nut-audio-operate-group">
        <nut-audio-operate type="back"><nut-icon name="play-double-back" size="35"></nut-icon></nut-audio-operate>
        <nut-audio-operate type="play"
          ><nut-icon :name="!playing ? 'play-start' : 'play-stop'" size="35"></nut-icon
        ></nut-audio-operate>
        <nut-audio-operate type="forward"><nut-icon name="play-double-forward" size="35"></nut-icon></nut-audio-operate>
      </div>
    </nut-audio>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const data = reactive({
      muted: false,
      autoplay: false
    });
    const playing = ref(false);

    const fastBack = () => {
      console.log('倒退');
    };

    const forward = (progress) => {
      console.log('快进', '当前时间' + progress);
    };

    const changeStatus = (status) => {
      console.log('当前播放状态', status);
      playing.value = status;
    };

    const ended = () => {
      console.log('播放结束');
    };

    const changeProgress = (val) => {
      console.log('改变进度条', val);
    };
    return {
      ...toRefs(data),playing, fastBack, forward, changeStatus, audioDemo, ended, duration, changeProgress
    };
  }
};
</script>
```
:::

## API

### Props

| Attribute            | Description               | Type   | Default  |
|--------------|----------------------------------|--------|------------------|
| url         | Audio Url               | String | ''              |
| muted        | Whether to be muted                         | Boolean | false             |
| autoplay         | Whether to autoplay | Boolean | false               |
| loop | Whether to loop playback    | Boolean | false |
| preload          | Whether to  proload audio                      | String | 'auto'              |
| type         |  Show type| String | 'progress'              |


### Events

| Attribute            | Description               | CallBack   |
|--------|----------------|--------------|
| fast-back  | Emitted when audio back | play time（millisecond） |
| forward  | Emitted when audio forward | play time（millisecond） |
| play  | Emitted when audio play or pause | play status |
| ended  | Emitted when audio ended | —— |
| mute  | Emitted when audio mute | —— |
| change-progress  | Emitted when audio progress change | play time（millisecond） |
| can-play `v3.2.0` | Emitted when the user agent can play the media | `event: Event` |
