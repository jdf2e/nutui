<template>
  <Transition name="toast-fade" @after-leave="onAfterLeave">
    <view
      :class="['popup-top', 'nut-notify', `nut-notify--${type}`, { className }]"
      :style="{ color: color, background: background }"
      v-show="state.mounted"
      @click="clickCover"
    >
      <template v-if="$slots.default">
        <slot></slot>
      </template>
      <template v-else>{{ msg }}</template>
    </view>
  </Transition>
  <!-- <nut-popup v-model:visible="state.mounted" position="top" :style="{ color: color, background: background }" :class="['popup-top', 'nut-notify', `nut-notify--${type}`, { className }]" overlay="false">
    <template v-if="$slots.default">
      <slot></slot>
    </template>
    <template v-else>{{ msg }}</template>
  </nut-popup> -->
</template>
<script lang="ts">
import { toRefs, reactive, onMounted, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
import Popup from '@/packages/__VUE/popup/index.vue';
const { componentName, create } = createComponent('notify');

export default create({
  components: {
    [Popup.name]: Popup
  },
  props: {
    id: String,
    color: { type: String, default: '' },
    msg: { type: Number, default: '' },
    duration: { type: Number, default: 3000 },
    className: {
      type: String,
      default: ''
    },
    background: { type: String, default: '' },
    type: {
      type: String,
      default: 'danger'
    },
    showPopup: {
      type: Boolean,
      default: false
    },
    onClose: Function,
    onClick: Function,
    unmount: Function
  },

  setup(props, { slots }) {
    let timer: null | number = null;
    const state = reactive({
      mounted: false
    });
    onMounted(() => {
      state.mounted = true;
    });
    const clickCover = () => {
      props.onClick && props.onClick();
    };
    const clearTimer = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
    const hide = () => {
      state.mounted = false;
    };
    const show = () => {
      clearTimer();
      if (props.duration) {
        timer = setTimeout(() => {
          hide();
        }, props.duration);
      }
    };

    if (props.duration) {
      show();
    }

    watch(
      () => props.duration,
      val => {
        if (val) {
          show();
        }
      }
    );
    const onAfterLeave = () => {
      clearTimer();
      props.unmount && props.unmount(props.id);
      props.onClose && props.onClose();
    };
    return { state, hide, onAfterLeave, clickCover };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
