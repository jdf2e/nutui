<template>
  <div class="nut-actionsheet">
    <nut-popup v-model="isVisiblePopup" position="bottom" round @close="closeActionSheet" :close-on-click-overlay="isClickCloseMask">
      <div class="nut-actionsheet-panel">
        <dl class="nut-actionsheet-modal" v-if="$slots.title || $slots.desc">
          <dt class="nut-actionsheet-title">
            <slot name="title" slot-scope></slot>
          </dt>
          <dd class="nut-actionsheet-sub-title">
            <slot name="desc" slot-scope></slot>
          </dd>
        </dl>
        <ul class="nut-actionsheet-menu">
          <li
            class="nut-actionsheet-item"
            :class="{ 'nut-actionsheet-item-active': isHighlight(item), 'nut-actionsheet-item-disabled': item.disable }"
            v-for="(item, index) of optionList"
            :key="index"
            @click="chooseItem(item, index)"
            >{{ item[optionTag] }}</li
          >
        </ul>
        <div class="nut-actionsheet-cancel" v-if="isCancleBtn" @click="cancelActionSheet">取消</div>
        <div class="nut-actionsheet-confirm" v-if="isConfirmBtn" @click="cancelActionSheet">
          <div class="confirm-btn">确定</div>
        </div>
      </div>
    </nut-popup>
  </div>
</template>
<script>
export default {
  name: 'nut-actionsheet',
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    isClickChooseClose: {
      type: Boolean,
      default: true,
    },
    isClickCloseMask: {
      type: Boolean,
      default: true,
    },
    isCancleBtn: {
      type: Boolean,
      default: false,
    },
    isConfirmBtn: {
      type: Boolean,
      default: false,
    },
    optionTag: {
      type: String,
      default: 'name',
    },
    chooseTagValue: {
      type: String,
      default: '',
    },
    optionList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isVisiblePopup: false,
    };
  },
  watch: {
    isVisible(value) {
      this.isVisiblePopup = this.isVisible;
    },
  },
  methods: {
    isHighlight(item) {
      return (this.chooseTagValue && this.chooseTagValue == item[this.optionTag]) || this.chooseTagValue === 0;
    },

    closeActionSheet() {
      this.$emit('close');
    },

    cancelActionSheet() {
      this.closeActionSheet();
      this.$emit('cancel');
    },

    clickActionSheetMask() {
      this.isClickCloseMask && this.closeActionSheet();
    },

    chooseItem(item, index) {
      if (!item.disable) {
        if (this.isClickChooseClose) {
          this.closeActionSheet();
        }
        this.$emit('choose', item, index);
      }
    },
  },
};
</script>
