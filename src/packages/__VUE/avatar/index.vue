<template>
  <view
    :style="!showMax ? styles : maxStyles"
    :class="classes"
    ref="avatarRef"
    v-if="showMax || !avatarGroup?.props?.maxCount || index <= avatarGroup?.props?.maxCount"
  >
    <template v-if="!avatarGroup?.props?.maxCount || index <= avatarGroup?.props?.maxCount">
      <slot></slot>
    </template>
    <!-- 折叠头像 -->
    <template v-if="showMax && avatarGroup?.props?.maxCount">
      {{
        avatarGroup?.props?.maxContent ? avatarGroup?.props?.maxContent : `+ ${maxIndex - avatarGroup?.props?.maxCount}`
      }}
    </template>
  </view>
</template>
<script lang="ts">
import { toRefs, onMounted, computed, inject, reactive, ref, Ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('avatar');
export default /* @__PURE__ */ create({
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

    onMounted(() => {
      const children = avatarGroup?.avatarGroupRef?.value?.children;
      if (children) {
        avatarLength(children);
      }
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
      };
    });

    const maxStyles = computed(() => {
      return {
        backgroundColor: `${avatarGroup?.props?.maxBgColor}`,
        color: `${avatarGroup?.props?.maxColor}`
      };
    });

    const avatarLength = (children: any) => {
      state.maxIndex = children.length;
      for (let i = 0; i < children.length; i++) {
        if (children[i] && children[i].classList && children[i].classList[0] == 'nut-avatar') {
          children[i].setAttribute('data-index', i + 1);
        }
        // console.log('console', i, children[i]);
      }

      state.index = avatarRef?.value?.dataset?.index;
      if (state.index == state.maxIndex && state.index != avatarGroup?.props?.maxCount) {
        state.showMax = true;
      }
    };

    return {
      classes,
      styles,
      maxStyles,
      avatarGroup,
      visible,
      avatarRef,
      ...toRefs(state)
    };
  }
});
</script>
