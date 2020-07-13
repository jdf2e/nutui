<template>
  <span :class="clsStyle" @click="clickHandler">
    <slot></slot>
  </span>
</template>
<script>
export default {
  name: 'nut-tag',
  props: {
    size: {
      type: String,
      default: 'small', // [small, middle, big]
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    hollow: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'red', // [red, jc-blue, green, orange, yellow, blue, purple]
    },
  },
  computed: {
    clsStyle() {
      let cls = `nut-tag ${this.color} ${this.size}
            ${this.circle ? ' circle' : ''}
            ${this.disabled ? ' disabled' : ''}
            ${this.hollow ? ' hollow' : ''}`;
      return cls;
    },
  },
  methods: {
    clickHandler(event) {
      // 如果是 disabled 就阻止点击
      if (this.disabled) {
        return;
      }
      this.$emit('click', event);
    },
  },
};
</script>
