<template>
    <div class="nut-infiniteloading" :class="{'down':(state==0),'up':(state==1),refresh:(state==2),touch:touching}" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)">
        <section class="inner" :style="{ transform: 'translate3d(0, ' + top + 'px, 0)' }">
            <header class="pull-refresh">
                <slot name="pull-refresh">
                    <!--<span class="down-tip">下拉更新</span>
                    <span class="up-tip">松开刷新数据</span>
                    <span class="refresh-tip">加载中……</span>-->
                </slot>
            </header>
            <slot>
            </slot>
            <footer class="load-more">
                <slot name="load-more">
                    <!--<span v-if="downFlag&&!noMore"><span>上拉加载更多</span></span>-->
                    <div class="no-more" v-if="infiniteLoading">加载中……</div>
                </slot>
            </footer>
            <div class="no-more" v-if="noMore">没有更多信息了</div>
        </section>
    </div>
</template>
<script>
export default {
    name:'nut-infiniteloading',
    props: {
        offset: {
            type: Number,
            default: 100 //默认高度
        },
        enableInfinite: {
            type: Boolean,
            default: true
        },
        enableRefresh: {
            type: Boolean,
            default: true
        },
        noMore: {
            type: Boolean,
            default: false
        },
        botLoading: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            top: 0,
            state: 0,
            startX: 0,
            startY: 0,
            touching: false,
            infiniteLoading: false,
            downFlag: true, //上拉加载更多
        }
    },
    mounted: function () {
        this.listenScroll();
    },
    methods: {
        listenScroll() {
            let self = this;
            //如果用户设置的不是到底就加载数据，那么就不走这里，就以滑动的方式来加载数据
            if(!self.botLoading) {
                return;
            }
            let flag = false;//到底了就暂时不检测高度
            window.addEventListener('scroll',()=>{
                if (flag) return;
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                if(document.body.scrollHeight - (scrollTop + window.innerHeight) < 10) {
                    flag = true;
                    setTimeout(function() {
                        flag = false;
                    },1000);
                    if(!self.noMore) {
                        self.infinite();
                    }
                }
            });
        },
        touchStart(e) {
            let self = this;
            self.startY = e.targetTouches[0].pageY;
            self.startX = e.targetTouches[0].pageX;
            self.startScroll = self.$el.scrollTop || 0;
            self.touching = true; //留着有用，不能删除
            // this.noMore = false;
            // this.$el.querySelector('.load-more').style.display = 'block';
        },
        touchMove(e) {
            let self = this;
            if(!self.enableRefresh || self.noMore || !self.touching || self.botLoading) {
                return;
            }
            let diff = e.targetTouches[0].pageY - self.startY - self.startScroll
            // if(diff > 0) e.preventDefault()
            self.top = Math.pow(diff, 0.8) + (self.state === 2 ? self.offset : 0)
            if(self.state === 2) { // in refreshing
                return;
            }
            if(self.top >= self.offset) {
                self.state = 1;
            } else {
                self.state = 0;
            }

            let more = self.$el.querySelector('.load-more');
            if(!self.top && self.state === 0) {
                more.style.display = 'block';
            } else {
                more.style.display = 'none';
            }
        },
        touchEnd(e) {
            let self = this;
            if(!self.enableRefresh || self.noMore || !self.touching || self.botLoading) {
                return;
            }
            self.touching = false;
            if(self.state === 2) { // in refreshing
                self.state = 2;
                self.top = self.offset;
                return;
            }
            if(self.top >= self.offset) { // do refresh
                this.refresh();
            } else { // cancel refresh
                self.state = 0;
                self.top = 0;
            }

            //用于判断滑动方向
            let endX = e.changedTouches[0].pageX,
                endY = e.changedTouches[0].pageY,
                dy = endY - self.startY,
                dx = endX - self.startX;

            //如果滑动不是从下往上划
            if(self.checkMoveDir(dx,dy)!='bottomTOtop') {
                return;
            }

            if(!self.enableInfinite || self.infiniteLoading) {
                return;
            }

            let outerHeight = self.$el.clientHeight,
                innerHeight = self.$el.querySelector('.inner').clientHeight,
                scrollTop = self.$el.scrollTop,
                // ptrHeight = self.onRefresh ? self.$el.querySelector('.pull-refresh').clientHeight : 0,
                ptrHeight = self.$el.querySelector('.pull-refresh').clientHeight,
                bottom = innerHeight - outerHeight - scrollTop - ptrHeight;

            if(bottom <= self.offset && self.state === 0) {
                self.downFlag = false;
                self.infinite();
            } else {
                self.$el.querySelector('.load-more').style.display = 'none';
                self.downFlag = true;
            }

        },
        refresh() {
            let self = this;
            self.state = 2;
            self.top = self.offset;
            setTimeout(() => {
                self.$emit('on-refresh',self.refreshDone);
            }, 1000);
        },
        refreshDone() {
            let self = this;
            self.state = 0;
            self.top = 0;
        },
        infinite() {
            let self = this;
            self.infiniteLoading = true;
            setTimeout(() => {
                self.$emit('on-infinite',self.infiniteDone);
            }, 2000);
        },

        infiniteDone() {
            let self = this;
            self.downFlag = true;
            self.infiniteLoading = false;
        },

        //判断滑动方向
        checkMoveDir(X,Y) {
            let dir = '';
            if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
                dir = 'leftTOright';
            }
            else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
                dir = 'rightTOleft';
            }
            else if ( Math.abs(Y) > Math.abs(X) && Y > 0) {
                dir = 'topTObottom';
            }
            else if ( Math.abs(Y) > Math.abs(X) && Y < 0 ) {
                dir = 'bottomTOtop';
            }
            else{
                dir = 'justTouch';
            }
            return dir;
        }
    }
}
</script>
<style lang="scss" scoped>
</style>