<template>
  <transition name="popup-fade">
    <div @touchstart.prevent.stop
        @touchmove.prevent.stop
        @touchend.prevent.stop
     v-show="show" class="popup-bg nut-mask" :class="className"></div>
  </transition>
</template>
<script>
export default {
  name: "nut-popup-mask",
  props: {
    show: { type: Boolean, default: true },
    className: { type: String, default: "" },
    customStyle: { type: String, default: "" },    	
  }
};
</script>
