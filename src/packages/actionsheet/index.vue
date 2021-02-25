<template>
  <view class="nut-actionsheet">
    <nut-popup
      v-model:show="state.maskIsVisible"
      position="bottom"
      round
      :closeable="closeAbled"
      @click-overlay="closeMask"
    >
      <view class="nut-actionsheet-panel">
        <view v-if="title" class="nut-actionsheet-title">{{ title }}</view>
        <slot></slot>
        <view class="nut-actionsheet-menu">
          <view class="nut-actionsheet-item desc" v-if="description">{{
            description
          }}</view>
          <view
            v-for="(item, index) of menuItems"
            class="nut-actionsheet-item"
            :class="{ 'nut-actionsheet-item-disabled': item.disable }"
            :style="{ color: isHighlight(item) }"
            :key="index"
            @click="chooseItem(item, index)"
            >{{ item[optionTag]
            }}<view class="subdesc">{{ item[subname] }}</view></view
          >
        </view>
        <view
          class="nut-actionsheet-cancel"
          v-if="cancelTxt"
          @click="cancelActionSheet"
        >
          {{ cancelTxt }}
        </view>
      </view>
    </nut-popup>
  </view>
</template>
<script>
import { createComponent } from '@/utils/create';
import { watch, reactive } from 'vue';
const { create } = createComponent('actionsheet');
export default create({
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    isClickChooseClose: {
      type: Boolean,
      default: true
    },
    cancelTxt: {
      type: String,
      default: ''
    },
    optionTag: {
      type: String,
      default: 'name'
    },
    chooseTagValue: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    closeAbled: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
      default: ''
    },
    subname: {
      type: String,
      default: ''
    },
    menuItems: {
      type: Array,
      default: () => []
    }
  },
  emits: ['click', 'close', 'cancel', 'choose'],

  setup(props, { slots, emit }) {
    console.log(slots.default?.());

    // state
    const state = reactive({
      maskIsVisible: false,
      descf: slots.default
    });

    // methods
    const isHighlight = item => {
      return item.color;
    };
    const closeActionSheet = () => {
      state.maskIsVisible = false;
      // emit('close');
    };

    const cancelActionSheet = () => {
      closeActionSheet();
      // emit('cancel');
    };

    const chooseItem = (item, index) => {
      if (!item.disable) {
        closeActionSheet();
        emit('choose', item, index);
      }
    };
    const closeMask = () => {
      state.maskIsVisible = false;
    };
    watch(
      () => props.isVisible,
      () => {
        state.maskIsVisible = true;
      }
    );
    return {
      isHighlight,
      closeActionSheet,
      cancelActionSheet,
      chooseItem,
      closeMask,
      state
    };
  }
});
</script>
<style lang="scss">
@import 'index.scss';
</style>
