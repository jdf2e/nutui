<template>
  <div class="nut-leftslip">
    <div class="nut-leftslip-item" ref="slipItem" :class="{ 'leftslip-open': isOpen }">
      <div class="nut-leftslip-item-main" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)">
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
    isClickBack: {
      type: Boolean,
      default: true
    },
    rightWidth: {
      type: [Number, String],
      default: '0.8'
    },
    disabled: {
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
      buttonWidth: 0,

      pageWidth: null,
      startPos: 0,
      startLeft: 0,
      startRightW: 0,
      isOpen: false,
      scrollTop: 0,
      oldScrollTop: 0,
      lock: false
    };
  },
  watch: {
    // scrollTop(newValue, oldValue) {
    //     setTimeout(() => {
    //         if (newValue == window.scrollY) { //延时执行后当newValue等于window.scrollY，代表滚动结束
    //             console.log('滚动结束');
    //             this.oldScrollTop = newValue; //每次滚动结束后都要给oldScrollTop赋值
    //             this.lock = false
    //         };
    //     }, 20); //必须使用延时器，否则每次newValue和window.scrollY都相等，无法判断，20ms刚好大于watch的侦听周期，故延时20ms
    //     if (this.oldScrollTop == oldValue) { //每次滚动开始时oldScrollTop与oldValue相等
    //         console.log('滚动开始');
    //         this.lock = true;
    //     }
    // }
  },
  mounted() {
    this.$nextTick(() => {
      for (var slot of this.$slots.slipbtns) {
        this.buttonWidth = this.buttonWidth + slot.elm.offsetWidth;
      }
    });
    this.pageWidth = document.documentElement.clientWidth;
    this.sliderEle = this.$refs.slipItem;
    // this.handleScroll();
    // document.addEventListener('touchstart', this.touchStart, false);
  },
  beforeDestroy() {
    // 移除监听
    window.removeEventListener('scroll', this.handleScroll());
  },
  methods: {
    handleRestet() {
      var slip = document.getElementsByClassName('leftslip-open');
      if (slip) {
        this.restSlide();
      }
    },
    handleScroll() {
      window.addEventListener('scroll', () => {
        this.scrollTop = window.scrollY;
      });
    },
    touchStart(e) {
      if (this.disabled) return false;
      let parentElement = e.currentTarget.parentElement;
      let slip = [];
      slip = document.getElementsByClassName('leftslip-open');
      if (slip) {
        if (parentElement.dataset.type == 1) return;
        this.restSlide();
      }
      if (e.touches.length == 1) {
        this.startX = e.touches[0].pageX;
        this.startY = e.touches[0].pageY;
      }
      const transform = this.sliderEle.style.transform;
      this.startLeft = Number(transform ? transform.split('(')[1].split('px')[0] : 0);
      this.startRightW = this.startLeft < 0 ? Number(this.$refs.right.style.width.split('px')[0]) : 0;
    },

    touchMove(e) {
      if (this.disabled) return false;
      let parentElement = e.currentTarget.parentElement;

      let disX = e.touches[0].pageX - this.startX; // >0 右滑，<0 左滑
      let disY = e.touches[0].pageY - this.startY;
      if (e.touches.length == 1) {
        if (Math.abs(disY) < 5) {
          // console.log(disX, disY)
          if (disX > 0 || (disX > 0 && this.startLeft >= 0)) {
            //禁止右滑
            return false;
          } else {
            this.doSlide(-this.buttonWidth, true); // 最大滑动距离为右侧宽度
          }
        }
      }
    },
    touchEnd(e) {
      if (this.disabled) return false;
      let parentElement = e.currentTarget.parentElement;
      const disX = e.changedTouches[0].pageX - this.startX; // >0 右滑，<0 左滑
      let distance;
      // console.log(1, disX, this.isClickBack)
      if (!this.isClickBack && disX === 0) {
        // 点击时不收起右侧
        // console.log(2, disX, this.isClickBack)
        return false;
      } else {
        if (-disX > 50) {
          // 向左滑动超过阙值时,右侧滑出固定距离
          distance = this.buttonWidth > this.pageWidth ? this.pageWidth * Number(this.rightWidth) : this.buttonWidth;
          parentElement.className = 'nut-leftslip-item leftslip-open';
          parentElement.dataset.type = 1;
        } else {
          // 向左滑动未超过阙值，或向右滑动时，回原位
          distance = 0;
          parentElement.className = 'nut-leftslip-item';
          parentElement.dataset.type = 0;
        }
        // console.log(3, disX, this.isClickBack)
        this.doSlide(-distance, true);
      }
    },
    openSlide() {
      this.isOpen = true;
      const distance = this.buttonWidth > this.pageWidth ? this.pageWidth * Number(this.rightWidth) : this.buttonWidth;
      this.doSlide(-distance, true);
    },
    doSlide(distance, animate = false) {
      this.sliderEle.style.transform = `translateX(${distance}px)`;
      this.$refs.right.style.width = -distance + 'px';
      this.sliderEle.style.transition = animate ? 'transform .5s' : 'initial';
      this.$refs.right.style.transition = animate ? 'width .5s' : 'initial';
    },

    restSlide() {
      let listItems = document.querySelectorAll('.nut-leftslip-item.leftslip-open');

      // 复位
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].style = 'transform:translateX(0px)';
        listItems[i].dataset.type = 0; //是否展开标志位默认0，左滑展开为1，右滑隐藏为0
        listItems[i].className = 'nut-leftslip-item';
        this.isOpen = false;
      }
    }
  }
};
</script>
