<template>
  <Teleport :to="teleport">
    <nut-overlay
      v-if="overlay"
      :visible="visible"
      :close-on-click-overlay="closeOnClickOverlay"
      :class="overlayClass"
      :style="overlayStyle"
      :z-index="zIndex"
      :lock-scroll="lockScroll"
      :duration="duration"
      @click="onClickOverlay"
    />
    <Transition
      :name="transitionName"
      @after-enter="onOpened"
      @after-leave="onClosed"
    >
      <view
        v-show="visible"
        :class="classes"
        :style="popStyle"
        @click="onClick"
      >
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
import overlay from '@/packages/__VUE/overlay/index.vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('popup');

let _zIndex = 2000;

export const popupProps = {
  ...overlayProps,
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
  components: {
    'nut-overlay': overlay
  },
  props: {
    ...popupProps
  },
  emits: [
    'click',
    'click-close-icon',
    'open',
    'close',
    'opend',
    'closed',
    'update:visible',
    'click-overlay'
  ],

  setup(props, { emit }) {
    const state = reactive({
      zIndex: props.zIndex ? (props.zIndex as number) : _zIndex,
      showSlot: true,
      transitionName: `popup-fade-${props.position}`,
      overLayCount: 1,
      keepAlive: false
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
      if (!props.visible) {
        if (props.zIndex !== undefined) {
          _zIndex = Number(props.zIndex);
        }
        emit('update:visible', true);
        lockScroll();
        state.zIndex = ++_zIndex;
      }
      if (props.destroyOnClose) {
        state.showSlot = true;
      }
      emit('open');
    };

    const close = () => {
      if (props.visible) {
        unlockScroll();
        emit('update:visible', false);
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

      props.visible && open();
    });

    onBeforeUnmount(() => {
      props.visible && close();
    });

    onBeforeMount(() => {
      if (props.visible) {
        unlockScroll();
      }
    });

    onActivated(() => {
      if (state.keepAlive) {
        emit('update:visible', true);
        state.keepAlive = false;
      }
    });

    onDeactivated(() => {
      if (props.visible) {
        close();
        state.keepAlive = true;
      }
    });

    watch(
      () => props.visible,
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
