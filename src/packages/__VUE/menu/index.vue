<template>
  <view :class="classes" :style="showMask && `z-index:9999`">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { toRefs, reactive, provide, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('menu');
import menuitem from '@/packages/__VUE/menuitem/index.vue';
export default create({
  children: [menuitem],
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
  setup(props, { emit }) {
    const state = reactive({
      showMask: false
    });
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });
    const handleMaskShow = (status: boolean) => {
      state.showMask = status;
    };
    provide('menuRelation', {
      handleMaskShow,
      hasMask: props.hasMask
    });
    return { ...toRefs(state), classes };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
