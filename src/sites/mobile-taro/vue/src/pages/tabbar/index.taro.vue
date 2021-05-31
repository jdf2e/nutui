<template>
  <view class="nut-tabbar" :class="{ 'nut-tabbar-bottom': bottom }">
    <slot></slot>
  </view>
</template>

<script lang="ts">
import { provide, reactive, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('tabbar');
import tabbaritem from '@/packages/__VUE/tabbaritem/index.vue';
export default create({
  children: [tabbaritem],
  props: {
    visible: {
      type: [Number, String],
      default: 0
    },
    bottom: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'base'
    },
    size: {
      type: String,
      default: '20px'
    },
    unactiveColor: {
      type: String,
      default: '#000000'
    },
    activeColor: {
      type: String,
      default: ''
    }
  },
  emits: ['tab-switch', 'update:visible'],
  setup(props, { emit, slots }) {
    const mdValue = reactive({
      val: props.visible,
      children: []
    });
    function changeIndex(active: number) {
      emit('update:visible', active);
      parentData.modelValue = active;
      emit('tab-switch', parentData.children[active], active);
    }
    let parentData = reactive({
      children: mdValue.children,
      size: props.size,
      modelValue: mdValue.val,
      unactiveColor: props.unactiveColor,
      activeColor: props.activeColor,
      changeIndex
    });
    provide('parent', parentData);
    watch(
      () => props.visible,
      value => {
        parentData.modelValue = value;
      }
    );
    return {
      changeIndex
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
