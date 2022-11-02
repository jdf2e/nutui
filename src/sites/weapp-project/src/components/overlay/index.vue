<template>
  <Transition name="overlay-fade">
    <view :class="classes" @click="onClick" :style="style" v-show="visible">
      <native-slot />
    </view>
  </Transition>
</template>
<script lang="ts">
import { CSSProperties, PropType, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('overlay');
const overlayProps = {
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
    default: false
  },
  overlayStyle: {
    type: Object as PropType<CSSProperties>
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  },
  _scope: null
};

export { overlayProps };

export default create({
  props: overlayProps,
  emits: ['click', 'close'],
  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [props.overlayClass]: true
      };
    });

    const style = computed(() => {
      return {
        animationDuration: `${props.duration}s`,
        zIndex: props.zIndex,
        ...props.overlayStyle
      };
    }) as CSSProperties;

    const onClick = (e: MouseEvent) => {
      props._scope.triggerEvent('click', e);
      if (props.closeOnClickOverlay) {
        props._scope.triggerEvent('close', false);
      }
    };

    return { classes, style, onClick };
  }
});
</script>

<style lang="scss">
@import './index.scss';
</style>
