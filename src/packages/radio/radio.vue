<template>
  <label :class="['nut-radio','nut-radio-size-'+currentSize]" @click="clickEvt">
    <input
      type="radio"
      :value="currentValue"
      :class="{'nut-radio-ani':isAnimated}"
      :checked="currentValue === label"
      :disabled="isDisabled"
      :label="label"
    >
    <span class="nut-radio-label">
      <slot></slot>
    </span>
  </label>
</template>
<script>
import findCptUpward from "../../mixins/findCptUpward/index.js";

export default {
  name: "nut-radio",
  mixins: [findCptUpward],
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    label: [String, Number, Boolean],
    size: {
      type: String,
      default: "base"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      parent: null
    };
  },
  computed: {
    currentValue: {
      get() {
        return this.parent ? this.parent.value : this.value;
      },

      set(val) {
        (this.parent || this).$emit("input", val);
      }
    },
    currentSize() {
      return this.parent ? this.parent.size || this.size : this.size;
    },
    isDisabled() {
      return this.parent
        ? this.parent.disabled || this.disabled
        : this.disabled;
    },
    isAnimated() {
      return this.parent
        ? this.parent.animated && this.animated
        : this.animated;
    }
  },
  created() {
    this.findCptUpward("nut-radiogroup");
  },
  methods: {
    clickEvt(event) {
      if (this.isDisabled) {
        return false;
      }
      this.currentValue = this.label;
    }
  }
};
</script>