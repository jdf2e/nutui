<template>
  <view :class="['nut-popover', `nut-popover--${theme}`, `${customClass}`]">
    <view class="nut-popover-wrapper" @click="openPopover" ref="popoverRef"><slot name="reference"></slot></view>

    <nut-popup
      :popClass="`nut-popover-content nut-popover-content--${location}`"
      :style="getStyles"
      v-model:visible="showPopup"
      position=""
      transition="nut-popover"
      :overlay="overlay"
      :duration="duration"
      :overlayStyle="overlayStyle"
      :overlayClass="overlayClass"
      :closeOnClickOverlay="closeOnClickOverlay"
    >
      <view ref="popoverContentRef" class="nut-popover-content-group">
        <view :class="popoverArrow" v-if="showArrow"> </view>
        <slot name="content"></slot>
        <view
          v-for="(item, index) in list"
          :key="index"
          :class="[item.className, item.disabled && 'nut-popover-menu-disabled', 'nut-popover-menu-item']"
          @click.stop="chooseItem(item, index)"
        >
          <slot v-if="item.icon">
            <nut-icon
              v-bind="$attrs"
              class="nut-popover-item-img"
              :classPrefix="iconPrefix"
              :name="item.icon"
            ></nut-icon
          ></slot>
          <view class="nut-popover-menu-item-name">{{ item.name }}</view>
        </view>
      </view>
    </nut-popup>
  </view>
</template>
<script lang="ts">
import { computed, watch, ref, PropType, CSSProperties, reactive } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { isArray } from '@/packages/utils/util';
const { create } = createComponent('popover');
export default create({
  components: {},
  props: {
    visible: { type: Boolean, default: false },
    list: { type: Array, default: [] },
    theme: { type: String as PropType<import('./type').PopoverTheme>, default: 'light' },
    location: { type: String as PropType<import('./type').PopoverLocation>, default: 'bottom' },
    offset: { type: Array, default: [0, 12] },
    customClass: { type: String, default: '' },
    showArrow: { type: Boolean, default: true },
    iconPrefix: { type: String, default: 'nut-icon' },
    duration: { type: [Number, String], default: 0.3 },
    overlay: { type: Boolean, default: false },
    overlayClass: { type: String, default: '' },
    overlayStyle: { type: Object as PropType<CSSProperties> },
    closeOnClickOverlay: { type: Boolean, default: true },
    closeOnClickAction: { type: Boolean, default: true },
    closeOnClickOutside: { type: Boolean, default: true }
  },
  emits: ['update', 'update:visible', 'close', 'choose', 'open'],
  setup(props, { emit }) {
    const popoverRef = ref();
    const popoverContentRef = ref();
    const showPopup = ref(props.visible);
    const state = reactive({
      rootWidth: 0,
      rootHeight: 0
    });

    const popoverArrow = computed(() => {
      const prefixCls = 'nut-popover-arrow';
      const loca = props.location;
      const direction = loca.split('-')[0];
      return `${prefixCls} ${prefixCls}-${direction} ${prefixCls}--${loca}`;
    });
    const getStyles = computed(() => {
      let cross = +state.rootHeight;
      let lengthways = +state.rootWidth;
      let { offset, location } = props;
      if (isArray(offset) && offset.length == 2) {
        cross += +offset[1];
        lengthways += +offset[1];
      }
      const direction = location.split('-')[0];
      const style: CSSProperties = {};
      const mapd: any = {
        top: 'bottom',
        bottom: 'top',
        left: 'right',
        right: 'left'
      };
      if (['top', 'bottom'].includes(direction)) {
        style[mapd[direction]] = `${cross}px`;
        style.marginLeft = `${offset[0]}px`;
      } else {
        style[mapd[direction]] = `${lengthways}px`;
        style.marginTop = `${offset[0]}px`;
      }
      return style;
    });
    // 获取宽度
    const getContentWidth = () => {
      const { offsetHeight, offsetWidth } = popoverRef.value;
      state.rootHeight = offsetHeight;
      state.rootWidth = offsetWidth;
    };
    watch(
      () => props.visible,
      (value) => {
        showPopup.value = value;
        if (value) {
          window.addEventListener('touchstart', clickAway, true);
          getContentWidth();
        } else {
          window.removeEventListener('touchstart', clickAway, true);
        }
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
      emit('update:visible', false);
      emit('close');
    };
    const chooseItem = (item: any, index: number) => {
      !item.disabled && emit('choose', item, index);
      if (props.closeOnClickAction) {
        closePopover();
      }
    };
    const clickAway = (event: Event) => {
      const element = popoverRef.value;
      const elContent = popoverContentRef.value;
      if (
        element &&
        !element.contains(event.target) &&
        elContent &&
        !elContent.contains(event.target) &&
        props.closeOnClickOutside
      ) {
        closePopover();
      }
    };

    return {
      showPopup,
      openPopover,
      popoverArrow,
      closePopover,
      chooseItem,
      popoverRef,
      getStyles,
      popoverContentRef
    };
  }
});
</script>
