<template>
  <!-- 气泡弹出层  按钮 -->
  <view style="display: inline-block" :class="customClass" @click.stop="openPopover" ref="reference">
    <slot name="reference"></slot
  ></view>

  <nut-popup
    ref="popoverRef"
    :pop-class="classes"
    v-model:visible="showPopup"
    :overlay="false"
    @clickOverlay="clickOverlay"
  >
    <!-- 气泡弹出层  箭头 -->
    <view :class="popoverArrow" v-if="showArrow"> </view>
    <!-- 气泡弹出层  内容 -->
    <slot name="content"></slot>
    <view class="popover-menu" :class="popoverContent" ref="popoverMenu">
      <view
        v-for="(item, index) in list"
        :key="index"
        :class="[item.className, { 'popover-menu-item': true, disabled: item.disabled }]"
        @click.stop="chooseItem(item, index)"
      >
        <slot v-if="item.icon"> <nut-icon v-bind="$attrs" class="item-img" :name="item.icon"></nut-icon></slot>
        <view class="popover-menu-name">{{ item.name }}</view>
      </view>
    </view>
  </nut-popup>
</template>
<script lang="ts">
import { onMounted, computed, watch, ref, PropType, toRefs, nextTick, onUnmounted } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('popover');
import Popup, { popupProps } from '../popup/index.vue';
import Button from '../button/index.vue';
import { createPopper } from '@popperjs/core/lib/popper-lite';
import offsetModifier from '@popperjs/core/lib/modifiers/offset';
import type { Instance, Placement } from '@popperjs/core';

export default create({
  inheritAttrs: false,
  components: {
    [Popup.name]: Popup,
    [Button.name]: Button
  },
  props: {
    ...popupProps,
    list: {
      type: Array,
      default: []
    },

    theme: {
      type: String as PropType<import('./type').PopoverTheme>,
      default: 'light'
    },

    location: {
      type: String as PropType<import('./type').PopoverLocation>,
      default: 'bottom'
    },
    // 位置出现的偏移量
    offset: {
      type: Array,
      default: [0, 12]
    },
    customClass: {
      type: String,
      default: ''
    },
    showArrow: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update', 'update:visible', 'close', 'choose', 'open'],
  setup(props, { emit }) {
    let popper: Instance | null;
    const reference = ref();
    const popoverRef = ref();

    const showPopup = ref(props.visible);

    const { theme, location } = toRefs(props);

    const classes = computed(() => {
      const prefixCls = componentName;

      return `${prefixCls} ${prefixCls}--${theme.value}`;
    });

    const popoverContent = computed(() => {
      const prefixCls = 'popover-content';
      return {
        [prefixCls]: true,
        [`${prefixCls}--${location.value}`]: location.value
      };
    });

    const popoverArrow = computed(() => {
      const prefixCls = 'popover-arrow';
      return {
        [prefixCls]: true,
        [`${prefixCls}--${location.value}`]: location.value
      };
    });

    const createPopperInstance = () => {
      if (reference.value && popoverRef.value) {
        return createPopper(reference.value, popoverRef.value.popupRef, {
          placement: props.location,
          modifiers: [
            {
              name: 'computeStyles',
              options: {
                adaptive: false,
                gpuAcceleration: false
              }
            },
            Object.assign({}, offsetModifier, {
              options: {
                offset: props.offset
              }
            })
          ]
        });
      }
      return null;
    };

    const clickOverlay = () => {
      // console.log('关闭');
    };

    const uploadLocation = () => {
      nextTick(() => {
        if (!showPopup.value) return;
        if (!popper) {
          popper = createPopperInstance();
        } else {
          popper.setOptions({
            placement: props.location
          });
        }
      });
    };

    const clickAway = (event: Event) => {
      const element = reference.value;
      if (element && !element.contains(event.target)) {
        closePopover();
      }
    };
    onMounted(() => {
      window.addEventListener('click', clickAway, true);
    });

    onUnmounted(() => {
      window.removeEventListener('click', clickAway, true);
    });

    watch(
      () => props.visible,
      (value) => {
        showPopup.value = value;
        uploadLocation();
      }
    );

    watch(
      () => props.location,
      (value) => {
        uploadLocation();
      }
    );

    const update = (val: boolean) => {
      emit('update', val);
      emit('update:visible', val);
    };

    const openPopover = () => {
      update(!props.visible);
      emit('open');
    };

    const closePopover = () => {
      emit('close');
      emit('update:visible', false);
    };

    const chooseItem = (item: any, index: number) => {
      if (item.disabled) {
        return;
      }
      emit('choose', item, index);
    };

    return {
      classes,
      showPopup,
      openPopover,
      popoverContent,
      popoverArrow,
      closePopover,
      chooseItem,
      reference,
      popoverRef,
      clickOverlay
    };
  }
});
</script>
