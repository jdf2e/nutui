<template>
    <div class="nut-leftslip">
        <div class="leftslip-item" ref="slipItem" :style="deleteSlider">
            <div @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)">
                <slot name="slip-main"></slot>
            </div>
            <div>
                <!-- <div>删除</div> -->
                <div v-if="onlyDel" :style="delBtnStyle" @click="handleClick" class="delbtn" ref="delBtn"><span>删除</span></div>
                <slot name="slipbtns" v-else @click="handleClick"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'nut-leftslip',
    props: {
        during: {
            type: [Number, String],
            default: 1
        },
        isClickRestore: {
            type: [Boolean],
            default: true
        },
        customClass: {
            type: String,
            default: ''
        },
        onlyDel: {
            type: [Boolean],
            default: false
        }
    },
    data() {
        return {
            startX: 0,
            startY: 0,
            moveX: 0,
            moveY: 0,
            left: 0,
            buttonWidth: 0,
            disX: 0, //移动距离
            deleteSlider: '', //滑动时的效果,使用v-bind:style="deleteSlider"
            delBtnStyle: '' //单个删除键拖拽删除效果
        };
    },
    mounted() {
        this.$nextTick(() => {
            if (this.onlyDel) {
                return;
            }
            for (var slot of this.$slots.slipbtns) {
                this.buttonWidth = this.buttonWidth + slot.elm.offsetWidth;
            }
        });
        window.addEventListener('scroll', this.handleScroll, true);
    },
    beforeDestroy() {
        // 移除监听
        window.removeEventListener('scroll', this.handleScroll, true);
    },
    methods: {
        handleScroll() {
            if (this.disX) {
                this.restSlide();
            }
            // this.restSlide();
        },
        handleClick(v) {
            this.restSlide();
        },
        touchStart(e) {
            this.restSlide();
            // console.log('rest', e.touches.length);
            e = e || event;

            //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
            if (e.touches.length == 1) {
                // 记录开始位置
                this.startX = e.touches[0].clientX;
                this.startY = e.touches[0].clientY;
            }
        },
        touchMove(e) {
            e = e || event;
            // let parentElement = e.currentTarget.parentElement;
            //获取删除按钮的宽度，此宽度为滑块左滑的最大距离
            let itemWd = this.$refs.slipItem.offsetWidth;
            // console.log(this.$refs.delBtn.offsetWidth);
            let wd = this.onlyDel ? 40 : this.buttonWidth;
            if (e.touches.length == 1) {
                // 滑动时距离浏览器左侧实时距离
                this.moveY = e.touches[0].clientY;
                this.moveX = e.touches[0].clientX;
                if (Math.abs(this.moveY - this.startY) < 40) {
                    //起始位置减去 实时的滑动的距离，得到手指实时偏移距离
                    this.disX = this.startX - this.moveX;
                    // console.log(this.disX);
                    if (this.onlyDel) {
                        //一键删除
                        this.deleteSlider = 'transform:translateX(-' + this.disX + 'px)';
                        this.delBtnStyle = 'width:' + this.disX + 'px;right:-' + this.disX + 'px';
                        if (this.disX < wd || this.disX == 0) {
                            this.deleteSlider = 'transform:translateX(0px)';
                            this.delBtnStyle = 'width:40px;right:-0px';
                        } else {
                            this.deleteSlider = 'transform:translateX(-' + this.disX + 'px)';
                            this.delBtnStyle = 'width:' + this.disX + 'px;right:-' + this.disX + 'px';
                            if (this.disX > itemWd - 20) {
                                this.deleteSlider = 'transform:translateX(-' + itemWd + 'px)';
                                this.delBtnStyle = 'width:' + itemWd + 'px;right:-' + itemWd + 'px';
                                // alert(111);
                            }
                        }
                    } else {
                        // 如果是向右滑动或者不滑动，不改变滑块的位置
                        if (this.disX < wd / 3 || this.disX == 0) {
                            this.deleteSlider = 'transform:translateX(0px)';
                            // parentElement.dataset.type = 0;
                            // 大于0，表示左滑了，此时滑块开始滑动
                        } else if (this.disX > wd / 3) {
                            //具体滑动距离我取的是 手指偏移距离*5。
                            // parentElement.dataset.type = 1;
                            this.deleteSlider = 'transform:translateX(-' + this.disX + 'px)';

                            // 最大也只能等于删除按钮宽度
                            if (this.disX * 1.5 >= wd) {
                                // parentElement.dataset.type = 1;
                                if (wd >= itemWd) {
                                    this.deleteSlider = 'transform:translateX(-' + (itemWd - 40) + 'px)';
                                } else {
                                    this.deleteSlider = 'transform:translateX(-' + wd + 'px)';
                                }
                            }
                        }
                    }
                }
            }
        },
        touchEnd(e) {
            e = e || event;
            // let parentElement = e.currentTarget.parentElement;
            let itemWd = this.$refs.slipItem.offsetWidth;
            let wd = this.onlyDel ? 40 : this.buttonWidth;
            if (e.changedTouches.length == 1) {
                let endY = e.changedTouches[0].clientY;
                if (Math.abs(this.startY - endY) < 40) {
                    let endX = e.changedTouches[0].clientX;
                    this.disX = this.startX - endX;
                    console.log('touchEndthis.disX:', this.disX);
                    if (this.onlyDel) {
                        // this.deleteSlider = 'transform:translateX(-' + this.disX + 'px)';
                        // this.delBtnStyle = 'width:' + this.disX + 'px;right:-' + this.disX + 'px';
                        if (this.disX < wd) {
                            // parentElement.dataset.type = 0;
                            this.deleteSlider = 'transform:translateX(0px)';
                            this.delBtnStyle = 'width:40px;right:-0px';
                        } else {
                            this.deleteSlider = 'transform:translateX(-' + this.disX + 'px)';
                            this.delBtnStyle = 'width:' + this.disX + 'px;right:-' + this.disX + 'px';
                            if (this.disX > itemWd - 20) {
                                this.deleteSlider = 'transform:translateX(-' + itemWd + 'px)';
                                this.delBtnStyle = 'width:' + itemWd + 'px;right:-' + itemWd + 'px';
                                this.$emit('oneDelete', e);
                            }
                        }
                    } else {
                        //如果距离小于删除按钮一半,强行回到起点

                        if (this.disX < wd / 3) {
                            // parentElement.dataset.type = 0;
                            this.deleteSlider = 'transform:translateX(0px)';
                        } else {
                            //大于一半 滑动到最大值
                            // parentElement.dataset.type = 1;
                            if (wd >= itemWd) {
                                //按钮数不可超出整行宽度
                                this.deleteSlider = 'transform:translateX(-' + (itemWd - 40) + 'px)';
                            } else {
                                this.deleteSlider = 'transform:translateX(-' + wd + 'px)';
                            }
                        }
                    }

                    // console.log('touchEnd:dataset', parentElement.dataset.type);
                }
            }
        },
        restSlide() {
            let listItems = document.querySelectorAll('.leftslip-item');
            let delBtns = document.querySelectorAll('.delbtn');
            console.log(delBtns);
            // 复位
            for (let i = 0; i < listItems.length; i++) {
                listItems[i].style = 'transform:translateX(0' + 'px)';
            }
            for (let j = 0; j < delBtns.length; j++) {
                delBtns[j].style = '';
            }
            // this.delBtnStyle = '';
        }
    }
};
</script>
