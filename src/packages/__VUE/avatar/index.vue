<template>
  <view :style="styles" :class="classes" ref="avatarRef">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { toRefs, computed, inject, reactive, ref, Ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('avatar');
export default create({
  props: {
    size: {
      type: String,
      default: ''
    },
    shape: {
      type: String,
      default: 'round'
    },
    bgColor: {
      type: String,
      default: '#eee'
    },
    color: {
      type: String,
      default: '#666'
    }
  },
  setup(props) {
    const { size, shape, bgColor, color } = toRefs(props);
    const sizeValue = ['large', 'normal', 'small'];
    const avatarGroup: any = inject('avatarGroup', null);
    const avatarRef = ref(null) as Ref;
    const visible = reactive({
      lightTheme: false
    });
    const state = reactive({
      index: 1,
      showMax: false, // 是否显示的最大头像个数
      maxIndex: 0 // avatarGroup里的avatar的个数
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`nut-avatar-${size.value || avatarGroup?.props?.size || 'normal'}`]: true,
        [`nut-avatar-${shape.value || avatarGroup?.props?.shape || 'normal'}`]: true
      };
    });

    const styles = computed(() => {
      return {
        width: sizeValue.indexOf(size.value) > -1 ? '' : `${size.value}px`,
        height: sizeValue.indexOf(size.value) > -1 ? '' : `${size.value}px`,
        backgroundColor: `${bgColor.value}`,
        color: `${color.value}`,
        marginLeft: state.index != 1 && (avatarGroup?.props?.span ? `${avatarGroup?.props?.span}px` : ''),
        zIndex: avatarGroup?.props?.zIndex == 'right' ? `${Math.abs(state.maxIndex - state.index)}` : ''
      } as any;
    });

    return {
      classes,
      styles,
      avatarGroup,
      visible,
      avatarRef,
      ...toRefs(state)
    };
  }
});
</script>
