<template>
  <view :class="classes">
    <nut-popup
      pop-class="popclass"
      :visible="visible"
      position="bottom"
      round
      @click-overlay="close"
    >
      <view class="nut-actionsheet-panel">
        <view-block v-if="title" class="nut-actionsheet-title">{{
          title
        }}</view-block>
        <view-block class="nut-actionsheet-item desc" v-if="description">{{
          description
        }}</view-block>
        <view class="nut-actionsheet-menu" v-if="menuItems.length">
          <view-block
            v-for="(item, index) of menuItems"
            class="nut-actionsheet-item"
            :class="{ 'nut-actionsheet-item-disabled': item.disable }"
            :style="{ color: isHighlight(item) }"
            :key="index"
            @click="chooseItem(item, index)"
            >{{ item[optionTag]
            }}<view class="subdesc">{{ item[optionSubTag] }}</view>
          </view-block>
        </view>
        <view-block
          class="nut-actionsheet-cancel"
          v-if="cancelTxt"
          @click="cancelActionSheet"
        >
          {{ cancelTxt }}
        </view-block>
      </view>
    </nut-popup>
  </view>
</template>
<script>
import { createComponent } from '@/packages/utils/create';
import { computed } from 'vue';
const { componentName, create } = createComponent('actionsheet');
import { popupProps } from '@/packages/__VUE/popup/index.vue';
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
  emits: ['cancel', 'choose', 'update:visible'],

  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const isHighlight = item => {
      return props.chooseTagValue &&
        props.chooseTagValue === item[props.optionTag]
        ? props.color
        : '#1a1a1a';
    };

    const cancelActionSheet = () => {
      emit('cancel');
      emit('update:visible', false);
    };

    const chooseItem = (item, index) => {
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
<style lang="scss">
@import 'index.scss';
</style>
