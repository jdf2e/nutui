<template>
  <nut-popup
    :visible="visible"
    position="bottom"
    round
    :close-on-click-overlay="closeAbled"
    :lock-scroll="lockScroll"
    :z-index="zIndex"
    @click-overlay="close"
  >
    <view class="nut-action-sheet">
      <view v-if="title" class="nut-action-sheet__title">{{ title }}</view>
      <slot></slot>
      <view v-if="!slotDefault">
        <view v-if="description" class="nut-action-sheet__item nut-action-sheet__desc">{{ description }}</view>
        <view v-if="menuItems.length" class="nut-action-sheet__menu">
          <view
            v-for="(item, index) of menuItems"
            :key="index"
            class="nut-action-sheet__item"
            :class="{
              'nut-action-sheet__item--disabled': item.disable,
              'nut-action-sheet__item--loading': item.loading
            }"
            :style="{ color: isHighlight(item) || item.color }"
            @click="chooseItem(item, index)"
          >
            <Loading v-if="item.loading" name="loading"></Loading>
            <view v-else> {{ item[optionTag] }}</view>
            <view class="nut-action-sheet__subdesc">{{ item[optionSubTag] }}</view>
          </view>
        </view>
        <view v-if="cancelTxt" class="nut-action-sheet__cancel" @click="cancelActionSheet">
          {{ cancelTxt }}
        </view>
      </view>
    </view>
  </nut-popup>
</template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { useSlots } from 'vue';
import type { PropType } from 'vue';
import { popupProps } from '../popup/props';
import NutPopup from '../popup/index.vue';
import { Loading } from '@nutui/icons-vue';
const { create } = createComponent('action-sheet');
export interface menuItems {
  disable: boolean;
  loading: boolean;
  color: string;
  name: string;
  subname: string;
  [x: string]: string | boolean;
}
export default create({
  components: {
    NutPopup,
    Loading
  },
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
      type: Array as PropType<menuItems[]>,
      default: () => []
    },
    closeAbled: {
      type: Boolean,
      default: true
    }
  },
  emits: ['cancel', 'close', 'choose', 'update:visible'],

  setup(props, { emit }) {
    const slotDefault = !!useSlots().default;

    const isHighlight = (item: { [x: string]: string | boolean }) => {
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
      if (props.closeAbled) {
        emit('close', e);
        emit('update:visible', false);
      }
    };

    return {
      slotDefault,
      isHighlight,
      cancelActionSheet,
      chooseItem,
      close
    };
  }
});
</script>
