<template>
  <div
    class="nut-radio"
    :class="{
      'nut-radio-list-radio': type === 'radio',
      'nut-radio-list-label': type === 'label',
      'nut-radio-list-list': type === 'list',
    }"
  >
    <input
      type="radio"
      :value="currentValue"
      :class="{ 'nut-radio-ani': isAnimated }"
      :checked="checked"
      :disabled="isDisabled"
      :label="label"
      :name="name"
      @input="valChange"
    />
    <div class="text-box">{{ text }}<slot></slot></div>
    <div class="box-border"></div>
  </div>
</template>
<script>
import findCptUpward from '../../mixins/findCptUpward/index.js';

export default {
  name: 'nut-radio',
  mixins: [findCptUpward],
  props: {
    value: {
      type: [String, Number, Boolean, Function],
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    label: [String, Number, Boolean],
    size: {
      type: String,
      default: 'base',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    animated: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: 'radio',
    },
    name: {
      type: String,
    },
    text: String,
    radioData: {
      type: Object,
      default() {},
    },
  },
  data() {
    return {
      parent: null,
    };
  },
  computed: {
    currentValue: {
      get() {
        return this.parent ? this.parent.value : this.value;
      },

      set(val) {
        (this.parent || this).$emit('input', val);
      },
    },
    currentSize() {
      return this.parent ? this.parent.size || this.size : this.size;
    },
    isDisabled() {
      return this.parent ? this.parent.disabled || this.disabled : this.disabled;
    },
    isAnimated() {
      return this.parent ? this.parent.animated && this.animated : this.animated;
    },
  },
  created() {
    this.findCptUpward('nut-radiogroup');
  },
  methods: {
    clickEvt(event) {
      if (this.isDisabled) {
        return false;
      }
      this.currentValue = this.label;
    },
    valChange(e) {
      let radioData = this.radioData;
      this.$emit('radioChange', radioData);
    },
  },
};
</script>
