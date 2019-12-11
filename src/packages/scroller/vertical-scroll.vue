<template>
    <div class="nut-vert-scroll" ref="wrapper">
        <div class="nut-vert-list" ref="list" :style="{'min-height': listMinHeightStyle}">
            <div class="nut-vert-pulldown" v-if="isFirstPull">
                <div class="nut-vert-pulldown-txt" v-if="!isLoading">{{pulldownTxt}}</div>
                <div class="nut-vert-pulldown-status" v-else>
                    <span class="nut-vert-loading"></span>
                    <span class="nut-vert-loading-txt">加载中...</span>
                </div>
            </div>
            <slot name="list"></slot>
            <div class="nut-vert-loadmore" >
                <template v-if="!isUnMore && isShowLoadMore">
                    <!-- <div class="nut-vert-load-txt" >{{loadMoreTxt}}</div> -->
                    <div class="nut-vert-load-status" v-if="isLoading">
                        <span class="nut-vert-loading"></span>
                        <span class="nut-vert-loading-txt">加载中...</span>
                    </div>
                </template>
                <template v-else-if="isUnMore">
                    <div class="nut-vert-unloadmore-txt">{{unloadMoreTxt}}</div>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nut-vert-scroll',
    props: {
        stretch: {
            type: Number,
            default: 100
        },
        isUnMore: {
            type: Boolean,
            default: false
        },
        isLoading: {
            type: Boolean,
            default: false
        },
        pulldownTxt: {
            type: String,
            default: '下拉刷新'
        },
        loadMoreTxt: {
            type: String,
            default: '上拉加载'
        },
        unloadMoreTxt: {
            type: String,
            default: '没有更多了'
        },
        threshold: {
            type: Number,
            default: 100
        },
        propsTime: {
            type:Number,
            default: 0
        }
    },
    watch: {
        'isLoading': function(status) {
            if (!status && this.realMove === 0) {
                clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    this.setTransform(this.realMove, 'end', null);
                }, this.propsTime);
            }
        },
        'isUnMore': function() {
            this.isShow();
        }
    },
    data() {
        return {
            touchParams: {
                startY: 0, 
                endY: 0, 
                startTime: 0, 
                endTime: 0
            },
            translateY: 0,
            scrollDistance: 0,
            timer: null,
            timerEmit: null,
            realMove: 0,
            isShowLoadMore: false,
            listMinHeightStyle: 'auto',
            isFirstPull: true
        }
    },

    methods: {
        isShow() {
            let wrapH = this.$refs.wrapper.offsetHeight;
            let listH = this.$refs.list.offsetHeight;
            if (wrapH < listH) {
                this.isShowLoadMore = true;
                this.listMinHeightStyle = 'auto'
            } else {
                this.isShowLoadMore = false;
                this.isFirstPull = true;
                this.listMinHeightStyle = `${wrapH}px`;
            }
        },

        setTransform(translateY = 0, type, time = 500) {
            if (type === 'end') {
                this.$refs.list.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`;
            } else {
                this.$refs.list.style.webkitTransition = '';
            }
            this.$refs.list.style.webkitTransform = `translate3d(0, ${translateY}px, 0)`;
            this.scrollDistance = translateY;
        },

        setMove(move, type, time) {
            let updateMove = move + this.translateY;
            let h = this.$refs.wrapper.offsetHeight;
            let maxMove = -this.$refs.list.offsetHeight + h;
            if (type === 'end') {
                if (updateMove > 0) {
                    this.realMove = 0;
                    if ((!this.isShowLoadMore || this.isFirstPull ) && !this.isLoading && updateMove > 20) {
                        updateMove = 50;
                        clearTimeout(this.timerEmit);
                        this.timerEmit = setTimeout(() => {
                            this.$emit('pulldown');
                        }, time / 2);
                    } else {
                        this.isFirstPull = true;
                        updateMove = 0;
                    }
                } else if (updateMove < 0 && updateMove < maxMove + this.threshold) {
                    if (updateMove < maxMove) {
                        updateMove = maxMove;
                    }
                    this.realMove = maxMove;
                    if (!this.isLoading && !this.isUnMore) {
                        //clearTimeout(this.timerEmit);
                        //this.timerEmit = setTimeout(() => {
                            this.$emit('loadMore');
                        // }, time / 2);
                    }
                }
                // if (updateMove == 50 && !this.isLoading) {
                //     clearTimeout(this.timer);
                //     this.timer = setTimeout(() => {
                //         this.setTransform(this.realMove, 'end', null);
                //     }, 3000);
                // }
                this.setTransform(updateMove, type, time)
            } else {
                if (updateMove > 0 && updateMove > this.stretch) {
                    updateMove = this.stretch;
                } else if (updateMove < maxMove - this.stretch) {
                    updateMove = maxMove - this.stretch;
                }
                this.setTransform(updateMove, null, null);
            }
        },
	
	    touchStart(event) {
            // event.preventDefault();

            let changedTouches = event.changedTouches[0];
            this.touchParams.startY = changedTouches.pageY;
            this.touchParams.startTime = event.timestamp || Date.now();
            this.translateY = this.scrollDistance;
        },

        touchMove(event) {
            event.preventDefault();

            let changedTouches = event.changedTouches[0];
            this.touchParams.lastY = changedTouches.pageY;
            this.touchParams.lastTime = event.timestamp || Date.now();
            let move = this.touchParams.lastY - this.touchParams.startY;
            if (move < 0 && this.isShowLoadMore && this.isFirstPull) {
                this.isFirstPull = false;
            }
            this.setMove(move);
        },

        touchEnd(event) {
            // event.preventDefault();

            let changedTouches = event.changedTouches[0];
            this.touchParams.lastY = changedTouches.pageY;
            this.touchParams.lastTime = event.timestamp || Date.now();
            let move = this.touchParams.lastY - this.touchParams.startY;

            let moveTime = this.touchParams.lastTime - this.touchParams.startTime;
            let h = this.$refs.wrapper.offsetHeight;
            let maxMove = -this.$refs.list.offsetHeight + h;

            if (moveTime <= 300) {
                move = move * 2;
                if (move < 0 && move < maxMove) {
                    move = maxMove;
                }
                moveTime = moveTime + 500;
                this.setMove(move, 'end', moveTime);
            } else {
                this.setMove(move, 'end');
            }
        }
    },

    mounted() {
        this.$nextTick(() => {
            this.isShow();
            // 监听
            this.$el.addEventListener('touchstart', this.touchStart);
            this.$el.addEventListener('touchmove', this.touchMove);
            this.$el.addEventListener('touchend', this.touchEnd);
        });
    },
    beforeDestroy() {
        // 移除监听
        this.$el.removeEventListener('touchstart', this.touchStart);
        this.$el.removeEventListener('touchmove', this.touchMove);
        this.$el.removeEventListener('touchend', this.touchEnd);
        clearTimeout(this.timer);
        clearTimeout(this.timerEmit);
    }
}
</script>

