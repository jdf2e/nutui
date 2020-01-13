<template>
  <transition name="toastfade">
    <div :id="id"
      :class="['nut-toast',{'nut-toast-center':center},{'nut-toast-has-icon':type},{'nut-toast-cover':cover},{'nut-loading':type=='loading'},customClass,'nut-toast-'+size]"
      v-if="visible"
      :style="{'bottom':center?'auto':bottom+'px'}"
    >
      <div
        class="nut-toast-inner"
        :style="{'text-align':textAlignCenter?'center':'left','background-color':bgColor}"
      >
        <span class="nut-toast-icon-wrapper">
          <i
            :class="['nut-toast-icon',type,{'nut-toast-icon-rotate':type==='loading'&&loadingRotate}]"
            :style="{'background-image':cusIcon}"
          ></i>
        </span>
        <span class="nut-toast-text" v-html="msg"></span>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "nut-toast",
  props: {},
  data() {
    return {
        id:"",
        msg: "",
        visible: false,
        duration: 2000, //显示时间(毫秒)
        timer: null,
        center: true,
        type: "",
        customClass: "",
        bottom: 30,
        size:"base",
        icon:null,
        textAlignCenter: true,
        loadingRotate:true,
        bgColor: "rgba(46, 46, 46, 0.7)",
        onClose:null,
        textTimer: null,
        cover:false,
        timeStamp:null
    };
  },
  watch: {
    visible(val) {
      if (val) {
        this.show();
      }
    }
  },
  computed: {
    cusIcon() {
      return this.icon ? `url("${this.icon}")` : "";
    }
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
          this.msg = "";
        }, 300);
      }
      typeof(this.onClose) === "function" && this.onClose();
    },
    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    }
  }
};
</script>