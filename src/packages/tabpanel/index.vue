<template>
  <div class="swiper-slide">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { createComponent } from '@/utils/create';
const { create } = createComponent('tab-panel');

export default create({
  props: {
    tabTitle: {
      type: String,
      default: ''
    }
  },
  components: {},
  setup(props, ctx) {
    //
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
