<template>
  <view class="nut-menu" :style="showMask && `z-index:9999`">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { toRefs, reactive } from 'vue';
import { createComponent } from '@/utils/create';
import { useChildren } from '@/utils/useRelation/useChildren';
export const MENU_KEY = 'nutMenu';
const { componentName, create } = createComponent('menu');

export default create({
  props: {
    type: {
      //单选 simple  多选  multiple，暂留
      type: String,
      default: 'simple'
    },
    hasMask: {
      type: Boolean,
      default: true
    }
  },
  components: {},

  setup(props, { emit }) {
    const state = reactive({
      showMask: false
    });
    const handleMaskShow = status => {
      state.showMask = status;
    };
    const { linkChildren } = useChildren(MENU_KEY);
    linkChildren({
      handleMaskShow,
      hasMask: props.hasMask
    });
    return { ...toRefs(state) };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
