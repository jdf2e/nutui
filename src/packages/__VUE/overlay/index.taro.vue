<template>
  <Transition name="overlay-fade">
    <view :class="classes" @click="onClick" :style="style" v-show="visible" :catch-move="lockScroll">
      <slot></slot>
    </view>
  </Transition>
</template>
<script lang="ts">
import { CSSProperties, PropType, computed, ComputedRef } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('overlay');

export default create({
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: [Number, String],
      default: 2000
    },
    duration: {
      type: [Number, String],
      default: 0.3
    },
    overlayClass: {
      type: String,
      default: ''
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    overlayStyle: {
      type: Object as PropType<CSSProperties>
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  emits: ['click', 'update:visible'],
  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [props.overlayClass]: true
      };
    });

    const style: ComputedRef = computed(() => {
      return {
        transitionDuration: `${props.duration}s`,
        zIndex: props.zIndex,
        ...props.overlayStyle
      };
    });

    const onClick = (e: MouseEvent) => {
      if (props.closeOnClickOverlay) {
        emit('update:visible', false);
        emit('click', e);
      }
    };

    return { classes, style, onClick };
  }
});
</script>
