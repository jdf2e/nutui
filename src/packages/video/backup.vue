<template>
  <div class="nut-video" ref="videocon">
    <video
      ref="video"
      class="nut-videoplayer"
      type="video/mp4"
      :muted="options.muted"
      :autoplay="options.autoplay"
      :loop="options.loop"
      :poster="options.poster"
      :controls="options.controls"
      @error="handleError"
    >
      <source v-for="source in sources" :src="source.src" :type="source.type" :key="source.src" />
    </video>
    <div class="playing-mask" ref="touchMask" v-if="showTouchMask" @click="play"></div>
    <!-- <div class="nut-video-play-btn" ref="palyBtn" v-show="!state.playing" @click="play"></div> -->
    <!-- <div class="nut-video-controller" v-show="showToolbox">
            <div class="current-time">{{ videoSet.displayTime }}</div>
            <div class="progress-container">
                <div class="progress" ref="progressBar">
                    <div class="buffered" style="width:50%"></div>
                    <div class="video-ball">
                        <div></div>
                    </div>
                    <div class="played" ref="playedBar"></div>
                </div>
            </div>
            <div class="duration-time">{{ videoSet.totalTime }}</div>
            <div class="volume"></div>
            <div class="fullscreen-icon" @click="fullScreen"></div>
        </div> -->
    <!-- 错误弹窗 -->
    <div class="nut-video-error" v-show="state.isError">
      <p class="lose">视频加载失败</p>
      <p class="retry" @click="retry">点击重试</p>
    </div>
  </div>
