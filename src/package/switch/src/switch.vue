<template>
    <div class="nut-switch" :class="{active:isActive}" @click="toggle" :style="{height:height+'rem',width:width+'rem',background:isActive?activeBgColor:inActiveBgColor}"><div class="nut-switch-btn" :style="{height:height+'rem',width:height+'rem',left:isActive?(width-height)+'rem':'0',background:btnColor}"></div></div>
</template>
<script>
export default {
  name: "nut-switch",
  props: {
    active: {
      type: Boolean,
      default: false
    },
    height: {
      type: [String, Number],
      default: .4
    },
    width: {
      type: [String, Number],
      default: .8
    },
    activeBgColor: {
      type: String,
      default: "#F42E2D"
    },
    inActiveBgColor: {
      type: String,
      default: "#FDFDFD"
    },
    btnColor: {
      type: String,
      default: "#FFFFFF"
    }
  },
  data() {
    return {
      isActive: false
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
      const status = this.isActive;
      this.isActive = !status;
      setTimeout(() => {
        this.$emit(status ? "switch-on" : "switch-off");
        this.$emit('update:active', !status);
      }, 300);
    }
  }
};
</script>
<style lang="scss">
.nut-switch {
  position: relative;
  display: inline-block;
  background: #fdfdfd;
  border-radius: 1000px;
  border: 2px solid rgba(50, 50, 50, 0.1);
  transition: all 0.1s;
  .nut-switch-btn {
    position: absolute;
    left: 0;
    background: #fff;
    border-radius: 50%;
    box-sizing: border-box;
    box-shadow: -1px 1px 1px #999;
    border: 1px solid rgba(50, 50, 50, 0.1);
    transition: all 0.3s;
  }
  &.active {
    background: #f42e2d;
    transition: all 0.2s ease 0.2s;
    .nut-switch-btn {
      left: 20px;
      transition: all 0.3s ease 0.05s;
    }
  }
}
</style>