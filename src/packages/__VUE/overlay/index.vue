<template>
  <Transition name="overlay-fade">
    <view :class="classes" @touchmove.stop="touchmove" @click="onClick" :style="style" v-show="visible">
      <slot></slot>
    </view>
  </Transition>
</template>
<script lang="ts">
import {
  CSSProperties,
  PropType,
  computed,
  watch,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  onActivated,
  watchEffect
} from 'vue';
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
  }
};

export { overlayProps };

export default create({
  props: overlayProps,
  emits: ['click', 'update:visible'],
  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [props.overlayClass]: true
      };
    });

    watch(
      () => props.visible,
      (value) => {
        value ? lock() : unlock();
      }
    );

    const lock = () => {
      if (props.lockScroll && props.visible) {
        document.body.classList.add('nut-overflow-hidden');
      }
    };
    const unlock = () => {
      document.body.classList.remove('nut-overflow-hidden');
    };

    onDeactivated(unlock);
    onBeforeUnmount(unlock);
    onMounted(lock);
    onActivated(lock);

    const style = computed(() => {
      return {
        animationDuration: `${props.duration}s`,
        zIndex: props.zIndex,
        ...props.overlayStyle
      };
    });

    const touchmove = (e: TouchEvent) => {
      if (props.lockScroll) e.preventDefault();
    };

    const onClick = (e: MouseEvent) => {
      emit('click', e);
      if (props.closeOnClickOverlay) {
        emit('update:visible', false);
      }
    };

    return { classes, style, touchmove, onClick };
  }
});
</script>
