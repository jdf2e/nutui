<template>
  <div @click="openPopover()" :class="classes">
    <slot name="reference"></slot>

    <template v-if="showPopup">
      <div class="more-background" @click="closePopover()"> </div>
      <div :class="popoverContent">
        <div :class="popoverArrow"> </div>

        <slot name="content"></slot>

        <div
          v-for="item in iconItemList"
          :key="item.name"
          :class="{ 'title-item': true, disabled: item.disabled }"
        >
          <slot v-if="item.icon">
            <nut-icon class="item-img" :name="item.icon"></nut-icon
          ></slot>
          <div class="title-name">{{ item.name }}</div>
        </div>
      </div>
    </template>
  </div>
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
  children: [Popup, Button],
  components: {
    'nut-popup': Popup,
    'nut-button': Button
  },
  props: {
    ...popupProps,
    iconItemList: {
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
  emits: ['update', 'update:visible', 'close'],
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

    const openPopover = () => {
      update(!props.visible);
    };

    const closePopover = (e) => {
      e.stopPropagation();
      emit('close');
      emit('update:visible', false);
    };

    return {
      classes,
      showPopup,
      openPopover,
      popoverContent,
      popoverArrow,
      closePopover
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
