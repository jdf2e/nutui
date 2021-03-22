<template>
  <view :class="classes">
    <nut-popup
      v-model:show="state.maskIsVisible"
      position="bottom"
      round
      @click-overlay="closeMask"
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
import { createComponent } from '@/utils/create';
import { watch, reactive, computed } from 'vue';
const { componentName, create } = createComponent('actionsheet');

export default create({
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
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
  emits: ['cancel', 'choose'],

  setup(props, { emit }) {
    const state = reactive({
      maskIsVisible: false
    });

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
    const closeActionSheet = () => {
      state.maskIsVisible = false;
    };

    const cancelActionSheet = () => {
      closeActionSheet();
      emit('cancel');
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
      state,
      classes
    };
  }
});
</script>
<style lang="scss">
@import 'index.scss';
</style>
