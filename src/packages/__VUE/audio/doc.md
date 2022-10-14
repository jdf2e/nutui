# Audio 组件

### 介绍

用于音频播放

### 安装


```javascript
import { createApp } from 'vue';
// vue
import { Audio} from '@nutui/nutui';

const app = createApp();
app.use(Audio);
```

### 基础用法

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

### 语音播放

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

### 进度条展示

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

### 自定义操作按钮

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

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| url         | 语音播放的连接               | String | ''              |
| muted        | 是否静音                         | Boolean | false             |
| autoplay         | 是否自动播放 | Boolean | false               |
| loop | 是否循环播放     | Boolean | false |
| preload          | 是否预加载语音                        | String | 'auto'              |
| type         | 展示形式，可选值：controls 控制面板   progress 进度条  icon 图标 none 自定义 | String | 'progress'              |


### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| fast-back  | 触发语音快退 | 返回当前播放时长（单位：毫秒） |
| forward  | 触发语音快进 | 返回当前播放时长（单位：毫秒） |
| play  | 触发播放/暂停语音 | 返回当前播放状态 |
| ended  | 语音播放完成，当loop设置为false时生效 | —— |
| mute  | 触发静音 | —— |
| change-progress  | 当进度条改变时触发 | 返回当前播放时长（单位：毫秒） |
| can-play `v3.2.0` | 当可以播放媒体文件时触发 | `event: Event` |

    