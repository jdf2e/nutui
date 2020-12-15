<template>
  <div class="nut-input">
    <span class="nut-require" v-if="requireShow">*</span>
    <span class="nut-field-label" v-if="label">{{ label }}</span>

    <div v-if="type === 'textarea'" class="nut-text-core">
      <textarea @input="txtIptLength" v-model="currentValue"> </textarea>
      <span class="nut-text-limit" v-if="limitShow"
        ><span :class="[{ 'nut-field-over': overLmitNumber }]">{{
          txtNum
        }}</span
        >/{{ maxLength }}</span
      >
    </div>
    <input
      v-else
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      :value="currentValue"
      @input="handleInput"
    />

    <div
      @click="handleClear"
      class="nut-textinput-clear"
      v-if="!disableClear"
      v-show="currentValue && type !== 'textarea' && active"
    >
      <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path
          d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm2.8 9.7c.3.3.3.8 0 1.1s-.8.3-1.1 0L8 9.1l-1.7 1.7c-.3.3-.8.3-1.1 0-.3-.3-.3-.8 0-1.1L6.9 8 5.2 6.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0L8 6.9l1.7-1.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1L9.1 8l1.7 1.7z"
        />
      </svg>
    </div>
  </div>
</template>
<script lang="ts">
//import { toRefs } from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('input');

export default create({
  props: {
    type: {
      type: String,
      default: 'text'
    },
    textAlign: {
      type: String,
      default: 'right'
    },
    limitShow: {
      type: Boolean,
      default: true
    },
    maxLength: {
      type: String,
      default: ''
    },
    requireShow: {
      type: Boolean,
      default: false
    },
    rows: String,
    label: String,
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    autosize: {
      type: Boolean,
      default: false
    },
    value: String
  },
  components: {},
  emits: ['click'],

  setup(props, { emit }) {
    console.log('componentName', componentName);

    // const { name, txt } = toRefs(props);

    const handleClick = (event: Event) => {
      emit('click', event);
    };

    return { handleClick };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
