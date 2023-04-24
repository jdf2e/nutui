<template>
  <view :class="classes" @click="onClick" :style="style">
    <view class="nut-switch-button">
      <slot name="icon" v-if="loading">
        <Loading1 name="loading1" :color="activeColor" />
      </slot>
      <template v-if="activeText">
        <view class="nut-switch-label open" v-show="isActive">{{ activeText }}</view>
        <view class="nut-switch-label close" v-show="!isActive">{{ inactiveText }}</view>
      </template>
    </view>
  </view>
</template>

<script lang="ts">
import { computed, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { Loading1 } from '@nutui/icons-vue-taro';
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
    const isActive = computed(() => props.modelValue === props.activeValue);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [isActive.value ? 'nut-switch-open' : 'nut-switch-close']: true,
        [`${prefixCls}-disable`]: props.disable,
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
      if (props.disable || props.loading) return;
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
