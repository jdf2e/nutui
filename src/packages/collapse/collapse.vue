<template>
  <div class="nut-collapse" @changeEvt="changeEvt">
    <slot></slot>
  </div>
</template>
<script>
import nutCollapseItem from './collapse-item';
export default {
  name: 'nut-collapse',
  components: {
    nutCollapseItem
  },
  model: {
    prop: 'value',
    event: 'changeActive'
  },
  props: {
    value: {
      type: String | Number
    },
    accordion: {
      type: Boolean
    },
    expandIconPosition: {
      type: String,
      default: 'right'
    },
    icon: {
      type: String,
      default: ''
    },
    rotate: {
      type: Number | String,
      default: 180
    }
  },
  watch: {
    value(newVal, oldVal) {
      this.accordionFun(newVal);
    }
  },
  data() {
    return {};
  },
  methods: {
    changeEvt(name) {
      this.$parent.change(name);
    },
    changeValAry(name) {
      let index = this.value.indexOf(name);
      let v = JSON.parse(JSON.stringify(this.value));
      index > -1 ? v.splice(index, 1) : v.push(name);
      this.$emit('changeActive', v);
    },
    changeVal(val) {
      this.$emit('changeActive', val);
    },
    // 手风琴模式将所有的item收起，然后对应的展开（默认）
    // 对于展开的再次点击的将其设置成收起，动画效果在item组件中执行
    accordionFun(val) {
      if (val instanceof Array) {
      } else {
        this.$children.forEach(item => {
          if (item.name == val && item.openExpanded) {
            item.changeOpen(false);
          } else {
            item.name == val ? item.changeOpen(true) : item.changeOpen(false);
            item.animation();
          }
        });
      }
    }
  }
};
</script>
