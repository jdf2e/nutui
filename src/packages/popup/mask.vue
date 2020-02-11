<template>
  <transition name="popup-fade">
    <div v-show="show" class="bg nut-mask" ></div>
  </transition>
</template>
<script>
export default {
  name: "nut-popup-mask",
  props: {
    show: { type: Boolean, default: true }
  },    
};
</script>
<style lang="scss" scoped>
.popup-fade-enter-active {
  animation: 0.3s nut-fade-in;
}
.popup-fade-leave-active {
  animation: 0.3s nut-fade-out;
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

@keyframes nut-fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes nut-fade-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
