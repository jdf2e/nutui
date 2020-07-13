<template>
  <div class="nut-steps" :class="{ horizontal: direction === 'horizontal' }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'nut-steps',
  props: {
    current: {
      type: Number,
      default: 0,
    },
    timeForward: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String,
      default: 'vertical',
    },
    type: {
      type: String,
    },
    source: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      steps: [],
    };
  },
  methods: {
    updateChildProps(isInit) {
      const total = this.steps.length;
      this.steps.forEach((child, index) => {
        // 如果已存在status,且在初始化时,则略过
        // todo 如果当前是error,在current改变时需要处理
        if (!(isInit && child.currentStatus)) {
          if (this.current === index) {
            child.currentStatus = 'nut-step-status-process';
          }
          if (this.type === 'process') {
            if (index < this.current) {
              child.currentStatus = 'nut-step-status-finish';
            }
            if (index > this.current) {
              child.currentStatus = 'nut-step-status-wait';
            }
          }
          if (this.type === 'mini') {
            child.type = 'mini';
          }
        }

        if (index + 1 === total) {
          child.currentStatus += ' nut-step-last';
        }
        if (this.timeForward) {
          child.timeForward = true;
        }
      });
    },
    init() {
      if (this.$slots.default) {
        this.steps = this.$slots.default.filter((vnode) => !!vnode.componentInstance).map((node) => node.componentInstance);
        this.updateChildProps(true);
      }
    },
  },
  mounted() {
    this.init();
  },
  watch: {
    current() {
      this.updateChildProps();
    },
    source() {
      this.$nextTick(() => {
        this.init();
      });
    },
  },
};
</script>
