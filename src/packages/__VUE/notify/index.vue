<template>
  <nut-popup v-model:visible="showPopup" :position="position" :overlay="false" :isWrapTeleport="isWrapTeleport">
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
import { reactive, onMounted, watch, ref } from 'vue';
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
    // showPopup: {
    //   type: Boolean,
    //   default: false
    // },
    modelVisible: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top'
    },
    isWrapTeleport: {
      type: Boolean,
      default: true
    },
    onClose: Function,
    onClick: Function,
    unmount: Function
  },

  setup(props) {
    let timer: null | number = null;
    const state = reactive({
      mounted: false
    });
    onMounted(() => {
      // state.mounted = true;
    });

    const showPopup = ref(props.modelVisible);

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
      (val) => {
        if (val) {
          show();
        }
      }
    );

    // watch(
    //   () => props.visible,
    //   (val, oldv) => {
    //     state.mounted = val;
    //   }
    // );
    const onAfterLeave = () => {
      clearTimer();
      props.unmount && props.unmount(props.id);
      props.onClose && props.onClose();
    };
    return { state, hide, onAfterLeave, clickCover, showPopup };
  }
});
</script>
