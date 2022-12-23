<template>
  <view :class="classes" :style="getStyle()" @click="onClick">
    <slot></slot>
    <Close class="nut-tag--close" v-if="closeable" width="12px" height="12px" @click="onClose"></Close>
  </view>
</template>

<script lang="ts">
import { PropType, CSSProperties, computed, toRefs } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { Close } from '@nutui/icons-vue';
import { TagType } from './type';
const { componentName, create } = createComponent('tag');

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
  components: {
    Close
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
