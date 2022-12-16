<template>
  <nut-popup :visible="visible" position="bottom" round @click-overlay="close" :closeOnClickOverlay="closeAbled">
    <view :class="classes">
      <view v-if="title" class="nut-action-sheet__title">{{ title }}</view>
      <slot></slot>
      <view v-if="!slotDefault">
        <view class="nut-action-sheet__item nut-action-sheet__desc" v-if="description">{{ description }}</view>
        <view class="nut-action-sheet__menu" v-if="menuItems.length">
          <view
            v-for="(item, index) of menuItems"
            class="nut-action-sheet__item"
            :class="{
              'nut-action-sheet__item--disabled': item.disable,
              'nut-action-sheet__item--loading': item.loading
            }"
            :style="{ color: isHighlight(item) || item.color }"
            :key="index"
            @click="chooseItem(item, index)"
          >
            <IconFont v-if="item.loading" name="loading"></IconFont>
            <view v-else> {{ item[optionTag] }}</view>
            <view class="nut-action-sheet__subdesc">{{ item[optionSubTag] }}</view>
          </view>
        </view>
        <view class="nut-action-sheet__cancel" v-if="cancelTxt" @click="cancelActionSheet">
          {{ cancelTxt }}
        </view>
      </view>
    </view>
  </nut-popup>
</template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { computed, useSlots } from 'vue';
import type { PropType } from 'vue';
const { componentName, create } = createComponent('action-sheet');
import Popup from '../popup/index.taro.vue';
import { popupProps } from '../popup/props';
import { IconFont } from '@nutui/icons-vue';
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
    [Popup.name]: Popup,
    IconFont
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
  emits: ['cancel', 'choose', 'update:visible', 'close'],

  setup(props, { emit }) {
    const slotDefault = !!useSlots().default;
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

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
