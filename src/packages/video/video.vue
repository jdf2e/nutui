<template>
    <div class="nut-video">
        <video
            ref="video"
            class="nut-videoplayer"
            type="video/mp4"
            :muted="options.muted"
            :autoplay="options.autoplay"
            :loop="options.loop"
            :controls="options.controls"
        >
            <source v-for="source in sources" :src="source.src" :type="source.type" :key="source.src" />
        </video>
        <div class="playing-mask" @click="play">
            <div class="nut-video-play-btn" v-show="!state.playing"></div>
        </div>

        <div class="nut-video-controller"></div>
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
                    volume: 0.9,
                    poster: '',
                    noScrub: false,
                    loop: false,
                    controls: true,
                    muted: false, //是否静音
                    disabled: false, //禁止操作
                    playsinline: false //行内展示
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
                playing: false //是否正在播放
            }
        };
    },
    mounted() {
        this.init();
        // this.$refs.video.addEventListener('durationchange', e => {
        //     this.duration = e.target.duration;
        // });
        // this.$refs.video.addEventListener('timeupdate', e => {
        //     this.currentTime = e.target.currentTime;
        //     this.progress = (e.target.currentTime / this.duration) * 100;
        // });
        // this.$refs.video.addEventListener('playing', e => {
        //     this.playing = true;
        // });
        // this.$refs.video.addEventListener('pause', e => {
        //     this.playing = false;
        // });
        // this.$refs.video.addEventListener('ended', e => {
        //     this.playing = false;
        // });
    },
    methods: {
        init() {
            // this.video = this.$refs.video;
            // let {autoplay, playsinline} = this.options;
            if (this.options.autoplay) {
                this.play();
            }

            if (this.options.playsinline) {
                this.$refs.video.setAttribute('playsinline', this.options.playsinline);
                this.$refs.video.setAttribute('webkit-playsinline', this.options.playsinline);
                this.$refs.video.setAttribute('x5-playsinline', this.options.playsinline);
                this.$refs.video.setAttribute('x5-video-player-type', 'h5');
                // this.$refs.video.setAttribute('x5-video-player-fullscreen', false);
            }
        },
        play() {
            this.state.playing = !this.state.playing;
            if (this.options.autoplay && this.options.disabled) {
                this.state.playing = true;
                return false;
            }
            if (this.$refs.video) {
                if (this.state.playing) {
                    this.$refs.video.play();
                    // this.mouseLeaveVideo();
                    this.$refs.video.addEventListener('timeupdate', this.timeline);
                    this.$refs.video.addEventListener('ended', e => {
                        this.state.playing = false;
                        // this.video.pos.current = 0;
                        // this.$refs.video.currentTime = 0;
                    });
                } else {
                    this.$refs.video.pause();
                }
            }
        },
        togglePlay() {}
    },
    beforeDestroy() {}
};
</script>
