<template>
    <div class="nut-hor-scroll" ref="wrapper">
        <div class="nut-hor-list" ref="list">
            <slot name="list"></slot>
	         <div class="nut-hor-control" v-if="$slots.more && isShowLoadMore">
                <slot name="more"></slot>
            </div>
            <slot name="arrow" v-if="$slots.arrow"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'nut-hor-scroll',
    props: {
        stretch: {
            type: Number,
            default: 40
        }
    },
    data() {
        return {
            touchParams: {
                startX: 0, 
                endX: 0, 
                startY: 0, 
                endY: 0,
                startTime: 0, 
                endTime: 0
            },
            transformX: 0,
            scrollDistance: 0,
            timer: null,
            isShowLoadMore: false,
            isFirstShow: false
        }
    },
    methods: {
        isShow() {
            let wrapH = this.$refs.wrapper.clientWidth;
            let listH = this.$refs.list.offsetWidth;
            if (wrapH <= listH) {
                this.isShowLoadMore =  true;
            } else {
                this.isShowLoadMore = false;
            }
        },
        
        setTransform(translateX = 0, type, time = 500, unit = 'px') {
            this.scrollDistance = translateX; 
            translateX = translateX + unit;
            if (type === 'end') {
                this.$refs.list.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`;
            } else {
                this.$refs.list.style.webkitTransition = '';
            }
            this.$refs.list.style.webkitTransform = `translate3d(${translateX}, 0, 0)`;
            
        },

        setMove(move, type, time) {
            let updateMove = move + this.transformX;
            let w = this.$refs.wrapper.clientWidth;
            let offsetWidth = this.$refs.list.offsetWidth;
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
                    updateMove = this.stretch;
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
            // event.preventDefault();

            let changedTouches = event.changedTouches[0];
            this.touchParams.startX = changedTouches.pageX;
            this.touchParams.startY = changedTouches.pageY;
            this.touchParams.startTime = event.timestamp || Date.now();
            this.transformX = this.scrollDistance;
        },

        touchEvent(changedTouches, callback) {
            this.touchParams.lastX = changedTouches.pageX;
            this.touchParams.lastY = changedTouches.pageY;
            let moveY = this.touchParams.lastY - this.touchParams.startY;
            let move = this.touchParams.lastX - this.touchParams.startX;

            if (!(Math.abs(move) > 20 && Math.abs(move) > Math.abs(moveY))) {
                return false;
            } else {
                let w = this.$refs.wrapper.clientWidth;
                let maxMove = -this.$refs.list.offsetWidth + w;
                callback && callback(move, maxMove, moveY);
            }
        },

        touchMove(event) {
            event.preventDefault();
            let changedTouches = event.changedTouches[0];
            this.touchParams.lastTime = event.timestamp || Date.now();
            let moveTime = this.touchParams.lastTime - this.touchParams.startTime;
            this.touchEvent(changedTouches, (move, maxMove, moveY) => {
                if (move > 0 && this.isFirstShow) {
                    this.isFirstShow = false;
                }
                this.setMove(move);
            });
        },

        touchEnd(event) {
            let changedTouches = event.changedTouches[0];
            this.touchParams.lastTime = event.timestamp || Date.now();
            let moveTime = this.touchParams.lastTime - this.touchParams.startTime;
            this.touchEvent(changedTouches, (move, maxMove) => {
                //if (moveTime <= 300) {
                if (Math.abs(move) > 100) {
                    move = move * 2;
                }

                // 释放跳转之类
                if (move < 0 && (move + this.transformX) < maxMove - 20 && this.isFirstShow) {
                    this.$emit('jump');
                }

                if (!this.isFirstShow && move < 0 && move + this.transformX < maxMove && this.$slots.more) {
                    this.isFirstShow = true;
                    //move = maxMove - this.transformX;
                }

                if (moveTime <= 300 ) {
                    moveTime = moveTime + 500;
                    this.setMove(move, 'end', moveTime);
                } else {
                    this.setMove(move, 'end');
                }
            });
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
    }
}
</script>

