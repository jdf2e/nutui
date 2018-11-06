<template>
    <div class="nut-marquee" :style="mainCss" ref="marquee">
        <div class="nut-marquee-wrapper" ref='wrap'>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'nut-marquee',
    props: {
        speed: {
            default: 10,
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
            }

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
            this.initPosition();
            //尺寸不需要启动轮播滚动。
            if(!this.needRoll()) return;
            this.start();
        },
        initPosition() {
            this.marquee = {
                height: this.$refs.marquee.clientHeight,
                width: this.$refs.marquee.clientWidth
            }          
            this.wrap = {
                height: this.$refs.wrap.clientHeight,
                width: this.$refs.wrap.clientWidth
            }
            this.offset.x = this.marquee.width;
            this.offset.y = this.marquee.height;
            
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
            this.createShadowDom();
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
            setInterval(function() {
                _self.setTransform(_self.$refs.wrap, `translate3d(${_self.offset.x}px, 0, 0)`);
                _self.offset.x = _self.offset.x - 1 ;
                if(-(_self.offset.x) > width) {
                    _self.offset.x = 0;
                }
            }, this.speed)
        },
        //横向反向模式运动
        reverseHorizontalRoll() {

        },
        //启动垂直滚动
        startVertical() {
            this.createShadowDom();
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
            setInterval(function() {
                _self.setTransform(_self.$refs.wrap, `translate3d(0, ${_self.offset.y}px, 0)`);
                _self.offset.y = _self.offset.y - 1 ;
                if(-(_self.offset.y) > height) {
                    _self.offset.y = _self.marquee.height;
                }
            }, this.speed)
        },
        //垂直反向模式运动
        reverseVerticalRoll() {

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
            let childNodes = this.$refs.wrap.children;
                console.log(this.$refs.wrap.children);
                for(let i =0; i < childNodes.length; i++) {
                    let node = childNodes[i];
                    con.appendChild(node.cloneNode(true));
                }
                return;
            if(!this.reverse == 'horizontal') {
                let firstItem = this.$refs.wrap.firstElementChild;
                console.log(this.$refs.wrap);
                let cloneNode = firstItem.cloneNode(true);
                cloneNode.style.setProperty('margin-left', this.gap);
                con.appendChild(cloneNode);
            }else {
                let lastItem = this.$refs.wrap.lastElementChild;
                let firstItem = this.$refs.wrap.firstElementChild;
                let cloneNode = lastItem.cloneNode(true);
                cloneNode.style.setProperty('margin-right', this.gap);
                con.insertBefore(cloneNode, firstItem);
            }

        }

    }
}
</script>
<style lang='scss'>
    .nut-marquee {
        overflow: hidden;
    }
    .nut-marquee-wrapper {
        white-space: nowrap;
        transition: transform 0ms linear;
    }
</style>