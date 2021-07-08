<template>
  <picker
    mode="date"
    @change="onChange"
    :value="value"
    :start="start"
    :end="end"
    :fields="fields"
  >
    <slot></slot>
  </picker>
</template>
<script lang="ts">
import { toRefs } from 'vue';
import { createComponent } from '../../utils/create';
const { create } = createComponent('datepicker');

export default create({
  children: [],
  props: {
    value: {
      type: String,
      default: new Date()
    },
    start: {
      type: String,
      default: '1970-01-01'
    },
    end: {
      type: String,
      default: '2999-01-01'
    },
    fields: {
      type: String,
      default: 'day'
    }
  },
  emits: ['onChange'],

  setup(props, { emit }) {
    const onChange = (e: any) => {
      emit('onChange', e.detail.value);
    };
    return {
      confirm,
      onChange,
      ...toRefs(props)
    };
  }
});
</script>

<style lang="scss"></style>
