<template>
    <div class="nut-hor-scroll" rel="wrapper">
        <div class="nut-hor-list" ref="list">
            <slot name="list"></slot>
            <div class="nut-hor-control" v-if="isUnMore && $slots.more && isShowLoadMore()">
                <slot name="more"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nut-hor-scroll',
    props: {
        listData: {
            type: Array,
            required: true,
            default: () => []
        },
        lineSpacing: {
            type: Number,
            default: 210
        },
        stretch: {
            type: Number,
            default: 200
        },
        isUnMore: {
            type: Boolean,
            default: false
        },
        isLoading: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            touchParams: {
                startX: 0, 
                endX: 0, 
                startTime: 0, 
                endTime: 0
            },
            transformX: 0,
            scrollDistance: 0,
            timer: null
        }
    },
    methods: {
        isShowLoadMore() {
            this.$nextTick(() => {
                let wrapH = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                let listH = this.listData.length * this.lineSpacing;
                if (wrapH <= listH) {
                    return true;
                } else {
                    return false;
                }
            });
        },
        setTransform(translateX = 0, type, time = 500) {
            if (type === 'end') {
                this.$refs.list.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`;
            } else {
                this.$refs.list.style.webkitTransition = '';
            }
            this.$refs.list.style.webkitTransform = `translate3d(${translateX}px, 0, 0)`;
            this.scrollDistance = translateX;
        },

        setMove(move, type, time) {
            let updateMove = move + this.transformX;
            let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            let offsetWidth = this.lineSpacing * this.listData.length;
            if (type === 'end') {
                if (updateMove > 0) {
                    updateMove = 0;
                } else if (updateMove < -offsetWidth + w) {
                    if (-offsetWidth + w <= 0) {
                        updateMove = -offsetWidth + w;
                    } else {
                        updateMove = 0;
                    }
                }
                this.setTransform(updateMove, type, time)
            } else {
                let maxMove =  -offsetWidth + w;
                if (updateMove > 0 && updateMove > this.stretch) {
                    updateMove = this.stretc;
                } else if (updateMove < maxMove - this.stretch) {
                    if (maxMove <= 0) {
                        updateMove  = maxMove - this.stretch;
                    } else {
                        updateMove =  updateMove < -this.stretch ? -this.stretch : updateMove;
                    }
                }
                this.setTransform(updateMove, null, null);
            }
        },
	
	    touchStart(event) {
            event.preventDefault();

            let changedTouches = event.changedTouches[0];
            this.touchParams.startX = changedTouches.pageX;
            this.touchParams.startTime = event.timestamp || Date.now();
            this.transformX = this.scrollDistance;
        },

        touchMove(event) {

            let changedTouches = event.changedTouches[0];
            this.touchParams.lastX = changedTouches.pageX;
            this.touchParams.lastTime = event.timestamp || Date.now();
            let move = this.touchParams.lastX - this.touchParams.startX;

            this.setMove(move);
        },

        touchEnd(event) {
            event.preventDefault();

            let changedTouches = event.changedTouches[0];
            this.touchParams.lastX = changedTouches.pageX;
            this.touchParams.lastTime = event.timestamp || Date.now();
            let move = this.touchParams.lastX - this.touchParams.startX;

            let moveTime = this.touchParams.lastTime - this.touchParams.startTime;
            let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            let maxMove = -this.lineSpacing * this.listData.length + w;

            // 释放跳转之类
            if (this.isUnMore && move < 0 && (move + this.transformX) < maxMove - 50) {
                //this.$emit('jump');
            }
            
            // 加载更多
            if (!this.isLoading && !this.isUnMore && move < 0 && (move + this.transformX) < maxMove + 2 * w) {
                this.$emit('loadMore');
            }

            if (moveTime <= 300) {
                move = move * 2;
                if (move < 0 && move + this.transformX < maxMove) {
                    move = maxMove - this.transformX;
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
    }
}
</script>

