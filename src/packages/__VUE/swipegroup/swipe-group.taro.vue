<template>
  <view ref="swipeGroupRef" class="nut-swipe-group">
    <slot></slot>
  </view>
</template>
<script setup lang="ts">
import { provide, ref } from 'vue';
import { SWIPE_KEY } from '../swipe/types';

defineOptions({
  name: 'NutSwipeGroup'
});

export type SwipeGroupProps = Partial<{
  lock: boolean;
}>;

const props = withDefaults(defineProps<SwipeGroupProps>(), {
  lock: false
});

const swipeGroupRef = ref(null);
const name = ref('');
const update = (n: string) => {
  name.value = n;
};
provide(SWIPE_KEY, {
  update,
  lock: props.lock,
  name
});
</script>
