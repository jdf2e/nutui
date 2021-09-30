<template>
  <view @click="openPopover" :class="classes">
    <slot name="reference"></slot>

    <template v-if="showPopup">
      <view class="more-background" @click="closePopover"> </view>
      <view :class="popoverContent">
        <view :class="popoverArrow"> </view>

        <slot name="content"></slot>

        <view
          v-for="item in list"
          :key="item.name"
          :class="{ 'title-item': true, disabled: item.disabled }"
          @click="chooseItem(e, item)"
        >
          <slot v-if="item.icon"> <nut-icon class="item-img" :name="item.icon"></nut-icon></slot>
          <view class="title-name">{{ item.name }}</view>
        </view>
      </view>
    </template>
  </view>
</template>
<script lang="ts">
import { onMounted, computed, watch, ref, PropType, toRefs } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('popover');
import Popup, { popupProps } from '../popup/index.vue';
import Button from '../button/index.vue';

export type PopoverTheme = 'light' | 'dark';

export type PopoverLocation = 'bottom' | 'top' | 'left' | 'right';

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
      type: String as PropType<PopoverTheme>,
      default: 'light'
    },

    location: {
      type: String as PropType<PopoverLocation>,
      default: 'bottom'
    }
  },
  emits: ['update', 'update:visible', 'close', 'choose', 'openPopover'],
  setup(props, { emit }) {
    const showPopup = ref(props.visible);

    const { theme, location } = toRefs(props);

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--${theme.value}`]: theme.value
      };
    });

    const popoverContent = computed(() => {
      const prefixCls = 'popoverContent';
      return {
        [prefixCls]: true,
        [`${prefixCls}--${location.value}`]: location.value
      };
    });

    const popoverArrow = computed(() => {
      const prefixCls = 'popoverArrow';
      return {
        [prefixCls]: true,
        [`${prefixCls}--${location.value}`]: location.value
      };
    });

    onMounted(() => {});

    watch(
      () => props.visible,
      (value) => {
        showPopup.value = value;
      }
    );

    const update = (val: boolean) => {
      emit('update', val);
      emit('update:visible', val);
    };

    const openPopover = (event: Event) => {
      event.stopPropagation();
      event.preventDefault();
      update(!props.visible);
      emit('open');
    };

    const closePopover = (event: Event) => {
      event.stopPropagation();
      event.preventDefault();
      emit('close');
      emit('update:visible', false);
    };

    const chooseItem = (event: Event, item: any) => {
      event.stopPropagation();
      event.preventDefault();
      emit('choose');
    };

    return {
      classes,
      showPopup,
      openPopover,
      popoverContent,
      popoverArrow,
      closePopover,
      chooseItem
    };
  }
});
</script>
