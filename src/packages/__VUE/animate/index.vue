<template>
  <view class="nut-animate">
    <view
      :class="classes"
      @click="handleClick"
      :style="{
        animationDuration: duration ? `${duration}ms` : undefined
      }"
    >
      <slot></slot>
    </view>
  </view>
</template>
<script lang="ts">
import { ref, computed, PropType, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { AnimateType, AnimateAction } from './type';
const { create } = createComponent('animate');
export default create({
  props: {
    type: {
      type: String as PropType<AnimateType>,
      default: ''
    },
    show: {
      type: Boolean,
      defualt: false
    },
    action: {
      type: String as PropType<AnimateAction>,
      default: ''
    },
    loop: {
      type: Boolean,
      default: false
    },
    duration: {
      type: [String, Number],
      defualt: 500
    }
  },
  emits: ['click', 'action'],
  setup(props, { emit }) {
    const animated = ref(props.action === 'initial' || props.show === true);
    const classes = computed(() => {
      const prefixCls = 'nut-animate';
      return {
        'nut-animate__container': true,
        [`${prefixCls}-${props.type}`]: animated.value,
        loop: props.loop
      };
    });

    const animate = () => {
      animated.value = false;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          animated.value = true;
        });
      });
    };

    const handleClick = (event: Event) => {
      if (props.action === 'click') {
        console.log('onClick');
        animate();
        emit('click', event);
      }
    };

    watch(
      () => props.show,
      (val) => {
        if (val) {
          animate();
          emit('action');
        }
      }
    );

    return { classes, handleClick };
  }
});
</script>
