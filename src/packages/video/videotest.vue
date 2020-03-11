<template>
    <div class="video-player">
        <!-- 播放器界面; 兼容ios  controls-->
        <video
            ref="video"
            v-if="showVideo"
            webkit-playsinline="true"
            playsinline="true"
            x-webkit-airplay="true"
            x5-video-player-type="h5"
            x5-video-player-fullscreen="true"
            x5-video-orientation="portraint"
            style="object-fit:fill"
            preload="auto"
            muted="true"
            poster="https://photo.mac69.com/180205/18020526/a9yPQozt0g.jpg"
            :src="src"
            @waiting="handleWaiting"
            @canplaythrough="state.isLoading = false"
            @playing="(state.isLoading = false), (state.controlBtnShow = false), (state.playing = true)"
            @stalled="state.isLoading = true"
            @error="handleError"
            >您的浏览器不支持HTML5</video
        >
        <!-- 兼容Android端层级问题, 弹出层被覆盖 -->
        <img v-show="!showVideo || state.isEnd" class="poster" src="https://photo.mac69.com/180205/18020526/a9yPQozt0g.jpg" alt />
        <!-- 控制窗口 -->
        <div class="control" v-show="!state.isError" ref="control" @touchstart="touchEnterVideo" @touchend="touchLeaveVideo">
            <!-- 播放 || 暂停 || 加载中-->
            <div class="play" @touchstart.stop="clickPlayBtn" v-show="state.controlBtnShow">
                <img
                    v-show="!state.playing && !state.isLoading"
                    src="https://img10.360buyimg.com/imagetools/jfs/t1/32964/16/6517/1174/5c8f3cabE260d5fc4/036d6af59b6df77c.png"
                />
                <img
                    v-show="state.playing && !state.isLoading"
                    src="https://img14.360buyimg.com/imagetools/jfs/t1/24379/23/11486/739/5c8f3cabE9e633c19/826703b8fe47deb9.png"
                />
                <div class="loader" v-show="state.isLoading">
                    <div class="loader-inner ball-clip-rotate">
                        <div></div>
                    </div>
                </div>
            </div>
            <!-- 控制条 -->
            <!-- <div class="control-bar" v-show="state.controlBarShow"> -->
            <div class="control-bar" :style="{visibility: state.controlBarShow ? 'visible' : 'hidden'}">
                <span class="time">{{ video.displayTime }}</span>
                <span class="progress" ref="progress">
                    <img
                        class="progress-btn ignore"
                        :style="{transform: `translate3d(${video.progress.current}px, 0, 0)`}"
                        src="../../assets/img/cursor.gif"
                    />
                    <span class="progress-loaded" :style="{width: `${video.loaded}%`}"></span>
                    <!-- 设置手动移动的进度条 -->
                    <span
                        class="progress-move"
                        @touchmove.stop.prevent="moveIng($event)"
                        @touchstart.stop="moveStart($event)"
                        @touchend.stop="moveEnd($event)"
                    ></span>
                </span>

                <span class="total-time">{{ video.totalTime }}</span>
                <span class="full-screen" @click="fullScreen">
                    <img src="../../assets/img/w-icon.png" alt />
                </span>
            </div>
        </div>
        <!-- 错误弹窗 -->
        <div class="error" v-show="state.isError">
            <p class="lose">视频加载失败</p>
            <p class="retry" @click="retry">点击重试</p>
        </div>
    </div>
</template>
<script>
// import {throttle} from '@/common/js/tool';

export const throttle = (func, wait, type) => {
    if (type === 1) {
        var previous = 0;
    } else if (type === 2) {
        var timeout;
    }
    return function() {
        let context = this;
        let args = arguments;
        if (type === 1) {
            let now = Date.now();

            if (now - previous > wait) {
                func.apply(context, args);
                previous = now;
            }
        } else if (type === 2) {
            if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null;
                    func.apply(context, args);
                }, wait);
            }
        }
    };
};

