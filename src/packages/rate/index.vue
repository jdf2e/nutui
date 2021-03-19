<template>
  <view :class="classes">
    <view
      class="nut-rate-item"
      v-for="n in count"
      :key="n"
      @click="onClick($event, n)"
      :style="{ marginRight: spacing + 'px' }"
    >
      <nut-icon
        :size="iconSize"
        :color="n <= modelValue ? (disabled ? '#ccc' : activeColor) : '#ccc'"
        :name="n <= modelValue ? checkedIcon : uncheckedIcon"
      />
      <nut-icon
        v-if="allowHalf && modelValue + 1 > n"
        :class="{ 'nut-rate-item__icon-half': allowHalf }"
        :size="iconSize"
        :color="activeColor"
        :name="checkedIcon"
      />
    </view>
  </view>
</template>
<script lang="ts">
import { computed } from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('rate');
export default create({
  props: {
    count: {
      type: [String, Number],
      default: 5
    },
    modelValue: {
      type: [String, Number],
      default: 0
    },
    iconSize: {
      type: [String, Number],
      default: 18
    },
    activeColor: {
      type: String,
      default: '#FA200C'
    },
    uncheckedIcon: {
      type: String,
      default: 'star-n'
    },
    checkedIcon: {
      type: String,
      default: 'star-fill-n'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    spacing: {
      type: [String, Number],
      default: 14
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const onClick = (e: Event, index: number) => {
      e.preventDefault();
      e.stopPropagation();
      if (props.disabled || props.readonly) return;
      let value = 0;
      if (index === 1 && props.modelValue === index) {
      } else {
        value = index;
        if (props.allowHalf) {
          if ((e?.target as Element).className.includes('__icon-half')) {
            value -= 0.5;
          }
        }
      }
      emit('update:modelValue', value);
      emit('change', value);
    };

    return {
      classes,
      onClick
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
