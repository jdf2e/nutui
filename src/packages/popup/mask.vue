<template>
  <transition name="popup-fade">
    <div v-show="show" class="bg nut-mask" @click="onClick"></div>
  </transition>
</template>
<script>
export default {
  name: "nut-popup-mask",
  props: {
    show: { type: Boolean, default: true }
  },
  data() {
    return {};
  },

  methods: {
    onClick() {
      this.$emit("input", false);
    }
  }
};
</script>
<style lang="scss" scoped>
.popup-fade-enter-active {
  animation: 0.3s van-fade-in;
}
.popup-fade-leave-active {
  animation: 0.3s van-fade-out;
}
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99;
}

@keyframes van-fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes van-fade-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
