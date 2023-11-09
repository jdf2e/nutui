<template>
  <nut-popup
    position="bottom"
    closeable
    round
    :teleport-disable="teleportDisable"
    :visible="visible"
    :style="popStyle"
    :lock-scroll="lockScroll"
    @click-overlay="close"
    @click-close-icon="close"
  >
    <view class="nut-time-select">
      <view class="nut-time-select__title">
        <view class="nut-time-select__title__fixed">
          <span v-if="!$slots.title">{{ title || translate('pickupTime') }}</span>
          <slot v-else name="title"></slot>
        </view>
      </view>
      <view class="nut-time-select__content">
        <view class="nut-time-select__content__pannel">
          <slot name="pannel"></slot>
        </view>
        <view class="nut-time-select__content__detail">
          <slot name="detail"></slot>
        </view>
      </view>
    </view>
  </nut-popup>
</template>
<script lang="ts">
import { computed, provide } from 'vue';
import { createComponent } from '@/packages/utils/create';
import Popup from '../popup/index.vue';
const { create, translate } = createComponent('time-select');
export default create({
  components: {
    [Popup.name]: Popup
  },
  props: {
    visible: {
      type: Boolean,
      defalut: false
    },
    height: {
      type: [String],
      default: '20%'
    },
    title: {
      type: String,
      default: ''
    },
    currentKey: {
      type: [Number, String],
      default: 0
    },
    currentTime: {
      type: Array,
      default: () => {
        return [];
      }
    },
    lockScroll: {
      type: [Boolean],
      default: true
    },
    teleportDisable: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:visible', 'select'],
  setup: (props, { emit }) => {
    const popStyle = computed(() => {
      return {
        width: '100%',
        height: props.height
      };
    });

    const currentKey = computed(() => props.currentKey);

    const currentTime = computed(() => props.currentTime);

    const close = () => {
      emit('update:visible', false);
      emit('select', currentTime.value);
    };

    provide('currentKey', currentKey);
    provide('currentTime', currentTime);

    return {
      popStyle,
      close,
      translate
    };
  }
});
</script>
