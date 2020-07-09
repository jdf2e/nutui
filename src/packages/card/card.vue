<template>
  <div class="nut-card-container" :class="isFull ? 'full-content' : ''">
    <div class="nut-card-header" :class="openIcon ? 'switch-icon-class' : ''" @click="headerClickHandler">
      <slot name="title">
        <div class="nut-card-title" v-if="title">{{ title }}</div>
        <div class="nut-card-title-content" v-if="!title">{{ content }}</div>
        <!-- 添加补充说明文案 -->
        <div class="nut-card-supply-title" v-if="supplyTitle">{{ supplyTitle }}</div>
        <div class="nut-card-icon" v-if="openIcon">
          <nut-icon type="self" :url="isOpen ? require('../../assets/svg/arrow-up.svg') : require('../../assets/svg/arrow-down.svg')"></nut-icon>
        </div>
      </slot>
    </div>
    <template v-if="isOpen">
      <div class="mut-card-content" v-if="showContent">
        <slot name="content">{{ content }}</slot>
      </div>
      <div class="mut-card-bottom" v-if="(footerButtons && footerButtons.length > 0) || hasFooter">
        <slot name="footer">
          <template v-for="(item, index) in footerButtons">
            <nut-button :key="index" color="#646464" size="small" type="bottom" @click="clickHandler(item.event)">{{ item.clickName }}</nut-button>
          </template>
        </slot>
      </div>
    </template>
  </div>
</template>
<script>
import locale from '../../mixins/locale';
export default {
  name: 'nut-card',
  props: {
    title: {
      // 卡片标题
      type: String,
      default: '',
    },
    supplyTitle: {
      // 卡片标题补充文案
      type: String,
      default: '',
    },
    openIcon: {
      // switch icon是否展示
      type: Boolean,
      default: false,
    },
    content: {
      // 卡片内容
      type: String,
      default: '',
    },
    hasContent: {
      // 使用content solt
      type: Boolean,
      default: false,
    },
    hasFooter: {
      // 使用footer solt
      type: Boolean,
      default: false,
    },
    isOpen: {
      // 是否展开 默认都展示
      type: Boolean,
      default: true,
    },
    footerButtons: {
      type: Array, // 默认传入的点击事件
      default: () => [],
    },
    isFull: {
      // 是否通栏
      type: Boolean,
      default: false,
    },
  },
  computed: {
    showContent() {
      const { title, content, hasContent } = this;
      return (title && content) || hasContent;
    },
  },
  methods: {
    clickHandler(event) {
      this.$emit(event);
    },
    headerClickHandler() {
      this.$emit('switch-click');
    },
  },
};
</script>
