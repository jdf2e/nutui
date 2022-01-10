<template>
  <div class="nut-collapse">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'nut-collapse',
  model: {
    prop: 'value',
    event: 'change-active',
  },
  props: {
    value: {
      type: String | Number,
    },
    accordion: {
      type: Boolean,
    },
    expandIconPosition: {
      type: String,
      default: 'right',
    },
    icon: {
      type: String,
      default: '',
    },
    rotate: {
      type: Number | String,
      default: 180,
    },
  },
  watch: {
    value(newVal, oldVal) {
      this.accordionFun(newVal);
    },
  },
  data() {
    return {};
  },
  methods: {
    changeEvt(name) {
      if (this.$parent.change && typeof this.$parent.change == 'function') {
        this.$parent.change(name);
      } else {
        this.$emit('change', name);
      }
    },
    changeValAry(name) {
      let index = -1;
      this.value.forEach((item, idx) => {
        if (String(item) == String(name)) {
          index = idx;
        }
      });
      let v = JSON.parse(JSON.stringify(this.value));
      index > -1 ? v.splice(index, 1) : v.push(name);
      this.$emit('change-active', v);
      this.changeEvt(v);
    },
    changeVal(val) {
      this.$emit('change-active', val);
      this.changeEvt(val);
    },
    // 手风琴模式将所有的item收起，然后对应的展开（默认）
    // 对于展开的再次点击的将其设置成收起，动画效果在item组件中执行
    accordionFun(val) {
      if (val instanceof Array) {
      } else {
        this.$children.forEach((item) => {
          if (item.name == val && item.openExpanded) {
            item.changeOpen(false);
          } else {
            item.name == val ? item.changeOpen(true) : item.changeOpen(false);
            item.animation();
          }
        });
      }
    },
  },
};
</script>
