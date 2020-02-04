<template>
    <div class="nut-leftslip">
        <div class="nut-leftslip-item" ref="slipItem" :style="deleteSlider">
            <div @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)">
                <slot name="slip-main"></slot>
            </div>

            <div v-if="onlyDel" class="delbtn" ref="delBtn"
                ><div :style="delBtnStyle" class="trans"></div><span @click.prevent="onlyDelClick($event)">删除</span></div
            >
            <div v-else>
                <!-- <a @click.prevent="onlyDelClick($event)">删除</a> -->
                <slot name="slipbtns"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'nut-leftslip',
    props: {
        onlyDel: {
            type: Boolean,
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
            this.restSlide();
            e = e || event;
            //等于1时表示此时有只有一只手指在触摸屏幕
            if (e.touches.length == 1) {
                this.startX = e.touches[0].clientX;
                this.startY = e.touches[0].clientY;
            }
        },
        touchMove(e) {
            e = e || event;
            //获取当前滑动对象
            let parentElement = e.currentTarget.parentElement;
            //获取删除按钮的宽度，此宽度为滑块左滑的最大距离
            let itemWd = this.$refs.slipItem.offsetWidth;
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
                        //单一删除，左滑一键删除
                        if (this.disX < 0 || this.disX == 0) {
                            this.deleteSlider = 'transform:translateX(0px)';
                        }
                        this.deleteSlider = 'transform:translateX(-' + this.disX + 'px)';
                        this.delBtnStyle = 'width:' + this.disX + 'px';
                        parentElement.dataset.type = 1;//设置滑动展开隐藏标志位，左滑展开为1，右滑或复位为0
                    } else {
                        // 如果是向右滑动或者不滑动，不改变滑块的位置
                        if (this.disX < wd / 4 || this.disX == 0) {
                            this.deleteSlider = 'transform:translateX(0px)';
                            parentElement.dataset.type = 0;
                        } else if (this.disX > wd / 4) {
                            parentElement.dataset.type = 1;
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
            let parentElement = e.currentTarget.parentElement;
            let itemWd = this.$refs.slipItem.offsetWidth;
            let wd = this.onlyDel ? 40 : this.buttonWidth;
            if (e.changedTouches.length == 1) {
                let endY = e.changedTouches[0].clientY;
                if (Math.abs(this.startY - endY) < 40) {
                    let endX = e.changedTouches[0].clientX;
                    this.disX = this.startX - endX;
                    // console.log('touchEndthis.disX:', this.disX);
                    if (this.onlyDel) {
                        //单一按钮，左滑一键删除
                        if (this.disX < 0 || this.disX == 0) {
                            this.deleteSlider = 'transform:translateX(0px)';
                            parentElement.dataset.type = 0;
                        } else if (this.disX < itemWd - 20) {
                            parentElement.dataset.type = 1;
                            this.deleteSlider = 'transform:translateX(-50px);';
                            this.delBtnStyle = ' width:0px;';
                        } else {
                            this.deleteSlider = 'transform:translateX(-' + itemWd + 'px);';
                            this.delBtnStyle = ' width:' + itemWd + 'px;';
                            parentElement.dataset.type = 1;
                            this.onlyDelClick();
                        }
                    } else {
                        //如果距离小于删除按钮的四分之一,强行回到起点

                        if (this.disX < wd / 4) {
                            parentElement.dataset.type = 0;
                            this.deleteSlider = 'transform:translateX(0px)';
                        } else {
                            //大于一半 滑动到最大值
                            parentElement.dataset.type = 1;
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
            let listItems = document.querySelectorAll('.nut-leftslip-item');
            
            // 复位
            for (let i = 0; i < listItems.length; i++) {
                listItems[i].style = 'transform:translateX(0' + 'px)';
                listItems[i].dataset.type = 0;//是否展开标志位默认0，左滑展开为1，右滑隐藏为0
            }
            if(this.onlyDel){
                let delBtns = document.querySelectorAll('.delbtn .trans');
                for (let j = 0; j < delBtns.length; j++) {
                    delBtns[j].style = '';
                }
            }
            
        }
    }
};
</script>
