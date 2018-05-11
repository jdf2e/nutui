<template>
    <transition name="toastfade">
        <div class="nut-toast" v-show="visible" :class="{'center':center}" :style="{'bottom':center?'auto':bottom+'rem'}">
          <span v-html="msg" :style="{'text-align':textAlignCenter?'center':'left','font-size':fontSize+'rem','background-color':bgColor}"></span>
        </div>
    </transition>
</template>
<script>
export default {
  name: "nut-toast",
  props: {},
  data() {
    return {
      msg: "",
      visible: false,
      during: 2000, //显示时间(毫秒)
      timer: null,
      center:true,
      bottom:1.5,
      fontSize:0.28,
      textAlignCenter:true,
      bgColor:'rgba(0, 0, 0, 0.7)',
      textTimer: null
    };
  },
  watch: {
    visible(val) {
      if (val) {
        this.showMsg();
      }
    }
  },
  methods: {
    showMsg(force) {
      this.clearTimer();
      clearTimeout(this.textTimer);
      this.timer = setTimeout(() => {
        this.hideMsg(force);
      }, this.during);
    },
    hideMsg(force) {
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
<style lang="scss">
.nut-toast {
  position: fixed;
  left: 0;
  bottom:1.5rem;
  width: 100%;
  text-align: center;
  pointer-events: none;
  z-index: 9999;
  span {
    display: inline-block;
    max-width: 65%;
    text-align: center;
    line-height: 1.5;
    padding: 0.2rem 0.4rem;
    word-break: break-all;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 0.1rem;
    color: #fff;
    font-size: 0.28rem;
  }
  &.center{
    top:50%;
    transform: translateY(-50%);
  }
}



.toastfade-enter-active {
  transition: opacity 0.1s;
}
.toastfade-leave-active {
  transition: opacity 0.3s;
}

.toastfade-enter,
.toastfade-leave-active {
  opacity: 0;
}
</style>