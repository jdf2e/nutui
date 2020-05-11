<template>
    <div class="nut-leftslip">
        <div class="nut-leftslip-item" ref="slipItem" :style="deleteSlider" :class="{'leftslip-open':isOpen}">
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
            onlyDelBtn: {
                type: Boolean,
                default: false
            },
            btnSlipDel: {
                type: Boolean,
                default: false
            },
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
                buttonWidth: 0,
                deleteSlider: '', //滑动时的效果,使用v-bind:style="deleteSlider"
                delBtnStyle: '', //单个删除键拖拽删除效果

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

                this.startPos = e.touches[0].pageX
                const transform = this.sliderEle.style.transform
                this.startLeft = Number(transform ? transform.split('(')[1].split('px')[0] : 0)
                this.startRightW = this.startLeft < 0 ? Number(this.$refs.right.style.width.split('px')[0]) : 0;
                // console.log('startoleft2', this.sliderEle.style.transform, this.startLeft, this.startRightW)
            },

            touchMove(e) {
                let disX = e.touches[0].pageX - this.startPos // >0 右滑，<0 左滑
                if (disX > 0 && this.startLeft >= 0) { // 未向左边滑动时，不能右滑
                    return false
                }
                this.doSlide(disX / 2 + this.startLeft) // 除以2来控制滑动速度

            },
            touchEnd(e) {
                // console.log('end')
                const disX = e.changedTouches[0].pageX - this.startPos // >0 右滑，<0 左滑
                let distance
                if (!this.isClickBack && disX === 0) { // 点击时不收起右侧
                    return false
                }
                if ((-disX) > 50) { // 向左滑动超过阙值时,右侧滑出固定距离
                    distance = this.buttonWidth > this.pageWidth ? this.pageWidth * 0.8 : this.buttonWidth;
                } else { // 向左滑动未超过阙值，或向右滑动时，回原位
                    distance = 0
                }
                this.doSlide(-distance, true)
                this.isOpen = true;
                if ((-disX) > 0) {

                }
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