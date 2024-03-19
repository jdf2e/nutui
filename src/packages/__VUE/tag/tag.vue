<template>
  <view :class="classes" :style="style" @click="onClick">
    <slot></slot>
    <Close v-if="closeable" class="nut-tag--close" width="12px" height="12px" @click.stop="onClose"></Close>
  </view>
</template>

<script setup lang="ts">
import { CSSProperties, computed } from 'vue';
import { Close } from '@nutui/icons-vue';
import { TagType } from './types';

defineOptions({
  name: 'NutTag'
});

export type TagProps = Partial<{
  color: string;
  textColor: string;
  type: TagType;
  plain: boolean;
  round: boolean;
  mark: boolean;
  closeable: boolean;
}>;

const props = withDefaults(defineProps<TagProps>(), {
  color: '',
  textColor: '',
  type: 'default',
  plain: false,
  round: false,
  mark: false,
  closeable: false
});

const emits = defineEmits(['close', 'click']);

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

const style = computed<CSSProperties>(() => {
  const style: CSSProperties = {};
  if (props.textColor) {
    style.color = props.textColor;
  } else if (props.color && props.plain) {
    style.color = props.color;
  }
  if (props.plain) {
    style.background = '#fff';
    style.borderColor = props.color;
  } else if (props.color) {
    style.background = props.color;
  }
  return style;
});

const onClose = (event: Event) => {
  emits('close', event);
};

const onClick = (event: Event) => {
  emits('click', event);
};
</script>
