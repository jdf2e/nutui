<template>
  <!-- 显示进度条 、 播放时长、 兼容是否支持 、暂停、 开启-->

  <div class="nut-audio">
    <!-- 进度条 -->
    <div class="progress-wrapper" v-if="type == 'progress'">
      <!-- 时间显示 -->
      <div class="time">{{ currentDuration }}</div>
      <div class="progress-bar-wrapper">
        <nut-range
          v-model="percent"
          hidden-range
          @change="progressChange"
          inactive-color="#cccccc"
          active-color="#fa2c19"
        >
          <template #button>
            <div class="custom-button"></div>
          </template>
        </nut-range>
      </div>

      <div class="time">{{ duration }}</div>
    </div>

    <!-- 自定义 -->
    <div class="nut-audio-icon" v-if="type == 'icon'">
      <div
        :class="['nut-audio-icon-box', playing ? 'nut-audio-icon-play' : 'nut-audio-icon-stop']"
        @click="changeStatus"
      >
        <nut-icon v-if="playing" name="service" class="nut-icon-am-rotate nut-icon-am-infinite"></nut-icon>
        <nut-icon v-if="!playing" name="service"></nut-icon>
      </div>
    </div>

    <div v-if="type == 'none'" @click="changeStatus">
      <slot></slot>
    </div>

    <!-- 操作按钮 -->
    <template v-if="type != 'none'">
      <slot></slot>
    </template>

    <audio
      class="audioMain"
      :controls="type == 'controls'"
      ref="audioRef"
      :src="url"
      :preload="preload"
      :autoplay="autoplay"
      :loop="loop"
      @timeupdate="onTimeupdate"
      @ended="audioEnd"
      :muted="hanMuted"
    >
    </audio>
  </div>
</template>
<script lang="ts">
import { toRefs, ref, onMounted, reactive, watch, provide } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('audio');

export default create({
  props: {
    url: {
      type: String,
      default() {
        return '';
      }
    },
    // 静音
    muted: {
      type: Boolean,
      default() {
        return false;
      }
    },
    // 自动播放
    autoplay: {
      type: Boolean,
      default() {
        return false;
      }
    },

    // 循环播放
    loop: {
      type: Boolean,
      default() {
        return false;
      }
    },

    // 是否预加载音频
    preload: {
      type: String,
      default() {
        return 'auto';
      }
    },
    /* 总时长秒数 */
    second: {
      type: Number,
      default() {
        return 0;
      }
    },

    // 展示的形式   controls 控制面板   progress 进度条  icon 图标 none 自定义
    type: {
      type: String,
      default() {
        return 'progress';
      }
    }
  },
  components: {},
  emits: ['fastBack', 'play', 'forward', 'ended', 'changeProgress', 'mute'],

  setup(props, { emit }) {
    const audioRef = ref(null);

    const audioData = reactive({
      currentTime: 0,
      currentDuration: '00:00:00',
      percent: 0,
      duration: '00:00:00',
      second: 0,
      hanMuted: props.muted,
      playing: props.autoplay
    });

    onMounted(() => {
      // 播放的兼容性
      var arr = ['webkitVisibilityState', 'visibilitychange'];
      try {
        for (let i = 0; i < arr.length; i++) {
          document.addEventListener(arr[i], () => {
            if (document.hidden) {
              // 页面被挂起
              // 这里要根据用户当前播放状态，做音频暂停操作
              (audioRef.value as any).pause();
            } else {
              // 页面呼出
              if (audioData.playing) {
                setTimeout(() => {
                  // 这里要 根据页面挂起前音频的播放状态，做音频播放操作
                  (audioRef.value as any).play();
                }, 200);
              }
            }
          });
        }
      } catch (e) {
        console.log((e as any).message);
      }

      // 获取当前音频播放时长
      setTimeout(() => {
        // 自动播放
        if (props.autoplay) {
          if (audioRef.value && audioRef.value.paused) {
            audioRef.value.play();
          }
        }
        audioData.second = audioRef.value.duration;
        audioData.duration = formatSeconds(audioRef.value.duration);
      }, 500);
    });

    //播放时间
    const onTimeupdate = (e) => {
      audioData.currentTime = parseInt(e.target.currentTime);
    };

    //后退
    const fastBack = () => {
      audioData.currentTime--;
      audioRef.value.currentTime = audioData.currentTime;

      emit('fastBack', audioData.currentTime);
    };

    //改变播放状态
    const changeStatus = () => {
      if (audioData.playing) {
        audioRef.value.pause();

        audioData.handPlaying = false;
      } else {
        audioRef.value.play();
        audioData.handPlaying = true;
      }
      audioData.playing = !audioData.playing;

      emit('play', audioData.playing);
    };

    //快进
    const forward = () => {
      audioData.currentTime++;
      audioRef.value.currentTime = audioData.currentTime;

      emit('forward', audioData.currentTime);
    };

    //处理
    const handle = (val) => {
      //毫秒数转为时分秒
      audioData.currentDuration = formatSeconds(val);
      audioData.percent = (val / audioData.second) * 100;
    };
    //播放结束 修改播放状态
    const audioEnd = () => {
      audioData.playing = false;
      emit('ended');
    };

    //点击进度条
    const progressChange = (val) => {
      audioRef.value.currentTime = (audioData.second * val) / 100;

      emit('changeProgress', audioRef.value.currentTime);
    };

    // 静音
    const handleMute = () => {
      audioData.hanMuted = !audioData.hanMuted;

      emit('mute', audioData.hanMuted);
    };

    const formatSeconds = (value) => {
      let theTime = parseInt(value); // 秒
      let theTime1 = 0; // 分
      let theTime2 = 0; // 小时
      if (theTime > 60) {
        theTime1 = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (theTime1 > 60) {
          theTime2 = parseInt(theTime1 / 60);
          theTime1 = parseInt(theTime1 % 60);
        }
      }
      let result = '' + parseInt(theTime);
      if (result < 10) {
        result = '0' + result;
      }
      if (theTime1 > 0) {
        result = '' + parseInt(theTime1) + ':' + result;
        if (theTime1 < 10) {
          result = '0' + result;
        }
      } else {
        result = '00:' + result;
      }
      if (theTime2 > 0) {
        result = '' + parseInt(theTime2) + ':' + result;
        if (theTime2 < 10) {
          result = '0' + result;
        }
      } else {
        result = '00:' + result;
      }
      return result;
    };

    watch(
      () => audioData.currentTime,
      (value) => {
        handle(value);
      }
    );

    provide('audioParent', {
      children: [],
      props,
      audioData,
      handleMute,
      forward,
      fastBack,
      changeStatus
    });

    return {
      ...toRefs(props),
      ...toRefs(audioData),
      audioRef,
      fastBack,
      forward,
      changeStatus,
      progressChange,
      audioEnd,
      onTimeupdate,
      handleMute
    };
  }
});
</script>
