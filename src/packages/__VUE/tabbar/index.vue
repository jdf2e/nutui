<template>
  <div :class="{ 'nut-tabbar__placeholder': bottom && placeholder }" :style="{ height: height + 'px' }">
    <view
      ref="nutTabbar"
      class="nut-tabbar"
      :class="{ 'nut-tabbar-bottom': bottom, 'nut-tabbar-safebottom': safeAreaInsetBottom }"
    >
      <slot></slot>
    </view>
  </div>
</template>

<script lang="ts">
import { onMounted, provide, reactive, toRefs, ref, watch, nextTick } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('tabbar');
export default create({
  props: {
    modelValue: {
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
    unactiveColor: {
      type: String,
      default: ''
    },
    activeColor: {
      type: String,
      default: ''
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: Boolean,
      default: false
    }
  },
  emits: ['tab-switch', 'update:modelValue'],
  setup(props, { emit, slots }) {
    const { bottom, placeholder } = toRefs(props);
    const height = ref();
    const mdValue = reactive({
      val: props.modelValue,
      children: []
    });
    const nutTabbar = ref<HTMLElement | null>(null);
    function changeIndex(index: number, active: number | string) {
      emit('update:modelValue', active);
      parentData.modelValue = active;
      emit('tab-switch', parentData.children[index], active);
    }
    let parentData = reactive({
      children: mdValue.children,
      modelValue: mdValue.val,
      unactiveColor: props.unactiveColor,
      activeColor: props.activeColor,
      changeIndex
    });
    provide('parent', parentData);
    watch(
      () => props.modelValue,
      (value) => {
        parentData.modelValue = value;
      }
    );
    onMounted(() => {
      if (bottom.value && placeholder.value) {
        nextTick(() => {
          height.value = nutTabbar?.value?.getBoundingClientRect().height;
        });
      }
    });

    return {
      changeIndex,
      nutTabbar,
      height
    };
  }
});
</script>
