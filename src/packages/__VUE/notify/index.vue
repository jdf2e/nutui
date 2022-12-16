<template>
  <nut-popup v-model:visible="isShowPopup" :position="position" :overlay="false" :teleportDisable="teleportDisable">
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
import { ref, watch } from 'vue';
import { createComponent } from '../../utils/create';
import Popup from '../popup/index.vue';
const { create } = createComponent('notify');

export default create({
  components: {
    [Popup.name]: Popup
  },
  props: {
    id: String,
    color: { type: String, default: '' },
    msg: { type: String, default: '' },
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
    visible: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top'
    },
    teleportDisable: {
      type: Boolean,
      default: true
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
    let timer: null | number = null;
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

    const unWatch = watch(
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

    const onAfterLeave = () => {
      clearTimer();
      unWatch && unWatch();
      props.unmount && props.unmount(props.id);
      props.onClose && props.onClose();
    };

    return { onAfterLeave, clickCover, isShowPopup };
  }
});
</script>
