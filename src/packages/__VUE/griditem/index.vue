<template>
  <view :class="rootClass" :style="rootStyle" @click="handleClick">
    <view :class="contentClass">
      <template v-if="$slots.default">
        <slot></slot>
      </template>
      <template v-else>
        <slot v-if="$slots.icon" name="icon"></slot>
        <nut-icon
          v-else
          :name="iconProps.name"
          v-bind="$attrs"
          :size="iconProps.size"
          :color="iconProps.color"
        ></nut-icon>

        <slot v-if="$slots.text" name="text"></slot>
        <view v-else class="nut-grid-item__text">{{ text }}</view>
      </template>
    </view>
  </view>
</template>

<script lang="ts">
import { computed, CSSProperties } from 'vue';
import { useRouter } from '@/packages/utils/useRoute';
import { createComponent } from '@/packages/utils/create';
import { pxCheck } from '@/packages/utils/pxCheck';
import { useInject } from '@/packages/utils/useRelation/useInject';
import { GRID_KEY, GridProps } from '../grid/common';
const { create, componentName } = createComponent('grid-item');

export default create({
  props: {
    text: {
      type: String
    },
    // icon
    icon: {
      type: String
    },
    iconSize: {
      type: [Number, String]
    },
    iconColor: {
      type: String
    },
    // router
    to: {
      type: [String, Object]
    },
    url: {
      type: String,
      default: ''
    },
    replace: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const Parent = useInject<{ props: Required<GridProps> }>(GRID_KEY);
    if (!Parent.parent) return;
    const index = Parent.index;
    const parent = Parent.parent.props;

    // root
    const rootClass = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const rootStyle = computed(() => {
      const style: CSSProperties = {
        flexBasis: `${100 / +parent.columnNum}%`
      };

      if (parent.square) {
        style.paddingTop = `${100 / +parent.columnNum}%`;
      } else if (parent.gutter) {
        style.paddingRight = pxCheck(parent.gutter);
        if (index.value >= parent.columnNum) {
          style.marginTop = pxCheck(parent.gutter);
        }
      }

      return style;
    });

    // content
    const contentClass = computed(() => {
      const prefixCls = `${componentName}__content`;
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}--border`]: parent.border,
        [`${prefixCls}--surround`]: parent.border && parent.gutter,
        [`${prefixCls}--center`]: parent.center,
        [`${prefixCls}--square`]: parent.square,
        [`${prefixCls}--reverse`]: parent.reverse,
        [`${prefixCls}--${parent.direction}`]: !!parent.direction,
        [`${prefixCls}--clickable`]: parent.clickable || props.to || props.url
      };
    });

    // icon
    const iconProps = computed(() => {
      return {
        name: props.icon,
        size: props.iconSize || parent.iconSize,
        color: props.iconColor || parent.iconColor
      };
    });

    // click
    const router = useRouter();
    const handleClick = (event: Event) => {
      emit('click', event);

      if (props.to && router) {
        router[props.replace ? 'replace' : 'push'](props.to);
      } else if (props.url) {
        props.replace ? location.replace(props.url) : (location.href = props.url);
      }
    };

    return {
      rootClass,
      rootStyle,
      contentClass,
      iconProps,
      handleClick
    };
  }
});
</script>
