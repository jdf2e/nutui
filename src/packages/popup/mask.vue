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
 