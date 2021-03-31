<template>
  <view :class="['nut-checkboxgroup', 'nut-checkboxgroup-' + direction]">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { watch, provide, getCurrentInstance } from 'vue';
import { createComponent } from '@/utils/create';
const { create } = createComponent('checkboxgroup');

export default create({
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'normal'
    },
    animation: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: 'horizontal'
    }
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { slots, emit }) {
    watch(
      () => props.modelValue,
      value => {
        emit('change', value);
      }
    );

    function useExtend(apis: any) {
      const instance = getCurrentInstance();
      if (instance) {
        Object.assign(instance.proxy, apis);
      }
    }

    const toggleAll = (checked: boolean) => {
      const children = (slots as any)?.default();
      if (checked === false) {
        emit('update:modelValue', []);
      } else if (checked === true) {
        const labels = children.map(
          (item: { props: { label: any } }) => item.props?.label
        );
        emit('update:modelValue', labels);
      } else {
        const names = children
          .filter((item: { props: { label: any } }) => {
            const label = item.props?.label;
            const idx = props.modelValue.indexOf(label);
            if (idx == -1) {
              return label;
            }
          })
          .map((item: { props: { label: any } }) => item.props?.label);
        emit('update:modelValue', names);
      }
    };
    useExtend({ toggleAll });

    provide('checkboxgroup', {
      parentNode: true,
      changeVal: (val: []) => {
        if (props.disabled) {
          return false;
        }
        emit('update:modelValue', val);
      }
    });
  }
});
</script>
