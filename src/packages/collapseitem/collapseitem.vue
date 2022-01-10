<template>
  <div :class="['nut-collapse-item', { 'nut-collapse-item-left': classDirection == 'left' }, { 'nut-collapse-item-icon': this.$parent.icon }]">
    <div :class="['collapse-item', { 'item-expanded': openExpanded }, { 'nut-collapse-item-disabled': disabled }]" @click="toggleOpen">
      <div class="collapse-title">
        <span v-html="title"></span>
      </div>
      <span v-if="subTitle" v-html="subTitle" class="subTitle"></span>
      <i
        v-if="this.$parent.icon"
        :class="['collapse-icon', { 'col-expanded': openExpanded }, { 'collapse-icon-disabled': disabled }]"
        :style="iconStyle"
      ></i>
      <i v-else :class="['collapse-icon', { 'col-expanded': openExpanded }, { 'collapse-icon-disabled': disabled }]"></i>
    </div>
    <div :class="['collapse-wrapper']" ref="wrapper">
      <div class="collapse-content" ref="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nut-collapse-item',
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: Number | String,
      default: -1,
      required: true,
    },
  },
  mounted() {
    this.$nextTick(() => {
      let active = this.$parent && this.$parent.value;
      if (typeof active == 'number' || typeof active == 'string') {
        if (this.name == active) {
          this.defaultOpen();
        }
      }
      if (active instanceof Array) {
        let f = active.filter((item) => item == this.name);
        if (f.length > 0) {
          this.defaultOpen();
        }
      }
    });
    this.classDirection = this.$parent.expandIconPosition;
    if (this.$parent.icon) {
      this.$set(this.iconStyle, 'background-image', 'url(' + this.$parent.icon + ')');
    }
  },
  data() {
    return {
      openExpanded: false,
      classDirection: 'right',
      iconStyle: {
        'background-image': 'url(https://img10.360buyimg.com/imagetools/jfs/t1/111306/10/17422/341/5f58aa0eEe9218dd6/28d76a42db334e31.png)',
        'background-repeat': 'no-repeat',
        'background-size': '100% 100%',
        transform: 'rotate(0deg)',
      },
    };
  },
  methods: {
    defaultOpen() {
      this.$parent.accordion ? this.$parent.accordionFun(this.name) : this.open();
      if (this.$parent.icon) {
        this.$set(this.iconStyle, 'transform', 'rotate(' + this.$parent.rotate + 'deg)');
      }
    },
    toggleOpen() {
      // this.$parent.changeEvt(this.name);
      if (this.$parent.accordion) {
        if (this.$parent.value == this.name) {
          this.$parent.accordionFun(this.name);
        }
        this.animation();
        this.$parent.changeVal(this.name);
      } else {
        this.$parent.changeValAry(this.name);
        this.open();
      }
    },
    open() {
      this.openExpanded = !this.openExpanded;
      this.animation();
    },
    // 手风琴模式
    animation() {
      this.$nextTick(() => {
        const { content, wrapper } = this.$refs;
        if (!content || !wrapper) {
          return;
        }
        const { offsetHeight } = content;
        if (offsetHeight) {
          const contentHeight = `${offsetHeight}px`;
          wrapper.style.willChange = 'height';
          wrapper.style.height = !this.openExpanded ? 0 : contentHeight;
          if (this.$parent.icon && !this.openExpanded) {
            this.$set(this.iconStyle, 'transform', 'rotate(0deg)');
          } else {
            this.$set(this.iconStyle, 'transform', 'rotate(' + this.$parent.rotate + 'deg)');
          }
        }
        if (!this.openExpanded) {
          this.onTransitionEnd();
        }
      });
    },
    // 更改子组件展示
    changeOpen(bol) {
      this.openExpanded = bol;
    },
    // 清除 willChange 减少性能浪费
    onTransitionEnd() {
      this.$refs.wrapper.style.willChange = 'auto';
    },
  },
};
</script>
