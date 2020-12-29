<template>
  <view class="nut-actionsheet">
    <nut-popup v-model:show="state.maskIsVisible" position="bottom" round>
      <view class="nut-actionsheet-panel">
        <view class="nut-actionsheet-custom">
          <slot name="custom"></slot>
        </view>
        <dl
          class="nut-actionsheet-modal"
          v-if="$slots.title || $slots.subTitle"
        >
          <dt class="nut-actionsheet-title"><slot name="title"></slot></dt>
          <dd class="nut-actionsheet-sub-title"
            ><slot name="sub-title"></slot
          ></dd>
        </dl>
        <ul class="nut-actionsheet-menu">
          <li class="nut-actionsheet-item desc" v-if="description">{{
            description
          }}</li>
          <li
            class="nut-actionsheet-item"
            :class="{
              'nut-actionsheet-item-disabled': item.disable
            }"
            :style="{ color: isHighlight(item) }"
            v-for="(item, index) of menuItems"
            :key="index"
            @click="chooseItem(item, index)"
            >{{ item[optionTag]
            }}<view class="subdesc">{{ item.subname }}</view></li
          >
        </ul>
        <div
          class="nut-actionsheet-cancel"
          v-if="cancelTxt"
          @click="cancelActionSheet"
          >{{ cancelTxt }}</div
        >
      </view>
    </nut-popup>
  </view>
</template>
<script>
import Popup from '@/packages/popup/index.vue';
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

  setup(props, { emit }) {
    // state
    const state = reactive({
      maskIsVisible: false
    });

    // methods
    const isHighlight = item => {
      console.log(item.color, 'color');
      return item.color;
    };

    const closeActionSheet = () => {
      state.maskIsVisible = false;
      console.log(state.maskIsVisible, 'mask');
      emit('close');
    };

    const cancelActionSheet = () => {
      closeActionSheet();
      emit('cancel');
    };

    const chooseItem = (item, index) => {
      if (!item.disable) {
        if (props.isClickChooseClose) {
          closeActionSheet();
        }
        emit('choose', item, index);
      }
    };

    watch(
      () => props.isVisible,
      val => {
        if (val) {
          state.maskIsVisible = true;
        }
      }
    );

    return {
      isHighlight,
      closeActionSheet,
      cancelActionSheet,
      chooseItem,
      state
    };
  }
});
</script>
<style lang="scss">
@import 'index.scss';
</style>
