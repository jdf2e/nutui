<template>
  <Transition name="nut-fade" @after-leave="onAfterLeave">
    <view
      :class="[`popup-${position}`, 'nut-notify', `nut-notify--${type}`, className]"
      :style="{ color: color, background: background }"
      v-show="visible"
      @click="onClick"
    >
      <template v-if="$slots.default">
        <slot></slot>
      </template>
      <template v-else>{{ msg }}</template>
    </view>
  </Transition>
</template>
<script lang="ts">
import { watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
import Popup from '../popup/index.taro.vue';
const { componentName, create } = createComponent('notify');

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
    }
  },
  emits: ['update:visible', 'closed', 'click'],
  setup(props, { emit }) {
    let timer: null | number = null;

    const onClick = () => {
      emit('click');
    };
    const clearTimer = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
    const hide = () => {
      emit('update:visible', false);
      emit('closed');
    };

    watch(
      () => props.visible,
      (value: boolean) => {
        if (value) {
          show();
        }
      }
    );

    const show = () => {
      clearTimer();
      if (props.duration) {
        timer = setTimeout(() => {
          hide();
        }, props.duration);
      }
    };

    const onAfterLeave = () => {
      if (props.visible) {
        clearTimer();
        hide();
      }
    };
    return { hide, onAfterLeave, onClick };
  }
});
</script>
