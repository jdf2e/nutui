<template>
  <view :class="classes" :style="style" @click="onClick">
    <slot></slot>
    <Close v-if="closeable" class="nut-tag--close" width="12px" height="12px" @click="onClose"></Close>
  </view>
</template>

<script lang="ts">
import { PropType, CSSProperties, computed } from 'vue';
import { createComponent } from '@/packages/utils';
import { Close } from '@nutui/icons-vue';
import { TagType } from './types';
const { create } = createComponent('tag');

export default create({
  props: {
    color: {
      type: String,
      default: ''
    },
    textColor: {
      type: String,
      default: ''
    },
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
    const classes = computed(() => {
      const prefixCls = 'nut-tag';
      return {
        [prefixCls]: true,
        [`${prefixCls}--${props.type}`]: props.type,
        [`${prefixCls}--plain`]: props.plain,
        [`${prefixCls}--round`]: props.round,
        [`${prefixCls}--mark`]: props.mark
      };
    });

    // 综合考虑 textColor、color、plain 组合使用时的效果
    const style = computed<CSSProperties>(() => {
      const style: CSSProperties = {};
      // 标签内字体颜色
      if (props.textColor) {
        style.color = props.textColor;
      } else if (props.color && props.plain) {
        style.color = props.color;
      }
      // 标签背景与边框颜色
      if (props.plain) {
        style.background = '#fff';
        style['border-color'] = props.color;
      } else if (props.color) {
        style.background = props.color;
      }
      return style;
    });

    const onClose = (event: Event) => {
      event.stopPropagation();
      emit('close', event);
    };

    const onClick = (event: Event) => {
      emit('click', event);
    };

    return {
      classes,
      style,
      onClose,
      onClick
    };
  }
});
</script>
