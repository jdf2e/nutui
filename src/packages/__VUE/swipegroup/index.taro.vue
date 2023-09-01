<template>
  <view ref="swipeGroupRef" class="nut-swipe-group">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { provide, ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('swipe-group');
export default create({
  props: {
    lock: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const swipeGroupRef = ref(null);
    const name = ref('');
    const update = (n: string) => {
      name.value = n;
    };
    provide('swipeGroup', {
      update,
      lock: props.lock,
      name
    });
    return { swipeGroupRef };
  }
});
</script>
