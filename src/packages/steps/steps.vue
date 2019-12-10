<template>
  <div class="nut-steps">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "nut-steps",
  props: {
    current: {
      type: Number
    },
    source: {
      type: Array,
      default() {
        return [];
      }
    },
    status: {
      validator(value) {
        return ["wait", "process", "finish", "error"].includes(value);
      },
      default: "process"
    }
  },
  data() {
    return {
      steps: [],
      stepOffset: 0
    };
  },
  methods: {
    updateChildProps(isInit) {
      const total = this.steps.length;
      this.steps.forEach((child, index) => {
        child.stepNumber = index + 1;
        if (this.direction === "horizontal") {
          child.total = total;
        }
        // 如果已存在status,且在初始化时,则略过
        // todo 如果当前是error,在current改变时需要处理
        if (!(isInit && child.currentStatus)) {
          if (index == this.current - 1) {
            if (this.status != "error") {
              child.currentStatus = "process";
            } else {
              child.currentStatus = "error";
            }
          } else if (index < this.current) {
            child.currentStatus = "finish";
          } else {
            child.currentStatus = "wait";
          }
        }
        if (index + 1 === total) {
          child.currentStatus += " nut-step-last";
        }
      });
    },
    init() {
      if (this.$slots.default) {
        this.steps = this.$slots.default
          .filter(vnode => !!vnode.componentInstance)
          .map(node => node.componentInstance);
        this.updateChildProps(true);
      }
    }
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
    }
  }
};
</script>