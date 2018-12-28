<template>
<label :class="['nut-radio','nut-radio-size-'+size]">
    <input 
    type="radio"
    :class="{'nut-radio-ani':animation}"
    :checked="value===label" 
    :disabled="disabled"
    :label="label"
    :value="value"
    @change="changeEvt"
    >
    <span class="nut-radio-label">
      <slot></slot>
    </span>
</label>
</template>
<script>
export default {
  name: "nut-radio",
  props: {
    value: {
        type: [String, Number, Boolean],
        default: false
    },
    label:{
      type: [String, Number, Boolean]
    },
    size: {
      type: String,
      default: 'base'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    animation: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  },
  mounted(){
    
  },
  methods: {
    changeEvt(event) {
      this.$emit("change", this.label);
      this.$emit('input', this.label);
    }
  }
};
</script>