import { computed, ComputedRef, watchEffect, reactive, toRefs, ref, watch } from 'vue';

import { popupProps } from './props';

const initIndex = 2000;
let _zIndex = initIndex;

export const component = (componentName: string) => {
  return {
    components: {},
    props: {
      ...popupProps
    },
    emits: ['click-pop', 'click-close-icon', 'open', 'close', 'opend', 'closed', 'click-overlay', 'update:visible'],

    setup(props: any, { emit }: any) {
      const state = reactive({
        zIndex: props.zIndex,
        showSlot: true,
        closed: props.closeable
      });

      const classes = computed(() => {
        const prefixCls = componentName;
        return {
          [prefixCls]: true,
          ['round']: props.round,
          [`popup-${props.position}`]: true,
          [`popup-${props.position}--safebottom`]: props.position === 'bottom' && props.safeAreaInsetBottom,
          [props.popClass]: true
        };
      });

      const popStyle: ComputedRef = computed(() => {
        return {
          zIndex: state.zIndex,
          transitionDuration: `${props.duration}s`,
          ...props.style
        };
      });

      const transitionName: ComputedRef = computed(() => {
        return props.transition ? props.transition : `popup-slide-${props.position}`;
      });

      const open = () => {
        if (props.zIndex !== initIndex) {
          _zIndex = Number(props.zIndex);
        }
        emit('update:visible', true);
        state.zIndex = ++_zIndex;
        if (props.destroyOnClose) {
          state.showSlot = true;
        }
        emit('open');
      };

      const close = () => {
        // if (!props.visible) return; //避免重复调用
        emit('update:visible', false);
        emit('close');
        if (props.destroyOnClose) {
          setTimeout(() => {
            state.showSlot = false;
          }, +props.duration * 1000);
        }
      };

      const onClick = (e: Event) => {
        emit('click-pop', e);
      };

      const onClickCloseIcon = (e: Event) => {
        e.stopPropagation();
        emit('click-close-icon', e);
        emit('update:visible', false);
        // close();
      };

      const onClickOverlay = (e: Event) => {
        if (props.closeOnClickOverlay) {
          emit('click-overlay', e);
          emit('update:visible', false);
          // close();
        }
      };

      const onOpened = (e: Event) => {
        emit('opend', e);
      };

      const onClosed = (e: Event) => {
        emit('closed', e);
      };

      watch(
        () => props.visible,
        (val) => {
          props.visible ? open() : close();
        }
      );
      watchEffect(() => {
        // props.visible ? open() : close();
        state.closed = props.closeable;
      });

      return {
        ...toRefs(state),
        popStyle,
        transitionName,
        classes,
        onClick,
        onClickCloseIcon,
        onClickOverlay,
        onOpened,
        onClosed
      };
    }
  };
};
