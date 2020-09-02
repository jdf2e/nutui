<template>
  <div class="nut-drag" @touchstart="touchStart($event)">
    <slot></slot>
  </div>
</template>
<script>
import requestAniFrame from '../../utils/raf.js';
/**
 * @module drag
 * @description 拖拽组件，用于页面中需要拖拽的元素
 * @vue-prop {Boolean} [attract=false] - 拖拽元素是否需要自动吸边
 * @vue-prop {String} [direction='all'] - 拖拽元素的拖拽方向
 * @vue-prop {Number | String} [zIndex=11] - 拖拽元素的堆叠顺序
 * @vue-prop {Object} [boundary={top: 0,left: 0,right: 0,bottom: 0}] - 拖拽元素的拖拽边界
 * @vue-data {Number} elWidth 拖拽元素的宽度
 * @vue-data {Number} elHeight 拖拽元素的高度
 * @vue-data {Number} screenWidth 屏幕的宽度
 * @vue-data {Number} screenHeight 屏幕的高度
 * @vue-data {Number} startTop 拖拽元素距离顶部的距离
 * @vue-data {Number} startLeft 拖拽元素距离左侧的距离
 * @vue-data {Object} position 鼠标点击的位置，包含距离x轴和y轴的距离
 */
export default {
  name: 'nut-drag',
  props: {
    attract: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'all'
    },
    zIndex: {
      type: [Number, String],
      default: 11
    },
    boundary: {
      type: Object,
      default: function() {
        return {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        };
      }
    }
  },
  data() {
    return {
      elWidth: 0,
      elHeight: 0,
      screenWidth: 0,
      screenHeight: 0,
      startTop: 0,
      startLeft: 0,
      position: { x: 0, y: 0 }
    };
  },
  methods: {
    /**
     * 获取拖拽元素的属性和屏幕的宽高，初始化拖拽元素的位置
     */
    getElementInfo() {
      const el = this.$el;
      const domElem = document.documentElement;
      this.elWidth = el.offsetWidth;
      this.elHeight = el.offsetHeight;
      this.screenWidth = domElem.clientWidth;
      this.screenHeight = domElem.clientHeight;
      el.style.zIndex = this.zIndex;
      if (this.boundary.left && !el.style.left) {
        el.style.left = this.boundary.left + 'px';
      } else if (this.boundary.right && !el.style.right) {
        el.style.right = this.boundary.right + 'px';
      }
      if (this.boundary.top && !el.style.top) {
        el.style.top = this.boundary.top + 'px';
      } else if (this.boundary.bottom && !el.style.bottom) {
        el.style.bottom = this.boundary.bottom + 'px';
      }
    },
    touchStart(e) {
      const target = e.currentTarget;
      this.startTop = target.offsetTop; // 元素距离顶部的距离
      this.startLeft = target.offsetLeft; // 元素距离左侧的距离
      this.position.x = e.touches[0].clientX; // 鼠标点击的x轴的距离
      this.position.y = e.touches[0].clientY; // 鼠标点击的y轴的距离
      this.$el.addEventListener('touchmove', this.touchMove, false);
      this.$el.addEventListener('touchend', this.touchEnd, false);
    },
    touchMove(e) {
      e.preventDefault();
      const target = e.currentTarget;
      if (e.targetTouches.length == 1) {
        const touch = e.targetTouches[0];
        this.nx = touch.clientX - this.position.x;
        this.ny = touch.clientY - this.position.y;
        this.xPum = this.startLeft + this.nx;
        this.yPum = this.startTop + this.ny;
        const rightLocation = this.screenWidth - this.elWidth - this.boundary.right;
        // 限制左右拖拽边界
        if (Math.abs(this.xPum) > rightLocation) {
          this.xPum = rightLocation;
        } else if (this.xPum <= this.boundary.left) {
          this.xPum = this.boundary.left;
        }
        // 限制上下拖拽边界
        if (this.yPum < this.boundary.top) {
          this.yPum = this.boundary.top;
        } else if (this.yPum > this.screenHeight - this.elHeight - this.boundary.bottom) {
          this.yPum = this.screenHeight - this.elHeight - this.boundary.bottom;
        }
        if (this.direction != 'y') {
          target.style.left = this.xPum + 'px';
        }
        if (this.direction != 'x') {
          target.style.top = this.yPum + 'px';
        }
      }
    },
    touchEnd(e) {
      const target = e.currentTarget;
      const touch = e.changedTouches[0];
      let currX = touch.clientX;
      const rightLocation = this.screenWidth - this.elWidth - this.boundary.right;
      if (currX > rightLocation) {
        currX = rightLocation;
        // console.log('往右划出边界');
      } else if (currX < this.boundary.left) {
        currX = this.boundary.left;
        // console.log('往左划出边界');
      } else {
        currX = currX < this.screenWidth / 2 ? this.boundary.left : rightLocation;
        // console.log('在边界内滑动');
      }
      if (this.direction != 'y' && this.attract) {
        if (currX < this.screenWidth / 2) {
          this.goLeft(target);
        } else {
          this.goRight(target, rightLocation);
        }
      }
      if (this.direction != 'x') {
        target.style.top = this.yPum + 'px';
      }
    },
    goLeft(target) {
      if (this.boundary.left) {
        if (target.style.left.split('px')[0] > this.boundary.left) {
          target.style.left = target.style.left.split('px')[0] - 10 + 'px';
          requestAniFrame(() => {
            this.goLeft(target);
          });
        } else {
          target.style.left = `${this.boundary.left}px`;
        }
      } else {
        if (target.style.left.split('px')[0] > 10) {
          target.style.left = target.style.left.split('px')[0] - 10 + 'px';
          requestAniFrame(() => {
            this.goLeft(target);
          });
        } else {
          target.style.left = '0px';
        }
      }
    },
    goRight(target, rightLocation) {
      if (rightLocation - parseInt(target.style.left.split('px')[0]) > 10) {
        target.style.left = parseInt(target.style.left.split('px')[0]) + 10 + 'px';
        requestAniFrame(() => {
          this.goRight(target, rightLocation);
        });
      } else {
        target.style.left = rightLocation + 'px';
      }
    }
  },
  mounted() {
    this.getElementInfo();
  },
  activated() {
    if (this.keepAlive) {
      this.keepAlive = false;
    }
  },
  deactivated() {
    this.keepAlive = true;
    this.$el.removeEventListener('touchmove', this.handleScroll, false);
    this.$el.removeEventListener('touchend', this.handleScroll, false);
  },
  destroyed() {
    this.$el.removeEventListener('touchmove', this.handleScroll, false);
    this.$el.removeEventListener('touchend', this.handleScroll, false);
  }
};
</script>
