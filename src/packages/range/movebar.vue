<template>
  <div
    :class="['nut-range-Handle', { 'nut-range-ani': ani }]"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @click="onTouchEnd"
    :style="{ left: posi + 'px', borderColor: mainColor, boxShadow: ani ? '0 0 0 4px ' + subColor : '' }"
  >
    <span :class="['nut-range-label', { 'nut-range-label-always': showLabelAlways }]" v-if="showLabel" :style="{ background: mainColor }">
      <span class="nut-range-after" :style="{ color: mainColor }">▼</span>
      {{ current }}
    </span>
  </div>
</template>
<script>
import requestAniFrame from '../../utils/raf.js';
export default {
  name: 'nut-range-bar',
  props: {
    direction: {
      type: String,
      default: 'left'
    },
    range: {
      type: Array,
      validator: function(value) {
        return value.length === 2 && value[1] > value[0];
      },
      default() {
        return [0, 10];
      }
    },
    values: {
      type: Array,
      validator: function(value) {
        return value.length === 2 && value[1] >= value[0];
      },
      default() {
        return [0, 0];
      }
    },
    initLeft: {
      type: Number,
      default: 0
    },
    showLabelAlways: {
      type: Boolean,
      default: false
    },
    showLabel: {
      type: Boolean,
      default: false
    },
    current: {
      type: Number,
      default: 0
    },
    stage: {
      type: Number,
      default: 0
    },
    ani: Boolean,
    mainColor: String,
    subColor: String
  },
  data() {
    return {
      box: null,
      posi: 0,
      scheduledAnimationFrame: false
    };
  },
  watch: {
    initLeft(val) {
      this.posi = this.initLeft;
    }
  },
  computed: {
    total() {
      return this.range[1] - this.range[0];
    }
  },
  methods: {
    onTouchStart(event) {
      if (event.cancelable) {
        event.preventDefault();
      }
      this.$emit('update:ani', true);
    },
    onTouchMove(event) {
      if (event.cancelable) {
        event.preventDefault();
      }
      if (this.scheduledAnimationFrame) return;
      this.scheduledAnimationFrame = true;
      requestAniFrame(() => {
        this.scheduledAnimationFrame = false;
        const evt = event.touches[0];
        const pageScrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
        this.boxLeft = this.box.getBoundingClientRect().left;
        const posi = evt.pageX - this.boxLeft - pageScrollLeft;
        this.setPosi(posi, false);
      });
    },
    setPosi(posi, isEnd) {
      if (posi < 0) {
        posi = 0;
      }
      if (posi > this.box.clientWidth) {
        posi = this.box.clientWidth;
      }
      const [prevLeft, prevRight] = this.values;
      const [rangeLeft, rangeRight] = this.range;
      if (this.direction === 'left') {
        let maxRight = prevRight - rangeLeft - 1;
        if (posi / this.box.clientWidth >= maxRight / this.total) {
          this.posi = maxRight * (this.box.clientWidth / this.total);
        } else {
          this.posi = posi;
        }
      }
      if (this.direction === 'right') {
        let minLeft = prevLeft - rangeLeft + 1;
        if (posi / this.box.clientWidth <= minLeft / this.total) {
          this.posi = minLeft * (this.box.clientWidth / this.total);
        } else {
          this.posi = posi;
        }
      }
      this.$emit('getPos', this.posi, isEnd);
    },
    onTouchEnd(event) {
      event.preventDefault();
      const evt = event.changedTouches[0];
      const pageScrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
      this.boxLeft = this.box.getBoundingClientRect().left;
      const posi = evt.pageX - this.boxLeft - pageScrollLeft;
      setTimeout(() => {
        this.setPosi(posi, true);
        this.$emit('update:ani', false);
      }, 50);
    },
    onClick(event) {
      event.preventDefault();
      const pageScrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
      this.boxLeft = this.box.getBoundingClientRect().left;
      const posi = event.pageX - this.boxLeft - pageScrollLeft;
      this.posi = posi;
      this.$emit('getPos', posi);
    }
  },
  mounted() {
    this.box = this.$el.parentNode;
  }
};
</script>
