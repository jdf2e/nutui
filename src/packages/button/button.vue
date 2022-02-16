<template>
  <button :class="clsStyle" :disabled="disabled" @click="clickHandler">
    <nut-icon class="txt-icon" v-if="icon != ''" :type="icon" :color="color"></nut-icon>
    <span :style="{ color: color }">
      <slot></slot>
    </span>
  </button>
</template>
<script>
import Icon from './../icon/icon.vue';
export default {
  name: 'nut-button',
  props: {
    type: {
      type: String,
      default: ''
    },
    shape: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    label: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    }
  },
  components: {
    'nut-icon': Icon
  },
  computed: {
    clsStyle() {
      let cls = `nut-button ${this.type} ${this.shape} 
            ${this.small ? ' small' : ''} 
            ${this.block ? ' block' : ''} 
            ${this.label ? ' label' : ''}
            ${!this.$slots.default ? (this.small ? 'no-txt-small' : 'no-txt') : ''}`;
      return cls;
    }
  },
  methods: {
    clickHandler(event) {
      // 如果是loading就阻止点击
      if (this.disabled) {
        return;
      }
      this.$emit('click', event);
    }
  }
};
</script>
