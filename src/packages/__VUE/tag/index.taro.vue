<template>
  <view :class="classes" :style="getStyle()" @click="onClick">
    <slot></slot>
    <nut-icon class="nut-tag--close" v-if="closeable" name="close" size="11" @click="onClose"></nut-icon>
  </view>
</template>

<script lang="ts">
import { PropType, CSSProperties, computed, toRefs } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('tag');

export type TagType = 'primary' | 'success' | 'danger' | 'warning';

export default create({
  props: {
    color: { type: String, default: '' },
    textColor: { type: String, default: '' },
    type: {
      type: String as PropType<TagType>,
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

    const getStyle = (): CSSProperties => {
      const style: CSSProperties = {};
      if (textColor.value) {
        style.color = textColor.value;
      } else if (color.value && plain.value) {
        style.color = color.value;
      }
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
      event.stopPropagation();
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
