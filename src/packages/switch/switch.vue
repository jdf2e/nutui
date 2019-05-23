<template>
  <div
    class="nut-switch"
    :class="[{'nut-switch-active':isActive},'nut-switch-'+size,{'nut-switch-disabled':disabled}]"
    @click="toggle"
  >
    <div class="nut-switch-btn"></div>
  </div>
</template>
<script>
export default {
  name: "nut-switch",
  props: {
    active: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "base"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isActive: false,
      isAnimating:false
    };
  },
  created() {
    this.isActive = this.active;
  },
  watch: {
    active(newVal) {
      this.isActive = newVal;
    }
  },
  methods: {
    toggle() {
      if(this.isAnimating) return;
      const status = this.isActive;
      if (!this.disabled) {
        this.isActive = !status;
      }
      this.isAnimating = true;
      setTimeout(() => {
        this.$emit("change", this.isActive);
        this.$emit("update:active", this.isActive);
        this.isAnimating = false;
      }, 300);
    }
  }
};
</script>