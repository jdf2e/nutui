<template>
  <Transition name="popup-fade">
    <view
      @touchmove.stop="touchmove"
      :style="{ animationDuration: `${duration}s`, ...overlayStyle, zIndex }"
      v-show="show"
      :class="classes"
    ></view>
  </Transition>
</template>
<script lang="ts">
import { CSSProperties, PropType, computed } from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('popup-overlay');
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
  emits: [],
  setup(props) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        ['nut-mask']: true,
        [props.overlayClass]: true
      };
    });
    const touchmove = e => {
      if (props.lockScroll) {
        e.preventDefault();
      }
    };
    return { classes, touchmove };
  }
});
</script>