const pad = val => {
    val = Math.floor(val);
    if (val < 10) {
        return '0' + val;
    }
    return val + '';
};
const timeParse = sec => {
    let min = 0;
    min = Math.floor(sec / 60);
    sec = sec - min * 60;
    return pad(min) + ':' + pad(sec);
};
export default {
    name: 'nut-video',
    props: {
        src: {
            type: String,
            required: true
        },
        showVideo: {
            // 兼容android弹出层
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            // video元素
            $video: null,
            // 视频容器元素
            player: {
                $player: null,
                pos: null
            },
            // progress进度条元素
            progressBar: {
                $progress: null, // 进度条DOM对象
                pos: null
            },
            // video控制显示设置
            video: {
                loaded: 0, // 缓存长度
                displayTime: '00:00', // 进度时间
                totalTime: '00:00', // 总时间
                progress: {
                    width: 0, // 进度条长度
                    current: 0 // 进度条当前位置
                }
            },
            // 定时器
            hideTimer: null,
            // 播放状态控制
            state: {
                controlBtnShow: true, // 播放按钮
                controlBarShow: false, // 控制条
                fullScreen: false,
                playing: false,
                isLoading: false,
                isEnd: false,
                isError: false
            },
            // 首次触摸
            isFirstTouch: true,
            // 暂停状态触摸
            isPauseTouch: false
        };
    },
    methods: {
        init() {
            // 初始化video,获取video元素
            this.$video = this.$el.getElementsByTagName('video')[0];
            this.initPlayer();
        },
        // 初始化播放器容器, 获取video-player元素
        // getBoundingClientRect()以client可视区的左上角为基点进行位置计算
        initPlayer() {
            const $player = this.$el;
            const $progress = this.$el.getElementsByClassName('progress')[0];
            // 播放器位置
            this.player.$player = $player;
            this.progressBar.$progress = $progress;
            this.player.pos = $player.getBoundingClientRect();
            this.progressBar.pos = $progress.getBoundingClientRect();
            this.video.progress.width = Math.round($progress.getBoundingClientRect().width);
        },
        // 点击播放 & 暂停按钮
        clickPlayBtn() {
            if (this.state.isLoading) return;
            this.isFirstTouch = false;
            this.state.playing = !this.state.playing;
            this.state.isEnd = false;
            if (this.$video) {
                // 播放状态
                if (this.state.playing) {
                    try {
                        this.$video.play();
                        this.isPauseTouch = false;
                        // 监听缓存进度
                        this.$video.addEventListener('progress', e => {
                            this.getLoadTime();
                        });
                        // 监听播放进度
                        this.$video.addEventListener('timeupdate', throttle(this.getPlayTime, 100, 1));
                        // 监听结束
                        this.$video.addEventListener('ended', e => {
                            // 重置状态
                            this.state.playing = false;
                            this.state.isEnd = true;
                            this.state.controlBtnShow = true;
                            this.video.displayTime = '00:00';
                            this.video.progress.current = 0;
                            this.$video.currentTime = 0;
                            this.src = this.src;
                        });
                    } catch (e) {
                        // 捕获url异常出现的错误
                    }
                }
                // 停止状态
                else {
                    this.isPauseTouch = true;
                    this.$video.pause();
                }
            }
        },
        // 触碰播放区
        touchEnterVideo() {
            if (this.isFirstTouch) return;
            if (this.hideTimer) {
                clearTimeout(this.hideTimer);
                this.hideTimer = null;
            }
            this.state.controlBtnShow = true;
            this.state.controlBarShow = true;
        },
        // 离开播放区
        touchLeaveVideo() {
            if (this.isFirstTouch) return;
            if (this.hideTimer) {
                clearTimeout(this.hideTimer);
            }
            // 暂停触摸, 不隐藏
            if (this.isPauseTouch) {
                this.state.controlBtnShow = true;
                this.state.controlBarShow = true;
            } else {
                this.hideTimer = setTimeout(() => {
                    this.state.controlBarShow = false;
                    // 加载中只显示loading
                    if (this.state.isLoading) {
                        this.state.controlBtnShow = true;
                    } else {
                        this.state.controlBtnShow = false;
                    }
                    this.hideTimer = null;
                }, 3000);
            }
        },
        // 等待数据加载
        handleWaiting() {
            this.state.controlBtnShow = true;
            this.state.isLoading = true;
        },
        // 数据加载出错
        handleError() {
            this.state.isError = true;
        },
        // 点击重新加载
        retry() {
            this.state.isError = false;
            this.init();
        },
        // 获取播放时间
        getPlayTime() {
            const percent = this.$video.currentTime / this.$video.duration;
            this.video.progress.current = Math.round(this.video.progress.width * percent);
            // 赋值时长
            this.video.totalTime = timeParse(this.$video.duration);
            this.video.displayTime = timeParse(this.$video.currentTime);
        },
        // 获取缓存时间
        getLoadTime() {
            // console.log('缓存了...',this.$video.buffered.end(0));
            this.video.loaded = (this.$video.buffered.end(0) / this.$video.duration) * 100;
        },
        // 手动调节播放进度
        moveStart(e) {},
        moveIng(e) {
            // console.log("触摸中...");
            let currentX = e.targetTouches[0].pageX;
            let offsetX = currentX - this.progressBar.pos.left;
            // 边界检测
            if (offsetX <= 0) {
                offsetX = 0;
            }
            if (offsetX >= this.video.progress.width) {
                offsetX = this.video.progress.width;
            }
            this.video.progress.current = offsetX;

            let percent = this.video.progress.current / this.video.progress.width;
            this.$video.duration && this.setPlayTime(percent, this.$video.duration);
        },
        moveEnd(e) {
            // console.log("触摸结束...");
            let currentX = e.changedTouches[0].pageX;
            let offsetX = currentX - this.progressBar.pos.left;
            this.video.progress.current = offsetX;
            // 这里的offsetX都是正数
            let percent = offsetX / this.video.progress.width;
            this.$video.duration && this.setPlayTime(percent, this.$video.duration);
        },
        // 设置手动播放时间
        setPlayTime(percent, totalTime) {
            this.$video.currentTime = Math.floor(percent * totalTime);
        },
        // 设置全屏
        fullScreen() {
            console.log('点击全屏...');
            if (!this.state.fullScreen) {
                this.state.fullScreen = true;
                this.$video.webkitRequestFullScreen();
            } else {
                this.state.fullScreen = false;
                document.webkitCancelFullScreen();
            }
        }
    },
    mounted() {
        setTimeout(() => {
            this.init();
        }, 20);
    },
    beforeDestroy() {}
};
</script>
<style lang="scss" scoped>
@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.loader {
    width: 58px;
    height: 58px;
    background: rgba(15, 16, 17, 0.3);
    border-radius: 50%;
    position: relative;
    .ball-clip-rotate {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        > div {
            width: 15px;
            height: 15px;
            border-radius: 100%;
            margin: 2px;
            animation-fill-mode: both;
            border: 2px solid #fff;
            border-bottom-color: transparent;
            height: 26px;
            width: 26px;
            background: transparent !important;
            display: inline-block;
            animation: rotate 0.75s 0s linear infinite;
        }
    }
}
.video-player {
    width: 100%;
    height: 188px;
    overflow: hidden;
    position: relative;
    // 封面
    .poster {
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    video {
        border-radius: 10px 10px 0 0;
        width: 100%;
        height: 100%;
    }
    // 控制层
    .control {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 2;
        left: 0;
        top: 0;
        background-color: transparent;
        .play {
            width: 58px;
            height: 58px;
            position: absolute;
            z-index: 3;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            img {
                width: 100%;
                height: 100%;
            }
        }
        &-bar {
            position: absolute;
            bottom: 8px;
            left: 50%;
            transform: translateX(-50%);
            height: 26px;
            display: flex;
            align-items: center;
            span {
                font-size: 12px;
                color: #fff;
                font-weight: 500;
                white-space: nowrap;
            }
            .progress {
                position: relative;
                margin: 0 8px;
                width: 203px;
                height: 2px;
                background: rgba(255, 255, 255, 0.4);
                border-radius: 2px;
                .progress-move {
                    width: 100%;
                    height: 26px;
                    position: absolute;
                    z-index: 100;
                    left: 0;
                    top: 0;
                    transform: translateY(-50%);
                    background-color: transparent;
                }
                .progress-btn {
                    position: absolute;
                    left: -10px;
                    top: -16px;
                    transition: all 16ms;
                }
                // 不会被转义
                .ignore {
                    width: 18px;
                    height: 18px;
                }
                .progress-loaded {
                    background-color: #fff;
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 0;
                    height: 100%;
                    border-radius: 2px;
                    transition: all 16ms;
                }
            }
            .full-screen {
                width: 26px;
                height: 26px;
                margin-left: 8px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    // 错误层
    .error {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.84);
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        .lose {
            text-align: center;
            font-size: 15px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 23px;
            margin-top: 63px;
            margin-bottom: 40px;
        }
        .retry {
            margin: 0 auto;
            text-align: center;
            line-height: 38px;
            width: 101px;
            height: 38px;
            background: rgba(255, 255, 255, 1);
            border-radius: 19px;
            font-size: 15px;
            color: #008eff;
        }
    }
}
</style>
