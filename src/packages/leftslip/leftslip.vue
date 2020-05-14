<template>
    <div class="nut-leftslip">
        <div class="nut-leftslip-item" ref="slipItem" :class="{'leftslip-open':isOpen}">
            <div class="nut-leftslip-item-main" @touchstart="touchStart($event)" @touchmove="touchMove($event)"
                @touchend="touchEnd($event)">
                <slot name="slip-main"></slot>
            </div>

            <div class="nut-leftslip-item-btn" ref="right">
                <slot name="slipbtns">
                    <!-- <a class="nut-delet-btn" @click.prevent="onlyDelClick($event)" v-if="onlyDelBtn">删除</a> -->
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'nut-leftslip',
        props: {

            isMainSlide: {
                type: Boolean,
                default: true
            },
            isClickBack: {
                type: Boolean,
                default: true
            },
            // rightWidth: {
            //     type: [Number, String],
            //     default: 30
            // }
        },
        data() {
            return {
                startX: 0,
                startY: 0,
                moveX: 0,
                moveY: 0,
                buttonWidth: 0,

                pageWidth: null,
                startPos: 0,
                startLeft: 0,
                startRightW: 0,
                isOpen: false,
            };
        },
        mounted() {
            this.$nextTick(() => {
                if (this.onlyDelBtn) {
                    return;
                }
                for (var slot of this.$slots.slipbtns) {
                    this.buttonWidth = this.buttonWidth + slot.elm.offsetWidth;
                }
            });
            this.pageWidth = document.documentElement.clientWidth
            this.sliderEle = this.isMainSlide ? this.$refs.slipItem : this.$refs.right

            document.addEventListener('touchstart', this.handleRestet, false);
            // window.addEventListener('scroll', this.handleRestet, true);
        },
        beforeDestroy() {
            // 移除监听
            window.removeEventListener('touchstart', this.handleRestet, true);
        },
        methods: {
            handleRestet() {
                var slip = document.getElementsByClassName('leftslip-open');
                if (slip) {
                    this.restSlide();
                }
            },
            onlyDelClick() {
                //一键删除模式点击删除
                this.$emit('oneDelete', this.$refs.slipItem);
                this.restSlide();
            },
            touchStart(e) {
                let parentElement = e.currentTarget.parentElement;
                if (e.touches.length == 1) {
                    this.startX = e.touches[0].pageX;
                    this.startY = e.touches[0].pageY;
                }
                const transform = this.sliderEle.style.transform
                this.startLeft = Number(transform ? transform.split('(')[1].split('px')[0] : 0)
                this.startRightW = this.startLeft < 0 ? Number(this.$refs.right.style.width.split('px')[0]) : 0;
                // console.log('startoleft2', this.sliderEle.style.transform, this.startLeft, this.startRightW)
            },

            touchMove(e) {

                let parentElement = e.currentTarget.parentElement;

                let disX = e.touches[0].pageX - this.startX // >0 右滑，<0 左滑
                if (e.touches.length == 1) {
                    if (disX > 0 || (disX > 0 && this.startLeft >= 0) || (disX < 0 && disX > this.buttonWidth / 2)) {  //禁止右滑
                        return false
                    } else {
                        this.doSlide((-this.buttonWidth), true) // 最大滑动距离为右侧宽度
                    }
                }
            },
            touchEnd(e) {
                // console.log('end')
                let parentElement = e.currentTarget.parentElement;
                const disX = e.changedTouches[0].pageX - this.startX // >0 右滑，<0 左滑
                let distance
                if (!this.isClickBack && disX === 0) { // 点击时不收起右侧
                    return false
                }
                if ((-disX) > 50) { // 向左滑动超过阙值时,右侧滑出固定距离
                    distance = this.buttonWidth > this.pageWidth ? this.pageWidth * 0.8 : this.buttonWidth;
                    parentElement.className = 'nut-leftslip-item leftslip-open'
                    parentElement.dataset.type = 1;
                } else { // 向左滑动未超过阙值，或向右滑动时，回原位
                    distance = 0
                    parentElement.className = 'nut-leftslip-item'
                    parentElement.dataset.type = 0;
                }
                this.doSlide(-distance, true)

                // console.log('touchEnd', distance);
            },

            doSlide(distance, animate = false) {
                this.sliderEle.style.transform = `translateX(${distance}px)`
                this.$refs.right.style.width = -distance + 'px'
                if (this.isMainSlide) {
                    this.sliderEle.style.transition = animate ? 'transform .5s' : 'initial'
                    this.$refs.right.style.transition = animate ? 'width .5s' : 'initial'
                } else {
                    this.sliderEle.style.transition = animate ? 'transform .5s, width .5s' : 'initial'
                }
            },

            restSlide() {
                let listItems = document.querySelectorAll('.nut-leftslip-item.leftslip-open');

                // 复位
                for (let i = 0; i < listItems.length; i++) {
                    listItems[i].style = 'transform:translateX(0' + 'px)';
                    listItems[i].dataset.type = 0; //是否展开标志位默认0，左滑展开为1，右滑隐藏为0
                    this.isOpen = false;
                }

            }
        }
    };
</script>