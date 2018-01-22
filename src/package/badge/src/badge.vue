<template>
    <div class="nut-badge">
        <slot></slot>
         <sup
            v-show="!hidden && ( content || isDot )"
            v-text="content"
            class="nut-badge__content"
            :class="{ 'is-dot': isDot }">
        </sup>
    </div>
</template>
<script>
export default {
  name: 'nut-badge',
  props: {
    value: {},
    max: {
      type: Number,
      default: 10000
    },
    isDot: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    content() {
      if (this.isDot) return;
      const value = this.value;
      const max = this.max;
      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value;
      }
      return value;
    }
  }
};
</script>
<style lang="scss" scoped>
    .nut-badge {
      position: relative;
      sup {
        position: absolute;
        top: 0;
        right: 10px;
        height: 18px;
        line-height: 18px;
        padding: 0 5px;
        background-color: rgb(255,77,26);
        font-size: 10px;
        border-radius: 10px;
        color: #fff;
      }
      .nut-badge__content {
        transform: translateY(-50%) translateX(100%);
      }
      .is-dot {
        width: 10px;
        height: 10px;
        padding: 0;
        right: 5px;
        border-radius: 10px;
      }
    }
</style>