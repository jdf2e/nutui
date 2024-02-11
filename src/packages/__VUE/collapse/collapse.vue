<template>
  <view class="nut-collapse">
    <slot></slot>
  </view>
</template>
<script setup lang="ts">
import { provide, ref, watch } from 'vue';
import { COLLAPSE_KEY, type CollapseValue } from './types';

defineOptions({
  name: 'NutCollapse'
});

export type CollapseProps = Partial<{
  modelValue: CollapseValue;
  accordion: boolean;
}>;

const props = withDefaults(defineProps<CollapseProps>(), {
  modelValue: '',
  accordion: false
});

const emit = defineEmits(['update:modelValue', 'change']);

const innerValue = ref(props.modelValue || (props.accordion ? '' : []));

watch(
  () => props.modelValue,
  (val) => {
    innerValue.value = val;
  }
);

const changeVal = (val: string | number | Array<string | number>, name: string | number, status = true) => {
  innerValue.value = val;
  emit('update:modelValue', val);
  emit('change', val, name, status);
};

const updateVal = (name: string | number) => {
  if (props.accordion) {
    if (innerValue.value === name) {
      changeVal('', name, false);
    } else {
      changeVal(name, name, true);
    }
  } else {
    if (Array.isArray(innerValue.value)) {
      if (innerValue.value.includes(name)) {
        const newValue = innerValue.value.filter((v: string | number) => v !== name);
        changeVal(newValue, name, false);
      } else {
        const newValue = innerValue.value.concat([name]);
        changeVal(newValue, name, true);
      }
    } else {
      console.warn('[NutUI] <Collapse> 未开启手风琴模式时 v-model 应为数组');
    }
  }
};

const isExpanded = (name: string | number) => {
  if (props.accordion) {
    return innerValue.value === name;
  } else if (Array.isArray(innerValue.value)) {
    return innerValue.value.includes(name);
  }
  return false;
};

provide(COLLAPSE_KEY, {
  updateVal,
  isExpanded
});
</script>
