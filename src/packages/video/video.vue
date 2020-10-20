<template>
  <div class="nut-video" ref="videocon">
    <video
      ref="video"
      class="nut-videoplayer"
      :muted="options.muted"
      :autoplay="options.autoplay"
      :loop="options.loop"
      :poster="options.poster"
      :controls="options.controls"
      :preload="options.preload"
      @error="handleError"
    >
      <source v-for="source in sources" :src="source.src" :type="source.type" :key="source.src" />
    </video>
    <div class="playing-mask" ref="touchMask" v-if="showToolbox && !isDisabled" @click="play"></div>
    <div class="nut-video-play-btn" v-if="showToolbox && !isDisabled" ref="palyBtn" v-show="!state.playing" @click="play"></div>
    <div class="nut-video-controller" v-show="showToolbox && !isDisabled" :class="{ 'show-control': !state.playing, 'hide-control': state.playing }">
      <div class="control-play-btn" @click="play"></div>
      <div class="current-time">{{ videoSet.displayTime }}</div>
      <div class="progress-container">
        <div class="progress" ref="progressBar">
          <div class="buffered" :style="{ width: `${videoSet.loaded}%` }"></div>
          <div
            class="video-ball"
            :style="{ transform: `translate3d(${videoSet.progress.current}px, -50%, 0)` }"
            @touchmove.stop.prevent="touchSlidMove($event)"
            @touchstart.stop="touchSlidSrart($event)"
            @touchend.stop="touchSlidEnd($event)"
          >
            <div class="move-handle"></div>
          </div>
          <div class="played" ref="playedBar"></div>
        </div>
      </div>
      <div class="duration-time">{{ videoSet.totalTime }}</div>
      <div class="volume" @click="handleMuted" :class="{ muted: state.isMuted }"></div>
      <div class="fullscreen-icon" @click="fullScreen"></div>
    </div>
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
    sources: {
      type: Array,
      default() {
        return [];
      }
    },
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
          touchPlay: false,
          preload: ''
        };
      },
      required: true
    },
    model: {
      type: String,
      default: ''
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
        controlShow: true,
        vol: 0.5, //音量
        currentTime: 0, //当前时间
        fullScreen: false,
        playing: false, //是否正在播放
        isLoading: false,
        isEnd: false,
        isError: false,
        isMuted: false
      },
      showTouchMask: false
    };
  },
  computed: {
    isDisabled() {
      return this.options.disabled;
    }
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
      handler(val) {
        this.state.isMuted = val.muted ? val.muted : false;
      },
      immediate: true
    }
    // model: {
    //     handler(val) {
    //         if (val) {
    //             if (val == 'custom') {
    //                 this.state.controlShow = false;
    //                 this.showToolbox = this.options.controls ? true : false
    //             }
    //         } else {
    //             this.showToolbox = false;
    //             this.state.controlShow = this.options.controls ? true : false
    //         }
    //     },
    //     immediate: true

    // }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.videoElm = this.$el.getElementsByTagName('video')[0];
      if (this.options.autoplay) {
        this.videoElm.play();
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

      if (this.showToolbox) {
        this.customerInit();
      } else {
        this.videoElm.addEventListener('play', () => {
          this.state.playing = true;
          this.$emit('play', this.videoElm);
        });
        this.videoElm.addEventListener('pause', () => {
          this.state.playing = false;
          this.$emit('pause', this.videoElm);
        });
        this.videoElm.addEventListener('ended', this.playEnded);

        this.videoElm.addEventListener('timeupdate', throttle(this.getPlayTime, 100, 1));
      }
    },
    customerInit() {
      const $player = this.$el;
      const $progress = this.$el.getElementsByClassName('progress')[0];
      // 播放器位置
      this.player.$player = $player;
      this.progressBar.progressElm = $progress;
      // this.player.pos = $player.getBoundingClientRect();
      this.progressBar.pos = $progress.getBoundingClientRect();
      this.videoSet.progress.width = Math.round($progress.getBoundingClientRect().width);
    },
    play() {
      if (this.options.autoplay && this.options.disabled) {
        this.state.playing = true;
        // this.state.controlShow = false
        return false;
      }
      this.state.playing = !this.state.playing;
      if (this.videoElm) {
        // 播放状态
        if (this.state.playing) {
          try {
            this.videoElm.play();
            // 监听缓存进度
            this.videoElm.addEventListener('progress', e => {
              this.getLoadTime();
            });
            // 监听播放进度
            this.videoElm.addEventListener('timeupdate', throttle(this.getPlayTime, 100, 1));
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
          this.videoElm.pause();
          this.$emit('pause', this.videoElm);
        }
      }
    },
    // 音量控制
    volumeHandle() {
      this.state.vol = this.options.volume;
    },
    // 静音控制
    handleMuted() {
      this.state.isMuted = !this.state.isMuted;
      this.videoElm.muted = this.state.isMuted;
    },
    playEnded() {
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
        this.videoElm.webkitRequestFullScreen();
      } else {
        this.state.fullScreen = false;
        document.webkitCancelFullScreen();
      }
      // setTimeout(this.initVideo, 200);
    },
    // 获取播放时间
    getPlayTime() {
      const percent = this.videoElm.currentTime / this.videoElm.duration;
      this.videoSet.progress.current = Math.round(this.videoSet.progress.width * percent);

      // 赋值时长
      this.videoSet.totalTime = this.timeFormat(this.videoElm.duration);
      this.videoSet.displayTime = this.timeFormat(this.videoElm.currentTime);
    },
    timeFormat(t) {
      var h = Math.floor(t / 3600);
      if (h < 10) {
        h = '0' + h;
      }
      var m = Math.floor((t % 3600) / 60);
      if (m < 10) {
        m = '0' + m;
      }
      var s = Math.round((t % 3600) % 60);
      if (s < 10) {
        s = '0' + s;
      }
      var str = '';
      if (h != 0) {
        str = h + ':' + m + ':' + s;
      } else {
        str = m + ':' + s;
      }
      return str;
    },
    // 获取缓存时间
    getLoadTime() {
      if (this.videoSet.loaded) this.videoSet.loaded = (this.videoElm.buffered.end(0) / this.videoElm.duration) * 100;
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
    // 拖动播放进度
    touchSlidSrart(e) {},
    touchSlidMove(e) {
      let currentX = e.targetTouches[0].pageX;
      let offsetX = currentX - this.progressBar.pos.left;
      // 边界检测
      if (offsetX <= 0) {
        offsetX = 0;
      }

      if (offsetX >= this.videoSet.progress.width) {
        offsetX = this.videoSet.progress.width;
      }
      this.videoSet.progress.current = offsetX;

      let percent = this.videoSet.progress.current / this.videoSet.progress.width;
      this.videoElm.duration && this.setPlayTime(percent, this.videoElm.duration);
    },
    touchSlidEnd(e) {
      let currentX = e.changedTouches[0].pageX;
      let offsetX = currentX - this.progressBar.pos.left;
      this.videoSet.progress.current = offsetX;
      // 这里的offsetX都是正数
      let percent = offsetX / this.videoSet.progress.width;
      this.videoElm.duration && this.setPlayTime(percent, this.videoElm.duration);
    },
    // 设置手动播放时间
    setPlayTime(percent, totalTime) {
      this.videoElm.currentTime = Math.floor(percent * totalTime);
    },
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
