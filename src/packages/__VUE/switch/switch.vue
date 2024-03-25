<template>
  <view :class="classes" :style="style" @click="onClick">
    <view class="nut-switch-button">
      <slot v-if="loading" name="icon">
        <Loading1 name="loading" :color="activeColor" />
      </slot>
      <template v-if="activeText">
        <view v-show="isActive" class="nut-switch-label open">{{ activeText }}</view>
        <view v-show="!isActive" class="nut-switch-label close">{{ inactiveText }}</view>
      </template>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { Loading1 } from '@nutui/icons-vue';
import { useFormDisabled } from '../form/common';

defineOptions({
  name: 'NutSwitch'
});

export type SwitchProps = Partial<{
  modelValue: string | number | boolean;
  disabled: boolean;
  activeColor: string;
  inactiveColor: string;
  activeText: string;
  inactiveText: string;
  activeValue: string | number | boolean;
  inactiveValue: string | number | boolean;
  loading: boolean;
  /**
   * @deprecated Please use `disabled` prop instead.
   */
  disable: boolean;
}>;

const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
  disabled: false,
  activeColor: '',
  inactiveColor: '',
  activeText: '',
  inactiveText: '',
  activeValue: true,
  inactiveValue: false,
  loading: false,
  disable: false
});

const emit = defineEmits(['change', 'update:modelValue', 'update:loading']);

const legacyDisabled = computed(() => props.disabled || props.disable);
const disabled = useFormDisabled(legacyDisabled);
const isActive = computed(() => props.modelValue === props.activeValue);
const classes = computed(() => {
  const prefixCls = 'nut-switch';
  return {
    [prefixCls]: true,
    [isActive.value ? 'nut-switch-open' : 'nut-switch-close']: true,
    [`${prefixCls}-disabled`]: disabled.value,
    [`${prefixCls}-base`]: true
  };
});

const style = computed(() => {
  return {
    backgroundColor: isActive.value ? props.activeColor : props.inactiveColor
  };
});

let updateType = '';

const onClick = (event: Event) => {
  if (props.loading || disabled.value) return;
  const value = isActive.value ? props.inactiveValue : props.activeValue;
  updateType = 'click';
  emit('update:modelValue', value);
  emit('change', value, event);
};

watch(
  () => props.modelValue,
  (v) => {
    if (updateType == 'click') {
      updateType = '';
    } else {
      emit('change', v);
    }
  }
);
</script>
