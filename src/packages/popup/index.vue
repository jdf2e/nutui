<template>
  <Teleport :to="teleport">
    <nut-overlay
      :show="show && overlay"
      :class="overlayClass"
      :style="overlayStyle"
      :z-index="zIndex"
      :duration="duration"
      @click="onClickOverlay"
    />
    <Transition
      :name="transitionName"
      @after-enter="onOpened"
      @after-leave="onClosed"
    >
      <view v-show="show" :class="classes" :style="popStyle" @click="onClick">
        <slot v-if="showSlot"></slot>
        <nut-icon
          v-if="closeable"
          @click="onClickCloseIcon"
          :name="closeIcon"
          size="12px"
          class="nutui-popup__close-icon"
          :class="'nutui-popup__close-icon--' + closeIconPosition"
        >
        </nut-icon>
      </view>
    </Transition>
  </Teleport>
</template>
<script lang="ts">
import {
  onMounted,
  onBeforeMount,
  onBeforeUnmount,
  onActivated,
  onDeactivated,
  watch,
  computed,
  reactive,
  PropType,
  CSSProperties,
  toRefs
} from 'vue';
import { useLockScroll } from './use-lock-scroll';
import { overlayProps } from './../overlay/index.vue';
import overlay from '@/packages/overlay/index.vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('popup');

let _zIndex = 2000;

const popupProps = {
  position: {
    type: String,
    default: 'center'
  },

  transition: String,

  style: {
    type: Object as PropType<CSSProperties>
  },

  popClass: {
    type: String,
    default: ''
  },

  closeable: {
    type: Boolean,
    default: false
  },

  closeIconPosition: {
    type: String,
    default: 'top-right'
  },

  closeIcon: {
    type: String,
    default: 'close'
  },

  destroyOnClose: {
    type: Boolean,
    default: true
  },

  teleport: {
    type: [String, Element],
    default: 'body'
  },

  overlay: {
    type: Boolean,
    default: true
  },

  round: {
    type: Boolean,
    default: false
  }
};
export default create({
  children: [overlay],
  props: {
    ...overlayProps,
    ...popupProps
  },
  emits: [
    'click',
    'click-close-icon',
    'open',
    'close',
    'opend',
    'closed',
    'update:show',
    'click-overlay'
  ],

  setup(props, { emit }) {
    const state = reactive({
      zIndex: 0,
      showSlot: true,
      transitionName: `popup-fade-${props.position}`,
      overLayCount: 1,
      keepAlive: false,
      opened: false
    });

    const [lockScroll, unlockScroll] = useLockScroll(() => props.lockScroll);

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        ['round']: props.round,
        [`popup-${props.position}`]: true,
        [props.popClass]: true
      };
    });

    const popStyle = computed(() => {
      return {
        zIndex: state.zIndex,
        animationDuration: props.duration ? `${props.duration}s` : 'initial',
        ...props.style
      };
    });

    const open = () => {
      if (!state.opened) {
        if (props.zIndex !== undefined) {
          _zIndex = Number(props.zIndex);
        }
        state.opened = true;
        lockScroll();
        state.zIndex = ++_zIndex;

        if (props.destroyOnClose) {
          state.showSlot = true;
        }
      }
      emit('open');
    };

    const close = () => {
      if (state.opened) {
        state.opened = false;
        unlockScroll();
        emit('update:show', false);
        if (props.destroyOnClose) {
          setTimeout(() => {
            state.showSlot = false;
            emit('close');
          }, +props.duration * 1000);
        }
      }
    };

    const onClick = (e: Event) => {
      emit('click', e);
    };

    const onClickCloseIcon = (e: Event) => {
      emit('click-close-icon', e);
      close();
    };

    const onClickOverlay = (e: Event) => {
      if (props.closeOnClickOverlay) {
        emit('click-overlay', e);
        close();
      }
    };

    const onOpened = (e: Event) => {
      emit('opend', e);
    };

    const onClosed = (e: Event) => {
      emit('closed', e);
    };

    onMounted(() => {
      props.transition
        ? (state.transitionName = props.transition)
        : (state.transitionName = `popup-slide-${props.position}`);

      props.show && open();
    });

    onBeforeUnmount(() => {
      props.show && close();
    });

    onBeforeMount(() => {
      if (state.opened) {
        unlockScroll();
      }
    });

    onActivated(() => {
      if (state.keepAlive) {
        emit('update:show', true);
        state.keepAlive = false;
      }
    });

    onDeactivated(() => {
      if (props.show) {
        close();
        state.keepAlive = true;
      }
    });

    watch(
      () => props.show,
      value => {
        if (value) {
          open();
        } else {
          close();
        }
      }
    );

    watch(
      () => props.position,
      value => {
        value === 'center'
          ? (state.transitionName = 'popup-fade')
          : (state.transitionName = `popup-slide-${value}`);
      }
    );

    return {
      ...toRefs(state),
      popStyle,
      classes,
      onClick,
      onClickCloseIcon,
      onClickOverlay,
      onOpened,
      onClosed
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
