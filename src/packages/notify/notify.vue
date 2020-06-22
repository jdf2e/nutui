<template>
  <nut-popup
    v-model="showPopup"
    position="top"
    :style="{'color':color,
    'background': background}"
    :overlay="false"
    :lockScroll="false"
    :class="['nut-notify',`nut-notify--${type}`,{className}]"
    @click="handleClick"
    @opened="handleOpened"
    @closed="handleClosed"
  >{{msg}}</nut-popup>
</template>
<script>
import { overlayProps, getProps } from '../popup/index';
import Popup from './../popup/popup.vue';
console.log(overlayProps, 'overlayProps');

export default {
  name: 'nut-notify',
  props: {
    ...overlayProps,
    color: { type: String, default: '' },
    msg: { type: [Number, String], default: '' },
    // duration: { type: [Number, String], default: 3000 },
    className: {
      type: String,
      default: ''
    },
    background: { type: String, default: '' },
    type: {
      type: String,
      default: 'danger'
    },
    showPopup: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    showPopup(val) {
      if (val) {
        this.show();
      }
    }
  },
  data() {
    return { timer: null };
  },
  components: {
    'nut-popup': Popup
  },
  methods: {
    handleClick() {
      typeof this.onClick === 'function' && this.onClick();
    },
    handleOpened() {
      typeof this.onOpened === 'function' && this.onOpened();
    },
    handleClosed() {
      typeof this.onClosed === 'function' && this.onClosed();
    },
    show(force) {
      this.clearTimer();
      clearTimeout(this.textTimer);

      if (this.duration) {
        this.timer = setTimeout(() => {
          this.hide(force);
        }, this.duration);
      }
    },
    hide(force) {
      this.clearTimer();
      this.showPopup = false;
      if (force) {
        clearTimeout(this.textTimer);
      } else {
        this.textTimer = setTimeout(() => {
          clearTimeout(this.textTimer);
          this.msg = '';
        }, 300);
      }
    },
    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    }
  },
  mounted() {
    console.log(this, this.onClick, this.onOpened, this.onClosed, 'mounted');
  },
  destroyed() {
    this.textTimer = null;
    this.timer = null;
  }
};
</script>