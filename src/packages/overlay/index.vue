<template>
  <Transition name="overlay-fade">
    <view
      @touchmove.stop="touchmove"
      @click="onClick"
      :style="{ animationDuration: `${duration}s`, ...overlayStyle, zIndex }"
      v-show="show"
      :class="classes"
    >
      <slot></slot>
    </view>
  </Transition>
</template>
<script lang="ts">
import { CSSProperties, PropType, computed } from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('overlay');
const overlayProps = {
  show: {
    type: Boolean,
    default: false
  },
  zIndex: {
    type: [Number, String]
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
  overlay: {
    type: Boolean,
    default: true
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  }
};

export { overlayProps };

export default create({
  props: overlayProps,
  emits: ['click', 'update:show'],
  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [props.overlayClass]: true
      };
    });
    const touchmove = e => {
      if (props.lockScroll) {
        e.preventDefault();
      }
    };

    const onClick = e => {
      emit('click', e);
      if (props.closeOnClickOverlay) {
        emit('update:show', false);
      }
    };

    return { classes, touchmove, onClick };
  }
});
</script>
<style lang="scss">
@import 'index.scss';
</style>
