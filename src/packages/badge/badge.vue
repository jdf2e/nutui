<template>
    <div class="nut-badge">
        <slot></slot>
         <sup
            v-show="!hidden && ( content || isDot )"
            v-text="content"
            class="nut-badge__content"
            :class="{ 'is-dot': isDot }"
            :style = "stl">
        </sup>
    </div>
</template>
<script>
export default {
  name: 'nut-badge',
  props: {
    value: {
      type: [String,Number]
    },
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
    },
    top: {
      type: String,
      default: '0'
    },
    right: {
      type: String,
      default: '0'
    },
    zIndex: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      stl: {
        top: this.top,
        right: this.right,
        zIndex: this.zIndex
      }
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