<template>
  <view :class="classes">
    <nut-popup
      pop-class="popclass"
      :visible="visible"
      :isWrapTeleport="isWrapTeleport"
      position="bottom"
      round
      @click-overlay="close"
      :closeOnClickOverlay="closeAbled"
    >
      <view class="nut-actionsheet-panel">
        <view v-if="title" class="nut-actionsheet-title">{{ title }}</view>
        <slot></slot>
        <view v-if="!slotDefault">
          <view class="nut-actionsheet-item desc" v-if="description">{{ description }}</view>
          <view class="nut-actionsheet-menu" v-if="menuItems.length">
            <view
              v-for="(item, index) of menuItems"
              class="nut-actionsheet-item"
              :class="{ 'nut-actionsheet-item-disabled': item.disable, 'nut-actionsheet-item-loading': item.loading }"
              :style="{ color: isHighlight(item) || item.color }"
              :key="index"
              @click="chooseItem(item, index)"
            >
              <nut-icon v-if="item.loading" name="loading"> </nut-icon>
              <view v-else> {{ item[optionTag] }}</view>
              <view class="subdesc">{{ item[optionSubTag] }}</view>
            </view>
          </view>
          <view class="nut-actionsheet-cancel" v-if="cancelTxt" @click="cancelActionSheet">
            {{ cancelTxt }}
          </view>
        </view>
      </view>
    </nut-popup>
  </view>
</template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { computed, useSlots } from 'vue';
import { popupProps } from '../popup/props';
const { componentName, create } = createComponent('actionsheet');
export default create({
  props: {
    ...popupProps,
    cancelTxt: {
      type: String,
      default: ''
    },
    optionTag: {
      type: String,
      default: 'name'
    },
    optionSubTag: {
      type: String,
      default: 'subname'
    },
    chooseTagValue: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#ee0a24'
    },
    description: {
      type: String,
      default: ''
    },
    menuItems: {
      type: Array,
      default: () => []
    },
    isWrapTeleport: {
      type: Boolean,
      default: true
    },
    closeAbled: {
      type: Boolean,
      default: true
    }
  },
  emits: ['cancel', 'close', 'choose', 'update:visible'],

  setup(props, { emit }) {
    const slotDefault = !!useSlots().default;
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const isHighlight = (item: { [x: string]: string }) => {
      return props.chooseTagValue && props.chooseTagValue === item[props.optionTag] ? props.color : '';
    };

    const cancelActionSheet = () => {
      emit('cancel');
      emit('update:visible', false);
    };

    const chooseItem = (item: { disable: boolean; loading: boolean }, index: any) => {
      if (!item.disable && !item.loading) {
        emit('choose', item, index);
        emit('update:visible', false);
      }
    };

    const close = (e: Event) => {
      emit('close', e);
      emit('update:visible', false);
    };

    return {
      slotDefault,
      isHighlight,
      cancelActionSheet,
      chooseItem,
      close,
      classes
    };
  }
});
</script>
