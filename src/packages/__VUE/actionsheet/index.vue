<template>
  <view :class="classes">
    <nut-popup pop-class="popclass" :visible="visible" position="bottom" round @click-overlay="close">
      <view class="nut-actionsheet-panel">
        <view v-if="title" class="nut-actionsheet-title">{{ title }}</view>
        <view class="nut-actionsheet-item desc" v-if="description">{{ description }}</view>
        <view class="nut-actionsheet-menu" v-if="menuItems.length">
          <view
            v-for="(item, index) of menuItems"
            class="nut-actionsheet-item"
            :class="{ 'nut-actionsheet-item-disabled': item.disable }"
            :style="{ color: isHighlight(item) }"
            :key="index"
            @click="chooseItem(item, index)"
            >{{ item[optionTag] }}<view class="subdesc">{{ item[optionSubTag] }}</view>
          </view>
        </view>
        <view class="nut-actionsheet-cancel" v-if="cancelTxt" @click="cancelActionSheet">
          {{ cancelTxt }}
        </view>
      </view>
    </nut-popup>
  </view>
</template>
<script lang="ts">
import { createComponent } from '../../utils/create';
import { computed } from 'vue';
import { popupProps } from '../popup/index.vue';
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
    }
  },
  emits: ['cancel', 'close', 'choose', 'update:visible'],

  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const isHighlight = (item: { [x: string]: string }) => {
      return props.chooseTagValue && props.chooseTagValue === item[props.optionTag] ? props.color : '#1a1a1a';
    };

    const cancelActionSheet = () => {
      emit('cancel');
      emit('update:visible', false);
    };

    const chooseItem = (item: { disable: any }, index: any) => {
      if (!item.disable) {
        emit('choose', item, index);
        emit('update:visible', false);
      }
    };

    const close = () => {
      emit('close');
      emit('update:visible', false);
    };

    return {
      isHighlight,
      cancelActionSheet,
      chooseItem,
      close,
      classes
    };
  }
});
</script>
