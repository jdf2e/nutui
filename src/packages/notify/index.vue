<template>
  <Transition name="toast-fade">
    <view
      :class="[
        'popup-top',
        'round',
        'nut-notify',
        `nut-notify--${type}`,
        { className }
      ]"
      :style="{
        bottom: center ? 'auto' : bottom + 'px',
        'background-color': coverColor
      }"
      v-show="state.mounted"
      @click="clickCover"
    >
      <template v-if="$slots.default">
        <slot></slot>
      </template>
      <template v-else>{{ msg }}</template>
    </view>
  </Transition>
  <!-- </view> -->
</template>
<script lang="ts">
import { toRefs, reactive, onMounted, watch } from 'vue';
import { createComponent } from '@/utils/create';
import Popup from '@/packages/popup/index.vue';
const { componentName, create } = createComponent('notify');

export default create({
  props: {
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
    }
  },

  setup(props, { slots }) {
    let timer;
    const state = reactive({
      mounted: false
    });
    onMounted(() => {
      state.mounted = true;
    });
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
    return { state, hide };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
