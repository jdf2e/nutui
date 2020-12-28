<template>
  <view class="nut-actionsheet">
    <transition :name="isAnimation ? 'nutFade' : ''" v-if="isShowMask">
      <view
        class="nut-actionsheet-mask"
        @click="clickActionSheetMask"
        v-show="isVisible"
      ></view>
    </transition>
    <transition :name="isAnimation ? 'nutSlideUp' : ''">
      <view class="nut-actionsheet-panel" v-show="isVisible">
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
          <li
            class="nut-actionsheet-item"
            :class="{
              'nut-actionsheet-item-active': isHighlight(item),
              'nut-actionsheet-item-disabled': item.disable
            }"
            v-for="(item, index) of menuItems"
            :key="index"
            @click="chooseItem(item, index)"
            >{{ item[optionTag] }}</li
          >
        </ul>
        <view
          class="nut-actionsheet-cancel"
          v-if="cancelTxt"
          @click="cancelActionSheet"
          >{{ cancelTxt }}</view
        >
      </view>
    </transition>
  </view>
</template>
<script>
import { createComponent } from '@/utils/create';
import { watch, onDeactivated, onUnmounted } from 'vue';
const { create } = createComponent('actionsheet');
export default create({
  props: {
    isAnimation: {
      type: Boolean,
      default: true
    },
    isLockBgScroll: {
      type: Boolean,
      default: false
    },
    isVisible: {
      type: Boolean,
      default: false
    },
    isShowMask: {
      type: Boolean,
      default: true
    },
    isClickChooseClose: {
      type: Boolean,
      default: true
    },
    isClickCloseMask: {
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
    menuItems: {
      type: Array,
      default: () => []
    }
  },
  emits: ['click', 'close', 'cancel', 'choose', 'open'],
  setup(props, { emit }) {
    console.log(props.isVisible, 'isVisible');
    const removeLockScroll = () => {
      document.body.classList.remove('nut-overflow-hidden');
    };
    const isHighlight = item => {
      return (
        (props.chooseTagValue &&
          props.chooseTagValue == item[props.optionTag]) ||
        props.chooseTagValue === 0
      );
    };

    const closeActionSheet = () => {
      emit('close');
    };

    const cancelActionSheet = () => {
      closeActionSheet();
      emit('cancel');
    };

    const clickActionSheetMask = () => {
      props.isClickCloseMask && closeActionSheet();
    };

    const chooseItem = (item, index) => {
      if (!item.disable) {
        if (props.isClickChooseClose) {
          closeActionSheet();
        }
        emit('choose', item, index);
      }
    };
    watch(function isVisible(value) {
      console.log(value, 'val');
      !!value && emit('open');
      if (props.isLockBgScroll) {
        if (value) {
          document.body.classList.add('nut-overflow-hidden');
        } else {
          removeLockScroll();
        }
      }
    }),
      onDeactivated(() => {
        removeLockScroll();
      });
    onUnmounted(() => {
      removeLockScroll();
    });
    return {
      removeLockScroll,
      isHighlight,
      closeActionSheet,
      clickActionSheetMask,
      cancelActionSheet,
      chooseItem
    };
  }
});
</script>
<style lang="scss">
@import 'index.scss';
</style>
