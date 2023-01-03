# Audio

### Intro

Audio Playing

### Install


```javascript
import { createApp } from 'vue';
import { Audio } from '@nutui/nutui';

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

```vue
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
        <div><Voice></Voice></div>
        <div>{{ duration }}"</div>
      </div>
    </nut-audio>
</template>
<script lang="ts">
import { reactive, toRefs, onMounted } from 'vue';
import { Voice } from '@nutui/icons-vue'
export default {
  components: {
    Voice
  },
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

```vue
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
        <nut-audio-operate type="back">
          <PlayDoubleBack width="35px" height="35px"></PlayDoubleBack>
        </nut-audio-operate>
        <nut-audio-operate type="play">
          <PlayStart v-if="!playing" width="35px" height="35px"></PlayStart>
          <PlayStop v-else width="35px" height="35px"></PlayStop>
        </nut-audio-operate>
        <nut-audio-operate type="forward">
          <PlayDoubleForward width="35px" height="35px"></PlayDoubleForward>
        </nut-audio-operate>
      </div>
    </nut-audio>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';
import { PlayDoubleBack, PlayDoubleForward, PlayStart, PlayStop } from '@nutui/icons-vue'
export default {
  components: {
    PlayDoubleBack,
    PlayDoubleForward,
    PlayStart, 
    PlayStop
  },
  setup() {
    const data = reactive({
      muted: false,
      autoplay: false
    });
    const playing = ref(false);

    const fastBack = () => {
      console.log('Backwards');
    };

    const forward = (progress: number) => {
      console.log('Fast forward', 'Current Time' + progress);
    };

    const changeStatus = (status: boolean) => {
      console.log('Current play status', status);
      playing.value = status;
    };

    const ended = () => {
      console.log('Playing ended');
    };

    const changeProgress = (val: number) => {
      console.log('Change progress', val);
    };

    return {
      ...toRefs(data),
      playing, 
      fastBack, 
      forward, 
      changeStatus, 
      audioDemo, 
      ended, 
      duration, 
      changeProgress
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
| url         | Audio Url               | string | `''`              |
| muted        | Whether to be muted                         | boolean | `false`             |
| autoplay         | Whether to autoplay | boolean | `false`               |
| loop | Whether to loop playback    | boolean | `false` |
| preload          | Whether to  proload audio                      | string | `auto`              |
| type         |  Show type| String | `progress`              |


### Events

| Attribute            | Description               | CallBack   |
|--------|----------------|--------------|
| fast-back  | Emitted when audio back | play time（millisecond） |
| forward  | Emitted when audio forward | play time（millisecond） |
| play  | Emitted when audio play or pause | play status |
| ended  | Emitted when audio ended | —— |
| mute  | Emitted when audio mute | —— |
| change-progress  | Emitted when audio progress change | play time（millisecond） |
| can-play | Emitted when the user agent can play the media | `event: Event` |
