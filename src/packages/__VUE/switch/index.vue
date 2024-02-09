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

<script lang="ts">
import { computed, toRef, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { Loading1 } from '@nutui/icons-vue';
import { useFormDisabled } from '../form/common';
const { componentName, create } = createComponent('switch');

export default create({
  components: { Loading1 },
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    activeText: {
      type: String,
      default: ''
    },
    inactiveText: {
      type: String,
      default: ''
    },
    activeValue: {
      type: [String, Number, Boolean],
      default: true
    },
    inactiveValue: {
      type: [String, Number, Boolean],
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ['change', 'update:modelValue', 'update:loading'],
  setup(props, { emit }) {
    const disabled = useFormDisabled(toRef(props, 'disable'));
    const isActive = computed(() => props.modelValue === props.activeValue);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [isActive.value ? 'nut-switch-open' : 'nut-switch-close']: true,
        [`${prefixCls}-disable`]: disabled.value,
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

    return {
      classes,
      style,
      isActive,
      onClick
    };
  }
});
</script>
