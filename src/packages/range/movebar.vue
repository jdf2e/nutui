<template>
    <div 
        :class="['nut-range-Handle',{'nut-range-ani': ani}]" 
        @touchstart="onTouchStart" 
        @touchmove="onTouchMove"
        @touchend="onTouchEnd" 
        @click="onTouchEnd" 
        :style="{left: posi + 'px', borderColor: mainColor, boxShadow: ani? '0 0 0 4px '+ subColor: ''}">
        <span 
            :class="['nut-range-label', {'nut-range-label-always': showLabelAlways}]" 
            v-if="showLabel" :style="{background: mainColor}">
            <span class="nut-range-after" :style="{color: mainColor}">▼</span>
            {{current}}
        </span>
    </div>
</template>
<script>
import requestAniFrame from '../../utils/raf.js';
export default {
  name: "nut-range-bar",
  props: {
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
    ani: Boolean,
    mainColor: String,
    subColor: String
  },
  data() {
    return {
      box: null,
      posi: 0,
      scheduledAnimationFrame:false
    };
  },
  watch: {
    initLeft() {
      this.posi = this.initLeft;
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
          const pageScrollLeft =
            document.documentElement.scrollLeft || document.body.scrollLeft;
          this.boxLeft = this.box.getBoundingClientRect().left;
          const posi = evt.pageX - this.boxLeft - pageScrollLeft;
          this.setPosi(posi);
      });
    },
    setPosi(posi) {
      if (posi < 0 || posi > this.box.clientWidth) return;
      this.posi = posi;
      this.$emit('getPos', posi);
    },
    onTouchEnd(event) {
      event.preventDefault();
      this.$emit('update:ani', false);
    },
    onClick(event) {
      event.preventDefault();
      const pageScrollLeft =
        document.documentElement.scrollLeft || document.body.scrollLeft;
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
