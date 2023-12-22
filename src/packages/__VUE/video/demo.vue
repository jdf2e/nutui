<template>
  <div class="demo">
    <h4>{{ translate('basic') }}</h4>
    <nut-cell class="cell">
      <nut-video :source="state.source" :options="state.options" @play="play" @pause="pause" @playend="playend">
      </nut-video>
    </nut-cell>
    <h4>{{ translate('title1') }}</h4>
    <nut-cell class="cell">
      <nut-video :source="state.source" :options="state.options1" @play="play" @pause="pause" @playend="playend">
      </nut-video>
    </nut-cell>
    <h4>{{ translate('title2') }}</h4>
    <nut-cell class="cell">
      <nut-video :source="state.source" :options="state.options2" @play="play" @pause="pause" @playend="playend">
      </nut-video>
    </nut-cell>
    <h4>{{ translate('title3') }}</h4>
    <nut-cell class="cell">
      <nut-video :source="state.source" :options="state.options3" @play="play" @pause="pause" @playend="playend">
      </nut-video>
    </nut-cell>
    <h4>{{ translate('title4') }}</h4>
    <nut-cell class="cell">
      <nut-video :source="state.source" :options="state.options4" @play="play" @pause="pause" @playend="playend">
      </nut-video>
    </nut-cell>
    <h4>{{ translate('title5') }}</h4>
    <nut-cell class="cell">
      <nut-video :source="state.source" :options="state.options5" @play="play" @pause="pause" @playend="playend">
      </nut-video>
    </nut-cell>
    <h4>{{ translate('title6') }}</h4>
    <nut-cell class="cell">
      <nut-video :source="state.source1" :options="state.options" @play="play" @pause="pause" @playend="playend">
      </nut-video>
    </nut-cell>
    <nut-button type="primary" class="m-b" @click="changeVideo">{{ translate('title6') }}</nut-button>
    <h4>{{ translate('title7') }}</h4>
    <nut-cell class="cell">
      <nut-video
        ref="videoRef"
        :source="state.source"
        :options="state.options"
        @play="play"
        @pause="pause"
        @playend="playend"
      >
      </nut-video>
    </nut-cell>
    <nut-button type="success" class="m-b" @click="videoRef.play()">{{ translate('title8') }}</nut-button>
    <nut-button type="warning" class="m-b" @click="videoRef.pause()">{{ translate('title9') }}</nut-button>
    <nut-button type="danger" class="m-b" @click="videoRef.stop()">{{ translate('title10') }}</nut-button>
    <nut-button type="success" class="m-b" @click="videoRef.muted()">{{ translate('title11') }}</nut-button>
    <nut-button type="danger" class="m-b" @click="videoRef.unmuted()">{{ translate('title12') }}</nut-button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, Ref } from 'vue';
import { useTranslate } from '@/sites/assets/util/useTranslate';
const translate = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    title1: '自动播放',
    title2: '初始化静音',
    title3: '视频封面海报设置',
    title4: '行内播放',
    title5: '设置视频为背景图',
    title6: '视频切换',
    title7: 'Ref控制播放，暂停，结束，静音，取消静音',
    title8: '播放',
    title9: '暂停',
    title10: '结束',
    title11: '静音',
    title12: '取消静音'
  },
  'en-US': {
    basic: 'Basic Usage',
    title1: 'Auto play',
    title2: 'Initialize mute',
    title3: 'Video cover poster settings',
    title4: 'play inline',
    title5: 'Set video as background',
    title6: 'Video switching',
    title7: 'Ref Control play, pause, stop, muted, unmuted',
    title8: 'play',
    title9: 'pause',
    title10: 'stop',
    title11: 'muted',
    title12: 'unmuted'
  }
});
const state = reactive({
  source: {
    src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
    type: 'video/mp4'
  },
  source1: {
    src: 'https://storage.360buyimg.com/nutui/video/legao-%E6%9D%A8%E8%BF%9B%E5%86%9B.mp4',
    type: 'video/mp4'
  },
  options: {
    controls: true
  },
  options1: {
    autoplay: true,
    muted: true,
    controls: true
  },
  options2: {
    muted: true,
    controls: true
  },
  options3: {
    controls: true,
    poster:
      'https://img12.360buyimg.com/ling/s345x208_jfs/t1/168105/33/8417/54825/603df06dEfcddc4cb/21f9f5d0a1b3dad4.jpg.webp'
  },
  options4: {
    controls: true,
    playsinline: true
  },
  options5: {
    controls: false,
    autoplay: true,
    disabled: true,
    muted: true,
    playsinline: true,
    loop: true
  }
});
const videoRef = ref('null') as Ref;
const play = (elm: any) => console.log('play', elm);
const pause = (elm: any) => console.log('pause', elm);
const playend = (elm: any) => console.log('playend', elm);
const changeVideo = () => {
  state.source1.src = 'https://vjs.zencdn.net/v/oceans.mp4';
};
</script>

<style lang="scss" scoped>
.demo {
  padding: 57px 0 0 0 !important;
}

h4 {
  margin-left: 25px;
  margin-top: 20px;
  font-size: 14px;
  color: rgba(144, 156, 164, 1);
}

.nut-cell {
  padding: 0;

  &::after {
    display: none;
  }
}

.m-b {
  margin-bottom: 60px;
}
</style>
