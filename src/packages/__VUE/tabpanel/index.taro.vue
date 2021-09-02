<template>
  <nut-swiper-item>
    <slot></slot>
  </nut-swiper-item>
</template>
<script lang="ts">
import { createComponent } from '../../utils/create';
const { create } = createComponent('tab-panel');

export default create({
  props: {
    tabTitle: {
      type: String,
      default: ''
    }
  },

  setup(props, ctx) {
    //
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
