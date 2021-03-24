<template>
  <div class="nut-infiniteloading" ref="scroller" @touchstart="touchStartHandle($event)" @touchmove="touchMoveHandle($event)">
    <slot></slot>
    <div class="load-more">
      <div class="bottom-tips" v-if="isShowBottomTips">
        <template v-if="isLoading">
          <template v-if="!slotLoading"> <i class="loading-hint"></i><span class="loading-txt">加载中...</span> </template>
          <slot name="loading" v-else></slot>
        </template>

        <template v-else-if="!hasMore">
          <span class="tips-txt" v-if="!slotUnloadMore">{{ unloadMoreTxt }}</span>
          <slot name="unloadMore" v-else></slot>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nut-infiniteloading',
  props: {
    hasMore: {
      type: Boolean,
      default: true
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    threshold: {
      type: Number,
      default: 200
    },
    useWindow: {
      type: Boolean,
      default: true
    },
    useCapture: {
      type: Boolean,
      default: false
    },
    isShowMod: {
      type: Boolean,
      default: false
    },
    isShowBottomTips: {
      type: Boolean,
      default: true
    },
    unloadMoreTxt: {
      type: String,
      default: '哎呀，这里是底部了啦'
    },
    scrollChange: {
      type: Function
    },
    containerId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      startX: 0,
      startY: 0,
      diffX: 0,
      diffY: 0,
      beforeScrollTop: 0,
      slotUnloadMore: false,
      slotLoading: false
    };
  },

  mounted: function() {
    const parentElement = this.getParentElement(this.$el);
    let scrollEl = window;
    if (this.useWindow === false) {
      scrollEl = parentElement;
    }
    this.scrollEl = scrollEl;
    this.scrollListener();

    this.slotUnloadMore = this.$slots.unloadMore ? true : false;
    this.slotLoading = this.$slots.loading ? true : false;
  },

  methods: {
    touchStartHandle(e) {
      try {
        this.startX = Number(e.changedTouches[0].pageX);
        this.startY = Number(e.changedTouches[0].pageY);
      } catch (e) {
        console.log(e.message);
      }
    },
    touchMoveHandle(e) {
      let endX = Number(e.changedTouches[0].pageX);
      let endY = Number(e.changedTouches[0].pageY);
      this.diffX = endX - this.startX;
      this.diffY = endY - this.startY;
    },
    getParentElement(el) {
      if (this.containerId) {
        return document.querySelector(`#${this.containerId}`);
      }
      return el && el.parentNode;
    },
    scrollListener() {
      this.scrollEl.addEventListener('scroll', this.handleScroll, this.useCapture);
      window.addEventListener('resize', this.handleScroll, this.useCapture);
    },

    requestAniFrame() {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    },

    handleScroll() {
      this.requestAniFrame()(() => {
        if (!this.isScrollAtBottom() || !this.hasMore || this.isLoading || !this.isShowMod) {
          return false;
        } else {
          this.$emit('loadmore');
        }
      });
    },

    calculateTopPosition(el) {
      if (!el) {
        return 0;
      }
      return el.offsetTop + this.calculateTopPosition(el.offsetParent);
    },

    getWindowScrollTop() {
      return window.pageYOffset !== undefined
        ? window.pageYOffset
        : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    },

    isScrollAtBottom() {
      let offsetDistance;

      let resScrollTop = 0;

      const windowScrollTop = this.getWindowScrollTop();

      if (this.useWindow) {
        offsetDistance = this.calculateTopPosition(this.$refs.scroller) + this.$refs.scroller.offsetHeight - windowScrollTop - window.innerHeight;
      } else {
        const { scrollHeight, clientHeight, scrollTop } = this.scrollEl;

        offsetDistance = scrollHeight - clientHeight - scrollTop;
        resScrollTop = scrollTop;
      }
      this.$emit('scrollChange', this.useWindow ? windowScrollTop : resScrollTop);
      // 保证是往下滑动的
      let beforeScrollTop = this.beforeScrollTop;
      this.beforeScrollTop = windowScrollTop;

      return offsetDistance <= this.threshold && windowScrollTop >= this.beforeScrollTop;
    }
  },

  activated() {
    if (this.keepAlive) {
      this.keepAlive = false;
      this.scrollListener();
    }
  },

  deactivated() {
    this.keepAlive = true;
    this.scrollEl.removeEventListener('scroll', this.handleScroll, this.useCapture);
    window.removeEventListener('resize', this.handleScroll, this.useCapture);
  },

  destroyed() {
    this.scrollEl.removeEventListener('scroll', this.handleScroll, this.useCapture);
    window.removeEventListener('resize', this.handleScroll, this.useCapture);
  }
};
</script>
