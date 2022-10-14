<template>
  <div class="demo">
    <h4>{{ translate('basic') }}</h4>
    <nut-cell class="cell">
      <nut-video :source="source" :options="options" @play="play" @pause="pause" @playend="playend"> </nut-video>
    </nut-cell>
    <h4>{{ translate('title1') }}</h4>
    <nut-cell class="cell">
      <nut-video :source="source" :options="options1" @play="play" @pause="pause" @playend="playend"> </nut-video>
    </nut-cell>
    <h4>{{ translate('title2') }}</h4>
    <nut-cell class="cell">
      <nut-video :source="source" :options="options2" @play="play" @pause="pause" @playend="playend"> </nut-video>
    </nut-cell>
    <h4>{{ translate('title3') }}</h4>
    <nut-cell class="cell">
      <nut-video :source="source" :options="options3" @play="play" @pause="pause" @playend="playend"> </nut-video>
    </nut-cell>
    <h4>{{ translate('title4') }}</h4>
    <nut-cell class="cell">
      <nut-video :source="source" :options="options4" @play="play" @pause="pause" @playend="playend"> </nut-video>
    </nut-cell>
    <h4>{{ translate('title5') }}</h4>
    <nut-cell class="cell">
      <nut-video :source="source" :options="options5" @play="play" @pause="pause" @playend="playend"> </nut-video>
    </nut-cell>
    <h4>{{ translate('title6') }}</h4>
    <nut-cell class="cell">
      <nut-video :source="source1" :options="options" @play="play" @pause="pause" @playend="playend"> </nut-video>
    </nut-cell>
    <nut-button type="primary" @click="changeVideo" class="m-b">{{ translate('title6') }}</nut-button>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('video');

import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      title1: '自动播放',
      title2: '初始化静音',
      title3: '视频封面海报设置',
      title4: '行内播放',
      title5: '设置视频为背景图',
      title6: '视频切换'
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Auto play',
      title2: 'Initialize mute',
      title3: 'Video cover poster settings',
      title4: 'play inline',
      title5: 'Set video as background',
      title6: 'Video switching'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
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
    const play = (elm: any) => console.log('play', elm);
    const pause = (elm: any) => console.log('pause', elm);
    const playend = (elm: any) => console.log('playend', elm);
    const changeVideo = () => {
      state.source1.src = 'https://vjs.zencdn.net/v/oceans.mp4';
    };

    return { play, pause, playend, ...toRefs(state), changeVideo, translate };
  }
});
</script>

<style lang="scss" scoped>
.demo {
  padding: 57px 0 0 0 !important;
}
h4 {
  margin-left: 25px;
  margin-top: 20px;
  font-family: PingFangSC-Regular;
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
