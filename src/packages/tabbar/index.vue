<template>
  <view class="nut-tabbar" :class="{ bottom: bottom }">
    <slot></slot>
  </view>
</template>

<script lang="ts">
import { provide, reactive } from 'vue';
import { createComponent } from '@/utils/create';
const { create } = createComponent('tabbar');
export default create({
  props: {
    show: {
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
      // 未选中的颜色
      type: String,
      default: '#000000'
    },
    activeColor: {
      // 选中的颜色
      type: String,
      default: '#fa2c19'
    }
  },
  components: {},
  emits: ['tab-switch', 'update:show'],
  setup(props, { emit, slots }) {
    const mdValue = reactive({
      val: props.show
    });
    function changeIndex(active: number) {
      emit('update:show', active);
      parentData.modelValue = active;
      emit('tab-switch', parentData.children[active], active);
    }
    let parentData = reactive({
      children: [],
      size: props.size,
      modelValue: mdValue.val,
      unactiveColor: props.unactiveColor,
      activeColor: props.activeColor,
      changeIndex
    });
    provide('parent', parentData);
    return {
      changeIndex
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