</template>
<script>
import { throttle } from '../../utils/throttle';
export default {
  name: 'nut-video',
  props: {
    src: '',
    playsinline: {
      type: Boolean,
      default: false
    },
    sources: Array,
    options: {
      type: Object,
      default() {
        return {
          autoplay: false, //是否自动播放
          volume: 0.5,
          poster: '',
          loop: false,
          controls: true,
          muted: false, //是否静音
          disabled: false, //禁止操作
          playsinline: false, //行内展示
          touchPlay: false
        };
      },
      required: true
    }
  },
  data() {
    return {
      videoElm: null,
      initial: true, //控制封面的显示
      showToolbox: false, //控制控制器和标题的显示
      // 视频容器元素
      player: {
        $player: null,
        pos: null
      },
      // progress进度条元素
      progressBar: {
        progressElm: null, // 进度条DOM对象
        pos: null
      },
      // video控制显示设置
      videoSet: {
        loaded: 0, // 缓存长度
        displayTime: '00:00', // 进度时间
        totalTime: '00:00', // 总时间
        progress: {
          width: 0, // 进度条长度
          current: 0 // 进度条当前位置
        }
      },
      state: {
        contrlShow: false,
        vol: 0.5, //音量
        currentTime: 0, //当前时间
        fullScreen: false,
        playing: false, //是否正在播放
        isLoading: false,
        isEnd: false,
        isError: false
      },
      showTouchMask: false
    };
  },
  watch: {
    sources: {
      handler(newValue, oldValue) {
        if (newValue && oldValue && newValue != oldValue) {
          this.$nextTick(() => {
            this.videoElm.load();
          });
        }
      },
      immediate: true
    },
    options: {
      handler(val) {},
      immediate: true
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.videoElm = this.$el.getElementsByTagName('video')[0];
      if (this.options.autoplay) {
        this.play();
      }

      if (this.options.touchPlay) {
        this.showTouchMask = true;
      }
      if (this.options.playsinline) {
        this.videoElm.setAttribute('playsinline', this.options.playsinline);
        this.videoElm.setAttribute('webkit-playsinline', this.options.playsinline);
        this.videoElm.setAttribute('x5-playsinline', this.options.playsinline);
        this.videoElm.setAttribute('x5-video-player-type', 'h5');
        this.videoElm.setAttribute('x5-video-player-fullscreen', false);
      }
      this.volumeHandle();

      // const $player = this.$el;
      // const $progress = this.$el.getElementsByClassName('progress')[0];
      // // 播放器位置
      // this.player.$player = $player;
      // this.progressBar.$progress = $progress;
      // this.player.pos = $player.getBoundingClientRect();
      // this.progressBar.pos = $progress.getBoundingClientRect();
      // this.videoSet.progress.width = Math.round($progress.getBoundingClientRect().width);

      this.videoElm.addEventListener('play', () => {
        this.state.playing = true;
      });
      this.videoElm.addEventListener('pause', () => {
        this.state.playing = false;
      });
    },
    play() {
      this.state.playing = !this.state.playing;

      if (this.options.autoplay && this.options.disabled) {
        this.state.playing = true;
        return false;
      }
      if (this.videoElm) {
        // if (this.state.playing) {
        //     this.videoElm.play();
        //     this.videoElm.addEventListener('ended', this.playEnded);
        //     this.$emit('play', this.video);
        // } else {
        //     this.videoElm.pause();
        //     this.$emit('pause', this.video);
        // }
        // 播放状态
        if (this.state.playing) {
          try {
            this.videoElm.play();
            // this.isPauseTouch = false;
            // 监听缓存进度
            // this.videoElm.addEventListener('progress', e => {
            //     this.getLoadTime();
            // });
            // // 监听播放进度
            // this.videoElm.addEventListener('timeupdate', throttle(this.getPlayTime, 100, 1));
            // 监听结束
            this.videoElm.addEventListener('ended', this.playEnded);
            this.$emit('play', this.videoElm);
          } catch (e) {
            // 捕获url异常出现的错误
            this.handleError();
          }
        }
        // 停止状态
        else {
          // this.isPauseTouch = true;
          this.videoElm.pause();
          this.$emit('pause', this.videoElm);
        }
      }
    },
    volumeHandle() {
      this.state.vol = this.videoElm.volume;
    },
    playEnded() {
      // console.log('ended', this.videoSet.displayTime);
      this.state.playing = false;
      this.state.isEnd = true;
      this.state.controlBtnShow = true;
      this.videoSet.displayTime = '00:00';
      this.videoSet.progress.current = 0;
      this.videoElm.currentTime = 0;
      this.$emit('playend', this.videoElm);
    },
    // 数据加载出错
    handleError() {
      // console.log('error')
      this.state.isError = true;
    },

    fullScreen() {
      if (!this.state.fullScreen) {
        this.state.fullScreen = true;
        this.video.webkitRequestFullScreen();
      } else {
        this.state.fullScreen = false;
        document.webkitCancelFullScreen();
      }
      setTimeout(this.initVideo, 200);
    },
    // 获取播放时间
    getPlayTime() {
      const percent = this.videoElm.currentTime / this.videoElm.duration;
      this.videoSet.progress.current = Math.round(this.videoSet.progress.width * percent);
      // 赋值时长
      this.videoSet.totalTime = timeParse(this.videoElm.duration);
      this.videoSet.displayTime = timeParse(this.videoElm.currentTime);
    },
    // 获取缓存时间
    getLoadTime() {
      // console.log('缓存了...',this.videoElm.buffered.end(0));
      this.videoSet.loaded = (this.videoElm.buffered.end(0) / this.videoElm.duration) * 100;
    },
    getTime() {
      this.videoElm.addEventListener('durationchange', e => {
        // console.log(e);
      });
      this.videoElm.addEventListener('progress', e => {
        this.videoSet.loaded = (-1 + this.videoElm.buffered.end(0) / this.videoElm.duration) * 100;
      });
      this.videoSet.len = this.videoElm.duration;
    },
    sliderStart() {},
    touchmove() {},
    touchend() {},
    // 点击重新加载
    retry() {
      // console.log('error');
      this.state.isError = false;
      this.init();
    }
  },
  beforeDestroy() {}
};
</script>
