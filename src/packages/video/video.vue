<template>
    <div class="nut-video" ref="videocon">
        <video
            ref="video"
            class="nut-videoplayer"
            type="video/mp4"
            :muted="options.muted"
            :autoplay="options.autoplay"
            :loop="options.loop"
            :controls="options.controls"
            :poster="options.poster"
            @error="handleError"
        >
            <source v-for="source in sources" :src="source.src" :type="source.type" :key="source.src" />
        </video>
        <div class="playing-mask" @click="play"></div>
        <div class="nut-video-play-btn" v-show="!state.playing" @click="play"></div>
        <div class="nut-video-controller"></div>
        <!-- 错误弹窗 -->
        <div class="nut-video-error" v-show="state.isError">
            <p class="lose">视频加载失败</p>
            <p class="retry" @click="retry">点击重试</p>
        </div>
    </div>
</template>
<script>
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
                    
                };
            },
            required: true
        }
    },
    data() {
        return {
            video: null,
            initial: true, //控制封面的显示
            showToolbox: false, //控制控制器和标题的显示
            progress: 0, //进度
            duration: 0, //总时长
            state: {
                contrlShow: true,
                vol: 0.5, //音量
                currentTime: 0, //当前时间
                fullScreen: false,
                playing: false, //是否正在播放
                isLoading: false,
                isEnd: false,
                isError: false
            }
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.video = this.$el.getElementsByTagName('video')[0]
            if (this.options.autoplay) {
                this.play();
            }

            if (this.options.playsinline) {
                this.video.setAttribute('playsinline', this.options.playsinline);
                this.video.setAttribute('webkit-playsinline', this.options.playsinline);
                this.video.setAttribute('x5-playsinline', this.options.playsinline);
                this.video.setAttribute('x5-video-player-type', 'h5');
                this.video.setAttribute('x5-video-player-fullscreen', false);
            }
            this.volumeHandle();
            
            this.video.addEventListener('play', ()=>{
                this.state.playing = true;
            });
            this.video.addEventListener('pause', ()=>{
                this.state.playing = false;
            });
        },
        play() {
            this.state.playing = !this.state.playing;
            
            if (this.options.autoplay && this.options.disabled) {
                this.state.playing = true;
                return false;
            }
            if (this.video) {
                if (this.state.playing) {
                    this.video.play();
                    this.video.addEventListener('ended', this.playEnded);
                    this.$emit('play', this.video)
                    
                } else {
                    this.video.pause();
                    this.$emit('pause', this.video)
                }
            }
        },
        volumeHandle(){
            this.state.vol = this.video.volume
        },
        playEnded(){
            this.state.playing = false;
            this.video.currentTime = 0;
            // console.log('ended')
            this.$emit('playend', this.video)
        },
        // 数据加载出错
        handleError() {
            // console.log('error')
            this.state.isError = true;
        },
        // 点击重新加载
        retry() {
            this.state.isError = false;
            this.init();
        },
    },
    beforeDestroy() {
    }
};
</script>
