<template>
  <nut-popup v-model:visible="isShowPopup" :position="position" :overlay="false">
    <div
      :class="['nut-notify', `nut-notify--${type}`, className]"
      :style="{ color: color, background: background }"
      @click="clickCover"
    >
      <template v-if="$slots.default">
        <slot></slot>
      </template>
      <template v-else>{{ msg }}</template>
    </div>
  </nut-popup>
</template>
<script lang="ts">
import { ref, watch, onUnmounted, type PropType } from 'vue';
import { createComponent } from '../../utils/create';
import NutPopup from '../popup/index.taro.vue';
import type { NotifyPosition, NotifyType } from './types';
const { create } = createComponent('notify');

export default create({
  components: {
    NutPopup
  },
  props: {
    id: String,
    color: {
      type: String,
      default: ''
    },
    msg: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 3000
    },
    className: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: ''
    },
    type: {
      type: String as PropType<NotifyType>,
      default: 'danger'
    },
    visible: {
      type: Boolean,
      default: false
    },
    position: {
      type: String as PropType<NotifyPosition>,
      default: 'top'
    },
    onClose: Function,
    onClick: Function,
    unmount: Function
  },
  emits: ['update:visible'],
  setup(props, { emit }) {
    const clickCover = () => {
      props.onClick && props.onClick();
    };

    // timer
    let timer: null | NodeJS.Timeout = null;
    const clearTimer = () => {
      timer && clearTimeout(timer);
      timer = null;
    };

    // hide popup
    const hide = () => {
      emit('update:visible', false);
    };

    // watch show popup
    const isShowPopup = ref<boolean>(false);

    watch(
      () => props.visible,
      (newVal: boolean) => {
        isShowPopup.value = props.visible;
        const DURATION: number = props.duration;
        if (newVal && DURATION) {
          timer = setTimeout(() => {
            hide();
          }, DURATION);
        }
      },
      { immediate: true }
    );

    onUnmounted(() => {
      clearTimer();
    });

    return { clickCover, isShowPopup };
  }
});
</script>
