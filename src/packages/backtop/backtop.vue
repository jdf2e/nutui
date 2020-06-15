<template>
  <div :class="['nut-backtop', { show: backTop }]" :style="styles" @click.stop="click">
    <slot>
      <div class="nut-backtop-main"></div>
    </slot>
  </div>
</template>
<script>
export default {
  name: 'nut-backtop',
  props: {
    distance: {
      type: Number,
      default: 200,
    },
    bottom: {
      type: Number,
      default: 20,
    },
    right: {
      type: Number,
      default: 10,
    },
    duration: {
      type: Number,
      default: 1000,
    },
    isAnimation: {
      type: Boolean,
      default: true,
    },
    elId: {
      type: String,
      default: '',
    },
    zIndex: {
      type: Number,
      default: 1111,
    },
  },
  data() {
    return {
      backTop: false,
      scrollEl: window,
    };
  },
  mounted() {
    this.init();
  },

  activated() {
    if (this.keepAlive) {
      this.keepAlive = false;
      this.init();
    }
  },

  deactivated() {
    this.keepAlive = true;
    this.removeEventListener();
  },

  destroyed() {
    this.removeEventListener();
  },

  computed: {
    styles() {
      return {
        bottom: `${this.bottom}px`,
        right: `${this.right}px`,
        'z-index': this.zIndex,
      };
    },
  },
  methods: {
    addEventListener() {
      this.scrollEl.addEventListener('scroll', this.scrollListener, false);
      this.scrollEl.addEventListener('resize', this.scrollListener, false);
    },
    removeEventListener() {
      this.scrollEl.removeEventListener('scroll', this.scrollListener, false);
      this.scrollEl.removeEventListener('resize', this.scrollListener, false);
    },
    requestAniFrame() {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    },
    initCancelAniFrame() {
      let vendors = ['webkit', 'moz'];
      for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
      }
    },
    init() {
      if (this.elId && document.getElementById(this.elId)) {
        this.scrollEl = document.getElementById(this.elId);
      }
      this.addEventListener();
      this.initCancelAniFrame();
    },
    scrollListener() {
      this.scrollTop = this.scrollEl.pageYOffset !== undefined ? this.scrollEl.pageYOffset : this.scrollEl.scrollTop;
      this.backTop = this.scrollTop >= this.distance;
    },
    click() {
      this.startTime = +new Date();
      this.isAnimation && this.duration > 0 ? this.scrollAnimation() : this.scroll();
      this.$emit('click');
    },
    scrollAnimation() {
      const self = this;
      var cid = self.requestAniFrame()(function fn() {
        var t = self.duration - Math.max(0, self.startTime - +new Date() + self.duration);
        var y = (t * -self.scrollTop) / self.duration + self.scrollTop;
        self.scroll(y);
        cid = self.requestAniFrame()(fn);
        if (t == self.duration || y == 0) {
          window.cancelAnimationFrame(cid);
        }
      });
    },
    scroll(y = 0) {
      if (this.scrollEl === window) {
        window.scrollTo(0, y);
      } else {
        this.scrollEl.scrollTop = y;
      }
    },
  },
};
</script>
