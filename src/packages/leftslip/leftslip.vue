<template>
    <div class="nut-leftslip">
        <div class="nut-leftslip-item" ref="slipItem" :style="deleteSlider">
            <div
                class="nut-leftslip-item-main"
                @touchstart="touchStart($event)"
                @touchmove="touchMove($event)"
                @touchend="touchEnd($event)"
            >
                <slot name="slip-main"></slot>
            </div>

            <!-- <div v-if="onlyDelBtn" class="delbtn" ref="delBtn">
                <div :style="delBtnStyle" class="trans"></div>
                <span @click.prevent="onlyDelClick($event)">删除</span></div
            > -->
            <div class="nut-leftslip-item-btn">
                <slot name="slipbtns">
                    <a class="nut-delet-btn" @click.prevent="onlyDelClick($event)" v-if="onlyDelBtn">删除</a>
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
        customBtnWidth: {
            type: Number,
            default: 40
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
            offset: 0, //移动距离
            deleteSlider: '', //滑动时的效果
            delBtnStyle: '', //单个删除键拖拽删除效果
            openState: false
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

        // window.addEventListener('scroll', this.handleScroll, true);
    },
    beforeDestroy() {
        // 移除监听
        // window.removeEventListener('scroll', this.handleScroll, true);
    },
    methods: {
        handleScroll() {
            if (this.offset) {
                this.restSlide();
            }
        },
        handleClick() {
            this.restSlide();
        },
        onlyDelClick() {
            //一键删除模式点击删除
            this.$emit('oneDelete', this.$refs.slipItem);
            this.restSlide();
        },
        touchStart(e) {
            // if(this.openState){
            //     return
            // }
            this.restSlide();
            e = e || event;
            // e.preventDefault();
            //等于1时表示此时有只有一只手指在触摸屏幕
            if (e.touches.length == 1) {
                this.startX = e.touches[0].clientX;
                this.startY = e.touches[0].clientY;
            }
        },
        touchMove(e) {
            e = e || event;
            // e.preventDefault();
            //获取当前滑动对象
            let parentElement = e.currentTarget.parentElement;

            let itemWd = this.$refs.slipItem.offsetWidth;
            let wd = this.onlyDelBtn ? this.customBtnWidth : this.buttonWidth;

            if (e.touches.length == 1) {
                this.moveY = e.touches[0].clientY;
                this.moveX = e.touches[0].clientX;

                if (Math.abs(this.moveY - this.startY) < 40) {
                    this.offset = this.startX - this.moveX;

                    if (this.onlyDelBtn) {
                        //单一删除，左滑一键删除
                        if (this.offset < 0 || this.offset == 0) {
                            this.deleteSlider = 'transform:translateX(0px)';
                            this.openState = false;
                        }
                        this.deleteSlider = 'transform:translateX(-' + this.offset + 'px)';
                        this.delBtnStyle = 'width:' + this.offset + 'px';
                        parentElement.dataset.type = 1; //设置滑动展开隐藏标志位，左滑展开为1，右滑或复位为0
                        this.openState = true;
                    } else {
                        if (this.offset < wd / 4 || this.offset == 0) {
                            this.deleteSlider = 'transform:translateX(0px)';
                            parentElement.dataset.type = 0;
                            this.openState = false;
                        } else if (this.offset > wd / 4) {
                            parentElement.dataset.type = 1;
                            this.deleteSlider = 'transform:translateX(-' + this.offset + 'px)';
                            // 最大也只能等于删除按钮宽度
                            if (this.offset >= wd) {
                                if (wd >= itemWd) {
                                    this.deleteSlider = 'transform:translateX(-' + (itemWd - this.customBtnWidth) + 'px)';
                                } else {
                                    this.deleteSlider = 'transform:translateX(-' + wd + 'px)';
                                }
                            }
                            this.openState = true;
                        }
                    }
                }
            }
        },
        touchEnd(e) {
            e = e || event;
            let parentElement = e.currentTarget.parentElement;
            let itemWd = this.$refs.slipItem.offsetWidth;
            let wd = this.onlyDelBtn ? this.customBtnWidth : this.buttonWidth;

            if (e.changedTouches.length == 1) {
                let endY = e.changedTouches[0].clientY;
                if (Math.abs(this.startY - endY) < 40) {
                    let endX = e.changedTouches[0].clientX;
                    this.offset = this.startX - endX;

                    if (this.onlyDelBtn) {
                        //单一按钮，左滑一键删除
                        if (this.offset < 0 || this.offset == 0) {
                            this.deleteSlider = 'transform:translateX(0px)';
                            parentElement.dataset.type = 0;
                            this.openState = false;
                        } else if (this.offset < itemWd - 20) {
                            parentElement.dataset.type = 1;
                            this.deleteSlider = 'transform:translateX(-50px);';
                            this.delBtnStyle = ' width:0px;';
                            this.openState = true;
                        } else {
                            this.deleteSlider = 'transform:translateX(-' + itemWd + 'px);';
                            this.delBtnStyle = ' width:' + itemWd + 'px;';
                            parentElement.dataset.type = 1;
                            this.openState = true;
                            this.onlyDelClick();
                        }
                    } else {
                        if (this.offset < wd / 4) {
                            parentElement.dataset.type = 0;
                            this.deleteSlider = 'transform:translateX(0px)';
                            this.openState = false;
                        } else {
                            //大于一半 滑动到最大值
                            parentElement.dataset.type = 1;
                            if (wd >= itemWd) {
                                //按钮数不可超出整行宽度
                                this.deleteSlider = 'transform:translateX(-' + (itemWd - this.customBtnWidth) + 'px)';
                            } else {
                                this.deleteSlider = 'transform:translateX(-' + wd + 'px)';
                            }
                            this.openState = true;
                        }
                    }
                }
            }
        },
        restSlide() {
            let listItems = document.querySelectorAll('.nut-leftslip-item');

            // 复位
            for (let i = 0; i < listItems.length; i++) {
                listItems[i].style = 'transform:translateX(0' + 'px)';
                listItems[i].dataset.type = 0; //是否展开标志位默认0，左滑展开为1，右滑隐藏为0
            }
            if (this.onlyDelBtn) {
                let delBtns = document.querySelectorAll('.delbtn .trans');
                for (let j = 0; j < delBtns.length; j++) {
                    delBtns[j].style = '';
                }
            }
        }
    }
};
</script>
