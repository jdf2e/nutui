<template>
    <div class="nut-infiniteloading" 
        ref="scroller" 
        @touchstart="touchStartHandle($event)" 
        @touchmove="touchMoveHandle($event)"
    >
        <slot></slot>
        <div class="load-more">
            <div class="bottom-tips">
                <template v-if="isLoading" >
                   <i class="loading-hint"></i><span class="loading-txt">加载中...</span>
                </template>
                <span v-else-if="!hasMore" class="tips-txt">哎呀，这里是底部了啦</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nut-infiniteloading',
    props: {
        hasMore: {
            type: Boolean,
            default: true
        },
        isLoading: {
            type: Boolean,
            default: false
        },
        threshold: {
            type: Number,
            default: 200
        },
        useWindow: {
            type: Boolean,
            default: true
        },
        isShowMod: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            startX: 0,
            startY: 0,
            diffX: 0,
            diffY: 0,
            beforeScrollTop: 0
        }
    },

    mounted: function () {
        this.scrollListener();
    },

    methods: {
        touchStartHandle(e) {
            try {
                this.startX = Number(e.changedTouches[0].pageX);
                this.startY = Number(e.changedTouches[0].pageY);
            } catch (e) {
                console.log(e.message);
            }
        },
        touchMoveHandle(e) {
            let endX = Number(e.changedTouches[0].pageX);
            let endY = Number(e.changedTouches[0].pageY);
            this.diffX = endX - this.startX;
            this.diffY = endY - this.startY;
        },

        scrollListener() {
            window.addEventListener('scroll', this.handleScroll, false);
            window.addEventListener('resize', this.handleScroll, false);
        },

        requestAniFrame() {
            return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                function(callback) {
                    window.setTimeout(callback, 1000 / 60);
                }
            );
        },

        handleScroll() {
            this.requestAniFrame()(() => {
                if (!this.hasMore || !this.isScrollAtBottom() || this.isLoading || !this.isShowMod) {
                    return false;
                } else {
                    this.$emit('loadmore');
                }
            })
        },

        calculateTopPosition(el) {
            if (!el) {
                return 0;
            }
            return el.offsetTop + this.calculateTopPosition(el.offsetParent);
        },

        getWindowScrollTop() {
            return window.pageYOffset !== undefined ?
                window.pageYOffset :
                (document.documentElement || document.body.parentNode || document.body)
                .scrollTop;
        },

        isScrollAtBottom() {
            let offsetDistance;
            
            const windowScrollTop = this.getWindowScrollTop();
            if (this.useWindow) {
                offsetDistance =
                    this.calculateTopPosition(this.$refs.scroller) +
                    this.$refs.scroller.offsetHeight -
                    windowScrollTop - window.innerHeight;
            } else {
                const {
                    scrollHeight,
                    clientHeight,
                    scrollTop
                } = this.$refs.scroller;
                offsetDistance = scrollHeight - clientHeight - scrollTop;
            }
            
            // 保证是往下滑动的
            let beforeScrollTop = this.beforeScrollTop;
            this.beforeScrollTop = windowScrollTop;

            return (offsetDistance <= this.threshold && windowScrollTop >= this.beforeScrollTop) ;
        }
    },

    destroyed() {
        window.removeEventListener('scroll', this.handleScroll, false);
        window.removeEventListener('resize', this.handleScroll, false);
    }
}
</script>
