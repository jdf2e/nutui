<template>
  <view :class="classes" :style="getStyle()" @click="onClick">
    <slot></slot>
    <nut-icon class="nut-tag--close" v-if="closeable" name="close" size="12" @click="onClose"></nut-icon>
  </view>
</template>

<script lang="ts">
import { PropType, CSSProperties, computed, toRefs } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('tag');

export default create({
  props: {
    color: { type: String, default: '' },
    textColor: { type: String, default: '' },
    type: {
      type: String as PropType<import('./type').TagType>,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    mark: {
      type: Boolean,
      default: false
    },
    closeable: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close', 'click'],
  setup(props, { emit }) {
    const { type, color, plain, round, mark, textColor } = toRefs(props);

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--${type.value}`]: type.value,
        [`${prefixCls}--plain`]: plain.value,
        [`${prefixCls}--round`]: round.value,
        [`${prefixCls}--mark`]: mark.value
      };
    });

    // 综合考虑 textColor、color、plain 组合使用时的效果
    const getStyle = (): CSSProperties => {
      const style: CSSProperties = {};
      // 标签内字体颜色
      if (textColor.value) {
        style.color = textColor.value;
      } else if (color.value && plain.value) {
        style.color = color.value;
      }
      // 标签背景与边框颜色
      if (plain.value) {
        style.background = '#fff';
        style['border-color'] = color.value;
      } else if (color.value) {
        style.background = color.value;
      }
      return style;
    };

    const onClose = (event: MouseEvent) => {
      event.stopPropagation();
      emit('close', event);
    };

    const onClick = (event: MouseEvent) => {
      emit('click', event);
    };

    return {
      classes,
      getStyle,
      onClose,
      onClick
    };
  }
});
</script>
