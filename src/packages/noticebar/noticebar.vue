<template>
    <div
        v-show="showNoticeBar"
        class="nut-noticebar"
        :class="{ withicon: closeMode,close:closeMode }"
        :style="barStyle"
        @click="$emit('click')"
    >
        <div class="left-icon" v-if="iconShow" :style="{'background-image':`url(${iconBg})`}"></div>
        <div ref="wrap" class="wrap">
            <div
                ref="content"
                class="content"
                :class="[ animationClass, { 'van-ellipsis': !scrollable }]"
                :style="contentStyle"
                @animationend="onAnimationEnd"
                @webkitAnimationEnd="onAnimationEnd"
            >
                <slot>{{ text }}</slot>
            </div>
        </div>
        <div v-if="closeMode" class="right-icon" @click="onClickIcon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <g fill-rule="evenodd">
                    <path
                        d="M.44 2.56A1.5 1.5 0 1 1 2.56.44l27 27a1.5 1.5 0 1 1-2.12 2.12L15 17.123 2.56 29.56A1.5 1.5 0 1 1 .44 27.44L12.878 15 .44 2.56zM27.44.44a1.5 1.5 0 1 1 2.12 2.12l-9 9a1.5 1.5 0 1 1-2.12-2.12l9-9z"
                    ></path>
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: "nut-noticebar",
    props: {
        text: String,
        closeMode: {
            type: Boolean,
            default: false
        },
        leftIcon: String,
        color: String,
        background: {
            type: String,
            default: "rgba(254,250,216,1)"
        },
        delay: {
            type: [String, Number],
            default: 1
        },
        scrollable: {
            type: Boolean,
            default: true
        },
        speed: {
            type: Number,
            default: 6
        },
        vertical: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            wrapWidth: 0,
            firstRound: true,
            duration: 0,
            offsetWidth: 0,
            showNoticeBar: true,
            animationClass: "",
            timer: ""
        };
    },
    computed: {
        iconShow() {
            if (this.leftIcon == "close") {
                return false;
            } else {
                return true;
            }
        },
        barStyle() {
            return {
                color: this.color,
                background: this.background
            };
        },
        contentStyle() {
            return {
                paddingLeft: this.firstRound ? 0 : this.wrapWidth + "px",
                animationDelay: (this.firstRound ? this.delay : 0) + "s",
                animationDuration: this.duration + "s"
            };
        },
        iconBg() {
            let iconBg = null;
            if (this.leftIcon) {
                iconBg = this.leftIcon;
            } else {
                iconBg =
                    "data:image/svg+xml, %3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb(214,128,72)' d='M509.7 960.1c-53.5 0-106.1-9-156.6-26.8l-.2-.1c-8-2.9-14.5-8.7-18.1-16.4-3.7-7.7-4.1-16.4-1.2-24.4 4.7-12.7 17-21.3 30.6-21.3 3.7 0 7.4.6 11 1.9 43.3 15.2 88.6 22.9 134.5 22.9 47.2 0 93.7-8.1 138.1-24.2l.8-.3c3.7-1.4 7.5-2 11.3-2 13.4 0 25.7 8.4 30.5 21l.1.2c2.9 8 2.5 16.7-1.1 24.4-3.6 7.8-10 13.6-18 16.6-52.1 18.9-106.4 28.5-161.7 28.5zM219.3 824c-60 0-108.7-48.2-108.7-107.4v-4c0-21.6 6.4-42.4 18.5-60.2 12.2-17.8 29.2-31.3 49.3-39.1l7.1-2.8v-165c0-79.8 29.8-156.4 84-215.8 53.8-59 127-96.2 206.3-105l10-1.1V90.2c0-14.5 11.8-26.4 26.4-26.4 14.5 0 26.4 11.8 26.4 26.4v33.4l10 1.1c79.2 8.7 152.4 46 206.1 105 54.1 59.4 83.9 136 83.9 215.8v165.1l7.1 2.8c20.1 7.8 37.1 21.3 49.3 39.1 12.2 17.8 18.6 38.6 18.6 60.1v4c0 28.4-11.1 55.2-31.3 75.4-20.6 20.6-48 32-77.2 32H219.3zm-16.6-152.8c-16.9 6.8-28 23.5-27.7 41.6v3.8c-.2 24.5 19.5 44.7 44.1 45h585.7c11.5-.1 22.3-4.5 30.5-12.5 8.6-8.4 13.6-20.2 13.5-32.3l.1-3.9c.3-18.1-10.8-34.9-27.6-41.6L774 652.6V445.5c0-143.6-117.5-260.4-262-260.4S250 301.9 250 445.5v207.1l-47.3 18.6z'/%3E%3C/svg%3E";
            }
            return iconBg;
        }
    },
    watch: {
        text: {
            handler() {
                this.$nextTick(() => {
                    const { wrap, content } = this.$refs;
                    if (!wrap || !content) {
                        return;
                    }
                    const wrapWidth = wrap.getBoundingClientRect().width;

                    const offsetWidth = content.getBoundingClientRect().width;
                    if (
                        this.scrollable &&
                        offsetWidth > wrapWidth &&
                        !this.vertical
                    ) {
                        this.wrapWidth = wrapWidth;
                        this.offsetWidth = offsetWidth;

                        this.duration = (offsetWidth / 375) * this.speed;
                        this.animationClass = "play";
                    }
                });
            },
            immediate: true
        }
    },
    methods: {
        onClickIcon() {
            this.showNoticeBar = !this.closeMode;
        },
        onAnimationEnd() {
            if (this.timer) {
                clearTimeout(this.timer);
            }

            this.firstRound = false;
            this.$nextTick(() => {
                // this.timer = setTimeout(() => {
                this.duration =
                    ((this.offsetWidth + this.wrapWidth) / 375) * this.speed;
                this.animationClass = "play-infinite";
                // }, 10);
            });
        }
    }
};
</script>