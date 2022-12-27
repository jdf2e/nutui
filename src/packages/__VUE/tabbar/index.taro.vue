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
import { onMounted, provide, reactive, ref, toRefs, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
import Taro from '@tarojs/taro';
const { create } = createComponent('tabbar');
export default /* @__PURE__ */ create({
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
    size: {
      type: String,
      default: '20px'
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
    const mdValue = reactive({
      val: props.modelValue,
      children: []
    });
    const height = ref();
    function changeIndex(index: number, active: number | string) {
      emit('update:modelValue', active);
      parentData.modelValue = active;
      emit('tab-switch', parentData.children[index], active);
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
      () => props.modelValue,
      (value) => {
        parentData.modelValue = value;
      }
    );
    onMounted(() => {
      if (bottom.value && placeholder.value) {
        setTimeout(() => {
          const query = Taro.createSelectorQuery();
          query.select('.nut-tabbar').boundingClientRect();
          query.exec((res) => {
            height.value = res[0].height;
          });
        }, 500);
      }
    });
    return {
      changeIndex,
      height
    };
  }
});
</script>
