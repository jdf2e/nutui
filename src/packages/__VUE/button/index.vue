<template>
  <view :class="classes" :style="getStyle" @click="handleClick">
    <view class="nut-button__wrap">
      <Loading class="nut-icon-loading" v-if="loading" />
      <slot name="icon" v-if="$slots.icon && !loading"></slot>
      <view :class="{ 'nut-button__text': $slots.icon || loading }" v-if="$slots.default">
        <slot></slot>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { PropType, CSSProperties, toRefs, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { ButtonShape, ButtonType, ButtonSize } from './type';
import { Loading } from '@nutui/icons-vue';
const { componentName, create } = createComponent('button');
export default create({
  components: { Loading },
  props: {
    color: String,
    shape: {
      type: String as PropType<ButtonShape>,
      default: 'round'
    },
    plain: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String as PropType<ButtonType>,
      default: 'default'
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: 'normal'
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const { type, size, shape, disabled, loading, color, plain, block } = toRefs(props);

    const handleClick = (event: MouseEvent) => {
      if (!loading.value && !disabled.value) {
        emit('click', event);
      }
    };

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--${type.value}`]: type.value,
        [`${prefixCls}--${size.value}`]: size.value,
        [`${prefixCls}--${shape.value}`]: shape.value,
        [`${prefixCls}--plain`]: plain.value,
        [`${prefixCls}--block`]: block.value,
        [`${prefixCls}--disabled`]: disabled.value,
        [`${prefixCls}--loading`]: loading.value
      };
    });

    const getStyle = computed(() => {
      const style: CSSProperties = {};
      if (color?.value) {
        if (plain.value) {
          style.color = color.value;
          style.background = '#fff';
          if (!color.value?.includes('gradient')) {
            style.borderColor = color.value;
          }
        } else {
          style.color = '#fff';
          style.background = color.value;
        }
      }

      return style;
    });

    return {
      handleClick,
      classes,
      getStyle
    };
  }
});
</script>
