<template>
  <view
    :style="!showMax ? styles : maxStyles"
    :class="classes"
    @click="activeAvatar(e)"
    ref="avatarRef"
    v-if="showMax || !avatarGroup?.props?.maxCount || index <= avatarGroup?.props?.maxCount"
  >
    <template v-if="!avatarGroup?.props?.maxCount || index <= avatarGroup?.props?.maxCount">
      <template v-if="url">
        <img :src="url" :alt="alt" @error="onError" />
      </template>
      <template v-else-if="icon">
        <nut-icon v-bind="$attrs" class="icon" :name="iconStyles"></nut-icon>
      </template>
      <view class="text" v-if="isShowText">
        <slot></slot>
      </view>
    </template>
    <!-- 折叠头像 -->
    <template v-if="showMax">
      <view class="text">
        {{
          avatarGroup?.props?.maxContent
            ? avatarGroup?.props?.maxContent
            : `+ ${maxIndex - avatarGroup?.props?.maxCount}`
        }}
      </view>
    </template>
  </view>
</template>
<script lang="ts">
import { toRefs, onMounted, computed, inject, reactive, ref } from 'vue';
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
    },
    url: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  emits: ['active-avatar', 'onError'],
  setup(props, { emit, slots }) {
    const { size, shape, bgColor, color, icon } = toRefs(props);
    const sizeValue = ['large', 'normal', 'small'];
    const avatarGroup: any = inject('avatarGroup', null);
    const avatarRef = ref(null);
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
        // console.log('children', children);
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

    const iconStyles = computed(() => {
      return !!icon.value ? icon.value : '';
    });

    const isShowText = computed(() => {
      return slots.default;
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

    const activeAvatar = (event: any) => {
      emit('active-avatar', event);
    };

    const onError = (event: any) => {
      emit('onError', event);
    };

    return {
      classes,
      styles,
      iconStyles,
      isShowText,
      maxStyles,
      activeAvatar,
      onError,
      avatarGroup,
      visible,
      avatarRef,
      ...toRefs(state)
    };
  }
});
</script>
