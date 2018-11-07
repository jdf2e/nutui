<template>
    <div class="nut-marquee" :style="mainCss" ref="marquee" 
        @mouseover="mouseover" 
        @mouseout="mouseout" 
        @touchenter="clickStop" 
        @touchleave="clickRun">
        <div class="nut-marquee-wrapper" ref='wrap'>
            <!-- <div class="nut-marquee-item"> -->
                <slot></slot>
            <!-- </div> -->
        </div>
    </div>
</template>
<script>
export default {
    name: 'nut-marquee',
    props: {
        speed: {
            default: 30,
            type: Number
        },
        height: {
            default: 'auto',
            type: String
        },
        direction: {
            default: 'horizontal',
            type: String,
            validator: function (value) {
                // 这个值必须匹配下列字符串中的一个
                return ['horizontal', 'vertical'].indexOf(value) !== -1
            }
        },
        reverse: {
            default: false,
            type: Boolean
        },
        gap: {
            default: '0',
            type: Number
        }
    },
    data() {
        return {
            interval: null,
            mainCss: {},
            offset: {
                x: 0,
                y: 0
            },
            marquee: {
                height:0,
                width: 0
            },
            wrap: {
                height: 0,
                width: 0
            },
            realGap: 0
        }
    },
    created() {
        this.mainCss = {
            height: this.height 
        }
    },

    mounted() {
        this.$nextTick(() => {
            this.init()
        })
    },
    methods: {
        init() {
            //尺寸不需要启动轮播滚动。
            this.initStyle();
            this.initWH();
            if(!this.needRoll()) return;
            this.createShadowDom();
            this.initPosition();
            this.initOffset();
            this.start();
        },
        //获取出事高度，以便判断是否需要开启轮播功能。
        initWH() {
            this.marquee = {
                height: this.$refs.marquee.clientHeight,
                width: this.$refs.marquee.clientWidth
            }
            this.wrap = {
                height: this.$refs.wrap.clientHeight,
                width: this.$refs.wrap.clientWidth
            }
        },
        initGap() {
            //如果传入的为rem
            if(this.gap.indexOf('rem') > -1) {
                this.realGap = document.getElementsByTagName("html")[0].style.fontSize.replace('px', '')*this.gap.replace('rem', '');
            }else if(this.gap.indexOf('px') > -1) {
                this.realGap = this.gap.replace('px', '');
            }
        },
        initStyle() {
            let nodes = this.$refs.wrap.children;
            for(let i = 0; i < nodes.length; i++) {
                nodes[i].className += ' nut-marquee-item';
                if(this.direction === 'horizontal') {
                    nodes[i].style.setProperty('margin', `0 ${this.gap}`);
                    nodes[i].style.setProperty('display', `inline`);
                }else {
                    nodes[i].style.setProperty('margin', `${this.gap} 0`);
                    nodes[i].style.setProperty('display', `block`);
                }
            }
        },
        initPosition() {
            this.marquee = {
                height: this.$refs.marquee.clientHeight,
                width: this.$refs.marquee.clientWidth
            }
            if(this.direction == 'horizontal') {
                this.wrap = {
                    height: this.$refs.wrap.clientHeight / 2,
                    width: this.$refs.wrap.clientWidth / 2
                }
            }else {
                this.wrap = {
                    height: this.$refs.wrap.clientHeight / 2,
                    width: this.$refs.wrap.clientWidth / 2
                }
            }
            
            this.offset.x = this.marquee.width;
            this.offset.y = this.marquee.height;
            
        },
        initOffset() {
            if(!this.reverse) return;
            if(this.direction == 'horizontal'){
                this.offset.x = - this.wrap.width*2;
            }else{
                this.offset.y = -this.wrap.height*2;
            }
        },
        mouseover() {
            clearInterval(this.interval);
        },
        mouseout() {
            this.start();
        },
        clickStop() {
            clearInterval(this.interval);
        },
        clickRun() {
            this.start();
        },
        start() {
            if(['horizontal', 'vertical'].indexOf(this.direction) == -1) console.warn('参数direction有误，执行默认配置horizontal');
            if(this.direction === 'vertical') {
                this.startVertical();
            } else {
                this.startHorizontal();
            }
        },
        //判断是否需要滚动
        needRoll() {
            let need = true;
            if(this.direction === 'vertical') {
                if(this.marquee.height > this.wrap.height) {
                    //容器高于内容
                    need = false;
                }
            }else {
                if(this.marquee.width > this.wrap.width) {
                    need = false;
                }
            }
            return need;
        },

        ///启动水平滚动,水平滚动处理区域
        startHorizontal() {
            if(!this.reverse) {
                this.normalHorizontalRoll();
            }else {
                this.reverseHorizontalRoll();
            }
        },
        //横向普通模式运动
        normalHorizontalRoll() {
            let _self = this;
            let width = this.wrap.width;
            _self.interval = setInterval(function() {
                _self.setTransform(_self.$refs.wrap, `translate3d(${_self.offset.x}px, 0, 0)`);
                _self.offset.x = _self.offset.x - 1;
                if(-(_self.offset.x) > width) {
                    _self.offset.x = 0;
                }
            }, this.speed)
        },
        //横向反向模式运动
        reverseHorizontalRoll() {
            let _self = this;
            let width = this.wrap.width;
            _self.interval = setInterval(function() {
                _self.setTransform(_self.$refs.wrap, `translate3d(${_self.offset.x}px, 0, 0)`);
                _self.offset.x = _self.offset.x + 1 ;
                if((_self.offset.x) > 0) {
                    _self.offset.x = - width;
                }
            }, this.speed)
        },
        //启动垂直滚动
        startVertical() {
            if(!this.reverse) {
                this.normalVerticalRoll();
            }else {
                this.reverseVerticalRoll();
            }
        },
        //垂直普通模式运动
        normalVerticalRoll() {
            let _self = this;
            let height = this.wrap.height;
            _self.interval = setInterval(function() {
                _self.setTransform(_self.$refs.wrap, `translate3d(0, ${_self.offset.y}px, 0)`);
                _self.offset.y = _self.offset.y - 1 ;
                if(-(_self.offset.y) > height) {
                    _self.offset.y = 0 - (_self.realGap/2);
                }
            }, this.speed)
        },
        //垂直反向模式运动
        reverseVerticalRoll() {
            let _self = this;
            let height = this.wrap.height;
            _self.interval = setInterval(function() {
                _self.setTransform(_self.$refs.wrap, `translate3d(0, ${_self.offset.y}px, 0)`);
                _self.offset.y = _self.offset.y + 1 ;
                if(-(_self.offset.y) < 0) {
                    _self.offset.y = - height + (_self.realGap);
                }
            }, this.speed)
        },
        /*
         * 功能操作区
         */
        //设置transform
        setTransform (ele, val){
            ele.style.transform = val;
            ele.style.WebkitTransform = val;
            ele.style.MozTransform = val;
            ele.style.OTransform = val;
        },
        //无限模式中，创建dom来保证2次之间的衔接
        createShadowDom(el) {
            let con = this.$refs.wrap;
            let childNodes = this.cloneNodes(this.$refs.wrap.children);
            for(let i =0; i < childNodes.length; i++) {
                let node = childNodes[i];
                con.appendChild(node);
            }
        },
        cloneNodes(nodes) {
            let destNodes = [];
            for(let i = 0; i < nodes.length; i++) {
                nodes[i].className += ' nut-marquee-item';
                destNodes.push(nodes[i].cloneNode(true));
            }
            return destNodes;

        }

    }
}
</script>
<style lang='scss'>
    .nut-marquee {
        overflow: hidden;
        width: 100%;
        white-space: nowrap;
        height: inherit;
    }
    .nut-marquee-wrapper {
        display: inline-block;
        overflow: hidden;
        transition: transform 0ms linear;
    }
    .nut-marquee-item {
        outline: none;
        overflow: hidden;
        margin: 0 10px;
    }
</style>