<template>
  <transition name="toastfade">
    <nut-popup
      :overlay="cover"
      :class="toastClass"
      v-model="visible"
      :closeOnClickOverlay="closeOnClickOverlay"
      :overlayStyle="{ backgroundColor: coverColor }"
      class="nut-toast"
      :style="{ bottom: center ? 'auto' : bottom + 'px' }"
      @click="clickCover"
    >
      <div
        class="nut-toast-inner"
        :style="{
          'text-align': textAlignCenter ? 'center' : 'left',
          'background-color': bgColor,
        }"
      >
        <span v-if="hasIcon" class="nut-toast-icon-wrapper">
          <i
            :class="['nut-toast-icon', type, { 'nut-toast-icon-rotate': type === 'loading' && loadingRotate }]"
            :style="{ 'background-image': cusIcon }"
          ></i>
        </span>
        <span class="nut-toast-text" v-html="msg"></span>
      </div>
    </nut-popup>
  </transition>
</template>
<script>
export default {
  name: 'nut-toast',
  props: {},
  data() {
    return {
      id: '',
      msg: '',
      visible: false,
      duration: 2000, //显示时间(毫秒)
      timer: null,
      center: true,
      type: '',
      customClass: '',
      bottom: '',
      size: 'base',
      icon: null,
      textAlignCenter: true,
      loadingRotate: true,
      bgColor: 'rgba(46, 46, 46, 0.7)',
      onClose: null,
      textTimer: null,
      cover: false,
      coverColor: 'rgba(0, 0, 0, 0)',
      timeStamp: null,
      closeOnClickOverlay: false,
    };
  },

  watch: {
    visible(val) {
      if (val) {
        this.show();
      }
    },
  },
  computed: {
    cusIcon() {
      return this.icon ? `url("${this.icon}")` : '';
    },
    toastClass() {
      return [
        'nut-toast',
        { 'nut-toast-buttom': !this.center },
        { 'nut-toast-has-icon': this.hasIcon },
        { 'nut-loading': this.type == 'loading' },
        this.customClass,
        'nut-toast-' + this.size,
      ];
    },
    hasIcon() {
      if (this.type !== 'text') {
        return true;
      } else {
        return this.cusIcon;
      }
    },
  },
  methods: {
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
      this.visible = false;
      if (force) {
        clearTimeout(this.textTimer);
      } else {
        this.textTimer = setTimeout(() => {
          clearTimeout(this.textTimer);
          this.msg = '';
        }, 300);
      }
      typeof this.onClose === 'function' && this.onClose();
    },
    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    },
    clickCover() {
      if (this.closeOnClickOverlay) {
        this.hide();
      }
    },
  },
  destroyed() {
    this.textTimer = null;
    this.timer = null;
  },
};
</script>
