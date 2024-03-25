<template>
  <view :class="classes" :style="baseStyle" @click="handleClick">
    <slot>
      <view v-if="$slots.icon" class="nut-cell__icon">
        <slot name="icon"></slot>
      </view>
      <view v-if="title || subTitle || $slots.title" class="nut-cell__title">
        <template v-if="subTitle">
          <slot name="title">
            <view class="title">{{ title }}</view>
          </slot>
          <view class="nut-cell__title-desc">{{ subTitle }}</view>
        </template>
        <template v-else>
          <slot name="title">
            {{ title }}
          </slot>
        </template>
      </view>
      <view
        v-if="desc || $slots.desc"
        class="nut-cell__value"
        :class="{ 'nut-cell__value--alone': !title && !subTitle && !$slots.title }"
        :style="descStyle"
      >
        <slot name="desc">
          {{ desc }}
        </slot>
      </view>
      <slot name="link">
        <Right v-if="isLink" class="nut-cell__link"></Right>
      </slot>
    </slot>
  </view>
</template>

<script lang="ts">
import type { PropType, CSSProperties } from 'vue'
import { computed } from 'vue'
import { createComponent } from '@/packages/utils/create'
import { pxCheck } from '@/packages/utils/pxCheck'
import { Right } from '@nutui/icons-vue-taro'
import { CellSize } from './types'
const { componentName, create } = createComponent('cell')
export default create({
  components: { Right },
  props: {
    title: { type: String, default: '' },
    subTitle: { type: String, default: '' },
    desc: { type: String, default: '' },
    descTextAlign: {
      type: String,
      default: 'right'
    },
    isLink: { type: Boolean, default: false },
    roundRadius: { type: [String, Number], default: '' },
    center: { type: Boolean, default: false },
    size: {
      type: String as PropType<CellSize>,
      default: 'normal'
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName
      return {
        [prefixCls]: true,
        [`${prefixCls}--clickable`]: props.isLink,
        [`${prefixCls}--center`]: props.center,
        [`${prefixCls}--large`]: props.size === 'large'
      }
    })

    const baseStyle = computed(() => {
      return {
        borderRadius: pxCheck(props.roundRadius)
      }
    })

    const descStyle = computed(() => {
      return {
        textAlign: props.descTextAlign
      } as CSSProperties
    })

    const handleClick = (event: Event) => {
      emit('click', event)
    }

    return {
      handleClick,
      classes,
      baseStyle,
      descStyle
    }
  }
})
</script>
