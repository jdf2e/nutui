<template>
  <view :class="['nut-searchbar', customClass ? customClass : '']">
    <view class="search-icon">
      <slot name="left"></slot>
    </view>
    <view class="search-input" :class="[animation ? 'nut-search-ani' : '', inputFocusAnimation ? 'focus' : '']">
      <form @submit.prevent id="input-form">
        <view class="search-icon">
          <slot name="left-in"></slot>
        </view>
        <input type="search" :value="value" placeholder="搜索" />
        <view class="search-icon">
          <slot name="right-in"></slot>
        </view>
      </form>
    </view>
    <view class="search-icon">
      <slot name="right"></slot>
    </view>
  </view>
</template>

<script lang="ts">
import { toRefs, reactive, watch } from 'vue';
import { createComponent } from '../../utils/create';
import Icon from '../icon/index.vue';
const { create } = createComponent('searchbar');

export default create({
  props: {
    hasIcon: {
      type: Boolean,
      default: false
    },
    searchIconSize: {
      type: String,
      default: '20px'
    },
    searchIconColor: {
      type: String,
      default: '#2e2d2d'
    },
    searchBtnIconSize: {
      type: String,
      default: '20px'
    },
    searchBtnIconColor: {
      type: String,
      default: '#2e2d2d'
    },
    clearIconSize: {
      type: String,
      default: '14px'
    },
    placeText: {
      type: String
    },
    hasSearchButton: {
      type: Boolean,
      default: true
    },
    hasTextButton: {
      type: Boolean,
      default: false
    },
    textInfo: {
      type: String
    },
    animation: {
      type: Boolean,
      default: true
    },
    customClass: {
      type: String,
      default: ''
    },
    // 新增 input 输入的位置  left center right
    inputAlign: {
      type: String,
      default: 'left'
    },
    // 新增 是否启用清除控件
    clearable: {
      type: Boolean,
      default: true
    },
    // 新增 搜索框右侧按钮
    hasAction: {
      type: Boolean,
      default: false
    },
    actionIcon: {
      type: String,
      default: ''
    },
    actionIconSize: {
      type: String,
      default: '20px'
    },
    // 新增 右侧按钮图标
    searchBtnIcon: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  components: {
    [Icon.name]: Icon
  },

  setup(props, { emit }) {
    const {} = toRefs(props);

    const state = reactive({});

    return {
      ...toRefs(state)
    };
  }
});
</script>
