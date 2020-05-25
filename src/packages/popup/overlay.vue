<template>
  <transition name="popup-fade">
    <div
      @touchmove.stop="touchmove"
      :style="{ animationDuration: `${duration}s`, customStyle }"
      v-show="show"
      class="popup-bg nut-mask"
      :class="className"
    ></div>
  </transition>
</template>
<script>
export default {
  name: 'nut-popup-mask',

  props: {
    lockScroll: { type: Boolean, default: true },
    show: { type: Boolean, default: false },
    duration: Number,
    className: { type: String, default: '' },
    customStyle: { type: String, default: '' }
  },
  methods: {
    touchmove(e) {
      if (this.lockScroll) {
        e.preventDefault();
      }
    }
  }
};
</script>
