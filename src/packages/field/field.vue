<template>
  <form action="javascript:return true" :class="['nut-field', { 'nut-filed-disabled': disabled }]">
    <span class="nut-require" v-if="requireShow">*</span>
    <span class="nut-field-label" v-if="label">{{ label }}</span>

    <div v-if="type === 'textarea'" class="nut-text-core">
      <textarea
        @change="$emit('change', currentValue)"
        ref="textarea"
        :maxlength="maxLength"
        :placeholder="placeholder"
        :rows="rows"
        :disabled="disabled"
        :readonly="readonly"
        @input="txtIptLength"
        v-model="currentValue"
      >
      </textarea>
      <span class="nut-text-limit" v-if="limitShow"
        ><span :class="[{ 'nut-field-over': overLmitNumber }]">{{ txtNum }}</span
        >/{{ maxLength }}</span
      >
    </div>
    <input
      :class="['input-' + state]"
      @change="$emit('change', currentValue)"
      @focus="focus"
      ref="input"
      :style="initCssStyle()"
      class="nut-field-core"
      :placeholder="placeholder"
      :number="type === 'number'"
      v-else
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      :value="currentValue"
      @input="handleInput"
    />

    <div @click="handleClear" class="nut-textinput-clear" v-if="!disableClear" v-show="currentValue && type !== 'textarea' && active">
      <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path
          d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm2.8 9.7c.3.3.3.8 0 1.1s-.8.3-1.1 0L8 9.1l-1.7 1.7c-.3.3-.8.3-1.1 0-.3-.3-.3-.8 0-1.1L6.9 8 5.2 6.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0L8 6.9l1.7-1.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1L9.1 8l1.7 1.7z"
        />
      </svg>
    </div>

    <div class="nut-field-other">
      <slot></slot>
    </div>
    <div class="nut-field-error" v-if="state" :class="['is-' + state]"> </div>
  </form>
</template>
<script>
export default {
  name: 'nut-field',
  data() {
    return {
      active: false,
      txtNum: 0,
      overLmitNumber: false,
      currentValue: this.value,
    };
  },
  props: {
    type: {
      type: String,
      default: 'text',
    },
    textAlign: {
      type: String,
      default: 'right',
    },
    limitShow: {
      type: Boolean,
      default: true,
    },
    maxLength: {
      type: String,
      default: '',
    },
    state: {
      type: String,
      default: '',
    },
    requireShow: {
      type: Boolean,
      default: false,
    },
    rows: String,
    label: String,
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    disableClear: {
      type: Boolean,
      default: false,
    },
    autosize: {
      type: Boolean,
      default: false,
    },
    value: String,
  },
  mounted() {
    this.txtNum = this.value.length;
    if (this.limitShow == false) {
      this.maxLength = '';
    }
  },
  methods: {
    initCssStyle() {
      return `text-align:${this.textAlign}`;
    },
    doCloseActive() {
      this.active = false;
    },
    focus() {
      if (this.disabled || this.readonly) return;
      this.active = true;
    },
    handleInput(evt) {
      this.currentValue = evt.target.value;
      this.$emit('input-func', evt.target.value);
      this.$emit('input', evt.target.value);
    },
    handleClear() {
      if (this.disabled || this.readonly) return;
      this.currentValue = '';
    },
    txtIptLength(event) {
      const data = event.target.value;
      const txtLength = data.length;
      this.txtNum = txtLength;
      console.log(txtLength, this.maxLength);
      if (txtLength >= this.maxLength * 1) {
        this.overLmitNumber = true;
        this.$toast.text(`已经输入${this.maxLength}字`);
        this.$emit('error-func');
      } else {
        this.overLmitNumber = false;
      }
      if (this.autosize) {
        let height = this.$refs.textarea.scrollHeight;
        if (height) {
          this.$refs.textarea.style.height = height + 'px';
        }
      }
      this.$emit('input-func', data);
      this.$emit('input', data);
    },
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      this.$emit('input', val);
    },
  },
};
</script>
