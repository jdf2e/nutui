<template>
  <view class="nut-animate">
    <view :class="classes" @click="handleClick">
      <slot></slot>
    </view>
  </view>
</template>
<script lang="ts">
import { reactive, toRefs, computed, PropType } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('animate');
export default create({
  props: {
    type: {
      type: String as PropType<import('./type').AnimateType>,
      default: ''
    },
    action: {
      type: String as PropType<import('./type').AnimateAction>,
      default: 'initial'
    },
    loop: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],

  setup(props, { emit }) {
    const { type, loop, action } = toRefs(props);

    const state = reactive({
      clicked: false
    });

    let classes = computed(() => {
      const prefixCls = componentName;
      return {
        'nut-ani-container': true,
        [`${prefixCls}-${type.value}`]: action.value === 'initial' || state.clicked ? type.value : false,
        loop: loop.value
      };
    });

    const handleClick = (event: Event) => {
      state.clicked = true;

      //如果不是无限循环，清除类名
      if (!loop.value) {
        setTimeout(() => {
          state.clicked = false;
        }, 1000);
      }

      emit('click', event);
    };

    return { ...toRefs(state), classes, handleClick };
  }
});
</script>
